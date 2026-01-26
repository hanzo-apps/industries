import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import GlobalChatWidget from "./components/GlobalChatWidget";
import CommandPalette from "./components/CommandPalette";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";
import Install from "./pages/Install";
import Status from "./pages/Status";
import Security from "./pages/Security";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import ComingSoon from "./pages/ComingSoon";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import Team from "./pages/Team";
import Capabilities from "./pages/Capabilities";
import DecentralizedAI from "./pages/capabilities/DecentralizedAI";
import CaseStudies from "./pages/CaseStudies";
import Examples from "./pages/Examples";
import Research from "./pages/Research";
import Press from "./pages/Press";
import AIModels from "./pages/AIModels";
import Blog from "./pages/Blog";
import News from "./pages/News";
import Help from "./pages/Help";
import { Brain, Code2, Bot, Users, Cpu, Zap, Shield } from "lucide-react";
import ProductPage from "./components/ProductPage";

const queryClient = new QueryClient();

const productPages = [
  {
    path: "zen",
    icon: Brain,
    title: "ZEN",
    description: "Frontier AI models from 600M to 480B parameters, optimized for efficiency and deployed across edge to cloud.",
    features: [
      "State-of-the-art language models (Qwen3+ based)",
      "95% energy reduction through efficient architecture",
      "Multi-model orchestration and management",
      "Edge deployment optimization",
      "Automated prompt engineering",
      "Real-time performance monitoring"
    ],
    documentation: "https://huggingface.co/zenlm"
  },
  {
    path: "hanzo-ai",
    icon: Bot,
    title: "HANZO AI",
    description: "Comprehensive AI platform powering next-generation intelligent applications and agentic systems.",
    features: [
      "State-of-the-art language models and APIs",
      "Custom model training and fine-tuning",
      "Multimodal AI capabilities (vision, audio, 3D)",
      "Edge deployment and optimization",
      "AI safety and alignment tools",
      "Developer-friendly SDKs and integrations"
    ],
    documentation: "https://hanzo.ai"
  },
  {
    path: "hanzo-dx",
    icon: Code2,
    title: "HANZO DX",
    description: "Developer experience platform for building AI-powered applications with best-in-class tooling.",
    features: [
      "Comprehensive development toolkit",
      "CI/CD pipeline automation",
      "Code generation and optimization",
      "Testing and quality assurance tools",
      "Performance profiling and debugging",
      "Open source libraries and frameworks"
    ],
    documentation: "https://github.com/hanzoai"
  },
  {
    path: "hanzo-ml",
    icon: Cpu,
    title: "HANZO ML",
    description: "Machine learning operations platform for enterprise AI deployment with 99.8% cost reduction in training.",
    features: [
      "Model versioning and registry",
      "Training-Free GRPO optimization",
      "A/B testing and experimentation",
      "Model monitoring and drift detection",
      "Scalable inference infrastructure",
      "MLOps best practices and governance"
    ],
    documentation: "https://hanzo.ai/ai"
  },
  {
    path: "hanzo-dev",
    icon: Zap,
    title: "HANZO DEV",
    description: "AI-accelerated development environment with intelligent coding assistance.",
    features: [
      "AI-powered code completion",
      "Intelligent debugging and error detection",
      "Automated documentation generation",
      "Performance optimization suggestions",
      "Collaborative development features",
      "Integrated learning resources"
    ],
    documentation: "https://hanzo.ai/dev"
  },
  {
    path: "hanzo-team",
    icon: Users,
    title: "HANZO TEAM",
    description: "Team collaboration and project management platform for AI research initiatives.",
    features: [
      "Project planning and tracking",
      "Resource allocation and management",
      "Real-time collaboration tools",
      "Knowledge sharing and documentation",
      "Performance analytics and reporting",
      "Integration with development workflows"
    ],
    documentation: "https://hanzo.team"
  },
  {
    path: "lux",
    icon: Shield,
    title: "LUX NETWORK",
    description: "Post-quantum secure blockchain infrastructure for AI compute settlement and decentralized systems.",
    features: [
      "Multi-consensus architecture (Wave, Focus, Quasar)",
      "Post-quantum cryptography (Dilithium, FALCON)",
      "TEE attestation and verification",
      "Cross-chain interoperability",
      "GPU-accelerated FHE",
      "24 published research papers"
    ],
    documentation: "https://lux.network"
  }
];

const App = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/capabilities/decentralized-ai" element={<DecentralizedAI />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/research" element={<Research />} />
                <Route path="/research/papers" element={<Research />} />
                <Route path="/research/open-source" element={<Research />} />
                <Route path="/press" element={<Press />} />
                <Route path="/models" element={<AIModels />} />
                <Route path="/ai-models" element={<AIModels />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<ComingSoon />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<Help />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/install" element={<Install />} />
                <Route path="/install.sh" element={<Install />} />
                <Route path="/status" element={<Status />} />
                <Route path="/security" element={<Security />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                {productPages.map((product) => (
                  <Route
                    key={product.path}
                    path={`/products/${product.path}`}
                    element={
                      <ProductPage
                        icon={product.icon}
                        title={product.title}
                        description={product.description}
                        features={product.features}
                        documentation={product.documentation}
                      />
                    }
                  />
                ))}
                <Route path="/index.html" element={<Navigate to="/" replace />} />
                {/* Redirect old defense routes */}
                <Route path="/defense" element={<Navigate to="/research" replace />} />
                <Route path="/intelligence" element={<Navigate to="/research" replace />} />
                <Route path="/industries/defense" element={<Navigate to="/research" replace />} />
                <Route path="/industries/aerospace" element={<Navigate to="/research" replace />} />
                <Route path="/industries/aerospace-defense" element={<Navigate to="/research" replace />} />
                <Route path="/cybersecurity" element={<Navigate to="/security" replace />} />
                <Route path="/cloud" element={<Navigate to="/products/lux" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
            <GlobalChatWidget />
            <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
