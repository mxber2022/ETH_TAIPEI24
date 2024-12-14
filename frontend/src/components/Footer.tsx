import { Heart, Twitter, MessageCircle, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              About ZK Guess
            </h3>
            <p className="text-gray-400 text-sm text-center md:text-left">
              A decentralized number guessing game powered by zero-knowledge
              proofs and blockchain technology.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                How to Play
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Made with</span>
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-gray-400">by MX</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            © 2024 ZK Guess. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
