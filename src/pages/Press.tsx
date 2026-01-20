import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Download,
  Mail,
  ExternalLink,
  FileText,
  Palette,
  Building2,
  Calendar,
  Globe,
  Phone,
  Users,
} from "lucide-react";

// Company facts
const companyFacts = [
  { label: "Founded", value: "2016" },
  { label: "Headquarters", value: "Los Angeles, CA" },
  { label: "Employees", value: "50+" },
  { label: "Customers", value: "10,000+" },
];

// Press releases
const pressReleases = [
  {
    date: "January 2025",
    title: "Hanzo Launches Next-Generation AI Platform",
    description: "Hanzo Industries Inc announces the launch of its comprehensive AI platform for enterprises.",
  },
  {
    date: "December 2024",
    title: "Hanzo Reaches 10,000 Customer Milestone",
    description: "The company celebrates serving over 10,000 customers worldwide with its AI solutions.",
  },
  {
    date: "November 2024",
    title: "Hanzo Dev 2.0 Released",
    description: "Major update to Hanzo Dev brings advanced AI coding capabilities.",
  },
];

// Social links
const socialLinks = [
  { name: "X (Twitter)", handle: "@hanzoai", href: "https://x.com/hanzoai" },
  { name: "LinkedIn", handle: "hanzoai", href: "https://linkedin.com/company/hanzoai" },
  { name: "GitHub", handle: "hanzoai", href: "https://github.com/hanzoai" },
  { name: "YouTube", handle: "@hanzoai", href: "https://youtube.com/@hanzoai" },
];

const LogoPreview = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 67 67" className="w-8 h-8">
    <path d="M22.21 67V44.6369H0V67H22.21Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD" />
    <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M22.21 0H0V22.3184H22.21V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD" />
    <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill={isDark ? "#ffffff" : "#000000"} />
  </svg>
);

const Press = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                Press & Media
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight mb-6">
                Press Resources
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to write about Hanzo Industries Inc. Download our press kit, access brand assets, and find media contacts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-black">About Hanzo Industries Inc</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl">
              Hanzo Industries Inc is an AI technology company building the infrastructure for the next generation of intelligent applications. Founded in 2016 and headquartered in Los Angeles, Hanzo provides enterprise-grade AI platforms, developer tools, and cloud services to companies worldwide. Our mission is to make AI accessible, safe, and beneficial for everyone.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyFacts.map((fact) => (
                <div key={fact.label} className="text-center p-6 bg-white rounded-xl border border-gray-200">
                  <div className="text-3xl font-bold text-black mb-1">{fact.value}</div>
                  <div className="text-sm text-gray-500">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-black">Press Contact</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-semibold mb-4">Media Inquiries</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:press@hanzo.ai"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    press@hanzo.ai
                  </a>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Phone className="w-4 h-4" />
                    +1 (424) 335-0550
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-semibold mb-4">Headquarters</h3>
                <div className="space-y-1 text-gray-500">
                  <p className="font-medium text-gray-700">Hanzo Industries Inc</p>
                  <p>Los Angeles, California</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-gray-500" />
                <h2 className="text-2xl font-bold text-black">Brand Assets</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Dark Background Logo */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="h-32 bg-black flex items-center justify-center">
                  <LogoPreview isDark={true} />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold mb-1">Logo - Dark Background</h3>
                  <p className="text-sm text-gray-500 mb-2">White logo for dark backgrounds</p>
                  <p className="text-xs text-gray-400">SVG, PNG</p>
                </div>
              </div>

              {/* Light Background Logo */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="h-32 bg-white flex items-center justify-center border-b border-gray-200">
                  <LogoPreview isDark={false} />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold mb-1">Logo - Light Background</h3>
                  <p className="text-sm text-gray-500 mb-2">Black logo for light backgrounds</p>
                  <p className="text-xs text-gray-400">SVG, PNG</p>
                </div>
              </div>

              {/* Icon Only */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="h-32 bg-gray-900 flex items-center justify-center">
                  <LogoPreview isDark={true} />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold mb-1">Icon Only</h3>
                  <p className="text-sm text-gray-500 mb-2">Standalone icon without wordmark</p>
                  <p className="text-xs text-gray-400">SVG, PNG, ICO</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 gap-2">
                <Download className="w-4 h-4" />
                Download Press Kit (ZIP)
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Brand Guidelines
              </Button>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-black">Recent News</h2>
            </div>
            <div className="space-y-4">
              {pressReleases.map((release) => (
                <div
                  key={release.title}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group"
                >
                  <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                  <h3 className="font-semibold text-black mb-2 group-hover:underline">{release.title}</h3>
                  <p className="text-gray-600">{release.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-black">Connect With Us</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors text-center"
                >
                  <div className="font-semibold text-black mb-1">{social.name}</div>
                  <div className="text-sm text-gray-500">{social.handle}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-black">Leadership</h2>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                For executive bios and headshots, please contact our press team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/team">
                  <Button variant="outline" className="gap-2">
                    <Users className="w-4 h-4" />
                    View Team
                  </Button>
                </Link>
                <a href="mailto:press@hanzo.ai">
                  <Button className="bg-black text-white hover:bg-gray-800 gap-2">
                    <Mail className="w-4 h-4" />
                    Request Executive Bios
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
