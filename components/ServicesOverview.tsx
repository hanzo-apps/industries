"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Database, Cloud, Brain, ArrowRight } from "lucide-react";
import { cn } from '@hanzo/ui'
export default function ServicesOverview() {
  const services = [
    {
      icon: Brain,
      title: "Frontier AI Models",
      description: "State-of-the-art language models and multimodal AI — the Zen family spans 600M to 1T+ parameters across text, vision, audio, video, and 3D",
      capabilities: ["Zen MoE Architecture", "Constitutional AI", "RLHF Training", "Safety Benchmarks"],
      link: "/models",
      cta: "Explore Zen Models",
      external: false,
    },
    {
      icon: Shield,
      title: "AI Safety & Alignment",
      description: "Research and implementation of AI safety measures, interpretability tools, and alignment techniques across all Hanzo products",
      capabilities: ["Mechanistic Interpretability", "Value Alignment", "Robustness Testing", "Safety Monitoring"],
      link: "/research",
      cta: "Read Our Research",
      external: false,
    },
    {
      icon: Database,
      title: "AI Workforce & Automation",
      description: "Deploy an autonomous AI team — Hanzo Bot gives you 16 specialized AI agents for engineering, design, marketing, and operations",
      capabilities: ["Hanzo Bot — AI team in a box", "Hanzo Dev — AI coding agent", "Hanzo Team — Augmented engineering", "Hanzo Chat — AI assistant"],
      link: "https://hanzo.bot",
      cta: "Try Hanzo Bot",
      external: true,
    },
    {
      icon: Cloud,
      title: "Platform & Infrastructure",
      description: "Enterprise-grade AI platform with LLM gateway supporting 200+ models, secure deployment, and resilient infrastructure — from edge to cloud",
      capabilities: ["Hanzo AI — Full AI platform", "LLM Gateway — 200+ models, one API", "Hanzo Engine — Cloud GPU inference", "Hanzo Edge — On-device AI inference", "SBOM-verified OSS revenue sharing (25%)"],
      link: "https://hanzo.ai",
      cta: "Try Hanzo AI",
      external: true,
    }
  ];

  return (
    <section id="capabilities" className={cn(
      "hz-py-7 hz-transition",
      "hz-bg-surface"
    )}>
      <div className="hz-container">
        <div className="hz-align-center hz-mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-t-4xl hz-w-bold hz-mb-4",
              "hz-fg"
            )}
          >
            Building the Future of Safe AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "hz-container-narrow hz-t-xl",
              "hz-fg"
            )}
          >
            From frontier model development to edge deployment, we're advancing AI capabilities
            while prioritizing safety, privacy, and human alignment at every step
          </motion.p>
        </div>

        <div className="hz-grid hz-grid-2 hz-gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "hz-p-6 hz-r-lg hz-bordered hz-transition",
                  "hz-bg-surface"
                )}
              >
                <div className="hz-row hz-ai-start hz-inline-4">
                  <div className="hz-none">
                    <div className={cn(
                      "hz-sq-7 hz-r-lg hz-row hz-ai-center hz-jc-center",
                      "hz-bg-surface"
                    )}>
                      <Icon className={cn(
                        "hz-sq-4",
                        "hz-fg"
                      )} />
                    </div>
                  </div>
                  <div className="hz-grow">
                    <h3 className={cn(
                      "hz-t-2xl hz-w-semibold hz-mb-3",
                      "hz-fg"
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "hz-mb-4",
                      "hz-fg"
                    )}>
                      {service.description}
                    </p>
                    <div className="hz-stack-2 hz-mb-4">
                      {service.capabilities.map((capability) => (
                        <div key={capability} className={cn(
                          "hz-row hz-ai-center hz-t-sm",
                          "hz-fg"
                        )}>
                          <div className={cn(
                            "hz-sq-1 hz-r-full hz-mr-2",
                            "hz-bg-inverse"
                          )} />
                          {capability}
                        </div>
                      ))}
                    </div>
                    {service.external ? (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "hz-inline hz-ai-center hz-gap-2 hz-t-sm hz-w-medium hz-transition",
                          "hz-fg hz-hoverable"
                        )}
                      >
                        {service.cta} <ArrowRight className="hz-sq-2" />
                      </a>
                    ) : (
                      <Link href={service.link}
                        className={cn(
                          "hz-inline hz-ai-center hz-gap-2 hz-t-sm hz-w-medium hz-transition",
                          "hz-fg hz-hoverable"
                        )}
                      >
                        {service.cta} <ArrowRight className="hz-sq-2" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
