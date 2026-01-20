import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ExternalLink,
  Github,
  FileText,
  Brain,
  Shield,
  Cpu,
  Network,
  Code,
  BookOpen
} from "lucide-react";

// Research areas
const researchAreas = [
  {
    icon: Brain,
    title: "AI Alignment",
    description: "Developing techniques to ensure AI systems reliably pursue intended goals and behave safely.",
    link: "/research/alignment",
  },
  {
    icon: Shield,
    title: "AI Safety",
    description: "Building robust safeguards and interpretability tools for understanding model behavior.",
    link: "/research/safety",
  },
  {
    icon: Network,
    title: "Decentralized AI",
    description: "Distributed inference, federated learning, and privacy-preserving AI infrastructure.",
    link: "/research/decentralized",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description: "Efficient models and deployment strategies for on-device and edge computing.",
    link: "/research/edge",
  },
];

// Open source projects
const openSourceProjects = [
  {
    name: "hanzo-mcp",
    description: "Model Context Protocol - infrastructure for AI context management and tool use",
    stars: "2.3k",
    language: "TypeScript",
    href: "https://github.com/hanzoai/mcp",
  },
  {
    name: "candle",
    description: "Minimalist ML framework for Rust with GPU acceleration",
    stars: "1.8k",
    language: "Rust",
    href: "https://github.com/hanzoai/candle",
  },
  {
    name: "jin",
    description: "Unified multimodal AI framework for vision, language, and audio",
    stars: "1.2k",
    language: "Python",
    href: "https://github.com/hanzoai/jin",
  },
  {
    name: "hanzo-ui",
    description: "React component library for AI-powered applications",
    stars: "950",
    language: "TypeScript",
    href: "https://github.com/hanzoai/ui",
  },
  {
    name: "agents",
    description: "Multi-agent orchestration framework for complex AI tasks",
    stars: "820",
    language: "Python",
    href: "https://github.com/hanzoai/agents",
  },
  {
    name: "hanzo-dev",
    description: "AI-powered development environment and CLI tools",
    stars: "650",
    language: "TypeScript",
    href: "https://github.com/hanzoai/dev",
  },
];

// Research papers
const papers = [
  {
    title: "Scalable Alignment via Constitutional AI Methods",
    authors: "Hanzo Research Team",
    date: "2024",
    abstract: "We present a scalable approach to AI alignment using constitutional methods that can be applied across model scales.",
    link: "https://arxiv.org/abs/example1",
  },
  {
    title: "Decentralized Inference for Privacy-Preserving AI",
    authors: "Hanzo Research Team",
    date: "2024",
    abstract: "A framework for running large language model inference across distributed nodes while maintaining privacy guarantees.",
    link: "https://arxiv.org/abs/example2",
  },
  {
    title: "Efficient Edge Deployment of Foundation Models",
    authors: "Hanzo Research Team",
    date: "2023",
    abstract: "Techniques for quantization, pruning, and distillation to enable frontier models on edge devices.",
    link: "https://arxiv.org/abs/example3",
  },
  {
    title: "Interpretability Through Mechanistic Analysis",
    authors: "Hanzo Research Team",
    date: "2023",
    abstract: "Understanding neural network behavior through circuit-level analysis and activation patching.",
    link: "https://arxiv.org/abs/example4",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight mb-6">
                Research
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We conduct fundamental research in AI safety, alignment, and capabilities
                to build AI systems that are safe, beneficial, and trustworthy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12">Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group"
                  >
                    <Icon className="w-10 h-10 text-gray-700 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <Link
                      to={area.link}
                      className="text-sm font-medium text-black hover:underline inline-flex items-center gap-1"
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-24 px-4" id="open-source">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-black mb-2">Open Source</h2>
                <p className="text-gray-600">
                  We believe in open research and share our tools with the community.
                </p>
              </div>
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  View all on GitHub
                </Button>
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openSourceProjects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-gray-700" />
                      <span className="font-semibold text-black group-hover:underline">
                        {project.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      {project.language}
                    </span>
                    <span>⭐ {project.stars}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Papers Section */}
        <section className="py-24 px-4 bg-gray-50" id="papers">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-black mb-2">Research Papers</h2>
                <p className="text-gray-600">
                  Our published work on AI safety, alignment, and capabilities.
                </p>
              </div>
              <Link to="/research/papers">
                <Button variant="outline" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  View all papers
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {papers.map((paper, index) => (
                <motion.a
                  key={paper.title}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <span className="text-sm text-gray-500">{paper.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2 group-hover:underline">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{paper.authors}</p>
                      <p className="text-gray-600">{paper.abstract}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex-shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-4">
              Join our research efforts
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're looking for talented researchers to help build the future of safe AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/careers">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
                  View Open Positions
                </Button>
              </Link>
              <a href="mailto:research@hanzo.industries">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Contact Research Team
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
