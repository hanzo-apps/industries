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
  Video,
  Music,
  Box,
  Cpu,
  Zap,
  Globe,
  Code,
  Eye,
  Mic,
  Sparkles,
  Layers,
  Network,
  Server,
  Terminal,
  Shield,
  Search,
} from "lucide-react";

// Model family categories
const modelFamilies = {
  foundation: {
    title: "Foundation Models",
    icon: Brain,
    description: "Core LLMs for text generation, reasoning, and instruction following — from 0.6B edge to 1T+ frontier",
    models: [
      {
        name: "zen-nano",
        params: "0.6B",
        description: "Ultra-lightweight LLM for edge and mobile deployment",
        performance: "44K tokens/sec",
        memory: "0.4–1.2GB",
        capabilities: ["Text", "Code", "Math"],
        href: "https://huggingface.co/zenlm/zen-nano-0.6b",
      },
      {
        name: "zen-eco",
        params: "4B",
        description: "Efficient general-purpose instruction following",
        performance: "28K tokens/sec",
        memory: "2–8GB",
        capabilities: ["Text", "Code", "Math", "Reasoning"],
        href: "https://huggingface.co/zenlm/zen-eco-4b-instruct",
      },
      {
        name: "zen",
        params: "8B–32B",
        description: "General-purpose foundation model with strong multilingual support",
        performance: "Varies by size",
        memory: "8–64GB",
        capabilities: ["Text", "Code", "Math", "Reasoning", "Multilingual"],
        href: "https://huggingface.co/zenlm",
      },
      {
        name: "zen-pro",
        params: "32B",
        description: "High-performance model balancing capability and efficiency",
        performance: "12K tokens/sec",
        memory: "32–64GB",
        capabilities: ["Text", "Code", "Reasoning", "Analysis"],
        href: "https://huggingface.co/zenlm/zen-pro-32b",
      },
      {
        name: "zen-max (zen4-max)",
        params: "1T+ (MoE)",
        description: "Frontier MoE — 1.04T total, 32B active params, 256K context. See Zen4 Max below",
        performance: "Cloud only",
        memory: "Cloud API",
        capabilities: ["Text", "Code", "Math", "Reasoning", "Agents"],
        href: "https://huggingface.co/zenlm/zen-max",
      },
      {
        name: "zen-next",
        params: "8B–80B (MoE)",
        description: "Next-generation hybrid architecture with extended context up to 1M tokens",
        performance: "Varies by size",
        memory: "8–144GB",
        capabilities: ["Text", "Code", "Long Context", "Reasoning"],
        href: "https://huggingface.co/zenlm/zen-next",
      },
    ],
  },
  zen4: {
    title: "Zen 4 — Latest Generation",
    icon: Sparkles,
    description: "Fourth-generation models with MoE architecture, long context, and state-of-the-art benchmarks",
    models: [
      {
        name: "zen4-mini",
        params: "8B",
        description: "Fast and efficient model for low-latency tasks, 40K context",
        performance: "32K tokens/sec",
        memory: "8–16GB",
        capabilities: ["Text", "Code", "Math", "Edge"],
        href: "https://huggingface.co/zenlm/zen4-mini",
      },
      {
        name: "zen4-pro",
        params: "80B (MoE, 3B active)",
        description: "Production workhorse — 80B MoE with 3B active, 131K context, strong reasoning and tool use",
        performance: "Real-time",
        memory: "16–32GB",
        capabilities: ["Text", "Code", "Reasoning", "Tools"],
        href: "https://huggingface.co/zenlm/zen4-pro",
      },
      {
        name: "zen4",
        params: "744B (MoE, 40B active)",
        description: "Flagship model — 744B MoE with 40B active, 202K context, top-tier multilingual reasoning",
        performance: "Cloud / high-end GPU",
        memory: "Cloud API",
        capabilities: ["Text", "Code", "Math", "Reasoning"],
        href: "https://huggingface.co/zenlm/zen4",
      },
      {
        name: "zen4-max",
        params: "1.04T (MoE, 32B active)",
        description: "Maximum scale — 1.04T MoE with 32B active, 256K context, frontier reasoning",
        performance: "Cloud only",
        memory: "Cloud API",
        capabilities: ["Text", "Code", "Reasoning", "Frontier"],
        href: "https://huggingface.co/zenlm/zen4-max",
      },
      {
        name: "zen4-ultra",
        params: "744B (MoE, 40B active)",
        description: "Maximum reasoning — extended thinking mode, 202K context, deep chain-of-thought",
        performance: "Cloud only",
        memory: "Cloud API",
        capabilities: ["Text", "Code", "Reasoning", "Thinking"],
        href: "https://huggingface.co/zenlm/zen4-ultra",
      },
    ],
  },
  code: {
    title: "Code Models",
    icon: Code,
    description: "Specialized models for software engineering, code generation, and developer tooling",
    models: [
      {
        name: "zen4-coder-flash",
        params: "30B (MoE, 3B active)",
        description: "Fast code completion — 30B MoE with 3B active, 262K context, real-time inline suggestions",
        performance: "Real-time",
        memory: "8–16GB",
        capabilities: ["Code", "Completions", "Fast", "262K ctx"],
        href: "https://huggingface.co/zenlm/zen4-coder-flash",
      },
      {
        name: "zen4-coder",
        params: "480B (MoE, 35B active)",
        description: "Professional code model — 480B MoE with 35B active, 262K context, agentic coding",
        performance: "Cloud / high-end GPU",
        memory: "Cloud API",
        capabilities: ["Code", "Agents", "Tools", "Agentic"],
        href: "https://huggingface.co/zenlm/zen4-coder",
      },
      {
        name: "zen4-coder-pro",
        params: "480B (dense, BF16)",
        description: "Maximum code accuracy — 480B full precision BF16, 262K context",
        performance: "Cloud only",
        memory: "Cloud API",
        capabilities: ["Code", "Precision", "Deep Reasoning"],
        href: "https://huggingface.co/zenlm/zen4-coder-pro",
      },
      {
        name: "zen-coder",
        params: "7B–32B",
        description: "General-purpose code generation and software engineering assistant",
        performance: "22K tokens/sec",
        memory: "4–64GB",
        capabilities: ["Code", "Debugging", "Refactoring", "Tests"],
        href: "https://huggingface.co/zenlm/zen-coder-7b",
      },
    ],
  },
  vision: {
    title: "Vision & Image",
    icon: Eye,
    description: "Multimodal models for image understanding, generation, and editing",
    models: [
      {
        name: "zen-vl",
        params: "4B–30B",
        description: "Vision-language model for image understanding, OCR, and visual Q&A",
        performance: "Real-time",
        memory: "4–60GB",
        capabilities: ["Image Understanding", "OCR", "VQA", "Charts"],
        href: "https://huggingface.co/zenlm/zen-vl-7b",
      },
      {
        name: "zen-omni",
        params: "8B",
        description: "Unified multimodal model across vision, audio, and text",
        performance: "Real-time",
        memory: "10–20GB",
        capabilities: ["Vision", "Audio", "Text", "Speech"],
        href: "https://huggingface.co/zenlm/zen-omni-8b",
      },
      {
        name: "zen-artist",
        params: "12B",
        description: "High-quality image generation from text descriptions",
        performance: "~10s per image",
        memory: "12–24GB",
        capabilities: ["Text-to-Image", "Art", "Photography"],
        href: "https://huggingface.co/zenlm/zen-artist",
      },
      {
        name: "zen-artist-edit",
        params: "12B",
        description: "Instruction-guided image editing and manipulation",
        performance: "~12s per edit",
        memory: "12–24GB",
        capabilities: ["Image Editing", "Inpainting", "Style"],
        href: "https://huggingface.co/zenlm/zen-artist-edit",
      },
      {
        name: "zen-designer",
        params: "8B",
        description: "Design-focused generation for UI, logos, and marketing assets",
        performance: "~8s per image",
        memory: "10–20GB",
        capabilities: ["Design", "UI", "Branding", "Layouts"],
        href: "https://huggingface.co/zenlm/zen-designer",
      },
    ],
  },
  video: {
    title: "Video Generation",
    icon: Video,
    description: "Text-to-video, image-to-video, and camera-controlled video synthesis",
    models: [
      {
        name: "zen-director",
        params: "5B",
        description: "Text/image-to-video generation up to 10 seconds",
        performance: "~60s for 5s video",
        memory: "12–16GB",
        capabilities: ["Text-to-Video", "Image-to-Video"],
        href: "https://huggingface.co/zenlm/zen-director-5b",
      },
      {
        name: "zen-video",
        params: "8B",
        description: "High-quality professional video synthesis",
        performance: "~45s for 5s video",
        memory: "16–24GB",
        capabilities: ["HD Video", "Long-form"],
        href: "https://huggingface.co/zenlm/zen-video",
      },
      {
        name: "zen-video-i2v",
        params: "8B",
        description: "Animate static images into dynamic video",
        performance: "~45s for 5s video",
        memory: "16–24GB",
        capabilities: ["Image Animation", "Motion"],
        href: "https://huggingface.co/zenlm/zen-video-i2v",
      },
      {
        name: "zen-voyager",
        params: "5B",
        description: "Camera-controlled 3D world exploration video",
        performance: "~30s for 60 frames",
        memory: "16–24GB",
        capabilities: ["3D Video", "Depth", "Point Clouds"],
        href: "https://huggingface.co/zenlm/zen-voyager",
      },
    ],
  },
  audio: {
    title: "Audio & Speech",
    icon: Mic,
    description: "Music generation, voice synthesis, transcription, dubbing, and real-time speech",
    models: [
      {
        name: "zen-musician",
        params: "7B",
        description: "Generate full songs with vocals and accompaniment",
        performance: "~360s for 30s audio",
        memory: "16–24GB",
        capabilities: ["Music", "Vocals", "Multilingual"],
        href: "https://huggingface.co/zenlm/zen-musician-7b",
      },
      {
        name: "zen-foley",
        params: "3B",
        description: "Professional sound effects and ambient audio for video",
        performance: "~15s for 10s audio",
        memory: "12–24GB",
        capabilities: ["SFX", "Ambient", "Foley"],
        href: "https://huggingface.co/zenlm/zen-foley",
      },
      {
        name: "zen-dub",
        params: "4B",
        description: "Voice dubbing and multilingual speech synthesis",
        performance: "Real-time",
        memory: "4–8GB",
        capabilities: ["Dubbing", "TTS", "Voice Cloning"],
        href: "https://huggingface.co/zenlm/zen-dub",
      },
      {
        name: "zen-dub-live",
        params: "4B",
        description: "Real-time streaming voice dubbing for live content",
        performance: "Real-time streaming",
        memory: "4–8GB",
        capabilities: ["Live Dubbing", "Streaming", "Low Latency"],
        href: "https://huggingface.co/zenlm/zen-dub-live",
      },
      {
        name: "zen-scribe",
        params: "3B",
        description: "Automatic speech recognition and transcription (ASR)",
        performance: "Real-time",
        memory: "4–8GB",
        capabilities: ["ASR", "Transcription", "Multilingual"],
        href: "https://huggingface.co/zenlm/zen-scribe",
      },
      {
        name: "zen-translator",
        params: "4B",
        description: "Real-time multilingual translation for speech and text",
        performance: "Real-time",
        memory: "4–8GB",
        capabilities: ["Translation", "Multilingual", "Speech"],
        href: "https://huggingface.co/zenlm/zen-translator",
      },
      {
        name: "zen-live",
        params: "4B",
        description: "Live conversational speech model for real-time dialogue",
        performance: "Real-time streaming",
        memory: "4–8GB",
        capabilities: ["Conversation", "Live", "Interactive"],
        href: "https://huggingface.co/zenlm/zen-live",
      },
    ],
  },
  spatial: {
    title: "3D & Spatial",
    icon: Box,
    description: "3D asset generation and large-scale world simulation",
    models: [
      {
        name: "zen-3d",
        params: "3.3B",
        description: "Controllable 3D asset generation from text/image",
        performance: "~30s per model",
        memory: "10GB",
        capabilities: ["3D Models", "OBJ", "GLB", "USD"],
        href: "https://huggingface.co/zenlm/zen-3d",
      },
      {
        name: "zen-world",
        params: "12B",
        description: "Large-scale 3D world and environment generation",
        performance: "Scene-dependent",
        memory: "24GB+",
        capabilities: ["World Gen", "City-scale", "Environments"],
        href: "https://huggingface.co/zenlm/zen-world",
      },
    ],
  },
  safety: {
    title: "Safety & Guardrails",
    icon: Shield,
    description: "Content moderation, safety classification, and real-time guardrails for AI pipelines",
    models: [
      {
        name: "zen-guard",
        params: "1B",
        description: "Content safety classifier for input/output filtering",
        performance: "< 5ms",
        memory: "1–2GB",
        capabilities: ["Safety", "Moderation", "Classification"],
        href: "https://huggingface.co/zenlm/zen-guard",
      },
      {
        name: "zen-guard-gen",
        params: "1B",
        description: "Safety guardrails for generated content review",
        performance: "< 5ms",
        memory: "1–2GB",
        capabilities: ["Output Safety", "Toxicity", "Bias"],
        href: "https://huggingface.co/zenlm/zen-guard-gen",
      },
      {
        name: "zen-guard-stream",
        params: "1B",
        description: "Streaming safety filter for real-time content moderation",
        performance: "Real-time",
        memory: "1–2GB",
        capabilities: ["Streaming", "Real-time", "Low Latency"],
        href: "https://huggingface.co/zenlm/zen-guard-stream",
      },
    ],
  },
  embedding: {
    title: "Embedding & Retrieval",
    icon: Search,
    description: "Dense embeddings and reranking for search, RAG, and similarity tasks",
    models: [
      {
        name: "zen-embedding",
        params: "1.5B",
        description: "High-quality dense embeddings for semantic search and RAG",
        performance: "10K docs/sec",
        memory: "2–4GB",
        capabilities: ["Embeddings", "Search", "RAG", "Clustering"],
        href: "https://huggingface.co/zenlm/zen-embedding",
      },
      {
        name: "zen-reranker",
        params: "1.5B",
        description: "Cross-encoder reranker for improving search relevance",
        performance: "5K pairs/sec",
        memory: "2–4GB",
        capabilities: ["Reranking", "Search", "Relevance"],
        href: "https://huggingface.co/zenlm/zen-reranker",
      },
    ],
  },
  agents: {
    title: "Agent Models",
    icon: Network,
    description: "Tool-calling and agentic models with MCP support for autonomous workflows",
    models: [
      {
        name: "zen-agent",
        params: "4B",
        description: "Tool-calling LLM with native MCP support for agentic workflows",
        performance: "28K tokens/sec",
        memory: "2–8GB",
        capabilities: ["Agents", "Tools", "MCP", "Function Calling"],
        href: "https://huggingface.co/zenlm/zen-agent-4b",
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

// Capabilities matrix data
const capabilitiesMatrix = [
  { model: "zen-nano", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: false },
  { model: "zen-eco", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: false },
  { model: "zen4", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen4-max", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen4-ultra", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen4-coder", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen-agent", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen-coder", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen-vl", text: true, image: true, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen-omni", text: true, image: true, video: false, audio: true, threeD: false, code: false, agents: false },
  { model: "zen-artist", text: true, image: true, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen-director", text: true, image: true, video: true, audio: false, threeD: false, code: false, agents: false },
  { model: "zen-video", text: true, image: true, video: true, audio: false, threeD: false, code: false, agents: false },
  { model: "zen-musician", text: true, image: false, video: false, audio: true, threeD: false, code: false, agents: false },
  { model: "zen-scribe", text: true, image: false, video: false, audio: true, threeD: false, code: false, agents: false },
  { model: "zen-3d", text: true, image: true, video: false, audio: false, threeD: true, code: false, agents: false },
  { model: "zen-world", text: true, image: true, video: true, audio: false, threeD: true, code: false, agents: false },
  { model: "zen-guard", text: true, image: false, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen-embedding", text: true, image: false, video: false, audio: false, threeD: false, code: false, agents: false },
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
                The world's most comprehensive open-weight AI model ecosystem.
                100+ model weights from 0.6B to 1T+ parameters, covering text, vision, video, audio, 3D, code, and agents.
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
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className={cn("text-sm", "text-muted-foreground")}>Model Weights</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">1T+</div>
                <div className={cn("text-sm", "text-muted-foreground")}>Max Parameters</div>
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

        {/* Zen5 Teaser */}
        <section className={cn("py-16 px-4", "bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-white/[0.03]")}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={cn("p-8 md:p-12 rounded-2xl border relative overflow-hidden", "border-border bg-background/50")}
            >
              <div className={cn("absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider", "bg-primary text-primary-foreground")}>
                Coming Soon
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className={cn("w-6 h-6", "text-foreground")} />
                <span className={cn("text-sm font-medium uppercase tracking-wider", "text-muted-foreground")}>Next Generation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Zen 5 Ultra
              </h2>
              <p className={cn("text-xl mb-6 max-w-2xl", "text-muted-foreground")}>
                2T+ parameter MoDE (Mixture of Distilled Experts). The largest open-weight model in history — trained on-chain via NVIDIA TEE confidential compute on{" "}
                <a href="https://hanzo.network" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">hanzo.network</a>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                <div className={cn("p-4 rounded-lg", "bg-foreground/5")}>
                  <div className="text-2xl font-bold mb-1">2T+</div>
                  <div className={cn("text-sm", "text-muted-foreground")}>Parameters</div>
                </div>
                <div className={cn("p-4 rounded-lg", "bg-foreground/5")}>
                  <div className="text-2xl font-bold mb-1">MoDE</div>
                  <div className={cn("text-sm", "text-muted-foreground")}>Distilled Expert Routing</div>
                </div>
                <div className={cn("p-4 rounded-lg", "bg-foreground/5")}>
                  <div className="text-2xl font-bold mb-1">On-Chain</div>
                  <div className={cn("text-sm", "text-muted-foreground")}>Verifiable Training</div>
                </div>
                <div className={cn("p-4 rounded-lg", "bg-foreground/5")}>
                  <div className="text-2xl font-bold mb-1">TEE</div>
                  <div className={cn("text-sm", "text-muted-foreground")}>NVIDIA Confidential Compute</div>
                </div>
              </div>
              <p className={cn("text-sm mb-6", "text-muted-foreground")}>
                Private beta available. Researchers and institutions can request early access to preprints and weights under a special research license. Built on our{" "}
                <a href="https://zenlm.org/papers/zen4-ultra-gt-qlora.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">GT-QLoRA</a>{" "}
                MoE fine-tuning research.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://hanzo.ai/contact" target="_blank" rel="noopener noreferrer">
                  <Button className={cn("rounded-full px-6 gap-2", "bg-primary text-primary-foreground hover:bg-primary/90")}>
                    Request Research Access
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="https://hanzo.network" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full px-6 gap-2">
                    <Globe className="w-4 h-4" />
                    Learn About On-Chain Training
                  </Button>
                </a>
              </div>
            </motion.div>
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
                      target="_blank"
                      rel="noopener noreferrer"
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
                        <ExternalLink className={cn("w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity", "text-muted-foreground")} />
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
