"use client";

import { motion } from "framer-motion";
import { Globe, Server, Shield, Cpu, Network, Zap, Lock, Database } from "lucide-react";
import { cn } from '@hanzo/ui'
export default function PageClient() {
  const features = [
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Deploy AI across multiple geographic regions for maximum resilience and compliance",
      details: [
        "Multi-region deployment capabilities",
        "Data sovereignty compliance",
        "Local inference for reduced latency",
        "Geographic load balancing"
      ]
    },
    {
      icon: Server,
      title: "Distributed Computing",
      description: "Harness the power of distributed systems for scalable AI operations",
      details: [
        "Horizontal scaling architecture",
        "Resource pooling and sharing",
        "Dynamic workload distribution",
        "Fault-tolerant design"
      ]
    },
    {
      icon: Shield,
      title: "Byzantine Fault Tolerance",
      description: "Maintain system integrity even with node failures or malicious actors",
      details: [
        "Consensus mechanisms",
        "Redundant validation",
        "Self-healing networks",
        "Attack resistance"
      ]
    },
    {
      icon: Cpu,
      title: "Edge Computing Integration",
      description: "Seamlessly integrate edge devices into your decentralized AI network",
      details: [
        "Edge-cloud hybrid architecture",
        "Local processing capabilities",
        "Intelligent data routing",
        "Bandwidth optimization"
      ]
    }
  ];

  const useCases = [
    {
      title: "Enterprise AI",
      description: "Resilient AI for mission-critical enterprise applications",
      icon: Shield
    },
    {
      title: "Financial Services",
      description: "Distributed AI for fraud detection and risk analysis",
      icon: Database
    },
    {
      title: "Healthcare Networks",
      description: "Privacy-preserving AI across medical institutions",
      icon: Network
    },
    {
      title: "Smart Cities",
      description: "Decentralized intelligence for urban infrastructure",
      icon: Zap
    }
  ];

  const benefits = [
    {
      metric: "99.999%",
      label: "Uptime with no single point of failure"
    },
    {
      metric: "10x",
      label: "Improved resilience over centralized systems"
    },
    {
      metric: "<5ms",
      label: "Local inference latency"
    },
    {
      metric: "100%",
      label: "Data sovereignty compliance"
    }
  ];

  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center hz-mb-7"
          >
            <h1 className="hz-t-5xl hz-w-bold hz-mb-5">
              Decentralized AI Infrastructure
            </h1>
            <p className={cn("hz-container-narrow hz-t-xl", "hz-fg")}>
              Build resilient, distributed AI systems that operate without central points of failure
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-grid hz-grid-4 hz-gap-5 hz-mb-7"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  "hz-p-5 hz-r-lg hz-align-center hz-bordered",
                  "hz-bg-surface"
                )}
              >
                <div className="hz-t-3xl hz-w-bold hz-mb-2">{benefit.metric}</div>
                <div className={cn("hz-t-sm", "hz-fg")}>{benefit.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Core Features */}
          <div className="hz-mb-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hz-t-3xl hz-w-bold hz-align-center hz-mb-7"
            >
              Core Capabilities
            </motion.h2>

            <div className="hz-grid hz-grid-2 hz-gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "hz-bordered hz-r-lg hz-p-6",
                      "hz-bg-surface"
                    )}
                  >
                    <div className="hz-row hz-ai-start hz-inline-4">
                      <div className="hz-none">
                        <div className={cn(
                          "hz-sq-7 hz-r-lg hz-row hz-ai-center hz-jc-center",
                          "hz-bg-inverse"
                        )}>
                          <Icon className={cn("hz-sq-4", "hz-fg")} />
                        </div>
                      </div>
                      <div className="hz-grow">
                        <h3 className="hz-t-xl hz-w-semibold hz-mb-3">{feature.title}</h3>
                        <p className={cn("hz-mb-4", "hz-fg")}>{feature.description}</p>
                        <ul className="hz-stack-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="hz-row hz-ai-start">
                              <div className={cn("hz-sq-1 hz-r-full hz-mt-2 hz-mr-3 hz-none", "hz-bg-inverse")} />
                              <span className={cn("hz-t-sm", "hz-fg")}>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Architecture Diagram Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-mb-7 hz-bordered hz-r-lg hz-p-6 hz-align-center",
              "hz-bg-surface"
            )}
          >
            <Network className={cn("hz-sq-8 hz-mx-auto hz-mb-4", "hz-fg-soft")} />
            <h3 className="hz-t-2xl hz-w-semibold hz-mb-4">Decentralized Architecture</h3>
            <p className={cn("hz-container-narrow hz-mw-md", "hz-fg")}>
              Our decentralized AI infrastructure eliminates single points of failure through
              distributed consensus, redundant nodes, and intelligent failover mechanisms.
            </p>
          </motion.div>

          {/* Use Cases */}
          <div className="hz-mb-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hz-t-3xl hz-w-bold hz-align-center hz-mb-7"
            >
              Industry Applications
            </motion.h2>

            <div className="hz-grid hz-grid-4 hz-gap-5">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "hz-p-5 hz-r-lg hz-bordered hz-align-center hz-transition",
                      "hz-bg-surface hz-hoverable"
                    )}
                  >
                    <Icon className="hz-sq-7 hz-mx-auto hz-mb-4" />
                    <h3 className="hz-t-lg hz-w-semibold hz-mb-2">{useCase.title}</h3>
                    <p className={cn("hz-t-sm", "hz-fg")}>{useCase.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-mb-7 hz-p-6 hz-r-lg hz-bordered",
              ""
            )}
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-6 hz-align-center">Technical Specifications</h2>
            <div className="hz-grid hz-grid-3 hz-gap-6">
              <div>
                <h3 className="hz-t-xl hz-w-semibold hz-mb-4">Consensus Protocol</h3>
                <ul className="hz-stack-2">
                  {["Byzantine Fault Tolerant (BFT)", "Practical Byzantine Fault Tolerance", "Raft consensus for coordination", "Custom AI workload consensus"].map((item) => (
                    <li key={item} className={cn("hz-fg")}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="hz-t-xl hz-w-semibold hz-mb-4">Network Architecture</h3>
                <ul className="hz-stack-2">
                  {["Peer-to-peer mesh network", "Encrypted communication channels", "Dynamic node discovery", "Load balancing algorithms"].map((item) => (
                    <li key={item} className={cn("hz-fg")}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="hz-t-xl hz-w-semibold hz-mb-4">Security Features</h3>
                <ul className="hz-stack-2">
                  {["End-to-end encryption", "Zero-knowledge proofs", "Secure multi-party computation", "Homomorphic encryption support"].map((item) => (
                    <li key={item} className={cn("hz-fg")}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-5">
              Ready to Decentralize Your AI Infrastructure?
            </h2>
            <p className={cn("hz-container-narrow hz-mw-md hz-t-xl hz-mb-6", "hz-fg")}>
              Join the future of resilient, distributed AI systems
            </p>
            <div className="hz-col-row hz-gap-4 hz-jc-center">
              <a
                href="/#contact"
                className={cn(
                  "hz-px-6 hz-py-4 hz-r-lg hz-w-semibold hz-transition",
                  "hz-bg-inverse hz-hoverable"
                )}
              >
                Get Started
              </a>
              <a
                href="https://docs.google.com/document/d/1mWC6mo9Wd4s3KaWPTF_4QhLqh5lRmzED12wRnLq71Sk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hz-bordered hz-px-6 hz-py-4 hz-r-lg hz-w-semibold hz-transition",
                  "hz-fg hz-hoverable"
                )}
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
