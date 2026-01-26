import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const { isDarkMode } = useTheme();

  const sizes = {
    sm: { logo: "h-6 w-6", text: "text-lg" },
    md: { logo: "h-8 w-8", text: "text-xl" },
    lg: { logo: "h-10 w-10", text: "text-2xl" },
  };

  // Official Hanzo logo colors based on theme
  const fillColor = isDarkMode ? "#ffffff" : "#000000";
  const accentColor = isDarkMode ? "#DDDDDD" : "#666666";

  return (
    <Link to="/" className={`flex items-center space-x-3 group ${className}`}>
      {/* Official Hanzo Logo SVG */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          className={`${sizes[size].logo} transition-all duration-300`}
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bottom left square */}
          <motion.path
            d="M22.21 67V44.6369H0V67H22.21Z"
            fill={fillColor}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          {/* Bottom left accent */}
          <motion.path
            d="M0 44.6369L22.21 46.8285V44.6369H0Z"
            fill={accentColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          {/* Diagonal bar */}
          <motion.path
            d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z"
            fill={fillColor}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          />
          {/* Top left square */}
          <motion.path
            d="M22.21 0H0V22.3184H22.21V0Z"
            fill={fillColor}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          />
          {/* Top right square */}
          <motion.path
            d="M66.7198 0H44.5098V22.3184H66.7198V0Z"
            fill={fillColor}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          {/* Top right accent */}
          <motion.path
            d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z"
            fill={accentColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          />
          {/* Bottom right square */}
          <motion.path
            d="M66.7198 67V44.6369H44.5098V67H66.7198Z"
            fill={fillColor}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          />
        </svg>

        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isDarkMode ? 'bg-white/10' : 'bg-black/10'
          }`}
        />
      </motion.div>

      {/* Text */}
      {showText && (
        <span
          className={`font-semibold ${sizes[size].text} transition-colors duration-300 ${
            isDarkMode
              ? 'text-white group-hover:text-white/90'
              : 'text-black group-hover:text-black/90'
          }`}
        >
          Hanzo
        </span>
      )}
    </Link>
  );
};

export default Logo;
