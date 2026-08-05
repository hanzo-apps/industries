"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Brain, Shield, Network, Sparkles } from "lucide-react";
import { cn } from '@hanzo/ui'
export default function ResearchHighlights() {
  const researchAreas = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "100+ model weights from 0.6B to 1T+ with Training-Free GRPO optimization",
      papers: [
        { title: "Active Semantic Optimization (ASO)", href: "https://github.com/hanzoai/papers", result: "18.2% SWE-bench resolution" },
        { title: "Decentralized Semantic Optimization", href: "https://github.com/hanzoai/papers", result: "15.2% multi-agent improvement" },
        { title: "HLLM Training-Free GRPO", href: "https://github.com/zooai/gym", result: "$18 vs $10,000+ training cost" },
      ],
      link: "/research#ai"
    },
    {
      icon: Shield,
      title: "Cryptography & Security",
      description: "Post-quantum cryptography and GPU-accelerated fully homomorphic encryption",
      papers: [
        { title: "Quasar Consensus", href: "https://github.com/luxfi/papers", result: "Quantum-secure finality" },
        { title: "ETHFALCON Post-Quantum", href: "https://github.com/luxfi/papers", result: "FALCON signatures for EVM" },
        { title: "NTT Transform", href: "https://github.com/luxfi/papers", result: "85% gas reduction for PQ crypto" },
      ],
      link: "/research#crypto"
    },
    {
      icon: Network,
      title: "Consensus & Networks",
      description: "Multi-consensus blockchain architecture with TEE attestation",
      papers: [
        { title: "Lux Multi-Consensus", href: "https://github.com/luxfi/papers", result: "Wave, Focus, Quasar protocols" },
        { title: "Hamiltonian Market Maker", href: "https://github.com/hanzoai/papers", result: "<200ms quote latency" },
        { title: "ZAP Protocol", href: "https://github.com/zap-proto/spec", result: "Zero-copy AI agent RPC" },
      ],
      link: "/research#consensus"
    },
    {
      icon: Sparkles,
      title: "Zen AI Models",
      description: "Zen4/5 — from 4B to 2T+ MoDE parameters with GT-QLoRA MoE fine-tuning",
      papers: [
        { title: "GT-QLoRA: MoE Fine-Tuning", href: "https://zenlm.org/papers/zen4-ultra-gt-qlora.pdf", result: "Gate-targeted behavioral modification" },
        { title: "Zen4 Model Family", href: "https://huggingface.co/zenlm", result: "4B-1T+ abliterated models" },
        { title: "Zen5 Ultra (Research Preview)", href: "https://zenlm.org/docs/models#zen5", result: "2T+ MoDE — request access" },
      ],
      link: "/models"
    }
  ];

  const featuredPapers = [
    {
      date: "Jan 2026",
      category: "AI Training",
      title: "Training-Free Adaptation via Active Semantic Optimization",
      description: "Achieving 18.2% SWE-bench resolution with zero additional training through TF-GRPO and BitDelta compression.",
      href: "https://github.com/hanzoai/papers"
    },
    {
      date: "Jan 2026",
      category: "Cryptography",
      title: "Quasar: Dual-Certificate Quantum-Secure Consensus",
      description: "Post-quantum finality using BLS and Corona threshold signatures for blockchain security.",
      href: "https://github.com/luxfi/papers"
    },
    {
      date: "Dec 2025",
      category: "AI Economics",
      title: "Hamiltonian Market Maker for Decentralized AI Compute",
      description: "Novel invariant H(Ψ,Θ) = κ achieving <200ms latency and 98.7% price stability for AI compute markets.",
      href: "https://github.com/hanzoai/papers"
    }
  ];

  return (
    <section className={cn(
      "hz-py-7 hz-transition",
      "hz-bg-surface"
    )}>
      <div className="hz-container">
        {/* Section Header */}
        <div className="hz-align-center hz-mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-t-4xl hz-w-bold hz-mb-4",
              "hz-fg"
            )}
          >
            Research at the Frontier
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "hz-container-narrow hz-t-xl",
              "hz-fg"
            )}
          >
            58 published papers across AI, cryptography, consensus, and distributed systems.
            Our research teams investigate the safety, efficiency, and societal impacts of AI.
          </motion.p>
        </div>

        {/* Research Areas Grid */}
        <div className="hz-grid hz-grid-2 hz-gap-6 hz-mb-7">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "hz-p-6 hz-r-lg hz-bordered hz-transition",
                  "hz-bg-surface hz-hoverable"
                )}
              >
                <div className="hz-row hz-ai-start hz-gap-4 hz-mb-4">
                  <div className={cn(
                    "hz-sq-7 hz-r-lg hz-row hz-ai-center hz-jc-center",
                    "hz-bg-surface"
                  )}>
                    <Icon className={cn(
                      "hz-sq-4",
                      "hz-fg"
                    )} />
                  </div>
                  <div>
                    <h3 className={cn(
                      "hz-t-xl hz-w-semibold hz-mb-1",
                      "hz-fg"
                    )}>
                      {area.title}
                    </h3>
                    <p className={cn(
                      "hz-t-sm",
                      "hz-fg"
                    )}>
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="hz-stack-3 hz-mb-4">
                  {area.papers.map((paper) => (
                    <a
                      key={paper.title}
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "hz-btn hz-btn-ghost hz-jc-between hz-transition",
                        "hz-hoverable"
                      )}
                    >
                      <span className={cn(
                        "hz-t-sm hz-w-medium",
                        "hz-fg-soft"
                      )}>
                        {paper.title}
                      </span>
                      <span className={cn(
                        "hz-t-xs hz-px-2 hz-py-1 hz-r-full",
                        "hz-bg-surface hz-fg"
                      )}>
                        {paper.result}
                      </span>
                    </a>
                  ))}
                </div>

                <Link href={area.link}
                  className={cn(
                    "hz-inline hz-ai-center hz-t-sm hz-w-medium hz-transition",
                    "hz-fg hz-hoverable"
                  )}
                >
                  View all papers
                  <ArrowRight className="hz-sq-2 hz-ml-1 hz-transition" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Papers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={cn(
            "hz-t-2xl hz-w-semibold hz-mb-5",
            "hz-fg"
          )}>
            Latest Publications
          </h3>
          <div className="hz-stack-4">
            {featuredPapers.map((paper, index) => (
              <a
                key={paper.title}
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hz-row hz-ai-start hz-gap-5 hz-p-5 hz-r-lg hz-bordered hz-transition",
                  "hz-bg-surface hz-hoverable"
                )}
              >
                <div className={cn(
                  "hz-t-sm hz-none",
                  "hz-fg"
                )}>
                  {paper.date}
                </div>
                <div className="hz-grow">
                  <div className={cn(
                    "hz-t-xs hz-w-medium hz-upper hz-tracking-wide hz-mb-1",
                    "hz-fg"
                  )}>
                    {paper.category}
                  </div>
                  <h4 className={cn(
                    "hz-t-lg hz-w-semibold hz-mb-2",
                    "hz-fg"
                  )}>
                    {paper.title}
                  </h4>
                  <p className={cn(
                    "hz-t-sm",
                    "hz-fg"
                  )}>
                    {paper.description}
                  </p>
                </div>
                <ExternalLink className={cn(
                  "hz-sq-3 hz-none hz-invisible hz-transition",
                  "hz-fg"
                )} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hz-mt-7 hz-align-center"
        >
          <Link href="/research">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "hz-btn hz-btn-ghost hz-transition",
                "hz-bg-inverse hz-hoverable"
              )}
            >
              View All Research
              <ArrowRight className="hz-sq-2 hz-ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
