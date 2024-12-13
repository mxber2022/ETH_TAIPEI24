import { GAME_CONFIG } from '../components/Game/constants';

export const generateRandomNumber = (min: number = GAME_CONFIG.MIN_NUMBER, max: number = GAME_CONFIG.MAX_NUMBER): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const validateGuess = (guess: number, target: number): {
  message: string;
  isCorrect: boolean;
} => {
  if (guess === target) {
    return {
      message: GAME_CONFIG.MESSAGES.CONGRATULATIONS,
      isCorrect: true,
    };
  }
  
  return {
    message: guess < target ? GAME_CONFIG.MESSAGES.TOO_LOW : GAME_CONFIG.MESSAGES.TOO_HIGH,
    isCorrect: false,
  };
};