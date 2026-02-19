import { Link } from "react-router-dom";
import { Check, Github, FileText, Award, ExternalLink } from "lucide-react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const footerLink = (isDarkMode: boolean) => cn(
  "text-sm transition-colors",
  isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black"
);

const Footer = () => {
  const { isDarkMode } = useTheme();
  const linkCn = footerLink(isDarkMode);

  return (
    <footer className={cn(
      "border-t transition-colors",
      isDarkMode
        ? "border-white/10 bg-black text-white"
        : "border-black/10 bg-white text-black"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Logo size="md" showText={true} className="mb-6" />
            <p className={cn(
              "mb-6 max-w-md",
              isDarkMode ? "text-white/50" : "text-black/50"
            )}>
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
                <Github className={cn(
                  "h-5 w-5 transition-colors",
                  isDarkMode ? "text-white/40 group-hover:text-white" : "text-black/40 group-hover:text-black"
                )} />
                <span className={cn(
                  "text-sm transition-colors",
                  isDarkMode ? "text-white/50 group-hover:text-white" : "text-black/50 group-hover:text-black"
                )}>Open Source</span>
              </a>
              <Link to="/research#papers" className="flex items-center space-x-2 group">
                <FileText className={cn(
                  "h-5 w-5 transition-colors",
                  isDarkMode ? "text-white/40 group-hover:text-white" : "text-black/40 group-hover:text-black"
                )} />
                <span className={cn(
                  "text-sm transition-colors",
                  isDarkMode ? "text-white/50 group-hover:text-white" : "text-black/50 group-hover:text-black"
                )}>130+ Papers</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo AI</a></li>
              <li><a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Bot</a></li>
              <li><a href="https://hanzo.ai/dev" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Dev</a></li>
              <li><a href="https://hanzo.team" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Team</a></li>
              <li><a href="https://hanzo.chat" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Chat</a></li>
              <li><Link to="/models" className={linkCn}>Zen Models</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Research</h4>
            <ul className="space-y-3">
              <li><Link to="/research#ai" className={linkCn}>AI & Machine Learning</Link></li>
              <li><Link to="/research#crypto" className={linkCn}>Cryptography</Link></li>
              <li><Link to="/research#consensus" className={linkCn}>Consensus & Networks</Link></li>
              <li><Link to="/research#papers" className={linkCn}>Papers</Link></li>
              <li><a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer" className={linkCn}>Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className={linkCn}>About Us</Link></li>
              <li><Link to="/team" className={linkCn}>Team</Link></li>
              <li><Link to="/careers" className={linkCn}>Careers</Link></li>
              <li><Link to="/press" className={linkCn}>Press</Link></li>
              <li><Link to="/contact" className={linkCn}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Powered by Zen banner */}
        <div className={cn(
          "mt-12 pt-8 border-t",
          isDarkMode ? "border-white/10" : "border-black/10"
        )}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <span className={cn("text-sm", isDarkMode ? "text-white/30" : "text-black/30")}>
              Powered by
            </span>
            <a
              href="https://hanzo.ai/zen"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border transition-colors",
                isDarkMode
                  ? "border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                  : "border-black/10 bg-black/5 hover:bg-black/10 text-black/70 hover:text-black"
              )}
            >
              <span className="text-amber-400 text-sm">&#9889;</span>
              <span className="text-sm font-medium">Zen 4 Models</span>
              <span className={cn("text-xs", isDarkMode ? "text-white/40" : "text-black/40")}>600M–1T+ params</span>
            </a>
          </div>
        </div>

        <div className={cn(
          "pt-6 border-t",
          isDarkMode ? "border-white/10" : "border-black/10"
        )}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>
                © 2016–2026 Hanzo AI Inc & Hanzo Industries Inc. All rights reserved.
              </div>
              <Link to="/status" className={cn(
                "inline-flex items-center space-x-2 text-sm transition-colors",
                isDarkMode ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black"
              )}>
                <Check className="h-4 w-4 text-green-500" />
                <span>All systems operational</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <ThemeSwitcher size="sm" />
              <div className="flex items-center space-x-2">
                <Award className={cn("h-4 w-4", isDarkMode ? "text-white/40" : "text-black/40")} />
                <span className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>Techstars '17</span>
              </div>
              <Link to="/privacy" className={linkCn}>Privacy Policy</Link>
              <Link to="/terms" className={linkCn}>Terms of Service</Link>
              <Link to="/security" className={linkCn}>Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
