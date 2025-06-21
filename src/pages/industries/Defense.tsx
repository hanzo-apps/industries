import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Target, Eye, Lock, Zap, Brain } from "lucide-react";

const DefenseIndustry = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence Analysis",
      description: "Advanced AI for processing multi-source intelligence and generating actionable insights",
      features: ["Pattern recognition", "Threat assessment", "Predictive analytics", "Data fusion"]
    },
    {
      icon: Target,
      title: "Autonomous Defense Systems",
      description: "AI-driven autonomous systems for defensive operations with human oversight",
      features: ["Target identification", "Decision support", "Rules of engagement", "Ethical constraints"]
    },
    {
      icon: Eye,
      title: "Surveillance & Reconnaissance AI",
      description: "Computer vision and sensor fusion for enhanced situational awareness",
      features: ["Object detection", "Activity recognition", "Change detection", "Multi-spectral analysis"]
    },
    {
      icon: Lock,
      title: "Cyber Defense AI",
      description: "AI-powered cybersecurity for protecting critical defense infrastructure",
      features: ["Zero-day detection", "Network defense", "Threat hunting", "Automated response"]
    },
    {
      icon: Zap,
      title: "Electronic Warfare AI",
      description: "Cognitive electronic warfare systems for spectrum dominance",
      features: ["Signal classification", "Adaptive jamming", "Spectrum management", "Countermeasures"]
    },
    {
      icon: Shield,
      title: "Force Protection AI",
      description: "AI systems for base defense, perimeter security, and personnel protection",
      features: ["Intrusion detection", "Behavioral analysis", "Risk assessment", "Alert prioritization"]
    }
  ];

  const capabilities = [
    {
      title: "Aligned AI Development",
      description: "All our defense AI systems are built with strict ethical guidelines and human oversight requirements"
    },
    {
      title: "Secure by Design",
      description: "End-to-end encryption, air-gapped deployment options, and quantum-resistant security"
    },
    {
      title: "Edge Deployment Ready",
      description: "Optimized for disconnected operations in austere environments with minimal infrastructure"
    },
    {
      title: "Explainable AI",
      description: "Transparent decision-making processes for accountability and trust in critical operations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-gray-800" />
            </div>
            <h1 className="text-5xl font-bold text-black mb-6">Defense Industry Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Mission-critical AI systems designed for modern defense challenges, 
              built with safety, security, and ethical alignment at the core
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Request Security Briefing
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50">
                View Capabilities Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              AI Solutions for Defense Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI capabilities designed to enhance decision-making, operational efficiency, 
              and mission success while maintaining ethical standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-2" />
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

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Our Defense AI Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every defense AI system we build adheres to strict principles ensuring 
              responsible and effective deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-black mb-4">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white rounded-2xl p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Trusted by Defense Organizations</h2>
                <p className="text-gray-300 mb-6">
                  Our AI solutions are designed to meet the stringent requirements of modern 
                  defense operations, with a focus on security, reliability, and ethical deployment.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">NIST AI Risk Management Framework compliant</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">DoD Ethical AI Principles aligned</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Security clearance ready team</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Air-gapped deployment options</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Defense Capabilities?</h3>
                  <p className="text-gray-300 mb-6">
                    Contact our defense solutions team for a classified discussion 
                    on how our AI can support your mission
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Schedule SCIF Meeting
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DefenseIndustry;