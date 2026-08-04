"use client";

import { solutions } from "@/lib/constants/navigation";
import { ChevronRight } from "lucide-react";
import { getIcon } from "@/lib/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from '@hanzo/ui'
export default function PageClient() {
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 6) + 6 // Show 6 more items each time
    }));
  };

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
            <h1 className={cn(
              "hz-t-4xl hz-w-bold hz-mb-5 hz-chrome",
              ""
            )}>
              Solutions for Every Industry
            </h1>
            <p className={cn("hz-container-narrow hz-mw-md hz-t-lg", "hz-fg")}>
              Explore our comprehensive suite of solutions designed to transform businesses
              across industries and capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="hz-pb-6 hz-px-4">
        <div className="hz-container">

          {solutions.map((section) => {
            const displayCount = expandedSections[section.title] || 6;
            const hasMore = section.items.length > displayCount;
            const displayItems = section.items.slice(0, displayCount);

            return (
              <div key={section.title} className="hz-mb-7">
                <h2 className="hz-t-3xl hz-w-bold hz-mb-6 hz-align-center">{section.title}</h2>
                <div className="hz-grid hz-grid-3 hz-gap-5">
                  <AnimatePresence initial={false}>
                    {displayItems.map((item, index) => {
                      const Icon = getIcon(item);
                      return (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className={cn(
                            "hz-rel hz-r-lg hz-bordered hz-p-5 hz-glass hz-clip",
                            "hz-bg-surface"
                          )}
                        >
                          <div className="hz-abs hz-inset hz-invisible hz-transition" />
                          <div className="hz-rel">
                            <div className="hz-row hz-ai-center hz-jc-between hz-mb-4">
                              <Icon className="hz-sq-4 hz-fg" strokeWidth={1.5} />
                              <ChevronRight className={cn("hz-sq-3 hz-transition hz-hoverable", "hz-fg")} />
                            </div>
                            <h3 className="hz-t-xl hz-w-semibold hz-mb-2 hz-transition hz-hoverable">
                              {item}
                            </h3>
                            <p className={cn("hz-t-sm", "hz-fg")}>
                              End-to-end {item.toLowerCase()} solutions built on Hanzo AI infrastructure.
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
                {hasMore && (
                  <motion.div
                    className="hz-align-center hz-mt-6"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="hz-btn hz-btn-ghost hz-fg hz-transition"
                    >
                      View More {section.title}
                      <ChevronRight className="hz-sq-3 hz-ml-2" />
                    </button>
                  </motion.div>
                )}
              </div>
            );
          })}

          <div className="hz-mt-7 hz-align-center">
            <div className="hz-container-narrow">
              <h2 className="hz-t-3xl hz-w-bold hz-mb-5">Ready to Transform Your Business?</h2>
              <p className={cn("hz-mb-6", "hz-fg")}>
                Connect with our team to learn how our solutions can help you achieve your goals.
              </p>
              <a
                href="/contact"
                className="hz-btn hz-btn-primary hz-fg hz-transition"
              >
                Get Started
                <ChevronRight className="hz-sq-3 hz-ml-2" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
