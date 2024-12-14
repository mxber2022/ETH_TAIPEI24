# ZK Guess 🎮

A blockchain-powered number guessing game powered by ZKWasm where players can test their intuition and compete globally on the leaderboard.

## ✨ Features

- **Web3 Integration**: Seamless connection with MetaMask wallet
- **Intuitive Gameplay**: Simple yet engaging number guessing mechanics
- **Global Leaderboard**: Compete with players worldwide
- **ENS Support (D3)**: Full integration with Ethereum Name Service for player identification using D3
- **Responsive Design**: Beautiful UI that works across all devices
- **Dark Mode**: Easy on the eyes with a sleek dark theme

## zkWasm

```bash
https://explorer.zkwasmhub.com/image/EC84C955A138231FFE1AB5681DCF28C6
```

## 🚀 Quick Start

1. Clone the repository:

```bash
git clone https://github.com/mxber2022/ETH_TAIPEI24
cd ETH_TAIPEI24
```

2. Install dependencies:

```bash
yarn
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Web3**: MetaMask Integration
- **Name Resolution**: DNS Connect + ENS
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Game/          # Game-related components
│   ├── Landing/       # Landing page components
│   └── Leaderboard/   # Leaderboard components
├── hooks/             # Custom React hooks
├── services/          # External service integrations
│   └── dns/          # DNS and ENS integration
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🎮 How to Play

1. Connect your MetaMask wallet
2. Try to guess a number between 1 and 100
3. Get feedback after each guess
4. Try to win in as few attempts as possible
5. Compete for the top spot on the leaderboard

## 🔧 Configuration

The game can be configured through environment variables:

```env
VITE_MIN_NUMBER=1
VITE_MAX_NUMBER=100
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [DNS Connect](https://github.com/webinterop/dns-connect) for ENS integration

## 📧 Contact

For questions and support, please open an issue or reach out to the maintainers.

---

Made with ❤️ by MX
