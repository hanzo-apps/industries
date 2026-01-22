import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink, Menu, X, Bot, Code2, Cloud, Cpu, MessageSquare } from "lucide-react";
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isDarkMode } = useTheme();

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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
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
        Try Hanzo
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

// Navigation menu configuration
const navMenus = {
  research: {
    title: "Research",
    items: [
      { label: "Overview", href: "/research", description: "Our research mission and approach" },
      { label: "Papers", href: "/research/papers", description: "Published research papers" },
      { label: "Open Source", href: "/research/open-source", description: "GitHub repositories and projects" },
    ],
  },
  products: {
    title: "Products",
    items: [
      { label: "Hanzo AI", href: "https://hanzo.ai", description: "AI platform and models", external: true },
      { label: "Hanzo Dev", href: "https://hanzo.ai/dev", description: "AI-powered development tools", external: true },
      { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", description: "Enterprise AI infrastructure", external: true },
      { label: "API Access", href: "https://hanzo.ai/api", description: "Model API and integrations", external: true },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { label: "Enterprise", href: "/solutions/enterprise", description: "AI solutions for enterprise" },
      { label: "Defense & Intelligence", href: "/defense", description: "Secure AI for government" },
      { label: "Edge Deployment", href: "/solutions/edge", description: "On-premise AI infrastructure" },
      { label: "Custom Models", href: "/solutions/custom", description: "Fine-tuned models for your needs" },
    ],
  },
  learn: {
    title: "Learn",
    items: [
      { label: "Blog", href: "/blog", description: "Latest insights and updates" },
      { label: "Research", href: "/research", description: "Our research and publications" },
      { label: "Documentation", href: "/docs", description: "Technical guides and API docs" },
      { label: "Examples", href: "/examples", description: "Sample code and tutorials" },
      { label: "Case Studies", href: "/case-studies", description: "Real-world implementations" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About", href: "/about", description: "Our mission and values" },
      { label: "Team", href: "/team", description: "Meet our team" },
      { label: "Careers", href: "/careers", description: "Join us" },
      { label: "News", href: "/news", description: "Latest announcements" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
    ],
  },
};

interface DropdownMenuProps {
  menu: typeof navMenus.research;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onHover: () => void;
}

const DropdownMenu = ({ menu, isOpen, onToggle, onClose, onHover }: DropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: (typeof menu.items)[0]) => {
    onClose();
    if ("external" in item && item.external) {
      window.open(item.href, "_blank");
    } else {
      navigate(item.href);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onHover();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 150);
  };

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={onToggle}
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
              "absolute left-0 mt-2 w-72 backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden z-50",
              isDarkMode
                ? "bg-neutral-900/95 border-white/10 shadow-black/50"
                : "bg-white/95 border-black/10 shadow-black/10"
            )}
          >
            <div className="py-2">
              {menu.items.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleItemClick(item)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.03 }}
                  className={cn(
                    "w-full text-left px-4 py-3 transition-all duration-150 group",
                    isDarkMode ? "hover:bg-white/10" : "hover:bg-black/5"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "font-medium text-sm transition-colors duration-150",
                      isDarkMode
                        ? "text-white/90 group-hover:text-white"
                        : "text-black/90 group-hover:text-black"
                    )}>
                      {item.label}
                    </span>
                    {"external" in item && item.external && (
                      <ExternalLink className={cn(
                        "w-3.5 h-3.5 transition-colors duration-150",
                        isDarkMode
                          ? "text-white/30 group-hover:text-white/60"
                          : "text-black/30 group-hover:text-black/60"
                      )} />
                    )}
                  </div>
                  <p className={cn(
                    "text-xs mt-0.5 transition-colors duration-150",
                    isDarkMode
                      ? "text-white/40 group-hover:text-white/60"
                      : "text-black/40 group-hover:text-black/60"
                  )}>
                    {item.description}
                  </p>
                </motion.button>
              ))}
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

  const handleMenuToggle = (menuKey: string) => {
    setOpenMenu(openMenu === menuKey ? null : menuKey);
  };

  const handleMenuHover = (menuKey: string) => {
    setOpenMenu(menuKey);
  };

  return (
    <NavbarContainer>
      {/* Animated Logo */}
      <Logo size="md" showText={true} />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <DropdownMenu
          menu={navMenus.research}
          isOpen={openMenu === "research"}
          onToggle={() => handleMenuToggle("research")}
          onClose={() => setOpenMenu(null)}
          onHover={() => handleMenuHover("research")}
        />
        <DropdownMenu
          menu={navMenus.products}
          isOpen={openMenu === "products"}
          onToggle={() => handleMenuToggle("products")}
          onClose={() => setOpenMenu(null)}
          onHover={() => handleMenuHover("products")}
        />
        <DropdownMenu
          menu={navMenus.solutions}
          isOpen={openMenu === "solutions"}
          onToggle={() => handleMenuToggle("solutions")}
          onClose={() => setOpenMenu(null)}
          onHover={() => handleMenuHover("solutions")}
        />
        <DropdownMenu
          menu={navMenus.learn}
          isOpen={openMenu === "learn"}
          onToggle={() => handleMenuToggle("learn")}
          onClose={() => setOpenMenu(null)}
          onHover={() => handleMenuHover("learn")}
        />
        <DropdownMenu
          menu={navMenus.company}
          isOpen={openMenu === "company"}
          onToggle={() => handleMenuToggle("company")}
          onClose={() => setOpenMenu(null)}
          onHover={() => handleMenuHover("company")}
        />
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <ThemeSwitcher size="sm" />
        <Link to="/contact">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10 font-medium transition-all duration-200 rounded-full px-5 dark:text-white/70 dark:hover:text-white"
          >
            Contact Sales
          </Button>
        </Link>
        <TryHanzoDropdown />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
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
            className="absolute top-full left-0 right-0 md:hidden bg-neutral-900/98 backdrop-blur-xl border-t border-white/10 rounded-b-2xl overflow-hidden"
          >
            <div className="py-4 space-y-4 px-4 max-h-[70vh] overflow-y-auto">
              {Object.entries(navMenus).map(([key, menu]) => (
                <div key={key} className="space-y-2">
                  <div className="text-xs font-medium text-white/40 uppercase tracking-wider px-2">
                    {menu.title}
                  </div>
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      to={"external" in item && item.external ? "#" : item.href}
                      onClick={(e) => {
                        if ("external" in item && item.external) {
                          e.preventDefault();
                          window.open(item.href, "_blank");
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between py-2 px-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
                    >
                      <span>{item.label}</span>
                      {"external" in item && item.external && (
                        <ExternalLink className="w-3.5 h-3.5 text-white/30" />
                      )}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-white/10">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 transition-all duration-200"
                  >
                    Contact Sales
                  </Button>
                </Link>
                <a
                  href="https://hanzo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-white text-black hover:bg-white/90 transition-all duration-200">
                    Try Hanzo
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
