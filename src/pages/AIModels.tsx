import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
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
} from "lucide-react";

// Model family categories
const modelFamilies = {
  language: {
    title: "Language Models",
    icon: Brain,
    description: "Foundation LLMs for text generation, reasoning, and agents",
    models: [
      {
        name: "zen-nano",
        params: "0.6B",
        description: "Ultra-lightweight LLM for edge and mobile deployment",
        performance: "44K tokens/sec",
        memory: "0.4-1.2GB",
        capabilities: ["Text", "Code", "Math"],
        href: "https://huggingface.co/zenlm/zen-nano-0.6b",
      },
      {
        name: "zen-eco",
        params: "4B",
        description: "Efficient general-purpose instruction following",
        performance: "28K tokens/sec",
        memory: "2-8GB",
        capabilities: ["Text", "Code", "Math", "Reasoning"],
        href: "https://huggingface.co/zenlm/zen-eco-4b-instruct",
      },
      {
        name: "zen-agent",
        params: "4B",
        description: "Tool-calling LLM with MCP support for agentic workflows",
        performance: "28K tokens/sec",
        memory: "2-8GB",
        capabilities: ["Text", "Code", "Agents", "Tools"],
        href: "https://huggingface.co/zenlm/zen-agent-4b",
      },
      {
        name: "zen-coder",
        params: "7B",
        description: "Code generation and software engineering assistant",
        performance: "22K tokens/sec",
        memory: "4-14GB",
        capabilities: ["Code", "Debugging", "Refactoring"],
        href: "https://huggingface.co/zenlm/zen-coder-7b",
      },
    ],
  },
  vision: {
    title: "Vision-Language Models",
    icon: Eye,
    description: "Multimodal models for image understanding and generation",
    models: [
      {
        name: "zen-vl",
        params: "7B",
        description: "Vision-language model for image understanding and OCR",
        performance: "Real-time",
        memory: "8-16GB",
        capabilities: ["Image Understanding", "OCR", "VQA"],
        href: "https://huggingface.co/zenlm/zen-vl-7b",
      },
      {
        name: "zen-omni",
        params: "8B",
        description: "Unified multimodal model for vision, audio, and text",
        performance: "Real-time",
        memory: "10-20GB",
        capabilities: ["Vision", "Audio", "Text", "Speech"],
        href: "https://huggingface.co/zenlm/zen-omni-8b",
      },
    ],
  },
  video: {
    title: "Video Generation",
    icon: Video,
    description: "Text-to-video and image-to-video synthesis",
    models: [
      {
        name: "zen-director",
        params: "5B",
        description: "Text/image-to-video generation up to 10 seconds",
        performance: "~60s for 5s video",
        memory: "12-16GB",
        capabilities: ["Text-to-Video", "Image-to-Video"],
        href: "https://huggingface.co/zenlm/zen-director-5b",
      },
      {
        name: "zen-video",
        params: "8B",
        description: "High-quality professional video synthesis",
        performance: "~45s for 5s video",
        memory: "16-24GB",
        capabilities: ["HD Video", "Long-form"],
        href: "https://huggingface.co/zenlm/zen-video",
      },
      {
        name: "zen-video-i2v",
        params: "8B",
        description: "Animate static images into video",
        performance: "~45s for 5s video",
        memory: "16-24GB",
        capabilities: ["Image Animation", "Motion"],
        href: "https://huggingface.co/zenlm/zen-video-i2v",
      },
    ],
  },
  audio: {
    title: "Audio & Music",
    icon: Music,
    description: "Music generation, voice synthesis, and sound effects",
    models: [
      {
        name: "zen-musician",
        params: "7B",
        description: "Generate full songs with vocals and accompaniment",
        performance: "~360s for 30s audio",
        memory: "16-24GB",
        capabilities: ["Music", "Vocals", "Multilingual"],
        href: "https://huggingface.co/zenlm/zen-musician-7b",
      },
      {
        name: "zen-foley",
        params: "3B",
        description: "Professional sound effects for video",
        performance: "~15s for 10s audio",
        memory: "12-24GB",
        capabilities: ["SFX", "Ambient", "Foley"],
        href: "https://huggingface.co/zenlm/zen-foley",
      },
      {
        name: "zen-dub",
        params: "4B",
        description: "Voice dubbing and multilingual speech synthesis",
        performance: "Real-time",
        memory: "4-8GB",
        capabilities: ["Dubbing", "TTS", "Voice Cloning"],
        href: "https://huggingface.co/zenlm/zen-dub",
      },
    ],
  },
  spatial: {
    title: "3D & Spatial",
    icon: Box,
    description: "3D asset generation and world simulation",
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
        name: "zen-voyager",
        params: "5B",
        description: "Camera-controlled 3D world exploration",
        performance: "~30s for 60 frames",
        memory: "16-24GB",
        capabilities: ["3D Video", "Depth", "Point Clouds"],
        href: "https://huggingface.co/zenlm/zen-voyager",
      },
      {
        name: "zen-world",
        params: "12B",
        description: "Large-scale 3D world generation",
        performance: "Scene-dependent",
        memory: "24GB+",
        capabilities: ["World Gen", "City-scale", "Environments"],
        href: "https://huggingface.co/zenlm/zen-world",
      },
    ],
  },
};

// Infrastructure tools
const infrastructure = [
  {
    name: "Zen Gym",
    description: "Unified training platform for all Zen models with LoRA, QLoRA, GRPO, and more",
    icon: Layers,
    href: "https://github.com/zenlm/zen-gym",
  },
  {
    name: "Zen Engine",
    description: "High-performance inference with OpenAI-compatible API",
    icon: Server,
    href: "https://github.com/zenlm/zen-engine",
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
  { model: "zen-agent", text: true, image: false, video: false, audio: false, threeD: false, code: true, agents: true },
  { model: "zen-vl", text: true, image: true, video: false, audio: false, threeD: false, code: false, agents: false },
  { model: "zen-omni", text: true, image: true, video: false, audio: true, threeD: false, code: false, agents: false },
  { model: "zen-director", text: true, image: true, video: true, audio: false, threeD: false, code: false, agents: false },
  { model: "zen-3d", text: true, image: true, video: false, audio: false, threeD: true, code: false, agents: false },
  { model: "zen-musician", text: true, image: false, video: false, audio: true, threeD: false, code: false, agents: false },
];

const AIModels = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className={cn("py-24 px-4 bg-gradient-to-b", isDarkMode ? "from-white/5 to-transparent" : "from-gray-50 to-white")}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={cn("inline-block px-4 py-1 rounded-full text-sm font-medium mb-6", isDarkMode ? "bg-white text-black" : "bg-black text-white")}>
                Zen AI Model Family
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Hypermodal AI
              </h1>
              <p className={cn("text-xl max-w-3xl mx-auto mb-8", isDarkMode ? "text-white/60" : "text-black/60")}>
                The world's most comprehensive open-weight AI model ecosystem.
                From edge computing to world simulation, covering text, vision, video, audio, and 3D.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className={cn("rounded-full px-8 gap-2", isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
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
        <section className={cn("py-12 px-4 border-y", isDarkMode ? "border-white/10" : "border-black/10")}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-1">20+</div>
                <div className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>Models</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">44K</div>
                <div className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>Tokens/sec (nano)</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">6</div>
                <div className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>Modalities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">Apache 2.0</div>
                <div className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>License</div>
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
              className={cn("py-20 px-4", familyIndex % 2 === 0 ? "" : isDarkMode ? "bg-white/5" : "bg-gray-50")}
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
                    <FamilyIcon className={cn("w-8 h-8", isDarkMode ? "text-white/70" : "text-black/70")} />
                    <h2 className="text-3xl font-bold">{family.title}</h2>
                  </div>
                  <p className={cn("max-w-2xl", isDarkMode ? "text-white/60" : "text-black/60")}>{family.description}</p>
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
                      className={cn("block p-6 border rounded-xl hover:shadow-lg transition-all group", isDarkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-white border-black/10 hover:border-black/20")}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold group-hover:underline">
                            {model.name}
                          </h3>
                          <span className={cn("text-sm font-mono", isDarkMode ? "text-white/40" : "text-black/40")}>{model.params}</span>
                        </div>
                        <ExternalLink className={cn("w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity", isDarkMode ? "text-white/50" : "text-black/50")} />
                      </div>
                      <p className={cn("text-sm mb-4", isDarkMode ? "text-white/60" : "text-black/60")}>{model.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {model.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className={cn("px-2 py-0.5 text-xs rounded-full", isDarkMode ? "bg-white/10 text-white/60" : "bg-black/5 text-black/60")}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <div className={cn("flex items-center justify-between text-xs pt-4 border-t", isDarkMode ? "text-white/40 border-white/10" : "text-black/40 border-black/10")}>
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
        <section className={cn("py-20 px-4", isDarkMode ? "bg-white/5" : "bg-black text-white")}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className={cn("text-3xl font-bold mb-4", isDarkMode ? "text-white" : "text-white")}>Capabilities Matrix</h2>
              <p className={cn(isDarkMode ? "text-white/50" : "text-white/60")}>
                Each model specializes in different modalities and tasks
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={cn("border-b", isDarkMode ? "border-white/10" : "border-white/20")}>
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
                    <tr key={row.model} className={cn("border-b", isDarkMode ? "border-white/5 hover:bg-white/5" : "border-white/10 hover:bg-white/10")}>
                      <td className={cn("py-3 px-4 font-mono", isDarkMode ? "text-white" : "text-white")}>{row.model}</td>
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
              <p className={cn(isDarkMode ? "text-white/60" : "text-black/60")}>
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
                    className={cn("block p-8 rounded-2xl border hover:shadow-lg transition-all group text-center", isDarkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-black/5 border-black/10 hover:border-black/20")}
                  >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4", isDarkMode ? "bg-white" : "bg-black")}>
                      <ToolIcon className={cn("w-6 h-6", isDarkMode ? "text-black" : "text-white")} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                      {tool.name}
                    </h3>
                    <p className={cn("text-sm", isDarkMode ? "text-white/60" : "text-black/60")}>{tool.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className={cn("py-20 px-4", isDarkMode ? "bg-white/5" : "bg-gray-50")}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
              <p className={cn(isDarkMode ? "text-white/60" : "text-black/60")}>Get started with any Zen model in seconds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 overflow-x-auto"
            >
              <pre className="text-sm text-gray-300 font-mono">
{`# Install and run any model
pip install transformers torch

# Use directly
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("zenlm/zen-eco-4b-instruct")
tokenizer = AutoTokenizer.from_pretrained("zenlm/zen-eco-4b-instruct")

# Or use with Zen Engine (OpenAI-compatible API)
from openai import OpenAI
client = OpenAI(base_url="http://localhost:3690/v1")

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
            <p className={cn("text-xl mb-8", isDarkMode ? "text-white/60" : "text-black/60")}>
              Open-weight models, Apache 2.0 licensed. Free to use for research and commercial applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className={cn("rounded-full px-8 gap-2", isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link to="/research">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Research Papers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIModels;
