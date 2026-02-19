import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export default function ComingSoon() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8">
              Coming Soon
            </h1>
            <p className={cn("text-xl sm:text-2xl mb-12", isDarkMode ? "text-white/50" : "text-black/50")}>
              We're working on something amazing. This page will be available shortly.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className={cn(isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-black/80")}
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={cn(isDarkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white")}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
