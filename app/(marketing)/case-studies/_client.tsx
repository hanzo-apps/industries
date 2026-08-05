"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Network, Sparkles, Cpu, Lock, Zap } from "lucide-react";
import { cn } from '@hanzo/ui'
import site from "@/site.config";
export default function PageClient() {
  const caseStudies = [
    {
      icon: Brain,
      category: "AI Training",
      title: "Training-Free GRPO: Efficient Model Adaptation",
      description: "Developed Training-Free GRPO achieving dramatic training cost reduction versus traditional fine-tuning methods",
      results: [
        "Significant reduction in training costs",
        "100x data efficiency (100 examples vs 10,000+)",
        "Comparable performance to full fine-tuning",
        "Open-sourced via Zoo Labs Foundation"
      ],
      technologies: ["GRPO", "LoRA", "Zen MoDE", "Distributed Training"],
      impact: "Democratizing AI training for researchers and organizations worldwide",
      link: "https://github.com/zooai/gym"
    },
    {
      icon: Sparkles,
      category: "Research Publication",
      title: "Active Semantic Optimization (ASO)",
      description: "Published ASO framework achieving 18.2% SWE-bench resolution through training-free adaptation",
      results: [
        "18.2% SWE-bench resolution rate",
        "BitDelta 1-bit compression for model adaptation",
        "Zero additional training required",
        "Published HIP-002 specification"
      ],
      technologies: ["TF-GRPO", "BitDelta", "1-bit Compression", "Semantic Optimization"],
      impact: "Advancing state-of-the-art in efficient model adaptation",
      link: "https://github.com/hanzoai/papers"
    },
    {
      icon: Shield,
      category: "Post-Quantum Cryptography",
      title: "Quasar: Quantum-Secure Consensus",
      description: "Developed dual-certificate quantum-secure finality using BLS and Corona threshold signatures",
      results: [
        "Post-quantum secure finality guarantees",
        "Dual-certificate architecture for safety",
        "Integration with existing consensus protocols",
        "29 research papers published"
      ],
      technologies: ["FALCON", "Corona", "BLS Signatures", "Threshold Cryptography"],
      impact: "Future-proofing blockchain infrastructure against quantum threats",
      link: "https://github.com/luxfi/papers"
    },
    {
      icon: Network,
      category: "Consensus Protocols",
      title: "Lux Multi-Consensus Architecture",
      description: "Built multi-consensus blockchain with Wave, Focus, and Quasar protocols",
      results: [
        "Sub-second finality with Wave consensus",
        "High-throughput with Focus protocol",
        "Quantum-secure with Quasar consensus",
        "TEE attestation integration"
      ],
      technologies: ["Snow++", "DAG Consensus", "TEE", "Post-Quantum Crypto"],
      impact: "Creating the most versatile consensus framework for diverse use cases",
      link: "https://github.com/luxfi/papers"
    },
    {
      icon: Cpu,
      category: "AI Models",
      title: "Zen Model Family (600M–1T+ parameters)",
      description: "Released 100+ model weights spanning text, vision, video, audio, 3D, code, and agents",
      results: [
        "41 models across 8 families",
        "1.04T MoE flagship (zen4-max, Zen MoDE architecture)",
        "671B MoE (zen-max) with 71.3% SWE-bench",
        "Zen5 (2T+) in training — on-chain via NVIDIA TEE"
      ],
      technologies: ["Zen MoDE", "Flash Attention", "MoE", "Mixture of Diverse Experts"],
      impact: "Providing accessible, efficient frontier AI to the research community",
      link: "https://huggingface.co/zenlm"
    },
    {
      icon: Lock,
      category: "AI Economics",
      title: "Hamiltonian Market Maker (HMM)",
      description: "Novel invariant H(Psi,Theta) = kappa for decentralized AI compute markets",
      results: [
        "<200ms quote latency",
        "Hamiltonian invariant pricing",
        "No impermanent loss for providers",
        "Published HIP-004 specification"
      ],
      technologies: ["AMM", "Energy-based Pricing", "Compute Markets", "DeFi"],
      impact: "Enabling efficient, fair markets for AI compute resources",
      link: "https://github.com/hanzoai/papers"
    },
    {
      icon: Zap,
      category: "Agent Infrastructure",
      title: "ZAP: Zero-copy Agent Protocol",
      description: "The MCP Killer -- unified protocol achieving ~500x faster agent communication with zero-copy RPC",
      results: [
        "<1us local latency (vs 500us MCP)",
        "1.2M/s throughput (vs 2.2k/s MCP)",
        "~5% message overhead (vs 40% JSON)",
        "40-50x infrastructure cost reduction"
      ],
      technologies: ["ZAP Binary Format", "Zero-copy", "Metastable Consensus", "Post-Quantum"],
      impact: "Enabling real-time agent swarms with native consensus and capability security",
      link: "https://github.com/zap-proto/spec"
    }
  ];

  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center hz-mb-7"
          >
            <h1 className="hz-t-5xl hz-w-bold hz-mb-5">
              Research Impact
            </h1>
            <p className={cn("hz-container-narrow hz-t-xl", "hz-fg")}>
              Delivering measurable breakthroughs in AI efficiency, cryptography, and distributed systems
            </p>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="hz-grid hz-grid-4 hz-gap-5 hz-mb-7"
          >
            <div className={cn("hz-p-5 hz-r-lg hz-align-center", "hz-bg-surface hz-bordered")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-2">130+</div>
              <div className={cn("hz-t-sm", "hz-fg")}>Research Papers</div>
            </div>
            <div className={cn("hz-p-5 hz-r-lg hz-align-center", "hz-bg-surface hz-bordered")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-2">100+</div>
              <div className={cn("hz-t-sm", "hz-fg")}>AI Model Weights</div>
            </div>
            <div className={cn("hz-p-5 hz-r-lg hz-align-center", "hz-bg-surface hz-bordered")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-2">{site.brand.ossRepos}</div>
              <div className={cn("hz-t-sm", "hz-fg")}>OSS Projects</div>
            </div>
            <div className={cn("hz-p-5 hz-r-lg hz-align-center", "hz-bg-surface hz-bordered")}>
              <div className="hz-t-3xl hz-w-bold hz-mb-2">4</div>
              <div className={cn("hz-t-sm", "hz-fg")}>Research Organizations</div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="hz-stack-6" data-case-studies>
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.a
                  key={study.title}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
                  className={cn("hz-r-lg hz-p-6 hz-transition", "hz-bg-surface hz-bordered hz-hoverable")}
                >
                  <div className="hz-row hz-ai-start hz-inline-4 hz-mb-5">
                    <div className="hz-none">
                      <div className={cn("hz-sq-7 hz-r-lg hz-row hz-ai-center hz-jc-center hz-transition", "hz-bg-inverse hz-hoverable")}>
                        <Icon className={cn("hz-sq-4", "hz-fg")} />
                      </div>
                    </div>
                    <div className="hz-grow">
                      <div className={cn("hz-t-sm hz-mb-1", "hz-fg")}>{study.category}</div>
                      <h3 className={cn("hz-t-2xl hz-w-semibold hz-mb-2 hz-transition", "hz-hoverable")}>{study.title}</h3>
                      <p className={cn("hz-fg")}>{study.description}</p>
                    </div>
                  </div>

                  <div className="hz-grid hz-grid-2 hz-gap-6 hz-mb-5">
                    <div>
                      <h4 className="hz-t-lg hz-w-semibold hz-mb-3">Key Results</h4>
                      <ul className="hz-stack-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="hz-row hz-ai-start">
                            <div className={cn("hz-sq-1 hz-r-full hz-mt-2 hz-mr-3 hz-none", "hz-bg-inverse")} />
                            <span className={cn("hz-t-sm", "hz-fg")}>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="hz-t-lg hz-w-semibold hz-mb-3">Technologies Used</h4>
                      <div className="hz-row hz-wrap hz-gap-2 hz-mb-4">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={cn("hz-px-3 hz-py-1 hz-r-full hz-t-sm", "hz-bg-surface hz-fg")}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className={cn("hz-t-sm", "hz-fg")}>
                        <strong>Impact:</strong> {study.impact}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="hz-mt-7 hz-align-center"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-5">
              Explore Our Research
            </h2>
            <p className={cn("hz-container-narrow hz-mw-md hz-t-xl hz-mb-6", "hz-fg")}>
              Dive deeper into our published papers and open source projects
            </p>
            <div className="hz-col-row hz-gap-4 hz-jc-center">
              <a
                href="/research#papers"
                className={cn("hz-px-6 hz-py-4 hz-r-lg hz-w-semibold hz-transition", "hz-bg-inverse hz-hoverable")}
              >
                View All Papers
              </a>
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("hz-bg-none hz-px-6 hz-py-4 hz-r-lg hz-w-semibold hz-transition", "hz-bordered hz-fg hz-hoverable")}
              >
                Open Source
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
