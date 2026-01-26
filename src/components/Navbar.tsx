import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink, Menu, X, Bot, Code2, Cloud, Cpu, MessageSquare, BookOpen, Microscope, Brain, Shield, Network, Boxes, FlaskConical, FileText, Github, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarContainer from "./navigation/NavbarContainer";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

// Try Hanzo dropdown items
const tryHanzoItems = [
  { label: "Hanzo AI", href: "https://hanzo.ai", description: "AI platform & models", icon: Bot },
  { label: "Hanzo Chat", href: "https://hanzo.ai/chat", description: "AI assistant", icon: MessageSquare },
  { label: "Hanzo Dev", href: "https://hanzo.ai/dev", description: "AI coding tools", icon: Code2 },
  { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", description: "AI infrastructure", icon: Cloud },
  { label: "API Console", href: "https://hanzo.ai/api", description: "API access", icon: Cpu },
];

// Try Hanzo Dropdown Component
const TryHanzoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { isDarkMode } = useTheme();

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleMouseEnter = () => {
    clearTimeoutRef();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full px-5 font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg",
          isDarkMode
            ? "bg-white text-black hover:bg-white/90 shadow-white/10"
            : "bg-black text-white hover:bg-black/90 shadow-black/10",
          isOpen && (isDarkMode ? "bg-white/90" : "bg-black/90")
        )}
      >
        Try Zen
        <ChevronDown className={cn("w-4 h-4 ml-1 transition-transform duration-200", isOpen && "rotate-180")} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute right-0 mt-2 w-64 backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden z-50",
              isDarkMode
                ? "bg-neutral-900/95 border-white/10 shadow-black/50"
                : "bg-white/95 border-black/10 shadow-black/10"
            )}
          >
            <div className="py-2">
              {tryHanzoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.03 }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 transition-all duration-150 group",
                      isDarkMode ? "hover:bg-white/10" : "hover:bg-black/5"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                      isDarkMode
                        ? "bg-white/10 group-hover:bg-white/20"
                        : "bg-black/5 group-hover:bg-black/10"
                    )}>
                      <Icon className={cn(
                        "w-4 h-4",
                        isDarkMode
                          ? "text-white/70 group-hover:text-white"
                          : "text-black/70 group-hover:text-black"
                      )} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "font-medium text-sm",
                          isDarkMode
                            ? "text-white/90 group-hover:text-white"
                            : "text-black/90 group-hover:text-black"
                        )}>
                          {item.label}
                        </span>
                        <ExternalLink className={cn(
                          "w-3 h-3",
                          isDarkMode
                            ? "text-white/30 group-hover:text-white/60"
                            : "text-black/30 group-hover:text-black/60"
                        )} />
                      </div>
                      <p className={cn(
                        "text-xs",
                        isDarkMode
                          ? "text-white/40 group-hover:text-white/60"
                          : "text-black/40 group-hover:text-black/60"
                      )}>{item.description}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Navigation menu configuration - Research-focused
const navMenus = {
  research: {
    title: "Research",
    items: [
      { label: "Overview", href: "/research", description: "Our research mission and approach", icon: Microscope },
      { label: "AI & Machine Learning", href: "/research#ai", description: "Frontier AI models and training", icon: Brain },
      { label: "Cryptography", href: "/research#crypto", description: "Post-quantum and FHE research", icon: Shield },
      { label: "Consensus & Networks", href: "/research#consensus", description: "Distributed systems and blockchain", icon: Network },
      { label: "Papers", href: "/research#papers", description: "58 published research papers", icon: FileText },
      { label: "Open Source", href: "https://github.com/hanzoai", description: "GitHub repositories", icon: Github, external: true },
    ],
  },
  models: {
    title: "Models",
    items: [
      { label: "Zen Models", href: "/models", description: "600M-480B parameter models", icon: Sparkles },
      { label: "Zen Coder", href: "/models#coder", description: "Code generation and analysis", icon: Code2 },
      { label: "Zen Omni", href: "/models#omni", description: "Multimodal vision & audio", icon: Boxes },
      { label: "Model API", href: "https://hanzo.ai/api", description: "API access and pricing", icon: Cpu, external: true },
      { label: "Hugging Face", href: "https://huggingface.co/zenlm", description: "Download models", icon: Bot, external: true },
    ],
  },
  products: {
    title: "Products",
    items: [
      { label: "Hanzo AI", href: "https://hanzo.ai", description: "AI platform and models", icon: Bot, external: true },
      { label: "Hanzo Dev", href: "https://hanzo.ai/dev", description: "AI-powered development tools", icon: Code2, external: true },
      { label: "Zoo Gym", href: "https://gym.zoo.ngo", description: "AI training platform", icon: FlaskConical, external: true },
      { label: "Lux Network", href: "https://lux.network", description: "Blockchain infrastructure", icon: Network, external: true },
    ],
  },
  learn: {
    title: "Learn",
    items: [
      { label: "Blog", href: "/blog", description: "Latest insights and updates", icon: BookOpen },
      { label: "News", href: "/news", description: "Announcements and press", icon: FileText },
      { label: "Documentation", href: "https://docs.hanzo.ai", description: "Technical guides", icon: BookOpen, external: true },
      { label: "Case Studies", href: "/case-studies", description: "Real-world implementations", icon: Microscope },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About", href: "/about", description: "Our mission and values" },
      { label: "Team", href: "/team", description: "Meet our researchers" },
      { label: "Careers", href: "/careers", description: "Join us" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
    ],
  },
};

interface MenuItem {
  label: string;
  href: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

interface MenuConfig {
  title: string;
  items: MenuItem[];
}

interface DropdownMenuProps {
  menu: MenuConfig;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const DropdownMenu = ({ menu, isOpen, onOpen, onClose }: DropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { isDarkMode } = useTheme();

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimeoutRef();
  }, [clearTimeoutRef]);

  const handleItemClick = (item: MenuItem) => {
    onClose();
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      navigate(item.href);
    }
  };

  const handleMouseEnter = () => {
    clearTimeoutRef();
    onOpen();
  };

  const handleMouseLeave = () => {
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => isOpen ? onClose() : onOpen()}
        className={cn(
          "flex items-center gap-1 font-medium transition-all duration-200 text-sm py-2 px-3 rounded-lg",
          isOpen
            ? isDarkMode
              ? "text-white bg-white/10"
              : "text-black bg-black/10"
            : isDarkMode
              ? "text-white/70 hover:text-white hover:bg-white/5"
              : "text-black/70 hover:text-black hover:bg-black/5"
        )}
      >
        {menu.title}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute left-0 mt-2 w-80 backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden z-50",
              isDarkMode
                ? "bg-neutral-900/95 border-white/10 shadow-black/50"
                : "bg-white/95 border-black/10 shadow-black/10"
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="py-2">
              {menu.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => handleItemClick(item)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.03 }}
                    className={cn(
                      "w-full text-left px-4 py-3 transition-all duration-150 group flex items-center gap-3",
                      isDarkMode ? "hover:bg-white/10" : "hover:bg-black/5"
                    )}
                  >
                    {Icon && (
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                        isDarkMode
                          ? "bg-white/10 group-hover:bg-white/20"
                          : "bg-black/5 group-hover:bg-black/10"
                      )}>
                        <Icon className={cn(
                          "w-4 h-4",
                          isDarkMode
                            ? "text-white/70 group-hover:text-white"
                            : "text-black/70 group-hover:text-black"
                        )} />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "font-medium text-sm transition-colors duration-150",
                          isDarkMode
                            ? "text-white/90 group-hover:text-white"
                            : "text-black/90 group-hover:text-black"
                        )}>
                          {item.label}
                        </span>
                        {item.external && (
                          <ExternalLink className={cn(
                            "w-3.5 h-3.5 flex-shrink-0 transition-colors duration-150",
                            isDarkMode
                              ? "text-white/30 group-hover:text-white/60"
                              : "text-black/30 group-hover:text-black/60"
                          )} />
                        )}
                      </div>
                      <p className={cn(
                        "text-xs mt-0.5 transition-colors duration-150 truncate",
                        isDarkMode
                          ? "text-white/40 group-hover:text-white/60"
                          : "text-black/40 group-hover:text-black/60"
                      )}>
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { isDarkMode } = useTheme();

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleMenuOpen = (menuKey: string) => {
    setOpenMenu(menuKey);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo size="md" showText={true} />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <DropdownMenu
          menu={navMenus.research}
          isOpen={openMenu === "research"}
          onOpen={() => handleMenuOpen("research")}
          onClose={handleMenuClose}
        />
        <DropdownMenu
          menu={navMenus.models}
          isOpen={openMenu === "models"}
          onOpen={() => handleMenuOpen("models")}
          onClose={handleMenuClose}
        />
        <DropdownMenu
          menu={navMenus.products}
          isOpen={openMenu === "products"}
          onOpen={() => handleMenuOpen("products")}
          onClose={handleMenuClose}
        />
        <DropdownMenu
          menu={navMenus.learn}
          isOpen={openMenu === "learn"}
          onOpen={() => handleMenuOpen("learn")}
          onClose={handleMenuClose}
        />
        <DropdownMenu
          menu={navMenus.company}
          isOpen={openMenu === "company"}
          onOpen={() => handleMenuOpen("company")}
          onClose={handleMenuClose}
        />
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <ThemeSwitcher size="sm" />
        <Link to="/news">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "font-medium transition-all duration-200 rounded-full px-5",
              isDarkMode
                ? "text-white/70 hover:text-white hover:bg-white/10"
                : "text-black/70 hover:text-black hover:bg-black/10"
            )}
          >
            News
          </Button>
        </Link>
        <TryHanzoDropdown />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className={cn(
          "md:hidden p-2 rounded-lg transition-all duration-200",
          isDarkMode
            ? "text-white/70 hover:text-white hover:bg-white/10"
            : "text-black/70 hover:text-black hover:bg-black/10"
        )}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute top-full left-0 right-0 md:hidden backdrop-blur-xl border-t rounded-b-2xl overflow-hidden",
              isDarkMode
                ? "bg-neutral-900/98 border-white/10"
                : "bg-white/98 border-black/10"
            )}
          >
            <div className="py-4 space-y-4 px-4 max-h-[70vh] overflow-y-auto">
              {Object.entries(navMenus).map(([key, menu]) => (
                <div key={key} className="space-y-2">
                  <div className={cn(
                    "text-xs font-medium uppercase tracking-wider px-2",
                    isDarkMode ? "text-white/40" : "text-black/40"
                  )}>
                    {menu.title}
                  </div>
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.external ? "#" : item.href}
                      onClick={(e) => {
                        if (item.external) {
                          e.preventDefault();
                          window.open(item.href, "_blank");
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between py-2 px-2 rounded-lg transition-all duration-150",
                        isDarkMode
                          ? "text-white/70 hover:text-white hover:bg-white/5"
                          : "text-black/70 hover:text-black hover:bg-black/5"
                      )}
                    >
                      <span>{item.label}</span>
                      {item.external && (
                        <ExternalLink className={cn(
                          "w-3.5 h-3.5",
                          isDarkMode ? "text-white/30" : "text-black/30"
                        )} />
                      )}
                    </Link>
                  ))}
                </div>
              ))}
              <div className={cn(
                "pt-4 space-y-2 border-t",
                isDarkMode ? "border-white/10" : "border-black/10"
              )}>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full transition-all duration-200",
                      isDarkMode
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-black/20 text-black hover:bg-black/10"
                    )}
                  >
                    Contact
                  </Button>
                </Link>
                <a
                  href="https://hanzo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={cn(
                    "w-full transition-all duration-200",
                    isDarkMode
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-black text-white hover:bg-black/90"
                  )}>
                    Try Zen
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
