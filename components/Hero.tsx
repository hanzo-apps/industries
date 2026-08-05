'use client'

import { Button } from '@hanzo/ui'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Bot } from 'lucide-react'
import site from '@/site.config'

export default function Hero() {
  return (
    <div className="hz-rel hz-row hz-ai-center hz-jc-center hz-clip hz-bg">
      {/* Grid pattern background */}
      <div className="hz-abs hz-inset">
        <div className="hz-abs hz-inset hz-dim-more"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
        <div className="hz-abs hz-r-full hz-blur-bg hz-bg-surface" />
        <div className="hz-abs hz-r-full hz-blur-bg hz-bg-surface" />
        <div className="hz-abs hz-top-0 hz-left-0 hz-right-0" />
      </div>

      <div className="hz-container-wide hz-rel hz-z-raised hz-py-7">
        <div className="hz-align-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hz-btn hz-btn-primary hz-gap-2 hz-mb-6"
          >
            <Sparkles className="hz-sq-2 hz-fg" />
            <span className="hz-t-sm hz-fg">Zen4 MoDE models now available for enterprise deployment</span>
            <Link href="/research" className="hz-t-sm hz-w-medium hz-row hz-ai-center hz-gap-1 hz-fg">
              Learn more <ArrowRight className="hz-sq-1" />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hz-t-4xl hz-w-bold hz-tracking-tight hz-fg"
          >
            AI research and infrastructure
            <br />
            <span className="hz-fg">as open, public goods.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hz-container-narrow hz-mw-md hz-mt-6 hz-t-lg hz-leading-relaxed hz-fg"
          >
            Hanzo builds open-weight models, cloud infrastructure, and agent frameworks
            — freely available to researchers, developers, and the broader AI ecosystem.
            727+ open source repos. MIT and Apache licensed.
            25% of compute revenue goes back to OSS contributors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hz-col-row hz-mt-6 hz-gap-4 hz-jc-center"
          >
            <Link href="/research">
              <Button size="lg" className="hz-w-full hz-t-base hz-px-6 hz-bh-7 hz-r-full hz-bg-inverse hz-hoverable">
                Explore Our Research
                <ArrowRight className="hz-sq-2 hz-ml-2" />
              </Button>
            </Link>
            <a href={site.links.platform} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="hz-w-full hz-t-base hz-px-6 hz-bh-7 hz-r-full hz-fg hz-hoverable">
                <Sparkles className="hz-sq-2 hz-mr-2" />
                Try Zen AI
              </Button>
            </a>
            <a href={site.links.bot} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="hz-w-full hz-t-base hz-px-6 hz-bh-7 hz-r-full hz-fg hz-hoverable">
                <Bot className="hz-sq-2 hz-mr-2" />
                Deploy AI Team
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hz-grid hz-grid-4 hz-mt-7 hz-gap-6 hz-border-t hz-pt-6"
        >
          {site.stats.map((stat) => (
            <div key={stat.label} className="hz-align-center">
              <div className="hz-t-2xl hz-w-bold hz-fg">{stat.value}</div>
              <div className="hz-t-sm hz-mt-1 hz-fg">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
