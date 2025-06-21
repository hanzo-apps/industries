import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Key, AlertTriangle, Eye, Server, Cpu, Fingerprint } from "lucide-react";

export default function Cybersecurity() {
  const securitySolutions = [
    {
      icon: Lock,
      title: "Post-Quantum Cryptography",
      description: "Future-proof security with quantum-resistant encryption algorithms",
      features: [
        "Quantum-safe protocols for data protection",
        "Post-quantum key exchange mechanisms",
        "Forward-secure encryption against quantum attacks",
        "Integration with Hanzo Vault for quantum-safe key management"
      ]
    },
    {
      icon: Shield,
      title: "Secure Communications Suite",
      description: "End-to-end encrypted communications for classified operations",
      features: [
        "Quantum-resistant encryption",
        "Zero-knowledge authentication",
        "Multi-factor authentication with hardware tokens",
        "Comprehensive audit logging and compliance"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Cyber Defense Platform",
      description: "Advanced threat detection and response for critical infrastructure",
      features: [
        "24/7 AI-powered monitoring and analysis",
        "Automated incident response and mitigation",
        "Advanced threat hunting capabilities",
        "Real-time compliance reporting and auditing"
      ]
    },
    {
      icon: Key,
      title: "Hanzo Vault",
      description: "Enterprise-grade secrets management with MPC-based security",
      features: [
        "Hardware Security Module (HSM) integration",
        "Multi-party computation for key protection",
        "Post-quantum safe key storage",
        "Secure credential management for edge devices"
      ]
    }
  ];

  const privacyTechnologies = [
    {
      title: "Federated Learning",
      description: "Train AI models on distributed data without centralizing sensitive information",
      icon: Server
    },
    {
      title: "Secure Enclaves",
      description: "Hardware-based isolation for processing sensitive data with Intel SGX and AWS Nitro",
      icon: Cpu
    },
    {
      title: "Differential Privacy",
      description: "Mathematical guarantees that individual data cannot be extracted from AI models",
      icon: Eye
    },
    {
      title: "Homomorphic Encryption",
      description: "Perform computations on encrypted data without decrypting it",
      icon: Fingerprint
    }
  ];

  const defensePrinciples = [
    {
      title: "Zero Trust Architecture",
      description: "Never trust, always verify - comprehensive security for decentralized systems"
    },
    {
      title: "Defense in Depth",
      description: "Multiple layers of security controls throughout the infrastructure"
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time threat detection and response across all systems"
    },
    {
      title: "Compliance First",
      description: "Built-in compliance with NIST, ITAR, and international security standards"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Cybersecurity & Defense Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Military-grade security infrastructure protecting the world's most sensitive AI systems
            </p>
          </motion.div>
        </div>

        {/* Core Security Solutions */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Defense-Grade Security Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securitySolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                      <p className="text-gray-400 mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
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

        {/* Privacy-Preserving Technologies */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Privacy-Preserving AI Technologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced cryptographic techniques enabling secure AI operations without compromising data privacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyTechnologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <Icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Security Principles */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Security Philosophy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {defensePrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-white pl-6"
              >
                <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance & Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="bg-white text-black p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Compliance & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">NIST</div>
                <p className="text-gray-700">Compliant with NIST Cybersecurity Framework</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">ITAR</div>
                <p className="text-gray-700">International Traffic in Arms Regulations compliant</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">SOC 2</div>
                <p className="text-gray-700">Type II certified for security and availability</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trustless Systems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Trustless AI Systems</h2>
            <p className="text-gray-300 mb-6 max-w-3xl">
              We embed robust testing and continual feedback loops throughout our processes, 
              ensuring high safety standards and proactive risk management in all environments. 
              Our trustless architecture means security isn't dependent on any single point of 
              trust but is distributed across the entire system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Decentralized Verification</h3>
                <p className="text-gray-400 text-sm">Multi-party consensus for critical operations</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cryptographic Proofs</h3>
                <p className="text-gray-400 text-sm">Mathematical guarantees of system integrity</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Auditing</h3>
                <p className="text-gray-400 text-sm">Immutable logs and verifiable computation</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Secure Your AI Infrastructure
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            From quantum-resistant encryption to zero-trust architectures, we provide the 
            security foundation for mission-critical AI deployments
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Schedule Security Assessment
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}