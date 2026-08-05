'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, cn } from '@hanzo/ui'
import {
  ChevronDown, ExternalLink, Menu, X, Bot, Code2, Cloud, Cpu, MessageSquare,
  BookOpen, Microscope, Brain, Shield, Network, Boxes, FlaskConical, FileText,
  Github, Sparkles, Video, Box, Zap, Server, Smartphone,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import NavbarContainer from './navigation/NavbarContainer'
import Logo from './Logo'
import site from '@/site.config'

const zenModels = [
  { name: 'zen-eco', params: '4B', description: 'Fast general-purpose LLM', icon: Brain, href: 'https://huggingface.co/zenlm/zen-eco-4b-instruct' },
  { name: 'zen-omni', params: '8B', description: 'Multimodal vision + audio', icon: Sparkles, href: 'https://huggingface.co/zenlm/zen-omni-8b' },
  { name: 'zen-director', params: '5B', description: 'Text-to-video generation', icon: Video, href: 'https://huggingface.co/zenlm/zen-director-5b' },
  { name: 'zen-3d', params: '3.3B', description: '3D asset generation', icon: Box, href: 'https://huggingface.co/zenlm/zen-3d' },
]

const quickAccess = [
  { label: 'Hanzo Dev', desc: 'AI coding agent', href: site.links.dev, external: true },
  { label: 'Hanzo Bot', desc: 'AI team in a box', href: site.links.bot, external: true },
  { label: 'Hanzo Team', desc: 'Work with Hanzo engineers', href: site.links.team, external: true },
  { label: 'All Zen Models', desc: '600M-1T+ parameters', href: '/models', external: false },
]

const loginItems = [
  { label: 'Hanzo AI', href: site.links.platform, external: true },
  { label: 'Hanzo Chat', href: site.links.chat, external: true },
  { label: 'Hanzo Bot', href: site.links.botApp, external: true },
]

function TryHanzoDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsOpen(false)
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="hz-rel" ref={menuRef}
      onMouseEnter={() => { clearTimeoutRef(); setIsOpen(true) }}
      onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(() => setIsOpen(false), 300) }}
    >
      <Button size="sm" onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'hz-r-full hz-px-4 hz-w-medium hz-transition hz-shadow-lg',
          'hz-bg-inverse hz-shadow hz-hoverable',
          isOpen && 'hz-bg-surface'
        )}
      >
        Try Zen
        <ChevronDown className={cn('hz-sq-2 hz-ml-1 hz-transition', isOpen && '')} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="hz-abs hz-right-0 hz-mw-full hz-z-overlay"
          >
            <div className="hz-bh-1" />
            <div className="hz-glass hz-bordered hz-r-xl hz-shadow-lg hz-clip hz-bg-surface hz-shadow">
              {/* Zen AI Models */}
              <div className="hz-p-4">
                <div className="hz-row hz-ai-center hz-jc-between hz-mb-3">
                  <div className="hz-row hz-ai-center hz-gap-2">
                    <Brain className="hz-sq-2 hz-fg" />
                    <span className="hz-t-xs hz-w-semibold hz-upper hz-tracking-wide hz-fg">Zen AI Models</span>
                  </div>
                  <button onClick={() => { setIsOpen(false); router.push('/models') }}
                    className="hz-t-xs hz-transition hz-fg hz-hoverable">
                    View all &rarr;
                  </button>
                </div>
                <div className="hz-grid hz-grid-2 hz-gap-2">
                  {zenModels.map((model) => {
                    const ModelIcon = model.icon
                    return (
                      <a key={model.name} href={model.href} target="_blank" rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="hz-row hz-ai-start hz-gap-3 hz-p-3 hz-r-lg hz-transition hz-bg-surface hz-hoverable"
                      >
                        <div className="hz-sq-5 hz-r-lg hz-row hz-ai-center hz-jc-center hz-none hz-bg-surface">
                          <ModelIcon className="hz-sq-2 hz-fg hz-hoverable" />
                        </div>
                        <div className="">
                          <div className="hz-row hz-ai-center hz-gap-2">
                            <span className="hz-t-sm hz-w-medium hz-fg">{model.name}</span>
                            <span className="hz-t-xs hz-mono hz-fg">{model.params}</span>
                          </div>
                          <p className="hz-t-xs hz-truncate hz-fg">{model.description}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="hz-border-t" />

              {/* Quick Access */}
              <div className="hz-py-2">
                <div className="hz-px-4 hz-py-2">
                  <span className="hz-t-xs hz-w-medium hz-upper hz-tracking-wide hz-fg">Quick Access</span>
                </div>
                {quickAccess.map((item) =>
                  item.external ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="hz-row hz-ai-center hz-jc-between hz-w-full hz-py-2 hz-px-4 hz-transition hz-fg hz-hoverable"
                    >
                      <div>
                        <span className="hz-t-sm">{item.label}</span>
                        {item.desc && <span className="hz-t-xs hz-ml-2 hz-fg-soft">{item.desc}</span>}
                      </div>
                      <ExternalLink className="hz-sq-2 hz-fg-soft" />
                    </a>
                  ) : (
                    <button key={item.label}
                      onClick={() => { setIsOpen(false); router.push(item.href) }}
                      className="hz-row hz-ai-center hz-jc-between hz-w-full hz-py-2 hz-px-4 hz-align-left hz-transition hz-fg hz-hoverable"
                    >
                      <div>
                        <span className="hz-t-sm">{item.label}</span>
                        {item.desc && <span className="hz-t-xs hz-ml-2 hz-fg-soft">{item.desc}</span>}
                      </div>
                    </button>
                  )
                )}
              </div>

              <div className="hz-border-t" />

              {/* Login */}
              <div className="hz-py-2">
                <div className="hz-px-4 hz-py-2">
                  <span className="hz-t-xs hz-w-medium hz-upper hz-tracking-wide hz-fg">Log in</span>
                </div>
                {loginItems.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="hz-row hz-ai-center hz-jc-between hz-w-full hz-py-2 hz-px-4 hz-transition hz-fg hz-hoverable"
                  >
                    <span className="hz-t-sm">{item.label}</span>
                    <ExternalLink className="hz-sq-2 hz-fg-soft" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface MenuItem {
  label: string; href: string; description: string
  icon?: React.ComponentType<{ className?: string }>; external?: boolean
}
interface MenuConfig { title: string; items: MenuItem[] }

const navMenus: Record<string, MenuConfig> = {
  research: {
    title: 'Research',
    items: [
      { label: 'Overview', href: '/research', description: 'Our research mission and approach', icon: Microscope },
      { label: 'AI & Machine Learning', href: '/research#ai', description: 'Frontier AI models and training', icon: Brain },
      { label: 'Cryptography', href: '/research#crypto', description: 'Post-quantum and FHE research', icon: Shield },
      { label: 'Consensus & Networks', href: '/research#consensus', description: 'Distributed systems and blockchain', icon: Network },
      { label: 'Papers', href: '/research#papers', description: '130+ published research papers', icon: FileText },
      { label: 'Open Source', href: '/open-source', description: `${site.brand.ossRepos} repos, revenue sharing`, icon: Github },
    ],
  },
  models: {
    title: 'Models',
    items: [
      { label: 'Zen Models', href: '/models', description: '600M-1T+ parameter models', icon: Sparkles },
      { label: 'Zen Coder', href: '/models#coder', description: 'Code generation and analysis', icon: Code2 },
      { label: 'Zen Omni', href: '/models#omni', description: 'Multimodal vision & audio', icon: Boxes },
      { label: 'Model API', href: site.links.modelApi, description: 'API access and pricing', icon: Cpu, external: true },
      { label: 'Hugging Face', href: site.links.huggingFace, description: 'Download models', icon: Bot, external: true },
    ],
  },
  products: {
    title: 'Products',
    items: [
      { label: 'Hanzo AI', href: site.links.platform, description: 'Full AI platform and cloud', icon: Brain, external: true },
      { label: 'Hanzo Bot', href: site.links.bot, description: 'AI team in a box', icon: Bot, external: true },
      { label: 'Hanzo Dev', href: site.links.dev, description: 'AI coding agent', icon: Code2, external: true },
      { label: 'Hanzo Team', href: site.links.team, description: 'Work with Hanzo engineers', icon: Boxes, external: true },
      { label: 'Hanzo Chat', href: site.links.chat, description: 'AI chat & bot manager', icon: MessageSquare, external: true },
      { label: 'LLM Gateway', href: 'https://docs.hanzo.ai/docs/llm', description: '200+ AI models, one API', icon: Cpu, external: true },
      { label: 'Hanzo Engine', href: site.links.engine, description: 'Cloud GPU inference engine', icon: Server, external: true },
      { label: 'Hanzo Edge', href: site.links.edge, description: 'On-device AI inference', icon: Smartphone, external: true },
    ],
  },
  developers: {
    title: 'Developers',
    items: [
      { label: 'Documentation', href: site.links.docs, description: 'Technical guides', icon: BookOpen, external: true },
      { label: 'Hanzo MCP', href: 'https://docs.hanzo.ai/docs/mcp', description: '260+ tools for AI models', icon: Cpu, external: true },
      { label: 'SDKs', href: 'https://docs.hanzo.ai/docs/sdks', description: 'Python, TS, Go, Rust', icon: Code2, external: true },
      { label: 'LLM Gateway', href: 'https://docs.hanzo.ai/docs/llm', description: '200+ models, one API', icon: Network, external: true },
      { label: 'Case Studies', href: '/case-studies', description: 'Real-world implementations', icon: Microscope },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { label: 'About', href: '/about', description: 'Our mission and values' },
      { label: 'Team', href: '/team', description: 'Leadership and AI workforce' },
      { label: 'Press', href: '/press', description: 'News and media coverage', icon: FileText },
      { label: 'Careers', href: '/careers', description: 'Join us' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' },
    ],
  },
}

function DropdownMenu({ menu, isOpen, onOpen, onClose }: { menu: MenuConfig; isOpen: boolean; onOpen: () => void; onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null }
  }, [])

  useEffect(() => { return () => clearTimeoutRef() }, [clearTimeoutRef])

  const handleItemClick = (item: MenuItem) => {
    onClose()
    if (item.external) window.open(item.href, '_blank')
    else router.push(item.href)
  }

  return (
    <div className="hz-rel" ref={menuRef}
      onMouseEnter={() => { clearTimeoutRef(); onOpen() }}
      onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(onClose, 300) }}
    >
      <button onClick={() => isOpen ? onClose() : onOpen()}
        className={cn(
          'hz-btn hz-btn-ghost hz-gap-1 hz-transition',
          isOpen ? 'hz-fg hz-bg-surface' : 'hz-fg hz-hoverable'
        )}
      >
        {menu.title}
        <ChevronDown className={cn('hz-sq-2 hz-transition', isOpen && '')} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="hz-abs hz-left-0 hz-bw-8 hz-mw-full hz-z-overlay"
            onMouseEnter={() => { clearTimeoutRef(); onOpen() }}
            onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(onClose, 300) }}
          >
            <div className="hz-bh-1" />
            <div className="hz-glass hz-bordered hz-r-lg hz-shadow-lg hz-clip hz-bg-surface hz-shadow">
              <div className="hz-py-2">
                {menu.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <button key={item.label} onClick={() => handleItemClick(item)}
                      className="hz-w-full hz-align-left hz-px-4 hz-py-3 hz-transition hz-row hz-ai-center hz-gap-3 hz-hoverable"
                    >
                      {Icon && (
                        <div className="hz-sq-5 hz-r-lg hz-row hz-ai-center hz-jc-center hz-none hz-transition hz-bg-surface hz-hoverable">
                          <Icon className="hz-sq-2 hz-fg hz-hoverable" />
                        </div>
                      )}
                      <div className="hz-grow">
                        <div className="hz-row hz-ai-center hz-jc-between">
                          <span className="hz-w-medium hz-t-sm hz-transition hz-fg-soft hz-hoverable">{item.label}</span>
                          {item.external && <ExternalLink className="hz-sq-2 hz-none hz-fg-soft hz-hoverable" />}
                        </div>
                        <p className="hz-t-xs hz-mt-1 hz-transition hz-truncate hz-fg hz-hoverable">{item.description}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenMenu(null); setIsMobileMenuOpen(false) }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <NavbarContainer>
      <Logo size="md" showText={true} />

      <div className="hz-desktop-only hz-row hz-ai-center hz-inline-1">
        {Object.entries(navMenus).map(([key, menu]) => (
          <DropdownMenu key={key} menu={menu}
            isOpen={openMenu === key}
            onOpen={() => setOpenMenu(key)}
            onClose={() => setOpenMenu(null)}
          />
        ))}
      </div>

      <div className="hz-desktop-only hz-row hz-ai-center hz-inline-3">
        <TryHanzoDropdown />
      </div>

      <button
        className="hz-mobile-only hz-p-2 hz-r-lg hz-transition hz-fg hz-hoverable"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="hz-sq-4" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Menu className="hz-sq-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="hz-mobile-only hz-abs hz-left-0 hz-right-0 hz-glass hz-border-t hz-clip hz-bg-surface"
          >
            <div className="hz-py-4 hz-stack-4 hz-px-4 hz-scroll-y">
              {Object.entries(navMenus).map(([key, menu]) => (
                <div key={key} className="hz-stack-2">
                  <div className="hz-t-xs hz-w-medium hz-upper hz-tracking-wide hz-px-2 hz-fg">{menu.title}</div>
                  {menu.items.map((item) => (
                    <Link key={item.label}
                      href={item.external ? '#' : item.href}
                      onClick={(e) => {
                        if (item.external) { e.preventDefault(); window.open(item.href, '_blank') }
                        setIsMobileMenuOpen(false)
                      }}
                      className="hz-btn hz-btn-ghost hz-jc-between hz-transition hz-fg"
                    >
                      <span>{item.label}</span>
                      {item.external && <ExternalLink className="hz-sq-2 hz-fg-soft" />}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="hz-pt-4 hz-stack-2 hz-border-t">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="hz-w-full hz-fg hz-hoverable">Contact</Button>
                </Link>
                <a href={site.links.platform} target="_blank" rel="noopener noreferrer">
                  <Button className="hz-w-full hz-bg-inverse hz-hoverable">Try Zen</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NavbarContainer>
  )
}
