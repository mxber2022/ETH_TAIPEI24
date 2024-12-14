import React, { useState } from "react";
import { Menu, Home, Github, Gamepad2, Trophy, X } from "lucide-react";

import { DNSConnect } from "@webinterop/dns-connect";
import { ENSModule } from "@webinterop/dns-connect-ens";
import { mainnet } from "viem/chains";
import { http } from "viem";
import { useEffect } from "react";

export const Navigation: React.FC<{
  isConnected: boolean;
  address: string | null;
  connectWallet: () => void;
}> = ({ isConnected, address, connectWallet }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [walletName, setWalletName] = useState<string | null>(null);

  useEffect(() => {
    if (isConnected && address) {
      const dnsConnect = new DNSConnect({
        modules: [
          new ENSModule({
            chain: mainnet,
            transport: http(
              "https://eth-mainnet.g.alchemy.com/v2/kaFl069xyvy3np41aiUXwjULZrF67--t"
            ),
          }),
        ],
      });
      console.log("address: ", address);
      const resolveENS = async () => {
        try {
          const resolvedAddress = await dnsConnect.reverseResolve(
            "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
            "ETH"
          );
          setWalletName(resolvedAddress);
          console.log("resolvedAddress: ", resolvedAddress);
        } catch (error) {
          console.error("Error resolving ENS name:", error);
        }
      };

      resolveENS();
    }
  }, [isConnected, address]);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Gamepad2 className="h-8 w-8 text-indigo-500" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <span className="font-display text-2xl tracking-tighter text-white">
                  ZK Guess
                </span>
                <a
                  href="#game"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-tight flex items-center space-x-2"
                >
                  <Home className="h-4 w-4" />
                  <span>Play</span>
                </a>
                <a
                  href="#leaderboard"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-tight flex items-center space-x-2"
                >
                  <Trophy className="h-4 w-4" />
                  <span>Leaderboard</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center section - zkWasm branding */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm font-medium">
                Powered by
              </span>
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-display font-bold">
                zkWasm
              </span>
            </div>
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <button
              onClick={connectWallet}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-[1.02] flex items-center space-x-2 text-sm font-medium tracking-tight"
            >
              <span>{walletName ? `${walletName}` : ""}</span>

              <span>
                {isConnected
                  ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                  : "Connect Wallet"}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm shadow-lg border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2 text-center">
              <span className="text-gray-400 text-sm">Powered by </span>
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-display font-bold">
                zkWasm
              </span>
            </div>
            <a
              href="#game"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium tracking-tight"
            >
              Play
            </a>
            <a
              href="#leaderboard"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium tracking-tight"
            >
              Leaderboard
            </a>
            <div className="px-3 py-2">
              <button
                onClick={connectWallet}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium tracking-tight"
              >
                {isConnected ? `` : ""}
                {isConnected
                  ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                  : "Connect Wallet"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
