import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Cpu, Sparkles, Database, GitBranch, Zap } from "lucide-react";

const Intelligence = () => {
  const aiCapabilities = [
    {
      icon: Brain,
      title: "Zen - Multi-Modal MoE",
      description: "Our flagship Mixture of Experts model delivering state-of-the-art performance across text, code, and reasoning tasks",
      features: ["175B+ parameters", "Multi-modal understanding", "Enterprise-ready API", "On-premise deployment"]
    },
    {
      icon: Sparkles,
      title: "Sho - Diffusion Model",
      description: "Advanced generative AI for creating high-quality images, designs, and visual content with unparalleled control",
      features: ["Text-to-image generation", "Style transfer", "Inpainting & outpainting", "Commercial use licensed"]
    },
    {
      icon: Database,
      title: "Open Data Platform",
      description: "Modular, enterprise-ready data infrastructure designed for AI/ML workloads at scale",
      features: ["Real-time processing", "Multi-cloud support", "Data governance", "Open source core"]
    },
    {
      icon: GitBranch,
      title: "AI/ML Ecosystem",
      description: "Comprehensive toolkit for building, training, and deploying AI models in production environments",
      features: ["AutoML capabilities", "Model versioning", "A/B testing framework", "Monitoring & observability"]
    },
    {
      icon: Cpu,
      title: "Edge AI Solutions",
      description: "Optimized models for deployment on edge devices with minimal latency and resource usage",
      features: ["Model compression", "Hardware acceleration", "Offline capabilities", "Secure inference"]
    },
    {
      icon: Zap,
      title: "Applied AI Research",
      description: "Cutting-edge research in natural language processing, computer vision, and reinforcement learning",
      features: ["Published papers", "Open source contributions", "Industry partnerships", "Patent portfolio"]
    }
  ];

  const researchAreas = [
    {
      title: "Natural Language Processing",
      description: "Advanced language understanding and generation capabilities",
      projects: ["Multilingual models", "Code generation", "Document analysis", "Sentiment analysis"]
    },
    {
      title: "Computer Vision",
      description: "State-of-the-art visual perception and understanding",
      projects: ["Object detection", "Scene understanding", "Video analysis", "3D reconstruction"]
    },
    {
      title: "Reinforcement Learning",
      description: "Self-improving systems for complex decision making",
      projects: ["Autonomous agents", "Game playing AI", "Robotics control", "Resource optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">AI Intelligence Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powered by Hanzo AI Inc, our Techstars-backed applied AI research lab delivering 
              frontier models and enterprise-ready AI infrastructure
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Explore Our Models
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Research Papers
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Frontier AI Models & Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the future of artificial intelligence with open source principles 
              and enterprise-grade reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-colors"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Applied AI Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advancing the state of the art through fundamental research and practical applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-black mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="space-y-3">
                  {area.projects.map((project) => (
                    <div key={project} className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">{project}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Commitment */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Open Source First</h2>
            <p className="text-xl text-gray-300 mb-8">
              We believe in democratizing AI technology. Our core infrastructure and select models 
              are available as open source, enabling innovation across the entire ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-400">Open Source Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10k+</div>
                <div className="text-gray-400">GitHub Stars</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-gray-400">Contributors</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => window.open('https://github.com/hanzoai', '_blank')}
              >
                Visit Our GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Join Our Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Intelligence;