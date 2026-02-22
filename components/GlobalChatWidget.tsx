"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Code,
  BookOpen,
  Search,
  PenLine,
  Minimize2,
  Maximize2,
  ChevronDown,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Theme-aware accent — no red branding

// Available Zen models for the dropdown
const zenModels = [
  { id: "zen-eco", name: "Zen Eco", params: "4B", description: "Fast general-purpose" },
  { id: "zen-omni", name: "Zen Omni", params: "8B", description: "Multimodal vision + audio" },
  { id: "zen-director", name: "Zen Director", params: "31B MoE", description: "Orchestration + planning" },
  { id: "zen-3d", name: "Zen 3D", params: "72B", description: "3D generation + spatial AI" },
];

// Chat action presets - matching footer order
const chatPresets = [
  { icon: PenLine, label: "Write", prompt: "Help me write " },
  { icon: BookOpen, label: "Learn", prompt: "Explain how " },
  { icon: Code, label: "Code", prompt: "Help me write code for " },
  { icon: Search, label: "Search", prompt: "Find information about " },
];

// Page context mapping for Hanzo Industries
const getPageContext = (pathname: string): string => {
  const contexts: Record<string, string> = {
    "/": "Hanzo Industries homepage - Frontier AI research lab",
    "/about": "About Hanzo Industries - Company overview and mission",
    "/team": "Hanzo Industries Team - Meet our leadership and experts",
    "/research": "Research - AI research and publications (58 papers)",
    "/research#ai": "AI & Machine Learning Research",
    "/research#crypto": "Post-Quantum Cryptography Research",
    "/research#consensus": "Consensus Protocols Research",
    "/services": "Services - Professional services and consulting",
    "/capabilities": "Capabilities - AI capabilities overview",
    "/capabilities/decentralized-ai": "Decentralized AI - Distributed AI systems",
    "/solutions": "Solutions - Industry solutions and use cases",
    "/pricing": "Pricing - Plans and enterprise pricing",
    "/case-studies": "Research Impact - Success stories and implementations",
    "/examples": "Examples - Technical demonstrations",
    "/press": "Press - News and media coverage",
    "/models": "Zen Models - Foundation models (600M–1T+ parameters)",
    "/ai-models": "Zen Models - Foundation models and capabilities",
    "/security": "Security - Security practices and compliance",
    "/status": "Status - System status and uptime",
    "/contact": "Contact - Get in touch with our team",
    "/products/zen": "ZEN - Advanced AI orchestration platform",
    "/products/koan": "KOAN - Enterprise knowledge management",
    "/products/hanzo-ai": "Hanzo AI - Comprehensive AI platform",
    "/products/hanzo-dx": "Hanzo DX - Developer experience platform",
    "/products/hanzo-ml": "Hanzo ML - Machine learning operations",
    "/products/hanzo-dev": "Hanzo Dev - Accelerated development environment",
    "/products/hanzo-team": "Hanzo Team - Collaboration platform",
    "/products/lux": "Lux Network - Decentralized AI compute",
    "/products/zoo": "Zoo Gym - AI training infrastructure",
  };

  // Check for partial matches
  for (const [path, context] of Object.entries(contexts)) {
    if (pathname.startsWith(path) && path !== "/") {
      return context;
    }
  }

  return contexts[pathname] || `Hanzo Industries page: ${pathname}`;
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function GlobalChatWidget() {
  const pathname = usePathname();
const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(zenModels[0]);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modelDropdownRef = useRef<HTMLDivElement>(null);

  const pageContext = getPageContext(pathname);

  // Close model dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modelDropdownRef.current && !modelDropdownRef.current.contains(event.target as Node)) {
        setIsModelDropdownOpen(false);
      }
    };

    if (isModelDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModelDropdownOpen]);

  // Listen for events from footer chat widget
  useEffect(() => {
    const handleOpenChat = (event: CustomEvent) => {
      setIsOpen(true);

      // If there's a message from footer, set it as input
      if (event.detail?.message) {
        setInput(event.detail.message);
        // Optionally auto-submit
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }

      // If there's an action (Write, Learn, Code), set the appropriate prompt
      if (event.detail?.action) {
        const preset = chatPresets.find(p => p.label === event.detail.action);
        if (preset) {
          setInput(preset.prompt);
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }
    };

    window.addEventListener('openGlobalChat', handleOpenChat as EventListener);
    return () => window.removeEventListener('openGlobalChat', handleOpenChat as EventListener);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Add welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: `Hi! I'm here to help you with anything related to Hanzo Industries. You're currently viewing ${pageContext}. How can I assist you today?`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, pageContext]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call Hanzo AI API with selected Zen model
      const response = await fetch("https://api.hanzo.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer hz_widget_public",
        },
        body: JSON.stringify({
          model: selectedModel.id,
          messages: [
            {
              role: "system",
              content: `You are Zen AI, powered by the ${selectedModel.name} model (${selectedModel.params}). You're helping users on the Hanzo Industries website, a frontier AI research lab focused on AI, cryptography, consensus protocols, and distributed systems. Current page context: ${pageContext}. Be helpful, concise, and knowledgeable about Hanzo's research (58 papers), Zen models (600M–1T+ params), post-quantum cryptography, and AI products. For pricing or sales inquiries, direct users to /pricing or /contact.`,
            },
            ...messages.slice(-10).map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: input.trim() },
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.choices[0].message.content,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Fallback for API errors
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `I'm having trouble connecting to the AI service right now. You can explore our documentation at [docs.hanzo.ai](https://docs.hanzo.ai), try the full chat at [hanzo.chat](https://hanzo.chat), or contact our team at [/contact](/contact).`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      // Fallback for network errors
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I'm experiencing connectivity issues. Please try [hanzo.chat](https://hanzo.chat) for the full AI experience, or visit [docs.hanzo.ai](https://docs.hanzo.ai) for documentation.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, pageContext, messages, selectedModel]);

  const handlePreset = (preset: typeof chatPresets[0]) => {
    setInput(preset.prompt);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-black border border-white/10"
          >
            <img src="/zen-logo.png" alt="Zen AI" className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed z-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col border",
              "bg-black border-white/10",
              isExpanded
                ? "inset-4 md:inset-8"
                : "bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[80vh]"
            )}
          >
            {/* Header */}
            <div className={cn("flex items-center justify-between px-4 py-3 border-b", "border-white/10")}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black border border-white/20 overflow-hidden">
                  <img src="/zen-logo.png" alt="Zen AI" className="w-5 h-5" />
                </div>
                {/* Model selector dropdown */}
                <div className="relative" ref={modelDropdownRef}>
                  <button
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors",
                      "hover:bg-white/10"
                    )}
                  >
                    <div className="text-left">
                      <div className={cn("text-sm font-medium flex items-center gap-1.5", "text-white")}>
                        {selectedModel.name}
                        <span className={cn(
                          "text-[10px] font-mono px-1 py-0.5 rounded",
                          "text-white/40 bg-white/10"
                        )}>
                          {selectedModel.params}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={cn(
                      "w-3.5 h-3.5 transition-transform",
                      "text-white/40",
                      isModelDropdownOpen && "rotate-180"
                    )} />
                  </button>

                  {/* Model dropdown menu */}
                  <AnimatePresence>
                    {isModelDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className={cn(
                          "absolute left-0 top-full mt-1 w-56 border rounded-lg shadow-xl overflow-hidden z-10",
                          "bg-white/5 border-white/10"
                        )}
                        style={{ backgroundColor: "rgb(23,23,23)" }}
                      >
                        {zenModels.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelDropdownOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-2 text-left transition-colors",
                              "hover:bg-white/10",
                              selectedModel.id === model.id && ("bg-white/5")
                            )}
                          >
                            <div>
                              <div className={cn("text-sm flex items-center gap-2", "text-white")}>
                                {model.name}
                                <span className={cn("text-[10px] font-mono", "text-white/40")}>{model.params}</span>
                              </div>
                              <div className={cn("text-[10px]", "text-white/40")}>{model.description}</div>
                            </div>
                            {selectedModel.id === model.id && (
                              <Check className="w-4 h-4 text-white/70" />
                            )}
                          </button>
                        ))}
                        <div className={cn("border-t px-3 py-2", "border-white/10")}>
                          <a
                            href="/models"
                            className={cn(
                              "text-xs transition-colors",
                              "text-white/40 hover:text-white"
                            )}
                          >
                            View all models
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={cn(
                    "p-1.5 rounded-md transition-colors",
                    "text-white/40 hover:text-white hover:bg-white/10"
                  )}
                >
                  {isExpanded ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "p-1.5 rounded-md transition-colors",
                    "text-white/40 hover:text-white hover:bg-white/10"
                  )}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] px-3 py-2 rounded-2xl text-sm",
                      message.role === "user"
                        ? cn("rounded-br-md", "bg-white text-black")
                        : cn(
                            "rounded-bl-md",
                            "bg-white/10 text-white/80"
                          )
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={cn("px-4 py-2 rounded-2xl rounded-bl-md", "bg-white/10")}>
                    <div className="flex gap-1">
                      <span className={cn("w-2 h-2 rounded-full animate-bounce", "bg-white/40")} style={{ animationDelay: "0ms" }} />
                      <span className={cn("w-2 h-2 rounded-full animate-bounce", "bg-white/40")} style={{ animationDelay: "150ms" }} />
                      <span className={cn("w-2 h-2 rounded-full animate-bounce", "bg-white/40")} style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Preset buttons */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {chatPresets.map((preset) => {
                    const Icon = preset.icon;
                    return (
                      <button
                        key={preset.label}
                        onClick={() => handlePreset(preset)}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors",
                          "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <Icon className="w-3 h-3" />
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className={cn("p-3 border-t", "border-white/10")}>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything..."
                  className={cn(
                    "w-full rounded-full px-4 py-2.5 pr-12 text-sm focus:outline-none transition-colors border",
                    "bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-white/20"
                  )}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-50",
                    input.trim()
                      ? ("bg-white")
                      : "bg-transparent"
                  )}
                >
                  <Send className={cn("w-4 h-4", input.trim() ? ("text-black") : ("text-white/40"))} />
                </button>
              </div>
              <div className="mt-2 text-center">
                <span className={cn("text-[10px]", "text-white/30")}>
                  Press Enter to send | <kbd className={cn("px-1 py-0.5 rounded", "bg-white/10 text-white/40")}>Cmd+K</kbd> for quick navigation
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
