import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Hanzo", "Industries"];
  const { isDarkMode } = useTheme();

  // Cycle through texts
  useEffect(() => {
    if (!showText) return;

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showText]);

  const sizes = {
    sm: { logo: "h-6 w-6", text: "text-lg" },
    md: { logo: "h-8 w-8", text: "text-xl" },
    lg: { logo: "h-10 w-10", text: "text-2xl" },
  };

  const gradientId = `logoGradient-${isDarkMode ? 'dark' : 'light'}`;

  return (
    <Link to="/" className={`flex items-center space-x-3 group ${className}`}>
      {/* Animated Logo SVG */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          className={`${sizes[size].logo} transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring with gradient */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Inner geometric shape - stylized H */}
          <motion.path
            d="M30 25L30 75M70 25L70 75M30 50L70 50"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Accent dots */}
          <motion.circle
            cx="50"
            cy="25"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
          />
          <motion.circle
            cx="50"
            cy="75"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          />

          {/* Gradient definition - theme aware */}
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDarkMode ? "#ffffff" : "#000000"} stopOpacity="0.8" />
              <stop offset="50%" stopColor={isDarkMode ? "#ffffff" : "#000000"} stopOpacity="0.4" />
              <stop offset="100%" stopColor={isDarkMode ? "#ffffff" : "#000000"} stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isDarkMode ? 'bg-white/10' : 'bg-black/10'
          }`}
        />
      </motion.div>

      {/* Animated Text */}
      {showText && (
        <div className="relative h-7 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`block font-semibold ${sizes[size].text} transition-colors duration-300 ${
                isDarkMode
                  ? 'text-white group-hover:text-white/90'
                  : 'text-black group-hover:text-black/90'
              }`}
            >
              {texts[textIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
    </Link>
  );
};

export default Logo;
