import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Shield, Network, Sparkles, Cpu, Lock, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export default function CaseStudies() {
  const { isDarkMode } = useTheme();

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
        "100+ model weights across 10 families",
        "1.04T MoE flagship (zen4-max, Zen MoDE architecture)",
        "671B MoE (zen-max) with 71.3% SWE-bench",
        "Zen5 (2T+) in training — on-chain via NVIDIA TEE"
      ],
      technologies: ["Zen MoDE", "Flash Attention", "MoE", "Mixture of Distilled Experts"],
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
      link: "https://github.com/zap-proto/zap"
    }
  ];

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Research Impact
            </h1>
            <p className={cn("text-xl sm:text-2xl max-w-3xl mx-auto", isDarkMode ? "text-white/70" : "text-black/70")}>
              Delivering measurable breakthroughs in AI efficiency, cryptography, and distributed systems
            </p>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            <div className={cn("p-6 rounded-lg text-center", isDarkMode ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10")}>
              <div className="text-3xl font-bold mb-2">130+</div>
              <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>Research Papers</div>
            </div>
            <div className={cn("p-6 rounded-lg text-center", isDarkMode ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10")}>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>AI Model Weights</div>
            </div>
            <div className={cn("p-6 rounded-lg text-center", isDarkMode ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10")}>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>OSS Projects</div>
            </div>
            <div className={cn("p-6 rounded-lg text-center", isDarkMode ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10")}>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>Research Organizations</div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-12">
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
                  className={cn("block rounded-lg p-8 transition-colors group", isDarkMode ? "bg-white/5 border border-white/10 hover:border-white/30" : "bg-black/5 border border-black/10 hover:border-black/30")}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center transition-colors", isDarkMode ? "bg-white group-hover:bg-gray-100" : "bg-black group-hover:bg-black/80")}>
                        <Icon className={cn("w-6 h-6", isDarkMode ? "text-black" : "text-white")} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={cn("text-sm mb-1", isDarkMode ? "text-white/50" : "text-black/50")}>{study.category}</div>
                      <h3 className={cn("text-2xl font-semibold mb-2 transition-colors", isDarkMode ? "group-hover:text-white/80" : "group-hover:text-black/80")}>{study.title}</h3>
                      <p className={cn(isDarkMode ? "text-white/70" : "text-black/70")}>{study.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className={cn("w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0", isDarkMode ? "bg-white" : "bg-black")} />
                            <span className={cn("text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={cn("px-3 py-1 rounded-full text-sm", isDarkMode ? "bg-white/10 text-white/70" : "bg-black/5 text-black/70")}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
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
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Explore Our Research
            </h2>
            <p className={cn("text-xl mb-8 max-w-2xl mx-auto", isDarkMode ? "text-white/70" : "text-black/70")}>
              Dive deeper into our published papers and open source projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/research#papers"
                className={cn("inline-block px-8 py-4 rounded-lg font-semibold transition-colors", isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-black/80")}
              >
                View All Papers
              </a>
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("inline-block bg-transparent px-8 py-4 rounded-lg font-semibold transition-colors", isDarkMode ? "border border-white text-white hover:bg-white/10" : "border border-black text-black hover:bg-black/10")}
              >
                Open Source
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
