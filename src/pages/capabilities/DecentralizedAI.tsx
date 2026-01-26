import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Server, Shield, Cpu, Network, Zap, Lock, Database } from "lucide-react";

export default function DecentralizedAI() {
  const features = [
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Deploy AI across multiple geographic regions for maximum resilience and compliance",
      details: [
        "Multi-region deployment capabilities",
        "Data sovereignty compliance",
        "Local inference for reduced latency",
        "Geographic load balancing"
      ]
    },
    {
      icon: Server,
      title: "Distributed Computing",
      description: "Harness the power of distributed systems for scalable AI operations",
      details: [
        "Horizontal scaling architecture",
        "Resource pooling and sharing",
        "Dynamic workload distribution",
        "Fault-tolerant design"
      ]
    },
    {
      icon: Shield,
      title: "Byzantine Fault Tolerance",
      description: "Maintain system integrity even with node failures or malicious actors",
      details: [
        "Consensus mechanisms",
        "Redundant validation",
        "Self-healing networks",
        "Attack resistance"
      ]
    },
    {
      icon: Cpu,
      title: "Edge Computing Integration",
      description: "Seamlessly integrate edge devices into your decentralized AI network",
      details: [
        "Edge-cloud hybrid architecture",
        "Local processing capabilities",
        "Intelligent data routing",
        "Bandwidth optimization"
      ]
    }
  ];

  const useCases = [
    {
      title: "Enterprise AI",
      description: "Resilient AI for mission-critical enterprise applications",
      icon: Shield
    },
    {
      title: "Financial Services",
      description: "Distributed AI for fraud detection and risk analysis",
      icon: Database
    },
    {
      title: "Healthcare Networks",
      description: "Privacy-preserving AI across medical institutions",
      icon: Network
    },
    {
      title: "Smart Cities",
      description: "Decentralized intelligence for urban infrastructure",
      icon: Zap
    }
  ];

  const benefits = [
    {
      metric: "99.999%",
      label: "Uptime with no single point of failure"
    },
    {
      metric: "10x",
      label: "Improved resilience over centralized systems"
    },
    {
      metric: "<5ms",
      label: "Local inference latency"
    },
    {
      metric: "100%",
      label: "Data sovereignty compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
              Decentralized AI Infrastructure
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Build resilient, distributed AI systems that operate without central points of failure
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800"
              >
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-sm text-gray-400">{benefit.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Core Features */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Core Capabilities
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-8"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-400 mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Architecture Diagram Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 bg-gray-900 border border-gray-800 rounded-lg p-12 text-center"
          >
            <Network className="w-24 h-24 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Decentralized Architecture</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our decentralized AI infrastructure eliminates single points of failure through 
              distributed consensus, redundant nodes, and intelligent failover mechanisms.
            </p>
          </motion.div>

          {/* Use Cases */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Industry Applications
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center hover:border-gray-700 transition-colors"
                  >
                    <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg border border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Consensus Protocol</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">• Byzantine Fault Tolerant (BFT)</li>
                  <li className="text-gray-300">• Practical Byzantine Fault Tolerance</li>
                  <li className="text-gray-300">• Raft consensus for coordination</li>
                  <li className="text-gray-300">• Custom AI workload consensus</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Network Architecture</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">• Peer-to-peer mesh network</li>
                  <li className="text-gray-300">• Encrypted communication channels</li>
                  <li className="text-gray-300">• Dynamic node discovery</li>
                  <li className="text-gray-300">• Load balancing algorithms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Security Features</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">• End-to-end encryption</li>
                  <li className="text-gray-300">• Zero-knowledge proofs</li>
                  <li className="text-gray-300">• Secure multi-party computation</li>
                  <li className="text-gray-300">• Homomorphic encryption support</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Decentralize Your AI Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of resilient, distributed AI systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="https://docs.google.com/document/d/1mWC6mo9Wd4s3KaWPTF_4QhLqh5lRmzED12wRnLq71Sk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}