import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeSwitcherProps {
  className?: string;
  size?: "sm" | "default";
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = "",
  size = "default"
}) => {
  const { mode, setMode, isDarkMode } = useTheme();

  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const buttonSize = size === "sm" ? "h-6 w-6" : "h-8 w-8";

  const modes = [
    { value: 'light', icon: Sun, label: 'Light mode' },
    { value: 'dark', icon: Moon, label: 'Dark mode' },
    { value: 'system', icon: Monitor, label: 'System preference' },
  ] as const;

  return (
    <div className={`flex items-center gap-1 p-1 rounded-full border ${
      isDarkMode
        ? 'bg-white/5 border-white/10'
        : 'bg-black/5 border-black/10'
    } ${className}`}>
      {modes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setMode(value)}
          aria-label={label}
          className={`relative ${buttonSize} flex items-center justify-center rounded-full transition-colors ${
            mode === value
              ? isDarkMode
                ? 'text-[#fd4444]'
                : 'text-[#fd4444]'
              : isDarkMode
                ? 'text-white/50 hover:text-white/80'
                : 'text-black/50 hover:text-black/80'
          }`}
        >
          {mode === value && (
            <motion.div
              layoutId="theme-indicator"
              className={`absolute inset-0 rounded-full ${
                isDarkMode ? 'bg-white/10' : 'bg-black/10'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <Icon className={`relative z-10 ${iconSize}`} />
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
