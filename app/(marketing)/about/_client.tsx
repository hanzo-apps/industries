"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HanzoLogo } from "@hanzo/logo/react";
import { cn } from "@/lib/utils";

// The full stack — organized by layer
const stackLayers = [
  {
    label: "Frontier Models",
    items: [
      { name: "ZEN", description: "Frontier AI models — 600M to 1T+ params", link: "/products/zen" },
      { name: "KOAN", description: "Enterprise knowledge and retrieval", link: "/products/koan" },
    ],
  },
  {
    label: "AI Platform",
    items: [
      { name: "HANZO AI", description: "Full-stack AI platform — training, inference, orchestration", link: "/products/hanzo-ai" },
      { name: "HANZO ML", description: "ML operations — experiment tracking, model registry, pipelines", link: "/products/hanzo-ml" },
      { name: "LLM GATEWAY", description: "Unified proxy for 100+ models with auth, billing, observability", link: "/products/hanzo-ai" },
      { name: "MCP", description: "Model Context Protocol — 260+ tools for AI agents", link: "/products/hanzo-ai" },
    ],
  },
  {
    label: "Agents & Bots",
    items: [
      { name: "HANZO DEV", description: "Agentic coding — AI pair programmer with full codebase context", link: "/products/hanzo-dev" },
      { name: "HANZO BOT", description: "Bot platform — deploy, orchestrate, and monitor AI agents at scale", link: "/products/hanzo-bot" },
      { name: "AGENT SDK", description: "Multi-agent framework — planning, tool use, memory, coordination", link: "/products/hanzo-ai" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      { name: "HANZO CLOUD", description: "AI-native PaaS — deploy anything with zero-trust security", link: "/products/hanzo-cloud" },
      { name: "HANZO ENGINE", description: "Cloud GPU inference — 60+ architectures, CUDA/Metal", link: "https://engine.hanzo.ai" },
      { name: "HANZO EDGE", description: "On-device AI — run models locally, in browser, or embedded", link: "https://edge.hanzo.ai" },
      { name: "HANZO NETWORK", description: "Confidential compute — private, decentralized AI workloads", link: "/products/hanzo-network" },
      { name: "IAM", description: "Multi-tenant identity — SSO, OAuth, JWT across all services", link: "/products/hanzo-cloud" },
      { name: "KMS", description: "Secrets management — org-scoped, auditable, zero-trust", link: "/products/hanzo-cloud" },
    ],
  },
  {
    label: "Developer Experience",
    items: [
      { name: "HANZO DX", description: "Developer platform — SDKs, APIs, CLI, documentation", link: "/products/hanzo-dx" },
      { name: "HANZO TEAM", description: "Collaboration — shared workspaces, review, coordination", link: "/products/hanzo-team" },
      { name: "CONSOLE", description: "Unified dashboard — usage, billing, observability, project management", link: "/products/hanzo-ai" },
    ],
  },
];

const stats = [
  { value: "Techstars '17", label: "Backed Company" },
  { value: "130+", label: "Research Papers" },
  { value: "2,500+", label: "OSS Projects" },
  { value: "100+", label: "AI Model Weights" },
  { value: "100+", label: "LLM Providers" },
  { value: "260+", label: "MCP Tools" },
];

const capabilities = [
  {
    title: "Private by Default",
    description: "AI that runs without routing data through centralized third parties. Confidential compute, secure enclaves, and privacy-preserving execution for sensitive workloads.",
  },
  {
    title: "Full-Stack Vertical Integration",
    description: "Models, training, inference, cloud, identity, secrets, observability, and developer tools — one integrated stack, not a patchwork of vendors.",
  },
  {
    title: "Open Source Infrastructure",
    description: "300+ open source repos powering critical AI software supply chains. Public tooling, reference implementations, and sustainable incentive mechanisms.",
  },
  {
    title: "Secure-by-Design Operations",
    description: "Audit trails, policy enforcement, human-in-the-loop approvals, incident-ready logging. Built for regulated and mission-critical environments.",
  },
];

export default function PageClient() {
  return (
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Logo + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <HanzoLogo
              variant="white"
              className="w-16 h-16 mb-8"
            />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Full-Stack Private AI
            </h1>
            <p className={cn("text-xl max-w-3xl", "text-muted-foreground")}>
              Hanzo is a Techstars-backed AI company building a vertically integrated
              stack — from frontier models to confidential compute to developer tools.
              We make powerful AI private by default, enabling sensitive workloads in
              government, defense, healthcare, and finance without routing data through
              centralized third parties.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20 py-8 border-y",
              "border-border"
            )}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className={cn("text-sm", "text-muted-foreground")}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Core Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Why Hanzo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className={cn(
                    "p-6 rounded-lg border",
                    "border-border"
                  )}
                >
                  <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                  <p className={cn("text-sm", "text-muted-foreground")}>
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-2">The Stack</h2>
            <p className={cn("text-lg mb-10", "text-muted-foreground")}>
              Vertically integrated from models to cloud — every layer built to work together.
            </p>

            {stackLayers.map((layer, layerIndex) => (
              <div key={layer.label} className="mb-10 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className={cn(
                    "text-xs font-mono font-medium px-2 py-1 rounded",
                    "bg-foreground/10 text-muted-foreground"
                  )}>
                    {String(layerIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold">{layer.label}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-10">
                  {layer.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className={cn(
                        "flex items-center justify-between px-5 py-3 rounded-lg border transition-colors group",
                        "border-border hover:bg-accent"
                      )}
                    >
                      <div>
                        <div className="font-semibold text-sm group-hover:underline">{item.name}</div>
                        <div className={cn("text-xs", "text-muted-foreground")}>
                          {item.description}
                        </div>
                      </div>
                      <span className={cn("text-sm", "text-foreground/20")}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Platforms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "hanzo.ai", description: "AI platform", href: "https://hanzo.ai" },
                { name: "hanzo.industries", description: "Enterprise & defense", href: "https://hanzo.industries" },
                { name: "hanzo.network", description: "Confidential compute", href: "https://hanzo.network" },
                { name: "cloud.hanzo.ai", description: "Cloud PaaS", href: "https://cloud.hanzo.ai" },
                { name: "llm.hanzo.ai", description: "LLM gateway (100+ models)", href: "https://llm.hanzo.ai" },
                { name: "docs.hanzo.ai", description: "API documentation", href: "https://docs.hanzo.ai" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-5 py-4 rounded-lg border transition-colors group",
                    "border-border hover:bg-accent"
                  )}
                >
                  <div className="font-medium font-mono text-sm group-hover:underline">{platform.name}</div>
                  <div className={cn("text-sm", "text-muted-foreground")}>
                    {platform.description}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Open Source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Open Source</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Hanzo AI",
                  role: "AI infrastructure and developer tools",
                  detail: "MCP, LLM Gateway, Agent SDK, Cloud PaaS, CLI, SDKs. 300+ repos.",
                  href: "https://github.com/hanzoai",
                },
                {
                  name: "Zen LM",
                  role: "Frontier model family",
                  detail: "100+ model weights from 600M to 1T+ params. Text, vision, video, audio, 3D, code, agents.",
                  href: "https://github.com/zenlm",
                },
              ].map((org) => (
                <a
                  key={org.name}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-6 rounded-lg border transition-colors group",
                    "border-border hover:border-border"
                  )}
                >
                  <h3 className="text-xl font-semibold mb-1 group-hover:underline">{org.name}</h3>
                  <p className={cn("text-sm font-medium mb-2", "text-muted-foreground")}>
                    {org.role}
                  </p>
                  <p className={cn("text-sm", "text-muted-foreground")}>
                    {org.detail}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={cn(
              "p-8 md:p-12 rounded-lg border",
              "border-border bg-foreground/[0.02]"
            )}
          >
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className={cn("text-lg", "text-muted-foreground")}>
              Make powerful AI private by default. We build full-stack AI infrastructure
              that converts compute into operational advantage — enabling sensitive workloads
              in healthcare, finance, defense, and government without requiring organizations
              to route data through centralized third parties. We publish our research openly,
              treat open source as critical infrastructure, and ship production systems that
              teams depend on.
            </p>
          </motion.div>
        </div>
      </main>
  );
}
