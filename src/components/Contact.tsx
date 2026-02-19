import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Microscope, Building2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="contact" className={cn(
      "py-24 relative overflow-hidden transition-colors duration-300",
      isDarkMode ? "bg-black" : "bg-white"
    )}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl",
          isDarkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6",
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            )}
          >
            <Microscope className={cn("w-4 h-4", isDarkMode ? "text-white/60" : "text-black/60")} />
            <span className={cn("text-sm font-medium", isDarkMode ? "text-white/60" : "text-black/60")}>
              Research Collaboration
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={cn(
              "text-4xl md:text-5xl font-bold mb-4",
              isDarkMode ? "text-white" : "text-black"
            )}
          >
            Let's Build Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-lg max-w-3xl mx-auto",
              isDarkMode ? "text-white/50" : "text-black/50"
            )}
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
            className={cn(
              "backdrop-blur-sm p-8 rounded-2xl border transition-colors",
              isDarkMode
                ? "bg-neutral-900/50 border-white/10 hover:border-white/20"
                : "bg-neutral-50 border-black/10 hover:border-black/20"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={cn(
                "p-2 rounded-lg",
                isDarkMode ? "bg-white/5" : "bg-black/5"
              )}>
                <Microscope className={cn("w-5 h-5", isDarkMode ? "text-white" : "text-black")} />
              </div>
              <h3 className={cn(
                "text-2xl font-semibold",
                isDarkMode ? "text-white" : "text-black"
              )}>
                Research Division
              </h3>
            </div>

            <div className="space-y-6">
              <div className="group">
                <h4 className={cn(
                  "font-semibold mb-1 transition-colors",
                  isDarkMode ? "text-white group-hover:text-white/80" : "text-black group-hover:text-black/80"
                )}>
                  Antje Karina Worring
                </h4>
                <p className={cn("text-sm mb-2", isDarkMode ? "text-white/50" : "text-black/50")}>
                  Chief Operating Officer
                </p>
                <a
                  href="mailto:a@hanzo.industries"
                  className={cn(
                    "inline-flex items-center gap-2 transition-colors",
                    isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black"
                  )}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">a@hanzo.industries</span>
                </a>
              </div>

              <div className="group">
                <h4 className={cn(
                  "font-semibold mb-1 transition-colors",
                  isDarkMode ? "text-white group-hover:text-white/80" : "text-black group-hover:text-black/80"
                )}>
                  Research Partnerships
                </h4>
                <p className={cn("text-sm mb-2", isDarkMode ? "text-white/50" : "text-black/50")}>
                  Academic & Industry Collaboration
                </p>
                <a
                  href="mailto:research@hanzo.industries"
                  className={cn(
                    "inline-flex items-center gap-2 transition-colors",
                    isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black"
                  )}
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
            className={cn(
              "backdrop-blur-sm p-8 rounded-2xl border transition-colors",
              isDarkMode
                ? "bg-neutral-900/50 border-white/10 hover:border-white/20"
                : "bg-neutral-50 border-black/10 hover:border-black/20"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={cn(
                "p-2 rounded-lg",
                isDarkMode ? "bg-white/5" : "bg-black/5"
              )}>
                <Building2 className={cn("w-5 h-5", isDarkMode ? "text-white" : "text-black")} />
              </div>
              <h3 className={cn(
                "text-2xl font-semibold",
                isDarkMode ? "text-white" : "text-black"
              )}>
                Commercial Division
              </h3>
            </div>

            <div className="space-y-6">
              <div className="group">
                <h4 className={cn(
                  "font-semibold mb-1 transition-colors",
                  isDarkMode ? "text-white group-hover:text-white/80" : "text-black group-hover:text-black/80"
                )}>
                  Zach Kelling
                </h4>
                <p className={cn("text-sm mb-2", isDarkMode ? "text-white/50" : "text-black/50")}>
                  Founder & Chief Executive Officer
                </p>
                <a
                  href="mailto:zach@hanzo.industries"
                  className={cn(
                    "inline-flex items-center gap-2 transition-colors",
                    isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black"
                  )}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">zach@hanzo.industries</span>
                </a>
              </div>

              <div className="group">
                <h4 className={cn(
                  "font-semibold mb-1 transition-colors",
                  isDarkMode ? "text-white group-hover:text-white/80" : "text-black group-hover:text-black/80"
                )}>
                  Dave Lorenzini
                </h4>
                <p className={cn("text-sm mb-2", isDarkMode ? "text-white/50" : "text-black/50")}>
                  Chief Technology Officer
                </p>
                <a
                  href="mailto:dave@hanzo.industries"
                  className={cn(
                    "inline-flex items-center gap-2 transition-colors",
                    isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black"
                  )}
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
          className={cn(
            "backdrop-blur-sm p-8 rounded-2xl border",
            isDarkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className={cn(
                "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors",
                isDarkMode
                  ? "bg-white/5 group-hover:bg-white/10"
                  : "bg-black/5 group-hover:bg-black/10"
              )}>
                <MapPin className={cn("w-6 h-6", isDarkMode ? "text-white" : "text-black")} />
              </div>
              <h4 className={cn("font-semibold mb-2", isDarkMode ? "text-white" : "text-black")}>
                Corporate Headquarters
              </h4>
              <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                1824 S. Fairfax Ave<br />
                Los Angeles, CA 90019<br />
                United States
              </p>
            </div>
            <div className="text-center group">
              <div className={cn(
                "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors",
                isDarkMode
                  ? "bg-white/5 group-hover:bg-white/10"
                  : "bg-black/5 group-hover:bg-black/10"
              )}>
                <Phone className={cn("w-6 h-6", isDarkMode ? "text-white" : "text-black")} />
              </div>
              <h4 className={cn("font-semibold mb-2", isDarkMode ? "text-white" : "text-black")}>
                Secure Line
              </h4>
              <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                +1 (913) 777-4443<br />
                Available 24/7
              </p>
            </div>
            <div className="text-center group">
              <div className={cn(
                "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors",
                isDarkMode
                  ? "bg-white/5 group-hover:bg-white/10"
                  : "bg-black/5 group-hover:bg-black/10"
              )}>
                <Mail className={cn("w-6 h-6", isDarkMode ? "text-white" : "text-black")} />
              </div>
              <h4 className={cn("font-semibold mb-2", isDarkMode ? "text-white" : "text-black")}>
                General Inquiries
              </h4>
              <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                <a href="mailto:info@hanzo.industries" className={cn("transition-colors", isDarkMode ? "hover:text-white" : "hover:text-black")}>info@hanzo.industries</a><br />
                <a href="mailto:contracts@hanzo.industries" className={cn("transition-colors", isDarkMode ? "hover:text-white" : "hover:text-black")}>contracts@hanzo.industries</a><br />
                <a href="mailto:security@hanzo.industries" className={cn("transition-colors", isDarkMode ? "hover:text-white" : "hover:text-black")}>security@hanzo.industries</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
