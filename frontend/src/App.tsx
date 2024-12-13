import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Game from "./components/Game/Game";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import { useWallet } from "./hooks/useWallet";
import MyWasm from "./wasm/myWasm";

function App() {
  const { isConnected, address, connectWallet } = useWallet();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navigation
        isConnected={isConnected}
        address={address}
        connectWallet={connectWallet}
      />
      <Game isConnected={isConnected} />
      <Leaderboard />
      <MyWasm />
      <Footer />
    </div>
  );
}

export default App;
