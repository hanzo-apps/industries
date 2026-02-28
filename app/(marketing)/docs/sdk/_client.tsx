"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Copy,
  ExternalLink,
  Github,
  Terminal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface SdkSection {
  language: string;
  icon: string;
  pkg: string;
  install: string;
  registry: string;
  registryUrl: string;
  github: string;
  docs: string;
  description: string;
  features: string[];
  quickStart: string;
  asyncExample: string;
  asyncLabel: string;
}

const sdkSections: SdkSection[] = [
  {
    language: "Python",
    icon: "py",
    pkg: "hanzo-ai",
    install: "pip install hanzo-ai",
    registry: "PyPI",
    registryUrl: "https://pypi.org/project/hanzo-ai/",
    github: "https://github.com/hanzoai/python-sdk",
    docs: "https://docs.hanzo.ai/sdk/python",
    description:
      "The official Python SDK for Hanzo. Supports synchronous and asynchronous usage, streaming, function calling, and all Hanzo API endpoints.",
    features: [
      "Sync and async clients",
      "Streaming responses",
      "Function calling / tool use",
      "Automatic retries with backoff",
      "Pydantic models for all responses",
      "100% type-annotated",
    ],
    quickStart: `from hanzo import Hanzo

client = Hanzo()  # uses HANZO_API_KEY env var

# Chat completion
response = client.chat.completions.create(
    model="zen4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is the Zen model family?"},
    ],
    temperature=0.7,
    max_tokens=1024,
)

print(response.choices[0].message.content)
print(f"Tokens used: {response.usage.total_tokens}")`,
    asyncExample: `import asyncio
from hanzo import AsyncHanzo

async def main():
    client = AsyncHanzo()

    # Streaming response
    stream = await client.chat.completions.create(
        model="zen4",
        messages=[
            {"role": "user", "content": "Write a haiku about AI."},
        ],
        stream=True,
    )

    async for chunk in stream:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="")

asyncio.run(main())`,
    asyncLabel: "Async + Streaming",
  },
  {
    language: "TypeScript / JavaScript",
    icon: "ts",
    pkg: "@hanzo/sdk",
    install: "npm install @hanzo/sdk",
    registry: "npm",
    registryUrl: "https://www.npmjs.com/package/@hanzo/sdk",
    github: "https://github.com/hanzoai/js-sdk",
    docs: "https://docs.hanzo.ai/sdk/typescript",
    description:
      "The official TypeScript SDK for Hanzo. Works in Node.js, Deno, Bun, and edge runtimes. Full type safety with streaming and function calling support.",
    features: [
      "Full TypeScript types",
      "Streaming with async iterators",
      "Function calling / tool use",
      "Automatic retries",
      "Works in Node, Deno, Bun, edge",
      "ESM and CJS support",
    ],
    quickStart: `import Hanzo from "@hanzo/sdk";

const client = new Hanzo(); // uses HANZO_API_KEY env var

// Chat completion
const response = await client.chat.completions.create({
  model: "zen4",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is the Zen model family?" },
  ],
  temperature: 0.7,
  max_tokens: 1024,
});

console.log(response.choices[0].message.content);
console.log(\`Tokens used: \${response.usage.total_tokens}\`);`,
    asyncExample: `import Hanzo from "@hanzo/sdk";

const client = new Hanzo();

// Streaming response
const stream = await client.chat.completions.create({
  model: "zen4",
  messages: [
    { role: "user", content: "Write a haiku about AI." },
  ],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  if (content) process.stdout.write(content);
}`,
    asyncLabel: "Streaming",
  },
  {
    language: "Go",
    icon: "go",
    pkg: "github.com/hanzoai/go-sdk",
    install: "go get github.com/hanzoai/go-sdk",
    registry: "pkg.go.dev",
    registryUrl: "https://pkg.go.dev/github.com/hanzoai/go-sdk",
    github: "https://github.com/hanzoai/go-sdk",
    docs: "https://docs.hanzo.ai/sdk/go",
    description:
      "The official Go SDK for Hanzo. Idiomatic Go with generics, automatic retries, and structured error handling.",
    features: [
      "Idiomatic Go API",
      "Generics-based types",
      "Streaming support",
      "Structured error types",
      "Automatic retries",
      "Context-aware cancellation",
    ],
    quickStart: `package main

import (
    "context"
    "fmt"
    "log"

    "github.com/hanzoai/go-sdk"
)

func main() {
    client := hanzo.NewClient() // uses HANZO_API_KEY env var

    resp, err := client.Chat.Completions.New(context.TODO(),
        hanzo.ChatCompletionNewParams{
            Model: "zen4",
            Messages: []hanzo.ChatCompletionMessageParam{
                {Role: "system", Content: "You are a helpful assistant."},
                {Role: "user", Content: "What is the Zen model family?"},
            },
        },
    )
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(resp.Choices[0].Message.Content)
    fmt.Printf("Tokens used: %d\\n", resp.Usage.TotalTokens)
}`,
    asyncExample: `package main

import (
    "context"
    "fmt"
    "log"

    "github.com/hanzoai/go-sdk"
)

func main() {
    client := hanzo.NewClient()

    stream, err := client.Chat.Completions.NewStreaming(context.TODO(),
        hanzo.ChatCompletionNewParams{
            Model: "zen4",
            Messages: []hanzo.ChatCompletionMessageParam{
                {Role: "user", Content: "Write a haiku about AI."},
            },
        },
    )
    if err != nil {
        log.Fatal(err)
    }
    defer stream.Close()

    for stream.Next() {
        chunk := stream.Current()
        if len(chunk.Choices) > 0 && chunk.Choices[0].Delta.Content != "" {
            fmt.Print(chunk.Choices[0].Delta.Content)
        }
    }

    if err := stream.Err(); err != nil {
        log.Fatal(err)
    }
}`,
    asyncLabel: "Streaming + Error Handling",
  },
  {
    language: "Rust",
    icon: "rs",
    pkg: "hanzo",
    install: "cargo add hanzo",
    registry: "crates.io",
    registryUrl: "https://crates.io/crates/hanzo",
    github: "https://github.com/hanzoai/rust-sdk",
    docs: "https://docs.hanzo.ai/sdk/rust",
    description:
      "The official Rust SDK for Hanzo. Async-first with Tokio, zero-cost abstractions, and builder-pattern API.",
    features: [
      "Async-first (Tokio)",
      "Builder pattern API",
      "Streaming with futures",
      "Strong typing with serde",
      "DID / crypto utilities",
      "Zero-cost abstractions",
    ],
    quickStart: `use hanzo::Client;

#[tokio::main]
async fn main() -> Result<(), hanzo::Error> {
    let client = Client::new(); // uses HANZO_API_KEY env var

    let response = client
        .chat()
        .completions()
        .create("zen4")
        .system("You are a helpful assistant.")
        .message("user", "What is the Zen model family?")
        .temperature(0.7)
        .max_tokens(1024)
        .send()
        .await?;

    println!("{}", response.choices[0].message.content);
    println!("Tokens used: {}", response.usage.total_tokens);
    Ok(())
}`,
    asyncExample: `use futures::StreamExt;
use hanzo::Client;

#[tokio::main]
async fn main() -> Result<(), hanzo::Error> {
    let client = Client::new();

    let mut stream = client
        .chat()
        .completions()
        .create("zen4")
        .message("user", "Write a haiku about AI.")
        .stream()
        .await?;

    while let Some(chunk) = stream.next().await {
        let chunk = chunk?;
        if let Some(content) = &chunk.choices[0].delta.content {
            print!("{content}");
        }
    }

    Ok(())
}`,
    asyncLabel: "Streaming with Futures",
  },
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
        "p-1.5 rounded transition-colors",
        "hover:bg-foreground/10 text-muted-foreground hover:text-foreground"
      )}
      title="Copy"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className={cn("rounded-lg border overflow-hidden", "border-border")}>
      {label && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-foreground/[0.02]">
          <span className="text-xs font-mono text-muted-foreground">{label}</span>
          <CopyButton text={code} />
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-muted/50">
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
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb + Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Docs
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">SDKs</h1>
          <p className={cn("text-xl max-w-3xl", "text-muted-foreground")}>
            Install and configure Hanzo SDKs for Python, TypeScript, Go, and
            Rust. Every SDK is open source, fully typed, and supports streaming,
            retries, and all Hanzo API endpoints.
          </p>
        </motion.div>

        {/* Environment Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={cn(
            "p-6 rounded-lg border mb-16",
            "border-border bg-foreground/[0.02]"
          )}
        >
          <h2 className="text-lg font-semibold mb-3">Prerequisites</h2>
          <p className="text-sm text-muted-foreground mb-4">
            All SDKs authenticate using an API key. Set it as an environment variable:
          </p>
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2.5">
            <Terminal className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            <code className="text-sm font-mono flex-1">export HANZO_API_KEY=&quot;your-api-key&quot;</code>
            <CopyButton text='export HANZO_API_KEY="your-api-key"' />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Get your API key from{" "}
            <a
              href="https://console.hanzo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              console.hanzo.ai
            </a>
            . All SDKs default to reading <code className="font-mono">HANZO_API_KEY</code> from the environment.
          </p>
        </motion.div>

        {/* SDK Sections */}
        {sdkSections.map((sdk, sectionIndex) => (
          <motion.div
            key={sdk.language}
            id={sdk.icon}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + sectionIndex * 0.05 }}
            className="mb-20"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 font-mono text-base font-bold">
                {sdk.icon}
              </span>
              <div>
                <h2 className="text-3xl font-bold">{sdk.language}</h2>
                <p className="text-sm font-mono text-muted-foreground">{sdk.pkg}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">{sdk.description}</p>

            {/* Install */}
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-3 mb-6">
              <Terminal className="w-4 h-4 text-muted-foreground shrink-0" />
              <code className="text-sm font-mono flex-1">{sdk.install}</code>
              <CopyButton text={sdk.install} />
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
              {sdk.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Quick Start */}
            <div className="space-y-4 mb-6">
              <CodeBlock code={sdk.quickStart} label="Quick Start" />
              <CodeBlock code={sdk.asyncExample} label={sdk.asyncLabel} />
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href={sdk.registryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                {sdk.registry} <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={sdk.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                GitHub <Github className="w-3 h-3" />
              </a>
              <a
                href={sdk.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                Full Documentation <BookOpen className="w-3 h-3" />
              </a>
            </div>

            {/* Divider (except last) */}
            {sectionIndex < sdkSections.length - 1 && (
              <div className="border-b border-border mt-16" />
            )}
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={cn(
            "p-8 md:p-12 rounded-lg border text-center",
            "border-border bg-foreground/[0.02]"
          )}
        >
          <h2 className="text-2xl font-bold mb-4">Need the API directly?</h2>
          <p className={cn("text-lg mb-6 max-w-2xl mx-auto", "text-muted-foreground")}>
            All SDKs wrap the same REST API. If you prefer raw HTTP, check the API reference.
          </p>
          <Link href="/docs/api">
            <Button variant="outline" className="gap-2">
              API Reference <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
