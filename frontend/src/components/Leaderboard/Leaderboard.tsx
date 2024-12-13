import React from 'react';
import { ChevronDown, Trophy } from 'lucide-react';
import LeaderboardCard from './LeaderboardCard';
import { Player } from '../../types';

export const Leaderboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const players: Player[] = [
    {
      address: '0x1234567890abcdef',
      bestScore: 3,
      gamesWon: 15,
      lastPlayed: new Date(),
    },
    {
      address: '0xabcdef1234567890',
      bestScore: 4,
      gamesWon: 12,
      lastPlayed: new Date(),
    },
    {
      address: '0x9876543210fedcba',
      bestScore: 5,
      gamesWon: 10,
      lastPlayed: new Date(),
    },
  ];

  return (
    <div id="leaderboard" className="w-full max-w-2xl mx-auto py-12 px-4">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-white group"
          >
            <div className="flex items-center space-x-3">
              <Trophy className="h-7 w-7 text-yellow-500" />
              <span className="font-display text-3xl tracking-tighter">Leaderboard</span>
            </div>
            <ChevronDown 
              className={`h-6 w-6 transform transition-transform group-hover:text-indigo-500 ${
                isExpanded ? 'rotate-180' : ''
              }`} 
            />
          </button>
        </div>
        
        {isExpanded && (
          <div className="border-t border-gray-700">
            <div className="p-4 space-y-3">
              {players.map((player, index) => (
                <LeaderboardCard
                  key={player.address}
                  player={player}
                  rank={index + 1}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;