import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
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
            <p className="text-xl sm:text-2xl text-gray-400 mb-12">
              We're working on something amazing. This page will be available shortly.
            </p>
            <div className="space-x-4">
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
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