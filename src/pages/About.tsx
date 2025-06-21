import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const products = [
    { name: "ZEN", link: "/products/zen" },
    { name: "KOAN", link: "/products/koan" }, 
    { name: "HANZO AI", link: "/products/hanzo-ai" },
    { name: "HANZO DX", link: "/products/hanzo-dx" },
    { name: "HANZO ML", link: "/products/hanzo-ml" },
    { name: "HANZO DEV", link: "/products/hanzo-dev" },
    { name: "HANZO TEAM", link: "/products/hanzo-team" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-12"
            >
              <div className="text-9xl font-bold text-white">H</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold mb-8"
            >
              Who are we?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl"
            >
              Hanzo is the Techstars backed, award-winning applied AI Lab behind countless disruptive, high growth startups.
            </motion.p>
          </div>

          {/* Product Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative"
                  >
                    {product.link ? (
                      <a
                        href={product.link}
                        className="block"
                      >
                        <div 
                          className="border border-gray-600 rounded-full py-4 px-8 text-center mb-[-1px] bg-black hover:bg-gray-900 transition-colors cursor-pointer"
                          style={{
                            clipPath: index === 0 ? 'none' : 'polygon(0 30%, 100% 30%, 100% 100%, 0 100%)'
                          }}
                        >
                          <span className="text-lg font-medium hover:underline">{product.name}</span>
                        </div>
                      </a>
                    ) : (
                      <div 
                        className="border border-gray-600 rounded-full py-4 px-8 text-center mb-[-1px] bg-black hover:bg-gray-900 transition-colors cursor-pointer"
                        style={{
                          clipPath: index === 0 ? 'none' : 'polygon(0 30%, 100% 30%, 100% 100%, 0 100%)'
                        }}
                      >
                        <span className="text-lg font-medium">{product.name}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awards and Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Recognition & Achievements</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <h3 className="text-xl font-semibold">Trustpilot Excellence</h3>
                    <p className="text-gray-400">Rated 5 stars by our clients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <h3 className="text-xl font-semibold">Techstars Portfolio</h3>
                    <p className="text-gray-400">Backed by leading accelerator</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <h3 className="text-xl font-semibold">Award-Winning AI Lab</h3>
                    <p className="text-gray-400">Industry-recognized innovation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white">100+</div>
                  <p className="text-gray-400">Startups Powered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50M+</div>
                  <p className="text-gray-400">Users Served</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <p className="text-gray-400">Industries Transformed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">7</div>
                  <p className="text-gray-400">AI Products</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build frontier AI systems that power the next generation of transformative companies. 
              From ideation to scale, we provide the AI infrastructure, expertise, and innovation that 
              turns ambitious visions into market-leading realities.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}