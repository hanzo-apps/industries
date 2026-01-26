import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Microscope, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Microscope className="w-4 h-4 text-white/60" />
            <span className="text-sm font-medium text-white/60">Research Collaboration</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let's Build Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-3xl mx-auto"
          >
            From research collaborations to enterprise AI deployments,
            we partner with teams pushing the boundaries of what's possible
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Research Division */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/5">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Research Division</h3>
            </div>

            <div className="space-y-6">
              <div className="group">
                <h4 className="font-semibold text-white mb-1 group-hover:text-white/80 transition-colors">
                  Antje Karina Worring
                </h4>
                <p className="text-sm text-neutral-400 mb-2">Chief Operating Officer</p>
                <a
                  href="mailto:a@hanzo.industries"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">a@hanzo.industries</span>
                </a>
              </div>

              <div className="group">
                <h4 className="font-semibold text-white mb-1 group-hover:text-white/80 transition-colors">
                  Research Partnerships
                </h4>
                <p className="text-sm text-neutral-400 mb-2">Academic & Industry Collaboration</p>
                <a
                  href="mailto:research@hanzo.industries"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">research@hanzo.industries</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Commercial Division */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/5">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Commercial Division</h3>
            </div>

            <div className="space-y-6">
              <div className="group">
                <h4 className="font-semibold text-white mb-1 group-hover:text-white/80 transition-colors">
                  Zach Kelling
                </h4>
                <p className="text-sm text-neutral-400 mb-2">Founder & Chief Executive Officer</p>
                <a
                  href="mailto:zach@hanzo.industries"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">zach@hanzo.industries</span>
                </a>
              </div>

              <div className="group">
                <h4 className="font-semibold text-white mb-1 group-hover:text-white/80 transition-colors">
                  Dave Lorenzini
                </h4>
                <p className="text-sm text-neutral-400 mb-2">Chief Technology Officer</p>
                <a
                  href="mailto:dave@hanzo.industries"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">dave@hanzo.industries</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 group-hover:bg-white/10 transition-colors">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Corporate Headquarters</h4>
              <p className="text-sm text-neutral-400">
                1824 S. Fairfax Ave<br />
                Los Angeles, CA 90019<br />
                United States
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 group-hover:bg-white/10 transition-colors">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Secure Line</h4>
              <p className="text-sm text-neutral-400">
                +1 (913) 777-4443<br />
                Available 24/7
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 group-hover:bg-white/10 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">General Inquiries</h4>
              <p className="text-sm text-neutral-400">
                <a href="mailto:info@hanzo.industries" className="hover:text-white transition-colors">info@hanzo.industries</a><br />
                <a href="mailto:contracts@hanzo.industries" className="hover:text-white transition-colors">contracts@hanzo.industries</a><br />
                <a href="mailto:security@hanzo.industries" className="hover:text-white transition-colors">security@hanzo.industries</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
