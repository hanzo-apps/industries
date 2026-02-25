"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Database, Cloud, Brain, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
      capabilities: ["Hanzo AI — Full AI platform", "LLM Gateway — 200+ models, one API", "Hanzo Engine — Cloud GPU inference", "Hanzo Edge — On-device AI inference"],
      link: "https://hanzo.ai",
      cta: "Try Hanzo AI",
      external: true,
    }
  ];

  return (
    <section id="capabilities" className={cn(
      "py-20 transition-colors duration-300",
      "bg-secondary"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-4xl font-bold mb-4",
              "text-foreground"
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
              "text-muted-foreground"
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
                  "bg-foreground/5 border-border hover:shadow-lg hover:shadow-foreground/5"
                )}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center",
                      "bg-foreground/10"
                    )}>
                      <Icon className={cn(
                        "w-6 h-6",
                        "text-foreground"
                      )} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-2xl font-semibold mb-3",
                      "text-foreground"
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "mb-4",
                      "text-muted-foreground"
                    )}>
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.capabilities.map((capability) => (
                        <div key={capability} className={cn(
                          "flex items-center text-sm",
                          "text-muted-foreground"
                        )}>
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full mr-2",
                            "bg-primary"
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
                          "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                          "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {service.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link href={service.link}
                        className={cn(
                          "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                          "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {service.cta} <ArrowRight className="w-3.5 h-3.5" />
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
