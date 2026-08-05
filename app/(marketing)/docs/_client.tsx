"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, cn } from '@hanzo/ui'
import {
  ArrowRight,
  BookOpen,
  Box,
  Brain,
  Code,
  Copy,
  Check,
  Database,
  ExternalLink,
  Globe,
  Github,
  Lock,
  Network,
  Search,
  Server,
  Shield,
  Terminal,
  Wrench,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const sdks = [
  {
    language: "Python",
    pkg: "hanzo-ai",
    install: "pip install hanzo-ai",
    registry: "PyPI",
    registryUrl: "https://pypi.org/project/hanzo-ai/",
    github: "https://github.com/hanzoai/python-sdk",
    docs: "https://docs.hanzo.ai/sdk/python",
    icon: "py",
  },
  {
    language: "TypeScript / JavaScript",
    pkg: "@hanzo/sdk",
    install: "npm install @hanzo/sdk",
    registry: "npm",
    registryUrl: "https://www.npmjs.com/package/@hanzo/sdk",
    github: "https://github.com/hanzoai/js-sdk",
    docs: "https://docs.hanzo.ai/sdk/typescript",
    icon: "ts",
  },
  {
    language: "Go",
    pkg: "github.com/hanzoai/go-sdk",
    install: "go get github.com/hanzoai/go-sdk",
    registry: "pkg.go.dev",
    registryUrl: "https://pkg.go.dev/github.com/hanzoai/go-sdk",
    github: "https://github.com/hanzoai/go-sdk",
    docs: "https://docs.hanzo.ai/sdk/go",
    icon: "go",
  },
  {
    language: "Rust",
    pkg: "hanzo",
    install: "cargo add hanzo",
    registry: "crates.io",
    registryUrl: "https://crates.io/crates/hanzo",
    github: "https://github.com/hanzoai/rust-sdk",
    docs: "https://docs.hanzo.ai/sdk/rust",
    icon: "rs",
  },
];

const apis = [
  {
    title: "Cloud API",
    domain: "api.hanzo.ai",
    description:
      "REST API for all Hanzo cloud services: compute, storage, inference, billing.",
    docs: "https://docs.hanzo.ai/api/cloud",
    icon: Globe,
  },
  {
    title: "LLM Gateway",
    domain: "llm.hanzo.ai",
    description:
      "Unified proxy for 100+ LLM providers. OpenAI-compatible endpoint with auth, billing, and observability.",
    docs: "https://docs.hanzo.ai/api/llm",
    icon: Brain,
  },
  {
    title: "IAM",
    domain: "hanzo.id",
    description:
      "Identity, authentication, OAuth 2.0, and OpenID Connect for all Hanzo services.",
    docs: "https://docs.hanzo.ai/api/iam",
    icon: Lock,
  },
  {
    title: "KMS",
    domain: "kms.hanzo.ai",
    description:
      "Secrets management, encryption keys, certificates, and org-scoped credential storage.",
    docs: "https://docs.hanzo.ai/api/kms",
    icon: Shield,
  },
];

const projects = [
  {
    name: "LLM Gateway",
    description: "Unified proxy for 100+ AI providers with auth, billing, and observability.",
    lang: "Python",
    repo: "llm",
    icon: Brain,
  },
  {
    name: "ORM",
    description: "Generics ORM with xorm compat, auto-serialization, and multi-backend support.",
    lang: "Go",
    repo: "orm",
    icon: Database,
  },
  {
    name: "MCP",
    description: "Model Context Protocol tools — 260+ tools for AI agents.",
    lang: "TypeScript",
    repo: "mcp",
    icon: Wrench,
  },
  {
    name: "Agent SDK",
    description: "Multi-agent orchestration with OpenAI-compatible interface.",
    lang: "Python",
    repo: "agent",
    icon: Network,
  },
  {
    name: "Operative",
    description: "Computer use for Claude — screen, keyboard, and browser automation.",
    lang: "Python",
    repo: "operative",
    icon: Terminal,
  },
  {
    name: "Chat",
    description: "AI chat with 14 Zen models, 100+ third-party, and MCP tools.",
    lang: "TypeScript",
    repo: "chat",
    icon: Code,
  },
  {
    name: "Search",
    description: "AI-powered search engine with generative UI.",
    lang: "TypeScript",
    repo: "search",
    icon: Search,
  },
  {
    name: "Flow",
    description: "Visual workflow builder for AI pipelines.",
    lang: "TypeScript",
    repo: "flow",
    icon: Network,
  },
  {
    name: "Platform",
    description: "PaaS alternative to Vercel and Heroku — deploy anything.",
    lang: "TypeScript",
    repo: "platform",
    icon: Server,
  },
  {
    name: "Vault",
    description: "PCI-compliant card tokenization and cardholder data environment.",
    lang: "Go",
    repo: "vault",
    icon: Shield,
  },
  {
    name: "Candle",
    description: "Rust ML framework — tensors, neural nets, GPU acceleration.",
    lang: "Rust",
    repo: "candle",
    icon: Box,
  },
  {
    name: "Jin",
    description: "Multimodal LLM framework — text, vision, audio, and 3D.",
    lang: "Python / Rust",
    repo: "jin",
    icon: Brain,
  },
  {
    name: "Node",
    description: "Blockchain/AI node with libp2p networking.",
    lang: "Rust",
    repo: "node",
    icon: Globe,
  },
  {
    name: "MPC",
    description: "Multi-party computation wallet — threshold signing and key management.",
    lang: "Go",
    repo: "mpc",
    icon: Lock,
  },
];

const infrastructure = [
  {
    title: "Zen Models",
    description: "41 AI models across 8 families — text, vision, image, audio, code, embeddings, and reranking.",
    href: "https://zenlm.org",
    icon: Brain,
  },
  {
    title: "Lux Network",
    description: "Settlement layer for AI compute with multi-consensus architecture and post-quantum cryptography.",
    href: "https://lux.network",
    icon: Globe,
  },
  {
    title: "Hanzo Cloud",
    description: "Managed AI infrastructure — deploy models, manage workloads, monitor everything from one console.",
    href: "https://console.hanzo.ai",
    icon: Server,
  },
];

const codeExamples: Record<string, string> = {
  Python: `from hanzo import Hanzo

client = Hanzo()

response = client.chat.completions.create(
    model="zen4",
    messages=[
        {"role": "user", "content": "Explain quantum computing in one paragraph."}
    ],
)

print(response.choices[0].message.content)`,
  TypeScript: `import Hanzo from "@hanzo/sdk";

const client = new Hanzo();

const response = await client.chat.completions.create({
  model: "zen4",
  messages: [
    { role: "user", content: "Explain quantum computing in one paragraph." },
  ],
});

console.log(response.choices[0].message.content);`,
  Go: `package main

import (
    "context"
    "fmt"
    "github.com/hanzoai/go-sdk"
)

func main() {
    client := hanzo.NewClient()

    resp, _ := client.Chat.Completions.New(context.TODO(),
        hanzo.ChatCompletionNewParams{
            Model: "zen4",
            Messages: []hanzo.ChatCompletionMessageParam{
                {Role: "user", Content: "Explain quantum computing in one paragraph."},
            },
        },
    )

    fmt.Println(resp.Choices[0].Message.Content)
}`,
  Rust: `use hanzo::Client;

#[tokio::main]
async fn main() -> Result<(), hanzo::Error> {
    let client = Client::new();

    let response = client
        .chat()
        .completions()
        .create("zen4")
        .message("user", "Explain quantum computing in one paragraph.")
        .send()
        .await?;

    println!("{}", response.choices[0].message.content);
    Ok(())
}`,
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function LangBadge({ lang }: { lang: string }) {
  return (
    <span className="hz-badge hz-mono hz-bg-surface hz-fg">
      {lang}
    </span>
  );
}

function SdkIconBadge({ icon }: { icon: string }) {
  return (
    <span className="hz-sq-6 hz-row hz-ai-center hz-jc-center hz-r-lg hz-bg-surface hz-mono hz-t-sm hz-w-bold">
      {icon}
    </span>
  );
}

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

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function PageClient() {
  const [activeTab, setActiveTab] = useState("Python");

  return (
    <main className="hz-pt-6 hz-pb-6 hz-px-4">
      <div className="hz-container-wide">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hz-mb-7"
        >
          <div className="hz-row hz-ai-center hz-gap-3 hz-mb-5">
            <BookOpen className="hz-sq-4 hz-fg" />
            <span className="hz-t-sm hz-mono hz-fg">docs.hanzo.ai</span>
          </div>
          <h1 className="hz-t-5xl hz-w-bold hz-mb-5">
            Developer Documentation
          </h1>
          <p className={cn("hz-t-xl hz-mw-lg", "hz-fg")}>
            Everything you need to build with Hanzo — SDKs, APIs, guides, and
            reference documentation for every language and framework.
          </p>
          <div className="hz-row hz-wrap hz-gap-3 hz-mt-6">
            <Link href="/docs/sdk">
              <Button variant="primary" className="hz-gap-2">
                Get Started <ArrowRight className="hz-sq-2" />
              </Button>
            </Link>
            <Link href="/docs/api">
              <Button variant="outline" className="hz-gap-2">
                API Reference <BookOpen className="hz-sq-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* SDKs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">SDKs</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            First-class client libraries for every major language.
          </p>
          <div className="hz-grid hz-grid-2 hz-gap-4">
            {sdks.map((sdk, i) => (
              <motion.div
                key={sdk.language}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.03 }}
                className={cn(
                  "hz-p-5 hz-r-lg hz-bordered hz-transition",
                  "hz-hoverable"
                )}
              >
                <div className="hz-row hz-ai-start hz-gap-4 hz-mb-4">
                  <SdkIconBadge icon={sdk.icon} />
                  <div className="hz-grow">
                    <h3 className="hz-t-lg hz-w-semibold">{sdk.language}</h3>
                    <p className="hz-t-sm hz-fg hz-mono">{sdk.pkg}</p>
                  </div>
                </div>
                <div className="hz-btn hz-gap-2 hz-mb-4">
                  <Terminal className="hz-sq-2 hz-fg hz-none" />
                  <code className="hz-t-sm hz-mono hz-grow hz-truncate">{sdk.install}</code>
                  <CopyButton text={sdk.install} />
                </div>
                <div className="hz-row hz-wrap hz-gap-3 hz-t-sm">
                  <a
                    href={sdk.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hz-fg hz-transition hz-inline hz-ai-center hz-gap-1 hz-hoverable"
                  >
                    {sdk.registry} <ExternalLink className="hz-sq-1" />
                  </a>
                  <a
                    href={sdk.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hz-fg hz-transition hz-inline hz-ai-center hz-gap-1 hz-hoverable"
                  >
                    GitHub <Github className="hz-sq-1" />
                  </a>
                  <a
                    href={sdk.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hz-fg hz-transition hz-inline hz-ai-center hz-gap-1 hz-hoverable"
                  >
                    Docs <BookOpen className="hz-sq-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="hz-mt-4 hz-align-center">
            <Link href="/docs/sdk" className="hz-t-sm hz-fg hz-transition hz-inline hz-ai-center hz-gap-1 hz-hoverable">
              View detailed SDK guides <ArrowRight className="hz-sq-1" />
            </Link>
          </div>
        </motion.div>

        {/* API Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">API Reference</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            RESTful APIs with OpenAI-compatible endpoints.
          </p>
          <div className="hz-grid hz-grid-2 hz-gap-4">
            {apis.map((api, i) => {
              const Icon = api.icon;
              return (
                <motion.a
                  key={api.title}
                  href={api.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.03 }}
                  className={cn(
                    "hz-p-5 hz-r-lg hz-bordered hz-transition",
                    "hz-hoverable"
                  )}
                >
                  <div className="hz-row hz-ai-center hz-gap-3 hz-mb-3">
                    <Icon className="hz-sq-3 hz-fg" />
                    <h3 className="hz-t-lg hz-w-semibold">{api.title}</h3>
                  </div>
                  <p className="hz-t-xs hz-mono hz-fg hz-mb-2">{api.domain}</p>
                  <p className="hz-t-sm hz-fg">{api.description}</p>
                </motion.a>
              );
            })}
          </div>
          <div className="hz-mt-4 hz-align-center">
            <Link href="/docs/api" className="hz-t-sm hz-fg hz-transition hz-inline hz-ai-center hz-gap-1 hz-hoverable">
              View full API reference <ArrowRight className="hz-sq-1" />
            </Link>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Quick Start</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            Make your first API call in any language.
          </p>
          <div className={cn("hz-r-lg hz-bordered hz-clip", "")}>
            <div className="hz-row hz-border-b">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={cn(
                    "hz-px-4 hz-py-2 hz-t-sm hz-w-medium hz-transition",
                    activeTab === lang
                      ? "hz-bg-surface hz-fg"
                      : "hz-fg hz-hoverable"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="hz-rel">
              <pre className="hz-p-5 hz-scroll-x hz-t-sm hz-mono hz-leading-relaxed hz-bg-surface">
                <code>{codeExamples[activeTab]}</code>
              </pre>
              <div className="hz-abs">
                <CopyButton text={codeExamples[activeTab]} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Projects</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            Open source infrastructure powering the Hanzo ecosystem.
          </p>
          <div className="hz-grid hz-grid-3 hz-gap-4">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.a
                  key={project.name}
                  href={`https://github.com/hanzoai/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
                  className={cn(
                    "hz-p-4 hz-r-lg hz-bordered hz-transition",
                    "hz-hoverable"
                  )}
                >
                  <div className="hz-row hz-ai-center hz-jc-between hz-mb-3">
                    <div className="hz-row hz-ai-center hz-gap-2">
                      <Icon className="hz-sq-2 hz-fg" />
                      <h3 className="hz-w-semibold">{project.name}</h3>
                    </div>
                    <LangBadge lang={project.lang} />
                  </div>
                  <p className="hz-t-sm hz-fg hz-mb-3">{project.description}</p>
                  <div className="hz-row hz-ai-center hz-gap-1 hz-t-xs hz-fg">
                    <Github className="hz-sq-1" />
                    <span className="hz-mono">hanzoai/{project.repo}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hz-mb-7"
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-2">Infrastructure</h2>
          <p className={cn("hz-t-lg hz-mb-6", "hz-fg")}>
            The platforms and networks that power Hanzo.
          </p>
          <div className="hz-grid hz-grid-3 hz-gap-4">
            {infrastructure.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.03 }}
                  className={cn(
                    "hz-p-5 hz-r-lg hz-bordered hz-transition",
                    "hz-hoverable"
                  )}
                >
                  <Icon className="hz-sq-4 hz-fg hz-mb-3" />
                  <h3 className="hz-t-lg hz-w-semibold hz-mb-2">{item.title}</h3>
                  <p className="hz-t-sm hz-fg">{item.description}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "hz-p-6 hz-r-lg hz-bordered hz-align-center",
            "hz-bg-surface"
          )}
        >
          <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Start Building</h2>
          <p className={cn("hz-container-narrow hz-mw-md hz-t-lg hz-mb-6", "hz-fg")}>
            Create an account, grab your API key, and make your first call in under a minute.
          </p>
          <div className="hz-row hz-wrap hz-jc-center hz-gap-3">
            <a href="https://console.hanzo.ai" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="hz-gap-2">
                Get API Key <ArrowRight className="hz-sq-2" />
              </Button>
            </a>
            <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hz-gap-2">
                Full Documentation <ExternalLink className="hz-sq-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
