"use client";

import { Shield, Lock, Key, UserCheck, Server, FileCheck } from "lucide-react";
import { Button, cn } from '@hanzo/ui'
export default function PageClient() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Best-in-class security practices and infrastructure to protect your data and applications"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data in transit and at rest is encrypted using industry-standard protocols"
    },
    {
      icon: Key,
      title: "Access Controls",
      description: "Fine-grained permissions and role-based access control (RBAC) for team management"
    },
    {
      icon: UserCheck,
      title: "Identity & Authentication",
      description: "Multi-factor authentication and single sign-on (SSO) support"
    },
    {
      icon: Server,
      title: "Data Protection",
      description: "Regular backups and disaster recovery protocols to ensure data safety"
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified"
    }
  ];

  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container">
          <div className="hz-align-center hz-mb-7">
            <h1 className="hz-t-4xl hz-w-bold hz-mb-4">
              Security First, Always
            </h1>
            <p className={cn("hz-container-narrow hz-mw-md hz-t-xl", "hz-fg")}>
              We prioritize the security and privacy of your data with enterprise-grade protection at every layer
            </p>
          </div>

          <div className="hz-grid hz-grid-3 hz-gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "hz-bordered hz-r-lg hz-p-5 hz-transition",
                    "hz-bg-surface hz-hoverable"
                  )}
                >
                  <div className="hz-row hz-ai-center hz-inline-4 hz-mb-4">
                    <div className={cn("hz-p-2 hz-r-lg", "hz-bg-surface")}>
                      <Icon className="hz-sq-4" />
                    </div>
                    <h3 className="hz-t-lg hz-w-medium">
                      {feature.title}
                    </h3>
                  </div>
                  <p className={cn("hz-fg")}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="hz-mt-7 hz-align-center hz-stack-6">
            <div className={cn(
              "hz-r-lg hz-p-6",
              ""
            )}>
              <h2 className="hz-t-2xl hz-w-bold hz-mb-4">
                SOC 2 Type II Certified
              </h2>
              <p className={cn("hz-mb-5", "hz-fg")}>
                Our security practices and controls have been audited and certified by independent third-party auditors
              </p>
              <a href="/contact">
                <Button
                  variant="outline"
                  className={cn(
                    "hz-fg hz-hoverable"
                  )}
                >
                  Request Security Documentation
                </Button>
              </a>
            </div>

            <div className="hz-grid hz-grid-3 hz-gap-4">
              <div className={cn(
                "hz-bordered hz-r-lg hz-p-5",
                "hz-bg-surface"
              )}>
                <div className="hz-t-3xl hz-w-bold hz-mb-2">99.99%</div>
                <div className={cn("hz-fg")}>Uptime SLA</div>
              </div>
              <div className={cn(
                "hz-bordered hz-r-lg hz-p-5",
                "hz-bg-surface"
              )}>
                <div className="hz-t-3xl hz-w-bold hz-mb-2">24/7</div>
                <div className={cn("hz-fg")}>Security Monitoring</div>
              </div>
              <div className={cn(
                "hz-bordered hz-r-lg hz-p-5",
                "hz-bg-surface"
              )}>
                <div className="hz-t-3xl hz-w-bold hz-mb-2">100%</div>
                <div className={cn("hz-fg")}>Data Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
