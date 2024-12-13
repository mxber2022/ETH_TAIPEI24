import { useState, useEffect, useCallback } from 'react';
import { WalletState } from '../types';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
      on: (event: string, handler: (accounts: string[]) => void) => void;
    };
  }
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
  });

  const handleAccountsChanged = useCallback((accounts: string[]) => {
    setWalletState({
      address: accounts[0] || null,
      isConnected: accounts.length > 0,
    });
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        handleAccountsChanged(accounts);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask to play!');
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      return () => {
        // Clean up event listener
        window.ethereum.on('accountsChanged', handleAccountsChanged);
      };
    }
  }, [handleAccountsChanged]);

  return { ...walletState, connectWallet };
};