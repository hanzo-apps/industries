"use client";

import { motion } from "framer-motion";
import { partnerLogos } from "@/lib/constants/partner-logos";
import { cn } from '@hanzo/ui'
import site from "@/site.config";

export default function TrustedBySection() {
  return (
    <section className={cn(
      "hz-py-7 hz-px-4 hz-transition",
      "hz-bg"
    )}>
      <div className="hz-container">
        <style>
          {`@keyframes brand-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}
        </style>

        {/* Investors & Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hz-align-center hz-mb-7"
        >
          <h2 className={cn(
            "hz-t-3xl hz-w-medium hz-mb-4",
            "hz-fg"
          )}>
            Investors & Partners
          </h2>
          <p className={"hz-fg"}>
            Backed by world-class partners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="hz-mb-7"
        >
          <div className="hz-row hz-wrap hz-jc-center hz-ai-center hz-gap-6 hz-gap-5">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="hz-row hz-ai-center hz-jc-center">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className={cn(
                    "hz-w-auto hz-bh-4 hz-dim hz-transition",
                    `hz-ink-${logo.ink}`
                  )}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trusted by scroller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className={cn(
            "hz-t-xs hz-upper hz-tracking-widest hz-mb-5 hz-align-center",
            "hz-fg-soft"
          )}>
            Trusted By
          </p>
          <div className={cn(
            "hz-rel hz-clip hz-bordered hz-r-full",
            "hz-bg-surface"
          )}>
            <div
              className={cn(
                "hz-row hz-gap-6 hz-py-4 hz-px-5 hz-t-sm hz-w-fit",
                "hz-fg"
              )}
              style={{ animation: "brand-marquee 30s linear infinite" }}
            >
              {[...site.clients, ...site.clients].map((client, index) => (
                <span key={`${client}-${index}`} className="hz-whitespace-nowrap">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
