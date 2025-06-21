import { motion } from "framer-motion";

const DefenseCapabilities = () => {
  const capabilities = [
    {
      title: "Intelligence Analysis Platform",
      description: "Multi-source data fusion and analysis for actionable intelligence",
      features: ["Real-time data processing", "Predictive threat modeling", "Geospatial analysis", "Pattern recognition"]
    },
    {
      title: "Secure Communications Suite", 
      description: "End-to-end encrypted communications for classified operations",
      features: ["Quantum-resistant", "Zero-knowledge", "Multi-factor authentication", "Audit logging"]
    },
    {
      title: "Mission Planning System",
      description: "AI-powered planning and simulation for complex operations",
      features: ["Scenario modeling", "Resource optimization", "Risk assessment", "Real-time collaboration"]
    },
    {
      title: "Cyber Defense Platform",
      description: "Advanced threat detection and response for critical infrastructure",
      features: ["24/7 monitoring", "Automated response", "Threat hunting", "Compliance reporting"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-black mb-4"
          >
            Defense-Grade Solutions for Critical Missions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our solutions are built from the ground up to meet the unique requirements of 
            defense and intelligence organizations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-colors">
                <h3 className="text-2xl font-semibold text-black mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-8 p-6 bg-black text-white rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold">NIST</div>
              <div className="text-sm opacity-80">Compliant</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold">ITAR</div>
              <div className="text-sm opacity-80">Compliant</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold">Security</div>
              <div className="text-sm opacity-80">Focused</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DefenseCapabilities;