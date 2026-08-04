"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Cog, Cloud, Zap, Users, Lock, Cpu, Globe, Database } from "lucide-react";
import { cn } from '@hanzo/ui'
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
      title: "Open-Weight AI Models",
      description: "Frontier language and multimodal models — open weights, no gates, freely available to researchers and developers",
      link: "/ai-models",
      features: [
        "Advanced language understanding",
        "Multimodal processing",
        "Unbiased, neutral inference",
        "Apache 2.0 and MIT licensed"
      ]
    },
    {
      icon: Shield,
      title: "Interpretability Research",
      description: "Mechanistic interpretability and model transparency research published as open scientific work",
      link: "/research",
      features: [
        "Mechanistic interpretability",
        "Activation analysis",
        "Robustness testing",
        "Open research publications"
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
      link: "/products/hanzo-network",
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
      link: "https://github.com/hanzoai",
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
      link: "/products/hanzo-network",
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
      link: "/products/hanzo-cloud",
      features: [
        "Multi-region presence",
        "Local compliance",
        "Global CDN",
        "Edge locations"
      ]
    }
  ];

  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      {/* Hero Section with Gradient Background */}
      <section className="hz-rel hz-py-7 hz-px-4 hz-clip">
        {/* Subtle gradient background */}
        <div
          className="hz-abs hz-inset hz-no-pointer"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05), transparent)'
          }}
        />

        <div className="hz-container hz-rel">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hz-container-narrow hz-align-center"
          >
            <h1 className={cn("hz-t-4xl hz-w-bold hz-mb-5 hz-chrome", "")}>
              Our Capabilities
            </h1>
            <p className={cn("hz-container-narrow hz-mw-md hz-t-lg", "hz-fg")}>
              Comprehensive AI solutions from frontier research to production deployment
            </p>
          </motion.div>
        </div>
      </section>

      <main className="hz-pb-6 hz-px-4">
        <div className="hz-container">
          {/* Capabilities Grid */}
          <div className="hz-grid hz-grid-3 hz-gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isExternal = capability.link.startsWith("http");

              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn("hz-r-lg hz-p-6 hz-transition", "hz-bg-surface hz-bordered hz-hoverable")}
                >
                  <div className="hz-row hz-ai-start hz-inline-4 hz-mb-4">
                    <div className="hz-none">
                      <div className={cn("hz-sq-7 hz-r-lg hz-row hz-ai-center hz-jc-center", "hz-bg-inverse")}>
                        <Icon className={cn("hz-sq-4", "hz-fg")} />
                      </div>
                    </div>
                    <div className="hz-grow">
                      <h3 className="hz-t-xl hz-w-semibold">{capability.title}</h3>
                    </div>
                  </div>

                  <p className={cn("hz-mb-4", "hz-fg")}>{capability.description}</p>

                  <ul className="hz-stack-2 hz-mb-5">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="hz-row hz-ai-start">
                        <div className={cn("hz-sq-1 hz-r-full hz-mt-2 hz-mr-3 hz-none", "hz-bg-inverse")} />
                        <span className={cn("hz-t-sm", "hz-fg")}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {capability.link !== "#" && (
                    <a
                      href={capability.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={cn("hz-inline hz-ai-center hz-t-sm hz-w-medium hz-transition", "hz-fg hz-hoverable")}
                    >
                      Learn more
                      <svg className="hz-sq-2 hz-ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="hz-mt-7 hz-align-center"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-5">
              Ready to Transform Your AI Infrastructure?
            </h2>
            <p className={cn("hz-container-narrow hz-mw-md hz-t-xl hz-mb-6", "hz-fg")}>
              Let's discuss how our capabilities can accelerate your mission
            </p>
            <a
              href="/contact"
              className={cn("hz-px-6 hz-py-4 hz-r-lg hz-w-semibold hz-transition", "hz-bg-inverse hz-hoverable")}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
