import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import {
  ArrowRight,
  ExternalLink,
  Github,
  FileText,
  Brain,
  Shield,
  Cpu,
  Network,
  Sparkles
} from "lucide-react";

// Category metadata for display
const categoryMeta = {
  all: { label: "All Papers", color: "neutral" },
  hanzo: { label: "Hanzo AI", color: "red" },
  lux: { label: "Lux Network", color: "blue" },
  zoo: { label: "Zoo Labs", color: "green" },
  zen: { label: "Zen LM", color: "purple" },
  crypto: { label: "Cryptography", color: "yellow" },
};

// Research areas
const researchAreas = [
  {
    icon: Brain,
    title: "AI Alignment",
    description: "Developing techniques to ensure AI systems reliably pursue intended goals and behave safely.",
    link: "/research/alignment",
  },
  {
    icon: Shield,
    title: "AI Safety",
    description: "Building robust safeguards and interpretability tools for understanding model behavior.",
    link: "/research/safety",
  },
  {
    icon: Network,
    title: "Decentralized AI",
    description: "Distributed inference, federated learning, and privacy-preserving AI infrastructure.",
    link: "/research/decentralized",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description: "Efficient models and deployment strategies for on-device and edge computing.",
    link: "/research/edge",
  },
];

// Open source projects
const openSourceProjects = [
  {
    name: "zap",
    description: "Zero-copy Agent Protocol - MCP killer with ~500x faster performance via Cap'n Proto RPC",
    stars: "3.1k",
    language: "Rust",
    href: "https://github.com/zap-protocol/zap",
  },
  {
    name: "hanzo-mcp",
    description: "Model Context Protocol - infrastructure for AI context management and tool use",
    stars: "2.3k",
    language: "TypeScript",
    href: "https://github.com/hanzoai/mcp",
  },
  {
    name: "candle",
    description: "Minimalist ML framework for Rust with GPU acceleration",
    stars: "1.8k",
    language: "Rust",
    href: "https://github.com/hanzoai/candle",
  },
  {
    name: "jin",
    description: "Unified multimodal AI framework for vision, language, and audio",
    stars: "1.2k",
    language: "Python",
    href: "https://github.com/hanzoai/jin",
  },
  {
    name: "hanzo-ui",
    description: "React component library for AI-powered applications",
    stars: "950",
    language: "TypeScript",
    href: "https://github.com/hanzoai/ui",
  },
  {
    name: "agents",
    description: "Multi-agent orchestration framework for complex AI tasks",
    stars: "820",
    language: "Python",
    href: "https://github.com/hanzoai/agents",
  },
  {
    name: "hanzo-dev",
    description: "AI-powered development environment and CLI tools",
    stars: "650",
    language: "TypeScript",
    href: "https://github.com/hanzoai/dev",
  },
];

// Paper categories for filtering
type PaperCategory = "hanzo" | "lux" | "zoo" | "zen" | "crypto";

interface Paper {
  title: string;
  authors: string;
  date: string;
  abstract: string;
  link: string;
  category: PaperCategory;
}

// Research papers - organized by organization
const papers: Paper[] = [
  // Hanzo AI Papers
  {
    title: "Active Semantic Optimization (ASO): Training-Free Adaptation for Foundation Models",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A novel framework for adapting foundation models to new tasks without additional training, using semantic optimization techniques.",
    link: "https://github.com/hanzoai/papers/blob/main/hanzo-aso.pdf",
    category: "hanzo",
  },
  {
    title: "Decentralized Semantic Optimization with Byzantine-Robust Prior Aggregation",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A distributed approach to semantic optimization that maintains robustness against Byzantine failures in decentralized AI systems.",
    link: "https://github.com/hanzoai/papers/blob/main/hanzo-dso.pdf",
    category: "hanzo",
  },
  {
    title: "Hamiltonian Market Maker (HMM): Decentralized AI Compute Exchange",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A market-making protocol for decentralized AI compute resources using Hamiltonian dynamics for optimal pricing.",
    link: "https://github.com/hanzoai/papers/blob/main/hanzo-hmm.pdf",
    category: "hanzo",
  },
  {
    title: "Hanzo Network Whitepaper: Decentralized AI Infrastructure",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Technical architecture for distributed AI inference and training across a decentralized network of compute providers.",
    link: "https://github.com/hanzoai/papers/blob/main/hanzo-network-whitepaper.pdf",
    category: "hanzo",
  },
  // Lux Network Papers - Consensus & Architecture
  {
    title: "Lux Quantum Consensus: Post-Quantum BFT Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Byzantine fault-tolerant consensus protocol designed for quantum-resistant security with lattice-based cryptography.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-quantum-consensus.pdf",
    category: "lux",
  },
  {
    title: "Quasar Consensus: High-Throughput DAG-Based Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "DAG-based consensus mechanism achieving high throughput with asynchronous finality guarantees.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-quasar-consensus.pdf",
    category: "lux",
  },
  {
    title: "FPC Consensus: Fast Probabilistic Consensus",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Probabilistic consensus protocol for rapid finality in high-volume transaction environments.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-fpc-consensus.pdf",
    category: "lux",
  },
  {
    title: "ETHFalcon: Post-Quantum Signatures for Ethereum",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Integration of FALCON lattice-based signatures into Ethereum-compatible chains for quantum resistance.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-ethfalcon-post-quantum.pdf",
    category: "lux",
  },
  {
    title: "Lux Bridge: Cross-Chain Asset Transfer",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Secure cross-chain bridge protocol for trustless asset transfers between heterogeneous chains.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-bridge.pdf",
    category: "lux",
  },
  // Zoo Labs Papers
  {
    title: "Gym Training Platform: Decentralized Model Training at Scale",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Infrastructure for distributed deep learning training across heterogeneous compute resources.",
    link: "https://github.com/zooai/papers/blob/main/pdfs/gym-training-platform.pdf",
    category: "zoo",
  },
  {
    title: "Experience Ledger: Decentralized Semantic Optimization",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Community-driven semantic optimization protocol for collaborative AI model improvement.",
    link: "https://github.com/zooai/papers/blob/main/pdfs/experience-ledger-dso.pdf",
    category: "zoo",
  },
  {
    title: "Zoo Foundation Mission",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Mission and vision for the Zoo Labs Foundation - open AI research network.",
    link: "https://github.com/zooai/papers/blob/main/pdfs/zoo-foundation-mission.pdf",
    category: "zoo",
  },
  {
    title: "Zoo Network Architecture",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Technical architecture for the Zoo decentralized AI network infrastructure.",
    link: "https://github.com/zooai/papers/blob/main/pdfs/zoo-network-architecture.pdf",
    category: "zoo",
  },
  {
    title: "Zoo Tokenomics: Incentive Design for Decentralized AI",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Economic model for incentivizing contributions to decentralized AI training and inference.",
    link: "https://github.com/zooai/papers/blob/main/pdfs/zoo-tokenomics.pdf",
    category: "zoo",
  },
  {
    title: "HLLM: Training-Free GRPO for Language Models",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Training-free group relative policy optimization techniques for language model alignment.",
    link: "https://github.com/zooai/papers/blob/main/pdfs/hllm-training-free-grpo.pdf",
    category: "zoo",
  },
  {
    title: "ZIP-002: Zen Reranker Specification",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Zoo Improvement Proposal for the Zen Reranker search reranking specification.",
    link: "https://github.com/zooai/papers/blob/main/pdfs/zip-002-zen-reranker.pdf",
    category: "zoo",
  },
  // Zen LM Papers - Model Whitepapers
  {
    title: "Zen Coder: Code-Specialized Language Model Architecture",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Architecture and training methodology for code-specialized language models with multi-language support.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-coder_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Omni: Unified Multimodal Foundation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Single model architecture for text, vision, audio, and code understanding with emergent cross-modal reasoning.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-omni_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Nano: Efficient Small Language Models",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Techniques for training highly capable small language models (600M-3B parameters) for edge deployment.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-nano_whitepaper.pdf",
    category: "zen",
  },
  // Additional Hanzo Stack Papers
  {
    title: "ZAP: Zero-copy Agent Protocol",
    authors: "Hanzo AI Research",
    date: "2026",
    abstract: "The MCP Killer—a unified protocol using Cap'n Proto RPC for ~500x faster agent communication with zero-copy performance, capability-secure routing, and native consensus integration.",
    link: "https://github.com/zap-protocol/zap",
    category: "hanzo",
  },
  {
    title: "Model Context Protocol: Standardized Tool Interface for LLM Augmentation",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A standardized framework for tool use in large language models with 260+ production tools across filesystem, code search, shell execution, and agent delegation.",
    link: "https://github.com/hanzoai/mcp",
    category: "hanzo",
  },
  {
    title: "LLM Gateway: Unified Multi-Provider API Translation and Optimization",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Architecture for unified proxy layer abstracting 100+ LLM providers with intelligent routing, cost optimization, and 20-30% cost reduction through smart failover.",
    link: "https://github.com/hanzoai/llm",
    category: "hanzo",
  },
  {
    title: "Agent Networks: Semantic Routing and Orchestration for Collaborative AI",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Framework for multi-agent systems with intelligent routing strategies, handoff mechanisms, shared state management, and workflow orchestration.",
    link: "https://github.com/hanzoai/agent",
    category: "hanzo",
  },
  {
    title: "Operative: Autonomous Computer Control via Vision-Language Models",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "System design enabling LLMs to autonomously control computers through vision, mouse/keyboard input, with safety isolation and multi-provider support.",
    link: "https://github.com/hanzoai/operative",
    category: "hanzo",
  },
  {
    title: "Jin: Unified Multimodal Architecture for Text, Vision, Audio, and 3D",
    authors: "Hanzo AI & Zen LM Research",
    date: "2025",
    abstract: "Novel architecture unifying text, vision, audio, and 3D modalities through shared embedding space with diffusion transformer and mixture-of-experts routing.",
    link: "https://github.com/hanzoai/jin",
    category: "hanzo",
  },
  {
    title: "Hanzo Memory: Local Vector Database with Multimodal Embeddings",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "High-performance AI memory system using embedded vector database (InfinityDB), local embeddings (FastEmbed), and semantic search over 100+ LLM providers.",
    link: "https://github.com/hanzoai/memory",
    category: "hanzo",
  },
  {
    title: "Hanzo Platform: Self-Hosted PaaS for AI Infrastructure",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Self-hostable platform-as-a-service providing deployment, database management, monitoring with Traefik integration and multi-language support.",
    link: "https://github.com/hanzoai/platform",
    category: "hanzo",
  },
  {
    title: "Post-Quantum Cryptography for Confidential AI Workloads",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Integration of ML-KEM/ML-DSA post-quantum algorithms with privacy-tier framework for GPU TEE isolation in confidential computing.",
    link: "https://github.com/hanzoai/rust-sdk",
    category: "hanzo",
  },
  // Additional Lux Network Papers (23 papers)
  {
    title: "Lux Quantum Consensus: Post-Quantum BFT Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Byzantine fault-tolerant consensus protocol designed for quantum-resistant security with lattice-based cryptography.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-quantum-consensus.pdf",
    category: "lux",
  },
  {
    title: "Quasar Consensus: High-Throughput DAG-Based Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "DAG-based consensus mechanism achieving high throughput with asynchronous finality guarantees.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-quasar-consensus.pdf",
    category: "lux",
  },
  {
    title: "FPC Consensus: Fast Probabilistic Consensus",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Probabilistic consensus protocol for rapid finality in high-volume transaction environments.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-fpc-consensus.pdf",
    category: "lux",
  },
  {
    title: "ETHFalcon: Post-Quantum Signatures for Ethereum",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Integration of FALCON lattice-based signatures into Ethereum-compatible chains for quantum resistance.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-ethfalcon-post-quantum.pdf",
    category: "lux",
  },
  {
    title: "Universal Threshold Signatures: Multi-Party Signing",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Threshold signature schemes for secure multi-party signing with configurable thresholds.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-universal-threshold-signatures.pdf",
    category: "lux",
  },
  {
    title: "Verkle Trees: Efficient State Commitments",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Verkle tree implementation for efficient blockchain state proofs with smaller witness sizes.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-verkle-trees.pdf",
    category: "lux",
  },
  {
    title: "TEE Computing Mesh: Trusted Execution Network",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Distributed trusted execution environment mesh for confidential computing at scale.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-tee-computing-mesh.pdf",
    category: "lux",
  },
  {
    title: "MPC Chain: Multi-Party Computation Infrastructure",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Multi-party computation protocol for privacy-preserving blockchain operations.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-mchain-mpc.pdf",
    category: "lux",
  },
  {
    title: "Lux Bridge: Cross-Chain Asset Transfer",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Secure cross-chain bridge protocol for trustless asset transfers between heterogeneous chains.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-bridge.pdf",
    category: "lux",
  },
  {
    title: "Fraud Proofs: Optimistic Rollup Verification",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Interactive fraud proof system for optimistic rollup security and dispute resolution.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-fraud-proofs.pdf",
    category: "lux",
  },
  {
    title: "Lux DID Specification: Decentralized Identity",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "W3C-compliant decentralized identifier specification for self-sovereign identity on Lux.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-id-did-specification.pdf",
    category: "lux",
  },
  {
    title: "Lux IAM: Identity and Access Management",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Decentralized identity and access management framework with verifiable credentials.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-id-iam.pdf",
    category: "lux",
  },
  {
    title: "DAO Governance Framework: On-Chain Governance",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Comprehensive DAO governance framework with voting mechanisms and treasury management.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-dao-governance-framework.pdf",
    category: "lux",
  },
  {
    title: "Credit Lending Protocol: DeFi Lending",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Decentralized lending protocol with dynamic interest rates and collateral management.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-credit-lending.pdf",
    category: "lux",
  },
  {
    title: "Perpetuals & Derivatives: On-Chain Derivatives",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Perpetual futures and derivatives protocol with oracle-based price feeds and liquidation mechanisms.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-perpetuals-derivatives.pdf",
    category: "lux",
  },
  {
    title: "Lightspeed DEX: High-Performance Exchange",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "High-throughput decentralized exchange with sub-second finality and MEV protection.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-lightspeed-dex.pdf",
    category: "lux",
  },
  {
    title: "Oracle Infrastructure: Decentralized Data Feeds",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Decentralized oracle network for reliable off-chain data delivery to smart contracts.",
    link: "https://github.com/luxfi/papers/blob/main/pdfs/lux-oracle-infrastructure.pdf",
    category: "lux",
  },
  // Additional Zen LM Papers (20+ more model papers)
  {
    title: "Zen Artist: Image Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "State-of-the-art image generation model with style control and high-resolution output.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-artist_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Artist Edit: Image Editing Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Instruction-following image editing model for precise visual modifications.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-artist-edit_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Designer Instruct: Design Instruction Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Design-focused model for creating layouts, graphics, and visual compositions from instructions.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-designer-instruct_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Designer Thinking: Design Reasoning Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Model with explicit design reasoning for iterative visual creation and refinement.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-designer-thinking_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Guard: Safety and Moderation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Content safety and moderation model for filtering harmful or inappropriate content.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-guard_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Eco: Energy-Efficient Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Energy-optimized model architecture for sustainable AI deployment.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-eco_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Next: Next-Generation Architecture",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Advanced architecture incorporating latest research in attention, scaling, and efficiency.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-next_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Scribe: Transcription and Generation",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Speech-to-text and text generation model for transcription and content creation.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-scribe_whitepaper.pdf",
    category: "zen",
  },
  {
    title: "Zen Reranker: Search Reranking Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Cross-encoder reranking model for improving search relevance and retrieval quality.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-reranker.pdf",
    category: "zen",
  },
  {
    title: "Zen Agent: Autonomous AI Agent",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Agent-optimized model for tool use, planning, and autonomous task execution.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-agent.pdf",
    category: "zen",
  },
  {
    title: "Zen Video: Video Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Text-to-video generation model for creating dynamic visual content.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-video.pdf",
    category: "zen",
  },
  {
    title: "Zen Director: Video Direction Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Video editing and direction model for cinematic control and scene composition.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-director.pdf",
    category: "zen",
  },
  {
    title: "Zen Foley: Audio Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Audio and sound effects generation model for multimedia production.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-foley.pdf",
    category: "zen",
  },
  {
    title: "Zen Musician: Music Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "AI music composition model for creating original musical pieces across genres.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-musician.pdf",
    category: "zen",
  },
  {
    title: "Zen 3D: 3D Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Text-to-3D generation model for creating 3D assets and environments.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-3d.pdf",
    category: "zen",
  },
  {
    title: "Zen World: World Model for Simulation",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "World model for environment simulation, physics understanding, and planning.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-world.pdf",
    category: "zen",
  },
  {
    title: "Zen Voyager: Navigation and Exploration Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Spatial reasoning model for navigation, mapping, and exploration tasks.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-voyager.pdf",
    category: "zen",
  },
  {
    title: "Zen Family Overview: Model Architecture Guide",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Comprehensive overview of the Zen model family architecture and capabilities.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen_family_overview.pdf",
    category: "zen",
  },
  {
    title: "Zen Technical Paper: Ultra-Efficient Language Models",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Technical overview of the Zen model family for local deployment and privacy preservation.",
    link: "https://github.com/zenlm/papers/blob/main/pdfs/zen-technical-paper.pdf",
    category: "zen",
  },
  // Cryptography Papers
  {
    title: "Fully Homomorphic Encryption for Machine Learning: TFHE-rs",
    authors: "Zama Research",
    date: "2024",
    abstract: "Implementation of TFHE (Torus Fully Homomorphic Encryption) in Rust for privacy-preserving ML computations.",
    link: "https://github.com/zama-ai/tfhe-rs",
    category: "crypto",
  },
  {
    title: "fhEVM: Confidential Smart Contracts on Ethereum",
    authors: "Zama Research",
    date: "2024",
    abstract: "Protocol for executing encrypted smart contracts using fully homomorphic encryption on EVM chains.",
    link: "https://github.com/zama-ai/fhevm",
    category: "crypto",
  },
  {
    title: "Concrete ML: Privacy-Preserving Machine Learning",
    authors: "Zama Research",
    date: "2024",
    abstract: "Framework for training and deploying ML models that operate on encrypted data using FHE.",
    link: "https://github.com/zama-ai/concrete-ml",
    category: "crypto",
  },
  {
    title: "RISC Zero zkVM: Zero-Knowledge Virtual Machine",
    authors: "RISC Zero",
    date: "2024",
    abstract: "General-purpose zero-knowledge virtual machine enabling verifiable computation with STARK proofs.",
    link: "https://github.com/risc0/risc0",
    category: "crypto",
  },
  {
    title: "ML-KEM: Post-Quantum Key Encapsulation Mechanism",
    authors: "NIST Post-Quantum Cryptography Project",
    date: "2024",
    abstract: "Lattice-based key encapsulation for quantum-resistant key exchange, standardized in FIPS 203.",
    link: "https://csrc.nist.gov/pubs/fips/203/final",
    category: "crypto",
  },
  {
    title: "ML-DSA: Post-Quantum Digital Signature Algorithm",
    authors: "NIST Post-Quantum Cryptography Project",
    date: "2024",
    abstract: "Lattice-based digital signatures for quantum-resistant authentication, standardized in FIPS 204.",
    link: "https://csrc.nist.gov/pubs/fips/204/final",
    category: "crypto",
  },
  {
    title: "SLH-DSA: Stateless Hash-Based Digital Signatures",
    authors: "NIST Post-Quantum Cryptography Project",
    date: "2024",
    abstract: "Hash-based signature scheme providing conservative quantum resistance, standardized in FIPS 205.",
    link: "https://csrc.nist.gov/pubs/fips/205/final",
    category: "crypto",
  },
  {
    title: "BLS Signatures: Aggregate Signature Schemes",
    authors: "Boneh-Lynn-Shacham",
    date: "2024",
    abstract: "Pairing-based aggregate signature scheme used in blockchain consensus and threshold cryptography.",
    link: "https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md",
    category: "crypto",
  },
  {
    title: "Threshold ECDSA: Distributed Key Generation",
    authors: "Multi-Party Computation Research",
    date: "2024",
    abstract: "Protocol for distributed ECDSA signing without any party learning the full private key.",
    link: "https://eprint.iacr.org/2019/114",
    category: "crypto",
  },
  {
    title: "Verifiable Random Functions for Blockchain",
    authors: "Cryptography Research",
    date: "2024",
    abstract: "VRF constructions for provably random leader election in proof-of-stake protocols.",
    link: "https://eprint.iacr.org/2017/099",
    category: "crypto",
  },
  {
    title: "KZG Polynomial Commitments",
    authors: "Kate-Zaverucha-Goldberg",
    date: "2024",
    abstract: "Constant-size polynomial commitments for data availability sampling and zkSNARKs.",
    link: "https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html",
    category: "crypto",
  },
  {
    title: "Plonk: Universal zkSNARK Construction",
    authors: "Gabizon-Williamson-Ciobotaru",
    date: "2024",
    abstract: "Universal and updateable structured reference string zkSNARK with efficient verification.",
    link: "https://eprint.iacr.org/2019/953",
    category: "crypto",
  },
  {
    title: "Groth16: Efficient zkSNARK Proofs",
    authors: "Groth",
    date: "2024",
    abstract: "Most efficient pairing-based zkSNARK construction with constant proof size and verification time.",
    link: "https://eprint.iacr.org/2016/260",
    category: "crypto",
  },
  {
    title: "STARKs: Scalable Transparent Arguments of Knowledge",
    authors: "Ben-Sasson et al.",
    date: "2024",
    abstract: "Post-quantum zero-knowledge proofs without trusted setup using hash functions.",
    link: "https://eprint.iacr.org/2018/046",
    category: "crypto",
  },
  {
    title: "Recursive SNARKs: Proof Composition",
    authors: "Valiant, Bitansky et al.",
    date: "2024",
    abstract: "Techniques for composing SNARKs to verify proofs of proof verification recursively.",
    link: "https://eprint.iacr.org/2019/1021",
    category: "crypto",
  },
  // Additional Hanzo AI Papers
  {
    title: "Scaling Laws for AI Compute: GPU Cluster Optimization",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Empirical analysis of scaling laws for distributed AI training and inference optimization.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-scaling-laws.pdf",
    category: "hanzo",
  },
  {
    title: "Continuous Learning: Online Model Adaptation",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Framework for continuous model updates without catastrophic forgetting in production systems.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-continuous-learning.pdf",
    category: "hanzo",
  },
  {
    title: "Confidential AI: GPU TEE Isolation Patterns",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Security architecture for running AI workloads in GPU trusted execution environments.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-confidential-ai.pdf",
    category: "hanzo",
  },
  {
    title: "AI Observability: Monitoring and Debugging Production Models",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Comprehensive framework for monitoring model performance, drift detection, and debugging.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-ai-observability.pdf",
    category: "hanzo",
  },
  {
    title: "Prompt Engineering: Systematic Optimization Techniques",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Methodologies for systematic prompt optimization and template management at scale.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-prompt-engineering.pdf",
    category: "hanzo",
  },
  {
    title: "RAG Architecture: Retrieval-Augmented Generation Patterns",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Design patterns for building robust retrieval-augmented generation systems in production.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-rag-architecture.pdf",
    category: "hanzo",
  },
  {
    title: "Fine-Tuning at Scale: Efficient Model Customization",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Infrastructure and techniques for efficient fine-tuning of large models with LoRA and QLoRA.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-fine-tuning.pdf",
    category: "hanzo",
  },
  {
    title: "Model Routing: Intelligent Request Distribution",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Algorithms for routing AI requests to optimal models based on cost, latency, and quality.",
    link: "https://github.com/hanzoai/papers/blob/main/pdfs/hanzo-model-routing.pdf",
    category: "hanzo",
  },
];

const Research = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState<"all" | PaperCategory>("all");

  const filteredPapers = activeCategory === "all"
    ? papers
    : papers.filter(p => p.category === activeCategory);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isDarkMode
                ? 'radial-gradient(ellipse 800px 800px at 50% 0%, rgba(253, 68, 68, 0.15), transparent)'
                : 'radial-gradient(ellipse 800px 800px at 50% 0%, rgba(253, 68, 68, 0.08), transparent)',
            }}
          />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fd4444]/10 border border-[#fd4444]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#fd4444]" />
                <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  100+ Research Papers
                </span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Research & Publications
              </h1>
              <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>
                Pioneering research in AI infrastructure, decentralized systems, and frontier models.
                All papers are CC BY 4.0 licensed and available on GitHub.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-neutral-900/50' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-8 rounded-xl border transition-colors group ${
                      isDarkMode
                        ? 'bg-neutral-900/50 border-white/10 hover:border-white/20'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-10 h-10 mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-gray-700'}`} />
                    <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{area.title}</h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>{area.description}</p>
                    <Link
                      to={area.link}
                      className={`text-sm font-medium hover:underline inline-flex items-center gap-1 ${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-24 px-4" id="open-source">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Open Source</h2>
                <p className={isDarkMode ? 'text-neutral-400' : 'text-gray-600'}>
                  We believe in open research and share our tools with the community.
                </p>
              </div>
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className={`gap-2 ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}>
                  <Github className="w-4 h-4" />
                  View all on GitHub
                </Button>
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openSourceProjects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`block p-6 rounded-xl transition-all group ${
                    isDarkMode
                      ? 'bg-neutral-900/50 border border-white/10 hover:border-white/20'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github className={`w-5 h-5 ${isDarkMode ? 'text-neutral-400' : 'text-gray-700'}`} />
                      <span className={`font-semibold group-hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {project.name}
                      </span>
                    </div>
                    <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-neutral-500' : 'text-gray-400'}`} />
                  </div>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className={`flex items-center gap-4 text-xs ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      {project.language}
                    </span>
                    <span>⭐ {project.stars}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Papers Section */}
        <section className={`py-24 px-4 ${isDarkMode ? 'bg-neutral-900/50' : 'bg-gray-50'}`} id="papers">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Research Papers</h2>
                <p className={isDarkMode ? 'text-neutral-400' : 'text-gray-600'}>
                  Published work from Hanzo AI, Lux Network, Zoo Labs, and Zen LM.
                </p>
              </div>
              <a
                href="https://github.com/hanzoai/papers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className={`gap-2 ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}>
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
              </a>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(["all", "hanzo", "lux", "zoo", "zen", "crypto"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#fd4444] text-white'
                      : isDarkMode
                        ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {categoryMeta[cat].label}
                  {cat !== "all" && (
                    <span className="ml-2 opacity-70">
                      ({papers.filter(p => p.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredPapers.map((paper, index) => (
                <motion.a
                  key={paper.title}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`block p-6 rounded-xl transition-all group ${
                    isDarkMode
                      ? 'bg-black/50 border border-white/10 hover:border-white/20'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <FileText className={`w-5 h-5 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>{paper.date}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          paper.category === 'hanzo' ? 'bg-red-500/20 text-red-400' :
                          paper.category === 'lux' ? 'bg-blue-500/20 text-blue-400' :
                          paper.category === 'zoo' ? 'bg-green-500/20 text-green-400' :
                          paper.category === 'crypto' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {categoryMeta[paper.category].label}
                        </span>
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 group-hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {paper.title}
                      </h3>
                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>{paper.authors}</p>
                      <p className={isDarkMode ? 'text-neutral-400' : 'text-gray-600'}>{paper.abstract}</p>
                    </div>
                    <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex-shrink-0 ${isDarkMode ? 'text-neutral-500' : 'text-gray-400'}`} />
                  </div>
                </motion.a>
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className={`text-center py-12 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>
                No papers found in this category.
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#fd4444]/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Join our research efforts
            </h2>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>
              We're looking for talented researchers to help build the future of safe AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/careers">
                <Button size="lg" className={`rounded-full px-8 ${isDarkMode ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}>
                  View Open Positions
                </Button>
              </Link>
              <a href="mailto:research@hanzo.industries">
                <Button size="lg" variant="outline" className={`rounded-full px-8 ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}>
                  Contact Research Team
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
