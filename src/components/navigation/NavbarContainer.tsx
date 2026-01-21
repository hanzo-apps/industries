import { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavbarContainerProps {
  children: ReactNode;
}

const NavbarContainer = ({ children }: NavbarContainerProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-out",
          scrolled
            ? "mt-4 mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
            : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
            scrolled ? "px-6 py-3" : "px-4 sm:px-6 lg:px-8 py-4"
          )}
        >
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavbarContainer;
