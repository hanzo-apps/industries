"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ResearchHighlights from "@/components/ResearchHighlights";
import Leadership from "@/components/Leadership";
import TrustedBySection from "@/components/TrustedBySection";
import Contact from "@/components/Contact";
import PhilosophyBridge from "@/components/PhilosophyBridge";
import { cn } from "@/lib/utils";

export default function PageClient() {
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
      <main>
        <Hero />
        <ServicesOverview />
        <ResearchHighlights />
        <Leadership />
        <TrustedBySection />
        <PhilosophyBridge />
        <Contact />
      </main>
  );
}
