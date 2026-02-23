'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@hanzo/ui'
import {
  ChevronDown, ExternalLink, Menu, X, Bot, Code2, Cloud, Cpu, MessageSquare,
  BookOpen, Microscope, Brain, Shield, Network, Boxes, FlaskConical, FileText,
  Github, Sparkles, Video, Box, Zap,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import NavbarContainer from './navigation/NavbarContainer'
import Logo from './Logo'
import { cn } from '@/lib/utils'

const zenModels = [
  { name: 'zen-eco', params: '4B', description: 'Fast general-purpose LLM', icon: Brain, href: 'https://huggingface.co/zenlm/zen-eco-4b-instruct' },
  { name: 'zen-omni', params: '8B', description: 'Multimodal vision + audio', icon: Sparkles, href: 'https://huggingface.co/zenlm/zen-omni-8b' },
  { name: 'zen-director', params: '5B', description: 'Text-to-video generation', icon: Video, href: 'https://huggingface.co/zenlm/zen-director-5b' },
  { name: 'zen-3d', params: '3.3B', description: '3D asset generation', icon: Box, href: 'https://huggingface.co/zenlm/zen-3d' },
]

const quickAccess = [
  { label: 'Hanzo Dev', desc: 'AI coding agent', href: 'https://hanzo.ai/dev', external: true },
  { label: 'Hanzo Bot', desc: 'AI team in a box', href: 'https://hanzo.bot', external: true },
  { label: 'Hanzo Team', desc: 'Work with Hanzo engineers', href: 'https://hanzo.team', external: true },
  { label: 'All Zen Models', desc: '600M-1T+ parameters', href: '/models', external: false },
]

const loginItems = [
  { label: 'Hanzo AI', href: 'https://hanzo.ai', external: true },
  { label: 'Hanzo Chat', href: 'https://hanzo.chat', external: true },
  { label: 'Hanzo Bot', href: 'https://app.hanzo.bot', external: true },
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
    <div className="relative" ref={menuRef}
      onMouseEnter={() => { clearTimeoutRef(); setIsOpen(true) }}
      onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(() => setIsOpen(false), 300) }}
    >
      <Button size="sm" onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'rounded-full px-5 font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg',
          'bg-white text-black hover:bg-white/90 shadow-white/10',
          isOpen && 'bg-white/90'
        )}
      >
        Try Hanzo
        <ChevronDown className={cn('w-4 h-4 ml-1 transition-transform duration-200', isOpen && 'rotate-180')} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full w-[420px] z-50"
          >
            <div className="h-2" />
            <div className="backdrop-blur-xl border rounded-2xl shadow-2xl overflow-hidden bg-neutral-900/95 border-white/10 shadow-black/50">
              {/* Zen AI Models */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-white/50" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">Zen AI Models</span>
                  </div>
                  <button onClick={() => { setIsOpen(false); router.push('/models') }}
                    className="text-xs transition-colors text-white/40 hover:text-white">
                    View all &rarr;
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {zenModels.map((model) => {
                    const ModelIcon = model.icon
                    return (
                      <a key={model.name} href={model.href} target="_blank" rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl transition-colors bg-white/5 hover:bg-white/10"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/10">
                          <ModelIcon className="w-4 h-4 text-white/70 group-hover:text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">{model.name}</span>
                            <span className="text-[10px] font-mono text-white/40">{model.params}</span>
                          </div>
                          <p className="text-xs truncate text-white/40">{model.description}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* Quick Access */}
              <div className="py-2">
                <div className="px-4 py-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">Quick Access</span>
                </div>
                {quickAccess.map((item) =>
                  item.external ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between w-full py-2 px-4 transition-colors text-white hover:bg-white/5"
                    >
                      <div>
                        <span className="text-sm">{item.label}</span>
                        {item.desc && <span className="text-xs ml-2 text-white/30">{item.desc}</span>}
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-white/30" />
                    </a>
                  ) : (
                    <button key={item.label}
                      onClick={() => { setIsOpen(false); router.push(item.href) }}
                      className="flex items-center justify-between w-full py-2 px-4 text-left transition-colors text-white hover:bg-white/5"
                    >
                      <div>
                        <span className="text-sm">{item.label}</span>
                        {item.desc && <span className="text-xs ml-2 text-white/30">{item.desc}</span>}
                      </div>
                    </button>
                  )
                )}
              </div>

              <div className="border-t border-white/10" />

              {/* Login */}
              <div className="py-2">
                <div className="px-4 py-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">Log in</span>
                </div>
                {loginItems.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between w-full py-2 px-4 transition-colors text-white hover:bg-white/5"
                  >
                    <span className="text-sm">{item.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30" />
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
      { label: 'Papers', href: '/research#papers', description: '58 published research papers', icon: FileText },
      { label: 'Open Source', href: 'https://github.com/hanzoai', description: 'GitHub repositories', icon: Github, external: true },
    ],
  },
  models: {
    title: 'Models',
    items: [
      { label: 'Zen Models', href: '/models', description: '600M-1T+ parameter models', icon: Sparkles },
      { label: 'Zen Coder', href: '/models#coder', description: 'Code generation and analysis', icon: Code2 },
      { label: 'Zen Omni', href: '/models#omni', description: 'Multimodal vision & audio', icon: Boxes },
      { label: 'Model API', href: 'https://hanzo.ai/api', description: 'API access and pricing', icon: Cpu, external: true },
      { label: 'Hugging Face', href: 'https://huggingface.co/zenlm', description: 'Download models', icon: Bot, external: true },
    ],
  },
  products: {
    title: 'Products',
    items: [
      { label: 'Hanzo AI', href: 'https://hanzo.ai', description: 'Full AI platform and cloud', icon: Brain, external: true },
      { label: 'Hanzo Bot', href: 'https://hanzo.bot', description: 'AI team in a box', icon: Bot, external: true },
      { label: 'Hanzo Dev', href: 'https://hanzo.ai/dev', description: 'AI coding agent', icon: Code2, external: true },
      { label: 'Hanzo Team', href: 'https://hanzo.team', description: 'Work with Hanzo engineers', icon: Boxes, external: true },
      { label: 'Hanzo Chat', href: 'https://hanzo.chat', description: 'AI chat & bot manager', icon: MessageSquare, external: true },
      { label: 'LLM Gateway', href: 'https://docs.hanzo.ai/docs/llm', description: '200+ AI models, one API', icon: Cpu, external: true },
    ],
  },
  developers: {
    title: 'Developers',
    items: [
      { label: 'Documentation', href: 'https://docs.hanzo.ai', description: 'Technical guides', icon: BookOpen, external: true },
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
    <div className="relative" ref={menuRef}
      onMouseEnter={() => { clearTimeoutRef(); onOpen() }}
      onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(onClose, 300) }}
    >
      <button onClick={() => isOpen ? onClose() : onOpen()}
        className={cn(
          'flex items-center gap-1 font-medium transition-all duration-200 text-sm py-2 px-3 rounded-lg',
          isOpen ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
        )}
      >
        {menu.title}
        <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 top-full w-80 z-50"
            onMouseEnter={() => { clearTimeoutRef(); onOpen() }}
            onMouseLeave={() => { clearTimeoutRef(); timeoutRef.current = setTimeout(onClose, 300) }}
          >
            <div className="h-2" />
            <div className="backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden bg-neutral-900/95 border-white/10 shadow-black/50">
              <div className="py-2">
                {menu.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <button key={item.label} onClick={() => handleItemClick(item)}
                      className="w-full text-left px-4 py-3 transition-all duration-150 group flex items-center gap-3 hover:bg-white/10"
                    >
                      {Icon && (
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors bg-white/10 group-hover:bg-white/20">
                          <Icon className="w-4 h-4 text-white/70 group-hover:text-white" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm transition-colors duration-150 text-white/90 group-hover:text-white">{item.label}</span>
                          {item.external && <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-white/30 group-hover:text-white/60" />}
                        </div>
                        <p className="text-xs mt-0.5 transition-colors duration-150 truncate text-white/40 group-hover:text-white/60">{item.description}</p>
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

      <div className="hidden md:flex items-center space-x-1">
        {Object.entries(navMenus).map(([key, menu]) => (
          <DropdownMenu key={key} menu={menu}
            isOpen={openMenu === key}
            onOpen={() => setOpenMenu(key)}
            onClose={() => setOpenMenu(null)}
          />
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-3">
        <TryHanzoDropdown />
      </div>

      <button
        className="md:hidden p-2 rounded-lg transition-all duration-200 text-white/70 hover:text-white hover:bg-white/10"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Menu className="w-6 h-6" />
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
            className="absolute top-full left-0 right-0 md:hidden backdrop-blur-xl border-t rounded-b-2xl overflow-hidden bg-neutral-900/98 border-white/10"
          >
            <div className="py-4 space-y-4 px-4 max-h-[70vh] overflow-y-auto">
              {Object.entries(navMenus).map(([key, menu]) => (
                <div key={key} className="space-y-2">
                  <div className="text-xs font-medium uppercase tracking-wider px-2 text-white/40">{menu.title}</div>
                  {menu.items.map((item) => (
                    <Link key={item.label}
                      href={item.external ? '#' : item.href}
                      onClick={(e) => {
                        if (item.external) { e.preventDefault(); window.open(item.href, '_blank') }
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex items-center justify-between py-2 px-2 rounded-lg transition-all duration-150 text-white/70 hover:text-white hover:bg-white/5"
                    >
                      <span>{item.label}</span>
                      {item.external && <ExternalLink className="w-3.5 h-3.5 text-white/30" />}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-white/10">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Contact</Button>
                </Link>
                <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-black hover:bg-white/90">Try Zen</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NavbarContainer>
  )
}
