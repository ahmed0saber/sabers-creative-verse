import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Loader2, MessageCircle } from 'lucide-react';
import { prepareAIContext, getSkillsAnswer, getProjectsAnswer, getExperienceAnswer, getEducationAnswer } from '@/utils/aiDataProcessor';
import { GoogleGenAI } from '@google/genai';

const initialMessage = 'Hi! I\'m Ahmed\'s AI assistant, powered by Gemma 3 27B. I can answer questions about Ahmed\'s skills, projects, experience, and more. Feel free to ask me anything!'

const parseAiError = (error: any) => {
  let resultError = error
  while (resultError?.error?.message) {
    resultError = JSON.parse(resultError.error.message)
  }

  return resultError
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIMode = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'assistant',
      content: initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPredefinedPrompts, setShowPredefinedPrompts] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);
  const contextRef = useRef<string>('');

  useEffect(() => {
    const aiContext = prepareAIContext();
    contextRef.current = aiContext;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
    if (apiKey) {
      aiRef.current = new GoogleGenAI({ apiKey });
    } else {
      console.warn('VITE_GEMINI_API_KEY is not set. Please add it to your .env file.');
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    setShowPredefinedPrompts(false);
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessageId = Date.now().toString();
    const assistantMessageId = (Date.now() + 1).toString();
    const userMessage: ChatMessage = {
      id: userMessageId,
      role: 'user',
      content: trimmedInput,
      timestamp: new Date(),
    };

    const initialAssistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, initialAssistantMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (!aiRef.current) throw new Error('GoogleGenAI is not initialized.');

      const contents = [
        {
          role: 'user',
          parts: [{ text: `System Instruction: You are Ahmed's AI assistant. Answer questions concisely based ONLY on this portfolio data, if you can't find the answer in the data, say that you can't answer this question and mention that you only answer questions about Ahmed's portfolio, and always answer in plain text without any markdown formatting:\n\n${contextRef.current}` }]
        },
        {
          role: 'user',
          parts: [{ text: trimmedInput }]
        }
      ];

      const model = 'gemma-3-27b-it';
      const responseStream = await aiRef.current.models.generateContentStream({
        model,
        contents: contents as any,
      });

      let fullResponse = '';
      for await (const chunk of responseStream) {
        if (chunk.text) {
          fullResponse += chunk.text;

          const messageElement = document.getElementById(`msg-${assistantMessageId}`);
          if (messageElement) {
            const messageContentElement = messageElement.querySelector('.message-content');
            if (messageContentElement) {
              messageContentElement.textContent += chunk.text;
            }
            if (fullResponse.trim() === chunk.text.trim() && fullResponse.trim() !== "") {
              messageElement.classList.remove('hidden');
            }
          }
        }
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: fullResponse.trim() }
            : msg
        )
      );
    } catch (error) {
      const errorObj = parseAiError(error)
      console.error('Error generating response:', errorObj);

      const errorMessage = 'Sorry, I encountered an error connecting to the AI model. You can try the predefined questions below.';
      const messageElement = document.getElementById(`msg-${assistantMessageId}`);
      if (messageElement) {
        const messageContentElement = messageElement.querySelector('.message-content');
        if (messageContentElement) {
          messageContentElement.textContent = errorMessage;
        }
        messageElement.classList.remove('hidden');
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: errorMessage }
            : msg
        )
      );
      setShowPredefinedPrompts(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePredefinedQuestion = async (questionText: string, getAnswerFn: () => string) => {
    setShowPredefinedPrompts(false);

    const userMessageId = Date.now().toString();
    const assistantMessageId = (Date.now() + 1).toString();

    const userMessage: ChatMessage = {
      id: userMessageId,
      role: 'user',
      content: questionText,
      timestamp: new Date(),
    };

    const initialAssistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, initialAssistantMessage]);
    setIsLoading(true);

    try {
      const answer = getAnswerFn();
      const chunks = answer.match(/.{1,3}/g) || [answer];
      let fullResponse = '';

      for (const chunk of chunks) {
        await new Promise(resolve => setTimeout(resolve, 15));
        fullResponse += chunk;

        const messageElement = document.getElementById(`msg-${assistantMessageId}`);
        if (messageElement) {
          const messageContentElement = messageElement.querySelector('.message-content') as HTMLElement | null;
          if (messageContentElement) {
            messageContentElement.innerHTML = fullResponse;
          }
          if (fullResponse.trim() !== "") {
            messageElement.classList.remove('hidden');
          }
        }
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: fullResponse.trim() }
            : msg
        )
      );
    } catch (error) {
      console.error("Error streaming predefined answer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[100svh] pt-16 flex flex-col bg-background">
      <div className="h-full flex-1 max-w-2xl mx-auto w-full flex flex-col p-4">
        <ScrollArea className="flex-1 mb-4 border rounded-lg p-4 bg-muted/30">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                id={`msg-${message.id}`}
                className={`flex ${message.content === '' ? 'hidden' : ''} ${message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground border border-border'
                    }`}
                >
                  <p className='text-sm whitespace-pre-wrap message-content'>
                    {message.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i !== message.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <p
                    className={`text-xs mt-2 ${message.role === 'user'
                      ? 'text-primary-foreground/70'
                      : 'text-muted-foreground'
                      }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground border border-border px-4 py-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <p className="text-sm">Thinking...</p>
                  </div>
                </div>
              </div>
            )}

            {showPredefinedPrompts && (
              <div className="flex flex-col gap-2 mt-4 items-start animate-in fade-in slide-in-from-bottom-2">
                <p className="text-sm text-muted-foreground ml-2">Here are some things you can ask me directly instead:</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => handlePredefinedQuestion("What are Ahmed's skills?", getSkillsAnswer)}>
                    Skills
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handlePredefinedQuestion("Can you list his projects?", getProjectsAnswer)}>
                    Projects
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handlePredefinedQuestion("Tell me about his work experience.", getExperienceAnswer)}>
                    Experience
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handlePredefinedQuestion("What is his educational background?", getEducationAnswer)}>
                    Education
                  </Button>
                </div>
              </div>
            )}

            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        <div className="border rounded-lg p-4 bg-muted/30 space-y-3">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask me about Ahmed's skills, projects, experience..."
              disabled={isLoading}
              className="w-0 flex-1 px-3 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Send</span>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span>Powered by Google Gen AI (Gemma 3 27B)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMode;
