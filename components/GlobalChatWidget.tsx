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
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const API_URL = "https://api.hanzo.ai";
const API_KEY = process.env.NEXT_PUBLIC_LLM_API_KEY ?? "";
const IAM_AUTHORIZE_URL = "https://hanzo.id/login/oauth/authorize";
const IAM_CLIENT_ID = "hanzo-app-client-id";
const AUTH_TOKEN_KEY = "hanzo_auth_token";
const CHAT_COUNT_KEY = "hanzo_chat_count";
const FREE_MESSAGE_LIMIT = 1;

interface ZenModel {
  id: string;
  name: string;
  description: string;
  params: string;
  tier: "free" | "pro";
}

const freeModels: ZenModel[] = [
  { id: "qwen3-32b", name: "Zen", description: "Fast & capable", params: "32B", tier: "free" },
];

const premiumModels: ZenModel[] = [
  { id: "zen4-pro", name: "Zen4 Pro", description: "80B MoE flagship", params: "80B MoE", tier: "pro" },
  { id: "zen4", name: "Zen4", description: "744B MoE frontier", params: "744B MoE", tier: "pro" },
  { id: "zen4-mini", name: "Zen4 Mini", description: "Fast 8B", params: "8B", tier: "pro" },
  { id: "zen4-coder", name: "Zen4 Coder", description: "Code specialist", params: "480B MoE", tier: "pro" },
  { id: "zen4-ultra", name: "Zen4 Ultra", description: "Deep reasoning", params: "744B MoE+CoT", tier: "pro" },
];

const chatPresets = [
  { icon: PenLine, label: "Write", prompt: "Help me write " },
  { icon: BookOpen, label: "Learn", prompt: "Explain how " },
  { icon: Code, label: "Code", prompt: "Help me write code for " },
  { icon: Search, label: "Search", prompt: "Find information about " },
];

// ---------------------------------------------------------------------------
// Page context
// ---------------------------------------------------------------------------

const getPageContext = (pathname: string): string => {
  const contexts: Record<string, string> = {
    "/": "Hanzo Industries homepage - Frontier AI research lab",
    "/about": "About Hanzo Industries - Company overview and mission",
    "/team": "Hanzo Industries Team - Meet our leadership and experts",
    "/research": "Research - AI research and publications (130+ papers)",
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
    "/models": "Zen Models - Foundation models (600M-1T+ parameters)",
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

  for (const [path, context] of Object.entries(contexts)) {
    if (pathname.startsWith(path) && path !== "/") {
      return context;
    }
  }

  return contexts[pathname] || `Hanzo Industries page: ${pathname}`;
};

// ---------------------------------------------------------------------------
// Demo mode fallback responses
// ---------------------------------------------------------------------------

const demoResponses: Record<string, string> = {
  default:
    "Hanzo Industries builds full-stack private AI infrastructure. Our Zen model family spans 600M to 1T+ parameters across text, vision, video, audio, 3D, code, and agents. Visit [/models](/models) for the full catalog or [/contact](/contact) to talk to our team.",
  models:
    "The Zen model family includes:\n\n- **Zen4** (744B MoE) - Our frontier model\n- **Zen4 Pro** (80B MoE) - High-performance flagship\n- **Zen4 Ultra** (744B MoE+CoT) - Deep reasoning\n- **Zen4 Coder** (480B MoE) - Code specialist\n- **Zen4 Mini** (8B) - Fast and efficient\n\nAll models are available via the Hanzo AI platform. See [/models](/models) for details.",
  pricing:
    "For pricing information, visit [/pricing](/pricing) or schedule a call with our team at [/contact](/contact). We offer flexible plans for startups, enterprises, and government.",
  research:
    "Hanzo has published 130+ research papers across AI, cryptography, and consensus protocols. Browse our research at [/research](/research).",
  code:
    "Hanzo offers developer tools including:\n\n- **LLM Gateway** - Unified proxy for 100+ AI providers\n- **Zen Models API** - Direct access to our model family\n- **MCP Tools** - 260+ Model Context Protocol integrations\n- **SDKs** - Python, TypeScript, Go, Rust\n\nCheck out [docs.hanzo.ai](https://docs.hanzo.ai) for documentation.",
};

function getDemoResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (lower.includes("model") || lower.includes("zen")) return demoResponses.models;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("plan")) return demoResponses.pricing;
  if (lower.includes("research") || lower.includes("paper")) return demoResponses.research;
  if (lower.includes("code") || lower.includes("sdk") || lower.includes("api") || lower.includes("developer"))
    return demoResponses.code;
  return demoResponses.default;
}

// ---------------------------------------------------------------------------
// Simple markdown renderer (no external deps)
// ---------------------------------------------------------------------------

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const result: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.trimStart().startsWith("```")) {
      const lang = line.trimStart().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      result.push(
        <pre
          key={key++}
          className="my-2 rounded-lg bg-white/5 border border-white/10 p-3 overflow-x-auto text-xs font-mono leading-relaxed"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      result.push(<div key={key++} className="h-2" />);
      i++;
      continue;
    }

    // Unordered list item
    if (/^\s*[-*]\s+/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        const content = lines[i].replace(/^\s*[-*]\s+/, "");
        items.push(
          <li key={key++} className="ml-4 list-disc">
            {renderInline(content)}
          </li>
        );
        i++;
      }
      result.push(
        <ul key={key++} className="my-1 space-y-0.5">
          {items}
        </ul>
      );
      continue;
    }

    // Ordered list item
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        const content = lines[i].replace(/^\s*\d+\.\s+/, "");
        items.push(
          <li key={key++} className="ml-4 list-decimal">
            {renderInline(content)}
          </li>
        );
        i++;
      }
      result.push(
        <ol key={key++} className="my-1 space-y-0.5">
          {items}
        </ol>
      );
      continue;
    }

    // Heading
    const headingMatch = line.match(/^(#{1,3})\s+(.*)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const cls =
        level === 1
          ? "text-base font-bold mt-3 mb-1"
          : level === 2
          ? "text-sm font-semibold mt-2 mb-1"
          : "text-sm font-medium mt-2 mb-0.5";
      result.push(
        <div key={key++} className={cls}>
          {renderInline(text)}
        </div>
      );
      i++;
      continue;
    }

    // Regular paragraph
    result.push(
      <p key={key++} className="my-0.5 leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return result;
}

function renderInline(text: string): React.ReactNode[] {
  // Process inline markdown: bold, italic, inline code, links
  const parts: React.ReactNode[] = [];
  // Regex matches: **bold**, *italic*, `code`, [text](url)
  const pattern = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)|(\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    // Push text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold
      parts.push(
        <strong key={key++} className="font-semibold text-white">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // Italic
      parts.push(
        <em key={key++} className="italic">
          {match[4]}
        </em>
      );
    } else if (match[5]) {
      // Inline code
      parts.push(
        <code
          key={key++}
          className="px-1 py-0.5 rounded bg-white/10 text-white/90 text-xs font-mono"
        >
          {match[6]}
        </code>
      );
    } else if (match[7]) {
      // Link
      parts.push(
        <a
          key={key++}
          href={match[9]}
          className="underline underline-offset-2 text-white/80 hover:text-white transition-colors"
          target={match[9]?.startsWith("http") ? "_blank" : undefined}
          rel={match[9]?.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {match[8]}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

// ---------------------------------------------------------------------------
// Auth helpers
// ---------------------------------------------------------------------------

function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

function isAuthenticated(): boolean {
  return !!getAuthToken();
}

function getChatCount(): number {
  if (typeof window === "undefined") return 0;
  const raw = localStorage.getItem(CHAT_COUNT_KEY);
  return raw ? parseInt(raw, 10) : 0;
}

function incrementChatCount(): number {
  const count = getChatCount() + 1;
  localStorage.setItem(CHAT_COUNT_KEY, String(count));
  return count;
}

function buildLoginUrl(): string {
  if (typeof window === "undefined") return "#";
  // Strip any existing auth params from the redirect URI
  const url = new URL(window.location.href);
  url.hash = "";
  url.searchParams.delete("access_token");
  url.searchParams.delete("token_type");
  url.searchParams.delete("state");
  const redirectUri = url.toString();
  const state = Math.random().toString(36).slice(2);
  if (typeof window !== "undefined") {
    sessionStorage.setItem("hanzo_oauth_state", state);
  }
  const params = new URLSearchParams({
    client_id: IAM_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: "token",
    scope: "openid profile email",
    state,
  });
  return `${IAM_AUTHORIZE_URL}?${params.toString()}`;
}

// ---------------------------------------------------------------------------
// System prompt builder
// ---------------------------------------------------------------------------

function buildSystemPrompt(pageContext: string, model: ZenModel): string {
  return `You are Zen AI, an assistant for Hanzo Industries -- a Techstars-backed AI company building full-stack private AI infrastructure. You're powered by the Zen model family. Current page: ${pageContext}.

Help users understand Hanzo's products: Zen frontier models (600M-1T+ params), Hanzo AI platform, Hanzo Engine (cloud GPU inference), Hanzo Edge (on-device inference), LLM Gateway (100+ models), and more.

Be concise, helpful, and knowledgeable. For pricing or sales, direct to /pricing or /contact. For documentation, suggest docs.hanzo.ai.`;
}

// ---------------------------------------------------------------------------
// SSE stream parser
// ---------------------------------------------------------------------------

async function* parseSSEStream(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  decoder: TextDecoder
): AsyncGenerator<string, void, unknown> {
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    // Keep the last partial line in the buffer
    buffer = lines.pop() || "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed === "data: [DONE]") continue;
      if (!trimmed.startsWith("data: ")) continue;

      try {
        const json = JSON.parse(trimmed.slice(6));
        const delta = json.choices?.[0]?.delta?.content;
        if (delta) {
          yield delta;
        }
      } catch {
        // Skip malformed JSON chunks
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function GlobalChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginGate, setShowLoginGate] = useState(false);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [authed, setAuthed] = useState(false);

  const allModels = authed ? [...freeModels, ...premiumModels] : freeModels;
  const [selectedModel, setSelectedModel] = useState<ZenModel>(freeModels[0]);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modelDropdownRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const isDemoMode = !API_KEY;
  const pageContext = getPageContext(pathname);

  // ---- OAuth callback token capture + auth state init ----
  useEffect(() => {
    if (typeof window === "undefined") return;

    let token: string | null = null;

    // Check URL hash for implicit flow token: #access_token=...&token_type=bearer
    if (window.location.hash) {
      const hashParams = new URLSearchParams(window.location.hash.slice(1));
      const hashToken = hashParams.get("access_token");
      if (hashToken) {
        // Validate state if present
        const returnedState = hashParams.get("state");
        const savedState = sessionStorage.getItem("hanzo_oauth_state");
        if (!savedState || returnedState === savedState) {
          token = hashToken;
          sessionStorage.removeItem("hanzo_oauth_state");
        }
      }
    }

    // Fallback: check query params (hanzo.id-worker bridge flow)
    if (!token) {
      const params = new URLSearchParams(window.location.search);
      const queryToken = params.get("access_token");
      if (queryToken) {
        token = queryToken;
      }
    }

    // Store token and clean URL
    if (token) {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      // Reset chat count so authenticated user gets unlimited
      localStorage.removeItem(CHAT_COUNT_KEY);
      const url = new URL(window.location.href);
      url.hash = "";
      url.searchParams.delete("access_token");
      url.searchParams.delete("token_type");
      url.searchParams.delete("expires_in");
      url.searchParams.delete("state");
      url.searchParams.delete("provider");
      url.searchParams.delete("status");
      window.history.replaceState({}, "", url.toString());
      // Auto-open chat after login
      setIsOpen(true);
    }

    setAuthed(isAuthenticated());
  }, []);

  // ---- Close model dropdown on outside click ----
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modelDropdownRef.current &&
        !modelDropdownRef.current.contains(event.target as Node)
      ) {
        setIsModelDropdownOpen(false);
      }
    };

    if (isModelDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModelDropdownOpen]);

  // ---- Listen for openGlobalChat custom event ----
  useEffect(() => {
    const handleOpenChat = (event: CustomEvent) => {
      setIsOpen(true);

      if (event.detail?.message) {
        setInput(event.detail.message);
        setTimeout(() => inputRef.current?.focus(), 100);
      }

      if (event.detail?.action) {
        const preset = chatPresets.find((p) => p.label === event.detail.action);
        if (preset) {
          setInput(preset.prompt);
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }
    };

    window.addEventListener("openGlobalChat", handleOpenChat as EventListener);
    return () =>
      window.removeEventListener(
        "openGlobalChat",
        handleOpenChat as EventListener
      );
  }, []);

  // ---- Auto-scroll on new messages ----
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---- Focus input when opened ----
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // ---- Welcome message ----
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: `Welcome to Zen AI. You are currently viewing ${pageContext}. How can I help you?`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, pageContext]);

  // ---- Cleanup abort controller on unmount ----
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  // ---- Send message ----
  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    // Login gate check: if not authed and already used free exchange
    if (!authed && getChatCount() >= FREE_MESSAGE_LIMIT) {
      setShowLoginGate(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    const currentInput = input.trim();
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowLoginGate(false);

    // Track usage
    if (!authed) {
      incrementChatCount();
    }

    // Demo mode: return canned response
    if (isDemoMode) {
      const response = getDemoResponse(currentInput);
      // Simulate typing delay
      await new Promise((r) => setTimeout(r, 600));
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
      setIsLoading(false);
      return;
    }

    // Live mode: streaming SSE
    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      {
        id: assistantId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isStreaming: true,
      },
    ]);

    const abortController = new AbortController();
    abortRef.current = abortController;

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      // Use user auth token if available, otherwise API key
      const authToken = getAuthToken();
      if (authToken) {
        headers["Authorization"] = `Bearer ${authToken}`;
      } else {
        headers["Authorization"] = `Bearer ${API_KEY}`;
      }

      const conversationHistory = messages
        .filter((m) => m.id !== "welcome")
        .slice(-10)
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch(`${API_URL}/v1/chat/completions`, {
        method: "POST",
        headers,
        signal: abortController.signal,
        body: JSON.stringify({
          model: selectedModel.id,
          messages: [
            { role: "system", content: buildSystemPrompt(pageContext, selectedModel) },
            ...conversationHistory,
            { role: "user", content: currentInput },
          ],
          stream: true,
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        throw new Error(`API error ${response.status}: ${errorText}`);
      }

      if (!response.body) {
        throw new Error("Response body is null");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      for await (const chunk of parseSSEStream(reader, decoder)) {
        accumulated += chunk;
        const snapshot = accumulated;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: snapshot }
              : m
          )
        );
      }

      // Mark streaming complete
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, isStreaming: false }
            : m
        )
      );
    } catch (error: unknown) {
      if (error instanceof DOMException && error.name === "AbortError") {
        // User cancelled -- leave partial content
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, isStreaming: false }
              : m
          )
        );
      } else {
        // Replace empty streaming message with error
        const errorContent =
          "I'm having trouble connecting right now. You can try [hanzo.chat](https://hanzo.chat) for the full experience, or visit [docs.hanzo.ai](https://docs.hanzo.ai) for documentation.";
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: errorContent, isStreaming: false }
              : m
          )
        );
      }
    } finally {
      abortRef.current = null;
      setIsLoading(false);
    }
  }, [input, isLoading, pageContext, messages, selectedModel, authed, isDemoMode]);

  const handlePreset = (preset: (typeof chatPresets)[0]) => {
    setInput(preset.prompt);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ---- Render ----

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
              "fixed z-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col",
              "bg-neutral-950 border border-white/10",
              isExpanded
                ? "inset-4 md:inset-8"
                : "bottom-6 right-6 w-[400px] max-w-[calc(100vw-48px)] h-[560px] max-h-[80vh]"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black border border-white/10 overflow-hidden">
                  <img src="/zen-logo.png" alt="Zen AI" className="w-5 h-5" />
                </div>

                {/* Model selector */}
                <div className="relative" ref={modelDropdownRef}>
                  <button
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className="flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-white/5"
                  >
                    <div className="text-left">
                      <div className="text-sm font-medium flex items-center gap-1.5 text-white">
                        Zen AI
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">
                          {selectedModel.name}
                        </span>
                        <span
                          className={cn(
                            "text-[9px] font-medium uppercase tracking-wider px-1 py-0.5 rounded",
                            selectedModel.tier === "free"
                              ? "bg-white/10 text-neutral-400"
                              : "bg-white/15 text-neutral-300"
                          )}
                        >
                          {selectedModel.tier === "free" ? "Free" : "Pro"}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform text-neutral-500",
                        isModelDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Model dropdown */}
                  <AnimatePresence>
                    {isModelDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute left-0 top-full mt-1 w-64 border border-white/10 rounded-lg shadow-xl overflow-hidden z-10 bg-neutral-900"
                      >
                        {allModels.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelDropdownOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors hover:bg-white/5",
                              selectedModel.id === model.id && "bg-white/5"
                            )}
                          >
                            <div>
                              <div className="text-sm flex items-center gap-2 text-white">
                                {model.name}
                                <span className="text-[10px] font-mono text-neutral-500">
                                  {model.params}
                                </span>
                                <span
                                  className={cn(
                                    "text-[9px] font-medium uppercase tracking-wider px-1 py-0.5 rounded",
                                    model.tier === "free"
                                      ? "bg-white/10 text-neutral-400"
                                      : "bg-white/15 text-neutral-300"
                                  )}
                                >
                                  {model.tier === "free" ? "Free" : "Pro"}
                                </span>
                              </div>
                              <div className="text-[10px] text-neutral-500 mt-0.5">
                                {model.description}
                              </div>
                            </div>
                            {selectedModel.id === model.id && (
                              <Check className="w-4 h-4 text-neutral-400 shrink-0" />
                            )}
                          </button>
                        ))}
                        <div className="border-t border-white/10 px-3 py-2">
                          <a
                            href="/models"
                            className="text-xs text-neutral-500 hover:text-white transition-colors"
                          >
                            View all 45+ models
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
                  className="p-1.5 rounded-md transition-colors text-neutral-500 hover:text-white hover:bg-white/5"
                >
                  {isExpanded ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    abortRef.current?.abort();
                  }}
                  className="p-1.5 rounded-md transition-colors text-neutral-500 hover:text-white hover:bg-white/5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Demo mode banner */}
            {isDemoMode && (
              <div className="px-4 py-1.5 bg-white/5 border-b border-white/5 text-center">
                <span className="text-[10px] text-neutral-500">
                  Demo mode -- AI responses coming soon
                </span>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] px-3 py-2 rounded-2xl text-sm",
                      message.role === "user"
                        ? "rounded-br-md bg-white text-black"
                        : "rounded-bl-md bg-white/5 text-neutral-300"
                    )}
                  >
                    {message.role === "assistant" ? (
                      <div className="space-y-0">
                        {renderMarkdown(message.content)}
                        {message.isStreaming && (
                          <span className="inline-block w-1.5 h-4 ml-0.5 bg-neutral-400 animate-pulse" />
                        )}
                      </div>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}

              {/* Loading indicator (only when no streaming message is visible) */}
              {isLoading &&
                !messages.some((m) => m.isStreaming) && (
                  <div className="flex justify-start">
                    <div className="px-4 py-2 rounded-2xl rounded-bl-md bg-white/5">
                      <div className="flex gap-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}

              <div ref={messagesEndRef} />

              {/* Login gate overlay */}
              <AnimatePresence>
                {showLoginGate && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="mx-6 p-6 rounded-xl bg-neutral-900 border border-white/10 text-center max-w-[300px]"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-neutral-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2">
                        Sign in to continue
                      </h3>
                      <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                        You have used your free message. Sign in to unlock
                        unlimited chat and access premium Zen models.
                      </p>
                      <a
                        href={buildLoginUrl()}
                        className="inline-block w-full px-4 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
                      >
                        Sign in with Hanzo
                      </a>
                      <button
                        onClick={() => setShowLoginGate(false)}
                        className="mt-3 text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                      >
                        Dismiss
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Preset buttons */}
            {messages.length <= 1 && !showLoginGate && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {chatPresets.map((preset) => {
                    const Icon = preset.icon;
                    return (
                      <button
                        key={preset.label}
                        onClick={() => handlePreset(preset)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10 hover:text-white"
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
            <div className="p-3 border-t border-white/10">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={showLoginGate ? "Sign in to continue..." : "Ask anything..."}
                  disabled={showLoginGate}
                  className={cn(
                    "w-full rounded-full px-4 py-2.5 pr-12 text-sm focus:outline-none transition-colors border",
                    "bg-white/5 border-white/10 text-white placeholder-neutral-500",
                    "focus:border-white/20",
                    showLoginGate && "opacity-50 cursor-not-allowed"
                  )}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading || showLoginGate}
                  className={cn(
                    "absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-30",
                    input.trim() ? "bg-white" : "bg-transparent"
                  )}
                >
                  <Send
                    className={cn(
                      "w-4 h-4",
                      input.trim() ? "text-black" : "text-neutral-500"
                    )}
                  />
                </button>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] text-neutral-600">
                  {authed
                    ? "Press Enter to send"
                    : `${Math.max(0, FREE_MESSAGE_LIMIT - getChatCount())} free message${FREE_MESSAGE_LIMIT - getChatCount() !== 1 ? "s" : ""} remaining`}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
