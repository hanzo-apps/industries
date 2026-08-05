'use client'

import Link from 'next/link'
import { Activity, Github, FileText, Award, ExternalLink } from 'lucide-react'
import Logo from './Logo'
import { cn } from '@hanzo/ui'
import site from '@/site.config'

const linkCn = 'hz-t-sm hz-link'

export default function Footer() {
  return (
    <footer className="hz-border-t hz-bg hz-fg">
      <div className="hz-container hz-py-7">
        <div className="hz-grid hz-grid-5 hz-gap-6">
          <div className="">
            <Logo size="md" showText={true} className="hz-mb-5" />
            <p className="hz-mb-5 hz-mw-sm hz-fg">
              {site.brand.description}
            </p>
            <div className="hz-row hz-ai-center hz-inline-4">
              <Link href="/open-source" className="hz-row hz-ai-center hz-inline-2">
                <Github className="hz-sq-3 hz-transition hz-fg hz-hoverable" />
                <span className="hz-t-sm hz-transition hz-fg hz-hoverable">Open Source</span>
              </Link>
              <Link href="/research#papers" className="hz-row hz-ai-center hz-inline-2">
                <FileText className="hz-sq-3 hz-transition hz-fg hz-hoverable" />
                <span className="hz-t-sm hz-transition hz-fg hz-hoverable">130+ Papers</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="hz-w-semibold hz-mb-4">Products</h4>
            <ul className="hz-stack-3">
              <li><a href={site.links.platform} target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo AI</a></li>
              <li><a href={site.links.bot} target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Bot</a></li>
              <li><a href={site.links.dev} target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Dev</a></li>
              <li><a href={site.links.team} target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Team</a></li>
              <li><a href={site.links.chat} target="_blank" rel="noopener noreferrer" className={linkCn}>Hanzo Chat</a></li>
              <li><Link href="/models" className={linkCn}>Zen Models</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="hz-w-semibold hz-mb-4">Research</h4>
            <ul className="hz-stack-3">
              <li><Link href="/research#ai" className={linkCn}>AI & Machine Learning</Link></li>
              <li><Link href="/research#crypto" className={linkCn}>Cryptography</Link></li>
              <li><Link href="/research#consensus" className={linkCn}>Consensus & Networks</Link></li>
              <li><Link href="/research#papers" className={linkCn}>Papers</Link></li>
              <li><a href={site.links.docs} target="_blank" rel="noopener noreferrer" className={linkCn}>Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="hz-w-semibold hz-mb-4">Company</h4>
            <ul className="hz-stack-3">
              <li><Link href="/about" className={linkCn}>About Us</Link></li>
              <li><Link href="/team" className={linkCn}>Team</Link></li>
              <li><Link href="/careers" className={linkCn}>Careers</Link></li>
              <li><Link href="/press" className={linkCn}>Press</Link></li>
              <li><Link href="/contact" className={linkCn}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Powered by Zen banner */}
        <div className="hz-mt-7 hz-pt-6 hz-border-t">
          <div className="hz-col-row hz-ai-center hz-jc-center hz-gap-3 hz-mb-6">
            <span className="hz-t-sm hz-fg-soft">Powered by</span>
            <a href={site.links.zenModels} target="_blank" rel="noopener noreferrer"
              className="hz-btn hz-btn-primary hz-gap-2 hz-transition hz-fg"
            >
              <span className="hz-fg hz-t-sm">&#9889;</span>
              <span className="hz-t-sm hz-w-medium">Zen 4 Models</span>
              <span className="hz-t-xs hz-fg">600M-1T+ params</span>
            </a>
          </div>
        </div>

        <div className="hz-pt-6 hz-border-t">
          <div className="hz-col-row hz-jc-between hz-ai-center hz-stack-4">
            <div className="hz-row hz-wrap hz-ai-center hz-gap-6 hz-gap-2">
              <div className="hz-t-sm hz-fg">
                &copy; {site.brand.foundedYear}-{new Date().getFullYear()} {site.brand.legalName}. All rights reserved.
              </div>
              {/* A link to the status page, not a verdict about it. This read
                  "All systems operational" as a hardcoded string on every page
                  of the site, with no health check behind it — it would have
                  gone on saying that straight through an outage. */}
              <Link href="/status" className="hz-inline hz-ai-center hz-inline-2 hz-t-sm hz-transition hz-fg hz-hoverable">
                <Activity className="hz-sq-2 hz-fg" />
                <span>System status</span>
              </Link>
            </div>
            <div className="hz-row hz-wrap hz-ai-center hz-gap-5 hz-gap-2">
              <div className="hz-row hz-ai-center hz-inline-2">
                <Award className="hz-sq-2 hz-fg" />
                <span className="hz-t-sm hz-fg">{site.brand.badge}</span>
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
