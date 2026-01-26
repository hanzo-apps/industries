import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Introducing ZEN: Next-Generation AI Orchestration",
    excerpt: "Today we announce ZEN, our advanced AI orchestration platform that enables enterprises to build and deploy intelligent systems at scale.",
    category: "Product",
    author: "Hanzo Team",
    date: "January 15, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Decentralized AI Infrastructure",
    excerpt: "Exploring how decentralized computing is reshaping the AI landscape and what it means for the future of machine learning.",
    category: "Research",
    author: "Dr. Sarah Chen",
    date: "January 10, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Post-Quantum Cryptography for Blockchain Security",
    excerpt: "Exploring how FALCON signatures and Ringtail threshold cryptography are securing blockchain consensus against quantum threats.",
    category: "Research",
    author: "Research Team",
    date: "January 5, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "MLOps Best Practices: From Experimentation to Production",
    excerpt: "Learn how to streamline your machine learning operations and deploy models with confidence using modern MLOps practices.",
    category: "Engineering",
    author: "Alex Kim",
    date: "December 28, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "How KOAN Transforms Enterprise Knowledge Management",
    excerpt: "Discover how our knowledge management platform uses AI to unlock insights from unstructured data across your organization.",
    category: "Product",
    author: "Hanzo Team",
    date: "December 20, 2024",
    readTime: "4 min read",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Multimodal AI: Bridging Vision, Language, and Beyond",
    excerpt: "An exploration of multimodal AI capabilities and how they enable more natural and powerful human-computer interactions.",
    category: "Research",
    author: "Dr. Emily Wang",
    date: "December 15, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg",
  },
];

const categories = ["All", "Product", "Research", "Engineering", "Security"];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hanzo Blog
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Insights, updates, and deep dives into AI technology, research, and innovation from the Hanzo team.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-[#fd4444] text-white"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#fd4444]/50 transition-colors group">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video md:aspect-auto bg-gray-800 flex items-center justify-center">
                      <div className="text-gray-600 text-6xl font-bold">H</div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#fd4444] text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                        <span className="text-gray-500 text-sm">{featuredPost.category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#fd4444] transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Button className="bg-[#fd4444] hover:bg-[#fd4444]/90 text-white w-fit group/btn">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-[#fd4444]/50 transition-colors group"
                >
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-700 text-4xl font-bold">H</div>
                  </div>
                  <div className="p-6">
                    <span className="text-[#fd4444] text-sm font-medium">{post.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-[#fd4444] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Load More Articles
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-gray-400 mb-8">
                Subscribe to our newsletter for the latest insights on AI technology, research breakthroughs, and product updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 flex-1"
                />
                <Button className="bg-[#fd4444] hover:bg-[#fd4444]/90 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
