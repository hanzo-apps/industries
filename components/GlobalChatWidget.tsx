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
import { cn } from '@hanzo/ui'
import site from "@/site.config";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const API_URL = site.chat.apiUrl;
const API_KEY = process.env.NEXT_PUBLIC_LLM_API_KEY ?? "";
const IAM_AUTHORIZE_URL = site.chat.iamAuthorizeUrl;
const IAM_CLIENT_ID = site.chat.iamClientId;
const AUTH_TOKEN_KEY = "hanzo_auth_token";
const CHAT_COUNT_KEY = "hanzo_chat_count";
const FREE_MESSAGE_LIMIT = site.chat.freeMessageLimit;

interface ZenModel {
  id: string;
  name: string;
  description: string;
  params: string;
  tier: "free" | "pro";
}

const freeModels: ZenModel[] = [
  { id: "zen", name: "Zen", description: "Fast & capable", params: "32B", tier: "free" },
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
          className="hz-card hz-card-tight hz-mt-2 hz-mb-2 hz-scroll-x hz-t-xs hz-mono hz-leading-relaxed"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      result.push(<div key={key++} className="hz-bh-1" />);
      i++;
      continue;
    }

    // Unordered list item
    if (/^\s*[-*]\s+/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        const content = lines[i].replace(/^\s*[-*]\s+/, "");
        items.push(
          <li key={key++} className="hz-ml-4">
            {renderInline(content)}
          </li>
        );
        i++;
      }
      result.push(
        <ul key={key++} className="hz-mt-1 hz-mb-1 hz-stack-1">
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
          <li key={key++} className="hz-ml-4">
            {renderInline(content)}
          </li>
        );
        i++;
      }
      result.push(
        <ol key={key++} className="hz-mt-1 hz-mb-1 hz-stack-1">
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
          ? "hz-t-base hz-w-bold hz-mt-3 hz-mb-1"
          : level === 2
          ? "hz-t-sm hz-w-semibold hz-mt-2 hz-mb-1"
          : "hz-t-sm hz-w-medium hz-mt-2 hz-mb-1";
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
      <p key={key++} className="hz-mt-1 hz-mb-1 hz-leading-relaxed">
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
        <strong key={key++} className="hz-w-semibold hz-fg">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // Italic
      parts.push(
        <em key={key++} className="hz-italic">
          {match[4]}
        </em>
      );
    } else if (match[5]) {
      // Inline code
      parts.push(
        <code
          key={key++}
          className="hz-px-1 hz-py-1 hz-r-md hz-bg-quiet hz-fg-soft hz-t-xs hz-mono"
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
          className="hz-underline hz-fg-soft hz-transition hz-hoverable"
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
  return sessionStorage.getItem(AUTH_TOKEN_KEY);
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
        if (savedState && returnedState === savedState) {
          token = hashToken;
          sessionStorage.removeItem("hanzo_oauth_state");
        }
      }
    }

    // Note: query-param token fallback removed for security — tokens in query strings
    // are logged by CDNs, analytics, and browser history. The hanzo.id-worker bridge
    // flow must deliver tokens via hash fragment only.

    // Store token and clean URL
    if (token) {
      sessionStorage.setItem(AUTH_TOKEN_KEY, token);
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
            className="hz-sq-7 hz-fixed hz-z-overlay hz-r-full hz-shadow-lg hz-row hz-ai-center hz-jc-center hz-bg hz-bordered"
          >
            <img src="/zen-logo.png" alt="Zen AI" className="hz-sq-5 hz-ink-black" />
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
              "hz-fixed hz-z-overlay hz-r-xl hz-shadow-lg hz-clip hz-col",
              "hz-bg-surface hz-bordered",
              isExpanded
                ? ""
                : "hz-mw-full"
            )}
          >
            {/* Header */}
            <div className="hz-row hz-ai-center hz-jc-between hz-px-4 hz-py-3 hz-border-b hz-bg-surface">
              <div className="hz-row hz-ai-center hz-gap-3">
                <div className="hz-sq-5 hz-r-full hz-row hz-ai-center hz-jc-center hz-bg hz-bordered hz-clip">
                  <img src="/zen-logo.png" alt="Zen AI" className="hz-sq-3 hz-ink-black" />
                </div>

                {/* Model selector */}
                <div className="hz-rel" ref={modelDropdownRef}>
                  <button
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className="hz-row hz-ai-center hz-gap-2 hz-r-md hz-px-2 hz-py-1 hz-transition hz-hoverable"
                  >
                    <div className="hz-align-left">
                      <div className="hz-t-sm hz-w-medium hz-row hz-ai-center hz-gap-2 hz-fg">
                        Zen AI
                        <span className="hz-t-xs hz-mono hz-px-2 hz-py-1 hz-r-md hz-bg-quiet hz-fg-muted">
                          {selectedModel.name}
                        </span>
                        <span
                          className={cn(
                            "hz-t-xs hz-w-medium hz-upper hz-tracking-wide hz-px-1 hz-py-1 hz-r-md",
                            selectedModel.tier === "free"
                              ? "hz-bg-quiet hz-fg-muted"
                              : "hz-bg-quiet hz-fg-soft"
                          )}
                        >
                          {selectedModel.tier === "free" ? "Free" : "Pro"}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "hz-sq-2 hz-transition hz-fg-muted",
                        isModelDropdownOpen && ""
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
                        className="hz-abs hz-left-0 hz-mt-1 hz-bw-8 hz-bordered hz-r-lg hz-shadow-lg hz-clip hz-z-raised hz-bg-surface"
                      >
                        {allModels.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelDropdownOpen(false);
                            }}
                            className={cn(
                              "hz-w-full hz-row hz-ai-center hz-jc-between hz-px-3 hz-py-2 hz-align-left hz-transition hz-hoverable",
                              selectedModel.id === model.id && "hz-bg-quiet"
                            )}
                          >
                            <div>
                              <div className="hz-t-sm hz-row hz-ai-center hz-gap-2 hz-fg">
                                {model.name}
                                <span className="hz-t-xs hz-mono hz-fg-muted">
                                  {model.params}
                                </span>
                                <span
                                  className={cn(
                                    "hz-t-xs hz-w-medium hz-upper hz-tracking-wide hz-px-1 hz-py-1 hz-r-md",
                                    model.tier === "free"
                                      ? "hz-bg-quiet hz-fg-muted"
                                      : "hz-bg-quiet hz-fg-soft"
                                  )}
                                >
                                  {model.tier === "free" ? "Free" : "Pro"}
                                </span>
                              </div>
                              <div className="hz-t-xs hz-fg-muted hz-mt-1">
                                {model.description}
                              </div>
                            </div>
                            {selectedModel.id === model.id && (
                              <Check className="hz-sq-2 hz-fg-muted hz-none" />
                            )}
                          </button>
                        ))}
                        <div className="hz-border-t hz-px-3 hz-py-2">
                          <a
                            href="/models"
                            className="hz-t-xs hz-fg-muted hz-transition hz-link"
                          >
                            View all 41+ models
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="hz-row hz-ai-center hz-gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hz-p-2 hz-r-md hz-transition hz-fg-muted hz-link"
                >
                  {isExpanded ? (
                    <Minimize2 className="hz-sq-2" />
                  ) : (
                    <Maximize2 className="hz-sq-2" />
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    abortRef.current?.abort();
                  }}
                  className="hz-p-2 hz-r-md hz-transition hz-fg-muted hz-link"
                >
                  <X className="hz-sq-2" />
                </button>
              </div>
            </div>

            {/* Demo mode banner */}
            {isDemoMode && (
              <div className="hz-px-4 hz-py-2 hz-bg-quiet hz-border-b hz-align-center">
                <span className="hz-t-xs hz-fg-muted">
                  Demo mode -- AI responses coming soon
                </span>
              </div>
            )}

            {/* Messages */}
            <div className="hz-grow hz-scroll-y hz-p-4 hz-stack-4 hz-rel">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "hz-row",
                    message.role === "user" ? "hz-jc-end" : "hz-jc-start"
                  )}
                >
                  <div
                    className={cn(
                      "hz-mw-full hz-px-3 hz-py-2 hz-r-xl hz-t-sm",
                      message.role === "user"
                        ? "hz-bg-inverse hz-fg-inverse"
                        : "hz-bg-quiet hz-fg-soft"
                    )}
                  >
                    {message.role === "assistant" ? (
                      <div className="hz-stack-0">
                        {renderMarkdown(message.content)}
                        {message.isStreaming && (
                          <span className="hz-bw-1 hz-bh-2 hz-ml-1 hz-bg-raised" />
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
                  <div className="hz-row hz-jc-start">
                    <div className="hz-px-4 hz-py-2 hz-r-xl hz-bg-quiet">
                      <div className="hz-row hz-gap-1">
                        <span
                          className="hz-sq-1 hz-r-full hz-bg-raised"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="hz-sq-1 hz-r-full hz-bg-raised"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="hz-sq-1 hz-r-full hz-bg-raised"
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
                    className="hz-abs hz-inset hz-z-raised hz-row hz-ai-center hz-jc-center hz-bg-surface hz-glass"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="hz-card hz-align-center hz-mw-full"
                    >
                      <div className="hz-sq-7 hz-mx-auto hz-mb-4 hz-r-full hz-bg-quiet hz-bordered hz-row hz-ai-center hz-jc-center">
                        <Lock className="hz-sq-3 hz-fg-muted" />
                      </div>
                      <h3 className="hz-t-base hz-w-semibold hz-fg hz-mb-2">
                        Sign in to continue
                      </h3>
                      <p className="hz-t-xs hz-fg-muted hz-mb-4 hz-leading-relaxed">
                        You have used your free message. Sign in to unlock
                        unlimited chat and access premium Zen models.
                      </p>
                      <a
                        href={buildLoginUrl()}
                        className="hz-w-full hz-px-4 hz-py-2 hz-r-lg hz-bg-inverse hz-fg-inverse hz-t-sm hz-w-medium hz-transition hz-hoverable"
                      >
                        Sign in with Hanzo
                      </a>
                      <button
                        onClick={() => setShowLoginGate(false)}
                        className="hz-mt-3 hz-t-xs hz-fg-muted hz-transition hz-link"
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
              <div className="hz-px-4 hz-pb-4">
                <div className="hz-row hz-wrap hz-gap-2">
                  {chatPresets.map((preset) => {
                    const Icon = preset.icon;
                    return (
                      <button
                        key={preset.label}
                        onClick={() => handlePreset(preset)}
                        className="hz-btn hz-btn-primary hz-gap-2 hz-t-xs hz-transition hz-fg-muted"
                      >
                        <Icon className="hz-sq-1" />
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="hz-p-3 hz-border-t">
              <div className="hz-rel">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={showLoginGate ? "Sign in to continue..." : "Ask anything..."}
                  disabled={showLoginGate}
                  className={cn(
                    "hz-w-full hz-r-full hz-px-4 hz-py-2 hz-px-6 hz-t-sm hz-transition hz-bordered",
                    "hz-bg-quiet hz-fg",
                    "",
                    showLoginGate && "hz-dim-more"
                  )}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading || showLoginGate}
                  className={cn(
                    "hz-center-y hz-sq-5 hz-abs hz-r-full hz-row hz-ai-center hz-jc-center hz-transition",
                    input.trim() ? "hz-bg-inverse" : "hz-bg-none"
                  )}
                >
                  <Send
                    className={cn(
                      "hz-sq-2",
                      input.trim() ? "hz-fg-inverse" : "hz-fg-muted"
                    )}
                  />
                </button>
              </div>
              <div className="hz-mt-2 hz-align-center">
                <span className="hz-t-xs hz-fg-faint">
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
