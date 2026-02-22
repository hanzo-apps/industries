import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Code2, Terminal, FileCode, Package, Rocket, BookOpen, Cpu, Lock, Users, Zap, Globe } from "lucide-react";

export default function Examples() {
  const { isDarkMode } = useTheme();

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
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Code Examples
            </h1>
            <p className={cn("text-xl sm:text-2xl max-w-3xl mx-auto", isDarkMode ? "text-white/70" : "text-black/70")}>
              Ready-to-use code examples to accelerate your AI development
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
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
                    "p-4 rounded-lg border transition-colors text-center",
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:border-white/20"
                      : "bg-black/5 border-black/10 hover:border-black/20"
                  )}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">{integration.name}</div>
                </a>
              );
            })}
          </motion.div>

          {/* Code Examples */}
          <div className="space-y-12">
            {examples.map((example, index) => {
              const Icon = example.icon;
              return (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "border rounded-lg overflow-hidden",
                    isDarkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-black/5 border-black/10"
                  )}
                >
                  <div className={cn("p-6 border-b", isDarkMode ? "border-white/10" : "border-black/10")}>
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6" />
                      <h3 className="text-xl font-semibold">{example.title}</h3>
                    </div>
                    <p className={cn("mt-2", isDarkMode ? "text-white/50" : "text-black/50")}>{example.description}</p>
                  </div>

                  <div className="relative">
                    <div className="absolute top-4 right-4">
                      <span className={cn(
                        "text-xs px-2 py-1 rounded",
                        isDarkMode
                          ? "text-white/40 bg-white/10"
                          : "text-black/40 bg-black/10"
                      )}>
                        {example.language}
                      </span>
                    </div>
                    <pre className="p-6 overflow-x-auto">
                      <code className={cn("text-sm whitespace-pre", isDarkMode ? "text-white/70" : "text-black/70")}>
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
              "mt-20 p-12 rounded-lg border",
              isDarkMode
                ? "bg-gradient-to-r from-white/5 to-transparent border-white/10"
                : "bg-gradient-to-r from-black/5 to-transparent border-black/10"
            )}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Developer Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Terminal className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Playground</h3>
                <p className={cn("mb-4", isDarkMode ? "text-white/50" : "text-black/50")}>Test our APIs in your browser</p>
                <a href="https://playground.hanzo.ai" className={cn(isDarkMode ? "text-white hover:text-white/70" : "text-black hover:text-black/70")}>
                  Try Playground →
                </a>
              </div>
              <div>
                <BookOpen className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                <p className={cn("mb-4", isDarkMode ? "text-white/50" : "text-black/50")}>Complete API documentation</p>
                <a href="https://docs.hanzo.ai/api" className={cn(isDarkMode ? "text-white hover:text-white/70" : "text-black hover:text-black/70")}>
                  View Docs →
                </a>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className={cn("mb-4", isDarkMode ? "text-white/50" : "text-black/50")}>Join our developer community</p>
                <a href="https://community.hanzo.ai" className={cn(isDarkMode ? "text-white hover:text-white/70" : "text-black hover:text-black/70")}>
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
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build?
            </h2>
            <p className={cn("text-xl mb-8 max-w-2xl mx-auto", isDarkMode ? "text-white/70" : "text-black/70")}>
              Start building with Hanzo AI today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://console.hanzo.ai/signup"
                className={cn(
                  "inline-block px-8 py-4 rounded-lg font-semibold transition-colors",
                  isDarkMode
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-black/90"
                )}
              >
                Get API Key
              </a>
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-block border px-8 py-4 rounded-lg font-semibold transition-colors",
                  isDarkMode
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                )}
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
