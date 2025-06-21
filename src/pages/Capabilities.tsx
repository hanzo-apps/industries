import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Shield, Cog, Cloud, Zap, Users, Lock, Cpu, Globe, Database } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      icon: Brain,
      title: "Frontier AI Models",
      description: "State-of-the-art language and multimodal models with built-in safety mechanisms",
      link: "https://docs.google.com/document/d/19rZTIUZShaITzwp35XK1893OE83HA1bIIhmQNzFvKrg/edit?usp=sharing",
      features: [
        "Advanced language understanding",
        "Multimodal processing",
        "Constitutional AI integration",
        "Safety-first architecture"
      ]
    },
    {
      icon: Shield,
      title: "AI Safety & Alignment",
      description: "Research and tools for building safe, aligned, and beneficial AI systems",
      link: "https://hanzo.ai/ai",
      features: [
        "Mechanistic interpretability",
        "Value alignment research",
        "Robustness testing",
        "Safety monitoring"
      ]
    },
    {
      icon: Cog,
      title: "Edge AI & Local Deployment",
      description: "Private, on-device AI inference for maximum security and performance",
      link: "https://docs.google.com/document/d/1Dga5hEIxTopxwYzmLh7L-NgZlJR8XB5V7du-UdY2Nk8/edit?usp=sharing",
      features: [
        "On-device processing",
        "Offline capabilities",
        "Privacy preservation",
        "Low latency inference"
      ]
    },
    {
      icon: Cloud,
      title: "Decentralized AI Infrastructure",
      description: "Resilient, distributed AI computing for mission-critical applications",
      link: "/capabilities/decentralized-ai",
      features: [
        "Distributed computing",
        "Fault tolerance",
        "Geographic distribution",
        "Decentralized governance"
      ]
    },
    {
      icon: Zap,
      title: "Defense & Security AI",
      description: "Mission-critical AI solutions for defense and intelligence operations",
      link: "https://docs.google.com/document/d/19rZTIUZShaITzwp35XK1893OE83HA1bIIhmQNzFvKrg/edit?usp=drive_link",
      features: [
        "Classified deployments",
        "Air-gapped systems",
        "Real-time analysis",
        "Threat detection"
      ]
    },
    {
      icon: Users,
      title: "Open Source Ecosystem",
      description: "Community-driven development and collaborative AI innovation",
      link: "https://docs.google.com/document/d/1mWC6mo9Wd4s3KaWPTF_4QhLqh5lRmzED12wRnLq71Sk/edit?usp=sharing",
      features: [
        "Open development",
        "Community contributions",
        "Transparent research",
        "Collaborative tools"
      ]
    },
    {
      icon: Lock,
      title: "Cybersecurity Solutions",
      description: "Defense-grade security infrastructure and post-quantum cryptography",
      link: "/cybersecurity",
      features: [
        "Post-quantum encryption",
        "Zero-trust architecture",
        "Threat monitoring",
        "Compliance automation"
      ]
    },
    {
      icon: Database,
      title: "Secure Cloud Infrastructure",
      description: "Mission-critical cloud solutions for sensitive workloads",
      link: "/cloud",
      features: [
        "FedRAMP compliance",
        "Multi-region deployment",
        "Data sovereignty",
        "99.99% uptime SLA"
      ]
    },
    {
      icon: Cpu,
      title: "AI Hardware Acceleration",
      description: "Optimized hardware solutions for AI training and inference",
      link: "#",
      features: [
        "GPU optimization",
        "TPU integration",
        "Custom silicon",
        "Edge accelerators"
      ]
    },
    {
      icon: Globe,
      title: "Global AI Deployment",
      description: "Worldwide infrastructure for AI deployment and scaling",
      link: "#",
      features: [
        "Multi-region presence",
        "Local compliance",
        "Global CDN",
        "Edge locations"
      ]
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
              Our Capabilities
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions from frontier research to production deployment
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isExternal = capability.link.startsWith("http");
              
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{capability.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{capability.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {capability.link !== "#" && (
                    <a 
                      href={capability.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-white hover:text-gray-300 text-sm font-medium transition-colors"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your AI Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our capabilities can accelerate your mission
            </p>
            <a 
              href="/#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}