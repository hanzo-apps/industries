import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const CallToAction = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-16 text-center">
      <h2 className={cn(
        "text-3xl font-bold mb-4",
        isDarkMode ? "text-white" : "text-black"
      )}>
        Ready to Get Started?
      </h2>
      <p className={cn(
        "mb-8 max-w-2xl mx-auto",
        isDarkMode ? "text-white/50" : "text-black/50"
      )}>
        Join our community of innovators and start building with your AI team today.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          size="lg"
          className={cn(
            "rounded-full px-8",
            isDarkMode
              ? "bg-white text-black hover:bg-white/90"
              : "bg-black text-white hover:bg-black/90"
          )}
          onClick={() => window.open('https://hanzo.chat', '_blank')}
        >
          Try Hanzo Chat
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className={cn(
            "rounded-full px-8",
            isDarkMode
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-black/20 text-black hover:bg-black/5"
          )}
          onClick={() => window.open('https://hanzo.bot', '_blank')}
        >
          Try Hanzo Bot
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
