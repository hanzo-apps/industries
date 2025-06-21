import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Cpu, Satellite, Lock, Target, Eye } from "lucide-react";

const Defense = () => {
  const defenseCapabilities = [
    {
      icon: Target,
      title: "Targeting & Fire Control",
      description: "AI-enhanced targeting systems with real-time threat assessment and precision engagement capabilities",
      features: ["Multi-domain integration", "Predictive targeting", "Collateral damage assessment"]
    },
    {
      icon: Satellite,
      title: "ISR & Reconnaissance",
      description: "Advanced intelligence, surveillance, and reconnaissance platforms with multi-sensor fusion",
      features: ["Real-time imagery analysis", "Pattern of life analysis", "Automated threat detection"]
    },
    {
      icon: Shield,
      title: "Missile Defense Systems",
      description: "Next-generation ballistic missile defense with AI-powered trajectory prediction",
      features: ["Multi-layered defense", "Hypersonic tracking", "Automated response systems"]
    },
    {
      icon: Cpu,
      title: "Command & Control",
      description: "Unified C4ISR systems for joint all-domain command and control operations",
      features: ["Cross-domain operations", "Decision support AI", "Secure communications"]
    },
    {
      icon: Eye,
      title: "Electronic Warfare",
      description: "Advanced EW capabilities for spectrum dominance and signal intelligence",
      features: ["Cognitive EW systems", "Adaptive jamming", "Signal classification"]
    },
    {
      icon: Lock,
      title: "Cyber Operations",
      description: "Offensive and defensive cyber capabilities for military networks",
      features: ["Zero-day detection", "Attribution analysis", "Resilient architectures"]
    }
  ];

  const contracts = [
    { agency: "U.S. Army", value: "$450M", duration: "5 Years", type: "C4ISR Modernization" },
    { agency: "U.S. Air Force", value: "$325M", duration: "3 Years", type: "AI/ML Development" },
    { agency: "U.S. Navy", value: "$280M", duration: "4 Years", type: "Cybersecurity Services" },
    { agency: "DARPA", value: "$175M", duration: "2 Years", type: "Research & Development" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Defense Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protecting national security through advanced technology solutions designed 
              for the modern battlespace
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200" onClick={() => window.location.href = '/contact'}>
                Schedule Briefing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('/hanzo-defense-capabilities.html', '_blank')}>
                Download Capabilities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Mission-Critical Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive defense solutions engineered for superiority across all domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defenseCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-colors"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Mission?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our defense solutions team for a classified briefing on how 
              Hanzo Industries can support your operational requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Request SCIF Briefing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download CAGE/DUNS Info
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              CAGE Code: 1ABC2 | DUNS: 123456789 | NAICS: 541511, 541512, 541519
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Defense;