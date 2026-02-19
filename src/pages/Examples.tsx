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
      title: "Quick Start: Deploy Your First AI Model",
      icon: Rocket,
      language: "bash",
      code: `# Install Hanzo CLI
curl -fsSL https://hanzo.ai/install.sh | sh

# Initialize a new project
hanzo init my-ai-project

# Deploy a pre-trained model
hanzo deploy --model gpt-4 --region us-west-2

# Test your deployment
hanzo test --endpoint https://api.hanzo.ai/v1/inference`,
      description: "Get started with Hanzo AI in minutes"
    },
    {
      title: "Python SDK: Text Generation",
      icon: Code2,
      language: "python",
      code: `import hanzo

# Initialize the client
client = hanzo.Client(api_key="your-api-key")

# Generate text
response = client.generate(
    prompt="Explain quantum computing in simple terms",
    model="hanzo-gpt-4",
    max_tokens=200,
    temperature=0.7
)

print(response.text)`,
      description: "Generate text using our Python SDK"
    },
    {
      title: "Edge Deployment: Local AI",
      icon: Cpu,
      language: "javascript",
      code: `// Edge AI deployment configuration
const edge = require('@hanzo/edge-ai');

// Initialize edge runtime
const runtime = new edge.Runtime({
  model: 'hanzo-edge-v2',
  device: 'gpu',
  maxMemory: '4GB'
});

// Run inference locally
async function classify(image) {
  const result = await runtime.classify(image);
  return result.labels;
}`,
      description: "Deploy AI models at the edge for offline inference"
    },
    {
      title: "Secure Multi-Party Computation",
      icon: Lock,
      language: "python",
      code: `from hanzo.secure import MPCClient

# Initialize secure computation client
mpc = MPCClient(
    party_id="hospital_a",
    protocol="shamir",
    threshold=3
)

# Perform computation on encrypted data
@mpc.secure_function
def analyze_patient_data(encrypted_data):
    # Computation happens on encrypted values
    risk_score = mpc.compute_risk(encrypted_data)
    return risk_score

# Result is only revealed to authorized parties
result = analyze_patient_data(patient_records)`,
      description: "Compute on sensitive data without exposing it"
    },
    {
      title: "Federated Learning Setup",
      icon: Users,
      language: "python",
      code: `from hanzo.federated import FederatedServer, FederatedClient

# Server configuration
server = FederatedServer(
    model="resnet50",
    aggregation="fedavg",
    rounds=100
)

# Client setup (runs on edge devices)
client = FederatedClient(
    server_url="wss://fed.hanzo.ai",
    local_data="/path/to/data"
)

# Train without sharing raw data
client.train_local()
client.send_updates()`,
      description: "Train models across distributed data sources"
    },
    {
      title: "Real-time Stream Processing",
      icon: Zap,
      language: "javascript",
      code: `const { StreamProcessor } = require('@hanzo/stream');

// Create a real-time AI pipeline
const processor = new StreamProcessor({
  model: 'hanzo-stream-v1',
  batchSize: 32,
  latencyTarget: 50 // ms
});

// Process incoming data stream
processor.on('data', async (batch) => {
  const predictions = await processor.predict(batch);

  // Real-time response
  predictions.forEach(pred => {
    if (pred.confidence > 0.95) {
      alertSystem.trigger(pred);
    }
  });
});`,
      description: "Process streaming data with low-latency AI"
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
