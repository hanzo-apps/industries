"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ArrowRight, Terminal, Brain, Bot, Database, Zap, Shield, Cloud,
  Code, Server, Globe, CreditCard, Users, FileText, Settings, ExternalLink,
  Command, Lock, BookOpen, Newspaper, Building, Network, Cpu,
} from "lucide-react";
import { cn } from '@hanzo/ui'

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon: React.ElementType;
  category: string;
  external?: boolean;
  keywords?: string[];
}

const commands: CommandItem[] = [
  { id: "zen", title: "ZEN", description: "AI orchestration platform", href: "/products/zen", icon: Brain, category: "Products", keywords: ["ai", "orchestration", "platform", "models"] },
  { id: "koan", title: "KOAN", description: "Enterprise knowledge management", href: "/products/koan", icon: Database, category: "Products", keywords: ["knowledge", "enterprise", "insights", "rag"] },
  { id: "hanzo-ai", title: "Hanzo AI", description: "Comprehensive AI platform", href: "/products/hanzo-ai", icon: Bot, category: "Products", keywords: ["ai", "models", "api", "llm"] },
  { id: "hanzo-dx", title: "Hanzo DX", description: "Developer experience platform", href: "/products/hanzo-dx", icon: Code, category: "Products", keywords: ["developer", "tools", "sdk"] },
  { id: "hanzo-ml", title: "Hanzo ML", description: "ML operations platform", href: "/products/hanzo-ml", icon: Cpu, category: "Products", keywords: ["mlops", "training", "deployment"] },
  { id: "hanzo-dev", title: "Hanzo Dev", description: "Accelerated development", href: "/products/hanzo-dev", icon: Terminal, category: "Products", keywords: ["code", "development", "ai"] },
  { id: "hanzo-team", title: "Hanzo Team", description: "Collaboration platform", href: "/products/hanzo-team", icon: Users, category: "Products", keywords: ["team", "collaboration", "project"] },
  { id: "hanzo-cloud", title: "Hanzo Cloud", description: "Private AI cloud infrastructure", href: "/products/hanzo-cloud", icon: Cloud, category: "Products", keywords: ["cloud", "infrastructure", "compute", "gpu"] },
  { id: "hanzo-bot", title: "Hanzo Bot", description: "Autonomous AI agent framework", href: "/products/hanzo-bot", icon: Bot, category: "Products", keywords: ["bot", "agent", "autonomous", "workforce"] },
  { id: "research", title: "Research", description: "AI research and publications", href: "/research", icon: FileText, category: "Platform", keywords: ["research", "papers", "publications"] },
  { id: "cryptography", title: "Cryptography", description: "Post-quantum cryptography", href: "/research#crypto", icon: Lock, category: "Platform", keywords: ["crypto", "quantum", "security"] },
  { id: "consensus", title: "Consensus", description: "Consensus protocols", href: "/research#consensus", icon: Network, category: "Platform", keywords: ["consensus", "blockchain", "protocols"] },
  { id: "cloud", title: "Hanzo Cloud", description: "Private AI compute", href: "/products/hanzo-cloud", icon: Cloud, category: "Platform", keywords: ["cloud", "compute", "gpu", "private"] },
  { id: "services", title: "Services", description: "Professional services", href: "/services", icon: Server, category: "Platform", keywords: ["consulting", "services", "professional"] },
  { id: "capabilities", title: "Capabilities", description: "AI capabilities overview", href: "/capabilities", icon: Zap, category: "Platform", keywords: ["capabilities", "features", "ai"] },
  { id: "docs", title: "Documentation", description: "API docs and guides", href: "https://docs.hanzo.ai", icon: FileText, category: "Resources", external: true, keywords: ["api", "guide", "tutorial"] },
  { id: "models", title: "AI Models", description: "Foundation models", href: "/models", icon: Brain, category: "Resources", keywords: ["models", "llm", "ai"] },
  { id: "case-studies", title: "Case Studies", description: "Success stories", href: "/case-studies", icon: BookOpen, category: "Resources", keywords: ["case", "study", "success"] },
  { id: "examples", title: "Examples", description: "Technical demonstrations", href: "/examples", icon: Code, category: "Resources", keywords: ["examples", "demo", "technical"] },
  { id: "pricing", title: "Pricing", description: "Plans and pricing", href: "/pricing", icon: CreditCard, category: "Resources", keywords: ["cost", "price", "plan"] },
  { id: "status", title: "Status", description: "System status", href: "/status", icon: Settings, category: "Resources", keywords: ["uptime", "health", "status"] },
  { id: "about", title: "About", description: "About Hanzo Industries", href: "/about", icon: Building, category: "Company", keywords: ["about", "company", "mission"] },
  { id: "team", title: "Team", description: "Meet the team", href: "/team", icon: Users, category: "Company", keywords: ["team", "people", "leadership"] },
  { id: "press", title: "Press", description: "News and media", href: "/press", icon: Newspaper, category: "Company", keywords: ["news", "press", "media"] },
  { id: "security", title: "Security", description: "Security practices", href: "/security", icon: Shield, category: "Company", keywords: ["compliance", "soc2", "security"] },
  { id: "contact", title: "Contact", description: "Get in touch", href: "/contact", icon: Users, category: "Company", keywords: ["support", "help", "contact"] },
  { id: "solutions", title: "Solutions", description: "Industry solutions", href: "/solutions", icon: Globe, category: "Company", keywords: ["solutions", "industries", "use cases"] },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const filteredCommands = search
    ? commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(search.toLowerCase()) ||
          cmd.description?.toLowerCase().includes(search.toLowerCase()) ||
          cmd.keywords?.some((k) => k.toLowerCase().includes(search.toLowerCase()))
      )
    : commands;

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  const flatCommands = Object.values(groupedCommands).flat();

  useEffect(() => { setSelectedIndex(0); }, [search]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % flatCommands.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + flatCommands.length) % flatCommands.length);
          break;
        case "Enter":
          e.preventDefault();
          if (flatCommands[selectedIndex]) {
            const cmd = flatCommands[selectedIndex];
            if (cmd.external) window.open(cmd.href, "_blank");
            else router.push(cmd.href);
            onClose();
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    },
    [flatCommands, selectedIndex, router, onClose]
  );

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.external) window.open(cmd.href, "_blank");
    else router.push(cmd.href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="hz-fixed hz-inset hz-bg-surface hz-glass hz-z-overlay"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="hz-center-x hz-fixed hz-mw-md hz-z-overlay"
          >
            <div className={cn(
              "hz-bordered hz-r-lg hz-shadow-lg hz-clip",
              "hz-bg-surface"
            )}>
              <div className={cn(
                "hz-row hz-ai-center hz-gap-3 hz-px-4 hz-py-3 hz-border-b",
                ""
              )}>
                <Search className={cn("hz-sq-3", "hz-fg")} />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, products, docs..."
                  className={cn(
                    "hz-grow hz-bg-none hz-t-sm",
                    "hz-fg"
                  )}
                />
                <kbd className={cn(
                  "hz-px-2 hz-py-1 hz-t-xs hz-mono hz-r-md",
                  "hz-bg-surface hz-fg"
                )}>
                  ESC
                </kbd>
              </div>

              <div className="hz-scroll-y hz-py-2">
                {Object.keys(groupedCommands).length === 0 ? (
                  <div className={cn(
                    "hz-px-4 hz-py-6 hz-align-center hz-t-sm",
                    "hz-fg"
                  )}>
                    No results found for "{search}"
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category}>
                      <div className={cn(
                        "hz-px-4 hz-py-2 hz-t-xs hz-w-semibold hz-upper hz-tracking-wide",
                        "hz-fg"
                      )}>
                        {category}
                      </div>
                      {items.map((cmd) => {
                        const Icon = cmd.icon;
                        const index = flatCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = index === selectedIndex;

                        return (
                          <button
                            key={cmd.id}
                            onClick={() => handleSelect(cmd)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={cn(
                              "hz-w-full hz-row hz-ai-center hz-gap-3 hz-px-4 hz-py-2 hz-align-left hz-transition",
                              isSelected
                                ? "hz-bg-surface hz-fg"
                                : "hz-fg hz-hoverable"
                            )}
                          >
                            <div className={cn(
                              "hz-sq-5 hz-r-lg hz-row hz-ai-center hz-jc-center",
                              isSelected
                                ? "hz-bg-surface"
                                : "hz-bg-surface"
                            )}>
                              <Icon className={cn(
                                "hz-sq-2",
                                isSelected
                                  ? "hz-fg"
                                  : "hz-fg"
                              )} />
                            </div>
                            <div className="hz-grow">
                              <div className="hz-row hz-ai-center hz-gap-2">
                                <span className="hz-t-sm hz-w-medium hz-truncate">{cmd.title}</span>
                                {cmd.external && (
                                  <ExternalLink className={cn(
                                    "hz-sq-1",
                                    "hz-fg"
                                  )} />
                                )}
                              </div>
                              {cmd.description && (
                                <div className={cn(
                                  "hz-t-xs hz-truncate",
                                  "hz-fg"
                                )}>
                                  {cmd.description}
                                </div>
                              )}
                            </div>
                            {isSelected && (
                              <ArrowRight className={cn(
                                "hz-sq-2",
                                "hz-fg"
                              )} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              <div className={cn(
                "hz-px-4 hz-py-2 hz-border-t hz-row hz-ai-center hz-jc-between",
                ""
              )}>
                <div className={cn(
                  "hz-row hz-ai-center hz-gap-4 hz-t-xs",
                  "hz-fg"
                )}>
                  <span className="hz-row hz-ai-center hz-gap-1">
                    <kbd className={cn("hz-px-2 hz-py-1 hz-r-md", "hz-bg-surface")}>up</kbd>
                    <kbd className={cn("hz-px-2 hz-py-1 hz-r-md", "hz-bg-surface")}>down</kbd>
                    Navigate
                  </span>
                  <span className="hz-row hz-ai-center hz-gap-1">
                    <kbd className={cn("hz-px-2 hz-py-1 hz-r-md", "hz-bg-surface")}>enter</kbd>
                    Select
                  </span>
                </div>
                <div className={cn(
                  "hz-row hz-ai-center hz-gap-1 hz-t-xs",
                  "hz-fg"
                )}>
                  <Command className="hz-sq-1" />
                  <span>K to toggle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
