import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  image?: string;
  link?: string;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient, image, link }: TeamMemberCardProps) => {
  const { isDarkMode } = useTheme();
  const isHuman = !!image;

  // Generate social links from name for human members
  const slug = name.toLowerCase().replace(/\s+/g, "-");

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
          <div className={cn("inline-flex p-3 rounded-xl bg-gradient-to-br mb-4", gradient)}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        )}
        <h3 className={cn(
          "text-xl font-semibold mb-2 transition-colors",
          isDarkMode ? "text-white" : "text-black"
        )}>
          {name}
        </h3>
        <p className={cn(
          "font-medium mb-3 text-sm",
          isDarkMode ? "text-white/50" : "text-black/50"
        )}>
          {role}
        </p>
        <p className={cn(
          "mb-4 text-sm",
          isDarkMode ? "text-white/40" : "text-black/40"
        )}>
          {description}
        </p>
      </div>

      {isHuman ? (
        <div className="flex items-center gap-3 relative z-10">
          <a
            href={`https://linkedin.com/in/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg border transition-colors",
              isDarkMode
                ? "border-white/10 text-white/40 hover:text-white hover:bg-white/10"
                : "border-black/10 text-black/40 hover:text-black hover:bg-black/5"
            )}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`https://x.com/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg border transition-colors",
              isDarkMode
                ? "border-white/10 text-white/40 hover:text-white hover:bg-white/10"
                : "border-black/10 text-black/40 hover:text-black hover:bg-black/5"
            )}
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg border transition-colors",
              isDarkMode
                ? "border-white/10 text-white/40 hover:text-white hover:bg-white/10"
                : "border-black/10 text-black/40 hover:text-black hover:bg-black/5"
            )}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-2 relative z-10">
          <span className={cn(
            "text-xs font-mono px-2 py-1 rounded",
            isDarkMode ? "bg-white/10 text-white/40" : "bg-black/5 text-black/40"
          )}>
            AI Agent
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default TeamMemberCard;
