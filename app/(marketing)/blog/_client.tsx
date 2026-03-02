"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    slug: "build-ai-coding-agent-that-ships",
    title: "How to Build an AI Coding Agent That Actually Ships",
    excerpt: "Most AI coding tools generate code. Very few ship it. Here's the architecture behind an AI agent that writes, tests, deploys, and monitors production software autonomously.",
    category: "Engineering",
    date: "February 27, 2026",
  },
  {
    slug: "mcp-tools-advantage",
    title: "260 MCP Tools: The Unfair Advantage Over Copilot and Cursor",
    excerpt: "Model Context Protocol gives AI agents access to 260+ tools — databases, APIs, cloud providers, browsers, and more.",
    category: "Deep Dive",
  },
  {
    slug: "real-cost-ai-coding-agents-2026",
    title: "The Real Cost of AI Coding Agents in 2026",
    excerpt: "Devin costs $500/mo. Cursor costs $20/mo. Claude Code costs $20/mo. We broke down every AI coding agent's real cost — including the hidden fees nobody talks about.",
    category: "Analysis",
    date: "February 27, 2026",
  },
  {
    slug: "hanzo-bot-vs-ai-coding-agents",
    title: "Hanzo Bot vs Every AI Coding Agent",
    excerpt: "Cursor costs $20/mo. Claude Code costs $20/mo. Copilot costs $19/mo. Devin costs $500/mo. Hanzo Bot starts free and does more at $15/mo.",
    category: "Deep Dive",
    date: "February 26, 2026",
  },
  {
    slug: "ai-marketing-agents",
    title: "AI Marketing Agents: Automate Your Growth Stack",
    excerpt: "Stop paying $50K/yr for marketing tools. Deploy an AI marketing agent that handles content, campaigns, analytics, and engagement across every channel for $15/mo.",
    category: "Guide",
    date: "February 26, 2026",
  },
  {
    slug: "vertically-integrated-ai-cloud",
    title: "The Vertically Integrated AI Cloud",
    excerpt: "What every agentic harness actually needs — and why owning the full stack from LLM gateway to compute tiers changes everything.",
    category: "Architecture",
    date: "February 24, 2026",
  },
  {
    slug: "introducing-hanzo-bot",
    title: "Introducing Hanzo Bot",
    excerpt: "Your AI team in a box — one bot, every role, every channel. Deploy autonomous AI agents that run locally or in the cloud.",
    category: "Announcement",
    date: "February 20, 2026",
  },
  {
    slug: "from-eliza-to-hanzo-bot",
    title: "The Road to Hanzo Bot: Ten Years of Building AI Infrastructure",
    excerpt: "From the first Hanzo API in 2014 to Jin hypermodal research, Zen MoDE models, Enso diffusion, and a 260-repo AI platform.",
    category: "Origin Story",
    date: "February 20, 2026",
  },
  {
    slug: "zen-mode-model-architecture",
    title: "Zen MoDE: 47 Models, One Architecture",
    excerpt: "Inside Zen — Mixture of Diverse Experts (MoDE) architecture that activates only the parameters it needs. 47 models spanning text, code, vision, audio, video, 3D, and agents.",
    category: "Research",
    date: "September 15, 2025",
  },
  {
    slug: "operative-computer-use-for-claude",
    title: "Operative: Giving AI Eyes and Hands",
    excerpt: "We built a full computer-use stack — Operative, CUA, ACI, and Overlord — so AI agents can see screens, click buttons, type text, and automate browsers.",
    category: "Launch",
    date: "March 20, 2025",
  },
  {
    slug: "enso-ai-native-browser",
    title: "Enso: From Diffusion LLM to AI-Native Browser",
    excerpt: "Enso started as a dLLM — a diffusion language model for text generation. It evolved into an AI-native browser with diffusion intelligence built into the rendering engine.",
    category: "Research",
    date: "April 1, 2024",
  },
  {
    slug: "jin-multimodal-ai-architecture",
    title: "Jin: Our Hypermodal AI Architecture",
    excerpt: "Inside Jin — a unified hypermodal architecture built on JEPA principles that processes text, images, audio, video, and 3D through shared representations.",
    category: "Research",
    date: "July 15, 2023",
  },
  {
    slug: "llm-gateway-100-models-one-api",
    title: "LLM Gateway: 391 Models, One API",
    excerpt: "Why we built a unified LLM gateway that routes to 391 models — 47 Zen and 344 third-party — through one API.",
    category: "Architecture",
    date: "August 1, 2023",
  },
];

const BLOG_BASE = "https://blog.hanzo.ai/blog";

export default function PageClient() {
  return (
    <div className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <main className="pt-24">
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-primary/20 text-foreground">
                <BookOpen className="w-3.5 h-3.5" />Blog
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & Guides
              </h1>
              <p className={cn("text-xl max-w-2xl mx-auto", "text-muted-foreground")}>
                Product launches, architecture deep dives, and how-to guides from the team building the AI workforce platform.
              </p>
            </motion.div>

            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                >
                  <a
                    href={`${BLOG_BASE}/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block p-6 rounded-xl transition-all group",
                      "bg-foreground/5 border border-border hover:border-foreground/20"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-foreground/80">
                            {post.category}
                          </span>
                          {post.date && (
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                          )}
                        </div>
                        <h2 className="font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
