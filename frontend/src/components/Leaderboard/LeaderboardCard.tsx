import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import { Player } from '../../types';

interface LeaderboardCardProps {
  player: Player;
  rank: number;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ player, rank }) => {
  const getRankIcon = () => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center space-x-4">
        {getRankIcon()}
        <div>
          <p className="text-white font-medium">{player.address.slice(0, 6)}...{player.address.slice(-4)}</p>
          <p className="text-gray-400 text-sm">Games Won: {player.gamesWon}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-indigo-400 font-bold">Best: {player.bestScore} attempts</p>
        <p className="text-gray-500 text-sm">
          {new Date(player.lastPlayed).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default LeaderboardCard;