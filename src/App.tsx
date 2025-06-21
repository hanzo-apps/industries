
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
import { Blocks, Code2, Bot } from "lucide-react";
import ProductPage from "./components/ProductPage";

const queryClient = new QueryClient();

const productPages = [
  {
    path: "hanzo-app",
    icon: Blocks,
    title: "Hanzo App",
    description: "Design, Engineer, and Market AI-powered applications with our unified platform.",
    features: [
      "Build and deploy applications with ease",
      "Integrated development environment",
      "Real-time collaboration tools",
      "AI-powered development assistance",
      "Automated testing and deployment",
      "Performance monitoring and optimization"
    ],
    documentation: "https://docs.hanzo.ai/app"
  },
  // ... Add similar configurations for other products
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
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
