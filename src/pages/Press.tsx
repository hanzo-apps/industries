import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import {
  Download,
  Mail,
  ExternalLink,
  FileText,
  Palette,
  Building2,
  Calendar,
  Globe,
  Phone,
  Users,
  Award,
  Rocket,
  BookOpen,
  Github,
} from "lucide-react";

// Comprehensive press releases - chronological history
const pressReleases = [
  {
    date: "January 2025",
    title: "ZAP Protocol: The MCP Killer",
    description: "Hanzo announces ZAP (Zero-copy Agent Protocol), achieving ~500x faster agent communication than MCP with zero-copy RPC and native consensus.",
    link: "https://github.com/zap-proto/zap",
    type: "Product",
  },
  {
    date: "January 2025",
    title: "Zen Model Family Reaches 22 Models",
    description: "Zen LM releases complete model family from 600M to 1T+ parameters, including Coder, Omni (multimodal), and Nano (edge) variants.",
    link: "https://huggingface.co/zenlm",
    type: "Research",
  },
  {
    date: "December 2024",
    title: "Training-Free GRPO: Efficient Model Adaptation",
    description: "Zoo Labs Foundation releases Training-Free GRPO, dramatically reducing AI training costs while maintaining performance through data-efficient fine-tuning.",
    link: "https://github.com/zooai/gym",
    type: "Research",
  },
  {
    date: "December 2024",
    title: "Lux Network FHE Implementation",
    description: "Lux releases GPU-accelerated Fully Homomorphic Encryption with 100x speedup, enabling practical privacy-preserving AI inference.",
    link: "https://github.com/luxfi/fhe",
    type: "Infrastructure",
  },
  {
    date: "November 2024",
    title: "Quasar: Post-Quantum Secure Consensus",
    description: "Lux Network introduces Quasar consensus with FALCON signatures and Ringtail threshold cryptography for quantum-resistant blockchain finality.",
    link: "https://github.com/luxfi/papers",
    type: "Research",
  },
  {
    date: "October 2024",
    title: "Hamiltonian Market Maker (HMM) Published",
    description: "HIP-004 specification released for decentralized AI compute markets with Hamiltonian invariant pricing and <200ms quote latency.",
    link: "https://github.com/hanzoai/papers",
    type: "Research",
  },
  {
    date: "September 2024",
    title: "Active Semantic Optimization (ASO) Framework",
    description: "Published ASO achieving 18.2% SWE-bench resolution through training-free adaptation and BitDelta 1-bit compression.",
    link: "https://github.com/hanzoai/papers",
    type: "Research",
  },
  {
    date: "August 2024",
    title: "Hanzo MCP Reaches 260+ Tools",
    description: "Model Context Protocol toolkit expands to over 260 tools for AI model integration, file operations, and developer workflows.",
    link: "https://github.com/hanzoai/mcp",
    type: "Product",
  },
  {
    date: "2023",
    title: "Zoo Labs Foundation Established",
    description: "501(c)(3) non-profit founded for open AI research, decentralized training (DSO), and community-driven governance via zips.zoo.ngo.",
    link: "https://zoo.ngo",
    type: "Organization",
  },
  {
    date: "2022",
    title: "Lux Network Multi-Consensus Architecture",
    description: "Released multi-consensus blockchain with Wave (sub-second finality), Focus (high-throughput), and TEE attestation integration.",
    link: "https://lux.network",
    type: "Infrastructure",
  },
  {
    date: "2017",
    title: "Hanzo Graduates Techstars Boulder",
    description: "Hanzo AI selected for Techstars Boulder 2017 accelerator program, receiving investment and mentorship for AI infrastructure development.",
    type: "Milestone",
  },
  {
    date: "2016",
    title: "Hanzo Industries Founded",
    description: "Hanzo AI Inc founded in Los Angeles to build frontier AI infrastructure and enterprise AI solutions.",
    type: "Milestone",
  },
];

// Social links
const socialLinks = [
  { name: "X (Twitter)", handle: "@hanzoai", href: "https://x.com/hanzoai", icon: Globe },
  { name: "LinkedIn", handle: "hanzoai", href: "https://linkedin.com/company/hanzoai", icon: Users },
  { name: "GitHub", handle: "hanzoai", href: "https://github.com/hanzoai", icon: Github },
  { name: "Discord", handle: "hanzo", href: "https://discord.gg/hanzo", icon: Users },
];

// Brand colors
const brandColors = [
  { name: "Black", hex: "#000000", usage: "Primary brand color" },
  { name: "White", hex: "#FFFFFF", usage: "Light backgrounds, text on dark" },
  { name: "Gray 900", hex: "#111111", usage: "Dark UI elements" },
  { name: "Gray 400", hex: "#9CA3AF", usage: "Secondary text" },
];

const typeColors: Record<string, string> = {
  "Product": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Research": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Infrastructure": "bg-green-500/10 text-green-500 border-green-500/20",
  "Organization": "bg-orange-500/10 text-orange-500 border-orange-500/20",
  "Milestone": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
};

const LogoPreview = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 67 67" className="w-12 h-12">
    <path d="M22.21 67V44.6369H0V67H22.21Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD" />
    <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M22.21 0H0V22.3184H22.21V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD" />
    <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill={isDark ? "#ffffff" : "#000000"} />
  </svg>
);

const Press = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className={cn("py-24 px-4 bg-gradient-to-b", isDarkMode ? "from-white/5 to-transparent" : "from-gray-50 to-white")}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={cn("inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium mb-6", isDarkMode ? "bg-white text-black" : "bg-black text-white")}>
                <FileText className="w-4 h-4" />
                Press Room
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Press & Media
              </h1>
              <p className={cn("text-xl max-w-2xl mx-auto mb-8", isDarkMode ? "text-white/60" : "text-black/60")}>
                Download brand assets, access press releases, and find everything you need to write about Hanzo AI.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:press@hanzo.ai">
                  <Button className={cn("gap-2", isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
                    <Mail className="w-4 h-4" />
                    Contact Press Team
                  </Button>
                </a>
                <a href="https://github.com/hanzoai/brand" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Press Kit
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className={cn("w-6 h-6", isDarkMode ? "text-white/40" : "text-black/40")} />
              <h2 className="text-2xl font-bold">About Hanzo AI</h2>
            </div>
            <div className="max-w-3xl">
              <p className={cn("text-lg leading-relaxed mb-4", isDarkMode ? "text-white/60" : "text-black/60")}>
                <strong>Hanzo AI Inc</strong> (Techstars '17) is a frontier AI research lab building next-generation AI infrastructure. Founded in 2016 in Los Angeles, Hanzo develops large language models, AI training frameworks, and enterprise AI platforms.
              </p>
              <p className={cn("text-lg leading-relaxed mb-4", isDarkMode ? "text-white/60" : "text-black/60")}>
                Our research spans efficient model training (Training-Free GRPO, ASO), post-quantum cryptography, fully homomorphic encryption, and decentralized AI infrastructure. We publish open research and release open-source AI models through the Zen LM family.
              </p>
              <p className={cn("text-lg leading-relaxed", isDarkMode ? "text-white/60" : "text-black/60")}>
                Hanzo operates alongside partner organizations: <strong>Zoo Labs Foundation</strong> (501c3 open AI research), <strong>Zen LM</strong> (frontier models), and <strong>Lux Network</strong> (blockchain infrastructure).
              </p>
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className={cn("py-16 px-4", isDarkMode ? "bg-white/5" : "bg-gray-50")}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Mail className={cn("w-6 h-6", isDarkMode ? "text-white/40" : "text-black/40")} />
              <h2 className="text-2xl font-bold">Press Contact</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={cn("p-6 rounded-xl border", isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-black/10")}>
                <h3 className="font-semibold mb-4">Media Inquiries</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:press@hanzo.ai"
                    className={cn("flex items-center gap-2 transition-colors", isDarkMode ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black")}
                  >
                    <Mail className="w-4 h-4" />
                    press@hanzo.ai
                  </a>
                  <div className={cn("flex items-center gap-2", isDarkMode ? "text-white/40" : "text-black/40")}>
                    <Phone className="w-4 h-4" />
                    +1 (913) 777-4443
                  </div>
                </div>
              </div>
              <div className={cn("p-6 rounded-xl border", isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-black/10")}>
                <h3 className="font-semibold mb-4">Headquarters</h3>
                <div className={cn("space-y-1", isDarkMode ? "text-white/40" : "text-black/40")}>
                  <p className={cn("font-medium", isDarkMode ? "text-white/70" : "text-black/70")}>Hanzo AI Inc</p>
                  <p>Los Angeles, California</p>
                  <p>United States</p>
                </div>
              </div>
              <div className={cn("p-6 rounded-xl border", isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-black/10")}>
                <h3 className="font-semibold mb-4">Schedule Interview</h3>
                <p className={cn("text-sm mb-4", isDarkMode ? "text-white/40" : "text-black/40")}>Book time with our communications team.</p>
                <a href="https://cal.com/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="w-full gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule via Cal.com
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Palette className={cn("w-6 h-6", isDarkMode ? "text-white/40" : "text-black/40")} />
                <h2 className="text-2xl font-bold">Brand Assets</h2>
              </div>
              <a href="https://github.com/hanzoai/brand" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Dark Background Logo */}
              <div className={cn("rounded-xl border overflow-hidden", isDarkMode ? "border-white/10" : "border-black/10")}>
                <div className="h-32 bg-black flex items-center justify-center">
                  <LogoPreview isDark={true} />
                </div>
                <div className={cn("p-4", isDarkMode ? "bg-white/5" : "bg-white")}>
                  <h3 className="font-semibold mb-1">Logo - Dark Background</h3>
                  <p className={cn("text-sm mb-2", isDarkMode ? "text-white/40" : "text-black/40")}>White logo for dark backgrounds</p>
                  <p className={cn("text-xs", isDarkMode ? "text-white/30" : "text-black/30")}>SVG, PNG available</p>
                </div>
              </div>

              {/* Light Background Logo */}
              <div className={cn("rounded-xl border overflow-hidden", isDarkMode ? "border-white/10" : "border-black/10")}>
                <div className={cn("h-32 flex items-center justify-center border-b", isDarkMode ? "bg-white border-white/10" : "bg-white border-black/10")}>
                  <LogoPreview isDark={false} />
                </div>
                <div className={cn("p-4", isDarkMode ? "bg-white/5" : "bg-white")}>
                  <h3 className="font-semibold mb-1">Logo - Light Background</h3>
                  <p className={cn("text-sm mb-2", isDarkMode ? "text-white/40" : "text-black/40")}>Black logo for light backgrounds</p>
                  <p className={cn("text-xs", isDarkMode ? "text-white/30" : "text-black/30")}>SVG, PNG available</p>
                </div>
              </div>

              {/* Brand Colors */}
              <div className={cn("rounded-xl border overflow-hidden", isDarkMode ? "border-white/10" : "border-black/10")}>
                <div className="h-32 grid grid-cols-2 grid-rows-2">
                  {brandColors.map((color) => (
                    <div
                      key={color.name}
                      className="flex items-center justify-center text-xs font-medium"
                      style={{
                        backgroundColor: color.hex,
                        color: color.hex === "#000000" || color.hex === "#111111" ? "#fff" : "#000"
                      }}
                    >
                      {color.hex}
                    </div>
                  ))}
                </div>
                <div className={cn("p-4", isDarkMode ? "bg-white/5" : "bg-white")}>
                  <h3 className="font-semibold mb-1">Brand Colors</h3>
                  <p className={cn("text-sm mb-2", isDarkMode ? "text-white/40" : "text-black/40")}>Primary color palette</p>
                  <p className={cn("text-xs", isDarkMode ? "text-white/30" : "text-black/30")}>Black, White, Grays</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/hanzoai/brand/archive/refs/heads/main.zip">
                <Button className={cn("gap-2", isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
                  <Download className="w-4 h-4" />
                  Download All Assets (ZIP)
                </Button>
              </a>
              <a href="https://github.com/hanzoai/brand/blob/main/GUIDELINES.md" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Brand Guidelines
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Press Releases Timeline */}
        <section className={cn("py-16 px-4", isDarkMode ? "bg-white/5" : "bg-gray-50")}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className={cn("w-6 h-6", isDarkMode ? "text-white/40" : "text-black/40")} />
              <h2 className="text-2xl font-bold">Press Releases & Announcements</h2>
            </div>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn("p-6 rounded-xl border transition-colors group", isDarkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-white border-black/10 hover:border-black/20")}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 w-24">
                      <div className={cn("text-sm font-medium", isDarkMode ? "text-white/90" : "text-black/90")}>{release.date}</div>
                      {release.type && (
                        <span className={cn("inline-block mt-1 px-2 py-0.5 text-xs rounded-full border", typeColors[release.type] || (isDarkMode ? "bg-white/10 text-white/50 border-white/20" : "bg-black/5 text-black/50 border-black/10"))}>
                          {release.type}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:underline">{release.title}</h3>
                      <p className={cn("text-sm", isDarkMode ? "text-white/60" : "text-black/60")}>{release.description}</p>
                    </div>
                    {release.link && (
                      <a
                        href={release.link}
                        target={release.link.startsWith("http") ? "_blank" : undefined}
                        rel={release.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex-shrink-0"
                      >
                        <Button variant="ghost" size="sm" className={cn("gap-1", isDarkMode ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black")}>
                          Learn more
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Globe className={cn("w-6 h-6", isDarkMode ? "text-white/40" : "text-black/40")} />
              <h2 className="text-2xl font-bold">Connect With Us</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("p-4 rounded-xl border transition-colors text-center group", isDarkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-black/5 border-black/10 hover:border-black/20")}
                  >
                    <Icon className={cn("w-5 h-5 mx-auto mb-2 transition-colors", isDarkMode ? "text-white/50 group-hover:text-white" : "text-black/50 group-hover:text-black")} />
                    <div className="font-semibold mb-1">{social.name}</div>
                    <div className={cn("text-sm", isDarkMode ? "text-white/40" : "text-black/40")}>{social.handle}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className={cn("py-16 px-4", isDarkMode ? "bg-white/5" : "bg-gray-50")}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className={cn("w-6 h-6", isDarkMode ? "text-white/40" : "text-black/40")} />
              <h2 className="text-2xl font-bold">Leadership & Executive Bios</h2>
            </div>
            <div className={cn("p-8 rounded-xl border text-center", isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-black/10")}>
              <Award className={cn("w-12 h-12 mx-auto mb-4", isDarkMode ? "text-white/50" : "text-black/50")} />
              <p className={cn("mb-6", isDarkMode ? "text-white/60" : "text-black/60")}>
                For executive bios, headshots, and interview requests, please contact our press team directly.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/team">
                  <Button variant="outline" className="gap-2">
                    <Users className="w-4 h-4" />
                    View Team Page
                  </Button>
                </Link>
                <a href="mailto:press@hanzo.ai">
                  <Button className={cn("gap-2", isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
                    <Mail className="w-4 h-4" />
                    Request Executive Bios
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Guidelines */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className={cn("w-6 h-6", isDarkMode ? "text-white/40" : "text-black/40")} />
              <h2 className="text-2xl font-bold">Coverage Guidelines</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={cn("p-6 rounded-xl border", isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10")}>
                <h3 className="font-semibold mb-3">Preferred Terminology</h3>
                <ul className={cn("space-y-2 text-sm", isDarkMode ? "text-white/60" : "text-black/60")}>
                  <li><strong>Company Name:</strong> Hanzo AI or Hanzo Industries Inc</li>
                  <li><strong>Not:</strong> HANZO, Hanzo, or Hanzo.ai</li>
                  <li><strong>Products:</strong> Zen, KOAN, Hanzo Dev, Hanzo Cloud</li>
                  <li><strong>Partners:</strong> Zoo Labs Foundation, Lux Network, Zen LM</li>
                </ul>
              </div>
              <div className={cn("p-6 rounded-xl border", isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10")}>
                <h3 className="font-semibold mb-3">Key Facts</h3>
                <ul className={cn("space-y-2 text-sm", isDarkMode ? "text-white/60" : "text-black/60")}>
                  <li><strong>Founded:</strong> 2016 in Los Angeles</li>
                  <li><strong>Accelerator:</strong> Techstars Boulder 2017</li>
                  <li><strong>Research:</strong> <a href="/research#papers" className="underline hover:opacity-80">Published papers</a></li>
                  <li><strong>Models:</strong> <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Zen LM family</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
