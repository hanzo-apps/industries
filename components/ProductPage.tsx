"use client";

import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductPageProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  documentation: string;
}

export default function ProductPage({ icon: Icon, title, description, features, documentation }: ProductPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <Icon className="h-16 w-16 text-white" />
          <h1 className="text-4xl font-bold text-white">{title}</h1>
        </div>
        <p className="text-xl max-w-3xl mx-auto text-white/50">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white/5"
          >
            <p className="text-white/70">{feature}</p>
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
            className="bg-white text-black hover:bg-white/90"
          >
            <a href="https://console.hanzo.ai">Try in Hanzo Cloud</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            <a href={documentation}>View Documentation</a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
