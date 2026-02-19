import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "Follow on X",
    href: "https://x.com/hanzoai",
    color: "#ffffff",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: "View on GitHub",
    href: "https://github.com/hanzoai",
    color: "#ffffff",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
      </svg>
    ),
    label: "Join Discord",
    href: "https://discord.gg/hanzo",
    color: "#5865F2",
  },
  {
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "Connect on LinkedIn",
    href: "https://linkedin.com/company/hanzoai",
    color: "#0A66C2",
  },
];

const ContactPage = () => {
  const { isDarkMode } = useTheme();
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", subject: "", message: "", inquiryType: "general" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 md:px-8 lg:px-12">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={cn("absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl", isDarkMode ? "bg-white/[0.02]" : "bg-black/[0.02]")} />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6", isDarkMode ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10")}
            >
              <MessageSquare className={cn("w-4 h-4", isDarkMode ? "text-white/60" : "text-black/60")} />
              <span className={cn("text-sm font-medium", isDarkMode ? "text-white/60" : "text-black/60")}>Get in Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={cn("text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto", isDarkMode ? "text-white/50" : "text-black/50")}
            >
              Ready to transform your operations with frontier AI? Our team is here to help you build the future.
            </motion.p>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="pb-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-semibold mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="p-8 rounded-2xl border border-green-500/30 bg-green-500/10 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className={cn("mt-4", isDarkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black")}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
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
                          className={cn("w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all", isDarkMode ? "bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-white/20 focus:border-white/20" : "bg-black/5 border border-black/10 text-black placeholder-black/40 focus:ring-black/20 focus:border-black/20")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
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
                          className={cn("w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all", isDarkMode ? "bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-white/20 focus:border-white/20" : "bg-black/5 border border-black/10 text-black placeholder-black/40 focus:ring-black/20 focus:border-black/20")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-2"
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
                          className={cn("w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all", isDarkMode ? "bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-white/20 focus:border-white/20" : "bg-black/5 border border-black/10 text-black placeholder-black/40 focus:ring-black/20 focus:border-black/20")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-medium mb-2"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className={cn("w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all", isDarkMode ? "bg-white/5 border border-white/10 text-white focus:ring-white/20 focus:border-white/20" : "bg-black/5 border border-black/10 text-black focus:ring-black/20 focus:border-black/20")}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="research">Research Collaboration</option>
                          <option value="enterprise">Enterprise AI</option>
                          <option value="partnership">Partnership</option>
                          <option value="careers">Careers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
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
                        className={cn("w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all", isDarkMode ? "bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-white/20 focus:border-white/20" : "bg-black/5 border border-black/10 text-black placeholder-black/40 focus:ring-black/20 focus:border-black/20")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
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
                        className={cn("w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none", isDarkMode ? "bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-white/20 focus:border-white/20" : "bg-black/5 border border-black/10 text-black placeholder-black/40 focus:ring-black/20 focus:border-black/20")}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn("w-full sm:w-auto rounded-full px-6 disabled:opacity-50 transition-all", isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
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
                className="space-y-8"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    {/* Email */}
                    <a
                      href="mailto:info@hanzo.ai"
                      className={cn("flex items-start gap-4 p-4 rounded-xl transition-all group", isDarkMode ? "border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10" : "border border-black/10 bg-black/5 hover:border-black/20 hover:bg-black/5")}
                    >
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors", isDarkMode ? "bg-white/5 group-hover:bg-white/10" : "bg-black/5 group-hover:bg-black/10")}>
                        <Mail className={cn("w-5 h-5 transition-colors", isDarkMode ? "text-white/60 group-hover:text-white" : "text-black/60 group-hover:text-black")} />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>info@hanzo.ai</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+19137774443"
                      className={cn("flex items-start gap-4 p-4 rounded-xl transition-all group", isDarkMode ? "border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10" : "border border-black/10 bg-black/5 hover:border-black/20 hover:bg-black/5")}
                    >
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors", isDarkMode ? "bg-white/5 group-hover:bg-white/10" : "bg-black/5 group-hover:bg-black/10")}>
                        <Phone className={cn("w-5 h-5 transition-colors", isDarkMode ? "text-white/60 group-hover:text-white" : "text-black/60 group-hover:text-black")} />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>+1 (913) 777-4443</p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className={cn("flex items-start gap-4 p-4 rounded-xl", isDarkMode ? "border border-white/10 bg-white/5" : "border border-black/10 bg-black/5")}>
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", isDarkMode ? "bg-white/5" : "bg-black/5")}>
                        <MapPin className={cn("w-5 h-5", isDarkMode ? "text-white/60" : "text-black/60")} />
                      </div>
                      <div>
                        <p className="font-medium">Headquarters</p>
                        <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                          1824 S. Fairfax Ave<br />
                          Los Angeles, CA 90019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Division Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={cn("p-5 rounded-xl", isDarkMode ? "border border-white/10 bg-white/5" : "border border-black/10 bg-black/5")}>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className={cn("w-4 h-4", isDarkMode ? "text-white/60" : "text-black/60")} />
                      <h3 className="font-medium text-sm">Research Division</h3>
                    </div>
                    <p className={cn("text-xs mb-2", isDarkMode ? "text-white/50" : "text-black/50")}>Academic & industry collaboration</p>
                    <a href="mailto:research@hanzo.ai" className={cn("text-xs transition-colors", isDarkMode ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black")}>
                      research@hanzo.ai
                    </a>
                  </div>
                  <div className={cn("p-5 rounded-xl", isDarkMode ? "border border-white/10 bg-white/5" : "border border-black/10 bg-black/5")}>
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className={cn("w-4 h-4", isDarkMode ? "text-white/60" : "text-black/60")} />
                      <h3 className="font-medium text-sm">Commercial</h3>
                    </div>
                    <p className={cn("text-xs mb-2", isDarkMode ? "text-white/50" : "text-black/50")}>Enterprise AI solutions</p>
                    <a href="mailto:sales@hanzo.ai" className={cn("text-xs transition-colors", isDarkMode ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black")}>
                      sales@hanzo.ai
                    </a>
                  </div>
                </div>

                {/* Cal.com Booking */}
                <div className={cn("rounded-xl overflow-hidden", isDarkMode ? "border border-white/20 bg-white/5" : "border border-black/20 bg-black/5")}>
                  <div className={cn("p-4", isDarkMode ? "border-b border-white/10" : "border-b border-black/10")}>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <h3 className="font-semibold">Schedule a Call</h3>
                    </div>
                    <p className={cn("text-sm mt-1", isDarkMode ? "text-white/50" : "text-black/50")}>
                      Book a meeting with our team
                    </p>
                  </div>
                  <div className="aspect-[4/3] min-h-[300px]">
                    <iframe
                      src={`https://cal.com/hanzo/30min?embed=true&theme=${isDarkMode ? "dark" : "light"}`}
                      className="w-full h-full border-0"
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
        <section className={cn("py-16 px-4 md:px-8 lg:px-12", isDarkMode ? "border-t border-white/10" : "border-t border-black/10")}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-semibold mb-2">
                Connect With Us
              </h2>
              <p className={cn(isDarkMode ? "text-white/50" : "text-black/50")}>
                Follow us on social media to stay updated on the latest developments.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                    className={cn("flex flex-col items-center gap-3 p-4 rounded-xl transition-all group", isDarkMode ? "border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20" : "border border-black/10 bg-black/5 hover:bg-black/5 hover:border-black/20")}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `${social.color}15` }}
                    >
                      <Icon />
                    </div>
                    <span className={cn("text-xs font-medium transition-colors", isDarkMode ? "text-white/50 group-hover:text-white" : "text-black/50 group-hover:text-black")}>
                      {social.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
