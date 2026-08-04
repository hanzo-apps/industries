"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HEXAGRAMS = ["䷀", "䷸", "䷹", "䷺", "䷻", "䷼", "䷽", "䷾", "䷿", "䷡"];

// All 64 I-Ching hexagrams
const ALL_64 = Array.from({ length: 64 }, (_, i) =>
  String.fromCodePoint(0x4dc0 + i)
);

const activeSet = new Set([0, 33, 56, 57, 58, 59, 60, 61, 62, 63]);

export default function PhilosophyBridge() {
  return (
    <section className="hz-py-7 hz-px-4 hz-border-t">
      <div className="hz-container-narrow hz-align-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* All 64 hexagram grid */}
          <div className="hz-grid hz-grid-6 hz-container-narrow hz-mw-xs hz-gap-1 hz-mb-6">
            {ALL_64.map((g, i) => (
              <div
                key={i}
                className={`hz-sq-5 hz-row hz-ai-center hz-jc-center hz-t-xl hz-r-md hz-transition ${
                  activeSet.has(i)
                    ? "hz-fg-soft"
                    : "hz-fg-soft"
                }`}
              >
                {g}
              </div>
            ))}
          </div>

          <h2 className="hz-t-2xl hz-w-bold hz-mb-3">
            易經 · The Engineering Philosophy
          </h2>
          <p className="hz-container-narrow hz-mw-md hz-fg hz-t-sm hz-mb-2">
            Ten principles drawn from the 64 hexagrams of the I-Ching.
            Orthogonality. Smallness. Completeness. Clarity. Composability.
          </p>
          <p className="hz-container-narrow hz-mw-md hz-fg-muted hz-t-xs hz-mb-6 hz-mono">
            Ancient pattern language for systems that last.
            The same framework behind every model, protocol, and line of code we ship.
          </p>

          <Link
            href="https://hanzo.ai/philosophy"
            className="hz-btn hz-btn-ghost hz-fg hz-transition hz-gap-2"
          >
            The Zen of Hanzo <ArrowRight className="hz-sq-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
