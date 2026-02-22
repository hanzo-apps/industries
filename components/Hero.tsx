'use client'

import { Button } from '@hanzo/ui'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Bot } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 bg-black">
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] bg-white/5" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-white/[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border bg-white/5 border-white/10"
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span className="text-sm text-white/70">Hanzo L1 now available for enterprise deployment</span>
            <Link href="/research" className="text-sm font-medium flex items-center gap-1 hover:underline text-white">
              Learn more <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
          >
            AI research and products
            <br />
            <span className="text-white/40">that put safety at the frontier</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-white/60"
          >
            Hanzo builds frontier AI systems with a focus on safety, interpretability,
            and alignment. We develop foundation models and deploy them through secure,
            decentralized infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/research">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 h-12 rounded-full bg-white text-black hover:bg-white/90">
                Explore Our Research
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 h-12 rounded-full border-white/30 text-white hover:bg-white/10">
                <Sparkles className="w-4 h-4 mr-2" />
                Try Hanzo AI
              </Button>
            </a>
            <a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 h-12 rounded-full border-white/30 text-white hover:bg-white/10">
                <Bot className="w-4 h-4 mr-2" />
                Deploy AI Team
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          {[
            { value: "Techstars '17", label: 'Backed Company' },
            { value: '130+', label: 'Research Papers' },
            { value: '2,500+', label: 'OSS Projects' },
            { value: 'Safety First', label: 'Aligned AI Systems' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm mt-1 text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
