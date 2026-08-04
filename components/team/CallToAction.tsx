"use client";

import Link from "next/link";
import { Button, cn } from '@hanzo/ui'
import { ArrowRight } from "lucide-react";
export default function CallToAction() {
  return (
    <div className="hz-mt-7">
      {/* Stats bar */}
      <div className={cn(
        "hz-grid hz-grid-4 hz-gap-5 hz-mb-7 hz-p-6 hz-r-xl hz-bordered",
        "hz-bg-surface"
      )}>
        <div className="hz-align-center">
          <div className={cn("hz-t-2xl hz-w-bold", "hz-fg")}>
            2,500+
          </div>
          <div className={cn("hz-t-sm", "hz-fg")}>
            OSS Projects
          </div>
        </div>
        <div className="hz-align-center">
          <div className={cn("hz-t-2xl hz-w-bold", "hz-fg")}>
            130+
          </div>
          <div className={cn("hz-t-sm", "hz-fg")}>
            Research Papers
          </div>
        </div>
        <div className="hz-align-center">
          <div className={cn("hz-t-2xl hz-w-bold", "hz-fg")}>
            100+
          </div>
          <div className={cn("hz-t-sm", "hz-fg")}>
            AI Model Weights
          </div>
        </div>
        <div className="hz-align-center">
          <div className={cn("hz-t-2xl hz-w-bold", "hz-fg")}>
            $1B+
          </div>
          <div className={cn("hz-t-sm", "hz-fg")}>
            Client Revenue
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="hz-align-center">
        <h2 className={cn(
          "hz-t-3xl hz-w-bold hz-mb-4",
          "hz-fg"
        )}>
          Build With Us
        </h2>
        <p className={cn(
          "hz-container-narrow hz-mw-md hz-mb-6",
          "hz-fg"
        )}>
          We're hiring across engineering, research, and operations. Come build the future of AI.
        </p>
        <div className="hz-row hz-wrap hz-jc-center hz-gap-4">
          <Link href="/careers">
            <Button
              size="lg"
              className={cn(
                "hz-r-full hz-px-6",
                "hz-bg-inverse hz-hoverable"
              )}
            >
              View Open Roles
              <ArrowRight className="hz-sq-2 hz-ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "hz-r-full hz-px-6",
                "hz-fg hz-hoverable"
              )}
            >
              Get in Touch
              <ArrowRight className="hz-sq-2 hz-ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
