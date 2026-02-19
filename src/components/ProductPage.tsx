
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface ProductPageProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  documentation: string;
}

const ProductPage = ({ icon: Icon, title, description, features, documentation }: ProductPageProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon className={cn("h-16 w-16", isDarkMode ? "text-white" : "text-black")} />
            <h1 className={cn("text-4xl font-bold", isDarkMode ? "text-white" : "text-black")}>{title}</h1>
          </div>
          <p className={cn("text-xl max-w-3xl mx-auto", isDarkMode ? "text-white/50" : "text-black/50")}>{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn("p-6 rounded-xl", isDarkMode ? "bg-white/5" : "bg-black/5")}
            >
              <p className={cn(isDarkMode ? "text-white/70" : "text-black/70")}>{feature}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={cn(isDarkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}
            >
              <a href="https://console.hanzo.ai">Try in Hanzo Cloud</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={cn(isDarkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white")}
            >
              <a href={documentation}>View Documentation</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
