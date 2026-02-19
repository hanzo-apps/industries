
import { motion } from "framer-motion";
import { MessageSquare, Hash, Users, Search, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const TeamSlack = () => {
  const { isDarkMode } = useTheme();

  const channels = [
    "general", "design-ideas", "dev-chat", "marketing", "project-updates"
  ];

  const messages = [
    { user: "Dev", message: "Just pushed the new feature to staging", time: "10:30 AM" },
    { user: "Des", message: "The UI looks amazing! Great work team!", time: "10:31 AM" },
    { user: "Mark", message: "Engagement metrics are through the roof", time: "10:32 AM" },
    { user: "Vi", message: "Outstanding progress everyone!", time: "10:33 AM" }
  ];

  return (
    <div className="max-w-6xl mx-auto mb-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Watch Our Team in Action</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={cn(
          "rounded-xl border backdrop-blur-sm overflow-hidden",
          isDarkMode ? "border-white/10 bg-black/50" : "border-black/10 bg-white/50"
        )}
      >
        <div className="grid grid-cols-4">
          {/* Sidebar */}
          <div className={cn("col-span-1 border-r p-4", isDarkMode ? "border-white/10" : "border-black/10")}>
            <div className="flex items-center justify-between p-2 mb-4">
              <h3 className="text-purple-400 font-semibold">Hanzo Team</h3>
              <ChevronDown className={cn("w-4 h-4", isDarkMode ? "text-white/50" : "text-black/50")} />
            </div>
            <div className="space-y-2">
              {channels.map((channel) => (
                <motion.div
                  key={channel}
                  whileHover={{ x: 4 }}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded cursor-pointer",
                    isDarkMode ? "hover:bg-white/5" : "hover:bg-black/5"
                  )}
                >
                  <Hash className={cn("w-4 h-4", isDarkMode ? "text-white/50" : "text-black/50")} />
                  <span className={cn("text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>{channel}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-3 p-4">
            <div className={cn("flex items-center gap-4 p-4 border-b mb-4", isDarkMode ? "border-white/10" : "border-black/10")}>
              <Hash className={cn("w-5 h-5", isDarkMode ? "text-white/50" : "text-black/50")} />
              <span className={cn("font-medium", isDarkMode ? "text-white" : "text-black")}>general</span>
            </div>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white text-sm">
                    {msg.user[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={cn("font-medium", isDarkMode ? "text-white" : "text-black")}>{msg.user}</span>
                      <span className={cn("text-xs", isDarkMode ? "text-white/50" : "text-black/50")}>{msg.time}</span>
                    </div>
                    <p className={cn(isDarkMode ? "text-white/70" : "text-black/70")}>{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamSlack;
