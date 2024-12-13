import React, { useState, useCallback } from 'react';
import { Trophy, Sparkles } from 'lucide-react';
import { GameInput } from './GameInput';
import { GameMessage } from './GameMessage';
import { GameState } from '../../types';
import { generateRandomNumber, validateGuess } from '../../utils/gameLogic';
import { GAME_CONFIG } from './constants';

interface GameProps {
  isConnected: boolean;
}

export const Game: React.FC<GameProps> = ({ isConnected }) => {
  const [gameState, setGameState] = useState<GameState>({
    guess: '',
    attempts: 0,
    message: '',
    gameWon: false,
  });

  const [targetNumber] = useState(() => generateRandomNumber());

  const handleGuess = useCallback(() => {
    if (!isConnected) {
      setGameState(prev => ({ ...prev, message: GAME_CONFIG.MESSAGES.CONNECT_WALLET }));
      return;
    }

    const userGuess = parseInt(gameState.guess);
    const newAttempts = gameState.attempts + 1;
    const { message, isCorrect } = validateGuess(userGuess, targetNumber);

    setGameState({
      guess: '',
      attempts: newAttempts,
      message,
      gameWon: isCorrect,
    });
  }, [isConnected, gameState.guess, gameState.attempts, targetNumber]);

  return (
    <div id="game" className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4 min-h-[calc(100vh-4rem)]">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Sparkles className="h-12 w-12 text-indigo-500 absolute -top-6 -right-6 animate-pulse" />
              <h2 className="font-display text-5xl tracking-extra-tight heading-gradient">
                ZK Guess
              </h2>
            </div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed text-balance">
            Try to guess the number between {GAME_CONFIG.MIN_NUMBER} and {GAME_CONFIG.MAX_NUMBER}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4 bg-gray-700/30 p-4 rounded-lg">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <span className="text-gray-300 text-xl font-display tracking-tighter">
              Attempts: {gameState.attempts}
            </span>
          </div>

          <GameInput
            guess={gameState.guess}
            setGuess={(value) => setGameState(prev => ({ ...prev, guess: value }))}
            disabled={gameState.gameWon}
          />

          <button
            onClick={handleGuess}
            disabled={gameState.gameWon || !gameState.guess}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg font-medium tracking-tight"
          >
            Submit Guess
          </button>

          <GameMessage
            message={gameState.message}
            isSuccess={gameState.gameWon}
          />
        </div>

        {gameState.gameWon && (
          <div className="text-center pt-4 border-t border-gray-700">
            <button
              onClick={() => window.location.reload()}
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium tracking-tight"
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