"use client";

import Link from "next/link";
import { Button } from "@hanzo/ui";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CallToAction() {
  return (
    <div className="mt-16">
      {/* Stats bar */}
      <div className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl border",
        "border-border bg-foreground/5"
      )}>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", "text-foreground")}>
            2,500+
          </div>
          <div className={cn("text-sm", "text-muted-foreground")}>
            OSS Projects
          </div>
        </div>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", "text-foreground")}>
            130+
          </div>
          <div className={cn("text-sm", "text-muted-foreground")}>
            Research Papers
          </div>
        </div>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", "text-foreground")}>
            100+
          </div>
          <div className={cn("text-sm", "text-muted-foreground")}>
            AI Model Weights
          </div>
        </div>
        <div className="text-center">
          <div className={cn("text-2xl font-bold", "text-foreground")}>
            $1B+
          </div>
          <div className={cn("text-sm", "text-muted-foreground")}>
            Client Revenue
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className={cn(
          "text-3xl font-bold mb-4",
          "text-foreground"
        )}>
          Build With Us
        </h2>
        <p className={cn(
          "mb-8 max-w-2xl mx-auto",
          "text-muted-foreground"
        )}>
          We're hiring across engineering, research, and operations. Come build the future of AI.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/careers">
            <Button
              size="lg"
              className={cn(
                "rounded-full px-8",
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              View Open Roles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "rounded-full px-8",
                "border-border text-foreground hover:bg-accent"
              )}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
