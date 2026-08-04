"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, MessageSquare, Rocket } from "lucide-react";
import { cn } from '@hanzo/ui'

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  link?: string;
  emoji?: string;
  botId?: string;
}

export default function TeamMemberCard({ name, role, description, icon: Icon, image, link, emoji, botId }: TeamMemberCardProps) {
  const isHuman = !!image;

  // Generate social links from name for human members
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "hz-rel hz-r-xl hz-bordered hz-p-6 hz-glass hz-clip",
        "hz-bg-surface"
      )}
    >
      <div className="hz-abs hz-inset hz-invisible hz-transition hz-z-behind" />
      <div className="hz-mb-4 hz-rel hz-z-raised">
        {image ? (
          <div className={cn(
            "hz-sq-8 hz-r-full hz-clip hz-ring hz-mb-4",
            "hz-bg-surface"
          )}>
            <img
              src={image}
              alt={name}
              className="hz-w-full hz-h-full hz-object-cover"
            />
          </div>
        ) : emoji ? (
          <div className="hz-mb-4 hz-t-5xl hz-leading-none">
            {emoji}
          </div>
        ) : (
          <div className="hz-inline hz-p-3 hz-r-lg hz-mb-4 hz-bg-surface">
            <Icon className="hz-sq-4 hz-fg" />
          </div>
        )}
        <h3 className={cn(
          "hz-t-xl hz-w-semibold hz-mb-2 hz-transition",
          "hz-fg"
        )}>
          {name}
        </h3>
        <p className={cn(
          "hz-w-medium hz-mb-3 hz-t-sm",
          "hz-fg"
        )}>
          {role}
        </p>
        <p className={cn(
          "hz-mb-4 hz-t-sm",
          "hz-fg"
        )}>
          {description}
        </p>
      </div>

      {isHuman ? (
        <div className="hz-row hz-ai-center hz-gap-3 hz-rel hz-z-raised">
          <a
            href={`https://linkedin.com/in/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hz-p-2 hz-r-lg hz-bordered hz-transition",
              "hz-fg hz-hoverable"
            )}
          >
            <Linkedin className="hz-sq-2" />
          </a>
          <a
            href={`https://x.com/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hz-p-2 hz-r-lg hz-bordered hz-transition",
              "hz-fg hz-hoverable"
            )}
          >
            <Twitter className="hz-sq-2" />
          </a>
          <a
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hz-p-2 hz-r-lg hz-bordered hz-transition",
              "hz-fg hz-hoverable"
            )}
          >
            <Github className="hz-sq-2" />
          </a>
        </div>
      ) : (
        <div className="hz-row hz-ai-center hz-gap-3 hz-rel hz-z-raised">
          <a
            href={botId ? `https://app.hanzo.bot/${botId}` : "https://app.hanzo.bot"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hz-p-2 hz-r-lg hz-bordered hz-transition",
              "hz-fg hz-hoverable"
            )}
            title="Launch"
          >
            <Rocket className="hz-sq-2" />
          </a>
          <a
            href="https://hanzo.chat"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hz-p-2 hz-r-lg hz-bordered hz-transition",
              "hz-fg hz-hoverable"
            )}
            title="Chat"
          >
            <MessageSquare className="hz-sq-2" />
          </a>
          <a
            href="https://github.com/hanzoai/bot"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hz-p-2 hz-r-lg hz-bordered hz-transition",
              "hz-fg hz-hoverable"
            )}
            title="GitHub"
          >
            <Github className="hz-sq-2" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
