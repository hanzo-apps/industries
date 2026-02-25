"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Cog, Cloud, Zap, Users, Lock, Cpu, Globe, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PageClient() {
  const capabilities: {
    icon: typeof Brain;
    title: string;
    description: string;
    link: string;
    features: string[];
  }[] = [
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
      link: "https://edge.hanzo.ai",
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
      title: "Post-Quantum Cryptography",
      description: "Quantum-secure consensus and cryptographic protocols for future-proof infrastructure",
      link: "/research#crypto",
      features: [
        "FALCON signatures",
        "Corona threshold crypto",
        "BLS aggregation",
        "NTT acceleration"
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
      title: "Secure Infrastructure",
      description: "Enterprise-grade security infrastructure with post-quantum cryptography",
      link: "/security",
      features: [
        "Post-quantum encryption",
        "Zero-trust architecture",
        "Secure enclaves (TEE)",
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
    <div className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      {/* Hero Section with Gradient Background */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Subtle gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05), transparent)'
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className={cn("text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent", "bg-gradient-to-b from-white to-white/70")}>
              Our Capabilities
            </h1>
            <p className={cn("text-lg md:text-xl max-w-2xl mx-auto", "text-muted-foreground")}>
              Comprehensive AI solutions from frontier research to production deployment
            </p>
          </motion.div>
        </div>
      </section>

      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                  className={cn("rounded-lg p-8 transition-all hover:shadow-lg", "bg-foreground/5 border border-border hover:border-border")}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", "bg-primary")}>
                        <Icon className={cn("w-6 h-6", "text-primary-foreground")} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{capability.title}</h3>
                    </div>
                  </div>

                  <p className={cn("mb-4", "text-muted-foreground")}>{capability.description}</p>

                  <ul className="space-y-2 mb-6">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={cn("w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0", "bg-primary")} />
                        <span className={cn("text-sm", "text-muted-foreground")}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {capability.link !== "#" && (
                    <a
                      href={capability.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={cn("inline-flex items-center text-sm font-medium transition-colors", "text-foreground hover:text-muted-foreground")}
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
            <p className={cn("text-xl mb-8 max-w-2xl mx-auto", "text-muted-foreground")}>
              Let's discuss how our capabilities can accelerate your mission
            </p>
            <a
              href="/#contact"
              className={cn("inline-block px-8 py-4 rounded-lg font-semibold transition-colors", "bg-primary text-primary-foreground hover:bg-primary/90")}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
