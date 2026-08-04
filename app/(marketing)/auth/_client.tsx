"use client";

import { useEffect } from "react";
import { Button } from '@hanzo/ui'
import { ExternalLink } from "lucide-react";

export default function PageClient() {
  useEffect(() => {
    // Auto-redirect after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://hanzo.id";
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hz-min-h-screen hz-row hz-ai-center hz-jc-center hz-px-4 hz-bg">
      <div className="hz-mw-sm hz-w-full hz-stack-6 hz-align-center">
        <div>
          <h2 className="hz-mt-5 hz-t-3xl hz-w-bold hz-fg">
            Sign in to Hanzo
          </h2>
          <p className="hz-mt-4 hz-fg">
            Authentication is handled securely through Hanzo ID.
            You will be redirected automatically.
          </p>
        </div>
        <div>
          <a href="https://hanzo.id">
            <Button className="hz-w-full hz-bg-inverse hz-hoverable">
              Continue to Hanzo ID <ExternalLink className="hz-sq-2 hz-ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
