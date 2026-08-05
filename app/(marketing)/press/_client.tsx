"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, cn } from '@hanzo/ui'
import { HanzoLogo } from "@hanzo/logo/react";
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
    link: "https://github.com/zap-proto/spec",
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
    description: "Lux Network introduces Quasar consensus with FALCON signatures and Corona threshold cryptography for quantum-resistant blockchain finality.",
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
  { name: "Discord", handle: "hanzo", href: "https://discord.gg/CJCyAsm9Vr", icon: Users },
];

// Brand colors
const brandColors = [
  { name: "Black", hex: "#000000", usage: "Primary brand color" },
  { name: "White", hex: "#FFFFFF", usage: "Light backgrounds, text on dark" },
  { name: "Gray 900", hex: "#111111", usage: "Dark UI elements" },
  { name: "Gray 400", hex: "#9CA3AF", usage: "Secondary text" },
];

const LogoPreview = () => (
  <HanzoLogo variant="mono" size={48} />
);

export default function PageClient() {
  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <div>
        {/* Hero */}
        <section className={cn("hz-py-7 hz-px-4", "")}>
          <div className="hz-container-wide hz-align-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={cn("hz-inline hz-ai-center hz-gap-2 hz-px-4 hz-py-1 hz-r-full hz-t-sm hz-w-medium hz-mb-5", "hz-bg-inverse")}>
                <FileText className="hz-sq-2" />
                Press Room
              </div>
              <h1 className="hz-t-5xl hz-w-bold hz-tracking-tight hz-mb-5">
                Press & Media
              </h1>
              <p className={cn("hz-container-narrow hz-mw-md hz-t-xl hz-mb-6", "hz-fg")}>
                Download brand assets, access press releases, and find everything you need to write about Hanzo AI.
              </p>
              <div className="hz-row hz-wrap hz-gap-4 hz-jc-center">
                <a href="mailto:press@hanzo.ai">
                  <Button className={cn("hz-gap-2", "hz-bg-inverse hz-hoverable")}>
                    <Mail className="hz-sq-2" />
                    Contact Press Team
                  </Button>
                </a>
                <a href="https://github.com/hanzoai/brand" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="hz-gap-2">
                    <Download className="hz-sq-2" />
                    Download Press Kit
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container-wide">
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-5">
              <Building2 className={cn("hz-sq-4", "hz-fg")} />
              <h2 className="hz-t-2xl hz-w-bold">About Hanzo AI</h2>
            </div>
            <div className="hz-mw-lg">
              <p className={cn("hz-t-lg hz-leading-relaxed hz-mb-4", "hz-fg")}>
                <strong>Hanzo AI Inc</strong> (Techstars '17) is a frontier AI research lab building next-generation AI infrastructure. Founded in 2016 in Los Angeles, Hanzo develops large language models, AI training frameworks, and enterprise AI platforms.
              </p>
              <p className={cn("hz-t-lg hz-leading-relaxed hz-mb-4", "hz-fg")}>
                Our research spans efficient model training (Training-Free GRPO, ASO), post-quantum cryptography, fully homomorphic encryption, and decentralized AI infrastructure. We publish open research and release open-source AI models through the Zen LM family.
              </p>
              <p className={cn("hz-t-lg hz-leading-relaxed", "hz-fg")}>
                Hanzo operates alongside partner organizations: <strong>Zoo Labs Foundation</strong> (501c3 open AI research), <strong>Zen LM</strong> (frontier models), and <strong>Lux Network</strong> (blockchain infrastructure).
              </p>
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container-wide">
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-6">
              <Mail className={cn("hz-sq-4", "hz-fg")} />
              <h2 className="hz-t-2xl hz-w-bold">Press Contact</h2>
            </div>
            <div className="hz-grid hz-grid-3 hz-gap-5">
              <div className={cn("hz-p-5 hz-r-lg hz-bordered", "hz-bg-surface")}>
                <h3 className="hz-w-semibold hz-mb-4">Media Inquiries</h3>
                <div className="hz-stack-3">
                  <a
                    href="mailto:press@hanzo.ai"
                    className={cn("hz-row hz-ai-center hz-gap-2 hz-transition", "hz-fg hz-hoverable")}
                  >
                    <Mail className="hz-sq-2" />
                    press@hanzo.ai
                  </a>
                  <div className={cn("hz-row hz-ai-center hz-gap-2", "hz-fg")}>
                    <Phone className="hz-sq-2" />
                    +1 (913) 777-4443
                  </div>
                </div>
              </div>
              <div className={cn("hz-p-5 hz-r-lg hz-bordered", "hz-bg-surface")}>
                <h3 className="hz-w-semibold hz-mb-4">Headquarters</h3>
                <div className={cn("hz-stack-1", "hz-fg")}>
                  <p className={cn("hz-w-medium", "hz-fg")}>Hanzo AI Inc</p>
                  <p>Los Angeles, California</p>
                  <p>United States</p>
                </div>
              </div>
              <div className={cn("hz-p-5 hz-r-lg hz-bordered", "hz-bg-surface")}>
                <h3 className="hz-w-semibold hz-mb-4">Schedule Interview</h3>
                <p className={cn("hz-t-sm hz-mb-4", "hz-fg")}>Book time with our communications team.</p>
                <a href="https://cal.com/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="hz-w-full hz-gap-2">
                    <Calendar className="hz-sq-2" />
                    Schedule via Cal.com
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container-wide">
            <div className="hz-row hz-ai-center hz-jc-between hz-mb-6">
              <div className="hz-row hz-ai-center hz-gap-3">
                <Palette className={cn("hz-sq-4", "hz-fg")} />
                <h2 className="hz-t-2xl hz-w-bold">Brand Assets</h2>
              </div>
              <a href="https://github.com/hanzoai/brand" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="hz-gap-2">
                  <Github className="hz-sq-2" />
                  View on GitHub
                </Button>
              </a>
            </div>

            <div className="hz-grid hz-grid-3 hz-gap-5 hz-mb-6">
              {/* Dark Background Logo */}
              <div className={cn("hz-r-lg hz-bordered hz-clip", "")}>
                <div className="hz-bh-8 hz-bg hz-row hz-ai-center hz-jc-center">
                  <LogoPreview />
                </div>
                <div className={cn("hz-p-4", "hz-bg-surface")}>
                  <h3 className="hz-w-semibold hz-mb-1">Logo - Dark Background</h3>
                  <p className={cn("hz-t-sm hz-mb-2", "hz-fg")}>White logo for dark backgrounds</p>
                  <p className={cn("hz-t-xs", "hz-fg-soft")}>SVG, PNG available</p>
                </div>
              </div>

              {/* Light Background Logo */}
              <div className={cn("hz-r-lg hz-bordered hz-clip", "")}>
                <div className={cn("hz-bh-8 hz-row hz-ai-center hz-jc-center hz-border-b", "hz-bg-inverse")}>
                  <LogoPreview />
                </div>
                <div className={cn("hz-p-4", "hz-bg-surface")}>
                  <h3 className="hz-w-semibold hz-mb-1">Logo - Light Background</h3>
                  <p className={cn("hz-t-sm hz-mb-2", "hz-fg")}>Black logo for light backgrounds</p>
                  <p className={cn("hz-t-xs", "hz-fg-soft")}>SVG, PNG available</p>
                </div>
              </div>

              {/* Brand Colors */}
              <div className={cn("hz-r-lg hz-bordered hz-clip", "")}>
                <div className="hz-grid hz-grid-2 hz-bh-8">
                  {brandColors.map((color) => (
                    <div
                      key={color.name}
                      className="hz-row hz-ai-center hz-jc-center hz-t-xs hz-w-medium"
                      style={{
                        backgroundColor: color.hex,
                        color: color.hex === "#000000" || color.hex === "#111111" ? "#fff" : "#000"
                      }}
                    >
                      {color.hex}
                    </div>
                  ))}
                </div>
                <div className={cn("hz-p-4", "hz-bg-surface")}>
                  <h3 className="hz-w-semibold hz-mb-1">Brand Colors</h3>
                  <p className={cn("hz-t-sm hz-mb-2", "hz-fg")}>Primary color palette</p>
                  <p className={cn("hz-t-xs", "hz-fg-soft")}>Black, White, Grays</p>
                </div>
              </div>
            </div>

            <div className="hz-row hz-wrap hz-gap-4">
              <a href="https://github.com/hanzoai/brand/archive/refs/heads/main.zip">
                <Button className={cn("hz-gap-2", "hz-bg-inverse hz-hoverable")}>
                  <Download className="hz-sq-2" />
                  Download All Assets (ZIP)
                </Button>
              </a>
              <a href="https://github.com/hanzoai/brand/blob/main/GUIDELINES.md" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hz-gap-2">
                  <BookOpen className="hz-sq-2" />
                  Brand Guidelines
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Press Releases Timeline */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container-wide">
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-6">
              <Calendar className={cn("hz-sq-4", "hz-fg")} />
              <h2 className="hz-t-2xl hz-w-bold">Press Releases & Announcements</h2>
            </div>
            <div className="hz-stack-4">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn("hz-p-5 hz-r-lg hz-bordered hz-transition", "hz-bg-surface hz-hoverable")}
                >
                  <div className="hz-col-row hz-gap-4">
                    <div className="hz-none hz-bw-8">
                      <div className={cn("hz-t-sm hz-w-medium", "hz-fg-soft")}>{release.date}</div>
                      {release.type && (
                        <span className="hz-badge hz-mt-1 hz-bordered hz-bg-surface hz-fg-muted">
                          {release.type}
                        </span>
                      )}
                    </div>
                    <div className="hz-grow">
                      <h3 className="hz-w-semibold hz-mb-2">{release.title}</h3>
                      <p className={cn("hz-t-sm", "hz-fg")}>{release.description}</p>
                    </div>
                    {release.link && (
                      <a
                        href={release.link}
                        target={release.link.startsWith("http") ? "_blank" : undefined}
                        rel={release.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="hz-none"
                      >
                        <Button variant="ghost" size="sm" className={cn("hz-gap-1", "hz-fg hz-hoverable")}>
                          Learn more
                          <ExternalLink className="hz-sq-1" />
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
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container-wide">
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-6">
              <Globe className={cn("hz-sq-4", "hz-fg")} />
              <h2 className="hz-t-2xl hz-w-bold">Connect With Us</h2>
            </div>
            <div className="hz-grid hz-grid-4 hz-gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("hz-p-4 hz-r-lg hz-bordered hz-transition hz-align-center", "hz-bg-surface hz-hoverable")}
                  >
                    <Icon className={cn("hz-sq-3 hz-mx-auto hz-mb-2 hz-transition", "hz-fg hz-hoverable")} />
                    <div className="hz-w-semibold hz-mb-1">{social.name}</div>
                    <div className={cn("hz-t-sm", "hz-fg")}>{social.handle}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className={cn("hz-py-7 hz-px-4", "hz-bg-surface")}>
          <div className="hz-container-wide">
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-6">
              <Users className={cn("hz-sq-4", "hz-fg")} />
              <h2 className="hz-t-2xl hz-w-bold">Leadership & Executive Bios</h2>
            </div>
            <div className={cn("hz-p-6 hz-r-lg hz-bordered hz-align-center", "hz-bg-surface")}>
              <Award className={cn("hz-sq-7 hz-mx-auto hz-mb-4", "hz-fg")} />
              <p className={cn("hz-mb-5", "hz-fg")}>
                For executive bios, headshots, and interview requests, please contact our press team directly.
              </p>
              <div className="hz-row hz-wrap hz-gap-4 hz-jc-center">
                <Link href="/team">
                  <Button variant="outline" className="hz-gap-2">
                    <Users className="hz-sq-2" />
                    View Team Page
                  </Button>
                </Link>
                <a href="mailto:press@hanzo.ai">
                  <Button className={cn("hz-gap-2", "hz-bg-inverse hz-hoverable")}>
                    <Mail className="hz-sq-2" />
                    Request Executive Bios
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Guidelines */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container-wide">
            <div className="hz-row hz-ai-center hz-gap-3 hz-mb-6">
              <BookOpen className={cn("hz-sq-4", "hz-fg")} />
              <h2 className="hz-t-2xl hz-w-bold">Coverage Guidelines</h2>
            </div>
            <div className="hz-grid hz-grid-2 hz-gap-5">
              <div className={cn("hz-p-5 hz-r-lg hz-bordered", "hz-bg-surface")}>
                <h3 className="hz-w-semibold hz-mb-3">Preferred Terminology</h3>
                <ul className={cn("hz-stack-2 hz-t-sm", "hz-fg")}>
                  <li><strong>Company Name:</strong> Hanzo AI or Hanzo Industries Inc</li>
                  <li><strong>Not:</strong> HANZO, Hanzo, or Hanzo.ai</li>
                  <li><strong>Products:</strong> Zen, KOAN, Hanzo Dev, Hanzo Cloud</li>
                  <li><strong>Partners:</strong> Zoo Labs Foundation, Lux Network, Zen LM</li>
                </ul>
              </div>
              <div className={cn("hz-p-5 hz-r-lg hz-bordered", "hz-bg-surface")}>
                <h3 className="hz-w-semibold hz-mb-3">Key Facts</h3>
                <ul className={cn("hz-stack-2 hz-t-sm", "hz-fg")}>
                  <li><strong>Founded:</strong> 2016 in Los Angeles</li>
                  <li><strong>Accelerator:</strong> Techstars Boulder 2017</li>
                  <li><strong>Research:</strong> <a href="/research#papers" className="hz-underline">Published papers</a></li>
                  <li><strong>Models:</strong> <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="hz-underline">Zen LM family</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
