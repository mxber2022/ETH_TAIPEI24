import React from 'react';
import { AlertCircle } from 'lucide-react';

interface GameMessageProps {
  message: string;
  isSuccess: boolean;
}

export const GameMessage: React.FC<GameMessageProps> = ({ message, isSuccess }) => {
  if (!message) return null;

  return (
    <div className={`flex items-center justify-center space-x-2 ${isSuccess ? 'text-green-500' : 'text-yellow-500'}`}>
      <AlertCircle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};

export default GameMessage;