"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@hanzo/ui";
import {
  Check,
  Zap,
  Building2,
  Sparkles,
  ArrowRight,
  Loader2,
  DollarSign,
  Heart,
  Shield,
} from "lucide-react";

/* ─── API endpoints ─── */

const MODEL_PRICING_API = "https://api.hanzo.ai/v1/pricing";
const SUBSCRIPTIONS_API = "https://pricing.hanzo.ai/v1/pricing/subscriptions";
const POLICY_API = "https://pricing.hanzo.ai/v1/pricing/policy";

/* ─── Types: model pricing (existing) ─── */

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

interface ModelPricingData {
  updated: string;
  hanzoModels: ModelPricing[];
  thirdPartyModels: ThirdPartyModel[];
}

/* ─── Types: subscription plans ─── */

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  category?: string;
  features: string[];
  limits?: Record<string, number>;
  popular?: boolean;
  contactSales?: boolean;
  cta?: string;
  ctaLink?: string;
  payouts?: {
    idleResalePercent: number;
    description: string;
  };
}

interface SubscriptionsResponse {
  plans: SubscriptionPlan[];
}

/* ─── Types: pricing policy ─── */

interface PricingPolicy {
  transparentPricing: boolean;
  revenueSharing: {
    idleResale: {
      percent: number;
      description: string;
      eligibility: string;
      payoutMethod: string;
    };
    openSource: {
      percent: number;
      description: string;
      program: string;
    };
  };
  principles: string[];
}

/* ─── Helpers ─── */

function extractContext(features: string[]): string {
  const ctx = features.find((f) => f.toLowerCase().includes("context"));
  if (!ctx) return "\u2014";
  const match = ctx.match(/(\d+[kK]?)/);
  return match ? match[1].toUpperCase() : ctx;
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

const TIER_ORDER = ["pro", "pro max", "ultra", "ultra max"];

function tierSort(a: ModelPricing, b: ModelPricing): number {
  return TIER_ORDER.indexOf(a.tier) - TIER_ORDER.indexOf(b.tier);
}

const PLAN_ICONS: Record<string, typeof Zap> = {
  developer: Zap,
  pro: Sparkles,
  team: Building2,
};

function formatPlanPrice(
  plan: SubscriptionPlan,
  billingPeriod: "monthly" | "annual"
): { amount: string; suffix: string } {
  if (plan.contactSales) return { amount: "Custom", suffix: "" };
  const price =
    billingPeriod === "annual" ? plan.priceAnnual : plan.priceMonthly;
  if (price === null || price === undefined || price === 0)
    return { amount: "$0", suffix: "Free forever" };
  return {
    amount: `$${price}`,
    suffix:
      billingPeriod === "annual" ? "/month (billed annually)" : "/month",
  };
}

/* ─── Skeleton components ─── */

function PlanSkeleton() {
  return (
    <div className="rounded-2xl border border-border p-8 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-foreground/10" />
        <div className="h-6 w-24 bg-foreground/10 rounded" />
      </div>
      <div className="h-10 w-20 bg-foreground/10 rounded mb-4" />
      <div className="h-4 w-48 bg-foreground/10 rounded mb-6" />
      <div className="h-10 w-full bg-foreground/10 rounded mb-6" />
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-foreground/10 flex-shrink-0" />
            <div className="h-4 w-full bg-foreground/10 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

function EnterpriseSkeleton() {
  return (
    <div className="rounded-2xl border border-border p-8 md:p-12 mb-20 animate-pulse">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="h-6 w-32 bg-foreground/10 rounded-full mb-4" />
          <div className="h-8 w-64 bg-foreground/10 rounded mb-4" />
          <div className="h-16 w-full bg-foreground/10 rounded mb-6" />
          <div className="flex gap-4">
            <div className="h-10 w-32 bg-foreground/10 rounded" />
            <div className="h-10 w-32 bg-foreground/10 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-foreground/10 flex-shrink-0" />
              <div className="h-4 w-full bg-foreground/10 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PolicySkeleton() {
  return (
    <div className="rounded-2xl border border-border p-8 md:p-12 mb-20 animate-pulse">
      <div className="h-8 w-48 bg-foreground/10 rounded mb-8" />
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="h-32 bg-foreground/10 rounded-xl" />
        <div className="h-32 bg-foreground/10 rounded-xl" />
      </div>
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 w-40 bg-foreground/10 rounded-full" />
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export default function PageClient() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );

  // Model pricing state (existing)
  const [modelPricingData, setModelPricingData] =
    useState<ModelPricingData | null>(null);
  const [modelLoading, setModelLoading] = useState(true);
  const [modelError, setModelError] = useState<string | null>(null);

  // Subscription plans state
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [plansLoading, setPlansLoading] = useState(true);
  const [plansError, setPlansError] = useState<string | null>(null);

  // Policy state
  const [policy, setPolicy] = useState<PricingPolicy | null>(null);
  const [policyLoading, setPolicyLoading] = useState(true);

  useEffect(() => {
    // Fetch model pricing
    fetch(MODEL_PRICING_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setModelPricingData(data);
        setModelLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch model pricing:", err);
        setModelError("Unable to load live pricing. Please try again later.");
        setModelLoading(false);
      });

    // Fetch subscription plans
    fetch(SUBSCRIPTIONS_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: SubscriptionsResponse) => {
        setPlans(data.plans ?? []);
        setPlansLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch subscription plans:", err);
        setPlansError("Unable to load plans. Please try again later.");
        setPlansLoading(false);
      });

    // Fetch pricing policy
    fetch(POLICY_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: PricingPolicy) => {
        setPolicy(data);
        setPolicyLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch pricing policy:", err);
        setPolicyLoading(false);
      });
  }, []);

  // Separate regular plans from enterprise
  const regularPlans = plans.filter((p) => !p.contactSales);
  const enterprisePlan = plans.find((p) => p.contactSales);

  const hanzoModels =
    modelPricingData?.hanzoModels?.slice().sort(tierSort) ?? [];
  const thirdPartyModels = modelPricingData?.thirdPartyModels ?? [];

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        "bg-background text-foreground"
      )}
    >
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
            <p className={cn("text-lg mb-8", "text-muted-foreground")}>
              Start free, scale as you grow. Pay only for what you use.
            </p>

            {/* Billing Toggle */}
            <div
              className={cn(
                "inline-flex items-center gap-4 p-1 rounded-full",
                "bg-foreground/5"
              )}
            >
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  billingPeriod === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  billingPeriod === "annual"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Annual
                <span
                  className={cn(
                    "ml-1.5 text-xs",
                    billingPeriod === "annual"
                      ? "text-primary-foreground/50"
                      : "text-muted-foreground"
                  )}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Plans Grid */}
          {plansLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <PlanSkeleton />
              <PlanSkeleton />
              <PlanSkeleton />
            </div>
          ) : plansError ? (
            <div
              className={cn(
                "text-center py-16 mb-20",
                "text-muted-foreground"
              )}
            >
              {plansError}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {regularPlans.map((plan, index) => {
                const Icon = PLAN_ICONS[plan.id] ?? Zap;
                const highlighted = !!plan.popular;
                const { amount, suffix } = formatPlanPrice(
                  plan,
                  billingPeriod
                );
                const ctaText =
                  plan.cta ??
                  (plan.priceMonthly === 0 ? "Start Free" : "Get Started");
                const ctaLink =
                  plan.ctaLink ?? `https://console.hanzo.ai?plan=${plan.id}`;

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "relative rounded-2xl border p-8",
                      highlighted
                        ? "border-primary bg-foreground/5"
                        : "border-border bg-background/50"
                    )}
                  >
                    {highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-semibold",
                            "bg-primary text-primary-foreground"
                          )}
                        >
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          highlighted ? "bg-primary" : "bg-foreground/10"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-5 h-5",
                            highlighted ? "text-primary-foreground" : ""
                          )}
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                    </div>

                    <div className="mb-4">
                      <span className="text-4xl font-bold">{amount}</span>
                      <span
                        className={cn(
                          "text-sm ml-1",
                          "text-muted-foreground"
                        )}
                      >
                        {suffix}
                      </span>
                    </div>

                    <p
                      className={cn(
                        "text-sm mb-6",
                        "text-muted-foreground"
                      )}
                    >
                      {plan.description}
                    </p>

                    <a
                      href={ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className={cn(
                          "w-full mb-6",
                          highlighted
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-foreground/10 text-foreground hover:bg-accent"
                        )}
                      >
                        {ctaText}
                      </Button>
                    </a>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span
                            className={cn(
                              "text-sm",
                              "text-muted-foreground"
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Enterprise Section */}
          {plansLoading ? (
            <EnterpriseSkeleton />
          ) : enterprisePlan ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cn(
                "rounded-2xl border p-8 md:p-12 mb-20",
                "border-border bg-gradient-to-br from-white/5 to-transparent"
              )}
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div
                    className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4",
                      "bg-foreground/10"
                    )}
                  >
                    <Building2 className="w-4 h-4" />
                    {enterprisePlan.name}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Custom solutions for your organization
                  </h2>
                  <p className={cn("mb-6", "text-muted-foreground")}>
                    {enterprisePlan.description ||
                      "Get dedicated infrastructure, custom model training, and enterprise-grade security. Our team will work with you to build the perfect AI solution."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        className={cn(
                          "bg-primary text-primary-foreground hover:bg-primary/90"
                        )}
                      >
                        Contact Sales
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <a
                      href="https://cal.com/hanzo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className={cn(
                          "border-border text-foreground hover:bg-accent"
                        )}
                      >
                        Schedule a Demo
                      </Button>
                    </a>
                  </div>
                </div>
                <div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {enterprisePlan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span
                          className={cn(
                            "text-sm",
                            "text-muted-foreground"
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : null}

          {/* Transparent Pricing / Revenue Sharing Section */}
          {policyLoading ? (
            <PolicySkeleton />
          ) : policy ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cn(
                "rounded-2xl border p-8 md:p-12 mb-20",
                "border-border bg-gradient-to-br from-white/5 to-transparent"
              )}
            >
              <h2 className="text-3xl font-bold mb-2">Transparent Pricing</h2>
              <p className={cn("mb-8", "text-muted-foreground")}>
                No hidden fees, no surprises. We share revenue with you.
              </p>

              {/* Revenue Sharing Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Idle Resale */}
                <div
                  className={cn(
                    "rounded-xl border p-6",
                    "border-border bg-foreground/5"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        "bg-primary"
                      )}
                    >
                      <DollarSign className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Earn up to {policy.revenueSharing.idleResale.percent}%
                        on idle compute &amp; LLM resale
                      </h3>
                    </div>
                  </div>
                  <p
                    className={cn("text-sm mb-3", "text-muted-foreground")}
                  >
                    When your logged-in account is idle, we resell your
                    allocated compute and LLM capacity and share up to{" "}
                    {policy.revenueSharing.idleResale.percent}% of revenue
                    with you.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        "bg-foreground/10 text-muted-foreground"
                      )}
                    >
                      {policy.revenueSharing.idleResale.eligibility}
                    </span>
                    <span
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        "bg-foreground/10 text-muted-foreground"
                      )}
                    >
                      {policy.revenueSharing.idleResale.payoutMethod}
                    </span>
                  </div>
                </div>

                {/* Open Source Fund */}
                <div
                  className={cn(
                    "rounded-xl border p-6",
                    "border-border bg-foreground/5"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        "bg-primary"
                      )}
                    >
                      <Heart className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {policy.revenueSharing.openSource.percent}% of
                        revenue funds open source
                      </h3>
                    </div>
                  </div>
                  <p
                    className={cn("text-sm mb-3", "text-muted-foreground")}
                  >
                    {policy.revenueSharing.openSource.description ||
                      `Via the ${policy.revenueSharing.openSource.program}, proportional to OSS dependency usage.`}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        "bg-foreground/10 text-muted-foreground"
                      )}
                    >
                      {policy.revenueSharing.openSource.program}
                    </span>
                  </div>
                </div>
              </div>

              {/* Principles */}
              {policy.principles.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {policy.principles.map((principle) => (
                    <div
                      key={principle}
                      className="flex items-center gap-2"
                    >
                      <Shield className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span
                        className={cn(
                          "text-sm",
                          "text-muted-foreground"
                        )}
                      >
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : null}

          {/* API Pricing -- Zen Models (live from API) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-2">Zen Model Pricing</h2>
            <p className={cn("mb-8", "text-muted-foreground")}>
              Pay-as-you-go per million tokens. All 14 Zen models via{" "}
              <code className="text-xs">api.hanzo.ai</code>.
              {modelPricingData?.updated && (
                <span
                  className={cn("ml-2 text-xs", "text-foreground/30")}
                >
                  Updated{" "}
                  {new Date(
                    modelPricingData.updated
                  ).toLocaleDateString()}
                </span>
              )}
            </p>

            {modelLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className={cn("text-muted-foreground")}>
                  Loading live pricing...
                </span>
              </div>
            ) : modelError ? (
              <div
                className={cn(
                  "text-center py-16",
                  "text-muted-foreground"
                )}
              >
                {modelError}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table
                  className={cn(
                    "w-full border rounded-lg overflow-hidden",
                    "border-border"
                  )}
                >
                  <thead className={cn("bg-foreground/5")}>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Model
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Tier
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Context
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">
                        Input / 1M tok
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">
                        Output / 1M tok
                      </th>
                    </tr>
                  </thead>
                  <tbody className={cn("divide-y", "divide-white/10")}>
                    {hanzoModels.map((m) => (
                      <tr
                        key={m.name}
                        className={cn(
                          "transition-colors",
                          "hover:bg-accent"
                        )}
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium">{m.name}</div>
                          <div
                            className={cn(
                              "text-xs",
                              "text-muted-foreground"
                            )}
                          >
                            {m.fullName}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full capitalize",
                              "bg-foreground/10 text-muted-foreground"
                            )}
                          >
                            {m.tier}
                          </span>
                        </td>
                        <td
                          className={cn(
                            "px-6 py-4 text-sm",
                            "text-muted-foreground"
                          )}
                        >
                          {extractContext(m.features)}
                        </td>
                        <td
                          className={cn(
                            "px-6 py-4 text-right font-mono text-sm",
                            "text-muted-foreground"
                          )}
                        >
                          {formatPrice(m.pricing.input)}
                        </td>
                        <td
                          className={cn(
                            "px-6 py-4 text-right font-mono text-sm",
                            "text-muted-foreground"
                          )}
                        >
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
              <h2 className="text-3xl font-bold mb-2">
                Third-Party Models
              </h2>
              <p className={cn("mb-8", "text-muted-foreground")}>
                100+ additional models via the Hanzo LLM Gateway. Same API,
                same SDK.
              </p>

              <div className="overflow-x-auto">
                <table
                  className={cn(
                    "w-full border rounded-lg overflow-hidden",
                    "border-border"
                  )}
                >
                  <thead className={cn("bg-foreground/5")}>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Model
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Context
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">
                        Input / 1M tok
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">
                        Output / 1M tok
                      </th>
                    </tr>
                  </thead>
                  <tbody className={cn("divide-y", "divide-white/10")}>
                    {thirdPartyModels.map((m) => (
                      <tr
                        key={m.name}
                        className={cn(
                          "transition-colors",
                          "hover:bg-accent"
                        )}
                      >
                        <td className="px-6 py-4 font-medium">{m.name}</td>
                        <td
                          className={cn(
                            "px-6 py-4 text-sm",
                            "text-muted-foreground"
                          )}
                        >
                          {m.contextWindow
                            ? `${Math.round(m.contextWindow / 1000)}K`
                            : "\u2014"}
                        </td>
                        <td
                          className={cn(
                            "px-6 py-4 text-right font-mono text-sm",
                            "text-muted-foreground"
                          )}
                        >
                          {formatPrice(m.pricing.input)}
                        </td>
                        <td
                          className={cn(
                            "px-6 py-4 text-right font-mono text-sm",
                            "text-muted-foreground"
                          )}
                        >
                          {formatPrice(m.pricing.output)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                className={cn("text-sm mt-4", "text-muted-foreground")}
              >
                * Third-party model pricing includes a 20% gateway markup.
                Prices synced daily from upstream providers.
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
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">
                  What counts as a token?
                </h3>
                <p className={cn("text-sm", "text-muted-foreground")}>
                  Tokens are pieces of text that our models process. On
                  average, 1 token is about 4 characters or 0.75 words in
                  English. Both input and output tokens are counted toward
                  your usage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Can I upgrade or downgrade my plan?
                </h3>
                <p className={cn("text-sm", "text-muted-foreground")}>
                  Yes, you can change your plan at any time. Upgrades take
                  effect immediately, and downgrades take effect at the
                  start of your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  What happens if I exceed my token limit?
                </h3>
                <p className={cn("text-sm", "text-muted-foreground")}>
                  You'll be charged at the pay-as-you-go rate for
                  additional tokens. We'll notify you when you're
                  approaching your limit so there are no surprises.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Is my data used to train models?
                </h3>
                <p className={cn("text-sm", "text-muted-foreground")}>
                  By default, your data is not used for training. Team and
                  Enterprise plans have explicit data exclusion guarantees.
                  See our privacy policy for details.
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
            <p
              className={cn(
                "mb-8 max-w-2xl mx-auto",
                "text-muted-foreground"
              )}
            >
              Start building with Hanzo AI today. Every new account gets $5
              free credit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://console.hanzo.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={cn(
                    "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Start Building Free
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className={cn(
                    "border-border text-foreground hover:bg-accent"
                  )}
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
