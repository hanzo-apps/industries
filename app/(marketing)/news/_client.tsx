"use client";

import { motion } from "framer-motion";
import { Button, cn } from '@hanzo/ui'
import { Calendar, ExternalLink, FileText, Megaphone } from "lucide-react";

const announcements = [
  {
    date: "February 2026",
    year: "2026",
    items: [
      {
        day: "26",
        title: "Earn While You Sleep: 20% Idle Compute Revenue Sharing",
        description: "Every Hanzo account now earns up to 20% of revenue when your allocated compute and LLM capacity is resold while idle. All plans eligible — Developer, Pro, Team, and Enterprise. Payouts via account credit or direct deposit.",
        type: "Product Launch",
        link: "/pricing",
      },
      {
        day: "26",
        title: "Hanzo Open Source Fund: 20% of Revenue to OSS Developers",
        description: "We're committing 20% of all platform revenue directly to the open source developers whose work powers our infrastructure. Distributed proportionally based on actual OSS dependency usage across the platform.",
        type: "Company News",
        link: "/pricing",
      },
      {
        day: "26",
        title: "Transparent Pricing: No Hidden Fees, No Egress Charges",
        description: "Hanzo adopts a transparent pricing policy: no hidden fees, no egress charges, no surprise bills. Every invoice includes a clear cost breakdown. Combined with idle revenue sharing and OSS funding, this is pricing that works for everyone.",
        type: "Company News",
        link: "/pricing",
      },
      {
        day: "25",
        title: "390+ AI Models Now Available via Hanzo LLM Gateway",
        description: "The Hanzo LLM Gateway now serves 47 Zen models and 344+ third-party models from 58 providers through a single API. Live pricing at api.hanzo.ai, synced every 6 hours.",
        type: "Product Launch",
        link: "/models",
      },
      {
        day: "24",
        title: "Canonical Pricing API Launches at api.hanzo.ai",
        description: "All Hanzo pricing — subscriptions, model costs, cloud plans, blockchain RPC, and transparent pricing policy — now served from a single canonical API. No more hardcoded prices across surfaces.",
        type: "Product Launch",
        link: "/pricing",
      },
    ],
  },
  {
    date: "January 2025",
    year: "2025",
    items: [
      {
        day: "15",
        title: "Hanzo Launches ZEN Platform",
        description: "Hanzo Industries announces the general availability of ZEN, its next-generation AI orchestration platform designed for enterprise deployments at scale.",
        type: "Product Launch",
        link: "/models",
      },
      {
        day: "10",
        title: "Techstars '17 Alumni Milestone",
        description: "Hanzo AI, a Techstars '17 graduate, surpasses $1B in client revenue driven through its AI infrastructure platform.",
        type: "Milestone",
        link: "/about",
      },
      {
        day: "05",
        title: "130+ Research Papers Published",
        description: "Hanzo research teams publish comprehensive papers across frontier AI, post-quantum cryptography, and consensus protocols.",
        type: "Research",
        link: "/research",
      },
    ],
  },
  {
    date: "December 2024",
    year: "2024",
    items: [
      {
        day: "20",
        title: "KOAN 2.0 Released",
        description: "Major update to our enterprise knowledge management platform brings advanced RAG capabilities and improved performance.",
        type: "Product Update",
        link: "/products/koan",
      },
      {
        day: "15",
        title: "2,500+ Open Source Projects",
        description: "Hanzo's open source ecosystem reaches 2,500+ repositories across AI infrastructure, blockchain, and developer tools.",
        type: "Milestone",
        link: "https://github.com/hanzoai",
      },
      {
        day: "08",
        title: "130+ Research Papers Published",
        description: "Research teams across Hanzo AI, Lux, Zoo Labs, and Zen LM publish comprehensive papers on frontier AI, post-quantum cryptography, and consensus protocols.",
        type: "Research",
        link: "/research",
      },
    ],
  },
  {
    date: "November 2024",
    year: "2024",
    items: [
      {
        day: "28",
        title: "Hanzo Dev 2.0 Announced",
        description: "Next-generation AI coding assistant with advanced multimodal capabilities and improved context handling.",
        type: "Product Launch",
        link: "/products/hanzo-dev",
      },
      {
        day: "15",
        title: "260+ MCP Tools Released",
        description: "Hanzo MCP server ships with 260+ tools for AI models, covering file operations, search, browser automation, and more.",
        type: "Product Launch",
        link: "https://github.com/hanzoai/mcp",
      },
      {
        day: "01",
        title: "Los Angeles HQ Expansion",
        description: "Hanzo expands headquarters to accommodate growing team and new research facilities in LA.",
        type: "Company News",
        link: "/careers",
      },
    ],
  },
];

const pressReleases = [
  {
    title: "Hanzo Launches Idle Compute Revenue Sharing — All Accounts Earn Up to 20%",
    date: "February 26, 2026",
    summary: "Every Hanzo account now earns up to 20% of revenue generated when their allocated compute and LLM capacity is resold during idle periods. Available across all plans from Developer (free) to Enterprise.",
  },
  {
    title: "Hanzo Open Source Fund: 20% of Platform Revenue to OSS Developers",
    date: "February 26, 2026",
    summary: "Hanzo commits 20% of all platform revenue to the open source developers and projects that power its infrastructure, distributed proportionally to actual dependency usage.",
  },
  {
    title: "Hanzo Adopts Transparent Pricing Policy: No Hidden Fees, No Egress Charges",
    date: "February 26, 2026",
    summary: "New transparent pricing policy guarantees no hidden fees, no egress charges, and no surprise bills. Every invoice includes a clear cost breakdown alongside idle revenue sharing and OSS fund contributions.",
  },
  {
    title: "Canonical Pricing API and 390+ AI Models Now Live",
    date: "February 25, 2026",
    summary: "api.hanzo.ai launches as the single source of truth for all Hanzo pricing data. The LLM Gateway now serves 47 Zen models and 344+ third-party models from 58 providers.",
  },
  {
    title: "Hanzo Industries Announces ZEN Platform General Availability",
    date: "January 15, 2025",
    summary: "Enterprise AI orchestration platform now available to all customers with enhanced security features.",
  },
  {
    title: "130+ Research Papers Published Across AI, Cryptography, and Consensus",
    date: "January 5, 2025",
    summary: "Hanzo and partner organizations publish 130+ research papers spanning frontier AI, post-quantum cryptography, and consensus protocols.",
  },
  {
    title: "KOAN 2.0: Redefining Enterprise Knowledge Management",
    date: "December 20, 2024",
    summary: "Major platform update brings 3x faster search, improved accuracy, and new collaboration features.",
  },
];

export default function PageClient() {
  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6">
        {/* Hero Section */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hz-align-center hz-mb-7"
            >
              <div className="hz-btn hz-btn-primary hz-gap-2 hz-mb-5">
                <Megaphone className="hz-sq-2 hz-fg" />
                <span className="hz-fg hz-t-sm hz-w-medium">News & Announcements</span>
              </div>
              <h1 className="hz-t-4xl hz-w-bold hz-mb-5">
                Latest from Hanzo
              </h1>
              <p className={cn("hz-container-narrow hz-mw-md hz-t-xl", "hz-fg")}>
                Stay up to date with product launches, company milestones, partnerships, and research breakthroughs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-t-3xl hz-w-bold hz-mb-7"
            >
              Timeline
            </motion.h2>

            <div className="hz-rel">
              {/* Timeline line */}
              <div className={cn("hz-abs hz-left-0 hz-top-0 hz-bottom-0 hz-bw-1", "hz-bg-surface")} />

              {announcements.map((month, monthIndex) => (
                <div key={month.date} className="hz-mb-7">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="hz-rel hz-row hz-ai-center hz-mb-6"
                  >
                    <div className={cn("hz-sq-2 hz-abs hz-left-0 hz-bg-inverse hz-r-full hz-bordered hz-border-strong", "")} />
                    <div className="hz-ml-4">
                      <span className="hz-t-xl hz-w-bold">{month.date}</span>
                    </div>
                  </motion.div>

                  <div className="hz-stack-5 hz-ml-4">
                    {month.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                          "",
                          itemIndex % 2 === 0 ? "" : ""
                        )}
                      >
                        <div className={cn(
                          "hz-bordered hz-r-lg hz-p-5 hz-transition hz-hoverable",
                          "hz-bg-surface"
                        )}>
                          <div className="hz-row hz-ai-center hz-gap-3 hz-mb-3">
                            <span className="hz-badge hz-bg-surface hz-fg">
                              {item.type}
                            </span>
                            <span className={cn("hz-t-sm hz-row hz-ai-center hz-gap-1", "hz-fg")}>
                              <Calendar className="hz-sq-1" />
                              {month.date.split(" ")[0]} {item.day}
                            </span>
                          </div>
                          <h3 className="hz-t-xl hz-w-bold hz-mb-2 hz-transition hz-hoverable">
                            {item.title}
                          </h3>
                          <p className={cn("hz-t-sm hz-mb-4", "hz-fg")}>{item.description}</p>
                          <a
                            href={item.link}
                            className="hz-fg hz-t-sm hz-w-medium hz-row hz-ai-center hz-gap-1"
                          >
                            Read more
                            <ExternalLink className="hz-sq-1" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-row hz-ai-center hz-jc-between hz-mb-7"
            >
              <div className="hz-row hz-ai-center hz-gap-3">
                <FileText className="hz-sq-4 hz-fg" />
                <h2 className="hz-t-3xl hz-w-bold">Press Releases</h2>
              </div>
              <Button variant="outline" className={cn("hz-fg hz-hoverable")}>
                View All
              </Button>
            </motion.div>

            <div className="hz-grid hz-gap-5">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "hz-bordered hz-r-lg hz-p-5 hz-transition hz-pointer hz-hoverable",
                    "hz-bg-surface"
                  )}
                >
                  <div className="hz-col-row hz-jc-between hz-gap-4">
                    <div className="hz-grow">
                      <span className={cn("hz-t-sm", "hz-fg")}>{release.date}</span>
                      <h3 className="hz-t-xl hz-w-bold hz-mt-1 hz-mb-2 hz-transition hz-hoverable">
                        {release.title}
                      </h3>
                      <p className={cn("hz-t-sm", "hz-fg")}>{release.summary}</p>
                    </div>
                    <Button
                      variant="ghost"
                      className="hz-fg hz-whitespace-nowrap hz-hoverable"
                    >
                      Read Release
                      <ExternalLink className="hz-sq-2 hz-ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hz-align-center"
            >
              <h2 className="hz-t-4xl hz-w-bold hz-mb-5">
                Media Inquiries
              </h2>
              <p className={cn("hz-container-narrow hz-mw-md hz-mb-6", "hz-fg")}>
                For press inquiries, interviews, or additional information, please contact our media relations team.
              </p>
              <div className="hz-col-row hz-gap-4 hz-jc-center">
                <a href="mailto:press@hanzo.ai">
                  <Button className="hz-bg-inverse hz-hoverable">
                    Contact Press Team
                  </Button>
                </a>
                <Button variant="outline" className={cn("hz-fg hz-hoverable")}>
                  Download Press Kit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
