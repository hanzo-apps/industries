"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from '@hanzo/ui'
export default function CaseStudies() {
  const caseStudies = [
    {
      category: "AI Training",
      title: "Training-Free GRPO: Efficient Fine-tuning",
      client: "Zoo Labs Foundation",
      description: "Implemented Training-Free GRPO achieving dramatic training cost reduction versus traditional methods. 100× data efficiency with only 100 examples instead of 10,000+.",
      impact: "100× data efficiency",
      year: "2025",
      link: "https://github.com/zooai/gym"
    },
    {
      category: "Research Publication",
      title: "Active Semantic Optimization",
      client: "Hanzo AI Research",
      description: "Published ASO framework achieving 18.2% SWE-bench resolution with 1-bit BitDelta compression providing 29.5× memory savings for model adaptation.",
      impact: "18.2% benchmark",
      year: "2025",
      link: "https://github.com/hanzoai/papers"
    },
    {
      category: "Consensus Protocol",
      title: "Post-Quantum Secure Blockchain",
      client: "Lux Network",
      description: "Developed Quasar consensus with dual-certificate quantum-secure finality using BLS and Corona threshold signatures. 24 research papers published.",
      impact: "Quantum-secure",
      year: "2025",
      link: "https://github.com/luxfi/papers"
    },
    {
      category: "Model Development",
      title: "Zen Model Family (600M–1T+ params)",
      client: "Zen LM",
      description: "Released 100+ model weights spanning text, vision, video, audio, 3D, code, and agents. Open weights from 0.6B to 1T+ parameters. Zen5 (2T+) in training.",
      impact: "1T+ frontier model",
      year: "2025",
      link: "https://huggingface.co/zenlm"
    }
  ];

  return (
    <section className={cn(
      "hz-py-7 hz-transition",
      "hz-bg-surface"
    )}>
      <div className="hz-container">
        <div className="hz-align-center hz-mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-t-4xl hz-w-bold hz-mb-4"
          >
            Research Impact
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
            Delivering measurable breakthroughs in AI efficiency, cryptography,
            and distributed systems through open research
          </motion.p>
        </div>

        <div className="hz-grid hz-grid-2 hz-gap-6">
          {caseStudies.map((study, index) => (
            <motion.a
              key={study.title}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "hz-p-6 hz-r-lg hz-bordered hz-transition hz-pointer",
                "hz-bg-surface hz-hoverable"
              )}
            >
              <div className="hz-row hz-jc-between hz-ai-start hz-mb-4">
                <span className={cn(
                  "hz-t-sm hz-w-medium hz-upper hz-tracking-wide",
                  "hz-fg"
                )}>
                  {study.category}
                </span>
                <span className={cn(
                  "hz-t-sm",
                  "hz-fg"
                )}>{study.year}</span>
              </div>

              <h3 className="hz-t-xl hz-w-semibold hz-mb-2">{study.title}</h3>
              <p className={cn(
                "hz-t-sm hz-mb-4 hz-w-medium",
                "hz-fg"
              )}>{study.client}</p>
              <p className={cn(
                "hz-mb-5",
                "hz-fg"
              )}>{study.description}</p>

              <div className="hz-row hz-ai-center hz-jc-between">
                <div className={cn(
                  "hz-px-4 hz-py-2 hz-r-md",
                  "hz-bg-surface"
                )}>
                  <span className="hz-t-sm hz-w-semibold">{study.impact}</span>
                </div>
                <ExternalLink className={cn(
                  "hz-sq-3 hz-transition",
                  "hz-fg-soft hz-hoverable"
                )} />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hz-mt-7 hz-align-center"
        >
          <a
            href="/research#papers"
            className="hz-inline hz-ai-center hz-w-semibold"
          >
            View All Research Papers
            <ArrowRight className="hz-sq-2 hz-ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
