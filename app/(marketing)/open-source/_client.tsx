'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@hanzo/ui'
import {
  Github,
  ArrowRight,
  ExternalLink,
  Check,
  Layers,
  Box,
  Cpu,
  Code2,
  Globe,
  Star,
  GitBranch,
  Wallet,
  FileSearch,
  Eye,
  Users,
  Link2,
  DollarSign,
  BarChart3,
} from 'lucide-react'
import site from '@/site.config'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const HERO_STATS = [
  { value: '727+', label: 'Open Source Repos', icon: Github },
  { value: '6', label: 'GitHub Orgs', icon: Layers },
  { value: '20+', label: 'Upstream Foundations', icon: Star },
  { value: '25%', label: 'Compute Revenue Shared', icon: DollarSign },
]

const UPSTREAM_PROJECTS = [
  { name: 'Python', creator: 'Python Software Foundation', url: 'https://python.org', github: 'https://github.com/python/cpython', license: 'PSF', role: 'ML/AI stack' },
  { name: 'Rust', creator: 'Rust Foundation', url: 'https://rust-lang.org', github: 'https://github.com/rust-lang/rust', license: 'MIT/Apache-2.0', role: 'High-performance runtimes' },
  { name: 'Go', creator: 'Go Authors', url: 'https://go.dev', github: 'https://github.com/golang/go', license: 'BSD-3-Clause', role: 'Gateway & infra tooling' },
  { name: 'TypeScript', creator: 'Microsoft', url: 'https://typescriptlang.org', github: 'https://github.com/microsoft/TypeScript', license: 'Apache-2.0', role: 'SDKs and web apps' },
  { name: 'React', creator: 'Meta Open Source', url: 'https://react.dev', github: 'https://github.com/facebook/react', license: 'MIT', role: 'Every UI we ship' },
  { name: 'PostgreSQL', creator: 'PostgreSQL Global Dev Group', url: 'https://postgresql.org', github: 'https://github.com/postgres/postgres', license: 'PostgreSQL', role: 'All stateful services' },
  { name: 'PyTorch', creator: 'Meta AI Research', url: 'https://pytorch.org', github: 'https://github.com/pytorch/pytorch', license: 'BSD-3-Clause', role: 'ML training & inference' },
  { name: 'Kubernetes', creator: 'CNCF', url: 'https://kubernetes.io', github: 'https://github.com/kubernetes/kubernetes', license: 'Apache-2.0', role: 'Production orchestration' },
  { name: 'LiteLLM', creator: 'BerriAI', url: 'https://litellm.ai', github: 'https://github.com/BerriAI/litellm', license: 'MIT', role: 'LLM Gateway foundation', stars: '18k+' },
  { name: 'LibreChat', creator: 'Danny Avila', url: 'https://librechat.ai', github: 'https://github.com/danny-avila/LibreChat', license: 'MIT', role: 'Chat UI foundation', stars: '20k+' },
  { name: 'ComfyUI', creator: 'comfyanonymous', url: 'https://comfy.org', github: 'https://github.com/comfyanonymous/ComfyUI', license: 'GPL-3.0', role: 'Image/video pipeline', stars: '60k+' },
  { name: 'vLLM', creator: 'vLLM Project', url: 'https://vllm.ai', github: 'https://github.com/vllm-project/vllm', license: 'Apache-2.0', role: 'LLM inference engine', stars: '32k+' },
]

const GITHUB_ORGS = [
  { handle: 'hanzoai', url: 'https://github.com/hanzoai', description: 'AI infrastructure, LLM gateway, agent frameworks', icon: Cpu },
  { handle: 'luxfi', url: 'https://github.com/luxfi', description: 'Blockchain, consensus, post-quantum cryptography', icon: Layers },
  { handle: 'zenlm', url: 'https://github.com/zenlm', description: 'AI model research and frontier experiments', icon: Box },
  { handle: 'hanzo-js', url: 'https://github.com/hanzo-js', description: 'JavaScript/TypeScript SDKs and tooling', icon: Code2 },
  { handle: 'hanzo-apps', url: 'https://github.com/hanzo-apps', description: 'Apps, templates, and example projects', icon: Globe },
  { handle: 'zoo-labs', url: 'https://github.com/zoo-labs', description: 'Decentralized AI and DeSci research (Zoo Labs Foundation)', icon: Star },
]

const COMMITMENTS = [
  {
    title: 'We ship open source first',
    body: 'Everything we build gets published. MIT/Apache licensed. No internal-only forks.',
  },
  {
    title: 'We contribute upstream',
    body: 'Bugs and features go back to the projects we depend on. Never private patches.',
  },
  {
    title: 'We never relicense what we open',
    body: 'MIT and Apache stay MIT and Apache. Period. We will never extract commercial value by relicensing.',
  },
  {
    title: 'We credit our foundations',
    body: 'Every product page attributes its upstream project. We built on giants and we say so.',
  },
  {
    title: 'We fund what we depend on',
    body: 'GitHub Sponsors, Open Collective, direct partnerships. We invest back into the projects that power Hanzo.',
  },
  {
    title: 'We welcome all contributors',
    body: '48-hour PR response time. Every contributor recognized. Good code can come from anywhere.',
  },
]

const REVENUE_STEPS = [
  { step: 1, title: 'Connect Your Git', description: 'Sign in with GitHub or GitLab to verify your contributions.', icon: GitBranch },
  { step: 2, title: 'Connect Your Wallet', description: 'Link a wallet on any major chain (Ethereum, Solana, Polygon, etc.).', icon: Wallet },
  { step: 3, title: 'SBOM Verification', description: 'We trace every OSS dependency running in production via verified SBOMs.', icon: FileSearch },
  { step: 4, title: 'Transparent Payouts', description: 'Earn proportional to your code\'s usage. All payouts are public and auditable.', icon: BarChart3 },
]

const REVENUE_FEATURES = [
  { title: 'SBOM-Verified', description: 'Every payout traced to actual production usage', icon: FileSearch },
  { title: 'Fully Transparent', description: 'All distributions are public and auditable', icon: Eye },
  { title: 'Community Governed', description: 'Projects can customize their payout splits', icon: Users },
  { title: 'Multi-Chain', description: 'USD, Hanzo Network, AI coin on Ethereum, Solana, Polygon, etc.', icon: Link2 },
]

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function PageClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] bg-foreground/5" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-foreground/[0.03]" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border bg-foreground/5 border-border"
            >
              <Github className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">Open Core Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground"
            >
              Open Source at Hanzo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Hanzo is built on open source and gives back. 727+ repos across 6 GitHub
              orgs, MIT and Apache licensed. We dedicate 25% of compute revenue to the
              open source projects that power everything we ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Browse GitHub
                </Button>
              </a>
              <a href="https://hanzo.ai/oss/connect" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 border-border text-foreground hover:bg-accent"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Connect &amp; Start Earning
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-secondary/50 p-5 text-center"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground mb-2 mx-auto" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Standing on Giants */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Standing on Giants
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                The upstream open source projects that power Hanzo. We use them, we credit
                them, we contribute back, and we fund them through our revenue sharing
                program.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {UPSTREAM_PROJECTS.map((proj, i) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group rounded-xl border border-border bg-secondary/30 p-5 hover:border-foreground/20 hover:bg-secondary/60 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground text-sm">{proj.name}</h3>
                    <div className="flex items-center gap-1.5">
                      {proj.stars && (
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {proj.stars}
                        </span>
                      )}
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${proj.name} on GitHub`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{proj.role}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground/70">{proj.creator}</span>
                    <span className="text-[10px] font-mono text-muted-foreground/70">
                      {proj.license}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Organizations */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Our Organizations
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Six GitHub organizations spanning AI, blockchain, and developer tooling
                &mdash; all public, all open.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GITHUB_ORGS.map((org, i) => {
                const Icon = org.icon
                return (
                  <motion.a
                    key={org.handle}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-secondary/30 p-5 hover:border-foreground/20 hover:bg-secondary/60 transition-all"
                  >
                    <div className="mt-0.5 flex-shrink-0 rounded-lg border border-border bg-background p-2">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-sm font-semibold text-foreground group-hover:text-foreground transition-colors">
                          @{org.handle}
                        </span>
                        <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {org.description}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stewardship Commitments */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Our Stewardship Commitments
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Explicit commitments, not vague promises. We hold ourselves accountable to
                these publicly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMMITMENTS.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-secondary/30 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 rounded-full bg-foreground/10 p-1">
                      <Check className="w-3.5 h-3.5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{c.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earn from Open Source (Revenue Sharing) */}
        <section className="py-24 px-4 md:px-8 border-t border-border relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] bg-foreground/[0.04] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border bg-foreground/5 border-border">
                <DollarSign className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-muted-foreground">Revenue Sharing Program</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Earn from Open Source
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We dedicate 25% of all compute costs to open source &mdash; distributed
                transparently based on verified SBOMs. Your code runs in production, you
                get paid.
              </p>
            </motion.div>

            {/* How It Works - 4 steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {REVENUE_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="relative rounded-xl border border-border bg-secondary/30 p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center text-xs font-bold text-foreground">
                        {step.step}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {i < REVENUE_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {REVENUE_FEATURES.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="rounded-xl border border-border bg-secondary/20 p-5 text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Community splits callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-border bg-secondary/30 p-6 md:p-8 mb-16"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Communities Customize Their Splits
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each project controls how revenue is distributed. For example: 10% to
                    the founder, 40% to top contributors, 50% to a community fund. We
                    actively reach out to every contributor whose code we run in production
                    to connect wallets and verify their git identity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Payout options + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-10"
            >
              <p className="text-sm text-muted-foreground mb-6">
                Payout options:{' '}
                <span className="text-foreground font-medium">USD (direct deposit)</span>,{' '}
                <span className="text-foreground font-medium">Hanzo Network tokens</span>,
                or <span className="text-foreground font-medium">AI coin</span> &mdash; on
                any major chain.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://hanzo.ai/oss/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect &amp; Start Earning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://hanzo.ai/oss/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 h-12 border-border text-foreground hover:bg-accent"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Payout Dashboard
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research & Papers */}
        <section className="py-16 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-border bg-secondary/30 p-6"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Research &amp; Papers
                </h2>
                <p className="text-sm text-muted-foreground max-w-lg">
                  130+ technical papers across AI alignment, consensus protocols,
                  post-quantum cryptography, decentralized AI, and more. Open-access and
                  free forever.
                </p>
              </div>
              <Link href="/research">
                <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  Browse Papers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden border-t border-border">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-foreground/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Contribute &amp; Earn
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Star our repos, open a PR, or connect your wallet to earn from the code you
              already contribute. Every contribution matters &mdash; and pays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://hanzo.ai/oss/connect" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 border-border text-foreground hover:bg-accent"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect &amp; Earn
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
