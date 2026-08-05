"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, cn } from '@hanzo/ui'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Copy,
  ExternalLink,
  Globe,
  Lock,
  Shield,
  Terminal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const baseUrls = [
  {
    service: "Cloud API",
    url: "https://api.hanzo.ai",
    description: "Core platform — compute, storage, inference, billing, and project management.",
  },
  {
    service: "LLM Gateway",
    url: "https://llm.hanzo.ai",
    description: "OpenAI-compatible proxy for 100+ LLM providers with unified auth and billing.",
  },
  {
    service: "IAM",
    url: "https://hanzo.id",
    description: "Identity and access management — OAuth 2.0, OIDC, SSO, JWT.",
  },
  {
    service: "KMS",
    url: "https://kms.hanzo.ai",
    description: "Secrets, encryption keys, certificates, and org-scoped credential storage.",
  },
];

const authMethods = [
  {
    method: "Bearer Token",
    description: "Pass your API key in the Authorization header. Recommended for most use cases.",
    example: `curl https://llm.hanzo.ai/v1/chat/completions \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "zen4",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`,
  },
  {
    method: "OAuth 2.0 Client Credentials",
    description: "For server-to-server integation. Exchange client ID and secret for an access token.",
    example: `curl -X POST https://hanzo.id/v1/iam/oauth/token \\
  -d "grant_type=client_credentials" \\
  -d "client_id=$CLIENT_ID" \\
  -d "client_secret=$CLIENT_SECRET"`,
  },
];

interface Endpoint {
  method: string;
  path: string;
  description: string;
  example: string;
}

const endpoints: { category: string; items: Endpoint[] }[] = [
  {
    category: "Chat Completions",
    items: [
      {
        method: "POST",
        path: "/v1/chat/completions",
        description: "Create a chat completion. Supports streaming, function calling, and tool use.",
        example: `{
  "model": "zen4",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Explain quantum computing."}
  ],
  "temperature": 0.7,
  "max_tokens": 1024,
  "stream": false
}`,
      },
    ],
  },
  {
    category: "Models",
    items: [
      {
        method: "GET",
        path: "/v1/models",
        description: "List all available models including Zen models and third-party providers.",
        example: `// Response
{
  "data": [
    {"id": "zen4", "object": "model", "owned_by": "hanzo"},
    {"id": "zen4-max", "object": "model", "owned_by": "hanzo"},
    {"id": "zen4-coder", "object": "model", "owned_by": "hanzo"}
  ]
}`,
      },
      {
        method: "GET",
        path: "/v1/models/{model_id}",
        description: "Retrieve details for a specific model.",
        example: `// GET /v1/models/zen4
{
  "id": "zen4",
  "object": "model",
  "owned_by": "hanzo",
  "permission": []
}`,
      },
    ],
  },
  {
    category: "Embeddings",
    items: [
      {
        method: "POST",
        path: "/v1/embeddings",
        description: "Create embedding vectors from input text. 3072 dimensions with zen-embedding.",
        example: `{
  "model": "zen-embedding",
  "input": "The quick brown fox jumps over the lazy dog."
}`,
      },
    ],
  },
  {
    category: "Completions (Legacy)",
    items: [
      {
        method: "POST",
        path: "/v1/completions",
        description: "Create a text completion. Legacy endpoint — prefer chat completions for new projects.",
        example: `{
  "model": "zen4",
  "prompt": "Once upon a time",
  "max_tokens": 256,
  "temperature": 0.7
}`,
      },
    ],
  },
];

const rateLimits = [
  { tier: "Free", rpm: "60", tpm: "100K", rpd: "1,000" },
  { tier: "Starter", rpm: "500", tpm: "1M", rpd: "10,000" },
  { tier: "Pro", rpm: "5,000", tpm: "10M", rpd: "100,000" },
  { tier: "Enterprise", rpm: "Custom", tpm: "Custom", rpd: "Custom" },
];

const errorCodes = [
  { code: "400", name: "Bad Request", description: "Invalid request body or parameters." },
  { code: "401", name: "Unauthorized", description: "Missing or invalid API key." },
  { code: "403", name: "Forbidden", description: "API key lacks required permissions." },
  { code: "404", name: "Not Found", description: "Requested resource does not exist." },
  { code: "429", name: "Rate Limited", description: "Too many requests. Check rate limit headers." },
  { code: "500", name: "Internal Error", description: "Server error. Retry with exponential backoff." },
  { code: "503", name: "Service Unavailable", description: "Service temporarily unavailable. Retry shortly." },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={cn(
        "hz-p-2 hz-r-md hz-transition",
        "hz-fg hz-hoverable"
      )}
      title="Copy"
    >
      {copied ? <Check className="hz-sq-2" /> : <Copy className="hz-sq-2" />}
    </button>
  );
}

function MethodBadge({ method }: { method: string }) {
  return (
    <span
      className={cn(
        "hz-t-xs hz-mono hz-w-bold hz-px-2 hz-py-1 hz-r-md",
        "hz-bg-surface hz-fg"
      )}
    >
      {method}
    </span>
  );
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className={cn("hz-r-lg hz-bordered hz-clip", "")}>
      {label && (
        <div className="hz-row hz-ai-center hz-jc-between hz-px-4 hz-py-2 hz-border-b hz-bg-surface">
          <span className="hz-t-xs hz-mono hz-fg">{label}</span>
          <CopyButton text={code} />
        </div>
      )}
      <pre className="hz-p-4 hz-scroll-x hz-t-sm hz-mono hz-leading-relaxed hz-bg-surface">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function PageClient() {
  return (
    <main className="hz-pt-6 hz-pb-6 hz-px-4">
      <div className="hz-container-wide">
        {/* Breadcrumb + Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hz-mb-7"
        >
          <Link
            href="/docs"
            className="hz-inline hz-ai-center hz-gap-2 hz-t-sm hz-fg hz-transition hz-mb-5 hz-hoverable"
          >
            <ArrowLeft className="hz-sq-2" /> Back to Docs
          </Link>
          <h1 className="hz-t-5xl hz-w-bold hz-mb-5">API Reference</h1>
          <p className={cn("hz-t-xl hz-mw-lg", "hz-fg")}>
            Complete REST API reference for Hanzo Cloud, LLM Gateway, IAM, and
            KMS. All LLM endpoints are OpenAI-compatible — switch your base URL
            and use your existing code.
          </p>
        </motion.div>

        {/* OpenAI Compatibility Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={cn(
            "hz-p-5 hz-r-lg hz-bordered hz-mb-7",
            "hz-bg-surface"
          )}
        >
          <h3 className="hz-w-semibold hz-mb-2">OpenAI Compatible</h3>
          <p className="hz-t-sm hz-fg hz-mb-3">
            The LLM Gateway implements the OpenAI API specification. If you already use the OpenAI
            SDK, point it at Hanzo with zero code changes:
          </p>
          <CodeBlock
            code={`from openai import OpenAI

client = OpenAI(
    base_url="https://llm.hanzo.ai/v1",
    api_key="your-hanzo-api-key",
)

# All OpenAI SDK methods work as-is`}
            label="Drop-in replacement"
          />
        </motion.div>

        {/* Base URLs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Base URLs</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            Each service has a dedicated base URL.
          </p>
          <div className="hz-stack-3">
            {baseUrls.map((item) => (
              <div
                key={item.service}
                className={cn(
                  "hz-col-row hz-gap-2 hz-p-4 hz-r-lg hz-bordered",
                  ""
                )}
              >
                <div className="hz-row hz-ai-center hz-gap-3">
                  <Globe className="hz-sq-2 hz-fg hz-none" />
                  <span className="hz-w-semibold hz-t-sm">{item.service}</span>
                </div>
                <code className="hz-t-sm hz-mono hz-fg">{item.url}</code>
                <p className="hz-desktop-only hz-t-xs hz-fg hz-mw-sm hz-align-right">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Authentication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Authentication</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            Two authentication methods are supported.
          </p>
          <div className="hz-stack-5">
            {authMethods.map((auth) => (
              <div key={auth.method}>
                <div className="hz-row hz-ai-center hz-gap-2 hz-mb-2">
                  <Lock className="hz-sq-2 hz-fg" />
                  <h3 className="hz-t-lg hz-w-semibold">{auth.method}</h3>
                </div>
                <p className="hz-t-sm hz-fg hz-mb-4">{auth.description}</p>
                <CodeBlock code={auth.example} label={auth.method} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Core Endpoints</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            Primary endpoints on the LLM Gateway (<code className="hz-mono hz-t-sm">llm.hanzo.ai</code>).
          </p>
          <div className="hz-stack-6">
            {endpoints.map((section) => (
              <div key={section.category}>
                <h3 className="hz-t-xl hz-w-semibold hz-mb-4">{section.category}</h3>
                <div className="hz-stack-5">
                  {section.items.map((endpoint) => (
                    <div
                      key={endpoint.path}
                      className={cn(
                        "hz-r-lg hz-bordered hz-clip",
                        ""
                      )}
                    >
                      <div className="hz-row hz-ai-center hz-gap-3 hz-px-4 hz-py-3 hz-border-b hz-bg-surface">
                        <MethodBadge method={endpoint.method} />
                        <code className="hz-t-sm hz-mono">{endpoint.path}</code>
                      </div>
                      <div className="hz-p-4">
                        <p className="hz-t-sm hz-fg hz-mb-4">
                          {endpoint.description}
                        </p>
                        <pre className="hz-p-4 hz-scroll-x hz-t-sm hz-mono hz-leading-relaxed hz-bg-surface hz-r-lg">
                          <code>{endpoint.example}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rate Limits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Rate Limits</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            Limits vary by plan. Check response headers for current usage.
          </p>
          <div className={cn("hz-r-lg hz-bordered hz-clip", "")}>
            <table className="hz-w-full hz-t-sm">
              <thead>
                <tr className="hz-border-b hz-bg-surface">
                  <th className="hz-align-left hz-px-4 hz-py-3 hz-w-semibold">Tier</th>
                  <th className="hz-align-left hz-px-4 hz-py-3 hz-w-semibold">Requests / min</th>
                  <th className="hz-align-left hz-px-4 hz-py-3 hz-w-semibold">Tokens / min</th>
                  <th className="hz-align-left hz-px-4 hz-py-3 hz-w-semibold">Requests / day</th>
                </tr>
              </thead>
              <tbody>
                {rateLimits.map((limit) => (
                  <tr key={limit.tier} className="hz-border-b">
                    <td className="hz-px-4 hz-py-3 hz-w-medium">{limit.tier}</td>
                    <td className="hz-px-4 hz-py-3 hz-mono hz-fg">{limit.rpm}</td>
                    <td className="hz-px-4 hz-py-3 hz-mono hz-fg">{limit.tpm}</td>
                    <td className="hz-px-4 hz-py-3 hz-mono hz-fg">{limit.rpd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="hz-mt-4">
            <p className="hz-t-xs hz-fg">
              Rate limit headers:{" "}
              <code className="hz-mono">x-ratelimit-limit-requests</code>,{" "}
              <code className="hz-mono">x-ratelimit-remaining-requests</code>,{" "}
              <code className="hz-mono">x-ratelimit-reset-requests</code>
            </p>
          </div>
        </motion.div>

        {/* Error Codes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Error Codes</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            Standard HTTP status codes with JSON error bodies.
          </p>
          <div className={cn("hz-r-lg hz-bordered hz-clip", "")}>
            <table className="hz-w-full hz-t-sm">
              <thead>
                <tr className="hz-border-b hz-bg-surface">
                  <th className="hz-align-left hz-px-4 hz-py-3 hz-w-semibold hz-bw-8">Code</th>
                  <th className="hz-align-left hz-px-4 hz-py-3 hz-w-semibold hz-bw-8">Name</th>
                  <th className="hz-align-left hz-px-4 hz-py-3 hz-w-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {errorCodes.map((err) => (
                  <tr key={err.code} className="hz-border-b">
                    <td className="hz-px-4 hz-py-3 hz-mono hz-w-medium">{err.code}</td>
                    <td className="hz-px-4 hz-py-3 hz-w-medium">{err.name}</td>
                    <td className="hz-px-4 hz-py-3 hz-fg">{err.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="hz-mt-4">
            <CodeBlock
              code={`// Error response format
{
  "error": {
    "message": "Invalid API key provided.",
    "type": "authentication_error",
    "code": "invalid_api_key"
  }
}`}
              label="Error response body"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={cn(
            "hz-p-6 hz-r-lg hz-bordered hz-align-center",
            "hz-bg-surface"
          )}
        >
          <h2 className="hz-t-2xl hz-w-bold hz-mb-4">Prefer a client library?</h2>
          <p className={cn("hz-container-narrow hz-mw-md hz-t-lg hz-mb-5", "hz-fg")}>
            Our SDKs handle authentication, retries, streaming, and typed responses out of the box.
          </p>
          <Link href="/docs/sdk">
            <Button variant="outline" className="hz-gap-2">
              View SDKs <ArrowRight className="hz-sq-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
