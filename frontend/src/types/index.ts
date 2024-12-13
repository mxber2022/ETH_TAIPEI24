export interface WalletState {
  isConnected: boolean;
  address: string | null;
}

export interface Player {
  address: string;
  bestScore: number;
  gamesWon: number;
  lastPlayed: Date;
}

export interface GameState {
  guess: string;
  attempts: number;
  message: string;
  gameWon: boolean;
}