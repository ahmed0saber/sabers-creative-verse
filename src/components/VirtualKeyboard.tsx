import React from 'react';
import { Button } from '@/components/ui/button';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onClose: () => void;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ onKeyPress, onClose }) => {
  const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  const specialKeys = [
    { key: ' ', label: 'Space', width: 'w-32' },
    { key: 'Backspace', label: '⌫', width: 'w-16' },
    { key: 'Enter', label: '↵', width: 'w-16' },
  ];

  return (
    <div className="fixed bottom-0 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-green-900/95 border border-green-400 rounded-lg p-4 z-50 backdrop-blur-sm max-w-full w-full sm:w-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-green-400 font-mono text-sm">Virtual Keyboard</h3>
        <Button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 h-6"
        >
          ×
        </Button>
      </div>
      
      <div className="space-y-2">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-1">
            {row.map((key) => (
              <Button
                key={key}
                onClick={() => onKeyPress(key)}
                className="bg-green-700 hover:bg-green-600 text-green-100 text-xs px-2 py-1 h-8 w-8 font-mono"
              >
                {key}
              </Button>
            ))}
          </div>
        ))}
        
        <div className="flex justify-center space-x-1 mt-3">
          {specialKeys.map(({ key, label, width }) => (
            <Button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`bg-green-700 hover:bg-green-600 text-green-100 text-xs px-2 py-1 h-8 ${width} font-mono`}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;