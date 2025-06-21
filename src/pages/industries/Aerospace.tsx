import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Satellite, Navigation, Radio, Shield, Cpu, Rocket, ShieldCheck, FileCheck, Award } from "lucide-react";

const Aerospace = () => {
  const solutions = [
    {
      icon: Satellite,
      title: "Satellite AI Systems",
      description: "Edge AI for satellite operations, image processing, and autonomous decision-making",
      features: ["On-orbit processing", "Real-time analytics", "Autonomous navigation", "Data compression"]
    },
    {
      icon: Navigation,
      title: "Flight Control AI",
      description: "Advanced AI for autonomous flight systems, traffic management, and safety monitoring",
      features: ["Predictive maintenance", "Route optimization", "Collision avoidance", "Weather adaptation"]
    },
    {
      icon: Radio,
      title: "Communications Intelligence",
      description: "AI-powered communication systems for secure, reliable aerospace operations",
      features: ["Signal processing", "Interference mitigation", "Adaptive protocols", "Quantum-safe encryption"]
    },
    {
      icon: Shield,
      title: "Space Cybersecurity",
      description: "Protecting critical space infrastructure with AI-driven security solutions",
      features: ["Threat detection", "Anomaly monitoring", "Secure boot systems", "Zero-trust architecture"]
    },
    {
      icon: Cpu,
      title: "Avionics AI",
      description: "Next-generation AI for aircraft systems, sensors, and operational efficiency",
      features: ["Sensor fusion", "System health monitoring", "Fuel optimization", "Crew assistance"]
    },
    {
      icon: Plane,
      title: "Unmanned Systems",
      description: "Autonomous AI for drones, UAVs, and unmanned space vehicles",
      features: ["Swarm intelligence", "Mission planning", "Remote operation", "Adaptive behavior"]
    }
  ];

  const caseStudies = [
    {
      title: "Autonomous Satellite Constellation",
      client: "Major Aerospace Contractor",
      description: "Deployed edge AI across 50+ satellites for real-time Earth observation and autonomous tasking",
      impact: "90% reduction in ground control requirements"
    },
    {
      title: "AI Flight Safety System",
      client: "Commercial Aviation Leader",
      description: "Implemented predictive maintenance AI reducing unscheduled maintenance by 40%",
      impact: "$25M annual savings"
    },
    {
      title: "Space Traffic Management",
      client: "International Space Agency",
      description: "Built AI system for tracking and predicting orbital debris trajectories",
      impact: "3x improvement in collision prediction accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Plane className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-black mb-6">Aerospace Industry Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advancing aerospace innovation with frontier AI technology for safer, more efficient, 
              and autonomous flight operations from Earth to orbit and beyond
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Schedule Consultation
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Download Industry Brief
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              AI Solutions for Aerospace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From autonomous satellites to intelligent flight systems, our AI solutions 
              are designed for the unique challenges of aerospace operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
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

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world impact of our AI solutions in aerospace operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-black mb-2">{study.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{study.client}</p>
                <p className="text-gray-700 mb-4">{study.description}</p>
                <div className="bg-blue-50 px-4 py-2 rounded-md inline-block">
                  <span className="text-sm font-semibold text-blue-700">{study.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hanzo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white rounded-2xl p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Hanzo for Aerospace AI?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3">Edge-First Architecture</h3>
                      <p className="text-gray-300">
                        Our AI models are optimized for deployment in space and aviation environments 
                        with limited connectivity and computing resources
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3">Safety & Reliability</h3>
                      <p className="text-gray-300">
                        Built with aerospace-grade reliability standards and extensive safety 
                        validation for mission-critical operations
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
                      <p className="text-gray-300">
                        Deep understanding of FAA, EASA, and space agency requirements 
                        with AI solutions designed for certification
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                      <p className="text-gray-300">
                        Successfully deployed AI systems in commercial aviation, defense aerospace, 
                        and space exploration missions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Partner with Hanzo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aerospace;