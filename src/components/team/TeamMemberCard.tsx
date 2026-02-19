import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  image?: string;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient, image }: TeamMemberCardProps) => {
  const memberRoute = name.toLowerCase();
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative group rounded-2xl border p-8 backdrop-blur-sm overflow-hidden",
        isDarkMode
          ? "border-white/10 bg-white/5"
          : "border-black/10 bg-white shadow-sm"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out -z-10" />
      <div className="block mb-4 relative z-10">
        {image ? (
          <div className={cn(
            "w-16 h-16 rounded-full overflow-hidden ring-2 mb-4",
            isDarkMode
              ? "ring-white/20 bg-neutral-800"
              : "ring-black/10 bg-neutral-100"
          )}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        )}
        <h3 className={cn(
          "text-xl font-semibold mb-2 transition-colors",
          isDarkMode ? "text-white hover:text-purple-400" : "text-black hover:text-purple-600"
        )}>
          {name}
        </h3>
        <p className={cn(
          "font-medium mb-3",
          isDarkMode ? "text-purple-400" : "text-purple-600"
        )}>
          {role}
        </p>
        <p className={cn(
          "mb-4",
          isDarkMode ? "text-white/50" : "text-black/50"
        )}>
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 relative z-10">
        <a
          href={`https://hanzo.ai/bot/${memberRoute}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "w-full",
              isDarkMode
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-black/20 text-black hover:bg-black/5"
            )}
          >
            Deploy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>

        <a
          href="https://github.com/hanzoai/bot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "w-full",
              isDarkMode
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-black/20 text-black hover:bg-black/5"
            )}
          >
            Fork
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
