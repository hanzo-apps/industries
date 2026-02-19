import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const CallToAction = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-16">
      {/* Stats bar */}
      <div className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl border",
        isDarkMode
          ? "border-white/10 bg-white/5"
          : "border-black/10 bg-black/5"
      )}>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", isDarkMode ? "text-white" : "text-black")}>
            2,500+
          </div>
          <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
            OSS Projects
          </div>
        </div>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", isDarkMode ? "text-white" : "text-black")}>
            130+
          </div>
          <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
            Research Papers
          </div>
        </div>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", isDarkMode ? "text-white" : "text-black")}>
            100+
          </div>
          <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
            AI Model Weights
          </div>
        </div>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", isDarkMode ? "text-white" : "text-black")}>
            $1B+
          </div>
          <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
            Client Revenue
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className={cn(
          "text-3xl font-bold mb-4",
          isDarkMode ? "text-white" : "text-black"
        )}>
          Build With Us
        </h2>
        <p className={cn(
          "mb-8 max-w-2xl mx-auto",
          isDarkMode ? "text-white/50" : "text-black/50"
        )}>
          We're hiring across engineering, research, and operations. Come build the future of AI.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/careers">
            <Button
              size="lg"
              className={cn(
                "rounded-full px-8",
                isDarkMode
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90"
              )}
            >
              View Open Roles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "rounded-full px-8",
                isDarkMode
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-black/20 text-black hover:bg-black/5"
              )}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
