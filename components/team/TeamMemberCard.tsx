"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, MessageSquare, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  image?: string;
  link?: string;
  emoji?: string;
  botId?: string;
}

export default function TeamMemberCard({ name, role, description, icon: Icon, gradient, image, link, emoji, botId }: TeamMemberCardProps) {
  const isHuman = !!image;

  // Generate social links from name for human members
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative group rounded-2xl border p-8 backdrop-blur-sm overflow-hidden",
        "border-border bg-foreground/5"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out -z-10" />
      <div className="block mb-4 relative z-10">
        {image ? (
          <div className={cn(
            "w-16 h-16 rounded-full overflow-hidden ring-2 mb-4",
            "ring-ring bg-card"
          )}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        ) : emoji ? (
          <div className="mb-4 text-5xl leading-none">
            {emoji}
          </div>
        ) : (
          <div className={cn("inline-flex p-3 rounded-xl bg-gradient-to-br mb-4", gradient)}>
            <Icon className="h-6 w-6 text-foreground" />
          </div>
        )}
        <h3 className={cn(
          "text-xl font-semibold mb-2 transition-colors",
          "text-foreground"
        )}>
          {name}
        </h3>
        <p className={cn(
          "font-medium mb-3 text-sm",
          "text-muted-foreground"
        )}>
          {role}
        </p>
        <p className={cn(
          "mb-4 text-sm",
          "text-muted-foreground"
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
              "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
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
              "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
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
              "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-3 relative z-10">
          <a
            href={botId ? `https://app.hanzo.bot/${botId}` : "https://app.hanzo.bot"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg border transition-colors",
              "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
            title="Launch"
          >
            <Rocket className="h-4 w-4" />
          </a>
          <a
            href="https://hanzo.chat"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg border transition-colors",
              "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
            title="Chat"
          >
            <MessageSquare className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/hanzoai/bot"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg border transition-colors",
              "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
