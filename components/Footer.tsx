'use client'

import Link from 'next/link'
import { Check, Github, FileText, Award, ExternalLink } from 'lucide-react'
import Logo from './Logo'
import { cn } from '@/lib/utils'

const linkCn = 'text-sm transition-colors text-muted-foreground hover:text-foreground'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Logo size="md" showText={true} className="mb-6" />
            <p className="mb-6 max-w-md text-muted-foreground">
              Frontier AI research lab advancing the state of the art in machine learning,
              cryptography, consensus protocols, and distributed systems.
            </p>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 group">
                <Github className="h-5 w-5 transition-colors text-muted-foreground group-hover:text-foreground" />
                <span className="text-sm transition-colors text-muted-foreground group-hover:text-foreground">Open Source</span>
              </a>
              <Link href="/research#papers" className="flex items-center space-x-2 group">
                <FileText className="h-5 w-5 transition-colors text-muted-foreground group-hover:text-foreground" />
                <span className="text-sm transition-colors text-muted-foreground group-hover:text-foreground">130+ Papers</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo AI</a></li>
              <li><a href="https://hanzo.bot" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Bot</a></li>
              <li><a href="https://hanzo.ai/dev" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Dev</a></li>
              <li><a href="https://hanzo.team" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Team</a></li>
              <li><a href="https://hanzo.chat" target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Chat</a></li>
              <li><Link href="/models" className={linkCn}>Zen Models</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Research</h4>
            <ul className="space-y-3">
              <li><Link href="/research#ai" className={linkCn}>AI & Machine Learning</Link></li>
              <li><Link href="/research#crypto" className={linkCn}>Cryptography</Link></li>
              <li><Link href="/research#consensus" className={linkCn}>Consensus & Networks</Link></li>
              <li><Link href="/research#papers" className={linkCn}>Papers</Link></li>
              <li><a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer" className={linkCn}>Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className={linkCn}>About Us</Link></li>
              <li><Link href="/team" className={linkCn}>Team</Link></li>
              <li><Link href="/careers" className={linkCn}>Careers</Link></li>
              <li><Link href="/press" className={linkCn}>Press</Link></li>
              <li><Link href="/contact" className={linkCn}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Powered by Zen banner */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <span className="text-sm text-foreground/30">Powered by</span>
            <a href="https://hanzo.ai/zen" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border transition-colors border-border bg-foreground/5 hover:bg-accent text-muted-foreground hover:text-foreground"
            >
              <span className="text-muted-foreground text-sm">&#9889;</span>
              <span className="text-sm font-medium">Zen 4 Models</span>
              <span className="text-xs text-muted-foreground">600M-1T+ params</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div className="text-sm text-muted-foreground">
                &copy; 2016-2026 Hanzo AI Inc & Hanzo Industries Inc. All rights reserved.
              </div>
              <Link href="/status" className="inline-flex items-center space-x-2 text-sm transition-colors text-muted-foreground hover:text-foreground">
                <Check className="h-4 w-4 text-muted-foreground" />
                <span>All systems operational</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Techstars &apos;17</span>
              </div>
              <Link href="/privacy" className={linkCn}>Privacy Policy</Link>
              <Link href="/terms" className={linkCn}>Terms of Service</Link>
              <Link href="/security" className={linkCn}>Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
