
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Defense from "./pages/Defense";
import Intelligence from "./pages/Intelligence";
import Services from "./pages/Services";
import Aerospace from "./pages/industries/Aerospace";
import DefenseIndustry from "./pages/industries/Defense";
import ComingSoon from "./pages/ComingSoon";
import About from "./pages/About";
import Cybersecurity from "./pages/Cybersecurity";
import SecureCloud from "./pages/SecureCloud";
import Team from "./pages/Team";
import Capabilities from "./pages/Capabilities";
import DecentralizedAI from "./pages/capabilities/DecentralizedAI";
import CaseStudies from "./pages/CaseStudies";
import Examples from "./pages/Examples";
import { Blocks, Code2, Bot, Brain, Shield, Users, Cpu, Zap } from "lucide-react";
import ProductPage from "./components/ProductPage";

const queryClient = new QueryClient();

const productPages = [
  {
    path: "zen",
    icon: Brain,
    title: "ZEN",
    description: "Advanced AI orchestration platform for building and deploying intelligent systems at scale.",
    features: [
      "Multi-model AI orchestration and management",
      "Automated prompt engineering and optimization",
      "Real-time performance monitoring and analytics",
      "Enterprise-grade security and compliance",
      "Seamless integration with existing infrastructure",
      "Cost optimization and resource management"
    ],
    documentation: "https://docs.google.com/document/d/1CNrg4FwqttLbG4re3PeMg0MD548gUh5xKk-ij-BtJUs/edit?usp=drive_link"
  },
  {
    path: "koan",
    icon: Shield,
    title: "KOAN",
    description: "Enterprise knowledge management and AI-powered insights platform.",
    features: [
      "Intelligent document processing and analysis",
      "Knowledge graph construction and visualization",
      "Natural language querying and exploration",
      "Automated insight generation and reporting",
      "Secure data governance and access control",
      "Cross-organizational knowledge sharing"
    ],
    documentation: "https://docs.google.com/document/d/10M7A9AqsshqhgUYCjkbTSmL25OcCC0cU6qoddmYNbAI/edit?usp=sharing"
  },
  {
    path: "hanzo-ai",
    icon: Bot,
    title: "HANZO AI",
    description: "Comprehensive AI platform powering next-generation intelligent applications.",
    features: [
      "State-of-the-art language models and APIs",
      "Custom model training and fine-tuning",
      "Multimodal AI capabilities",
      "Edge deployment and optimization",
      "AI safety and alignment tools",
      "Developer-friendly SDKs and integrations"
    ],
    documentation: "https://hanzo.industries/"
  },
  {
    path: "hanzo-dx",
    icon: Code2,
    title: "HANZO DX",
    description: "Developer experience platform for building AI-powered applications.",
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
    description: "Machine learning operations platform for enterprise AI deployment.",
    features: [
      "Model versioning and registry",
      "Automated training pipelines",
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
    description: "Accelerated development environment for AI applications.",
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
    description: "Team collaboration and project management platform for AI initiatives.",
    features: [
      "Project planning and tracking",
      "Resource allocation and management",
      "Real-time collaboration tools",
      "Knowledge sharing and documentation",
      "Performance analytics and reporting",
      "Integration with development workflows"
    ],
    documentation: "https://hanzo.team/login%3Acomponent%3ALoginApp"
  }
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/defense" element={<Defense />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries/aerospace" element={<Aerospace />} />
          <Route path="/industries/defense" element={<DefenseIndustry />} />
          <Route path="/industries/aerospace-defense" element={<Navigate to="/industries/defense" replace />} />
          <Route path="/install" element={<Install />} />
          <Route path="/install.sh" element={<Install />} />
          <Route path="/status" element={<Status />} />
          <Route path="/security" element={<Security />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/cloud" element={<SecureCloud />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
