import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
        {/* Radial gradient blur effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#fd4444]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Featured announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-[#fd4444]" />
            <span className="text-sm text-white/70">Hanzo L1 now available for enterprise deployment</span>
            <Link to="/research" className="text-sm font-medium text-[#fd4444] hover:text-[#e03d3d] flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            AI research and products
            <br />
            <span className="text-white/40">that put safety at the frontier</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
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
                className="w-full sm:w-auto text-base px-8 h-12 bg-[#fd4444] text-white hover:bg-[#e03d3d] rounded-full transition-colors"
              >
                Explore Our Research
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="https://hanzo.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 h-12 border border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Try Hanzo AI
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">Techstars '17</div>
            <div className="text-sm text-white/50 mt-1">Backed Company</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
            <div className="text-sm text-white/50 mt-1">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-white/50 mt-1">Open Source Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">Safety First</div>
            <div className="text-sm text-white/50 mt-1">Aligned AI Systems</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
