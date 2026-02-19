import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ResearchHighlights from "@/components/ResearchHighlights";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Index = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className={cn("min-h-screen", isDarkMode ? "bg-black" : "bg-white")}>
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <ResearchHighlights />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
