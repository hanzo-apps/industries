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
  { value: site.brand.ossRepos, label: 'Open Source Repos', icon: Github },
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
    <div className="hz-min-h-screen hz-bg hz-fg">
      <main>
        {/* Hero */}
        <section className="hz-rel hz-pt-6 hz-pb-6 hz-px-4 hz-clip">
          <div className="hz-abs hz-inset hz-clip hz-z-base hz-no-pointer">
            <div
              className="hz-abs hz-inset hz-dim-more"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />
            <div className="hz-abs hz-r-full hz-blur-bg hz-bg-surface" />
            <div className="hz-abs hz-r-full hz-blur-bg hz-bg-surface" />
          </div>

          <div className="hz-container-wide hz-rel hz-z-raised hz-align-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="hz-inline hz-ai-center hz-gap-2 hz-px-3 hz-py-1 hz-r-full hz-t-xs hz-w-medium hz-mb-5 hz-bordered hz-bg-surface"
            >
              <Github className="hz-sq-2 hz-fg" />
              <span className="hz-fg">Open Core Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="hz-t-4xl hz-w-bold hz-tracking-tight hz-mb-5 hz-fg"
            >
              Open Source at Hanzo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="hz-container-narrow hz-t-lg hz-fg hz-leading-relaxed hz-mb-6"
            >
              Hanzo is built on open source and gives back. {site.brand.ossRepos} repos across 6 GitHub
              orgs, MIT and Apache licensed. We dedicate 25% of compute revenue to the
              open source projects that power everything we ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="hz-row hz-wrap hz-ai-center hz-jc-center hz-gap-4 hz-mb-7"
            >
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="hz-r-full hz-px-6 hz-bh-7 hz-bg-inverse hz-hoverable"
                >
                  <Github className="hz-sq-2 hz-mr-2" />
                  Browse GitHub
                </Button>
              </a>
              <a href="https://hanzo.ai/oss/connect" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="hz-r-full hz-px-6 hz-bh-7 hz-fg hz-hoverable"
                >
                  <DollarSign className="hz-sq-2 hz-mr-2" />
                  Connect &amp; Start Earning
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="hz-grid hz-grid-4 hz-gap-4"
            >
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="hz-card hz-align-center"
                  >
                    <Icon className="hz-sq-3 hz-fg hz-mb-2 hz-mx-auto" />
                    <div className="hz-t-3xl hz-w-bold hz-fg">{stat.value}</div>
                    <div className="hz-t-xs hz-fg hz-mt-1">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Standing on Giants */}
        <section className="hz-py-7 hz-px-4 hz-border-t">
          <div className="hz-container-wide">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="hz-mb-6"
            >
              <h2 className="hz-t-2xl hz-w-bold hz-fg hz-mb-3">
                Standing on Giants
              </h2>
              <p className="hz-fg hz-mw-md">
                The upstream open source projects that power Hanzo. We use them, we credit
                them, we contribute back, and we fund them through our revenue sharing
                program.
              </p>
            </motion.div>

            <div className="hz-grid hz-grid-4 hz-gap-4">
              {UPSTREAM_PROJECTS.map((proj, i) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="hz-card hz-transition hz-card-interactive"
                >
                  <div className="hz-row hz-ai-center hz-jc-between hz-mb-3">
                    <h3 className="hz-w-semibold hz-fg hz-t-sm">{proj.name}</h3>
                    <div className="hz-row hz-ai-center hz-gap-2">
                      {proj.stars && (
                        <span className="hz-t-xs hz-mono hz-fg">
                          {proj.stars}
                        </span>
                      )}
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hz-fg hz-transition hz-hoverable"
                        aria-label={`${proj.name} on GitHub`}
                      >
                        <Github className="hz-sq-2" />
                      </a>
                    </div>
                  </div>
                  <p className="hz-t-xs hz-fg hz-mb-2">{proj.role}</p>
                  <div className="hz-row hz-ai-center hz-jc-between">
                    <span className="hz-t-xs hz-fg-muted">{proj.creator}</span>
                    <span className="hz-t-xs hz-mono hz-fg-muted">
                      {proj.license}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Organizations */}
        <section className="hz-py-7 hz-px-4 hz-border-t">
          <div className="hz-container-wide">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="hz-mb-6"
            >
              <h2 className="hz-t-2xl hz-w-bold hz-fg hz-mb-3">
                Our Organizations
              </h2>
              <p className="hz-fg hz-mw-md">
                Six GitHub organizations spanning AI, blockchain, and developer tooling
                &mdash; all public, all open.
              </p>
            </motion.div>

            <div className="hz-grid hz-grid-3 hz-gap-4">
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
                    className="hz-card hz-row hz-ai-start hz-gap-4 hz-transition hz-card-interactive"
                  >
                    <div className="hz-mt-1 hz-none hz-r-lg hz-bordered hz-bg hz-p-2">
                      <Icon className="hz-sq-3 hz-fg hz-transition hz-hoverable" />
                    </div>
                    <div className="hz-grow">
                      <div className="hz-row hz-ai-center hz-gap-2 hz-mb-1">
                        <span className="hz-mono hz-t-sm hz-w-semibold hz-fg hz-transition hz-hoverable">
                          @{org.handle}
                        </span>
                        <ExternalLink className="hz-sq-1 hz-fg hz-invisible hz-transition" />
                      </div>
                      <p className="hz-t-xs hz-fg hz-leading-relaxed">
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
        <section className="hz-py-7 hz-px-4 hz-border-t">
          <div className="hz-container-wide">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="hz-mb-6"
            >
              <h2 className="hz-t-2xl hz-w-bold hz-fg hz-mb-3">
                Our Stewardship Commitments
              </h2>
              <p className="hz-fg hz-mw-md">
                Explicit commitments, not vague promises. We hold ourselves accountable to
                these publicly.
              </p>
            </motion.div>

            <div className="hz-grid hz-grid-3 hz-gap-4">
              {COMMITMENTS.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="hz-card"
                >
                  <div className="hz-row hz-ai-start hz-gap-3">
                    <div className="hz-mt-1 hz-none hz-r-full hz-bg-surface hz-p-1">
                      <Check className="hz-sq-2 hz-fg" />
                    </div>
                    <div>
                      <h3 className="hz-w-semibold hz-fg hz-t-sm hz-mb-1">{c.title}</h3>
                      <p className="hz-t-xs hz-fg hz-leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earn from Open Source (Revenue Sharing) */}
        <section className="hz-py-7 hz-px-4 hz-border-t hz-rel hz-clip">
          <div className="hz-center-x hz-abs hz-top-0 hz-r-full hz-blur-bg hz-bg-surface hz-no-pointer" />

          <div className="hz-container-wide hz-rel hz-z-raised">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="hz-align-center hz-mb-7"
            >
              <div className="hz-inline hz-ai-center hz-gap-2 hz-px-3 hz-py-1 hz-r-full hz-t-xs hz-w-medium hz-mb-5 hz-bordered hz-bg-surface">
                <DollarSign className="hz-sq-2 hz-fg" />
                <span className="hz-fg">Revenue Sharing Program</span>
              </div>
              <h2 className="hz-t-3xl hz-w-bold hz-fg hz-mb-4">
                Earn from Open Source
              </h2>
              <p className="hz-container-narrow hz-mw-md hz-t-lg hz-fg hz-leading-relaxed">
                We dedicate 25% of all compute costs to open source &mdash; distributed
                transparently based on verified SBOMs. Your code runs in production, you
                get paid.
              </p>
            </motion.div>

            {/* How It Works - 4 steps */}
            <div className="hz-grid hz-grid-4 hz-gap-5 hz-mb-7">
              {REVENUE_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="hz-card hz-rel"
                  >
                    <div className="hz-row hz-ai-center hz-gap-3 hz-mb-4">
                      <div className="hz-sq-5 hz-r-full hz-bordered hz-bg hz-row hz-ai-center hz-jc-center hz-t-xs hz-w-bold hz-fg">
                        {step.step}
                      </div>
                      <div className="hz-sq-5 hz-r-lg hz-bg-surface hz-row hz-ai-center hz-jc-center">
                        <Icon className="hz-sq-2 hz-fg" />
                      </div>
                    </div>
                    <h3 className="hz-w-semibold hz-fg hz-t-sm hz-mb-2">{step.title}</h3>
                    <p className="hz-t-xs hz-fg hz-leading-relaxed">
                      {step.description}
                    </p>
                    {i < REVENUE_STEPS.length - 1 && (
                      <div className="hz-desktop-only hz-abs hz-bw-4 hz-bg-surface" />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Feature cards */}
            <div className="hz-grid hz-grid-4 hz-gap-4 hz-mb-7">
              {REVENUE_FEATURES.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="hz-card hz-align-center"
                  >
                    <div className="hz-sq-6 hz-r-lg hz-bg-surface hz-row hz-ai-center hz-jc-center hz-mx-auto hz-mb-3">
                      <Icon className="hz-sq-3 hz-fg" />
                    </div>
                    <h3 className="hz-w-semibold hz-fg hz-t-sm hz-mb-1">{f.title}</h3>
                    <p className="hz-t-xs hz-fg hz-leading-relaxed">
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
              className="hz-card hz-mb-7"
            >
              <div className="hz-col-row hz-ai-start hz-gap-5">
                <div className="hz-sq-7 hz-none hz-r-lg hz-bg-surface hz-row hz-ai-center hz-jc-center">
                  <Users className="hz-sq-4 hz-fg" />
                </div>
                <div className="hz-grow">
                  <h3 className="hz-w-semibold hz-fg hz-mb-2">
                    Communities Customize Their Splits
                  </h3>
                  <p className="hz-t-sm hz-fg hz-leading-relaxed">
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
              className="hz-align-center hz-mb-6"
            >
              <p className="hz-t-sm hz-fg hz-mb-5">
                Payout options:{' '}
                <span className="hz-fg hz-w-medium">USD (direct deposit)</span>,{' '}
                <span className="hz-fg hz-w-medium">Hanzo Network tokens</span>,
                or <span className="hz-fg hz-w-medium">AI coin</span> &mdash; on
                any major chain.
              </p>
              <div className="hz-row hz-wrap hz-ai-center hz-jc-center hz-gap-4">
                <a
                  href="https://hanzo.ai/oss/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="hz-r-full hz-px-6 hz-bh-7 hz-bg-inverse hz-hoverable"
                  >
                    <Wallet className="hz-sq-2 hz-mr-2" />
                    Connect &amp; Start Earning
                    <ArrowRight className="hz-sq-2 hz-ml-2" />
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
                    className="hz-r-full hz-px-6 hz-bh-7 hz-fg hz-hoverable"
                  >
                    <BarChart3 className="hz-sq-2 hz-mr-2" />
                    View Payout Dashboard
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research & Papers */}
        <section className="hz-py-7 hz-px-4 hz-border-t">
          <div className="hz-container-wide">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="hz-col-row hz-card hz-ai-start hz-jc-between hz-gap-5"
            >
              <div>
                <h2 className="hz-t-xl hz-w-bold hz-fg hz-mb-1">
                  Research &amp; Papers
                </h2>
                <p className="hz-t-sm hz-fg hz-mw-sm">
                  130+ technical papers across AI alignment, consensus protocols,
                  post-quantum cryptography, decentralized AI, and more. Open-access and
                  free forever.
                </p>
              </div>
              <Link href="/research">
                <Button className="hz-r-full hz-px-5 hz-bg-inverse hz-hoverable">
                  Browse Papers
                  <ArrowRight className="hz-sq-2 hz-ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="hz-py-7 hz-px-4 hz-rel hz-clip hz-border-t">
          <div className="hz-sq-8 hz-abs hz-bg-surface hz-r-full hz-blur-bg hz-no-pointer" />
          <div className="hz-sq-8 hz-abs hz-bg-surface hz-r-full hz-blur-bg hz-no-pointer" />

          <div className="hz-container-narrow hz-align-center hz-rel hz-z-raised">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hz-t-3xl hz-w-bold hz-fg hz-mb-4"
            >
              Contribute &amp; Earn
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hz-container-narrow hz-mw-md hz-t-lg hz-fg hz-mb-6"
            >
              Star our repos, open a PR, or connect your wallet to earn from the code you
              already contribute. Every contribution matters &mdash; and pays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hz-row hz-wrap hz-ai-center hz-jc-center hz-gap-4"
            >
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="hz-r-full hz-px-6 hz-bh-7 hz-bg-inverse hz-hoverable"
                >
                  <Github className="hz-sq-3 hz-mr-2" />
                  View on GitHub
                  <ArrowRight className="hz-sq-3 hz-ml-2" />
                </Button>
              </a>
              <a href="https://hanzo.ai/oss/connect" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="hz-r-full hz-px-6 hz-bh-7 hz-fg hz-hoverable"
                >
                  <Wallet className="hz-sq-3 hz-mr-2" />
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
