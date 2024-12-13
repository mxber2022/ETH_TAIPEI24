import React, { useState } from 'react';
import { Menu, Home, Github, Gamepad2, Trophy, X } from 'lucide-react';

export const Navigation: React.FC<{
  isConnected: boolean;
  address: string | null;
  connectWallet: () => void;
}> = ({ isConnected, address, connectWallet }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Gamepad2 className="h-8 w-8 text-indigo-500" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <span className="font-display text-2xl tracking-tighter text-white">ZK Guess</span>
                <a href="#game" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-tight flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Play</span>
                </a>
                <a href="#leaderboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-tight flex items-center space-x-2">
                  <Trophy className="h-4 w-4" />
                  <span>Leaderboard</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <button
              onClick={connectWallet}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 text-sm font-medium tracking-tight"
            >
              <span>{isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#game" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium tracking-tight">Play</a>
            <a href="#leaderboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium tracking-tight">Leaderboard</a>
            <div className="px-3 py-2">
              <button
                onClick={connectWallet}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium tracking-tight"
              >
                {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;