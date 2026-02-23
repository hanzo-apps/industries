"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";

export default function PageClient() {
  const router = useRouter();
  return (
    <div className={cn("min-h-screen transition-colors duration-300", "bg-background text-foreground")}>
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
            <p className={cn("text-xl sm:text-2xl mb-12", "text-muted-foreground")}>
              We're working on something amazing. This page will be available shortly.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className={cn("bg-primary text-primary-foreground hover:bg-primary/90")}
                onClick={() => router.push("/")}
              >
                Back to Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={cn("border-primary text-foreground hover:bg-primary hover:text-primary-foreground")}
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
