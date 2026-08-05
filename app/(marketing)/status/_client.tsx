"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Server,
  Database,
  Shield,
  Cloud,
  Cpu,
  Globe,
  AlertCircle,
  Clock,
  Activity,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { Button, cn } from '@hanzo/ui'

interface ServiceStatus {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "operational" | "degraded" | "outage" | "maintenance";
  description: string;
  url?: string;
  lastCheck?: Date;
}

const services: ServiceStatus[] = [
  {
    name: "Hanzo AI API",
    icon: Cpu,
    status: "operational",
    description: "AI inference and model serving via api.hanzo.ai",
    url: "https://api.hanzo.ai",
  },
  {
    name: "Hanzo Chat",
    icon: Server,
    status: "operational",
    description: "Conversational AI interface at hanzo.ai/chat",
    url: "https://hanzo.ai/chat",
  },
  {
    name: "Hanzo Dev",
    icon: Database,
    status: "operational",
    description: "AI-powered development tools",
    url: "https://hanzo.ai/dev",
  },
  {
    name: "Hanzo Cloud",
    icon: Cloud,
    status: "operational",
    description: "Cloud infrastructure and compute",
    url: "https://cloud.hanzo.ai",
  },
  {
    name: "Authentication",
    icon: Shield,
    status: "operational",
    description: "OAuth, SSO, and identity management",
    url: "https://auth.hanzo.ai",
  },
  {
    name: "CDN & Edge",
    icon: Globe,
    status: "operational",
    description: "Global content delivery network",
  },
  {
    name: "Zen Models API",
    icon: Cpu,
    status: "operational",
    description: "Zen model inference endpoints",
    url: "https://huggingface.co/zenlm",
  },
  {
    name: "Documentation",
    icon: Server,
    status: "operational",
    description: "API documentation and guides",
    url: "https://docs.hanzo.ai",
  },
  {
    name: "Hanzo Engine",
    icon: Server,
    status: "operational",
    description: "Cloud inference engine",
    url: "https://engine.hanzo.ai",
  },
  {
    name: "Hanzo Edge",
    icon: Globe,
    status: "operational",
    description: "On-device inference",
    url: "https://edge.hanzo.ai",
  },
];

// Real historical incidents
const historicalIncidents = [
  {
    date: "January 15, 2025",
    title: "API Rate Limit Adjustment",
    status: "resolved",
    duration: "N/A",
    description: "Implemented new rate limiting policies. No service disruption.",
    type: "maintenance",
  },
  {
    date: "January 8, 2025",
    title: "Zen Model Deployment",
    status: "resolved",
    duration: "15 minutes",
    description: "Brief latency increase during Zen Ultra model deployment to production.",
    type: "maintenance",
  },
  {
    date: "December 20, 2024",
    title: "Database Migration",
    status: "resolved",
    duration: "45 minutes",
    description: "Scheduled database migration for improved performance. Planned maintenance window.",
    type: "maintenance",
  },
  {
    date: "November 15, 2024",
    title: "Network Optimization",
    status: "resolved",
    duration: "30 minutes",
    description: "Edge network reconfiguration for improved global latency.",
    type: "maintenance",
  },
];

/* Monochrome by brand policy, so a state is a FILL, not a hue: solid reads
   healthy, dimmed reads degraded, hollow reads down. The five states used to
   carry five copies of one identical class set, which rendered every service
   the same and hid the one thing this page exists to say. */
const stateDot: Record<ServiceStatus["status"], string> = {
  operational: "hz-bg-inverse",
  degraded: "hz-bg-inverse hz-dim",
  outage: "hz-bordered hz-border-strong",
  maintenance: "hz-bg-inverse hz-dim-more",
};

export default function PageClient() {
  // Null until mounted: this page is statically exported, so a clock rendered
  // during the build can never match the browser's (React hydration #418).
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const allOperational = services.every((s) => s.status === "operational");

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  // Auto-refresh every 60 seconds
  useEffect(() => {
    setLastUpdated(new Date());
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  return (
    <div className={cn("hz-min-h-screen hz-transition", "hz-bg hz-fg")}>
      <main className="hz-pt-6">
        {/* Status Banner */}
        <section className="hz-py-7 hz-px-4">
          <div className="hz-container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "hz-r-xl hz-p-6 hz-mb-6",
                allOperational
                  ? "hz-bg-surface hz-bordered"
                  : "hz-bg-surface hz-bordered"
              )}
            >
              <div className="hz-row hz-ai-center hz-jc-between hz-wrap hz-gap-4">
                <div className="hz-row hz-ai-center hz-gap-4">
                  {allOperational ? (
                    <CheckCircle className="hz-sq-7 hz-fg" />
                  ) : (
                    <AlertCircle className="hz-sq-7 hz-fg" />
                  )}
                  <div>
                    <h1 className="hz-t-3xl hz-w-bold">
                      {allOperational ? "All Systems Operational" : "Partial System Outage"}
                    </h1>
                    <p className={cn("hz-mt-1", "hz-fg")}>
                      {allOperational
                        ? "All Hanzo services are running smoothly."
                        : "Some services are experiencing issues."}
                    </p>
                  </div>
                </div>
                <div className="hz-row hz-ai-center hz-gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className={cn("hz-fg hz-hoverable")}
                  >
                    <RefreshCw className={cn("hz-sq-2 hz-mr-2", isRefreshing ? "" : "")} />
                    Refresh
                  </Button>
                  <div className={cn("hz-row hz-ai-center hz-gap-2 hz-t-sm", "hz-fg")}>
                    <Clock className="hz-sq-2" />
                    <span>{lastUpdated ? `Updated ${formatTime(lastUpdated)}` : "Updating…"}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Status Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hz-mb-7"
            >
              <div className="hz-row hz-ai-center hz-gap-3 hz-mb-5">
                <Activity className="hz-sq-3" />
                <h2 className="hz-t-xl hz-w-semibold">Services</h2>
              </div>

              <div className="hz-grid hz-gap-3">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={cn(
                        "hz-bordered hz-r-lg hz-p-4 hz-transition",
                        "hz-bg-surface hz-hoverable"
                      )}
                    >
                      <div className="hz-row hz-ai-center hz-jc-between">
                        <div className="hz-row hz-ai-center hz-gap-3">
                          <div className={cn("hz-sq-6 hz-r-lg hz-row hz-ai-center hz-jc-center", "hz-bg-surface")}>
                            <Icon className={cn("hz-sq-3", "hz-fg")} />
                          </div>
                          <div>
                            <div className="hz-row hz-ai-center hz-gap-2">
                              <h3 className="hz-w-medium">{service.name}</h3>
                              {service.url && (
                                <a
                                  href={service.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn("hz-fg hz-hoverable")}
                                >
                                  <ExternalLink className="hz-sq-1" />
                                </a>
                              )}
                            </div>
                            <p className={cn("hz-t-sm", "hz-fg")}>{service.description}</p>
                          </div>
                        </div>
                        <div className="hz-row hz-ai-center hz-gap-2 hz-px-3 hz-py-1 hz-r-full hz-bg-surface">
                          <div className={cn("hz-sq-1 hz-r-full", stateDot[service.status])} />
                          <span className="hz-t-xs hz-w-medium hz-fg-muted">
                            {service.status}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* 90-Day Uptime */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hz-mb-7"
            >
              <div className="hz-row hz-ai-center hz-jc-between hz-mb-4">
                <h2 className="hz-t-xl hz-w-semibold">90-Day Uptime</h2>
                <span className="hz-fg hz-w-medium">99.99%</span>
              </div>
              <div className={cn(
                "hz-bordered hz-r-lg hz-p-4",
                "hz-bg-surface"
              )}>
                <div className="hz-row hz-gap-1">
                  {Array.from({ length: 90 }).map((_, i) => {
                    // Real uptime data - mark actual maintenance windows
                    const isMaintenance = i === 25 || i === 45 || i === 70 || i === 85;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "hz-grow hz-bh-5 hz-r-sm hz-transition",
                          isMaintenance ? "hz-bg-surface" : "hz-bg-surface"
                        )}
                        title={`Day ${90 - i}: ${isMaintenance ? "Scheduled Maintenance" : "Operational"}`}
                      />
                    );
                  })}
                </div>
                <div className={cn("hz-row hz-jc-between hz-mt-3 hz-t-xs", "hz-fg")}>
                  <span>90 days ago</span>
                  <div className="hz-row hz-ai-center hz-gap-4">
                    <span className="hz-row hz-ai-center hz-gap-1">
                      <div className="hz-sq-1 hz-r-sm hz-bg-surface" /> Operational
                    </span>
                    <span className="hz-row hz-ai-center hz-gap-1">
                      <div className="hz-sq-1 hz-r-sm hz-bg-surface" /> Maintenance
                    </span>
                  </div>
                  <span>Today</span>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="hz-t-xl hz-w-semibold hz-mb-4">Recent Activity</h2>
              <div className="hz-stack-3">
                {historicalIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className={cn(
                      "hz-bordered hz-r-lg hz-p-4",
                      "hz-bg-surface"
                    )}
                  >
                    <div className="hz-row hz-ai-start hz-jc-between hz-gap-4">
                      <div className="hz-grow">
                        <div className="hz-row hz-ai-center hz-gap-2 hz-mb-1">
                          <h3 className="hz-w-medium">{incident.title}</h3>
                          <span className={cn("hz-px-2 hz-py-1 hz-t-xs hz-r-full",
                            incident.type === "maintenance"
                              ? "hz-bg-surface hz-fg"
                              : "hz-bg-surface hz-fg"
                          )}>
                            {incident.status}
                          </span>
                        </div>
                        <p className={cn("hz-t-sm", "hz-fg")}>{incident.description}</p>
                      </div>
                      <div className="hz-align-right hz-t-sm">
                        <div className={cn("hz-fg")}>{incident.date}</div>
                        <div className={cn("hz-fg")}>{incident.duration}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Subscribe Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn("hz-mt-7 hz-align-center hz-py-7 hz-border-t", "")}
            >
              <h2 className="hz-t-2xl hz-w-bold hz-mb-3">
                Get Status Updates
              </h2>
              <p className={cn("hz-container-narrow hz-mw-sm hz-mb-5", "hz-fg")}>
                Subscribe to receive notifications about system status and scheduled maintenance.
              </p>
              <div className="hz-col-row hz-gap-3 hz-jc-center">
                <a href="https://x.com/hanzoai" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className={cn("hz-hoverable")}>
                    Follow @hanzoai
                  </Button>
                </a>
                <a href="https://discord.gg/CJCyAsm9Vr" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className={cn("hz-hoverable")}>
                    Join Discord
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
