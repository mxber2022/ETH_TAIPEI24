import React from 'react';

interface GameInputProps {
  guess: string;
  setGuess: (guess: string) => void;
  disabled: boolean;
}

export const GameInput: React.FC<GameInputProps> = ({ guess, setGuess, disabled }) => {
  return (
    <input
      type="number"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      placeholder="Enter your guess"
      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      disabled={disabled}
    />
  );
};

export default GameInput;