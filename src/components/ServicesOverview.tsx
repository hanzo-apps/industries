import { motion } from "framer-motion";
import { Shield, Database, Cloud, Brain } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const ServicesOverview = () => {
  const { isDarkMode } = useTheme();

  const services = [
    {
      icon: Brain,
      title: "Frontier AI Models",
      description: "State-of-the-art language models and multimodal AI with built-in safety mechanisms and alignment research",
      capabilities: ["Zen MoE Architecture", "Constitutional AI", "RLHF Training", "Safety Benchmarks"],
      link: "https://docs.google.com/document/d/19rZTIUZShaITzwp35XK1893OE83HA1bIIhmQNzFvKrg/edit?usp=sharing"
    },
    {
      icon: Shield,
      title: "AI Safety & Alignment",
      description: "Research and implementation of AI safety measures, interpretability tools, and alignment techniques",
      capabilities: ["Mechanistic Interpretability", "Value Alignment", "Robustness Testing", "Safety Monitoring"],
      link: "https://hanzo.ai/ai"
    },
    {
      icon: Database,
      title: "Edge AI Infrastructure",
      description: "Deploy AI locally with our decentralized, private, and configurable edge computing solutions",
      capabilities: ["On-Device Inference", "Federated Learning", "Privacy Preservation", "Offline Capability"],
      link: "https://docs.google.com/document/d/1Dga5hEIxTopxwYzmLh7L-NgZlJR8XB5V7du-UdY2Nk8/edit?usp=sharing"
    },
    {
      icon: Cloud,
      title: "Resilient AI Systems",
      description: "Build fault-tolerant, distributed AI systems that maintain performance under adverse conditions",
      capabilities: ["Decentralized Training", "Redundant Architecture", "Graceful Degradation", "Self-Healing Systems"],
      link: "https://drive.google.com/drive/folders/1IoRe9gJo3IGHa5G6J_xDMZWsKcFjlRa7?usp=sharing"
    }
  ];

  return (
    <section id="capabilities" className={cn(
      "py-20 transition-colors duration-300",
      isDarkMode ? "bg-neutral-900" : "bg-neutral-50"
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
            Building the Future of Safe AI
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
            From frontier model development to edge deployment, we're advancing AI capabilities
            while prioritizing safety, privacy, and human alignment at every step
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "p-8 rounded-lg border transition-shadow",
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:shadow-lg hover:shadow-white/5"
                    : "bg-white border-black/10 shadow-sm hover:shadow-md"
                )}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center",
                      isDarkMode ? "bg-white/10" : "bg-black"
                    )}>
                      <Icon className={cn(
                        "w-6 h-6",
                        isDarkMode ? "text-white" : "text-white"
                      )} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-2xl font-semibold mb-3",
                      isDarkMode ? "text-white" : "text-black"
                    )}>
                      {service.link ? (
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {service.title}
                        </a>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p className={cn(
                      "mb-4",
                      isDarkMode ? "text-white/60" : "text-black/60"
                    )}>
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.capabilities.map((capability) => (
                        <div key={capability} className={cn(
                          "flex items-center text-sm",
                          isDarkMode ? "text-white/70" : "text-black/70"
                        )}>
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full mr-2",
                            isDarkMode ? "bg-white" : "bg-black"
                          )} />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
