"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Input, cn } from '@hanzo/ui'
import {
  Search,
  Book,
  Code2,
  MessageCircle,
  Mail,
  FileText,
  Rocket,
  Shield,
  Zap,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started with Hanzo AI?",
        a: "Getting started is easy. Sign up for a free account at hanzo.ai, obtain your API key from the dashboard, and follow our quickstart guide. You can make your first API call within minutes.",
      },
      {
        q: "What programming languages are supported?",
        a: "We provide official SDKs for Python, JavaScript/TypeScript, Go, Ruby, and Java. Our REST API can be accessed from any language that supports HTTP requests.",
      },
      {
        q: "Is there a free tier available?",
        a: "Yes! We offer a free tier with $5 in credits to help you explore our platform. This includes access to all models and features with some rate limiting.",
      },
    ],
  },
  {
    category: "Billing & Pricing",
    questions: [
      {
        q: "How does pricing work?",
        a: "We use a pay-as-you-go model based on token usage. Different models have different pricing tiers. Enterprise customers can contact us for custom volume pricing and committed use discounts.",
      },
      {
        q: "Can I set spending limits?",
        a: "Absolutely. You can configure hard and soft spending limits in your dashboard. We'll notify you when you approach your limits and can automatically pause usage if needed.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, ACH transfers for US customers, and wire transfers for enterprise accounts. Invoicing is available for qualified enterprise customers.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "Is my data secure?",
        a: "Security is our top priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain SOC 2 Type II certification and undergo regular third-party security audits.",
      },
      {
        q: "Do you train on my data?",
        a: "No. We never use your API data to train our models. Your data is processed only to fulfill your requests and is automatically deleted after processing unless you explicitly enable data retention.",
      },
      {
        q: "What compliance certifications do you have?",
        a: "We maintain SOC 2 Type II, ISO 27001, HIPAA (with BAA), and GDPR compliance. Additional certifications including FedRAMP are in progress for government customers.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What are the rate limits?",
        a: "Rate limits vary by plan and model. Free tier has 60 requests per minute, while paid plans offer higher limits. Enterprise customers can request custom rate limits based on their needs.",
      },
      {
        q: "How do I handle errors?",
        a: "Our API uses standard HTTP status codes. Implement exponential backoff for 429 (rate limit) and 5xx errors. Check our error handling guide for detailed best practices and code examples.",
      },
      {
        q: "Can I fine-tune models?",
        a: "Yes, enterprise customers can fine-tune base models on their own data. Contact our sales team to learn more about fine-tuning capabilities, pricing, and requirements.",
      },
    ],
  },
];

const documentationLinks = [
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: Code2,
    href: "https://docs.hanzo.ai/api",
  },
  {
    title: "Quickstart Guide",
    description: "Get up and running in 5 minutes",
    icon: Rocket,
    href: "https://docs.hanzo.ai/quickstart",
  },
  {
    title: "SDK Documentation",
    description: "Language-specific SDK guides",
    icon: Book,
    href: "https://docs.hanzo.ai/sdks",
  },
  {
    title: "Security Overview",
    description: "Security practices and compliance",
    icon: Shield,
    href: "https://docs.hanzo.ai/security",
  },
  {
    title: "Best Practices",
    description: "Optimization and usage patterns",
    icon: Zap,
    href: "https://docs.hanzo.ai/best-practices",
  },
  {
    title: "Changelog",
    description: "Latest updates and releases",
    icon: FileText,
    href: "https://docs.hanzo.ai/changelog",
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
                <HelpCircle className="hz-sq-2 hz-fg" />
                <span className="hz-fg hz-t-sm hz-w-medium">Help Center</span>
              </div>
              <h1 className="hz-t-4xl hz-w-bold hz-mb-5">
                How can we help?
              </h1>
              <p className={cn("hz-container-narrow hz-mw-md hz-t-xl hz-mb-6", "hz-fg")}>
                Find answers to common questions, explore our documentation, or get in touch with our support team.
              </p>

              {/* Search */}
              <div className="hz-container-narrow hz-mw-md hz-rel">
                <Search className={cn("hz-center-y hz-sq-3 hz-abs", "hz-fg")} />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  className={cn(
                    "hz-w-full hz-px-6 hz-px-4 hz-py-5 hz-r-lg hz-t-lg",
                    "hz-bg-surface hz-fg"
                  )}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-align-center hz-mb-7"
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Documentation</h2>
              <p className={cn("hz-fg")}>Explore our comprehensive documentation and guides</p>
            </motion.div>

            <div className="hz-grid hz-grid-3 hz-gap-5">
              {documentationLinks.map((doc, index) => {
                const Icon = doc.icon;
                return (
                  <motion.a
                    key={doc.title}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                      "hz-bordered hz-r-lg hz-p-5 hz-transition hz-hoverable",
                      "hz-bg-surface"
                    )}
                  >
                    <div className="hz-row hz-ai-start hz-jc-between hz-mb-4">
                      <div className="hz-sq-7 hz-bg-surface hz-r-lg hz-row hz-ai-center hz-jc-center">
                        <Icon className="hz-sq-4 hz-fg" />
                      </div>
                      <ExternalLink className={cn("hz-sq-2 hz-transition hz-hoverable", "hz-fg-soft")} />
                    </div>
                    <h3 className="hz-t-xl hz-w-semibold hz-mb-2 hz-transition hz-hoverable">
                      {doc.title}
                    </h3>
                    <p className={cn("hz-t-sm", "hz-fg")}>{doc.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-align-center hz-mb-7"
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Frequently Asked Questions</h2>
              <p className={cn("hz-fg")}>Quick answers to common questions</p>
            </motion.div>

            <div className="hz-grid hz-grid-2 hz-gap-6">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "hz-bordered hz-r-lg hz-p-5",
                    "hz-bg-surface"
                  )}
                >
                  <h3 className="hz-t-xl hz-w-semibold hz-mb-4 hz-row hz-ai-center hz-gap-2">
                    <span className="hz-sq-1 hz-bg-inverse hz-r-full" />
                    {category.category}
                  </h3>
                  {/* <details> is the disclosure: no component, no JavaScript,
                      and it is open when the browser prints or finds text. */}
                  <div className="hz-stack-2">
                    {category.questions.map((faq, faqIndex) => (
                      <details key={faqIndex} className="hz-faq">
                        <summary>{faq.q}</summary>
                        <p>{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hz-align-center hz-mb-7"
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Need More Help?</h2>
              <p className={cn("hz-fg")}>Our support team is here to assist you</p>
            </motion.div>

            <div className="hz-grid hz-grid-3 hz-gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "hz-bordered hz-r-lg hz-p-6 hz-align-center hz-transition hz-hoverable",
                  "hz-bg-surface"
                )}
              >
                <div className="hz-sq-8 hz-bg-surface hz-r-full hz-row hz-ai-center hz-jc-center hz-mx-auto hz-mb-5">
                  <MessageCircle className="hz-sq-5 hz-fg" />
                </div>
                <h3 className="hz-t-xl hz-w-semibold hz-mb-3">Live Chat</h3>
                <p className={cn("hz-mb-5", "hz-fg")}>
                  Chat with our support team in real-time for immediate assistance.
                </p>
                <a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer">
                  <Button className="hz-bg-inverse hz-w-full hz-hoverable">
                    Start Chat
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={cn(
                  "hz-bordered hz-r-lg hz-p-6 hz-align-center hz-transition hz-hoverable",
                  "hz-bg-surface"
                )}
              >
                <div className="hz-sq-8 hz-bg-surface hz-r-full hz-row hz-ai-center hz-jc-center hz-mx-auto hz-mb-5">
                  <Mail className="hz-sq-5 hz-fg" />
                </div>
                <h3 className="hz-t-xl hz-w-semibold hz-mb-3">Email Support</h3>
                <p className={cn("hz-mb-5", "hz-fg")}>
                  Send us a detailed message and we'll respond within 24 hours.
                </p>
                <a href="mailto:support@hanzo.ai">
                  <Button variant="outline" className={cn(
                    "hz-w-full",
                    "hz-fg hz-hoverable"
                  )}>
                    support@hanzo.ai
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={cn(
                  "hz-bordered hz-r-lg hz-p-6 hz-align-center hz-transition hz-hoverable",
                  "hz-bg-surface"
                )}
              >
                <div className="hz-sq-8 hz-bg-surface hz-r-full hz-row hz-ai-center hz-jc-center hz-mx-auto hz-mb-5">
                  <Book className="hz-sq-5 hz-fg" />
                </div>
                <h3 className="hz-t-xl hz-w-semibold hz-mb-3">Community</h3>
                <p className={cn("hz-mb-5", "hz-fg")}>
                  Join our Discord community to connect with other developers.
                </p>
                <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className={cn(
                    "hz-w-full",
                    "hz-fg hz-hoverable"
                  )}>
                    Join Discord
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise Support */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hz-card"
            >
              <div className="hz-grid hz-grid-2 hz-gap-6 hz-ai-center">
                <div>
                  <h2 className="hz-t-3xl hz-w-bold hz-mb-4">
                    Enterprise Support
                  </h2>
                  <p className={cn("hz-mb-5", "hz-fg")}>
                    Get dedicated support, custom SLAs, and direct access to our engineering team with an enterprise plan.
                  </p>
                  <ul className={cn("hz-stack-3 hz-mb-6", "hz-fg")}>
                    <li className="hz-row hz-ai-center hz-gap-2">
                      <span className="hz-sq-1 hz-bg-inverse hz-r-full" />
                      24/7 priority support
                    </li>
                    <li className="hz-row hz-ai-center hz-gap-2">
                      <span className="hz-sq-1 hz-bg-inverse hz-r-full" />
                      Dedicated success manager
                    </li>
                    <li className="hz-row hz-ai-center hz-gap-2">
                      <span className="hz-sq-1 hz-bg-inverse hz-r-full" />
                      Custom SLA agreements
                    </li>
                    <li className="hz-row hz-ai-center hz-gap-2">
                      <span className="hz-sq-1 hz-bg-inverse hz-r-full" />
                      Direct engineering support
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="hz-bg-inverse hz-hoverable">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                <div className="hz-desktop-only hz-row hz-jc-center">
                  <div className="hz-sq-8 hz-bg-surface hz-r-full hz-row hz-ai-center hz-jc-center">
                    <Shield className="hz-sq-8 hz-fg" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
