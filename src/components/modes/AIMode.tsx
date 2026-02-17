import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Loader2, MessageCircle, RotateCcw } from 'lucide-react';
import { prepareAIContext } from '@/utils/aiDataProcessor';
import Footer from '../layout/Footer';
import { pipeline } from '@huggingface/transformers';

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
      content: 'Hi! I\'m Ahmed\'s AI assistant. I can answer questions about Ahmed\'s skills, projects, experience, and more. Feel free to ask me anything!',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<any>(null);
  const contextRef = useRef<string>('');

  // Initialize AI model
  useEffect(() => {
    const initializeAI = async () => {
      try {
        console.log('Initializing transformers.js model...');
        setModelLoading(true);

        // Load the question-answering model from Hugging Face
        console.log('Loading DistilBERT model for question-answering...');
        const answerer = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad');
        modelRef.current = answerer;
        console.log('✓ Model loaded successfully');

        // Prepare context from portfolio data
        const aiContext = prepareAIContext();
        console.log(aiContext.fullContext)
        contextRef.current = aiContext.fullContext;
        console.log('✓ Context prepared');

        setModelReady(true);
      } catch (error) {
        console.error('Error initializing model:', error);
        // Still set ready to allow fallback responses
        setModelReady(true);
      } finally {
        setModelLoading(false);
      }
    };

    initializeAI();
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    // const aiContext = prepareAIContext();

    try {
      // Try to use the transformers.js pipeline if model is loaded
      if (modelRef.current && contextRef.current) {
        try {
          console.log('Finding answer with transformers.js...');
          const result = await modelRef.current(userMessage, contextRef.current);

          if (result && result.answer) {
            const confidence = (result.score * 100).toFixed(1);
            return `Based on Ahmed's portfolio:\n\n"${result.answer}"\n\nConfidence: ${confidence}%`;
          }
        } catch (error) {
          console.warn('Model error, using fallback:', error);
        }
      }

      // Fallback: Keyword-based response routing
      // const lowerMessage = userMessage.toLowerCase();

      // if (
      //   lowerMessage.includes('skill') ||
      //   lowerMessage.includes('technology') ||
      //   lowerMessage.includes('tech') ||
      //   lowerMessage.includes('know') ||
      //   lowerMessage.includes('expertise')
      // ) {
      //   return `Based on Ahmed's profile:\n\n${aiContext.skills}\n\nIs there any specific technology or skill you'd like to know more about?`;
      // }

      // if (
      //   lowerMessage.includes('project') ||
      //   lowerMessage.includes('build') ||
      //   lowerMessage.includes('created') ||
      //   lowerMessage.includes('work')
      // ) {
      //   return `Ahmed has worked on several interesting projects:\n\n${aiContext.projects}\n\nWould you like to know more about any specific project?`;
      // }

      // if (
      //   lowerMessage.includes('experience') ||
      //   lowerMessage.includes('job') ||
      //   lowerMessage.includes('professional')
      // ) {
      //   return `Here's Ahmed's professional experience:\n\n${aiContext.experience}\n\nWould you like more details?`;
      // }

      // if (
      //   lowerMessage.includes('education') ||
      //   lowerMessage.includes('study') ||
      //   lowerMessage.includes('degree') ||
      //   lowerMessage.includes('university') ||
      //   lowerMessage.includes('school')
      // ) {
      //   return `Ahmed's educational background:\n\n${aiContext.education}\n\nAny other questions?`;
      // }

      // if (
      //   lowerMessage.includes('article') ||
      //   lowerMessage.includes('write') ||
      //   lowerMessage.includes('blog') ||
      //   lowerMessage.includes('publication') ||
      //   lowerMessage.includes('published')
      // ) {
      //   return `Ahmed has published several articles:\n\n${aiContext.articles}\n\nWould you like to read any of them?`;
      // }

      // if (
      //   lowerMessage.includes('youtube') ||
      //   lowerMessage.includes('video') ||
      //   lowerMessage.includes('channel')
      // ) {
      //   return `Check out Ahmed's YouTube content:\n\n${aiContext.youtube}\n\nFeel free to subscribe!`;
      // }

      // if (
      //   lowerMessage.includes('contact') ||
      //   lowerMessage.includes('connect') ||
      //   lowerMessage.includes('reach') ||
      //   lowerMessage.includes('social') ||
      //   lowerMessage.includes('linkedin') ||
      //   lowerMessage.includes('github')
      // ) {
      //   return `You can connect with Ahmed on:\n\n${aiContext.social}\n\nFeel free to reach out!`;
      // }

      // if (
      //   lowerMessage.includes('open source') ||
      //   lowerMessage.includes('opensource') ||
      //   lowerMessage.includes('contribute') ||
      //   lowerMessage.includes('contribution')
      // ) {
      //   return `Ahmed is involved in open source:\n\n${aiContext.openSource}\n\nWould you like to collaborate?`;
      // }

      // if (
      //   lowerMessage.includes('hello') ||
      //   lowerMessage.includes('hi') ||
      //   lowerMessage.includes('hey') ||
      //   (lowerMessage.includes('what') && lowerMessage.includes('you'))
      // ) {
      //   return `Hello! I'm Ahmed's portfolio AI assistant. I can help answer questions about his:\n- Technical skills and expertise\n- Projects and portfolio work\n- Professional experience\n- Education\n- Articles and publications\n- YouTube content\n- Social media profiles\n\nWhat would you like to know?`;
      // }

      // if (lowerMessage.includes('about')) {
      //   return `${aiContext.aboutMe}\n\nAhmed is passionate about teaching, mentoring, and creating content. Feel free to ask me anything about his background or work!`;
      // }

      // Default response
      return `I can help you learn about Ahmed's:\n- Skills and technologies\n- Projects and portfolio\n- Professional experience\n- Education and background\n- Articles and publications\n- YouTube content\n- How to contact him\n\nWhat would you like to know?`;
    } catch (error) {
      console.error('Error generating response:', error);
      return 'Sorry, I encountered an error while processing your question. Please try again.';
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !modelReady) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const assistantResponse = await generateResponse(userInput);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetConversation = () => {
    setMessages([
      {
        id: '0',
        role: 'assistant',
        content: 'Hi! I\'m Ahmed\'s AI assistant. I can answer questions about Ahmed\'s skills, projects, experience, and more. Feel free to ask me anything!',
        timestamp: new Date(),
      },
    ]);
    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="pt-16 flex-1 flex flex-col">
        <div className="flex-1 max-w-2xl mx-auto w-full flex flex-col px-4 py-8">
          {/* Model Loading State */}
          {modelLoading && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Loading transformers.js Model...</p>
                <p className="text-sm text-muted-foreground mt-2">This may take a moment on first load</p>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {!modelLoading && (
            <ScrollArea className="flex-1 mb-4 border rounded-lg p-4 bg-muted/30">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground border border-border'
                        }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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

                <div ref={scrollRef} />
              </div>
            </ScrollArea>
          )}

          {/* Input Area */}
          {!modelLoading && (
            <div className="border rounded-lg p-4 bg-muted/30 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ask me about Ahmed's skills, projects, experience..."
                  disabled={isLoading || !modelReady}
                  className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !modelReady || !input.trim()}
                  className="gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send
                </Button>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <span>One chat instance - powered by transformers.js with intelligent fallback</span>
              </div>

              {modelReady && (
                <Button
                  onClick={resetConversation}
                  variant="ghost"
                  size="sm"
                  className="gap-1"
                >
                  <RotateCcw className="h-3 w-3" />
                  New Conversation
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIMode;
