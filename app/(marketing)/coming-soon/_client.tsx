"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button, cn } from '@hanzo/ui'
export default function PageClient() {
  const router = useRouter();
  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container-narrow hz-align-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hz-t-6xl hz-w-bold hz-mb-6">
              Coming Soon
            </h1>
            <p className={cn("hz-t-xl hz-mb-7", "hz-fg")}>
              We're working on something amazing. This page will be available shortly.
            </p>
            <div className="hz-inline-4">
              <Button
                size="lg"
                className={cn("hz-bg-inverse hz-hoverable")}
                onClick={() => router.push("/")}
              >
                Back to Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={cn("hz-fg hz-hoverable")}
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
