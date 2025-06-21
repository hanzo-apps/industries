import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Brain, Globe, Zap, Users, Lock } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Shield,
      category: "Defense & Security",
      title: "US Department of Defense: Secure AI Operations",
      description: "Deployed resilient AI infrastructure for classified intelligence analysis",
      results: [
        "99.99% uptime in mission-critical operations",
        "10x faster threat detection and analysis",
        "Zero security breaches in 24 months",
        "Reduced operational costs by 40%"
      ],
      technologies: ["Edge AI", "Secure Cloud", "Post-Quantum Encryption"],
      impact: "Enhanced national security capabilities while maintaining strict compliance"
    },
    {
      icon: Brain,
      category: "Research & Development",
      title: "DARPA: Advanced AI Research Platform",
      description: "Built scalable infrastructure for frontier AI research and experimentation",
      results: [
        "50% reduction in model training time",
        "Support for 100+ concurrent experiments",
        "Seamless integration with existing systems",
        "Enhanced collaboration across teams"
      ],
      technologies: ["Frontier AI Models", "Distributed Computing", "MLOps"],
      impact: "Accelerated breakthrough research in AI safety and capabilities"
    },
    {
      icon: Globe,
      category: "Enterprise",
      title: "Fortune 500 Financial Services",
      description: "Implemented AI-powered fraud detection and risk management system",
      results: [
        "95% fraud detection accuracy",
        "$50M+ in prevented losses annually",
        "Real-time transaction analysis",
        "Regulatory compliance maintained"
      ],
      technologies: ["AI & ML", "Secure Cloud", "Real-time Analytics"],
      impact: "Transformed security posture while improving customer experience"
    },
    {
      icon: Zap,
      category: "Critical Infrastructure",
      title: "National Power Grid Optimization",
      description: "Deployed AI for predictive maintenance and grid optimization",
      results: [
        "30% reduction in outages",
        "20% energy efficiency improvement",
        "Predictive maintenance accuracy of 92%",
        "ROI achieved in 18 months"
      ],
      technologies: ["Edge AI", "IoT Integration", "Predictive Analytics"],
      impact: "Enhanced grid reliability and sustainability"
    },
    {
      icon: Users,
      category: "Healthcare",
      title: "Multi-Hospital Network AI Deployment",
      description: "Privacy-preserving AI for medical imaging and diagnostics",
      results: [
        "40% faster diagnosis times",
        "98% accuracy in early detection",
        "HIPAA compliant implementation",
        "Seamless integration with PACS"
      ],
      technologies: ["Federated Learning", "Privacy-Preserving AI", "Edge Computing"],
      impact: "Improved patient outcomes while maintaining data privacy"
    },
    {
      icon: Lock,
      category: "Cybersecurity",
      title: "Global Threat Intelligence Network",
      description: "Built decentralized threat detection and response system",
      results: [
        "Real-time threat detection across networks",
        "75% reduction in response time",
        "Automated incident response",
        "Zero-day vulnerability detection"
      ],
      technologies: ["Cybersecurity AI", "Decentralized Infrastructure", "Threat Intelligence"],
      impact: "Created resilient defense against evolving cyber threats"
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
              Case Studies
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Real-world success stories of AI transformation across industries
            </p>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-sm text-gray-400">Successful Deployments</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">$500M+</div>
              <div className="text-sm text-gray-400">Value Generated</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-sm text-gray-400">Industries Served</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Customer Satisfaction</div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">{study.category}</div>
                      <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                      <p className="text-gray-300">{study.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">
                        <strong>Impact:</strong> {study.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your operations
            </p>
            <a 
              href="/#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}