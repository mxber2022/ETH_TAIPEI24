import React from "react";
import { Sparkles, Gamepad2, Trophy, Users } from "lucide-react";

interface HeroProps {
  isConnected: boolean;
  connectWallet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isConnected, connectWallet }) => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619963258837-b83f3406b9a5?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center bg-no-repeat opacity-10"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Sparkles className="h-16 w-16 text-indigo-500 absolute -top-8 -right-8 animate-pulse" />
              <Gamepad2 className="h-24 w-24 text-indigo-500" />
            </div>
          </div>

          <h1 className="text-4xl font-display tracking-extra-tight text-white sm:text-6xl mb-6 heading-gradient">
            Welcome to ZK Guess
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300 text-balance">
            Test your intuition and compete with players worldwide in this
            blockchain-powered number guessing game. Connect your wallet, make
            your guess, and climb the leaderboard!
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            {!isConnected ? (
              <button
                onClick={connectWallet}
                className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all transform hover:scale-105"
              >
                Connect Wallet to Play
              </button>
            ) : (
              <a
                href="#game"
                className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all transform hover:scale-105"
              >
                Start Playing Now
              </a>
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <dt className="text-xl font-display text-white mb-2">
                Simple to Play
              </dt>
              <dd className="text-base leading-7 text-gray-400 text-center">
                Guess a number between 1 and 100. Get feedback after each guess
                to help you find the target.
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <dt className="text-xl font-display text-white mb-2">
                Compete & Win
              </dt>
              <dd className="text-base leading-7 text-gray-400 text-center">
                Climb the leaderboard by winning games with fewer attempts. Show
                off your skills!
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                <Users className="h-8 w-8 text-white" />
              </div>
              <dt className="text-xl font-display text-white mb-2">
                Global Community
              </dt>
              <dd className="text-base leading-7 text-gray-400 text-center">
                Join players from around the world and compete for the top spots
                on the leaderboard.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
