"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, cn } from '@hanzo/ui'
import {
  ArrowRight,
  ExternalLink,
  Github,
  Brain,
  Cpu,
  Zap,
  Code,
  Eye,
  Mic,
  Sparkles,
  Layers,
  Network,
  Server,
  Search,
  Shield,
} from "lucide-react";
import type { FamilyData } from "./page";

// Icon lookup by family ID — icons are client-only (React components)
const FAMILY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  zen5:       Zap,
  zen4:       Sparkles,
  code:       Code,
  zen3:       Brain,
  embedding:  Search,
  image:      Eye,
  audio:      Mic,
  foundation: Brain,
  vision:     Eye,
  safety:     Shield,
  agents:     Network,
}

// ---- LEGACY HARDCODED BLOCK (kept for reference only — DO NOT USE) ----
// All model data is now served server-side from @zenlm/models via page.tsx.
// This block is intentionally unreachable. --------------------------------
const _unused_modelFamilies = {
  zen5: {
    title: "Zen 5 — Next Generation",
    icon: Zap,
    description: "Fifth-generation agentic models with MoDE (Mixture of Diverse Experts) and native chain-of-thought reasoning",
    models: [
      {
        name: "zen5",
        params: "TBA",
        description: "Agentic frontier model with native chain-of-thought",
        performance: "1M+ context",
        memory: "MoDE + CoT",
        capabilities: ["Text", "Code", "Reasoning", "Agents", "CoT"],
        href: "https://hanzo.ai/research-access",
        requestAccess: true,
      },
      {
        name: "zen5-pro",
        params: "TBA",
        description: "High-throughput agentic model for production",
        performance: "512K context",
        memory: "MoDE + CoT",
        capabilities: ["Text", "Code", "Reasoning", "Production"],
        href: "https://hanzo.ai/research-access",
        requestAccess: true,
      },
      {
        name: "zen5-max",
        params: "TBA",
        description: "Maximum context for document-scale analysis",
        performance: "2M context",
        memory: "MoDE + CoT",
        capabilities: ["Text", "Long Context", "Analysis", "Reasoning"],
        href: "https://hanzo.ai/research-access",
        requestAccess: true,
      },
      {
        name: "zen5-ultra",
        params: "TBA",
        description: "Deepest reasoning with self-verification",
        performance: "1M context",
        memory: "MoDE + Deep CoT",
        capabilities: ["Text", "Code", "Deep Reasoning", "Verification"],
        href: "https://hanzo.ai/research-access",
        requestAccess: true,
      },
      {
        name: "zen5-mini",
        params: "TBA",
        description: "Efficient agentic model, zen5-class intelligence",
        performance: "256K context",
        memory: "MoDE + CoT",
        capabilities: ["Text", "Code", "Agents", "Efficient"],
        href: "https://hanzo.ai/research-access",
        requestAccess: true,
      },
    ],
  },
  zen4: {
    title: "Zen 4 — Flagship",
    icon: Sparkles,
    description: "Fourth-generation flagship models with MoE architecture, long context, and state-of-the-art benchmarks",
    models: [
      {
        name: "zen4",
        params: "744B MoE (40B active)",
        description: "Flagship model for complex reasoning",
        performance: "202K context",
        memory: "MoE",
        capabilities: ["Text", "Code", "Math", "Reasoning"],
        href: "https://huggingface.co/zenlm/zen4",
      },
      {
        name: "zen4-ultra",
        params: "744B MoE (40B active)",
        description: "Maximum reasoning with chain-of-thought",
        performance: "262K context",
        memory: "MoE + CoT",
        capabilities: ["Text", "Code", "Reasoning", "Thinking"],
        href: "https://huggingface.co/zenlm/zen4-ultra",
      },
      {
        name: "zen4-pro",
        params: "80B MoE (3B active)",
        description: "High-capability efficient MoE",
        performance: "131K context",
        memory: "MoE",
        capabilities: ["Text", "Code", "Reasoning", "Tools"],
        href: "https://huggingface.co/zenlm/zen4-pro",
      },
      {
        name: "zen4-max",
        params: "Dense",
        description: "Most capable model, agentic tasks",
        performance: "1M context",
        memory: "Dense",
        capabilities: ["Text", "Code", "Reasoning", "Agents", "Frontier"],
        href: "https://huggingface.co/zenlm/zen4-max",
      },
      {
        name: "zen4.6",
        params: "Dense",
        description: "Extended context, cost efficient",
        performance: "1M context",
        memory: "Dense",
        capabilities: ["Text", "Code", "Long Context", "Efficient"],
        href: "https://huggingface.co/zenlm/zen4.6",
      },
      {
        name: "zen4-mini",
        params: "Dense",
        description: "Ultra-fast, free tier",
        performance: "128K context",
        memory: "Dense",
        capabilities: ["Text", "Code", "Math", "Free Tier"],
        href: "https://huggingface.co/zenlm/zen4-mini",
      },
      {
        name: "zen4-thinking",
        params: "80B MoE (3B active)",
        description: "Dedicated reasoning",
        performance: "131K context",
        memory: "MoE + CoT",
        capabilities: ["Text", "Reasoning", "Thinking", "CoT"],
        href: "https://huggingface.co/zenlm/zen4-thinking",
      },
    ],
  },
  zen4coder: {
    title: "Zen 4 Coder",
    icon: Code,
    description: "Specialized code models for software engineering, generation, review, and debugging",
    models: [
      {
        name: "zen4-coder",
        params: "480B MoE (35B active)",
        description: "Code generation, review, debugging",
        performance: "163K context",
        memory: "MoE",
        capabilities: ["Code", "Agents", "Tools", "Agentic"],
        href: "https://huggingface.co/zenlm/zen4-coder",
      },
      {
        name: "zen4-coder-pro",
        params: "480B Dense BF16",
        description: "Full-precision code analysis",
        performance: "131K context",
        memory: "Dense BF16",
        capabilities: ["Code", "Precision", "Deep Reasoning"],
        href: "https://huggingface.co/zenlm/zen4-coder-pro",
      },
      {
        name: "zen4-coder-flash",
        params: "30B MoE (3B active)",
        description: "Fast inline completions",
        performance: "262K context",
        memory: "MoE",
        capabilities: ["Code", "Completions", "Fast", "Real-time"],
        href: "https://huggingface.co/zenlm/zen4-coder-flash",
      },
    ],
  },
  zen3: {
    title: "Zen 3 — Multimodal",
    icon: Brain,
    description: "Third-generation multimodal models spanning text, vision, audio, and safety",
    models: [
      {
        name: "zen3-omni",
        params: "~200B Dense Multimodal",
        description: "Text, vision, audio",
        performance: "202K context",
        memory: "Dense Multimodal",
        capabilities: ["Text", "Vision", "Audio", "Multimodal"],
        href: "https://huggingface.co/zenlm/zen3-omni",
      },
      {
        name: "zen3-vl",
        params: "30B MoE (3B active)",
        description: "Vision-language",
        performance: "262K context",
        memory: "MoE",
        capabilities: ["Vision", "Language", "OCR", "VQA"],
        href: "https://huggingface.co/zenlm/zen3-vl",
      },
      {
        name: "zen3-nano",
        params: "8B Dense",
        description: "Edge deployment, free tier",
        performance: "128K context",
        memory: "Dense",
        capabilities: ["Text", "Code", "Edge", "Free Tier"],
        href: "https://huggingface.co/zenlm/zen3-nano",
      },
      {
        name: "zen3-guard",
        params: "4B Dense",
        description: "Content safety, 119 languages",
        performance: "65K context",
        memory: "Dense",
        capabilities: ["Safety", "Moderation", "119 Languages"],
        href: "https://huggingface.co/zenlm/zen3-guard",
      },
    ],
  },
  zen3image: {
    title: "Zen 3 Image",
    icon: Eye,
    description: "Diffusion models for image generation, editing, and creative workflows",
    models: [
      {
        name: "zen3-image",
        params: "Diffusion",
        description: "Best general-purpose image generation",
        performance: "Text-to-Image",
        memory: "Diffusion",
        capabilities: ["Text-to-Image", "Art", "Photography"],
        href: "https://huggingface.co/zenlm/zen3-image",
      },
      {
        name: "zen3-image-max",
        params: "Diffusion",
        description: "Maximum quality, professional creative",
        performance: "Text-to-Image",
        memory: "Diffusion",
        capabilities: ["Max Quality", "Professional", "Creative"],
        href: "https://huggingface.co/zenlm/zen3-image-max",
      },
      {
        name: "zen3-image-dev",
        params: "Diffusion",
        description: "Development and iteration",
        performance: "Text-to-Image",
        memory: "Diffusion",
        capabilities: ["Development", "Iteration", "Fast"],
        href: "https://huggingface.co/zenlm/zen3-image-dev",
      },
      {
        name: "zen3-image-fast",
        params: "Diffusion",
        description: "Real-time generation",
        performance: "Text-to-Image",
        memory: "Diffusion",
        capabilities: ["Real-time", "Fast", "Low Latency"],
        href: "https://huggingface.co/zenlm/zen3-image-fast",
      },
      {
        name: "zen3-image-sdxl",
        params: "Diffusion",
        description: "1024px high-resolution",
        performance: "Text-to-Image",
        memory: "Diffusion",
        capabilities: ["1024px", "High-res", "SDXL"],
        href: "https://huggingface.co/zenlm/zen3-image-sdxl",
      },
      {
        name: "zen3-image-playground",
        params: "Diffusion",
        description: "Aesthetic artistic generation",
        performance: "Text-to-Image",
        memory: "Diffusion",
        capabilities: ["Aesthetic", "Artistic", "Creative"],
        href: "https://huggingface.co/zenlm/zen3-image-playground",
      },
      {
        name: "zen3-image-ssd",
        params: "1B Diffusion",
        description: "Fastest diffusion model",
        performance: "Text-to-Image",
        memory: "1B Diffusion",
        capabilities: ["Fastest", "SSD", "Real-time"],
        href: "https://huggingface.co/zenlm/zen3-image-ssd",
      },
      {
        name: "zen3-image-jp",
        params: "Diffusion",
        description: "Japanese-specialized",
        performance: "Text-to-Image",
        memory: "Diffusion",
        capabilities: ["Japanese", "Specialized", "Localized"],
        href: "https://huggingface.co/zenlm/zen3-image-jp",
      },
    ],
  },
  zen3audio: {
    title: "Zen 3 Audio & Speech",
    icon: Mic,
    description: "Transcription, text-to-speech, real-time ASR, and broadcast-quality audio",
    models: [
      {
        name: "zen3-audio",
        params: "1.5B ASR",
        description: "100+ language transcription",
        performance: "ASR",
        memory: "1.5B",
        capabilities: ["ASR", "100+ Languages", "Transcription"],
        href: "https://huggingface.co/zenlm/zen3-audio",
      },
      {
        name: "zen3-audio-fast",
        params: "809M ASR",
        description: "Fastest transcription",
        performance: "ASR",
        memory: "809M",
        capabilities: ["ASR", "Fast", "Real-time"],
        href: "https://huggingface.co/zenlm/zen3-audio-fast",
      },
      {
        name: "zen3-asr",
        params: "Streaming ASR",
        description: "Real-time <500ms latency",
        performance: "<500ms latency",
        memory: "Streaming ASR",
        capabilities: ["Streaming", "Real-time", "<500ms"],
        href: "https://huggingface.co/zenlm/zen3-asr",
      },
      {
        name: "zen3-asr-v1",
        params: "Streaming ASR",
        description: "Legacy compatibility",
        performance: "Streaming",
        memory: "Streaming ASR",
        capabilities: ["Streaming", "Legacy", "Compatible"],
        href: "https://huggingface.co/zenlm/zen3-asr-v1",
      },
      {
        name: "zen3-tts",
        params: "82M TTS",
        description: "40+ voices, 8 languages",
        performance: "TTS",
        memory: "82M",
        capabilities: ["TTS", "40+ Voices", "8 Languages"],
        href: "https://huggingface.co/zenlm/zen3-tts",
      },
      {
        name: "zen3-tts-hd",
        params: "TTS HD",
        description: "Broadcast-quality 48kHz",
        performance: "48kHz TTS",
        memory: "TTS HD",
        capabilities: ["TTS", "48kHz", "Broadcast Quality"],
        href: "https://huggingface.co/zenlm/zen3-tts-hd",
      },
      {
        name: "zen3-tts-fast",
        params: "82M TTS",
        description: "Low-latency voice agents",
        performance: "Low-latency TTS",
        memory: "82M",
        capabilities: ["TTS", "Low Latency", "Voice Agents"],
        href: "https://huggingface.co/zenlm/zen3-tts-fast",
      },
    ],
  },
  zen3embedding: {
    title: "Zen 3 Embedding",
    icon: Search,
    description: "Dense embeddings for semantic search, RAG, classification, and retrieval",
    models: [
      {
        name: "zen3-embedding",
        params: "3072 dimensions",
        description: "RAG, search, classification",
        performance: "8K context",
        memory: "3072d",
        capabilities: ["Embeddings", "RAG", "Search", "Classification"],
        href: "https://huggingface.co/zenlm/zen3-embedding",
      },
      {
        name: "zen3-embedding-medium",
        params: "4B",
        description: "Cost-effective retrieval",
        performance: "40K context",
        memory: "4B",
        capabilities: ["Embeddings", "Retrieval", "Cost-effective"],
        href: "https://huggingface.co/zenlm/zen3-embedding-medium",
      },
      {
        name: "zen3-embedding-small",
        params: "0.6B",
        description: "High-throughput",
        performance: "32K context",
        memory: "0.6B",
        capabilities: ["Embeddings", "High-throughput", "Lightweight"],
        href: "https://huggingface.co/zenlm/zen3-embedding-small",
      },
      {
        name: "zen3-embedding-openai",
        params: "3072 dimensions",
        description: "OpenAI-compatible drop-in",
        performance: "8K context",
        memory: "3072d",
        capabilities: ["Embeddings", "OpenAI-compatible", "Drop-in"],
        href: "https://huggingface.co/zenlm/zen3-embedding-openai",
      },
    ],
  },
  zen3reranker: {
    title: "Zen 3 Reranker",
    icon: Layers,
    description: "Cross-encoder rerankers for improving search and RAG pipeline accuracy",
    models: [
      {
        name: "zen3-reranker",
        params: "8B",
        description: "RAG pipeline accuracy",
        performance: "40K context",
        memory: "8B",
        capabilities: ["Reranking", "RAG", "Search", "Accuracy"],
        href: "https://huggingface.co/zenlm/zen3-reranker",
      },
      {
        name: "zen3-reranker-medium",
        params: "4B",
        description: "Cost-effective reranking",
        performance: "40K context",
        memory: "4B",
        capabilities: ["Reranking", "Cost-effective", "Balanced"],
        href: "https://huggingface.co/zenlm/zen3-reranker-medium",
      },
      {
        name: "zen3-reranker-small",
        params: "0.6B",
        description: "High-throughput minimal cost",
        performance: "40K context",
        memory: "0.6B",
        capabilities: ["Reranking", "High-throughput", "Minimal Cost"],
        href: "https://huggingface.co/zenlm/zen3-reranker-small",
      },
    ],
  },
}
// ---- END LEGACY BLOCK ----

// Infrastructure tools
const infrastructure = [
  {
    name: "Hanzo Engine",
    description: "High-performance cloud inference — 60+ architectures, CUDA/Metal, OpenAI-compatible API",
    icon: Server,
    href: "https://engine.hanzo.ai",
  },
  {
    name: "Hanzo Edge",
    description: "On-device AI inference — run models locally on any device, browser, or embedded system",
    icon: Cpu,
    href: "https://edge.hanzo.ai",
  },
  {
    name: "Zen Gym",
    description: "Unified training platform for all Zen models with LoRA, QLoRA, GRPO, and more",
    icon: Layers,
    href: "https://github.com/zenlm/zen-gym",
  },
  {
    name: "Hanzo MCP",
    description: "Model Context Protocol for AI context management and tool use",
    icon: Network,
    href: "https://github.com/hanzoai/mcp",
  },
];

// Capabilities matrix data — representative models from each family
const capabilitiesMatrix = [
  { model: "zen5", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen4", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen4-max", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen4-ultra", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen4-coder", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen3-omni", text: true, image: true, video: false, audio: true, threeD: false, code: false, agents: false },
  { model: "zen3-vl", text: true, image: true, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen3-nano", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: false },
  { model: "zen3-guard", text: true, image: false, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen3-image", text: true, image: true, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen3-audio", text: true, image: false, video: false, audio: true, threeD: false, code: false, agents: false },
  { model: "zen3-tts", text: true, image: false, video: false, audio: true, threeD: false, code: false, agents: false },
  { model: "zen3-embedding", text: true, image: false, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen3-reranker", text: true, image: false, video: false, audio: false, threeD: false, code: false, agents: false },
];

export default function PageClient({
  familyData,
  totalModels,
}: {
  familyData: FamilyData[]
  totalModels: number
}) {
  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6">
        {/* Hero Section */}
        <section className={cn("hz-py-7 hz-px-4", "")}>
          <div className="hz-container-wide hz-align-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={cn("hz-px-4 hz-py-1 hz-r-full hz-t-sm hz-w-medium hz-mb-5", "hz-bg-inverse")}>
                Zen AI Model Family
              </div>
              <h1 className="hz-t-5xl hz-w-bold hz-tracking-tight hz-mb-5">
                Hypermodal AI
              </h1>
              <p className={cn("hz-container-narrow hz-t-xl hz-mb-6", "hz-fg")}>
                {totalModels}+ models across {familyData.length} families. Open-weight AI covering text, vision, image, audio, code, embeddings, and reranking — from edge to frontier.
              </p>
              <div className="hz-row hz-wrap hz-gap-4 hz-jc-center">
                <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className={cn("hz-r-full hz-px-6 hz-gap-2", "hz-bg-inverse hz-hoverable")}>
                    <Sparkles className="hz-sq-2" />
                    Browse Models
                  </Button>
                </a>
                <a href="https://github.com/zenlm" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="hz-r-full hz-px-6 hz-gap-2">
                    <Github className="hz-sq-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className={cn("hz-py-7 hz-px-4 hz-bordered", "")}>
          <div className="hz-container-wide">
            <div className="hz-grid hz-grid-4 hz-gap-6 hz-align-center">
              <div>
                <div className="hz-t-4xl hz-w-bold hz-mb-1">{totalModels}+</div>
                <div className={cn("hz-t-sm", "hz-fg")}>AI Models</div>
              </div>
              <div>
                <div className="hz-t-4xl hz-w-bold hz-mb-1">{familyData.length}</div>
                <div className={cn("hz-t-sm", "hz-fg")}>Model Families</div>
              </div>
              <div>
                <div className="hz-t-4xl hz-w-bold hz-mb-1">7</div>
                <div className={cn("hz-t-sm", "hz-fg")}>Modalities</div>
              </div>
              <div>
                <div className="hz-t-4xl hz-w-bold hz-mb-1">Apache 2.0</div>
                <div className={cn("hz-t-sm", "hz-fg")}>License</div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Families — data served server-side from @zenlm/models */}
        {familyData.map((family, familyIndex) => {
          const FamilyIcon = FAMILY_ICONS[family.id] ?? Brain;
          return (
            <section
              key={family.id}
              className={cn("hz-py-7 hz-px-4", familyIndex % 2 === 0 ? "" : "hz-bg-surface")}
            >
              <div className="hz-container-wide">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="hz-mb-7"
                >
                  <div className="hz-row hz-ai-center hz-gap-3 hz-mb-4">
                    <FamilyIcon className={cn("hz-sq-5", "hz-fg")} />
                    <h2 className="hz-t-3xl hz-w-bold">{family.title}</h2>
                  </div>
                  <p className={cn("hz-mw-md", "hz-fg")}>{family.description}</p>
                </motion.div>

                <div className="hz-grid hz-grid-3 hz-gap-5">
                  {family.models.map((model, index) => (
                    <motion.a
                      key={model.name}
                      href={model.href}
                      target={(model as any).requestAccess ? undefined : "_blank"}
                      rel={(model as any).requestAccess ? undefined : "noopener noreferrer"}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={cn("hz-p-5 hz-bordered hz-r-lg hz-transition", "hz-bg-surface hz-hoverable")}
                    >
                      <div className="hz-row hz-ai-start hz-jc-between hz-mb-4">
                        <div>
                          <h3 className="hz-t-lg hz-w-semibold">
                            {model.name}
                          </h3>
                          <span className={cn("hz-t-sm hz-mono", "hz-fg")}>{model.params}</span>
                        </div>
                        {(model as any).requestAccess ? (
                          <span className="hz-t-xs hz-px-2 hz-py-1 hz-r-full hz-bg-surface hz-fg hz-w-medium">Research Preview</span>
                        ) : (
                          <ExternalLink className={cn("hz-sq-2 hz-invisible hz-transition", "hz-fg")} />
                        )}
                      </div>
                      <p className={cn("hz-t-sm hz-mb-4", "hz-fg")}>{model.description}</p>
                      <div className="hz-row hz-wrap hz-gap-2 hz-mb-4">
                        {model.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className={cn("hz-px-2 hz-py-1 hz-t-xs hz-r-full", "hz-bg-surface hz-fg")}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <div className={cn("hz-row hz-ai-center hz-jc-between hz-t-xs hz-pt-4 hz-border-t", "hz-fg")}>
                        <span className="hz-row hz-ai-center hz-gap-1">
                          <Zap className="hz-sq-1" />
                          {model.performance}
                        </span>
                        <span className="hz-row hz-ai-center hz-gap-1">
                          <Cpu className="hz-sq-1" />
                          {model.memory}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Capabilities Matrix */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-align-center hz-mb-7"
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-4 hz-fg">Capabilities Matrix</h2>
              <p className="hz-fg">
                Each model specializes in different modalities and tasks
              </p>
            </motion.div>

            <div className="hz-scroll-x">
              <table className="hz-w-full hz-t-sm">
                <thead>
                  <tr className={cn("hz-border-b", "")}>
                    <th className="hz-align-left hz-py-4 hz-px-4 hz-w-semibold">Model</th>
                    <th className="hz-align-center hz-py-4 hz-px-4 hz-w-semibold">Text</th>
                    <th className="hz-align-center hz-py-4 hz-px-4 hz-w-semibold">Image</th>
                    <th className="hz-align-center hz-py-4 hz-px-4 hz-w-semibold">Video</th>
                    <th className="hz-align-center hz-py-4 hz-px-4 hz-w-semibold">Audio</th>
                    <th className="hz-align-center hz-py-4 hz-px-4 hz-w-semibold">3D</th>
                    <th className="hz-align-center hz-py-4 hz-px-4 hz-w-semibold">Code</th>
                    <th className="hz-align-center hz-py-4 hz-px-4 hz-w-semibold">Agents</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilitiesMatrix.map((row) => (
                    <tr key={row.model} className={cn("hz-border-b", "hz-hoverable")}>
                      <td className="hz-py-3 hz-px-4 hz-mono hz-fg">{row.model}</td>
                      <td className="hz-align-center hz-py-3 hz-px-4">{row.text ? "\u2713" : "\u2014"}</td>
                      <td className="hz-align-center hz-py-3 hz-px-4">{row.image ? "\u2713" : "\u2014"}</td>
                      <td className="hz-align-center hz-py-3 hz-px-4">{row.video ? "\u2713" : "\u2014"}</td>
                      <td className="hz-align-center hz-py-3 hz-px-4">{row.audio ? "\u2713" : "\u2014"}</td>
                      <td className="hz-align-center hz-py-3 hz-px-4">{row.threeD ? "\u2713" : "\u2014"}</td>
                      <td className="hz-align-center hz-py-3 hz-px-4">{row.code ? "\u2713" : "\u2014"}</td>
                      <td className="hz-align-center hz-py-3 hz-px-4">{row.agents ? "\u2713" : "\u2014"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-align-center hz-mb-7"
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Infrastructure</h2>
              <p className={cn("hz-fg")}>
                Production-ready tools for training and deploying Zen models
              </p>
            </motion.div>

            <div className="hz-grid hz-grid-3 hz-gap-6">
              {infrastructure.map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <motion.a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn("hz-p-6 hz-r-xl hz-bordered hz-transition hz-align-center", "hz-bg-surface hz-hoverable")}
                  >
                    <div className={cn("hz-sq-7 hz-r-lg hz-row hz-ai-center hz-jc-center hz-mx-auto hz-mb-4", "hz-bg-inverse")}>
                      <ToolIcon className={cn("hz-sq-4", "hz-fg")} />
                    </div>
                    <h3 className="hz-t-xl hz-w-semibold hz-mb-2">
                      {tool.name}
                    </h3>
                    <p className={cn("hz-t-sm", "hz-fg")}>{tool.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-align-center hz-mb-6"
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Quick Start</h2>
              <p className={cn("hz-fg")}>Get started with any Zen model in seconds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="hz-bg-surface hz-r-lg hz-p-5 hz-scroll-x"
            >
              <pre className="hz-t-sm hz-fg hz-mono">
{`# Install and run any model
pip install transformers torch

# Use directly
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("zenlm/zen-eco-4b-instruct")
tokenizer = AutoTokenizer.from_pretrained("zenlm/zen-eco-4b-instruct")

# Or use via Hanzo Cloud API
from hanzoai import Hanzo
client = Hanzo(api_key="hk-your-api-key")

response = client.chat.completions.create(
    model="zen-eco-4b-instruct",
    messages=[{"role": "user", "content": "Hello!"}]
)`}
              </pre>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container-narrow hz-align-center">
            <h2 className="hz-t-3xl hz-w-bold hz-mb-4">
              Build with Zen AI
            </h2>
            <p className={cn("hz-t-xl hz-mb-6", "hz-fg")}>
              Open-weight models, Apache 2.0 licensed. Free to use for research and commercial applications.
            </p>
            <div className="hz-row hz-wrap hz-gap-4 hz-jc-center">
              <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className={cn("hz-r-full hz-px-6 hz-gap-2", "hz-bg-inverse hz-hoverable")}>
                  Get Started
                  <ArrowRight className="hz-sq-2" />
                </Button>
              </a>
              <Link href="/research">
                <Button size="lg" variant="outline" className="hz-r-full hz-px-6">
                  Research Papers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
