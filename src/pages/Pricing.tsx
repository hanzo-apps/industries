import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Zap, Building2, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const { isDarkMode } = useTheme();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Developer",
      price: billingPeriod === "monthly" ? "$0" : "$0",
      billingPeriod: "Free forever",
      description: "For individual developers exploring AI capabilities",
      icon: Zap,
      features: [
        "Access to Zen models via API",
        "1M tokens/month free",
        "Hanzo MCP tools",
        "Community Discord support",
        "Basic documentation",
        "Rate-limited API access",
      ],
      cta: "Start Free",
      ctaLink: "https://hanzo.ai/signup",
      highlighted: false,
    },
    {
      name: "Pro",
      price: billingPeriod === "monthly" ? "$49" : "$39",
      billingPeriod: billingPeriod === "monthly" ? "/month" : "/month (billed annually)",
      description: "For professionals and power users building with AI",
      icon: Sparkles,
      features: [
        "Everything in Developer",
        "10M tokens/month included",
        "Priority API access",
        "Access to all Zen models",
        "Hanzo Dev CLI tools",
        "Email support",
        "Usage analytics dashboard",
        "Custom model fine-tuning (limited)",
      ],
      cta: "Get Started",
      ctaLink: "https://hanzo.ai/signup?plan=pro",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Team",
      price: billingPeriod === "monthly" ? "$199" : "$159",
      billingPeriod: billingPeriod === "monthly" ? "/month" : "/month (billed annually)",
      description: "For teams collaborating on AI-powered projects",
      icon: Building2,
      features: [
        "Everything in Pro",
        "50M tokens/month included",
        "Up to 10 team members",
        "Shared workspaces",
        "Admin console",
        "SSO authentication",
        "Priority support",
        "Custom model training",
        "Data excluded from training",
      ],
      cta: "Start Trial",
      ctaLink: "https://hanzo.ai/signup?plan=team",
      highlighted: false,
    },
  ];

  const enterpriseFeatures = [
    "Unlimited API access",
    "Custom model training & fine-tuning",
    "Dedicated infrastructure",
    "On-premise deployment options",
    "Custom SLAs (99.9%+ uptime)",
    "24/7 dedicated support",
    "Security & compliance (SOC 2, HIPAA)",
    "Custom integrations",
    "Volume discounts",
    "Executive business reviews",
  ];

  const apiPricing = [
    { model: "Zen-32B", input: "$0.15", output: "$0.60", context: "128K" },
    { model: "Zen-72B", input: "$0.40", output: "$1.20", context: "128K" },
    { model: "Zen-235B", input: "$2.50", output: "$10.00", context: "128K" },
    { model: "Zen-480B", input: "$5.00", output: "$15.00", context: "200K" },
    { model: "Zen-Coder-32B", input: "$0.15", output: "$0.60", context: "128K" },
    { model: "Zen-Omni", input: "$2.50", output: "$10.00", context: "128K" },
  ];

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple, transparent pricing
            </h1>
            <p className={cn("text-lg mb-8", isDarkMode ? "text-white/50" : "text-black/50")}>
              Start free, scale as you grow. Pay only for what you use.
            </p>

            {/* Billing Toggle */}
            <div className={cn("inline-flex items-center gap-4 p-1 rounded-full", isDarkMode ? "bg-white/5" : "bg-black/5")}>
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  billingPeriod === "monthly"
                    ? (isDarkMode ? "bg-white text-black" : "bg-black text-white")
                    : (isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black")
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  billingPeriod === "annual"
                    ? (isDarkMode ? "bg-white text-black" : "bg-black text-white")
                    : (isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black")
                )}
              >
                Annual
                <span className="ml-1.5 text-xs text-green-400">Save 20%</span>
              </button>
            </div>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative rounded-2xl border p-8",
                    plan.highlighted
                      ? (isDarkMode ? "border-white bg-white/5" : "border-black bg-black/5")
                      : (isDarkMode ? "border-white/10 bg-black/50" : "border-black/10 bg-white/50")
                  )}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold",
                        isDarkMode ? "bg-white text-black" : "bg-black text-white"
                      )}>
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      plan.highlighted
                        ? (isDarkMode ? "bg-white" : "bg-black")
                        : (isDarkMode ? "bg-white/10" : "bg-black/5")
                    )}>
                      <Icon className={cn(
                        "w-5 h-5",
                        plan.highlighted
                          ? (isDarkMode ? "text-black" : "text-white")
                          : ""
                      )} />
                    </div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={cn("text-sm ml-1", isDarkMode ? "text-white/50" : "text-black/50")}>{plan.billingPeriod}</span>
                  </div>

                  <p className={cn("text-sm mb-6", isDarkMode ? "text-white/50" : "text-black/50")}>{plan.description}</p>

                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={cn(
                        "w-full mb-6",
                        plan.highlighted
                          ? (isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")
                          : (isDarkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-black hover:bg-black/10")
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </a>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className={cn("text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Enterprise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "rounded-2xl border p-8 md:p-12 mb-20",
              isDarkMode
                ? "border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                : "border-black/10 bg-gradient-to-br from-black/5 to-transparent"
            )}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4", isDarkMode ? "bg-white/10" : "bg-black/5")}>
                  <Building2 className="w-4 h-4" />
                  Enterprise
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Custom solutions for your organization
                </h2>
                <p className={cn("mb-6", isDarkMode ? "text-white/50" : "text-black/50")}>
                  Get dedicated infrastructure, custom model training, and enterprise-grade security.
                  Our team will work with you to build the perfect AI solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className={cn(isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
                      Contact Sales
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="https://cal.com/hanzo" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className={cn(isDarkMode ? "border-white/10 hover:bg-white/10" : "border-black/10 hover:bg-black/5")}>
                      Schedule a Demo
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {enterpriseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className={cn("text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* API Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-2">API Pricing</h2>
            <p className={cn("mb-8", isDarkMode ? "text-white/50" : "text-black/50")}>
              Pay-as-you-go pricing per million tokens. Volume discounts available.
            </p>

            <div className="overflow-x-auto">
              <table className={cn("w-full border rounded-lg overflow-hidden", isDarkMode ? "border-white/10" : "border-black/10")}>
                <thead className={cn(isDarkMode ? "bg-white/5" : "bg-black/5")}>
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Input (per 1M tokens)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Output (per 1M tokens)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Context</th>
                  </tr>
                </thead>
                <tbody className={cn("divide-y", isDarkMode ? "divide-white/10" : "divide-black/10")}>
                  {apiPricing.map((row) => (
                    <tr key={row.model} className={cn("transition-colors", isDarkMode ? "hover:bg-white/5" : "hover:bg-black/5")}>
                      <td className="px-6 py-4 font-medium">{row.model}</td>
                      <td className={cn("px-6 py-4", isDarkMode ? "text-white/50" : "text-black/50")}>{row.input}</td>
                      <td className={cn("px-6 py-4", isDarkMode ? "text-white/50" : "text-black/50")}>{row.output}</td>
                      <td className={cn("px-6 py-4", isDarkMode ? "text-white/50" : "text-black/50")}>{row.context}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={cn("text-sm mt-4", isDarkMode ? "text-white/40" : "text-black/40")}>
              * Prices shown are for standard API access. Enterprise customers receive volume discounts.
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">What counts as a token?</h3>
                <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                  Tokens are pieces of text that our models process. On average, 1 token is about 4 characters
                  or 0.75 words in English. Both input and output tokens are counted toward your usage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                  Yes, you can change your plan at any time. Upgrades take effect immediately,
                  and downgrades take effect at the start of your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What happens if I exceed my token limit?</h3>
                <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                  You'll be charged at the pay-as-you-go rate for additional tokens. We'll notify you
                  when you're approaching your limit so there are no surprises.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my data used to train models?</h3>
                <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                  By default, your data is not used for training. Team and Enterprise plans have
                  explicit data exclusion guarantees. See our privacy policy for details.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Ready to get started?
            </h2>
            <p className={cn("mb-8 max-w-2xl mx-auto", isDarkMode ? "text-white/50" : "text-black/50")}>
              Start building with Hanzo AI today. No credit card required for the free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://hanzo.ai/signup" target="_blank" rel="noopener noreferrer">
                <Button className={cn(isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
                  Start Building Free
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className={cn(isDarkMode ? "border-white/10 hover:bg-white/10" : "border-black/10 hover:bg-black/5")}>
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
