"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Microscope, Building2 } from "lucide-react";
import { cn } from '@hanzo/ui'
export default function Contact() {
  return (
    <section id="contact" className={cn(
      "hz-py-7 hz-rel hz-clip hz-transition",
      "hz-bg"
    )}>
      {/* Background decoration */}
      <div className="hz-abs hz-inset hz-no-pointer">
        <div className={cn(
          "hz-center-xy hz-abs hz-r-full hz-blur-bg",
          "hz-bg-surface"
        )} />
      </div>

      <div className="hz-container hz-rel hz-z-raised">
        <div className="hz-align-center hz-mb-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-btn hz-btn-ghost hz-gap-2 hz-mb-5",
              "hz-bg-surface"
            )}
          >
            <Microscope className={cn("hz-sq-2", "hz-fg")} />
            <span className={cn("hz-t-sm hz-w-medium", "hz-fg")}>
              Research Collaboration
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={cn(
              "hz-t-4xl hz-w-bold hz-mb-4",
              "hz-fg"
            )}
          >
            Let's Build Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "hz-container-narrow hz-t-lg",
              "hz-fg"
            )}
          >
            From research collaborations to enterprise AI deployments,
            we partner with teams pushing the boundaries of what's possible
          </motion.p>
        </div>

        <div className="hz-grid hz-grid-2 hz-gap-6 hz-mb-7">
          {/* Research Division */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-glass hz-p-6 hz-r-xl hz-bordered hz-transition",
              "hz-bg-surface hz-hoverable"
            )}
          >
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-5">
              <div className={cn(
                "hz-p-2 hz-r-lg",
                "hz-bg-surface"
              )}>
                <Microscope className={cn("hz-sq-3", "hz-fg")} />
              </div>
              <h3 className={cn(
                "hz-t-2xl hz-w-semibold",
                "hz-fg"
              )}>
                Research Division
              </h3>
            </div>

            <div className="hz-stack-5">
              <div className="">
                <h4 className={cn(
                  "hz-w-semibold hz-mb-1 hz-transition",
                  "hz-fg hz-hoverable"
                )}>
                  Antje Karina Worring
                </h4>
                <p className={cn("hz-t-sm hz-mb-2", "hz-fg")}>
                  Chief Operating Officer
                </p>
                <a
                  href="mailto:a@hanzo.industries"
                  className={cn(
                    "hz-inline hz-ai-center hz-gap-2 hz-transition",
                    "hz-fg hz-hoverable"
                  )}
                >
                  <Mail className="hz-sq-2" />
                  <span className="hz-t-sm">a@hanzo.industries</span>
                </a>
              </div>

              <div className="">
                <h4 className={cn(
                  "hz-w-semibold hz-mb-1 hz-transition",
                  "hz-fg hz-hoverable"
                )}>
                  Research Partnerships
                </h4>
                <p className={cn("hz-t-sm hz-mb-2", "hz-fg")}>
                  Academic & Industry Collaboration
                </p>
                <a
                  href="mailto:research@hanzo.industries"
                  className={cn(
                    "hz-inline hz-ai-center hz-gap-2 hz-transition",
                    "hz-fg hz-hoverable"
                  )}
                >
                  <Mail className="hz-sq-2" />
                  <span className="hz-t-sm">research@hanzo.industries</span>
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
              "hz-glass hz-p-6 hz-r-xl hz-bordered hz-transition",
              "hz-bg-surface hz-hoverable"
            )}
          >
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-5">
              <div className={cn(
                "hz-p-2 hz-r-lg",
                "hz-bg-surface"
              )}>
                <Building2 className={cn("hz-sq-3", "hz-fg")} />
              </div>
              <h3 className={cn(
                "hz-t-2xl hz-w-semibold",
                "hz-fg"
              )}>
                Commercial Division
              </h3>
            </div>

            <div className="hz-stack-5">
              <div className="">
                <h4 className={cn(
                  "hz-w-semibold hz-mb-1 hz-transition",
                  "hz-fg hz-hoverable"
                )}>
                  Zach Kelling
                </h4>
                <p className={cn("hz-t-sm hz-mb-2", "hz-fg")}>
                  Founding CTO
                </p>
                <a
                  href="mailto:zach@hanzo.industries"
                  className={cn(
                    "hz-inline hz-ai-center hz-gap-2 hz-transition",
                    "hz-fg hz-hoverable"
                  )}
                >
                  <Mail className="hz-sq-2" />
                  <span className="hz-t-sm">zach@hanzo.industries</span>
                </a>
              </div>

              <div className="">
                <h4 className={cn(
                  "hz-w-semibold hz-mb-1 hz-transition",
                  "hz-fg hz-hoverable"
                )}>
                  Dave Lorenzini
                </h4>
                <p className={cn("hz-t-sm hz-mb-2", "hz-fg")}>
                  Chief Strategy Officer
                </p>
                <a
                  href="mailto:dave@hanzo.industries"
                  className={cn(
                    "hz-inline hz-ai-center hz-gap-2 hz-transition",
                    "hz-fg hz-hoverable"
                  )}
                >
                  <Mail className="hz-sq-2" />
                  <span className="hz-t-sm">dave@hanzo.industries</span>
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
            "hz-glass hz-p-6 hz-r-xl hz-bordered",
            "hz-bg-surface"
          )}
        >
          <div className="hz-grid hz-grid-3 hz-gap-6">
            <div className="hz-align-center">
              <div className={cn(
                "hz-sq-7 hz-inline hz-ai-center hz-jc-center hz-r-lg hz-mb-4 hz-transition",
                "hz-bg-surface hz-hoverable"
              )}>
                <MapPin className={cn("hz-sq-4", "hz-fg")} />
              </div>
              <h4 className={cn("hz-w-semibold hz-mb-2", "hz-fg")}>
                Corporate Headquarters
              </h4>
              <p className={cn("hz-t-sm", "hz-fg")}>
                1824 S. Fairfax Ave<br />
                Los Angeles, CA 90019<br />
                United States
              </p>
            </div>
            <div className="hz-align-center">
              <div className={cn(
                "hz-sq-7 hz-inline hz-ai-center hz-jc-center hz-r-lg hz-mb-4 hz-transition",
                "hz-bg-surface hz-hoverable"
              )}>
                <Phone className={cn("hz-sq-4", "hz-fg")} />
              </div>
              <h4 className={cn("hz-w-semibold hz-mb-2", "hz-fg")}>
                Secure Line
              </h4>
              <p className={cn("hz-t-sm", "hz-fg")}>
                +1 (913) 777-4443<br />
                Available 24/7
              </p>
            </div>
            <div className="hz-align-center">
              <div className={cn(
                "hz-sq-7 hz-inline hz-ai-center hz-jc-center hz-r-lg hz-mb-4 hz-transition",
                "hz-bg-surface hz-hoverable"
              )}>
                <Mail className={cn("hz-sq-4", "hz-fg")} />
              </div>
              <h4 className={cn("hz-w-semibold hz-mb-2", "hz-fg")}>
                General Inquiries
              </h4>
              <p className={cn("hz-t-sm", "hz-fg")}>
                <a href="mailto:info@hanzo.industries" className={cn("hz-transition", "hz-hoverable")}>info@hanzo.industries</a><br />
                <a href="mailto:contracts@hanzo.industries" className={cn("hz-transition", "hz-hoverable")}>contracts@hanzo.industries</a><br />
                <a href="mailto:security@hanzo.industries" className={cn("hz-transition", "hz-hoverable")}>security@hanzo.industries</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
