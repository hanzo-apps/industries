import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarContainer from "./navigation/NavbarContainer";
import { cn } from "@/lib/utils";

// Navigation menu configuration
const navMenus = {
  research: {
    title: "Research",
    items: [
      { label: "Overview", href: "/research", description: "Our research mission and approach" },
      { label: "Papers", href: "/research/papers", description: "Published research papers" },
      { label: "Open Source", href: "/research/open-source", description: "GitHub repositories and projects" },
      { label: "Blog", href: "/blog", description: "Research updates and insights" },
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
}

const DropdownMenu = ({ menu, isOpen, onToggle, onClose }: DropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-white/80 hover:text-white font-medium transition-all duration-300 text-sm py-2"
      >
        {menu.title}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
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
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-3 w-72 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
          >
            <div className="py-2">
              {menu.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item)}
                  className="w-full text-left px-4 py-3 hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white/90 group-hover:text-white text-sm transition-colors duration-200">
                      {item.label}
                    </span>
                    {"external" in item && item.external && (
                      <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white/60 transition-colors duration-200" />
                    )}
                  </div>
                  <p className="text-xs text-white/50 mt-0.5 group-hover:text-white/70 transition-colors duration-200">
                    {item.description}
                  </p>
                </button>
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
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleMenuToggle = (menuKey: string) => {
    setOpenMenu(openMenu === menuKey ? null : menuKey);
  };

  return (
    <NavbarContainer>
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 group">
        <img
          src="/hanzo-logo.png"
          alt="Hanzo"
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
        />
        <span className="text-white font-semibold text-xl transition-colors duration-300 group-hover:text-white/90">
          Hanzo Industries
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <DropdownMenu
          menu={navMenus.research}
          isOpen={openMenu === "research"}
          onToggle={() => handleMenuToggle("research")}
          onClose={() => setOpenMenu(null)}
        />
        <DropdownMenu
          menu={navMenus.products}
          isOpen={openMenu === "products"}
          onToggle={() => handleMenuToggle("products")}
          onClose={() => setOpenMenu(null)}
        />
        <DropdownMenu
          menu={navMenus.solutions}
          isOpen={openMenu === "solutions"}
          onToggle={() => handleMenuToggle("solutions")}
          onClose={() => setOpenMenu(null)}
        />
        <DropdownMenu
          menu={navMenus.company}
          isOpen={openMenu === "company"}
          onToggle={() => handleMenuToggle("company")}
          onClose={() => setOpenMenu(null)}
        />
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/contact">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white hover:bg-white/10 font-medium transition-all duration-300"
          >
            Contact Sales
          </Button>
        </Link>
        <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="bg-white text-black hover:bg-white/90 rounded-full px-5 font-medium transition-all duration-300 hover:scale-105"
          >
            Try Hanzo
          </Button>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 rounded-b-2xl overflow-hidden"
          >
            <div className="py-4 space-y-4 px-4">
              {Object.entries(navMenus).map(([key, menu]) => (
                <div key={key} className="space-y-2">
                  <div className="text-xs font-medium text-white/40 uppercase tracking-wider">
                    {menu.title}
                  </div>
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Sales
                  </Button>
                </Link>
                <a
                  href="https://hanzo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300">
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
