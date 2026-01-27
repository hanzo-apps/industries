import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
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
  Sparkles,
  Search,
  X
} from "lucide-react";

// Organization metadata for display
const orgMeta = {
  all: { label: "All Organizations", color: "neutral" },
  hanzo: { label: "Hanzo AI", color: "red" },
  lux: { label: "Lux Network", color: "blue" },
  zoo: { label: "Zoo Labs", color: "green" },
  zen: { label: "Zen LM", color: "purple" },
};

// Topic/category metadata for display
const topicMeta = {
  all: { label: "All Topics", color: "neutral" },
  consensus: { label: "Consensus", color: "blue" },
  fhe: { label: "FHE", color: "green" },
  mpc: { label: "MPC", color: "purple" },
  zkp: { label: "Zero-Knowledge", color: "yellow" },
  pqc: { label: "Post-Quantum", color: "pink" },
  defi: { label: "DeFi", color: "orange" },
  identity: { label: "Identity", color: "cyan" },
  ai: { label: "AI/ML", color: "red" },
  models: { label: "Models", color: "violet" },
  agents: { label: "Agents", color: "emerald" },
  infrastructure: { label: "Infrastructure", color: "slate" },
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
    description: "Zero-copy Agent Protocol - MCP killer with ~500x faster performance via zero-copy RPC",
    stars: "3.1k",
    language: "Rust",
    href: "https://github.com/zap-proto/zap",
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

// Type definitions
type Organization = "hanzo" | "lux" | "zoo" | "zen";
type Topic = "consensus" | "fhe" | "mpc" | "zkp" | "pqc" | "defi" | "identity" | "ai" | "models" | "agents" | "infrastructure";

interface Paper {
  title: string;
  authors: string;
  date: string;
  abstract: string;
  link: string;
  org: Organization;
  topics: Topic[];
  featured?: boolean;
}

// Research papers with multi-dimensional categorization
const papers: Paper[] = [
  // ===== FEATURED: ZAP Protocol =====
  {
    title: "ZAP: Zero-copy Agent Protocol",
    authors: "Hanzo AI Research",
    date: "2026",
    abstract: "The MCP Killer—unified protocol using zero-copy RPC for ~500x faster agent communication. Features zero-copy performance (<1μs latency), capability-secure routing, native metastable consensus, and post-quantum security. Achieves 1.2M/s throughput vs MCP's 2.2k/s.",
    link: "https://github.com/zap-proto/zap",
    org: "hanzo",
    topics: ["agents", "infrastructure", "consensus"],
    featured: true,
  },

  // ===== HANZO AI - Agents & Infrastructure =====
  {
    title: "Model Context Protocol: Standardized Tool Interface for LLM Augmentation",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A standardized framework for tool use in large language models with 260+ production tools across filesystem, code search, shell execution, and agent delegation.",
    link: "https://github.com/hanzoai/mcp",
    org: "hanzo",
    topics: ["agents", "infrastructure"],
  },
  {
    title: "Agent Networks: Semantic Routing and Orchestration for Collaborative AI",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Framework for multi-agent systems with intelligent routing strategies, handoff mechanisms, shared state management, and workflow orchestration.",
    link: "https://github.com/hanzoai/agent",
    org: "hanzo",
    topics: ["agents", "ai"],
  },
  {
    title: "Operative: Autonomous Computer Control via Vision-Language Models",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "System design enabling LLMs to autonomously control computers through vision, mouse/keyboard input, with safety isolation and multi-provider support.",
    link: "https://github.com/hanzoai/operative",
    org: "hanzo",
    topics: ["agents", "ai"],
  },
  {
    title: "LLM Gateway: Unified Multi-Provider API Translation and Optimization",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Architecture for unified proxy layer abstracting 100+ LLM providers with intelligent routing, cost optimization, and 20-30% cost reduction through smart failover.",
    link: "https://github.com/hanzoai/llm",
    org: "hanzo",
    topics: ["infrastructure", "ai"],
  },

  // ===== HANZO AI - AI Research =====
  {
    title: "Active Semantic Optimization (ASO): Training-Free Adaptation for Foundation Models",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A novel framework for adapting foundation models to new tasks without additional training, using semantic optimization techniques. Achieves 18.2% SWE-bench resolution.",
    link: "https://github.com/hanzoai/papers/raw/main/hanzo-aso.pdf",
    org: "hanzo",
    topics: ["ai", "models"],
    featured: true,
  },
  {
    title: "Decentralized Semantic Optimization with Byzantine-Robust Prior Aggregation",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A distributed approach to semantic optimization that maintains robustness against Byzantine failures in decentralized AI systems.",
    link: "https://github.com/hanzoai/papers/raw/main/hanzo-dso.pdf",
    org: "hanzo",
    topics: ["ai", "consensus"],
  },
  {
    title: "Hamiltonian Market Maker (HMM): Decentralized AI Compute Exchange",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "A market-making protocol for decentralized AI compute resources using Hamiltonian dynamics. Achieves <200ms quote latency, 98.7% price stability, zero impermanent loss.",
    link: "https://github.com/hanzoai/papers/raw/main/hanzo-hmm.pdf",
    org: "hanzo",
    topics: ["defi", "infrastructure"],
    featured: true,
  },
  {
    title: "Hanzo Network Whitepaper: Decentralized AI Infrastructure",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Technical architecture for distributed AI inference and training across a decentralized network of compute providers.",
    link: "https://github.com/hanzoai/papers/raw/main/hanzo-network-whitepaper.pdf",
    org: "hanzo",
    topics: ["infrastructure", "ai"],
  },
  {
    title: "Jin: Unified Multimodal Architecture for Text, Vision, Audio, and 3D",
    authors: "Hanzo AI & Zen LM Research",
    date: "2025",
    abstract: "Novel architecture unifying text, vision, audio, and 3D modalities through shared embedding space with diffusion transformer and mixture-of-experts routing.",
    link: "https://github.com/hanzoai/jin",
    org: "hanzo",
    topics: ["models", "ai"],
  },
  {
    title: "Hanzo Memory: Local Vector Database with Multimodal Embeddings",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "High-performance AI memory system using embedded vector database (InfinityDB), local embeddings (FastEmbed), and semantic search.",
    link: "https://github.com/hanzoai/memory",
    org: "hanzo",
    topics: ["infrastructure", "ai"],
  },
  {
    title: "Hanzo Platform: Self-Hosted PaaS for AI Infrastructure",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Self-hostable platform-as-a-service providing deployment, database management, monitoring with Traefik integration.",
    link: "https://github.com/hanzoai/platform",
    org: "hanzo",
    topics: ["infrastructure"],
  },
  {
    title: "Post-Quantum Cryptography for Confidential AI Workloads",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Integration of ML-KEM/ML-DSA post-quantum algorithms with privacy-tier framework for GPU TEE isolation in confidential computing.",
    link: "https://github.com/hanzoai/rust-sdk",
    org: "hanzo",
    topics: ["pqc", "ai"],
  },
  {
    title: "Confidential AI: GPU TEE Isolation Patterns",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Security architecture for running AI workloads in GPU trusted execution environments with Intel SGX and AMD SEV support.",
    link: "https://github.com/hanzoai/papers/raw/main/pdfs/hanzo-confidential-ai.pdf",
    org: "hanzo",
    topics: ["mpc", "infrastructure"],
  },
  {
    title: "Scaling Laws for AI Compute: GPU Cluster Optimization",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Empirical analysis of scaling laws for distributed AI training and inference optimization across heterogeneous GPU clusters.",
    link: "https://github.com/hanzoai/papers/raw/main/pdfs/hanzo-scaling-laws.pdf",
    org: "hanzo",
    topics: ["ai", "infrastructure"],
  },
  {
    title: "RAG Architecture: Retrieval-Augmented Generation Patterns",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Design patterns for building robust retrieval-augmented generation systems in production with hybrid search and reranking.",
    link: "https://github.com/hanzoai/papers/raw/main/pdfs/hanzo-rag-architecture.pdf",
    org: "hanzo",
    topics: ["ai", "infrastructure"],
  },
  {
    title: "Model Routing: Intelligent Request Distribution",
    authors: "Hanzo AI Research",
    date: "2025",
    abstract: "Algorithms for routing AI requests to optimal models based on cost, latency, quality, and capability matching.",
    link: "https://github.com/hanzoai/papers/raw/main/pdfs/hanzo-model-routing.pdf",
    org: "hanzo",
    topics: ["ai", "infrastructure"],
  },

  // ===== LUX NETWORK - Consensus =====
  {
    title: "Lux Quantum Consensus: Post-Quantum BFT Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Byzantine fault-tolerant consensus protocol with quantum-resistant security using FALCON lattice-based signatures and dual-certificate finality.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-quantum-consensus.pdf",
    org: "lux",
    topics: ["consensus", "pqc"],
    featured: true,
  },
  {
    title: "Quasar Consensus: High-Throughput DAG-Based Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "DAG-based consensus mechanism achieving high throughput with asynchronous finality guarantees and metastable voting.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-quasar-consensus.pdf",
    org: "lux",
    topics: ["consensus"],
  },
  {
    title: "FPC Consensus: Fast Probabilistic Consensus",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Probabilistic consensus protocol for rapid finality using opinion dynamics and threshold voting.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-fpc-consensus.pdf",
    org: "lux",
    topics: ["consensus"],
  },
  {
    title: "Wave Consensus: Sub-Second Finality Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Optimistic consensus protocol achieving sub-second finality for high-frequency transaction environments.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-wave-consensus.pdf",
    org: "lux",
    topics: ["consensus"],
  },
  {
    title: "Focus Consensus: High-Throughput Streaming Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Streaming consensus protocol optimized for continuous transaction throughput with parallel validation.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-focus-consensus.pdf",
    org: "lux",
    topics: ["consensus"],
  },
  {
    title: "Snow++ Consensus: Enhanced Avalanche Protocol",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Enhanced Snow consensus with improved liveness guarantees and adaptive sampling strategies.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-snow-plus-plus.pdf",
    org: "lux",
    topics: ["consensus"],
  },

  // ===== LUX NETWORK - Post-Quantum Cryptography =====
  {
    title: "ETHFalcon: Post-Quantum Signatures for Ethereum",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Integration of FALCON lattice-based signatures into Ethereum-compatible chains for quantum resistance with EIP compatibility.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-ethfalcon-post-quantum.pdf",
    org: "lux",
    topics: ["pqc", "consensus"],
  },
  {
    title: "Ringtail: Threshold Post-Quantum Signatures",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Threshold signature scheme combining FALCON with distributed key generation for post-quantum multi-party signing.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-ringtail-threshold.pdf",
    org: "lux",
    topics: ["pqc", "mpc"],
  },
  {
    title: "Universal Threshold Signatures: Multi-Party Signing",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Threshold signature schemes for secure multi-party signing with configurable thresholds and dealer-free setup.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-universal-threshold-signatures.pdf",
    org: "lux",
    topics: ["mpc", "pqc"],
  },
  {
    title: "BLS-FALCON Hybrid Signatures",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Dual-certificate signature scheme combining BLS aggregate signatures with FALCON for quantum-transitional security.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-bls-falcon-hybrid.pdf",
    org: "lux",
    topics: ["pqc", "consensus"],
  },

  // ===== LUX NETWORK - MPC & TEE =====
  {
    title: "LSSS Threshold Cryptography: Linear Secret Sharing Schemes",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Implementation of Linear Secret Sharing Schemes (LSSS) for threshold cryptography with arbitrary access structures and efficient reconstruction.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-lsss-threshold.pdf",
    org: "lux",
    topics: ["mpc", "pqc"],
    featured: true,
  },
  {
    title: "MPC Chain: Multi-Party Computation Infrastructure",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Multi-party computation protocol for privacy-preserving blockchain operations with SPDZ and BGW protocols.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-mchain-mpc.pdf",
    org: "lux",
    topics: ["mpc"],
  },
  {
    title: "TEE Computing Mesh: Trusted Execution Network",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Distributed trusted execution environment mesh for confidential computing with Intel SGX and AMD SEV attestation.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-tee-computing-mesh.pdf",
    org: "lux",
    topics: ["mpc", "infrastructure"],
  },
  {
    title: "Threshold ECDSA on Lux: Distributed Key Management",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Implementation of threshold ECDSA for distributed custody without any party learning the full private key.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-threshold-ecdsa.pdf",
    org: "lux",
    topics: ["mpc"],
  },

  // ===== LUX NETWORK - Zero-Knowledge =====
  {
    title: "Fraud Proofs: Optimistic Rollup Verification",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Interactive fraud proof system for optimistic rollup security with bisection-based dispute resolution.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-fraud-proofs.pdf",
    org: "lux",
    topics: ["zkp", "consensus"],
  },
  {
    title: "Verkle Trees: Efficient State Commitments",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Verkle tree implementation for efficient blockchain state proofs with 10x smaller witness sizes than Merkle trees.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-verkle-trees.pdf",
    org: "lux",
    topics: ["zkp", "infrastructure"],
  },
  {
    title: "KZG Data Availability Sampling",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "KZG polynomial commitment scheme for data availability sampling in modular blockchain architecture.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-kzg-das.pdf",
    org: "lux",
    topics: ["zkp", "consensus"],
  },

  // ===== LUX NETWORK - DeFi =====
  {
    title: "Lightspeed DEX: High-Performance Exchange",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "High-throughput decentralized exchange with sub-second finality, concentrated liquidity, and MEV protection.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-lightspeed-dex.pdf",
    org: "lux",
    topics: ["defi"],
  },
  {
    title: "Credit Lending Protocol: DeFi Lending",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Decentralized lending protocol with dynamic interest rates, isolated collateral pools, and liquidation mechanisms.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-credit-lending.pdf",
    org: "lux",
    topics: ["defi"],
  },
  {
    title: "Perpetuals & Derivatives: On-Chain Derivatives",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Perpetual futures and derivatives protocol with oracle-based price feeds and cross-margin support.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-perpetuals-derivatives.pdf",
    org: "lux",
    topics: ["defi"],
  },
  {
    title: "Lux Bridge: Cross-Chain Asset Transfer",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Secure cross-chain bridge protocol for trustless asset transfers using light client verification.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-bridge.pdf",
    org: "lux",
    topics: ["defi", "infrastructure"],
  },
  {
    title: "Oracle Infrastructure: Decentralized Data Feeds",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Decentralized oracle network for reliable off-chain data delivery with economic security guarantees.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-oracle-infrastructure.pdf",
    org: "lux",
    topics: ["defi", "infrastructure"],
  },
  {
    title: "DAO Governance Framework: On-Chain Governance",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Comprehensive DAO governance framework with timelock, voting delegation, and treasury management.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-dao-governance-framework.pdf",
    org: "lux",
    topics: ["defi", "infrastructure"],
  },

  // ===== LUX NETWORK - Identity =====
  {
    title: "Lux DID Specification: Decentralized Identity",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "W3C-compliant decentralized identifier specification for self-sovereign identity with key rotation support.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-id-did-specification.pdf",
    org: "lux",
    topics: ["identity"],
  },
  {
    title: "Lux IAM: Identity and Access Management",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Decentralized identity and access management framework with verifiable credentials and selective disclosure.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-id-iam.pdf",
    org: "lux",
    topics: ["identity"],
  },
  {
    title: "Verifiable Credentials on Lux",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Implementation of W3C Verifiable Credentials with zero-knowledge selective disclosure proofs.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-verifiable-credentials.pdf",
    org: "lux",
    topics: ["identity", "zkp"],
  },

  // ===== ZOO LABS - Decentralized AI =====
  {
    title: "Gym Training Platform: Decentralized Model Training at Scale",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Infrastructure for distributed deep learning training across heterogeneous compute resources with 99.8% cost reduction via TF-GRPO.",
    link: "https://github.com/zooai/papers/raw/main/pdfs/gym-training-platform.pdf",
    org: "zoo",
    topics: ["ai", "infrastructure"],
    featured: true,
  },
  {
    title: "Experience Ledger: Decentralized Semantic Optimization",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Community-driven semantic optimization protocol for collaborative AI model improvement with Byzantine-robust aggregation.",
    link: "https://github.com/zooai/papers/raw/main/pdfs/experience-ledger-dso.pdf",
    org: "zoo",
    topics: ["ai", "consensus"],
  },
  {
    title: "HLLM: Training-Free GRPO for Language Models",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Training-free group relative policy optimization achieving $18 training cost vs $10,000+ traditional methods with 100× data efficiency.",
    link: "https://github.com/zooai/papers/raw/main/pdfs/hllm-training-free-grpo.pdf",
    org: "zoo",
    topics: ["ai", "models"],
    featured: true,
  },
  {
    title: "Zoo Network Architecture",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Technical architecture for the Zoo decentralized AI network with proof-of-contribution consensus.",
    link: "https://github.com/zooai/papers/raw/main/pdfs/zoo-network-architecture.pdf",
    org: "zoo",
    topics: ["infrastructure", "consensus"],
  },
  {
    title: "Zoo Tokenomics: Incentive Design for Decentralized AI",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Economic model for incentivizing contributions to decentralized AI training and inference.",
    link: "https://github.com/zooai/papers/raw/main/pdfs/zoo-tokenomics.pdf",
    org: "zoo",
    topics: ["defi", "ai"],
  },
  {
    title: "ZIP-002: Zen Reranker Specification",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Zoo Improvement Proposal for the Zen Reranker cross-encoder search reranking model.",
    link: "https://github.com/zooai/papers/raw/main/pdfs/zip-002-zen-reranker.pdf",
    org: "zoo",
    topics: ["ai", "models"],
  },
  {
    title: "Zoo Foundation Mission",
    authors: "Zoo Labs Foundation",
    date: "2025",
    abstract: "Mission and vision for the Zoo Labs Foundation - open AI research network for decentralized science.",
    link: "https://github.com/zooai/papers/raw/main/pdfs/zoo-foundation-mission.pdf",
    org: "zoo",
    topics: ["infrastructure"],
  },

  // ===== ZEN LM - Models =====
  {
    title: "Zen Family Overview: Model Architecture Guide",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Comprehensive overview of the Zen model family (600M-480B parameters) with 22 variants across 6 size tiers.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen_family_overview.pdf",
    org: "zen",
    topics: ["models"],
    featured: true,
  },
  {
    title: "Zen Omni: Unified Multimodal Foundation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Single model architecture for text, vision, audio, and code understanding with emergent cross-modal reasoning.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-omni_whitepaper.pdf",
    org: "zen",
    topics: ["models", "ai"],
  },
  {
    title: "Zen Coder: Code-Specialized Language Model Architecture",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Architecture for code-specialized language models with multi-language support and repository-level understanding.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-coder_whitepaper.pdf",
    org: "zen",
    topics: ["models", "ai"],
  },
  {
    title: "Zen Nano: Efficient Small Language Models",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Techniques for training highly capable small models (600M-3B) for edge deployment with 95% energy reduction.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-nano_whitepaper.pdf",
    org: "zen",
    topics: ["models"],
  },
  {
    title: "Zen Agent: Autonomous AI Agent Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Agent-optimized model for tool use, planning, and autonomous task execution with ReAct-style reasoning.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-agent.pdf",
    org: "zen",
    topics: ["models", "agents"],
  },
  {
    title: "Zen Guard: Safety and Moderation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Content safety and moderation model for filtering harmful content with constitutional AI techniques.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-guard_whitepaper.pdf",
    org: "zen",
    topics: ["models", "ai"],
  },
  {
    title: "Zen Reranker: Search Reranking Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Cross-encoder reranking model for improving search relevance with 30% MRR improvement over BM25.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-reranker.pdf",
    org: "zen",
    topics: ["models", "ai"],
  },
  {
    title: "Zen Artist: Image Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "State-of-the-art image generation with style control, high-resolution output, and text fidelity.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-artist_whitepaper.pdf",
    org: "zen",
    topics: ["models"],
  },
  {
    title: "Zen Video: Video Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Text-to-video generation model for creating dynamic visual content up to 60 seconds.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-video.pdf",
    org: "zen",
    topics: ["models"],
  },
  {
    title: "Zen 3D: 3D Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Text-to-3D generation model for creating 3D assets and environments with NeRF and Gaussian splatting.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-3d.pdf",
    org: "zen",
    topics: ["models"],
  },
  {
    title: "Zen Musician: Music Generation Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "AI music composition model for creating original musical pieces across genres with stem separation.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-musician.pdf",
    org: "zen",
    topics: ["models"],
  },
  {
    title: "Zen Scribe: Transcription and Generation",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Speech-to-text model with 98% accuracy on conversational audio and speaker diarization.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-scribe_whitepaper.pdf",
    org: "zen",
    topics: ["models"],
  },
  {
    title: "Zen World: World Model for Simulation",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "World model for environment simulation, physics understanding, and planning in embodied AI.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-world.pdf",
    org: "zen",
    topics: ["models", "ai"],
  },
  {
    title: "Zen Eco: Energy-Efficient Model",
    authors: "Zen LM Research",
    date: "2025",
    abstract: "Energy-optimized architecture achieving 95% inference cost reduction through quantization and sparsity.",
    link: "https://github.com/zenlm/papers/raw/main/pdfs/zen-eco_whitepaper.pdf",
    org: "zen",
    topics: ["models"],
  },

  // ===== LUX NETWORK - FHE =====
  {
    title: "Lux FHE: Threshold Fully Homomorphic Encryption",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Independent threshold FHE implementation in Go and C++ for privacy-preserving computation with distributed key generation and multi-party decryption.",
    link: "https://github.com/luxfi/fhe",
    org: "lux",
    topics: ["fhe", "mpc"],
  },
  {
    title: "FHE-VM: Encrypted Smart Contract Execution",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Virtual machine for executing smart contracts on encrypted data using our threshold FHE scheme with EVM compatibility.",
    link: "https://github.com/luxfi/fhe-vm",
    org: "lux",
    topics: ["fhe", "infrastructure"],
  },
  {
    title: "Threshold FHE for Decentralized AI Inference",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Privacy-preserving AI inference using threshold FHE where no single party can decrypt intermediate computations.",
    link: "https://github.com/luxfi/papers/raw/main/pdfs/lux-threshold-fhe-ai.pdf",
    org: "lux",
    topics: ["fhe", "ai"],
  },
  {
    title: "fhEVM: Fully Homomorphic Ethereum Virtual Machine",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "EVM-compatible smart contract execution on encrypted data enabling confidential DeFi, private voting, and sealed-bid auctions without revealing underlying values.",
    link: "https://github.com/luxfi/fhe/raw/main/papers/fhevm.pdf",
    org: "lux",
    topics: ["fhe", "infrastructure"],
    featured: true,
  },
  {
    title: "fheCRDT: CRDTs over Encrypted State",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Conflict-free replicated data types operating on homomorphically encrypted data for privacy-preserving distributed systems and collaborative applications.",
    link: "https://github.com/luxfi/fhe/raw/main/papers/fhecrdt.pdf",
    org: "lux",
    topics: ["fhe", "mpc"],
  },
  {
    title: "Verifiable Encrypted Voting",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "End-to-end verifiable voting system using FHE where votes remain encrypted throughout tallying while maintaining individual and universal verifiability.",
    link: "https://github.com/luxfi/fhe/raw/main/papers/voting.pdf",
    org: "lux",
    topics: ["fhe", "zkp"],
  },
  {
    title: "Privacy-Preserving ML at Scale",
    authors: "Lux Network Research",
    date: "2025",
    abstract: "Practical techniques for training and inference on encrypted data using FHE with GPU acceleration achieving 100x speedup over CPU implementations.",
    link: "https://github.com/luxfi/fhe/raw/main/papers/ml-privacy.pdf",
    org: "lux",
    topics: ["fhe", "ai"],
  },

  // ===== REFERENCE - ZKP =====
  {
    title: "RISC Zero zkVM: Zero-Knowledge Virtual Machine",
    authors: "RISC Zero",
    date: "2024",
    abstract: "General-purpose zero-knowledge virtual machine enabling verifiable computation with STARK proofs.",
    link: "https://github.com/risc0/risc0",
    org: "lux",
    topics: ["zkp"],
  },
  {
    title: "Plonk: Universal zkSNARK Construction",
    authors: "Gabizon-Williamson-Ciobotaru",
    date: "2024",
    abstract: "Universal and updateable structured reference string zkSNARK with efficient verification.",
    link: "https://eprint.iacr.org/2019/953",
    org: "lux",
    topics: ["zkp"],
  },
  {
    title: "Groth16: Efficient zkSNARK Proofs",
    authors: "Groth",
    date: "2024",
    abstract: "Most efficient pairing-based zkSNARK with constant proof size and verification time.",
    link: "https://eprint.iacr.org/2016/260",
    org: "lux",
    topics: ["zkp"],
  },
  {
    title: "STARKs: Scalable Transparent Arguments of Knowledge",
    authors: "Ben-Sasson et al.",
    date: "2024",
    abstract: "Post-quantum zero-knowledge proofs without trusted setup using hash functions.",
    link: "https://eprint.iacr.org/2018/046",
    org: "lux",
    topics: ["zkp", "pqc"],
  },

  // ===== REFERENCE - Post-Quantum =====
  {
    title: "ML-KEM: Post-Quantum Key Encapsulation Mechanism",
    authors: "NIST Post-Quantum Cryptography Project",
    date: "2024",
    abstract: "Lattice-based key encapsulation for quantum-resistant key exchange, standardized in FIPS 203.",
    link: "https://csrc.nist.gov/pubs/fips/203/final",
    org: "lux",
    topics: ["pqc"],
  },
  {
    title: "ML-DSA: Post-Quantum Digital Signature Algorithm",
    authors: "NIST Post-Quantum Cryptography Project",
    date: "2024",
    abstract: "Lattice-based digital signatures for quantum-resistant authentication, standardized in FIPS 204.",
    link: "https://csrc.nist.gov/pubs/fips/204/final",
    org: "lux",
    topics: ["pqc"],
  },
  {
    title: "SLH-DSA: Stateless Hash-Based Digital Signatures",
    authors: "NIST Post-Quantum Cryptography Project",
    date: "2024",
    abstract: "Hash-based signature scheme providing conservative quantum resistance, standardized in FIPS 205.",
    link: "https://csrc.nist.gov/pubs/fips/205/final",
    org: "lux",
    topics: ["pqc"],
  },
];

const Research = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeOrg, setActiveOrg] = useState<"all" | Organization>("all");
  const [activeTopic, setActiveTopic] = useState<"all" | Topic>("all");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  // Handle hash-based navigation and filtering
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;

    // Map hash to topic filter
    const hashToTopicMap: Record<string, Topic> = {
      'ai': 'ai',
      'consensus': 'consensus',
      'crypto': 'pqc',
      'fhe': 'fhe',
      'mpc': 'mpc',
      'zkp': 'zkp',
      'defi': 'defi',
      'models': 'models',
      'agents': 'agents',
    };

    // Map hash to org filter
    const hashToOrgMap: Record<string, Organization> = {
      'hanzo': 'hanzo',
      'lux': 'lux',
      'zoo': 'zoo',
      'zen': 'zen',
    };

    if (hashToTopicMap[hash]) {
      setActiveTopic(hashToTopicMap[hash]);
      setTimeout(() => {
        document.getElementById('papers')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hashToOrgMap[hash]) {
      setActiveOrg(hashToOrgMap[hash]);
      setTimeout(() => {
        document.getElementById('papers')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === 'papers' || hash === 'open-source') {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  // Filter and sort papers
  const filteredPapers = useMemo(() => {
    let result = papers;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.abstract.toLowerCase().includes(query) ||
        p.authors.toLowerCase().includes(query) ||
        p.topics.some(t => t.toLowerCase().includes(query))
      );
    }

    // Filter by organization
    if (activeOrg !== "all") {
      result = result.filter(p => p.org === activeOrg);
    }

    // Filter by topic
    if (activeTopic !== "all") {
      result = result.filter(p => p.topics.includes(activeTopic));
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "date") {
        return parseInt(b.date) - parseInt(a.date);
      }
      return a.title.localeCompare(b.title);
    });

    // Featured papers first
    result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return result;
  }, [searchQuery, activeOrg, activeTopic, sortBy]);

  // Get topic counts
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    papers.forEach(p => {
      p.topics.forEach(t => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Get org counts
  const orgCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    papers.forEach(p => {
      counts[p.org] = (counts[p.org] || 0) + 1;
    });
    return counts;
  }, []);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveOrg("all");
    setActiveTopic("all");
  };

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
                  {filteredPapers.length} papers from Hanzo AI, Lux Network, Zoo Labs, and Zen LM.
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

            {/* Search Bar */}
            <div className="mb-6">
              <div className={`relative flex items-center ${isDarkMode ? 'bg-neutral-800' : 'bg-white border border-gray-200'} rounded-lg`}>
                <Search className={`absolute left-4 w-5 h-5 ${isDarkMode ? 'text-neutral-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Search papers by title, author, or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 bg-transparent rounded-lg outline-none ${isDarkMode ? 'text-white placeholder-neutral-500' : 'text-black placeholder-gray-400'}`}
                />
                {(searchQuery || activeOrg !== "all" || activeTopic !== "all") && (
                  <button
                    onClick={clearFilters}
                    className={`absolute right-4 p-1 rounded-full ${isDarkMode ? 'hover:bg-neutral-700' : 'hover:bg-gray-100'}`}
                  >
                    <X className={`w-4 h-4 ${isDarkMode ? 'text-neutral-400' : 'text-gray-500'}`} />
                  </button>
                )}
              </div>
            </div>

            {/* Organization Filter */}
            <div className="mb-4">
              <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>
                Organization
              </div>
              <div className="flex flex-wrap gap-2">
                {(["all", "hanzo", "lux", "zoo", "zen"] as const).map((org) => (
                  <button
                    key={org}
                    onClick={() => setActiveOrg(org)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeOrg === org
                        ? org === 'hanzo' ? 'bg-red-500 text-white' :
                          org === 'lux' ? 'bg-blue-500 text-white' :
                          org === 'zoo' ? 'bg-green-500 text-white' :
                          org === 'zen' ? 'bg-purple-500 text-white' :
                          'bg-[#fd4444] text-white'
                        : isDarkMode
                          ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {orgMeta[org].label}
                    {org !== "all" && (
                      <span className="ml-1.5 opacity-70">({orgCounts[org] || 0})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Filter */}
            <div className="mb-8">
              <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>
                Topic
              </div>
              <div className="flex flex-wrap gap-2">
                {(["all", "consensus", "ai", "models", "agents", "fhe", "mpc", "zkp", "pqc", "defi", "identity", "infrastructure"] as const).map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeTopic === topic
                        ? 'bg-[#fd4444] text-white'
                        : isDarkMode
                          ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {topicMeta[topic].label}
                    {topic !== "all" && topicCounts[topic] && (
                      <span className="ml-1.5 opacity-70">({topicCounts[topic]})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>
                Showing {filteredPapers.length} of {papers.length} papers
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>Sort:</span>
                <button
                  onClick={() => setSortBy("date")}
                  className={`px-3 py-1 rounded text-sm ${sortBy === "date" ? (isDarkMode ? 'bg-neutral-700 text-white' : 'bg-gray-200 text-black') : (isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-gray-500 hover:text-black')}`}
                >
                  Date
                </button>
                <button
                  onClick={() => setSortBy("title")}
                  className={`px-3 py-1 rounded text-sm ${sortBy === "title" ? (isDarkMode ? 'bg-neutral-700 text-white' : 'bg-gray-200 text-black') : (isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-gray-500 hover:text-black')}`}
                >
                  Title
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredPapers.map((paper, index) => (
                <motion.a
                  key={`${paper.title}-${index}`}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
                  className={`block p-6 rounded-xl transition-all group ${
                    paper.featured
                      ? isDarkMode
                        ? 'bg-gradient-to-br from-[#fd4444]/10 to-transparent border-2 border-[#fd4444]/30 hover:border-[#fd4444]/50'
                        : 'bg-gradient-to-br from-red-50 to-white border-2 border-red-200 hover:border-red-300'
                      : isDarkMode
                        ? 'bg-black/50 border border-white/10 hover:border-white/20'
                        : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <FileText className={`w-5 h-5 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>{paper.date}</span>
                        {paper.featured && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#fd4444]/20 text-[#fd4444] font-medium">
                            Featured
                          </span>
                        )}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          paper.org === 'hanzo' ? 'bg-red-500/20 text-red-400' :
                          paper.org === 'lux' ? 'bg-blue-500/20 text-blue-400' :
                          paper.org === 'zoo' ? 'bg-green-500/20 text-green-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {orgMeta[paper.org].label}
                        </span>
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 group-hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {paper.title}
                      </h3>
                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>{paper.authors}</p>
                      <p className={`mb-3 ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>{paper.abstract}</p>
                      {/* Topic tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {paper.topics.map(topic => (
                          <span
                            key={topic}
                            className={`text-xs px-2 py-0.5 rounded ${isDarkMode ? 'bg-neutral-800 text-neutral-400' : 'bg-gray-100 text-gray-600'}`}
                          >
                            {topicMeta[topic].label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex-shrink-0 ${isDarkMode ? 'text-neutral-500' : 'text-gray-400'}`} />
                  </div>
                </motion.a>
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className={`text-center py-12 ${isDarkMode ? 'text-neutral-500' : 'text-gray-500'}`}>
                No papers found matching your search.
                <button
                  onClick={clearFilters}
                  className="block mx-auto mt-4 text-[#fd4444] hover:underline"
                >
                  Clear filters
                </button>
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
              <a href="mailto:research@hanzo.ai">
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
