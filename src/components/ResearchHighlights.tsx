import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Brain, Shield, Network, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const ResearchHighlights = () => {
  const { isDarkMode } = useTheme();

  const researchAreas = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Frontier models with 99.8% training cost reduction through Training-Free GRPO",
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
        { title: "ZAP Protocol", href: "https://github.com/zap-protocol/zap", result: "Zero-copy AI agent RPC" },
      ],
      link: "/research#consensus"
    },
    {
      icon: Sparkles,
      title: "Zen AI Models",
      description: "Efficient frontier models from 600M to 480B parameters",
      papers: [
        { title: "Zen Model Family", href: "https://huggingface.co/zenlm", result: "95% energy reduction" },
        { title: "Zen-Reranker (ZIP-002)", href: "https://github.com/zooai/zips", result: "7680-dim embeddings" },
        { title: "JIN Multimodal", href: "https://github.com/hanzoai/jin", result: "Vision, audio, 3D unified" },
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
      description: "Post-quantum finality using BLS and Ringtail threshold signatures for blockchain security.",
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
      "py-20 transition-colors duration-300",
      isDarkMode ? "bg-neutral-900" : "bg-white"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-4xl font-bold mb-4",
              isDarkMode ? "text-white" : "text-black"
            )}
          >
            Research at the Frontier
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-xl max-w-3xl mx-auto",
              isDarkMode ? "text-white/60" : "text-black/60"
            )}
          >
            58 published papers across AI, cryptography, consensus, and distributed systems.
            Our research teams investigate the safety, efficiency, and societal impacts of AI.
          </motion.p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "p-8 rounded-xl border transition-all duration-300 group",
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:border-white/20"
                    : "bg-black/5 border-black/10 hover:border-black/20"
                )}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    isDarkMode ? "bg-white/10" : "bg-black/10"
                  )}>
                    <Icon className={cn(
                      "w-6 h-6",
                      isDarkMode ? "text-white" : "text-black"
                    )} />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-xl font-semibold mb-1",
                      isDarkMode ? "text-white" : "text-black"
                    )}>
                      {area.title}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      isDarkMode ? "text-white/60" : "text-black/60"
                    )}>
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {area.papers.map((paper) => (
                    <a
                      key={paper.title}
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-between py-2 px-3 rounded-lg transition-colors group/paper",
                        isDarkMode
                          ? "hover:bg-white/10"
                          : "hover:bg-black/5"
                      )}
                    >
                      <span className={cn(
                        "text-sm font-medium",
                        isDarkMode ? "text-white/80" : "text-black/80"
                      )}>
                        {paper.title}
                      </span>
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        isDarkMode
                          ? "bg-white/10 text-white/60"
                          : "bg-black/10 text-black/60"
                      )}>
                        {paper.result}
                      </span>
                    </a>
                  ))}
                </div>

                <Link
                  to={area.link}
                  className={cn(
                    "inline-flex items-center text-sm font-medium transition-colors",
                    isDarkMode
                      ? "text-white/70 hover:text-white"
                      : "text-black/70 hover:text-black"
                  )}
                >
                  View all papers
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
            "text-2xl font-semibold mb-6",
            isDarkMode ? "text-white" : "text-black"
          )}>
            Latest Publications
          </h3>
          <div className="space-y-4">
            {featuredPapers.map((paper, index) => (
              <a
                key={paper.title}
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 group",
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:border-white/20"
                    : "bg-black/5 border-black/10 hover:border-black/20"
                )}
              >
                <div className={cn(
                  "text-sm shrink-0",
                  isDarkMode ? "text-white/40" : "text-black/40"
                )}>
                  {paper.date}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    "text-xs font-medium uppercase tracking-wider mb-1",
                    isDarkMode ? "text-white/40" : "text-black/40"
                  )}>
                    {paper.category}
                  </div>
                  <h4 className={cn(
                    "text-lg font-semibold mb-2 group-hover:underline",
                    isDarkMode ? "text-white" : "text-black"
                  )}>
                    {paper.title}
                  </h4>
                  <p className={cn(
                    "text-sm",
                    isDarkMode ? "text-white/60" : "text-black/60"
                  )}>
                    {paper.description}
                  </p>
                </div>
                <ExternalLink className={cn(
                  "w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
                  isDarkMode ? "text-white/60" : "text-black/60"
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
          className="mt-12 text-center"
        >
          <Link to="/research">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors",
                isDarkMode
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90"
              )}
            >
              View All Research
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchHighlights;
