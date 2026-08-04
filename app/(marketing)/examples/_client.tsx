"use client";

import { motion } from "framer-motion";
import { cn } from '@hanzo/ui'
import { Code2, Terminal, FileCode, Package, Rocket, BookOpen, Cpu, Lock, Users, Zap, Globe } from "lucide-react";

export default function PageClient() {
  const examples = [
    {
      title: "Quick Start: Hanzo Cloud API",
      icon: Rocket,
      language: "bash",
      code: `# Install Hanzo Python SDK
pip install hanzoai

# Set your API key
export HANZO_API_KEY="hk-your-api-key"

# Quick test with curl
curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "zen4", "messages": [{"role": "user", "content": "Hello, Zen!"}]}'`,
      description: "Get started with Hanzo AI in minutes — every new account gets $5 free credit"
    },
    {
      title: "Python SDK: Chat Completions",
      icon: Code2,
      language: "python",
      code: `from hanzoai import Hanzo

# Initialize the client
client = Hanzo(api_key="hk-your-api-key")

# Generate a response with zen4
response = client.chat.completions.create(
    model="zen4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms"}
    ],
    temperature=0.7,
    max_tokens=200,
)

print(response.choices[0].message.content)`,
      description: "Generate text using the official Hanzo Python SDK (OpenAI + Claude compatible)"
    },
    {
      title: "TypeScript SDK: Streaming",
      icon: Cpu,
      language: "typescript",
      code: `import Hanzo from "hanzoai";

const client = new Hanzo({ apiKey: "hk-your-api-key" });

// Stream a response from zen4-coder
const stream = await client.chat.completions.create({
  model: "zen4-coder",
  messages: [{ role: "user", content: "Write a Go HTTP server with graceful shutdown" }],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  if (content) process.stdout.write(content);
}`,
      description: "Stream AI responses in real-time with the TypeScript SDK"
    },
    {
      title: "Vision: Image Understanding",
      icon: Lock,
      language: "python",
      code: `from hanzoai import Hanzo

client = Hanzo(api_key="hk-your-api-key")

# Analyze an image with zen3-vl (vision-language model)
response = client.chat.completions.create(
    model="zen3-vl",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "What's in this image? Describe in detail."},
            {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg"}}
        ]
    }],
)

print(response.choices[0].message.content)`,
      description: "Use zen3-vl or zen3-omni for multimodal vision understanding"
    },
    {
      title: "Embeddings & RAG",
      icon: Users,
      language: "python",
      code: `from hanzoai import Hanzo

client = Hanzo(api_key="hk-your-api-key")

# Generate embeddings with zen3-embedding (3072 dimensions)
response = client.embeddings.create(
    model="zen3-embedding",
    input=["Quantum computing uses qubits", "Machine learning trains models"]
)

# Use embeddings for semantic search / RAG
for i, embedding in enumerate(response.data):
    print(f"Vector {i}: {len(embedding.embedding)} dimensions")

# Combine with chat for RAG pipeline
context = "Retrieved context from vector search..."
answer = client.chat.completions.create(
    model="zen4",
    messages=[
        {"role": "system", "content": f"Answer based on: {context}"},
        {"role": "user", "content": "What is quantum computing?"}
    ],
)`,
      description: "Build retrieval-augmented generation with zen3-embedding"
    },
    {
      title: "Local Inference: Open Weights",
      icon: Zap,
      language: "python",
      code: `# Run Zen models locally with transformers
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

model_id = "zenlm/zen-eco-4b-instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id, torch_dtype=torch.bfloat16, device_map="auto"
)

messages = [{"role": "user", "content": "Write a binary search in Python"}]
inputs = tokenizer.apply_chat_template(messages, tokenize=True,
    add_generation_prompt=True, return_tensors="pt")
outputs = model.generate(inputs.to(model.device), max_new_tokens=512)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))

# Also available in GGUF, MLX, and ONNX formats
# All open weights on huggingface.co/zenlm`,
      description: "Run any Zen open-weight model locally — Apache 2.0 licensed"
    }
  ];

  const integrations = [
    {
      name: "REST API",
      description: "RESTful API for all platforms",
      icon: Globe,
      link: "https://docs.hanzo.ai/api"
    },
    {
      name: "Python SDK",
      description: "Native Python integration",
      icon: Code2,
      link: "https://github.com/hanzoai/python-sdk"
    },
    {
      name: "JavaScript/TypeScript",
      description: "Full TypeScript support",
      icon: FileCode,
      link: "https://github.com/hanzoai/js-sdk"
    },
    {
      name: "Go SDK",
      description: "High-performance Go client",
      icon: Terminal,
      link: "https://github.com/hanzoai/go-sdk"
    },
    {
      name: "Rust SDK",
      description: "Memory-safe Rust integration",
      icon: Package,
      link: "https://github.com/hanzoai/rust-sdk"
    },
    {
      name: "Documentation",
      description: "Comprehensive guides",
      icon: BookOpen,
      link: "https://docs.hanzo.ai"
    }
  ];

  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center hz-mb-7"
          >
            <h1 className="hz-t-5xl hz-w-bold hz-mb-5">
              Code Examples
            </h1>
            <p className={cn("hz-container-narrow hz-t-xl", "hz-fg")}>
              Ready-to-use code examples to accelerate your AI development
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-grid hz-grid-6 hz-gap-4 hz-mb-7"
          >
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <a
                  key={integration.name}
                  href={integration.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "hz-p-4 hz-r-lg hz-bordered hz-transition hz-align-center",
                    "hz-bg-surface hz-hoverable"
                  )}
                >
                  <Icon className="hz-sq-5 hz-mx-auto hz-mb-2" />
                  <div className="hz-t-sm hz-w-medium">{integration.name}</div>
                </a>
              );
            })}
          </motion.div>

          {/* Code Examples */}
          <div className="hz-stack-6">
            {examples.map((example, index) => {
              const Icon = example.icon;
              return (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "hz-bordered hz-r-lg hz-clip",
                    "hz-bg-surface"
                  )}
                >
                  <div className={cn("hz-p-5 hz-border-b", "")}>
                    <div className="hz-row hz-ai-center hz-inline-3">
                      <Icon className="hz-sq-4" />
                      <h3 className="hz-t-xl hz-w-semibold">{example.title}</h3>
                    </div>
                    <p className={cn("hz-mt-2", "hz-fg")}>{example.description}</p>
                  </div>

                  <div className="hz-rel">
                    <div className="hz-abs">
                      <span className={cn(
                        "hz-t-xs hz-px-2 hz-py-1 hz-r-md",
                        "hz-fg hz-bg-surface"
                      )}>
                        {example.language}
                      </span>
                    </div>
                    <pre className="hz-p-5 hz-scroll-x">
                      <code className={cn("hz-t-sm", "hz-fg")}>
                        {example.code}
                      </code>
                    </pre>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-mt-7 hz-p-6 hz-r-lg hz-bordered",
              ""
            )}
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-6 hz-align-center">Developer Resources</h2>
            <div className="hz-grid hz-grid-3 hz-gap-6 hz-align-center">
              <div>
                <Terminal className="hz-sq-7 hz-mx-auto hz-mb-4" />
                <h3 className="hz-t-xl hz-w-semibold hz-mb-2">Interactive Playground</h3>
                <p className={cn("hz-mb-4", "hz-fg")}>Test our APIs in your browser</p>
                <a href="https://playground.hanzo.ai" className={cn("hz-fg hz-hoverable")}>
                  Try Playground →
                </a>
              </div>
              <div>
                <BookOpen className="hz-sq-7 hz-mx-auto hz-mb-4" />
                <h3 className="hz-t-xl hz-w-semibold hz-mb-2">API Reference</h3>
                <p className={cn("hz-mb-4", "hz-fg")}>Complete API documentation</p>
                <a href="https://docs.hanzo.ai/api" className={cn("hz-fg hz-hoverable")}>
                  View Docs →
                </a>
              </div>
              <div>
                <Users className="hz-sq-7 hz-mx-auto hz-mb-4" />
                <h3 className="hz-t-xl hz-w-semibold hz-mb-2">Community</h3>
                <p className={cn("hz-mb-4", "hz-fg")}>Join our developer community</p>
                <a href="https://community.hanzo.ai" className={cn("hz-fg hz-hoverable")}>
                  Join Discord →
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-mt-7 hz-align-center"
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-5">
              Ready to Build?
            </h2>
            <p className={cn("hz-container-narrow hz-mw-md hz-t-xl hz-mb-6", "hz-fg")}>
              Start building with Hanzo AI today
            </p>
            <div className="hz-col-row hz-gap-4 hz-jc-center">
              <a
                href="https://console.hanzo.ai/signup"
                className={cn(
                  "hz-px-6 hz-py-4 hz-r-lg hz-w-semibold hz-transition",
                  "hz-bg-inverse hz-hoverable"
                )}
              >
                Get API Key
              </a>
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hz-bordered hz-px-6 hz-py-4 hz-r-lg hz-w-semibold hz-transition",
                  "hz-fg hz-hoverable"
                )}
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
