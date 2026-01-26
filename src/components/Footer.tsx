import { Link } from "react-router-dom";
import { Check, Github, FileText, Award } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`border-t transition-colors ${
      isDarkMode
        ? 'border-white/10 bg-black text-white'
        : 'border-black/10 bg-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo size="md" showText={true} className="mb-6" />
            <p className={`mb-6 max-w-md ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Frontier AI research lab advancing the state of the art in machine learning,
              cryptography, consensus protocols, and distributed systems.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 group"
              >
                <Github className={`h-5 w-5 ${isDarkMode ? 'text-neutral-500 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'} transition-colors`} />
                <span className={`text-sm ${isDarkMode ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'} transition-colors`}>Open Source</span>
              </a>
              <Link to="/research#papers" className="flex items-center space-x-2 group">
                <FileText className={`h-5 w-5 ${isDarkMode ? 'text-neutral-500 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'} transition-colors`} />
                <span className={`text-sm ${isDarkMode ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'} transition-colors`}>58 Papers</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Research</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/research#ai" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/research#crypto" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  Cryptography
                </Link>
              </li>
              <li>
                <Link to="/research#consensus" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  Consensus & Networks
                </Link>
              </li>
              <li>
                <Link to="/models" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  Zen Models
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>
                © 2025 Hanzo Industries Inc. All rights reserved.
              </div>
              <Link to="/status" className={`inline-flex items-center space-x-2 text-sm transition-colors ${isDarkMode ? 'text-neutral-500 hover:text-white' : 'text-neutral-500 hover:text-black'}`}>
                <Check className="h-4 w-4 text-green-500" />
                <span>All systems operational</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center space-x-2">
                <Award className={`h-4 w-4 ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`} />
                <span className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>Techstars '17</span>
              </div>
              <Link to="/privacy" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-500 hover:text-white' : 'text-neutral-500 hover:text-black'}`}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-500 hover:text-white' : 'text-neutral-500 hover:text-black'}`}>
                Terms of Service
              </Link>
              <Link to="/security" className={`text-sm transition-colors ${isDarkMode ? 'text-neutral-500 hover:text-white' : 'text-neutral-500 hover:text-black'}`}>
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
