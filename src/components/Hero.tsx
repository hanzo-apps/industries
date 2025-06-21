
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black"
          >
            Frontier AI for a Safer Future
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-2xl sm:text-3xl text-gray-700 font-light"
          >
            Aligned, Private, Configurable, Decentralized
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're building the next generation of AI systems with safety and alignment at the core. 
            Our frontier models and edge AI infrastructure enable private, local, and resilient AI 
            deployment for mission-critical applications in defense, enterprise, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 bg-black text-white hover:bg-gray-800">
              <a href="/intelligence">Explore Our AI Research</a>
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 bg-white text-black border border-black hover:bg-gray-100"
            >
              <a href="#capabilities">Deploy Edge AI</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-black">Techstars</div>
              <div className="text-sm text-gray-600 mt-1">Backed Company</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">100+</div>
              <div className="text-sm text-gray-600 mt-1">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">$10M+</div>
              <div className="text-sm text-gray-600 mt-1">Contracts Secured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">Security</div>
              <div className="text-sm text-gray-600 mt-1">First Approach</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
