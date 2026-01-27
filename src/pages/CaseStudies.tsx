import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Shield, Network, Sparkles, Cpu, Lock, Zap } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Brain,
      category: "AI Training",
      title: "Training-Free GRPO: 99.8% Cost Reduction",
      description: "Developed Training-Free GRPO achieving $18 training cost versus $10,000+ traditional methods",
      results: [
        "99.8% reduction in training costs",
        "100× data efficiency (100 examples vs 10,000+)",
        "Comparable performance to full fine-tuning",
        "Open-sourced via Zoo Labs Foundation"
      ],
      technologies: ["GRPO", "LoRA", "Qwen3", "Distributed Training"],
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
        "29.5× memory savings with BitDelta compression",
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
      description: "Developed dual-certificate quantum-secure finality using BLS and Ringtail threshold signatures",
      results: [
        "Post-quantum secure finality guarantees",
        "Dual-certificate architecture for safety",
        "Integration with existing consensus protocols",
        "24 research papers published"
      ],
      technologies: ["FALCON", "Ringtail", "BLS Signatures", "Threshold Cryptography"],
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
      title: "Zen Model Family (600M-480B parameters)",
      description: "Released 22 frontier AI models including multimodal, code, and edge variants",
      results: [
        "22 models across 6 size tiers",
        "95% energy reduction through efficient architecture",
        "Multimodal (Omni), Code (Coder), Edge (Nano) variants",
        "Open weights on HuggingFace"
      ],
      technologies: ["Qwen3", "Flash Attention", "RLHF", "DPO"],
      impact: "Providing accessible, efficient frontier AI to the research community",
      link: "https://huggingface.co/zenlm"
    },
    {
      icon: Lock,
      category: "AI Economics",
      title: "Hamiltonian Market Maker (HMM)",
      description: "Novel invariant H(Ψ,Θ) = κ for decentralized AI compute markets",
      results: [
        "<200ms quote latency",
        "98.7% price stability",
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
      description: "The MCP Killer—unified protocol achieving ~500x faster agent communication with zero-copy RPC",
      results: [
        "<1μs local latency (vs 500μs MCP)",
        "1.2M/s throughput (vs 2.2k/s MCP)",
        "~5% message overhead (vs 40% JSON)",
        "40-50× infrastructure cost reduction"
      ],
      technologies: ["ZAP Binary Format", "Zero-copy", "Metastable Consensus", "Post-Quantum"],
      impact: "Enabling real-time agent swarms with native consensus and capability security",
      link: "https://github.com/zap-proto/zap"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
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
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">58</div>
              <div className="text-sm text-gray-400">Published Papers</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">22</div>
              <div className="text-sm text-gray-400">AI Models Released</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">99.8%</div>
              <div className="text-sm text-gray-400">Training Cost Reduction</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-sm text-gray-400">Research Organizations</div>
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
                  className="block bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-600 transition-colors group"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">{study.category}</div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-200 transition-colors">{study.title}</h3>
                      <p className="text-gray-300">{study.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
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
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">
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
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dive deeper into our published papers and open source projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/research#papers"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View All Papers
              </a>
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
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
