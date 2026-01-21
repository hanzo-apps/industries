import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
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

const BRAND_COLOR = "#e11633";

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
    "/": "Hanzo Industries homepage - Defense and government AI solutions",
    "/about": "About Hanzo Industries - Company overview and mission",
    "/team": "Hanzo Industries Team - Meet our leadership and experts",
    "/defense": "Defense Solutions - AI for defense and national security",
    "/intelligence": "Intelligence Solutions - AI-powered intelligence analysis",
    "/cybersecurity": "Cybersecurity Solutions - Advanced threat detection and response",
    "/cloud": "Secure Cloud - FedRAMP and government cloud infrastructure",
    "/services": "Services - Professional services and consulting",
    "/capabilities": "Capabilities - AI capabilities overview",
    "/capabilities/decentralized-ai": "Decentralized AI - Distributed AI systems",
    "/solutions": "Solutions - Industry solutions and use cases",
    "/industries/aerospace": "Aerospace Industry - AI for aerospace applications",
    "/industries/defense": "Defense Industry - AI for defense contractors",
    "/pricing": "Pricing - Plans and enterprise pricing",
    "/case-studies": "Case Studies - Success stories and implementations",
    "/examples": "Examples - Technical demonstrations",
    "/research": "Research - AI research and publications",
    "/press": "Press - News and media coverage",
    "/models": "AI Models - Foundation models and capabilities",
    "/ai-models": "AI Models - Foundation models and capabilities",
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

const GlobalChatWidget = () => {
  const location = useLocation();
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

  const pageContext = getPageContext(location.pathname);

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
              content: `You are Zen AI, powered by the ${selectedModel.name} model (${selectedModel.params}). You're helping users on the Hanzo Industries website, which focuses on defense, government, and enterprise AI solutions. Current page context: ${pageContext}. Be helpful, concise, and knowledgeable about Hanzo's products, defense capabilities, secure cloud infrastructure, and AI solutions for government and enterprise. For pricing or sales inquiries, direct users to /pricing or /contact.`,
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
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-black border border-neutral-800"
          >
            <img src="/zen-logo.png" alt="Zen AI" className="w-8 h-8" />
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: BRAND_COLOR }} />
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
            className={`fixed z-50 bg-black border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col ${
              isExpanded
                ? "inset-4 md:inset-8"
                : "bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[80vh]"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black border border-neutral-700">
                  <img src="/zen-logo.png" alt="Zen AI" className="w-5 h-5" />
                </div>
                {/* Model selector dropdown */}
                <div className="relative" ref={modelDropdownRef}>
                  <button
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className="flex items-center gap-1.5 hover:bg-neutral-800/50 rounded-md px-2 py-1 transition-colors"
                  >
                    <div className="text-left">
                      <div className="text-white text-sm font-medium flex items-center gap-1.5">
                        {selectedModel.name}
                        <span className="text-[10px] font-mono text-neutral-500 bg-neutral-800 px-1 py-0.5 rounded">
                          {selectedModel.params}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-neutral-500 transition-transform ${isModelDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Model dropdown menu */}
                  <AnimatePresence>
                    {isModelDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute left-0 top-full mt-1 w-56 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl overflow-hidden z-10"
                      >
                        {zenModels.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-neutral-800 transition-colors ${
                              selectedModel.id === model.id ? 'bg-neutral-800/50' : ''
                            }`}
                          >
                            <div>
                              <div className="text-sm text-white flex items-center gap-2">
                                {model.name}
                                <span className="text-[10px] font-mono text-neutral-500">{model.params}</span>
                              </div>
                              <div className="text-[10px] text-neutral-500">{model.description}</div>
                            </div>
                            {selectedModel.id === model.id && (
                              <Check className="w-4 h-4 text-green-500" />
                            )}
                          </button>
                        ))}
                        <div className="border-t border-neutral-800 px-3 py-2">
                          <a
                            href="/models"
                            className="text-xs text-neutral-500 hover:text-white transition-colors"
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
                  className="p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  {isExpanded ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
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
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                      message.role === "user"
                        ? "bg-[#fd4444] text-white rounded-br-md"
                        : "bg-neutral-800 text-neutral-200 rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-800 px-4 py-2 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium hover:bg-neutral-800 hover:text-white transition-colors"
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
            <div className="p-3 border-t border-neutral-800">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2.5 pr-12 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-50"
                  style={{ backgroundColor: input.trim() ? BRAND_COLOR : "transparent" }}
                >
                  <Send className={`w-4 h-4 ${input.trim() ? "text-white" : "text-neutral-500"}`} />
                </button>
              </div>
              <div className="mt-2 text-center">
                <span className="text-neutral-600 text-[10px]">
                  Press Enter to send | <kbd className="px-1 py-0.5 bg-neutral-800 rounded text-neutral-500">Cmd+K</kbd> for quick navigation
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalChatWidget;
