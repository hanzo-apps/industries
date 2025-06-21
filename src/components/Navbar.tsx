
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CapabilitiesMenu } from "./navigation/CapabilitiesMenu";
import { IndustriesMenu } from "./navigation/IndustriesMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
      toast({
        title: "Signed out successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-3">
            <img 
              src="/hanzo-logo.png" 
              alt="Hanzo Industries" 
              className="h-10 w-auto"
            />
            <span className="text-black font-bold text-xl">Hanzo Industries</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <CapabilitiesMenu />
            <IndustriesMenu />
            <a href="/about" className="text-gray-700 hover:text-black font-medium transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-black font-medium transition-colors">
              Contact
            </a>

            <div className="flex items-center space-x-3 ml-6">
              <Button 
                size="sm" 
                className="bg-black text-white hover:bg-gray-800"
                onClick={() => navigate("/contact")}
              >
                Get Started
              </Button>
            </div>
          </div>

          <MobileMenu 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
