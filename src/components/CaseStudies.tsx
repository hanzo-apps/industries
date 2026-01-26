import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const CaseStudies = () => {
  const { isDarkMode } = useTheme();

  const caseStudies = [
    {
      category: "AI Training",
      title: "99.8% Cost Reduction in LLM Fine-tuning",
      client: "Zoo Labs Foundation",
      description: "Implemented Training-Free GRPO achieving $18 training cost versus $10,000+ traditional methods. 100× data efficiency with only 100 examples instead of 10,000+.",
      impact: "99.8% cost savings",
      year: "2025",
      link: "https://github.com/zooai/gym"
    },
    {
      category: "Research Publication",
      title: "Active Semantic Optimization",
      client: "Hanzo AI Research",
      description: "Published ASO framework achieving 18.2% SWE-bench resolution with 1-bit BitDelta compression providing 29.5× memory savings for model adaptation.",
      impact: "18.2% benchmark",
      year: "2025",
      link: "https://github.com/hanzoai/papers"
    },
    {
      category: "Consensus Protocol",
      title: "Post-Quantum Secure Blockchain",
      client: "Lux Network",
      description: "Developed Quasar consensus with dual-certificate quantum-secure finality using BLS and Ringtail threshold signatures. 24 research papers published.",
      impact: "Quantum-secure",
      year: "2025",
      link: "https://github.com/luxfi/papers"
    },
    {
      category: "Model Development",
      title: "Zen Model Family (600M-480B params)",
      client: "Zen LM",
      description: "Released 22 frontier AI models including multimodal (Omni), code (Coder), and edge (Nano) variants. 95% energy reduction through efficient architecture.",
      impact: "22 models released",
      year: "2025",
      link: "https://huggingface.co/zenlm"
    }
  ];

  return (
    <section className={cn(
      "py-20 transition-colors duration-300",
      isDarkMode ? "bg-neutral-900/50" : "bg-gray-50"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Research Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-xl max-w-3xl mx-auto",
              isDarkMode ? "text-neutral-400" : "text-gray-600"
            )}
          >
            Delivering measurable breakthroughs in AI efficiency, cryptography,
            and distributed systems through open research
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.a
              key={study.title}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-lg border transition-all group cursor-pointer",
                isDarkMode
                  ? "bg-black/50 border-white/10 hover:border-white/20"
                  : "bg-white border-gray-200 hover:border-black"
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={cn(
                  "text-sm font-medium uppercase tracking-wider",
                  isDarkMode ? "text-neutral-500" : "text-gray-500"
                )}>
                  {study.category}
                </span>
                <span className={cn(
                  "text-sm",
                  isDarkMode ? "text-neutral-500" : "text-gray-500"
                )}>{study.year}</span>
              </div>

              <h3 className={cn(
                "text-xl font-semibold mb-2",
                isDarkMode ? "text-white" : "text-black"
              )}>{study.title}</h3>
              <p className={cn(
                "text-sm mb-4 font-medium",
                isDarkMode ? "text-neutral-400" : "text-gray-600"
              )}>{study.client}</p>
              <p className={cn(
                "mb-6",
                isDarkMode ? "text-neutral-400" : "text-gray-600"
              )}>{study.description}</p>

              <div className="flex items-center justify-between">
                <div className={cn(
                  "px-4 py-2 rounded-md",
                  isDarkMode ? "bg-white/10" : "bg-gray-100"
                )}>
                  <span className={cn(
                    "text-sm font-semibold",
                    isDarkMode ? "text-white" : "text-black"
                  )}>{study.impact}</span>
                </div>
                <ExternalLink className={cn(
                  "w-5 h-5 transition-colors",
                  isDarkMode
                    ? "text-neutral-600 group-hover:text-white"
                    : "text-gray-400 group-hover:text-black"
                )} />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/research#papers"
            className={cn(
              "inline-flex items-center font-semibold hover:underline",
              isDarkMode ? "text-white" : "text-black"
            )}
          >
            View All Research Papers
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
