import React, { useState, useEffect } from 'react';
import { Trophy, AlertCircle } from 'lucide-react';

const Game = ({ isConnected }: { isConnected: boolean }) => {
  const [guess, setGuess] = useState('');
  const [targetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const handleGuess = () => {
    if (!isConnected) {
      setMessage('Please connect your wallet first!');
      return;
    }

    const userGuess = parseInt(guess);
    setAttempts(prev => prev + 1);

    if (userGuess === targetNumber) {
      setMessage('🎉 Congratulations! You got it!');
      setGameWon(true);
    } else if (userGuess < targetNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
    setGuess('');
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-900 p-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-500 mb-2">Guess the Number</h2>
          <p className="text-gray-400">Try to guess the number between 1 and 100</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <span className="text-gray-300">Attempts: {attempts}</span>
          </div>

          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={gameWon}
          />

          <button
            onClick={handleGuess}
            disabled={gameWon || !guess}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Guess
          </button>

          {message && (
            <div className={`flex items-center justify-center space-x-2 ${gameWon ? 'text-green-500' : 'text-yellow-500'}`}>
              <AlertCircle className="h-5 w-5" />
              <p>{message}</p>
            </div>
          )}
        </div>

        {gameWon && (
          <div className="text-center">
            <button
              onClick={() => window.location.reload()}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;