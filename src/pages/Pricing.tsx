import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Zap, Building2, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const PRICING_API = "https://api.hanzo.ai/v1/pricing";

interface ModelPricing {
  name: string;
  fullName: string;
  tier: string;
  features: string[];
  pricing: {
    input: number;
    output: number;
    cacheRead: number | null;
    cacheWrite: number | null;
  };
}

interface ThirdPartyModel {
  name: string;
  features: string[];
  contextWindow: number;
  pricing: {
    input: number;
    output: number;
    cacheRead: number | null;
    cacheWrite: number | null;
  };
}

interface PricingData {
  updated: string;
  hanzoModels: ModelPricing[];
  thirdPartyModels: ThirdPartyModel[];
}

function extractContext(features: string[]): string {
  const ctx = features.find((f) => f.toLowerCase().includes("context"));
  if (!ctx) return "—";
  const match = ctx.match(/(\d+[kK]?)/);
  return match ? match[1].toUpperCase() : ctx;
}

function formatPrice(price: number): string {
  if (price < 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(2)}`;
}

const TIER_ORDER = ["pro", "pro max", "ultra", "ultra max"];

function tierSort(a: ModelPricing, b: ModelPricing): number {
  return TIER_ORDER.indexOf(a.tier) - TIER_ORDER.indexOf(b.tier);
}

const Pricing = () => {
  const { isDarkMode } = useTheme();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(PRICING_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPricingData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch pricing:", err);
        setError("Unable to load live pricing. Please try again later.");
        setLoading(false);
      });
  }, []);

  const plans = [
    {
      name: "Developer",
      price: billingPeriod === "monthly" ? "$0" : "$0",
      billingPeriod: "Free forever",
      description: "For individual developers exploring AI capabilities",
      icon: Zap,
      features: [
        "Access to Zen models via API",
        "$5 free credit (new accounts)",
        "60 requests/min",
        "100K tokens/min",
        "Hanzo MCP tools",
        "Community Discord support",
      ],
      cta: "Start Free",
      ctaLink: "https://console.hanzo.ai",
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
        "500 requests/min",
        "1M tokens/min",
        "Access to all Zen + third-party models",
        "Hanzo Dev CLI tools",
        "Email support",
        "Usage analytics dashboard",
      ],
      cta: "Get Started",
      ctaLink: "https://console.hanzo.ai?plan=pro",
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
        "Up to 10 team members",
        "Shared workspaces",
        "Admin console",
        "SSO authentication",
        "Priority support",
        "Custom model training",
        "Data excluded from training",
      ],
      cta: "Start Trial",
      ctaLink: "https://console.hanzo.ai?plan=team",
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

  const hanzoModels = pricingData?.hanzoModels?.slice().sort(tierSort) ?? [];
  const thirdPartyModels = pricingData?.thirdPartyModels ?? [];

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

          {/* API Pricing — Zen Models (live from API) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-2">Zen Model Pricing</h2>
            <p className={cn("mb-8", isDarkMode ? "text-white/50" : "text-black/50")}>
              Pay-as-you-go per million tokens. All 14 Zen models via <code className="text-xs">api.hanzo.ai</code>.
              {pricingData?.updated && (
                <span className={cn("ml-2 text-xs", isDarkMode ? "text-white/30" : "text-black/30")}>
                  Updated {new Date(pricingData.updated).toLocaleDateString()}
                </span>
              )}
            </p>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className={cn(isDarkMode ? "text-white/50" : "text-black/50")}>Loading live pricing...</span>
              </div>
            ) : error ? (
              <div className={cn("text-center py-16", isDarkMode ? "text-white/40" : "text-black/40")}>
                {error}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className={cn("w-full border rounded-lg overflow-hidden", isDarkMode ? "border-white/10" : "border-black/10")}>
                  <thead className={cn(isDarkMode ? "bg-white/5" : "bg-black/5")}>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Model</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Tier</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Context</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Input / 1M tok</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Output / 1M tok</th>
                    </tr>
                  </thead>
                  <tbody className={cn("divide-y", isDarkMode ? "divide-white/10" : "divide-black/10")}>
                    {hanzoModels.map((m) => (
                      <tr key={m.name} className={cn("transition-colors", isDarkMode ? "hover:bg-white/5" : "hover:bg-black/5")}>
                        <td className="px-6 py-4">
                          <div className="font-medium">{m.name}</div>
                          <div className={cn("text-xs", isDarkMode ? "text-white/40" : "text-black/40")}>{m.fullName}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "text-xs px-2 py-0.5 rounded-full capitalize",
                            isDarkMode ? "bg-white/10 text-white/60" : "bg-black/5 text-black/60"
                          )}>
                            {m.tier}
                          </span>
                        </td>
                        <td className={cn("px-6 py-4 text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                          {extractContext(m.features)}
                        </td>
                        <td className={cn("px-6 py-4 text-right font-mono text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>
                          {formatPrice(m.pricing.input)}
                        </td>
                        <td className={cn("px-6 py-4 text-right font-mono text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>
                          {formatPrice(m.pricing.output)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>

          {/* Third-Party Models (live from API) */}
          {thirdPartyModels.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-2">Third-Party Models</h2>
              <p className={cn("mb-8", isDarkMode ? "text-white/50" : "text-black/50")}>
                100+ additional models via the Hanzo LLM Gateway. Same API, same SDK.
              </p>

              <div className="overflow-x-auto">
                <table className={cn("w-full border rounded-lg overflow-hidden", isDarkMode ? "border-white/10" : "border-black/10")}>
                  <thead className={cn(isDarkMode ? "bg-white/5" : "bg-black/5")}>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Model</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Context</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Input / 1M tok</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Output / 1M tok</th>
                    </tr>
                  </thead>
                  <tbody className={cn("divide-y", isDarkMode ? "divide-white/10" : "divide-black/10")}>
                    {thirdPartyModels.map((m) => (
                      <tr key={m.name} className={cn("transition-colors", isDarkMode ? "hover:bg-white/5" : "hover:bg-black/5")}>
                        <td className="px-6 py-4 font-medium">{m.name}</td>
                        <td className={cn("px-6 py-4 text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                          {m.contextWindow ? `${Math.round(m.contextWindow / 1000)}K` : "—"}
                        </td>
                        <td className={cn("px-6 py-4 text-right font-mono text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>
                          {formatPrice(m.pricing.input)}
                        </td>
                        <td className={cn("px-6 py-4 text-right font-mono text-sm", isDarkMode ? "text-white/70" : "text-black/70")}>
                          {formatPrice(m.pricing.output)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={cn("text-sm mt-4", isDarkMode ? "text-white/40" : "text-black/40")}>
                * Third-party model pricing includes a 20% gateway markup. Prices synced daily from upstream providers.
              </p>
            </motion.div>
          )}

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
              Start building with Hanzo AI today. Every new account gets $5 free credit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://console.hanzo.ai" target="_blank" rel="noopener noreferrer">
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
