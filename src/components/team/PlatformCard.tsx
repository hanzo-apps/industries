import { LucideIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const PlatformCard = ({ name, role, description, icon: Icon, gradient }: PlatformCardProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={cn(
      "relative group rounded-2xl border p-8 backdrop-blur-sm overflow-hidden",
      isDarkMode
        ? "border-white/10 bg-white/5"
        : "border-black/10 bg-white shadow-sm"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out" />
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className={cn(
        "text-xl font-semibold mb-2",
        isDarkMode ? "text-white" : "text-black"
      )}>
        {name}
      </h3>
      <p className={cn(
        "font-medium mb-3",
        isDarkMode ? "text-purple-400" : "text-purple-600"
      )}>
        {role}
      </p>
      <p className={isDarkMode ? "text-white/50" : "text-black/50"}>
        {description}
      </p>
    </div>
  );
};

export default PlatformCard;
