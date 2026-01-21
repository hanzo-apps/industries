import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ExternalLink, FileText, Megaphone } from "lucide-react";

const announcements = [
  {
    date: "January 2025",
    year: "2025",
    items: [
      {
        day: "15",
        title: "Hanzo Launches ZEN Platform",
        description: "Hanzo Industries announces the general availability of ZEN, its next-generation AI orchestration platform designed for enterprise deployments at scale.",
        type: "Product Launch",
        link: "#",
      },
      {
        day: "10",
        title: "Series B Funding Round Complete",
        description: "Hanzo raises $50M in Series B funding led by Andreessen Horowitz to accelerate AI infrastructure development.",
        type: "Funding",
        link: "#",
      },
      {
        day: "05",
        title: "Partnership with Department of Defense",
        description: "Hanzo announces strategic partnership to provide secure AI solutions for defense applications.",
        type: "Partnership",
        link: "#",
      },
    ],
  },
  {
    date: "December 2024",
    year: "2024",
    items: [
      {
        day: "20",
        title: "KOAN 2.0 Released",
        description: "Major update to our enterprise knowledge management platform brings advanced RAG capabilities and improved performance.",
        type: "Product Update",
        link: "#",
      },
      {
        day: "15",
        title: "Hanzo Reaches 10,000 Customers",
        description: "Company celebrates milestone of serving over 10,000 enterprise customers worldwide.",
        type: "Milestone",
        link: "#",
      },
      {
        day: "08",
        title: "New Research Paper Published",
        description: "Our research team publishes groundbreaking work on efficient transformer architectures in Nature Machine Intelligence.",
        type: "Research",
        link: "#",
      },
    ],
  },
  {
    date: "November 2024",
    year: "2024",
    items: [
      {
        day: "28",
        title: "Hanzo Dev 2.0 Announced",
        description: "Next-generation AI coding assistant with advanced multimodal capabilities and improved context handling.",
        type: "Product Launch",
        link: "#",
      },
      {
        day: "15",
        title: "AWS Partnership Expansion",
        description: "Extended partnership with AWS brings Hanzo AI models to Amazon Bedrock marketplace.",
        type: "Partnership",
        link: "#",
      },
      {
        day: "01",
        title: "Los Angeles HQ Expansion",
        description: "Hanzo expands headquarters to accommodate growing team and new research facilities.",
        type: "Company News",
        link: "#",
      },
    ],
  },
];

const pressReleases = [
  {
    title: "Hanzo Industries Announces ZEN Platform General Availability",
    date: "January 15, 2025",
    summary: "Enterprise AI orchestration platform now available to all customers with enhanced security features.",
  },
  {
    title: "Hanzo Raises $50M Series B to Accelerate AI Infrastructure",
    date: "January 10, 2025",
    summary: "Funding round led by Andreessen Horowitz to expand engineering team and accelerate product development.",
  },
  {
    title: "Hanzo Partners with Department of Defense for Secure AI Solutions",
    date: "January 5, 2025",
    summary: "Multi-year agreement to provide classified AI infrastructure for defense applications.",
  },
  {
    title: "KOAN 2.0: Redefining Enterprise Knowledge Management",
    date: "December 20, 2024",
    summary: "Major platform update brings 3x faster search, improved accuracy, and new collaboration features.",
  },
];

const typeColors: Record<string, string> = {
  "Product Launch": "bg-[#fd4444]",
  "Funding": "bg-green-500",
  "Partnership": "bg-blue-500",
  "Product Update": "bg-purple-500",
  "Milestone": "bg-yellow-500",
  "Research": "bg-cyan-500",
  "Company News": "bg-gray-500",
};

const News = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fd4444]/10 border border-[#fd4444]/20 rounded-full mb-6">
                <Megaphone className="w-4 h-4 text-[#fd4444]" />
                <span className="text-[#fd4444] text-sm font-medium">News & Announcements</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Latest from Hanzo
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Stay up to date with product launches, company milestones, partnerships, and research breakthroughs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12"
            >
              Timeline
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-800" />

              {announcements.map((month, monthIndex) => (
                <div key={month.date} className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center mb-8"
                  >
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#fd4444] rounded-full border-4 border-black" />
                    <div className="ml-8 md:ml-0 md:absolute md:left-1/2 md:transform md:translate-x-6">
                      <span className="text-xl font-bold text-white">{month.date}</span>
                    </div>
                  </motion.div>

                  <div className="space-y-6 ml-8 md:ml-0">
                    {month.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`md:w-[calc(50%-2rem)] ${
                          itemIndex % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        }`}
                      >
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#fd4444]/50 transition-colors group">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-2 py-1 text-xs font-medium text-white rounded ${typeColors[item.type] || "bg-gray-600"}`}>
                              {item.type}
                            </span>
                            <span className="text-gray-500 text-sm flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {month.date.split(" ")[0]} {item.day}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#fd4444] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                          <a
                            href={item.link}
                            className="text-[#fd4444] text-sm font-medium flex items-center gap-1 hover:underline"
                          >
                            Read more
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#fd4444]" />
                <h2 className="text-3xl font-bold text-white">Press Releases</h2>
              </div>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                View All
              </Button>
            </motion.div>

            <div className="grid gap-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#fd4444]/50 transition-colors group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm">{release.date}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[#fd4444] transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{release.summary}</p>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-[#fd4444] hover:text-[#fd4444] hover:bg-[#fd4444]/10 whitespace-nowrap"
                    >
                      Read Release
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Inquiries
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                For press inquiries, interviews, or additional information, please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:press@hanzo.ai">
                  <Button className="bg-[#fd4444] hover:bg-[#fd4444]/90 text-white">
                    Contact Press Team
                  </Button>
                </a>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Download Press Kit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
