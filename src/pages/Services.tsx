import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Database, Cloud, Shield, Lightbulb, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom AI Development",
      description: "End-to-end AI solution development tailored to your specific business needs",
      offerings: [
        "Model architecture design",
        "Training pipeline setup",
        "Fine-tuning and optimization",
        "API development and integration"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data infrastructure to power your AI and analytics initiatives",
      offerings: [
        "Data pipeline architecture",
        "ETL/ELT development",
        "Real-time streaming",
        "Data warehouse design"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation for modern applications",
      offerings: [
        "Multi-cloud architecture",
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Kubernetes orchestration"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security solutions to protect your data and systems",
      offerings: [
        "Security assessments",
        "Compliance consulting",
        "Penetration testing",
        "Security architecture design"
      ]
    },
    {
      icon: Lightbulb,
      title: "AI Strategy Consulting",
      description: "Strategic guidance to maximize the value of AI in your organization",
      offerings: [
        "AI readiness assessment",
        "Use case identification",
        "ROI analysis",
        "Implementation roadmap"
      ]
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Empower your team with the knowledge and skills to succeed with AI",
      offerings: [
        "Technical workshops",
        "Custom training programs",
        "24/7 support",
        "Documentation & knowledge transfer"
      ]
    }
  ];

  const engagementModels = [
    {
      title: "Project-Based",
      description: "Fixed-scope engagements with clear deliverables and timelines",
      ideal: "Organizations with well-defined projects and specific outcomes"
    },
    {
      title: "Dedicated Teams",
      description: "Embedded experts working as an extension of your team",
      ideal: "Companies needing ongoing development and support"
    },
    {
      title: "Consulting & Advisory",
      description: "Strategic guidance and technical expertise on demand",
      ideal: "Organizations exploring AI opportunities and best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-black mb-6">Professional Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From strategy to implementation, we provide end-to-end services to help you 
              harness the power of AI and modern technology
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Comprehensive Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert services across the entire technology stack, delivered by our team 
              of specialists
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.offerings.map((offering) => (
                      <li key={offering} className="flex items-start text-sm text-gray-700">
                        <span className="text-black mr-2">•</span>
                        {offering}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Flexible Engagement Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the engagement model that best fits your needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-black mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Ideal for:</strong> {model.ideal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understand your goals and challenges" },
              { step: "02", title: "Strategy", desc: "Design the optimal solution approach" },
              { step: "03", title: "Implementation", desc: "Build and deploy with excellence" },
              { step: "04", title: "Support", desc: "Ensure long-term success" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gray-600 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;