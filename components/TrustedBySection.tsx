"use client";

import { motion } from "framer-motion";
import { partnerLogos } from "@/lib/constants/partner-logos";
import { cn } from "@/lib/utils";
import site from "@/site.config";

export default function TrustedBySection() {
  return (
    <section className={cn(
      "py-20 px-4 md:px-8 transition-colors",
      "bg-background"
    )}>
      <div className="max-w-7xl mx-auto">
        <style>
          {`@keyframes brand-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}
        </style>

        {/* Investors & Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-medium mb-4",
            "text-foreground"
          )}>
            Investors & Partners
          </h2>
          <p className={"text-muted-foreground"}>
            Backed by world-class partners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className={cn(
                    "w-auto opacity-60 transition-opacity duration-200 hover:opacity-100",
                    logo.className ?? "h-6",
                    "invert"
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
            "text-xs uppercase tracking-widest mb-6 text-center",
            "text-foreground/30"
          )}>
            Trusted By
          </p>
          <div className={cn(
            "relative overflow-hidden border rounded-full",
            "border-border bg-foreground/5"
          )}>
            <div
              className={cn(
                "flex gap-10 py-4 px-6 text-sm w-max",
                "text-muted-foreground"
              )}
              style={{ animation: "brand-marquee 30s linear infinite" }}
            >
              {[...site.clients, ...site.clients].map((client, index) => (
                <span key={`${client}-${index}`} className="whitespace-nowrap">
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
