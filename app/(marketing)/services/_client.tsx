"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, cn } from '@hanzo/ui'
import { Code, Database, Cloud, Shield, Lightbulb, Users } from "lucide-react";
export default function PageClient() {
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
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      {/* Hero Section */}
      <section className={cn("hz-pt-6 hz-pb-6", "")}>
        <div className="hz-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center"
          >
            <h1 className="hz-t-5xl hz-w-bold hz-mb-5">Professional Services</h1>
            <p className={cn("hz-container-narrow hz-t-xl hz-mb-6", "hz-fg")}>
              From strategy to implementation, we provide end-to-end services to deploy
              AI and modern infrastructure in production
            </p>
            <div className="hz-row hz-jc-center hz-gap-4">
              <Link href="/contact">
                <Button size="lg" className={cn("hz-bg-inverse hz-hoverable")}>
                  Get Started
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="hz-py-7">
        <div className="hz-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center hz-mb-7"
          >
            <h2 className="hz-t-4xl hz-w-bold hz-mb-4">
              Comprehensive Service Offerings
            </h2>
            <p className={cn("hz-container-narrow hz-t-xl", "hz-fg")}>
              Expert services across the entire technology stack, delivered by our team
              of specialists
            </p>
          </motion.div>

          <div className="hz-grid hz-grid-3 hz-gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn("hz-p-6 hz-r-lg hz-bordered hz-transition", "hz-bg-surface")}
                >
                  <div className={cn("hz-sq-7 hz-r-lg hz-row hz-ai-center hz-jc-center hz-mb-5", "hz-bg-inverse")}>
                    <Icon className={cn("hz-sq-4", "hz-fg")} />
                  </div>
                  <h3 className="hz-t-xl hz-w-semibold hz-mb-3">{service.title}</h3>
                  <p className={cn("hz-mb-5", "hz-fg")}>{service.description}</p>
                  <ul className="hz-stack-2">
                    {service.offerings.map((offering) => (
                      <li key={offering} className={cn("hz-row hz-ai-start hz-t-sm", "hz-fg")}>
                        <span className="hz-mr-2">*</span>
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
      <section className={cn("hz-py-7", "hz-bg-surface")}>
        <div className="hz-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center hz-mb-7"
          >
            <h2 className="hz-t-4xl hz-w-bold hz-mb-4">Flexible Engagement Models</h2>
            <p className={cn("hz-container-narrow hz-t-xl", "hz-fg")}>
              Choose the engagement model that best fits your needs and budget
            </p>
          </motion.div>

          <div className="hz-grid hz-grid-3 hz-gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn("hz-p-6 hz-r-lg hz-shadow", "hz-bg-surface")}
              >
                <h3 className="hz-t-2xl hz-w-semibold hz-mb-4">{model.title}</h3>
                <p className={cn("hz-mb-4", "hz-fg")}>{model.description}</p>
                <p className={cn("hz-t-sm", "hz-fg")}>
                  <strong>Ideal for:</strong> {model.ideal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={cn("hz-py-7", "hz-bg-surface")}>
        <div className="hz-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-align-center hz-mb-7"
          >
            <h2 className={cn("hz-t-4xl hz-w-bold hz-mb-4", "hz-fg")}>Our Process</h2>
            <p className={cn("hz-container-narrow hz-t-xl", "hz-fg")}>
              A proven methodology that ensures successful outcomes
            </p>
          </motion.div>

          <div className="hz-grid hz-grid-4 hz-gap-6">
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
                className="hz-align-center"
              >
                <div className={cn("hz-t-5xl hz-w-bold hz-mb-4", "hz-fg-soft")}>{phase.step}</div>
                <h3 className={cn("hz-t-xl hz-w-semibold hz-mb-2", "hz-fg")}>{phase.title}</h3>
                <p className={cn("hz-fg")}>{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hz-py-7">
        <div className="hz-container-narrow hz-align-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="hz-t-4xl hz-w-bold hz-mb-5">
              Ready to Transform Your Business?
            </h2>
            <p className={cn("hz-t-xl hz-mb-6", "hz-fg")}>
              Let's discuss how our services can help you achieve your goals
            </p>
            <Button size="lg" className={cn("hz-bg-inverse hz-hoverable")}>
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
