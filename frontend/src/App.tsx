import React from "react";
import Navigation from "./components/Navigation";
import { Hero } from "./components/Landing/Hero";
import Footer from "./components/Footer";
import Game from "./components/Game/Game";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import { useWallet } from "./hooks/useWallet";

function App() {
  const { isConnected, address, connectWallet } = useWallet();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navigation
        isConnected={isConnected}
        address={address}
        connectWallet={connectWallet}
      />
      <Hero isConnected={isConnected} connectWallet={connectWallet} />
      <Game isConnected={isConnected} />
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default App;
