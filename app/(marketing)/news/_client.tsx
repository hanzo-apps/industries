"use client";

import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";
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

const typeColors: Record<string, string> = {
  "Product Launch": "bg-primary",
  "Funding": "bg-foreground/20",
  "Partnership": "bg-foreground/20",
  "Product Update": "bg-foreground/20",
  "Milestone": "bg-foreground/30",
  "Research": "bg-foreground/40",
  "Company News": "bg-foreground/50",
};

export default function PageClient() {
  return (
    <div className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-border rounded-full mb-6">
                <Megaphone className="w-4 h-4 text-foreground" />
                <span className="text-foreground text-sm font-medium">News & Announcements</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest from Hanzo
              </h1>
              <p className={cn("text-xl max-w-2xl mx-auto", "text-muted-foreground")}>
                Stay up to date with product launches, company milestones, partnerships, and research breakthroughs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={cn("py-24 px-4", "bg-foreground/5")}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              Timeline
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className={cn("absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5", "bg-foreground/10")} />

              {announcements.map((month, monthIndex) => (
                <div key={month.date} className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center mb-8"
                  >
                    <div className={cn("absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4", "border-background")} />
                    <div className="ml-8 md:ml-0 md:absolute md:left-1/2 md:transform md:translate-x-6">
                      <span className="text-xl font-bold">{month.date}</span>
                    </div>
                  </motion.div>

                  <div className="space-y-6 ml-8 md:ml-0">
                    {month.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                          "md:w-[calc(50%-2rem)]",
                          itemIndex % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        )}
                      >
                        <div className={cn(
                          "border rounded-xl p-6 transition-colors group hover:border-border",
                          "bg-foreground/5 border-border"
                        )}>
                          <div className="flex items-center gap-3 mb-3">
                            <span className={cn("px-2 py-1 text-xs font-medium text-foreground rounded", typeColors[item.type] || "bg-background/50")}>
                              {item.type}
                            </span>
                            <span className={cn("text-sm flex items-center gap-1", "text-muted-foreground")}>
                              <Calendar className="w-3 h-3" />
                              {month.date.split(" ")[0]} {item.day}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
                            {item.title}
                          </h3>
                          <p className={cn("text-sm mb-4", "text-muted-foreground")}>{item.description}</p>
                          <a
                            href={item.link}
                            className="text-foreground text-sm font-medium flex items-center gap-1 hover:underline"
                          >
                            Read more
                            <ExternalLink className="w-3 h-3" />
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
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-foreground" />
                <h2 className="text-3xl font-bold">Press Releases</h2>
              </div>
              <Button variant="outline" className={cn("border-border text-foreground hover:bg-accent")}>
                View All
              </Button>
            </motion.div>

            <div className="grid gap-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "border rounded-xl p-6 transition-colors group cursor-pointer hover:border-border",
                    "bg-foreground/5 border-border"
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <span className={cn("text-sm", "text-muted-foreground")}>{release.date}</span>
                      <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-foreground transition-colors">
                        {release.title}
                      </h3>
                      <p className={cn("text-sm", "text-muted-foreground")}>{release.summary}</p>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-foreground hover:text-foreground hover:bg-accent whitespace-nowrap"
                    >
                      Read Release
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className={cn("py-24 px-4", "bg-foreground/5")}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Media Inquiries
              </h2>
              <p className={cn("mb-8 max-w-xl mx-auto", "text-muted-foreground")}>
                For press inquiries, interviews, or additional information, please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:press@hanzo.ai">
                  <Button className="bg-primary hover:bg-primary/90 text-foreground">
                    Contact Press Team
                  </Button>
                </a>
                <Button variant="outline" className={cn("border-border text-foreground hover:bg-accent")}>
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
