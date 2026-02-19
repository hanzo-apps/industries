import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const HanzoLogo = ({ className, fill }: { className?: string; fill: string }) => (
  <svg className={className} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.21 67V44.6369H0V67H22.21Z" fill={fill} />
    <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill={fill} fillOpacity="0.6" />
    <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill={fill} />
    <path d="M22.21 0H0V22.3184H22.21V0Z" fill={fill} />
    <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill={fill} />
    <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill={fill} fillOpacity="0.6" />
    <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill={fill} />
  </svg>
);

const products = [
  { name: "ZEN", description: "Frontier AI models (600M–480B)", link: "/products/zen", category: "AI" },
  { name: "KOAN", description: "Enterprise knowledge management", link: "/products/koan", category: "AI" },
  { name: "HANZO AI", description: "Comprehensive AI platform", link: "/products/hanzo-ai", category: "AI" },
  { name: "HANZO DX", description: "Developer experience platform", link: "/products/hanzo-dx", category: "Developer" },
  { name: "HANZO ML", description: "ML operations platform", link: "/products/hanzo-ml", category: "Developer" },
  { name: "HANZO DEV", description: "AI coding agent", link: "/products/hanzo-dev", category: "Developer" },
  { name: "HANZO TEAM", description: "Team collaboration", link: "/products/hanzo-team", category: "Developer" },
  { name: "LUX NETWORK", description: "Post-quantum blockchain", link: "/products/lux", category: "Web3" },
  { name: "HANZO DAO", description: "Decentralized governance", link: "/products/hanzo-dao", category: "Web3" },
  { name: "HANZO DEX", description: "Decentralized exchange", link: "/products/hanzo-dex", category: "Web3" },
  { name: "HANZO AMM", description: "Automated market maker", link: "/products/hanzo-amm", category: "Web3" },
  { name: "HANZO CEX", description: "Centralized exchange", link: "/products/hanzo-cex", category: "Web3" },
];

const stats = [
  { value: "Techstars '17", label: "Backed Company" },
  { value: "100+", label: "Research Papers" },
  { value: "300+", label: "Open Source Repos" },
  { value: "22", label: "Frontier Models" },
];

export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <div className={cn("min-h-screen", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Logo + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <HanzoLogo
              className="w-16 h-16 mb-8"
              fill={isDarkMode ? "#ffffff" : "#000000"}
            />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Applied AI Lab
            </h1>
            <p className={cn("text-xl max-w-3xl", isDarkMode ? "text-white/60" : "text-black/60")}>
              Hanzo is a Techstars-backed AI research lab building frontier models,
              decentralized infrastructure, and developer tools. We publish open research
              and ship production systems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 py-8 border-y",
              isDarkMode ? "border-white/10" : "border-black/10"
            )}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <Link
                  key={product.name}
                  to={product.link}
                  className={cn(
                    "flex items-center justify-between px-6 py-4 rounded-lg border transition-colors group",
                    isDarkMode
                      ? "border-white/10 hover:bg-white/5"
                      : "border-black/10 hover:bg-black/5"
                  )}
                >
                  <div>
                    <div className="font-semibold group-hover:underline">{product.name}</div>
                    <div className={cn("text-sm", isDarkMode ? "text-white/50" : "text-black/50")}>
                      {product.description}
                    </div>
                  </div>
                  <span className={cn("text-lg", isDarkMode ? "text-white/30" : "text-black/30")}>→</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Platforms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "hanzo.ai", description: "AI infrastructure", href: "https://hanzo.ai" },
                { name: "hanzo.industries", description: "Research & enterprise", href: "https://hanzo.industries" },
                { name: "hanzo.network", description: "Decentralized compute", href: "https://hanzo.network" },
                { name: "lux.network", description: "Blockchain network", href: "https://lux.network" },
                { name: "docs.hanzo.ai", description: "API documentation", href: "https://docs.hanzo.ai" },
                { name: "llm.hanzo.ai", description: "LLM gateway", href: "https://llm.hanzo.ai" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-5 py-4 rounded-lg border transition-colors group",
                    isDarkMode
                      ? "border-white/10 hover:bg-white/5"
                      : "border-black/10 hover:bg-black/5"
                  )}
                >
                  <div className="font-medium font-mono text-sm group-hover:underline">{platform.name}</div>
                  <div className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>
                    {platform.description}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Organizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Hanzo AI Inc",
                  role: "AI infrastructure and research",
                  detail: "Techstars '17. ASO, HMM, MCP protocols. 300+ open source repos.",
                  href: "https://github.com/hanzoai",
                },
                {
                  name: "Zen LM",
                  role: "Frontier model development",
                  detail: "22 models from 600M to 480B params. Coder, Omni, VL, Nano variants.",
                  href: "https://github.com/zenlm",
                },
                {
                  name: "Lux Network",
                  role: "Post-quantum blockchain",
                  detail: "Multi-consensus architecture. FHE, threshold signatures, BFT.",
                  href: "https://github.com/luxfi",
                },
                {
                  name: "Zoo Labs Foundation",
                  role: "Decentralized AI research (501c3)",
                  detail: "Training-Free GRPO. ZIPs governance. Open AI research network.",
                  href: "https://github.com/zooai",
                },
              ].map((org) => (
                <a
                  key={org.name}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-6 rounded-lg border transition-colors group",
                    isDarkMode
                      ? "border-white/10 hover:border-white/20"
                      : "border-black/10 hover:border-black/20"
                  )}
                >
                  <h3 className="text-xl font-semibold mb-1 group-hover:underline">{org.name}</h3>
                  <p className={cn("text-sm font-medium mb-2", isDarkMode ? "text-white/50" : "text-black/50")}>
                    {org.role}
                  </p>
                  <p className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>
                    {org.detail}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={cn(
              "p-8 md:p-12 rounded-lg border",
              isDarkMode ? "border-white/10 bg-white/[0.02]" : "border-black/10 bg-black/[0.02]"
            )}
          >
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className={cn("text-lg", isDarkMode ? "text-white/60" : "text-black/60")}>
              Build frontier AI systems with safety at the core. We develop foundation models
              and deploy them through secure, decentralized infrastructure — publishing our
              research openly and shipping tools that developers actually use.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
