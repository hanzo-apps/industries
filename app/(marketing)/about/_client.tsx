"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HanzoLogo } from "@hanzo/logo/react";
import { cn } from '@hanzo/ui'

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
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container-wide">
          {/* Logo + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-mb-7"
          >
            {/* size is a prop, not a class — HanzoLogo writes width/height inline. */}
            <HanzoLogo variant="mono" size={64} className="hz-mb-6" />
            <h1 className="hz-t-5xl hz-w-bold hz-mb-5">
              Full-Stack Private AI
            </h1>
            <p className={cn("hz-t-xl hz-mw-lg", "hz-fg")}>
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
              "hz-grid hz-grid-6 hz-gap-5 hz-mb-7 hz-py-6 hz-bordered",
              ""
            )}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hz-align-center">
                <div className="hz-t-2xl hz-w-bold hz-mb-1">{stat.value}</div>
                <div className={cn("hz-t-sm", "hz-fg")}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Core Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hz-mb-7"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-6">Why Hanzo</h2>
            <div className="hz-grid hz-grid-2 hz-gap-5">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className={cn(
                    "hz-p-5 hz-r-lg hz-bordered",
                    ""
                  )}
                >
                  <h3 className="hz-t-lg hz-w-semibold hz-mb-2">{cap.title}</h3>
                  <p className={cn("hz-t-sm", "hz-fg")}>
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
            className="hz-mb-7"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-2">The Stack</h2>
            <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
              Vertically integrated from models to cloud — every layer built to work together.
            </p>

            {stackLayers.map((layer, layerIndex) => (
              <div key={layer.label} className="hz-mb-6">
                <div className="hz-row hz-ai-center hz-gap-3 hz-mb-4">
                  <span className={cn(
                    "hz-t-xs hz-mono hz-w-medium hz-px-2 hz-py-1 hz-r-md",
                    "hz-bg-surface hz-fg"
                  )}>
                    {String(layerIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="hz-t-xl hz-w-semibold">{layer.label}</h3>
                </div>
                <div className="hz-grid hz-grid-2 hz-gap-3 hz-ml-4">
                  {layer.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className={cn(
                        "hz-btn hz-btn-ghost hz-jc-between hz-transition",
                        "hz-hoverable"
                      )}
                    >
                      <div>
                        <div className="hz-w-semibold hz-t-sm">{item.name}</div>
                        <div className={cn("hz-t-xs", "hz-fg")}>
                          {item.description}
                        </div>
                      </div>
                      <span className={cn("hz-t-sm", "hz-fg-soft")}>→</span>
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
            className="hz-mb-7"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-6">Platforms</h2>
            <div className="hz-grid hz-grid-3 hz-gap-4">
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
                    "hz-px-4 hz-py-4 hz-r-lg hz-bordered hz-transition",
                    "hz-hoverable"
                  )}
                >
                  <div className="hz-w-medium hz-mono hz-t-sm">{platform.name}</div>
                  <div className={cn("hz-t-sm", "hz-fg")}>
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
            className="hz-mb-7"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-6">Open Source</h2>
            <div className="hz-grid hz-grid-2 hz-gap-5">
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
                    "hz-p-5 hz-r-lg hz-bordered hz-transition",
                    "hz-hoverable"
                  )}
                >
                  <h3 className="hz-t-xl hz-w-semibold hz-mb-1">{org.name}</h3>
                  <p className={cn("hz-t-sm hz-w-medium hz-mb-2", "hz-fg")}>
                    {org.role}
                  </p>
                  <p className={cn("hz-t-sm", "hz-fg")}>
                    {org.detail}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* OSS Revenue Sharing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={cn(
              "hz-mb-7 hz-p-6 hz-r-lg hz-bordered",
              "hz-bg-surface"
            )}
          >
            <div className="hz-col-row hz-gap-5">
              <div className="hz-grow">
                <h3 className="hz-t-xl hz-w-semibold hz-mb-2">OSS Revenue Sharing</h3>
                <p className={cn("hz-t-sm hz-leading-relaxed", "hz-fg")}>
                  We dedicate 25% of all compute costs to open source contributors
                  — distributed transparently based on verified SBOMs. Connect your
                  GitHub and wallet to earn.
                </p>
              </div>
              <div className="hz-col-row hz-gap-3 hz-none">
                <Link
                  href="/open-source"
                  className={cn(
                    "hz-px-4 hz-py-2 hz-r-lg hz-bordered hz-t-sm hz-w-medium hz-align-center hz-transition",
                    "hz-hoverable"
                  )}
                >
                  Learn More
                </Link>
                <a
                  href="https://hanzo.ai/oss/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "hz-px-4 hz-py-2 hz-r-lg hz-t-sm hz-w-medium hz-align-center hz-transition",
                    "hz-bg-inverse hz-fg-inverse hz-hoverable"
                  )}
                >
                  Connect & Earn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={cn(
              "hz-p-6 hz-r-lg hz-bordered",
              "hz-bg-surface"
            )}
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Mission</h2>
            <p className={cn("hz-t-lg", "hz-fg")}>
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
