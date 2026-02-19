
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/constants/navigation";
import { ChevronRight } from "lucide-react";
import { getIcon } from "@/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Solutions = () => {
  const { isDarkMode } = useTheme();
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 6) + 6 // Show 6 more items each time
    }));
  };

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      {/* Hero Section with Gradient Background */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Radial gradient background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, #fd4444, transparent)'
          }}
        />
        {/* Blur effect orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{
            background: '#fd4444',
            filter: 'blur(100px)'
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: '#fd4444',
            filter: 'blur(100px)'
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className={cn(
              "text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent",
              isDarkMode ? "bg-gradient-to-b from-white to-white/70" : "bg-gradient-to-b from-black to-black/70"
            )}>
              Solutions for Every Industry
            </h1>
            <p className={cn("text-lg md:text-xl max-w-2xl mx-auto", isDarkMode ? "text-white/50" : "text-black/50")}>
              Explore our comprehensive suite of solutions designed to transform businesses
              across industries and capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {solutions.map((section) => {
            const displayCount = expandedSections[section.title] || 6;
            const hasMore = section.items.length > displayCount;
            const displayItems = section.items.slice(0, displayCount);

            return (
              <div key={section.title} className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence initial={false}>
                    {displayItems.map((item, index) => {
                      const Icon = getIcon(item);
                      return (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className={cn(
                            "relative group rounded-xl border p-6 backdrop-blur-sm overflow-hidden",
                            isDarkMode ? "border-white/10 bg-black/50" : "border-black/10 bg-white/50"
                          )}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                              <Icon className="h-6 w-6 text-purple-400" strokeWidth={1.5} />
                              <ChevronRight className={cn("h-5 w-5 group-hover:text-purple-400 transition-colors", isDarkMode ? "text-white/40" : "text-black/40")} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                              {item}
                            </h3>
                            <p className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                              Explore our solutions for {item.toLowerCase()} and discover how we can
                              help transform your business.
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
                {hasMore && (
                  <motion.div
                    className="text-center mt-8"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
                    >
                      View More {section.title}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </motion.div>
                )}
              </div>
            );
          })}

          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className={cn("mb-8", isDarkMode ? "text-white/50" : "text-black/50")}>
                Connect with our team to learn how our solutions can help you achieve your goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
