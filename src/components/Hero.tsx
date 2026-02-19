import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Bot } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={cn(
      "relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 transition-colors duration-300",
      isDarkMode ? "bg-black" : "bg-white"
    )}>
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div
          className={cn("absolute inset-0", isDarkMode ? "opacity-[0.03]" : "opacity-[0.05]")}
          style={{
            backgroundImage: isDarkMode
              ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
              : `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
        <div className={cn(
          "absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]",
          isDarkMode ? "bg-white/5" : "bg-black/[0.02]"
        )} />
        <div className={cn(
          "absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]",
          isDarkMode ? "bg-white/[0.03]" : "bg-black/[0.015]"
        )} />
        <div className={cn(
          "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent",
          isDarkMode ? "via-white/10" : "via-black/10"
        )} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Featured announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border",
              isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
            )}
          >
            <Sparkles className={cn("w-4 h-4", isDarkMode ? "text-white/50" : "text-black/50")} />
            <span className={cn("text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>
              Hanzo L1 now available for enterprise deployment
            </span>
            <Link to="/research" className={cn(
              "text-sm font-medium flex items-center gap-1 hover:underline",
              isDarkMode ? "text-white" : "text-black"
            )}>
              Learn more <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]",
              isDarkMode ? "text-white" : "text-black"
            )}
          >
            AI research and products
            <br />
            <span className={isDarkMode ? "text-white/40" : "text-black/40"}>
              that put safety at the frontier
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "mt-8 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed",
              isDarkMode ? "text-white/60" : "text-black/60"
            )}
          >
            Hanzo builds frontier AI systems with a focus on safety, interpretability,
            and alignment. We develop foundation models and deploy them through secure,
            decentralized infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/research">
              <Button
                size="lg"
                className={cn(
                  "w-full sm:w-auto text-base px-8 h-12 rounded-full transition-colors",
                  isDarkMode
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-black/90"
                )}
              >
                Explore Our Research
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  "w-full sm:w-auto text-base px-8 h-12 rounded-full transition-colors",
                  isDarkMode
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-black/30 text-black hover:bg-black/10"
                )}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Try Hanzo AI
              </Button>
            </a>
            <a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  "w-full sm:w-auto text-base px-8 h-12 rounded-full transition-colors",
                  isDarkMode
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-black/30 text-black hover:bg-black/10"
                )}
              >
                <Bot className="w-4 h-4 mr-2" />
                Deploy AI Team
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn(
            "mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-12",
            isDarkMode ? "border-white/10" : "border-black/10"
          )}
        >
          <div className="text-center">
            <div className={cn("text-2xl sm:text-3xl font-bold", isDarkMode ? "text-white" : "text-black")}>
              Techstars '17
            </div>
            <div className={cn("text-sm mt-1", isDarkMode ? "text-white/50" : "text-black/50")}>
              Backed Company
            </div>
          </div>
          <div className="text-center">
            <div className={cn("text-2xl sm:text-3xl font-bold", isDarkMode ? "text-white" : "text-black")}>
              130+
            </div>
            <div className={cn("text-sm mt-1", isDarkMode ? "text-white/50" : "text-black/50")}>
              Research Papers
            </div>
          </div>
          <div className="text-center">
            <div className={cn("text-2xl sm:text-3xl font-bold", isDarkMode ? "text-white" : "text-black")}>
              2,500+
            </div>
            <div className={cn("text-sm mt-1", isDarkMode ? "text-white/50" : "text-black/50")}>
              OSS Projects
            </div>
          </div>
          <div className="text-center">
            <div className={cn("text-2xl sm:text-3xl font-bold", isDarkMode ? "text-white" : "text-black")}>
              Safety First
            </div>
            <div className={cn("text-sm mt-1", isDarkMode ? "text-white/50" : "text-black/50")}>
              Aligned AI Systems
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
