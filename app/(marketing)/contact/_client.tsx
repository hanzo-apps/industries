"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  Calendar,
  Shield,
  Building2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, cn } from '@hanzo/ui'

const socialLinks = [
  {
    icon: () => (
      <svg className="hz-sq-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "Follow on X",
    href: "https://x.com/hanzoai",
    color: "#ffffff",
  },
  {
    icon: () => (
      <svg className="hz-sq-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: "View on GitHub",
    href: "https://github.com/hanzoai",
    color: "#ffffff",
  },
  {
    icon: () => (
      <svg className="hz-sq-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
      </svg>
    ),
    label: "Join Discord",
    href: "https://discord.gg/hanzo",
    color: "#ffffff",
  },
  {
    icon: () => (
      <svg className="hz-sq-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "Connect on LinkedIn",
    href: "https://linkedin.com/company/hanzoai",
    color: "#ffffff",
  },
];

export default function PageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.hanzo.ai/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", subject: "", message: "", inquiryType: "general" });
    } catch {
      // Fallback: open Cal.com scheduling link with context
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        notes: `${formData.company ? formData.company + " — " : ""}${formData.subject}\n\n${formData.message}`,
      });
      window.open(`https://cal.com/hanzo/30min?${params.toString()}`, "_blank");
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main>
        {/* Hero Section */}
        <section className="hz-rel hz-pt-6 hz-pb-6 hz-px-4">
          {/* Background decoration */}
          <div className="hz-abs hz-inset hz-no-pointer">
            <div className={cn("hz-center-x hz-abs hz-r-full hz-blur-bg", "hz-bg-surface")} />
          </div>

          <div className="hz-container-wide hz-align-center hz-rel hz-z-raised">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn("hz-btn hz-btn-ghost hz-gap-2 hz-mb-5", "hz-bg-surface hz-bordered")}
            >
              <MessageSquare className={cn("hz-sq-2", "hz-fg")} />
              <span className={cn("hz-t-sm hz-w-medium", "hz-fg")}>Get in Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="hz-t-4xl hz-w-bold hz-tracking-tight hz-mb-5"
            >
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={cn("hz-container-narrow hz-mw-md hz-t-lg hz-leading-relaxed", "hz-fg")}
            >
              Ready to transform your operations with frontier AI? Our team is here to help you build the future.
            </motion.p>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="hz-pb-6 hz-px-4">
          <div className="hz-container-wide">
            <div className="hz-grid hz-grid-2 hz-gap-7">
              {/* Left Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="hz-t-xl hz-w-semibold hz-mb-5">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="hz-card hz-align-center">
                    <div className="hz-sq-7 hz-r-full hz-bg-surface hz-row hz-ai-center hz-jc-center hz-mx-auto hz-mb-4">
                      <Send className="hz-sq-4 hz-fg" />
                    </div>
                    <h3 className="hz-t-lg hz-w-semibold hz-mb-2">
                      Message Sent!
                    </h3>
                    <p className={cn("hz-t-sm", "hz-fg")}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className={cn("hz-mt-4", "hz-bg-surface hz-fg hz-hoverable")}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="hz-stack-4">
                    <div className="hz-grid hz-grid-2 hz-gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="hz-t-sm hz-w-medium hz-mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={cn("hz-w-full hz-r-lg hz-px-4 hz-py-3 hz-t-sm hz-transition", "hz-bg-surface hz-bordered hz-fg")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="hz-t-sm hz-w-medium hz-mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@company.com"
                          className={cn("hz-w-full hz-r-lg hz-px-4 hz-py-3 hz-t-sm hz-transition", "hz-bg-surface hz-bordered hz-fg")}
                        />
                      </div>
                    </div>

                    <div className="hz-grid hz-grid-2 hz-gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="hz-t-sm hz-w-medium hz-mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your organization"
                          className={cn("hz-w-full hz-r-lg hz-px-4 hz-py-3 hz-t-sm hz-transition", "hz-bg-surface hz-bordered hz-fg")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="hz-t-sm hz-w-medium hz-mb-2"
                        >
                          Inquiry Type
                        </label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                        >
                          <SelectTrigger id="inquiryType" className="hz-w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="research">Research Collaboration</SelectItem>
                            <SelectItem value="enterprise">Enterprise AI</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="hz-t-sm hz-w-medium hz-mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                        className={cn("hz-w-full hz-r-lg hz-px-4 hz-py-3 hz-t-sm hz-transition", "hz-bg-surface hz-bordered hz-fg")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="hz-t-sm hz-w-medium hz-mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className={cn("hz-w-full hz-r-lg hz-px-4 hz-py-3 hz-t-sm hz-transition", "hz-bg-surface hz-bordered hz-fg")}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn("hz-w-full hz-r-full hz-px-5 hz-transition", "hz-bg-inverse hz-hoverable")}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="hz-sq-2 hz-mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Right Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hz-stack-6"
              >
                <div>
                  <h2 className="hz-t-xl hz-w-semibold hz-mb-5">
                    Contact Information
                  </h2>

                  <div className="hz-stack-4">
                    {/* Email */}
                    <a
                      href="mailto:info@hanzo.ai"
                      className={cn("hz-row hz-ai-start hz-gap-4 hz-p-4 hz-r-lg hz-transition", "hz-bordered hz-bg-surface hz-hoverable")}
                    >
                      <div className={cn("hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center hz-none hz-transition", "hz-bg-surface hz-hoverable")}>
                        <Mail className={cn("hz-sq-3 hz-transition", "hz-fg hz-hoverable")} />
                      </div>
                      <div>
                        <p className="hz-w-medium">Email</p>
                        <p className={cn("hz-t-sm", "hz-fg")}>info@hanzo.ai</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+19137774443"
                      className={cn("hz-row hz-ai-start hz-gap-4 hz-p-4 hz-r-lg hz-transition", "hz-bordered hz-bg-surface hz-hoverable")}
                    >
                      <div className={cn("hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center hz-none hz-transition", "hz-bg-surface hz-hoverable")}>
                        <Phone className={cn("hz-sq-3 hz-transition", "hz-fg hz-hoverable")} />
                      </div>
                      <div>
                        <p className="hz-w-medium">Phone</p>
                        <p className={cn("hz-t-sm", "hz-fg")}>+1 (913) 777-4443</p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className={cn("hz-row hz-ai-start hz-gap-4 hz-p-4 hz-r-lg", "hz-bordered hz-bg-surface")}>
                      <div className={cn("hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center hz-none", "hz-bg-surface")}>
                        <MapPin className={cn("hz-sq-3", "hz-fg")} />
                      </div>
                      <div>
                        <p className="hz-w-medium">Headquarters</p>
                        <p className={cn("hz-t-sm", "hz-fg")}>
                          1824 S. Fairfax Ave<br />
                          Los Angeles, CA 90019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Division Cards */}
                <div className="hz-grid hz-grid-2 hz-gap-4">
                  <div className={cn("hz-p-4 hz-r-lg", "hz-bordered hz-bg-surface")}>
                    <div className="hz-row hz-ai-center hz-gap-2 hz-mb-3">
                      <Shield className={cn("hz-sq-2", "hz-fg")} />
                      <h3 className="hz-w-medium hz-t-sm">Research Division</h3>
                    </div>
                    <p className={cn("hz-t-xs hz-mb-2", "hz-fg")}>Academic & industry collaboration</p>
                    <a href="mailto:research@hanzo.ai" className={cn("hz-t-xs hz-transition", "hz-fg-soft hz-hoverable")}>
                      research@hanzo.ai
                    </a>
                  </div>
                  <div className={cn("hz-p-4 hz-r-lg", "hz-bordered hz-bg-surface")}>
                    <div className="hz-row hz-ai-center hz-gap-2 hz-mb-3">
                      <Building2 className={cn("hz-sq-2", "hz-fg")} />
                      <h3 className="hz-w-medium hz-t-sm">Commercial</h3>
                    </div>
                    <p className={cn("hz-t-xs hz-mb-2", "hz-fg")}>Enterprise AI solutions</p>
                    <a href="mailto:sales@hanzo.ai" className={cn("hz-t-xs hz-transition", "hz-fg-soft hz-hoverable")}>
                      sales@hanzo.ai
                    </a>
                  </div>
                </div>

                {/* Cal.com Booking */}
                <div className={cn("hz-r-lg hz-clip", "hz-bordered hz-bg-surface")}>
                  <div className={cn("hz-p-4", "hz-border-b")}>
                    <div className="hz-row hz-ai-center hz-gap-3">
                      <Calendar className="hz-sq-3" />
                      <h3 className="hz-w-semibold">Schedule a Call</h3>
                    </div>
                    <p className={cn("hz-t-sm hz-mt-1", "hz-fg")}>
                      Book a meeting with our team
                    </p>
                  </div>
                  <div className="">
                    <iframe
                      src="https://cal.com/hanzo/30min?embed=true&theme=dark"
                      className="hz-w-full hz-h-full hz-border-none"
                      allow="payment"
                      title="Schedule a call with Hanzo"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Connect With Us */}
        <section className={cn("hz-py-7 hz-px-4", "hz-border-t")}>
          <div className="hz-container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hz-align-center hz-mb-6"
            >
              <h2 className="hz-t-2xl hz-w-semibold hz-mb-2">
                Connect With Us
              </h2>
              <p className={cn("hz-fg")}>
                Follow us on social media to stay updated on the latest developments.
              </p>
            </motion.div>

            <div className="hz-grid hz-grid-4 hz-gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={cn("hz-col hz-ai-center hz-gap-3 hz-p-4 hz-r-lg hz-transition", "hz-bordered hz-bg-surface hz-hoverable")}
                  >
                    <div
                      className="hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center hz-transition"
                      style={{ backgroundColor: `${social.color}15` }}
                    >
                      <Icon />
                    </div>
                    <span className={cn("hz-t-xs hz-w-medium hz-transition", "hz-fg hz-hoverable")}>
                      {social.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
