import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        a: "Yes! We offer a generous free tier with $10 in credits to help you explore our platform. This includes access to all models and features with some rate limiting.",
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

const Help = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fd4444]/10 border border-[#fd4444]/20 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 text-[#fd4444]" />
                <span className="text-[#fd4444] text-sm font-medium">Help Center</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                How can we help?
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Find answers to common questions, explore our documentation, or get in touch with our support team.
              </p>

              {/* Search */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-6 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-xl text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Documentation</h2>
              <p className="text-gray-400">Explore our comprehensive documentation and guides</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#fd4444]/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#fd4444]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#fd4444]" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-[#fd4444] transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#fd4444] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{doc.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Quick answers to common questions</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#fd4444] rounded-full" />
                    {category.category}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-gray-800"
                      >
                        <AccordionTrigger className="text-left text-white hover:text-[#fd4444] hover:no-underline py-3">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400 pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
              <p className="text-gray-400">Our support team is here to assist you</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-[#fd4444]/50 transition-colors"
              >
                <div className="w-16 h-16 bg-[#fd4444]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-[#fd4444]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-gray-400 mb-6">
                  Chat with our support team in real-time for immediate assistance.
                </p>
                <Button className="bg-[#fd4444] hover:bg-[#fd4444]/90 text-white w-full">
                  Start Chat
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-[#fd4444]/50 transition-colors"
              >
                <div className="w-16 h-16 bg-[#fd4444]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-[#fd4444]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
                <p className="text-gray-400 mb-6">
                  Send us a detailed message and we'll respond within 24 hours.
                </p>
                <a href="mailto:support@hanzo.ai">
                  <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 w-full">
                    support@hanzo.ai
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-[#fd4444]/50 transition-colors"
              >
                <div className="w-16 h-16 bg-[#fd4444]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book className="w-8 h-8 text-[#fd4444]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
                <p className="text-gray-400 mb-6">
                  Join our Discord community to connect with other developers.
                </p>
                <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 w-full">
                    Join Discord
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise Support */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#fd4444]/20 to-transparent border border-[#fd4444]/30 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Enterprise Support
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Get dedicated support, custom SLAs, and direct access to our engineering team with an enterprise plan.
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#fd4444] rounded-full" />
                      24/7 priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#fd4444] rounded-full" />
                      Dedicated success manager
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#fd4444] rounded-full" />
                      Custom SLA agreements
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#fd4444] rounded-full" />
                      Direct engineering support
                    </li>
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-[#fd4444] hover:bg-[#fd4444]/90 text-white">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-48 h-48 bg-[#fd4444]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-24 h-24 text-[#fd4444]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
