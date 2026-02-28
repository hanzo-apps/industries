"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";
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
} from "lucide-react";

// Model family categories — 8 families, 41 models
const modelFamilies = {
  zen5: {
    title: "Zen 5 — Next Generation",
    icon: Zap,
    description: "Fifth-generation agentic models with MoDE (Mixture of Distilled Experts) and native chain-of-thought reasoning",
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
};

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

export default function PageClient() {
  return (
    <div className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <main className="pt-16">
        {/* Hero Section */}
        <section className={cn("py-24 px-4 bg-gradient-to-b", "from-white/5 to-transparent")}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={cn("inline-block px-4 py-1 rounded-full text-sm font-medium mb-6", "bg-primary text-primary-foreground")}>
                Zen AI Model Family
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Hypermodal AI
              </h1>
              <p className={cn("text-xl max-w-3xl mx-auto mb-8", "text-muted-foreground")}>
                41 models across 8 families. Open-weight AI covering text, vision, image, audio, code, embeddings, and reranking — from edge to frontier.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className={cn("rounded-full px-8 gap-2", "bg-primary text-primary-foreground hover:bg-primary/90")}>
                    <Sparkles className="w-4 h-4" />
                    Browse Models
                  </Button>
                </a>
                <a href="https://github.com/zenlm" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className={cn("py-12 px-4 border-y", "border-border")}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-1">41</div>
                <div className={cn("text-sm", "text-muted-foreground")}>AI Models</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">8</div>
                <div className={cn("text-sm", "text-muted-foreground")}>Model Families</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">7</div>
                <div className={cn("text-sm", "text-muted-foreground")}>Modalities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">Apache 2.0</div>
                <div className={cn("text-sm", "text-muted-foreground")}>License</div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Families */}
        {Object.entries(modelFamilies).map(([key, family], familyIndex) => {
          const FamilyIcon = family.icon;
          return (
            <section
              key={key}
              className={cn("py-20 px-4", familyIndex % 2 === 0 ? "" : "bg-foreground/5")}
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FamilyIcon className={cn("w-8 h-8", "text-muted-foreground")} />
                    <h2 className="text-3xl font-bold">{family.title}</h2>
                  </div>
                  <p className={cn("max-w-2xl", "text-muted-foreground")}>{family.description}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      className={cn("block p-6 border rounded-xl hover:shadow-lg transition-all group", "bg-foreground/5 border-border hover:border-border")}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold group-hover:underline">
                            {model.name}
                          </h3>
                          <span className={cn("text-sm font-mono", "text-muted-foreground")}>{model.params}</span>
                        </div>
                        {(model as any).requestAccess ? (
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">Research Preview</span>
                        ) : (
                          <ExternalLink className={cn("w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity", "text-muted-foreground")} />
                        )}
                      </div>
                      <p className={cn("text-sm mb-4", "text-muted-foreground")}>{model.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {model.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className={cn("px-2 py-0.5 text-xs rounded-full", "bg-foreground/10 text-muted-foreground")}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <div className={cn("flex items-center justify-between text-xs pt-4 border-t", "text-muted-foreground border-border")}>
                        <span className="flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {model.performance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Cpu className="w-3 h-3" />
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
        <section className={cn("py-20 px-4", "bg-foreground/5")}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground">Capabilities Matrix</h2>
              <p className="text-muted-foreground">
                Each model specializes in different modalities and tasks
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={cn("border-b", "border-border")}>
                    <th className="text-left py-4 px-4 font-semibold">Model</th>
                    <th className="text-center py-4 px-4 font-semibold">Text</th>
                    <th className="text-center py-4 px-4 font-semibold">Image</th>
                    <th className="text-center py-4 px-4 font-semibold">Video</th>
                    <th className="text-center py-4 px-4 font-semibold">Audio</th>
                    <th className="text-center py-4 px-4 font-semibold">3D</th>
                    <th className="text-center py-4 px-4 font-semibold">Code</th>
                    <th className="text-center py-4 px-4 font-semibold">Agents</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilitiesMatrix.map((row) => (
                    <tr key={row.model} className={cn("border-b", "border-border hover:bg-accent")}>
                      <td className="py-3 px-4 font-mono text-foreground">{row.model}</td>
                      <td className="text-center py-3 px-4">{row.text ? "\u2713" : "\u2014"}</td>
                      <td className="text-center py-3 px-4">{row.image ? "\u2713" : "\u2014"}</td>
                      <td className="text-center py-3 px-4">{row.video ? "\u2713" : "\u2014"}</td>
                      <td className="text-center py-3 px-4">{row.audio ? "\u2713" : "\u2014"}</td>
                      <td className="text-center py-3 px-4">{row.threeD ? "\u2713" : "\u2014"}</td>
                      <td className="text-center py-3 px-4">{row.code ? "\u2713" : "\u2014"}</td>
                      <td className="text-center py-3 px-4">{row.agents ? "\u2713" : "\u2014"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Infrastructure</h2>
              <p className={cn("text-muted-foreground")}>
                Production-ready tools for training and deploying Zen models
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
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
                    className={cn("block p-8 rounded-2xl border hover:shadow-lg transition-all group text-center", "bg-foreground/5 border-border hover:border-border")}
                  >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4", "bg-primary")}>
                      <ToolIcon className={cn("w-6 h-6", "text-primary-foreground")} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                      {tool.name}
                    </h3>
                    <p className={cn("text-sm", "text-muted-foreground")}>{tool.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className={cn("py-20 px-4", "bg-foreground/5")}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
              <p className={cn("text-muted-foreground")}>Get started with any Zen model in seconds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl p-6 overflow-x-auto"
            >
              <pre className="text-sm text-muted-foreground font-mono">
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
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Build with Zen AI
            </h2>
            <p className={cn("text-xl mb-8", "text-muted-foreground")}>
              Open-weight models, Apache 2.0 licensed. Free to use for research and commercial applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className={cn("rounded-full px-8 gap-2", "bg-primary text-primary-foreground hover:bg-primary/90")}>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/research">
                <Button size="lg" variant="outline" className="rounded-full px-8">
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
