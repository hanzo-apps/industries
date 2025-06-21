import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cloud, Shield, Lock, Server, Database, Zap, Globe, Cpu } from "lucide-react";

export default function SecureCloud() {
  const cloudSolutions = [
    {
      icon: Shield,
      title: "Defense-Grade Infrastructure",
      description: "Military-spec cloud infrastructure with multi-layer security and compliance",
      features: [
        "FedRAMP High and DoD IL5 compliant infrastructure",
        "Air-gapped and classified cloud environments",
        "Hardware security module (HSM) integration",
        "Continuous compliance monitoring and reporting"
      ]
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Complete zero-trust implementation for maximum security",
      features: [
        "Identity-based microsegmentation",
        "Continuous verification and authentication",
        "Encrypted data in transit and at rest",
        "Granular access controls and policies"
      ]
    },
    {
      icon: Database,
      title: "Resilient Data Management",
      description: "Distributed, fault-tolerant data storage and processing",
      features: [
        "Multi-region replication and failover",
        "Immutable audit logs and versioning",
        "Automated backup and disaster recovery",
        "Post-quantum encryption for data protection"
      ]
    },
    {
      icon: Zap,
      title: "Edge Computing Integration",
      description: "Seamless hybrid cloud-edge architecture for mission-critical operations",
      features: [
        "Low-latency edge processing",
        "Offline-first capabilities",
        "Intelligent workload distribution",
        "Real-time synchronization"
      ]
    }
  ];

  const deploymentModels = [
    {
      title: "Private Cloud",
      description: "Dedicated infrastructure for maximum control and security",
      icon: Server,
      benefits: ["Complete data sovereignty", "Custom security policies", "Dedicated resources", "Full compliance control"]
    },
    {
      title: "Hybrid Cloud",
      description: "Flexible deployment across private and public infrastructure",
      icon: Globe,
      benefits: ["Workload optimization", "Cost efficiency", "Scalable resources", "Regulatory compliance"]
    },
    {
      title: "Multi-Cloud",
      description: "Distribute workloads across multiple cloud providers",
      icon: Cloud,
      benefits: ["Vendor independence", "Geographic distribution", "Risk mitigation", "Best-of-breed services"]
    },
    {
      title: "Edge Cloud",
      description: "Deploy compute resources at the tactical edge",
      icon: Cpu,
      benefits: ["Ultra-low latency", "Bandwidth optimization", "Offline operation", "Local data processing"]
    }
  ];

  const complianceStandards = [
    { name: "FedRAMP High", description: "Highest federal security authorization" },
    { name: "DoD IL5", description: "Department of Defense Impact Level 5" },
    { name: "ITAR", description: "International Traffic in Arms Regulations" },
    { name: "NIST 800-171", description: "Protecting Controlled Unclassified Information" },
    { name: "CMMC", description: "Cybersecurity Maturity Model Certification" },
    { name: "SOC 2 Type II", description: "Security, Availability, and Confidentiality" }
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
              Secure Cloud Infrastructure
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Mission-critical cloud solutions built for defense, intelligence, and high-security operations
            </p>
          </motion.div>
        </div>

        {/* Core Solutions */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Enterprise Security Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudSolutions.map((solution, index) => {
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

        {/* Deployment Models */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Flexible Deployment Models</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the deployment model that best fits your security requirements and operational needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <Icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{model.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{model.description}</p>
                  <ul className="space-y-1">
                    {model.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 text-xs flex items-start">
                        <span className="mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="bg-white text-black p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Compliance & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-black pl-4"
                >
                  <h3 className="font-semibold text-lg">{standard.name}</h3>
                  <p className="text-gray-700 text-sm">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Global Infrastructure */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg border border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Global Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <p className="text-gray-400">Global Data Centers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.99%</div>
                <p className="text-gray-400">Uptime SLA</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">&lt;10ms</div>
                <p className="text-gray-400">Average Latency</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Advanced Security Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DDoS Protection</h3>
              <p className="text-gray-400 text-sm">Advanced threat mitigation with automatic scaling</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Key Management</h3>
              <p className="text-gray-400 text-sm">FIPS 140-2 Level 3 validated HSMs</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Residency</h3>
              <p className="text-gray-400 text-sm">Complete control over data location and sovereignty</p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready for Mission-Critical Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Deploy secure, compliant, and resilient cloud infrastructure that meets the highest 
            standards of defense and intelligence operations
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}