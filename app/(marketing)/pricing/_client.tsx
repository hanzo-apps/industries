"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, cn } from '@hanzo/ui'
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
const SUBSCRIPTIONS_API = "https://api.hanzo.ai/v1/pricing/subscriptions";
const POLICY_API = "https://api.hanzo.ai/v1/pricing/policy";

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
    <div className="hz-r-xl hz-bordered hz-p-6">
      <div className="hz-row hz-ai-center hz-gap-3 hz-mb-4">
        <div className="hz-sq-6 hz-r-lg hz-bg-surface" />
        <div className="hz-bh-4 hz-bw-8 hz-bg-surface hz-r-md" />
      </div>
      <div className="hz-bh-6 hz-bw-8 hz-bg-surface hz-r-md hz-mb-4" />
      <div className="hz-bh-2 hz-bw-8 hz-bg-surface hz-r-md hz-mb-5" />
      <div className="hz-bh-6 hz-w-full hz-bg-surface hz-r-md hz-mb-5" />
      <div className="hz-stack-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="hz-row hz-ai-center hz-gap-3">
            <div className="hz-sq-3 hz-r-md hz-bg-surface hz-none" />
            <div className="hz-bh-2 hz-w-full hz-bg-surface hz-r-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

function EnterpriseSkeleton() {
  return (
    <div className="hz-r-xl hz-bordered hz-p-6 hz-mb-7">
      <div className="hz-grid hz-grid-2 hz-gap-7">
        <div>
          <div className="hz-bh-4 hz-bw-8 hz-bg-surface hz-r-full hz-mb-4" />
          <div className="hz-bh-5 hz-bw-8 hz-bg-surface hz-r-md hz-mb-4" />
          <div className="hz-bh-8 hz-w-full hz-bg-surface hz-r-md hz-mb-5" />
          <div className="hz-row hz-gap-4">
            <div className="hz-bh-6 hz-bw-8 hz-bg-surface hz-r-md" />
            <div className="hz-bh-6 hz-bw-8 hz-bg-surface hz-r-md" />
          </div>
        </div>
        <div className="hz-grid hz-grid-2 hz-gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="hz-row hz-ai-center hz-gap-2">
              <div className="hz-sq-3 hz-r-md hz-bg-surface hz-none" />
              <div className="hz-bh-2 hz-w-full hz-bg-surface hz-r-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PolicySkeleton() {
  return (
    <div className="hz-r-xl hz-bordered hz-p-6 hz-mb-7">
      <div className="hz-bh-5 hz-bw-8 hz-bg-surface hz-r-md hz-mb-6" />
      <div className="hz-grid hz-grid-2 hz-gap-6 hz-mb-6">
        <div className="hz-bh-8 hz-bg-surface hz-r-lg" />
        <div className="hz-bh-8 hz-bg-surface hz-r-lg" />
      </div>
      <div className="hz-row hz-wrap hz-gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="hz-bh-5 hz-bw-8 hz-bg-surface hz-r-full" />
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
        "hz-min-h-screen hz-transition",
        "hz-bg hz-fg"
      )}
    >
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-container-narrow hz-align-center hz-mb-7"
          >
            <h1 className="hz-t-4xl hz-w-bold hz-mb-5">
              Simple, transparent pricing
            </h1>
            <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
              Start free, scale as you grow. Pay only for what you use.
            </p>

            {/* Billing Toggle */}
            <div
              className={cn(
                "hz-inline hz-ai-center hz-gap-4 hz-p-1 hz-r-full",
                "hz-bg-surface"
              )}
            >
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={cn(
                  "hz-px-4 hz-py-2 hz-r-full hz-t-sm hz-w-medium hz-transition",
                  billingPeriod === "monthly"
                    ? "hz-bg-inverse"
                    : "hz-fg hz-hoverable"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={cn(
                  "hz-px-4 hz-py-2 hz-r-full hz-t-sm hz-w-medium hz-transition",
                  billingPeriod === "annual"
                    ? "hz-bg-inverse"
                    : "hz-fg hz-hoverable"
                )}
              >
                Annual
                <span
                  className={cn(
                    "hz-ml-2 hz-t-xs",
                    billingPeriod === "annual"
                      ? "hz-fg-soft"
                      : "hz-fg"
                  )}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Plans Grid */}
          {plansLoading ? (
            <div className="hz-grid hz-grid-3 hz-gap-6 hz-mb-7">
              <PlanSkeleton />
              <PlanSkeleton />
              <PlanSkeleton />
            </div>
          ) : plansError ? (
            <div
              className={cn(
                "hz-align-center hz-py-7 hz-mb-7",
                "hz-fg"
              )}
            >
              {plansError}
            </div>
          ) : (
            <div className="hz-grid hz-grid-3 hz-gap-6 hz-mb-7">
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
                      "hz-rel hz-r-xl hz-bordered hz-p-6",
                      highlighted
                        ? "hz-bg-surface"
                        : "hz-bg-surface"
                    )}
                  >
                    {highlighted && (
                      <div className="hz-center-x hz-abs">
                        <div
                          className={cn(
                            "hz-px-3 hz-py-1 hz-r-full hz-t-xs hz-w-semibold",
                            "hz-bg-inverse"
                          )}
                        >
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="hz-row hz-ai-center hz-gap-3 hz-mb-4">
                      <div
                        className={cn(
                          "hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center",
                          highlighted ? "hz-bg-inverse" : "hz-bg-surface"
                        )}
                      >
                        <Icon
                          className={cn(
                            "hz-sq-3",
                            highlighted ? "hz-fg" : ""
                          )}
                        />
                      </div>
                      <h3 className="hz-t-xl hz-w-semibold">{plan.name}</h3>
                    </div>

                    <div className="hz-mb-4">
                      <span className="hz-t-4xl hz-w-bold">{amount}</span>
                      <span
                        className={cn(
                          "hz-t-sm hz-ml-1",
                          "hz-fg"
                        )}
                      >
                        {suffix}
                      </span>
                    </div>

                    <p
                      className={cn(
                        "hz-t-sm hz-mb-5",
                        "hz-fg"
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
                          "hz-w-full hz-mb-5",
                          highlighted
                            ? "hz-bg-inverse hz-hoverable"
                            : "hz-bg-surface hz-fg hz-hoverable"
                        )}
                      >
                        {ctaText}
                      </Button>
                    </a>

                    <ul className="hz-stack-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="hz-row hz-ai-start hz-gap-3">
                          <Check className="hz-sq-3 hz-fg hz-mt-1 hz-none" />
                          <span
                            className={cn(
                              "hz-t-sm",
                              "hz-fg"
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
                "hz-r-xl hz-bordered hz-p-6 hz-mb-7",
                ""
              )}
            >
              <div className="hz-grid hz-grid-2 hz-gap-7">
                <div>
                  <div
                    className={cn(
                      "hz-inline hz-ai-center hz-gap-2 hz-px-3 hz-py-1 hz-r-full hz-t-sm hz-mb-4",
                      "hz-bg-surface"
                    )}
                  >
                    <Building2 className="hz-sq-2" />
                    {enterprisePlan.name}
                  </div>
                  <h2 className="hz-t-3xl hz-w-bold hz-mb-4">
                    Custom solutions for your organization
                  </h2>
                  <p className={cn("hz-mb-5", "hz-fg")}>
                    {enterprisePlan.description ||
                      "Get dedicated infrastructure, custom model training, and enterprise-grade security. Our team will work with you to build the perfect AI solution."}
                  </p>
                  <div className="hz-col-row hz-gap-4">
                    <Link href="/contact">
                      <Button
                        className={cn(
                          "hz-bg-inverse hz-hoverable"
                        )}
                      >
                        Contact Sales
                        <ArrowRight className="hz-sq-2 hz-ml-2" />
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
                          "hz-fg hz-hoverable"
                        )}
                      >
                        Schedule a Demo
                      </Button>
                    </a>
                  </div>
                </div>
                <div>
                  <ul className="hz-grid hz-grid-2 hz-gap-3">
                    {enterprisePlan.features.map((feature) => (
                      <li key={feature} className="hz-row hz-ai-start hz-gap-2">
                        <Check className="hz-sq-3 hz-fg hz-mt-1 hz-none" />
                        <span
                          className={cn(
                            "hz-t-sm",
                            "hz-fg"
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
                "hz-r-xl hz-bordered hz-p-6 hz-mb-7",
                ""
              )}
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Transparent Pricing</h2>
              <p className={cn("hz-mb-6", "hz-fg")}>
                No hidden fees, no surprises. We share revenue with you.
              </p>

              {/* Revenue Sharing Cards */}
              <div className="hz-grid hz-grid-2 hz-gap-6 hz-mb-6">
                {/* Idle Resale */}
                <div
                  className={cn(
                    "hz-r-lg hz-bordered hz-p-5",
                    "hz-bg-surface"
                  )}
                >
                  <div className="hz-row hz-ai-center hz-gap-3 hz-mb-3">
                    <div
                      className={cn(
                        "hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center",
                        "hz-bg-inverse"
                      )}
                    >
                      <DollarSign className="hz-sq-3 hz-fg" />
                    </div>
                    <div>
                      <h3 className="hz-w-semibold">
                        Earn up to {policy.revenueSharing.idleResale.percent}%
                        on idle compute &amp; LLM resale
                      </h3>
                    </div>
                  </div>
                  <p
                    className={cn("hz-t-sm hz-mb-3", "hz-fg")}
                  >
                    When your logged-in account is idle, we resell your
                    allocated compute and LLM capacity and share up to{" "}
                    {policy.revenueSharing.idleResale.percent}% of revenue
                    with you.
                  </p>
                  <div className="hz-row hz-wrap hz-gap-2">
                    <span
                      className={cn(
                        "hz-t-xs hz-px-2 hz-py-1 hz-r-full",
                        "hz-bg-surface hz-fg"
                      )}
                    >
                      {policy.revenueSharing.idleResale.eligibility}
                    </span>
                    <span
                      className={cn(
                        "hz-t-xs hz-px-2 hz-py-1 hz-r-full",
                        "hz-bg-surface hz-fg"
                      )}
                    >
                      {policy.revenueSharing.idleResale.payoutMethod}
                    </span>
                  </div>
                </div>

                {/* Open Source Fund */}
                <div
                  className={cn(
                    "hz-r-lg hz-bordered hz-p-5",
                    "hz-bg-surface"
                  )}
                >
                  <div className="hz-row hz-ai-center hz-gap-3 hz-mb-3">
                    <div
                      className={cn(
                        "hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center",
                        "hz-bg-inverse"
                      )}
                    >
                      <Heart className="hz-sq-3 hz-fg" />
                    </div>
                    <div>
                      <h3 className="hz-w-semibold">
                        {policy.revenueSharing.openSource.percent}% of
                        revenue funds open source
                      </h3>
                    </div>
                  </div>
                  <p
                    className={cn("hz-t-sm hz-mb-3", "hz-fg")}
                  >
                    {policy.revenueSharing.openSource.description ||
                      `Via the ${policy.revenueSharing.openSource.program}, proportional to OSS dependency usage.`}
                  </p>
                  <div className="hz-row hz-wrap hz-gap-2">
                    <span
                      className={cn(
                        "hz-t-xs hz-px-2 hz-py-1 hz-r-full",
                        "hz-bg-surface hz-fg"
                      )}
                    >
                      {policy.revenueSharing.openSource.program}
                    </span>
                  </div>
                </div>
              </div>

              {/* Principles */}
              {policy.principles.length > 0 && (
                <div className="hz-row hz-wrap hz-gap-3">
                  {policy.principles.map((principle) => (
                    <div
                      key={principle}
                      className="hz-row hz-ai-center hz-gap-2"
                    >
                      <Shield className="hz-sq-2 hz-fg hz-none" />
                      <span
                        className={cn(
                          "hz-t-sm",
                          "hz-fg"
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
            className="hz-mb-7"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Zen Model Pricing</h2>
            <p className={cn("hz-mb-6", "hz-fg")}>
              Pay-as-you-go per million tokens. All Zen models via{" "}
              <code className="hz-t-xs">api.hanzo.ai</code>.
              {modelPricingData?.updated && (
                <span
                  className={cn("hz-ml-2 hz-t-xs", "hz-fg-soft")}
                >
                  Updated{" "}
                  {new Date(
                    modelPricingData.updated
                  ).toLocaleDateString()}
                </span>
              )}
            </p>

            {modelLoading ? (
              <div className="hz-row hz-ai-center hz-jc-center hz-py-7">
                <Loader2 className="hz-sq-4 hz-mr-2" />
                <span className={cn("hz-fg")}>
                  Loading live pricing...
                </span>
              </div>
            ) : modelError ? (
              <div
                className={cn(
                  "hz-align-center hz-py-7",
                  "hz-fg"
                )}
              >
                {modelError}
              </div>
            ) : (
              <div className="hz-scroll-x">
                <table
                  className={cn(
                    "hz-w-full hz-bordered hz-r-lg hz-clip",
                    ""
                  )}
                >
                  <thead className={cn("hz-bg-surface")}>
                    <tr>
                      <th className="hz-px-5 hz-py-4 hz-align-left hz-t-sm hz-w-semibold">
                        Model
                      </th>
                      <th className="hz-px-5 hz-py-4 hz-align-left hz-t-sm hz-w-semibold">
                        Tier
                      </th>
                      <th className="hz-px-5 hz-py-4 hz-align-left hz-t-sm hz-w-semibold">
                        Context
                      </th>
                      <th className="hz-px-5 hz-py-4 hz-align-right hz-t-sm hz-w-semibold">
                        Input / 1M tok
                      </th>
                      <th className="hz-px-5 hz-py-4 hz-align-right hz-t-sm hz-w-semibold">
                        Output / 1M tok
                      </th>
                    </tr>
                  </thead>
                  <tbody className={cn("", "")}>
                    {hanzoModels.map((m) => (
                      <tr
                        key={m.name}
                        className={cn(
                          "hz-transition",
                          "hz-hoverable"
                        )}
                      >
                        <td className="hz-px-5 hz-py-4">
                          <div className="hz-w-medium">{m.name}</div>
                          <div
                            className={cn(
                              "hz-t-xs",
                              "hz-fg"
                            )}
                          >
                            {m.fullName}
                          </div>
                        </td>
                        <td className="hz-px-5 hz-py-4">
                          <span
                            className={cn(
                              "hz-t-xs hz-px-2 hz-py-1 hz-r-full",
                              "hz-bg-surface hz-fg"
                            )}
                          >
                            {m.tier}
                          </span>
                        </td>
                        <td
                          className={cn(
                            "hz-px-5 hz-py-4 hz-t-sm",
                            "hz-fg"
                          )}
                        >
                          {extractContext(m.features)}
                        </td>
                        <td
                          className={cn(
                            "hz-px-5 hz-py-4 hz-align-right hz-mono hz-t-sm",
                            "hz-fg"
                          )}
                        >
                          {formatPrice(m.pricing.input)}
                        </td>
                        <td
                          className={cn(
                            "hz-px-5 hz-py-4 hz-align-right hz-mono hz-t-sm",
                            "hz-fg"
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
              className="hz-mb-7"
            >
              <h2 className="hz-t-3xl hz-w-bold hz-mb-2">
                Third-Party Models
              </h2>
              <p className={cn("hz-mb-6", "hz-fg")}>
                100+ additional models via the Hanzo LLM Gateway. Same API,
                same SDK.
              </p>

              <div className="hz-scroll-x">
                <table
                  className={cn(
                    "hz-w-full hz-bordered hz-r-lg hz-clip",
                    ""
                  )}
                >
                  <thead className={cn("hz-bg-surface")}>
                    <tr>
                      <th className="hz-px-5 hz-py-4 hz-align-left hz-t-sm hz-w-semibold">
                        Model
                      </th>
                      <th className="hz-px-5 hz-py-4 hz-align-left hz-t-sm hz-w-semibold">
                        Context
                      </th>
                      <th className="hz-px-5 hz-py-4 hz-align-right hz-t-sm hz-w-semibold">
                        Input / 1M tok
                      </th>
                      <th className="hz-px-5 hz-py-4 hz-align-right hz-t-sm hz-w-semibold">
                        Output / 1M tok
                      </th>
                    </tr>
                  </thead>
                  <tbody className={cn("", "")}>
                    {thirdPartyModels.map((m) => (
                      <tr
                        key={m.name}
                        className={cn(
                          "hz-transition",
                          "hz-hoverable"
                        )}
                      >
                        <td className="hz-px-5 hz-py-4 hz-w-medium">{m.name}</td>
                        <td
                          className={cn(
                            "hz-px-5 hz-py-4 hz-t-sm",
                            "hz-fg"
                          )}
                        >
                          {m.contextWindow
                            ? `${Math.round(m.contextWindow / 1000)}K`
                            : "\u2014"}
                        </td>
                        <td
                          className={cn(
                            "hz-px-5 hz-py-4 hz-align-right hz-mono hz-t-sm",
                            "hz-fg"
                          )}
                        >
                          {formatPrice(m.pricing.input)}
                        </td>
                        <td
                          className={cn(
                            "hz-px-5 hz-py-4 hz-align-right hz-mono hz-t-sm",
                            "hz-fg"
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
                className={cn("hz-t-sm hz-mt-4", "hz-fg")}
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
            <h2 className="hz-t-3xl hz-w-bold hz-mb-6">
              Frequently Asked Questions
            </h2>
            <div className="hz-grid hz-grid-2 hz-gap-6">
              <div>
                <h3 className="hz-w-semibold hz-mb-2">
                  What counts as a token?
                </h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  Tokens are pieces of text that our models process. On
                  average, 1 token is about 4 characters or 0.75 words in
                  English. Both input and output tokens are counted toward
                  your usage.
                </p>
              </div>
              <div>
                <h3 className="hz-w-semibold hz-mb-2">
                  Can I upgrade or downgrade my plan?
                </h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  Yes, you can change your plan at any time. Upgrades take
                  effect immediately, and downgrades take effect at the
                  start of your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="hz-w-semibold hz-mb-2">
                  What happens if I exceed my token limit?
                </h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  You'll be charged at the pay-as-you-go rate for
                  additional tokens. We'll notify you when you're
                  approaching your limit so there are no surprises.
                </p>
              </div>
              <div>
                <h3 className="hz-w-semibold hz-mb-2">
                  Is my data used to train models?
                </h3>
                <p className={cn("hz-t-sm", "hz-fg")}>
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
            className="hz-mt-7 hz-align-center"
          >
            <h2 className="hz-t-2xl hz-w-semibold hz-mb-4">
              Ready to get started?
            </h2>
            <p
              className={cn(
                "hz-container-narrow hz-mw-md hz-mb-6",
                "hz-fg"
              )}
            >
              Start building with Hanzo AI today. Every new account gets $5
              free credit.
            </p>
            <div className="hz-col-row hz-gap-4 hz-jc-center">
              <a
                href="https://console.hanzo.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={cn(
                    "hz-bg-inverse hz-hoverable"
                  )}
                >
                  Start Building Free
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className={cn(
                    "hz-fg hz-hoverable"
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
