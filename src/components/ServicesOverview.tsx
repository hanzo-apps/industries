import { motion } from "framer-motion";
import { Shield, Database, Cloud, Brain } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "Frontier AI Models",
      description: "State-of-the-art language models and multimodal AI with built-in safety mechanisms and alignment research",
      capabilities: ["Zen MoE Architecture", "Constitutional AI", "RLHF Training", "Safety Benchmarks"]
    },
    {
      icon: Shield,
      title: "AI Safety & Alignment",
      description: "Research and implementation of AI safety measures, interpretability tools, and alignment techniques",
      capabilities: ["Mechanistic Interpretability", "Value Alignment", "Robustness Testing", "Safety Monitoring"]
    },
    {
      icon: Database,
      title: "Edge AI Infrastructure",
      description: "Deploy AI locally with our decentralized, private, and configurable edge computing solutions",
      capabilities: ["On-Device Inference", "Federated Learning", "Privacy Preservation", "Offline Capability"]
    },
    {
      icon: Cloud,
      title: "Resilient AI Systems",
      description: "Build fault-tolerant, distributed AI systems that maintain performance under adverse conditions",
      capabilities: ["Decentralized Training", "Redundant Architecture", "Graceful Degradation", "Self-Healing Systems"]
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-black mb-4"
          >
            Building the Future of Safe AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
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