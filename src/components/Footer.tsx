
import { Check, Shield, Lock, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/hanzo-logo.png" 
                alt="Hanzo Industries" 
                className="h-10 w-auto"
              />
              <span className="text-white font-bold text-xl">Hanzo Industries</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Delivering mission-critical defense and intelligence solutions through 
              advanced AI, secure cloud infrastructure, and innovative engineering.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-400">Security Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-400">Compliance Ready</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="/defense" className="text-gray-400 hover:text-white text-sm">Defense Systems</a></li>
              <li><a href="/intelligence" className="text-gray-400 hover:text-white text-sm">Intelligence Analysis</a></li>
              <li><a href="/cybersecurity" className="text-gray-400 hover:text-white text-sm">Cybersecurity</a></li>
              <li><a href="/cloud" className="text-gray-400 hover:text-white text-sm">Secure Cloud</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white text-sm">News</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <div className="text-gray-500 text-sm">
                © 2025 Hanzo Industries Inc. All rights reserved.
              </div>
              <a href="/status" className="inline-flex items-center space-x-2 text-gray-500 hover:text-white text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>All systems operational</span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">Techstars Backed</span>
              </div>
              <a href="/privacy" className="text-gray-500 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/security" className="text-gray-500 hover:text-white text-sm">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
