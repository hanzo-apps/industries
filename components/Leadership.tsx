"use client";

import { motion } from "framer-motion";
import { cn } from '@hanzo/ui'
import site from "@/site.config";
export default function Leadership() {
  const leaders = [
    {
      name: "Zach Kelling",
      title: "Founding CTO",
      bio: "Technical founder driving Hanzo's mission to build frontier AI. Leads architecture, product vision, and technical strategy across the full stack.",
      image: "/leadership/zach-kelling.png"
    },
    {
      name: "Dave Lorenzini",
      title: "Chief Strategy Officer",
      bio: "Strategy visionary with decades of experience in immersive computing and AI. Leads strategic planning, partnerships, and long-term company direction.",
      image: "/leadership/dave-lorenzini.jpg"
    },
    {
      name: "Michael Kelling",
      title: "President",
      bio: "Strategic operations leader overseeing commercial expansion and enterprise partnerships. Expert in scaling AI solutions for global impact.",
      image: "/leadership/michael-kelling.png"
    },
    {
      name: "Antje Worring",
      title: "Chief Operating Officer",
      bio: "Operational excellence leader ensuring seamless execution across all divisions. Drives strategic initiatives and organizational effectiveness.",
      image: "/leadership/antje-worring.png"
    },
    {
      name: "Vincent Butta",
      title: "Chief Revenue Officer",
      bio: "Driving revenue growth and commercial strategy. Expert in scaling enterprise sales and building high-performance go-to-market organizations.",
      image: "/leadership/vincent-butta.jpg"
    },
    {
      name: 'Major "Dream" Williams',
      title: "Chief Visionary Officer",
      bio: "Visionary leader with diverse talents in finance, entrepreneurship, and technology. Inspires and collaborates with international thought leaders to transform challenges into opportunities.",
      image: "/leadership/major-williams.png"
    },
    {
      name: "Danielle Savage",
      title: "Chief Brand Officer",
      bio: "Brand visionary elevating Hanzo's global presence and market positioning. Expert in creating compelling brand narratives and customer experiences.",
      image: "/leadership/danielle-savage.png"
    },
    {
      name: "Ashley Kathleen Christie",
      title: "Chief of Staff",
      bio: "Strategic advisor ensuring organizational alignment and leadership effectiveness. Expert in executive operations and cross-functional coordination.",
      image: "/leadership/ashley-christie.png"
    },
    {
      name: "Anastasia Zacharaoff",
      title: "VP Engineering",
      bio: "Engineering leader driving technical excellence and innovation. Expert in building high-performing engineering teams and scalable systems.",
      image: "/leadership/anastasia-zacharaoff.png"
    },
    {
      name: "Rob Ruiz",
      title: "VP Strategy",
      bio: "Strategic planning expert developing business intelligence and growth initiatives. Focused on market analysis and strategic partnerships.",
      image: "/leadership/rob-ruiz.png"
    },
    {
      name: "Marcus White",
      title: "VP Research",
      bio: "Research leader advancing AI capabilities and innovation. Expert in applied research and bringing cutting-edge technology to production.",
      image: "/leadership/marcus-white.png"
    },
    {
      name: "Jackson Mori",
      title: "VP Engineering",
      bio: "Engineering leader building scalable distributed systems. Focused on performance, reliability, and developer experience.",
      image: "/leadership/jackson-mori.png"
    },
    {
      name: "Ole Brereton",
      title: "Executive VP",
      bio: "Senior executive driving strategic initiatives and high-impact partnerships across the organization.",
      image: "/leadership/ole-brereton.png"
    }
  ];

  return (
    <section className={cn(
      "hz-py-7 hz-transition",
      "hz-bg-surface"
    )}>
      <div className="hz-container">
        <div className="hz-align-center hz-mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "hz-t-4xl hz-w-bold hz-mb-4",
              "hz-fg"
            )}
          >
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "hz-container-narrow hz-t-xl",
              "hz-fg"
            )}
          >
            Our leadership team combines deep AI expertise with operational excellence,
            driving innovation in frontier AI research while maintaining focus on safety and alignment
          </motion.p>
        </div>

        <div className="hz-grid hz-grid-5 hz-gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="hz-align-center"
            >
              <div className="hz-mb-4">
                <div className={cn(
                  "hz-sq-8 hz-mx-auto hz-r-full hz-clip hz-ring hz-transition",
                  "hz-bg-surface"
                )}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="hz-w-full hz-h-full hz-object-cover hz-transition"
                  />
                </div>
              </div>
              <h3 className={cn(
                "hz-t-lg hz-w-semibold hz-mb-1",
                "hz-fg"
              )}>
                {leader.name}
              </h3>
              <p className={cn(
                "hz-t-sm hz-w-medium hz-mb-3",
                "hz-fg"
              )}>
                {leader.title}
              </p>
              <p className={cn(
                "hz-t-sm",
                "hz-fg"
              )}>
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn(
            "hz-grid hz-grid-3 hz-mt-7 hz-gap-6 hz-border-t hz-pt-6",
            ""
          )}
        >
          <div className="hz-align-center">
            <h4 className={cn(
              "hz-t-3xl hz-w-bold hz-mb-2",
              "hz-fg"
            )}>
              {site.brand.ossRepos}
            </h4>
            <p className={"hz-fg"}>
              OSS Projects
            </p>
          </div>
          <div className="hz-align-center">
            <h4 className={cn(
              "hz-t-3xl hz-w-bold hz-mb-2",
              "hz-fg"
            )}>
              130+
            </h4>
            <p className={"hz-fg"}>
              Research Papers
            </p>
          </div>
          <div className="hz-align-center">
            <h4 className={cn(
              "hz-t-3xl hz-w-bold hz-mb-2",
              "hz-fg"
            )}>
              100+
            </h4>
            <p className={"hz-fg"}>
              AI Model Weights
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
