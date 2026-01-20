import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Featured announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gray-100 border border-gray-200"
          >
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">New</span>
            <span className="text-sm text-gray-700">Hanzo L1 now available for enterprise deployment</span>
            <Link to="/research" className="text-sm font-medium text-black hover:underline flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Main headline - Anthropic style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.1]"
          >
            AI research and products
            <br />
            <span className="text-gray-400">that put safety at the frontier</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Hanzo builds frontier AI systems with a focus on safety, interpretability,
            and alignment. We develop foundation models and deploy them through secure,
            decentralized infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/research">
              <Button
                size="lg"
                className="text-base px-8 h-12 bg-black text-white hover:bg-gray-800 rounded-full"
              >
                Explore Our Research
              </Button>
            </Link>
            <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 text-black border-gray-300 hover:bg-gray-50 rounded-full"
              >
                Try Hanzo AI
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-black">Techstars '17</div>
            <div className="text-sm text-gray-500 mt-1">Backed Company</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">50+</div>
            <div className="text-sm text-gray-500 mt-1">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">100+</div>
            <div className="text-sm text-gray-500 mt-1">Open Source Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">Safety First</div>
            <div className="text-sm text-gray-500 mt-1">Aligned AI Systems</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
