import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./navigation/MobileMenu";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation menu configuration - Anthropic style
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

  const handleItemClick = (item: typeof menu.items[0]) => {
    onClose();
    if ('external' in item && item.external) {
      window.open(item.href, "_blank");
    } else {
      navigate(item.href);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-gray-700 hover:text-black font-medium transition-colors text-sm py-2"
      >
        {menu.title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="py-2">
              {menu.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 group-hover:text-black text-sm">
                      {item.label}
                    </span>
                    {'external' in item && item.external && (
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/hanzo-logo.png"
              alt="Hanzo"
              className="h-8 w-8"
            />
            <span className="text-black font-semibold text-xl">Hanzo Industries</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu
              menu={navMenus.research}
              isOpen={openMenu === 'research'}
              onToggle={() => handleMenuToggle('research')}
              onClose={() => setOpenMenu(null)}
            />
            <DropdownMenu
              menu={navMenus.products}
              isOpen={openMenu === 'products'}
              onToggle={() => handleMenuToggle('products')}
              onClose={() => setOpenMenu(null)}
            />
            <DropdownMenu
              menu={navMenus.solutions}
              isOpen={openMenu === 'solutions'}
              onToggle={() => handleMenuToggle('solutions')}
              onClose={() => setOpenMenu(null)}
            />
            <DropdownMenu
              menu={navMenus.company}
              isOpen={openMenu === 'company'}
              onToggle={() => handleMenuToggle('company')}
              onClose={() => setOpenMenu(null)}
            />
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-black hover:bg-transparent font-medium"
              >
                Contact Sales
              </Button>
            </Link>
            <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-black text-white hover:bg-gray-800 rounded-full px-5"
              >
                Try Hanzo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-4">
                {Object.entries(navMenus).map(([key, menu]) => (
                  <div key={key} className="space-y-2">
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider px-4">
                      {menu.title}
                    </div>
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="pt-4 px-4 space-y-2">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                  <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Try Hanzo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
