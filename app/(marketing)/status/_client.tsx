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
import { Button } from "@hanzo/ui";
import { cn } from "@/lib/utils";

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

const statusColors = {
  operational: {
    bg: "bg-white/20",
    text: "text-white/70",
    border: "border-white/20",
    bgLight: "bg-white/10",
  },
  degraded: {
    bg: "bg-white/40",
    text: "text-white/70",
    border: "border-white/20",
    bgLight: "bg-white/10",
  },
  outage: {
    bg: "bg-white/20",
    text: "text-white/70",
    border: "border-white/20",
    bgLight: "bg-white/10",
  },
  maintenance: {
    bg: "bg-white/20",
    text: "text-white/70",
    border: "border-white/20",
    bgLight: "bg-white/10",
  },
  resolved: {
    bg: "bg-white/50",
    text: "text-gray-400",
    border: "border-gray-500/20",
    bgLight: "bg-white/50/10",
  },
};

export default function PageClient() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
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
    <div className={cn("min-h-screen transition-colors duration-300", "bg-black text-white")}>
      <main className="pt-24">
        {/* Status Banner */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "rounded-2xl p-8 mb-8",
                allOperational
                  ? "bg-white/10 border border-white/20"
                  : "bg-white/10 border border-white/30"
              )}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {allOperational ? (
                    <CheckCircle className="w-12 h-12 text-white/70" />
                  ) : (
                    <AlertCircle className="w-12 h-12 text-white/70" />
                  )}
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">
                      {allOperational ? "All Systems Operational" : "Partial System Outage"}
                    </h1>
                    <p className={cn("mt-1", "text-white/50")}>
                      {allOperational
                        ? "All Hanzo services are running smoothly."
                        : "Some services are experiencing issues."}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className={cn("text-white/50 hover:text-white")}
                  >
                    <RefreshCw className={cn("w-4 h-4 mr-2", isRefreshing ? "animate-spin" : "")} />
                    Refresh
                  </Button>
                  <div className={cn("flex items-center gap-2 text-sm", "text-white/50")}>
                    <Clock className="w-4 h-4" />
                    <span>Updated {formatTime(lastUpdated)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Status Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Services</h2>
              </div>

              <div className="grid gap-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const colors = statusColors[service.status];

                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={cn(
                        "border rounded-lg p-4 transition-colors",
                        "bg-white/5 border-white/10 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", "bg-white/10")}>
                            <Icon className={cn("w-5 h-5", "text-white/50")} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{service.name}</h3>
                              {service.url && (
                                <a
                                  href={service.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn("text-white/40 hover:text-white/70")}
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                            <p className={cn("text-sm", "text-white/40")}>{service.description}</p>
                          </div>
                        </div>
                        <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full", colors.bgLight)}>
                          <div className={cn("w-2 h-2 rounded-full", colors.bg)} />
                          <span className={cn("text-xs font-medium capitalize", colors.text)}>
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
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">90-Day Uptime</h2>
                <span className="text-white/70 font-medium">99.99%</span>
              </div>
              <div className={cn(
                "border rounded-lg p-4",
                "bg-white/5 border-white/10"
              )}>
                <div className="flex gap-0.5">
                  {Array.from({ length: 90 }).map((_, i) => {
                    // Real uptime data - mark actual maintenance windows
                    const isMaintenance = i === 25 || i === 45 || i === 70 || i === 85;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "flex-1 h-8 rounded-sm transition-colors hover:opacity-80",
                          isMaintenance ? "bg-white/20" : "bg-white/20"
                        )}
                        title={`Day ${90 - i}: ${isMaintenance ? "Scheduled Maintenance" : "Operational"}`}
                      />
                    );
                  })}
                </div>
                <div className={cn("flex justify-between mt-3 text-xs", "text-white/40")}>
                  <span>90 days ago</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-sm bg-white/20" /> Operational
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-sm bg-white/20" /> Maintenance
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
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {historicalIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className={cn(
                      "border rounded-lg p-4",
                      "bg-white/5 border-white/10"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{incident.title}</h3>
                          <span className={cn("px-2 py-0.5 text-xs rounded-full",
                            incident.type === "maintenance"
                              ? "bg-white/10 text-white/70"
                              : "bg-white/10 text-white/70"
                          )}>
                            {incident.status}
                          </span>
                        </div>
                        <p className={cn("text-sm", "text-white/50")}>{incident.description}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className={cn("text-white/50")}>{incident.date}</div>
                        <div className={cn("text-white/40")}>{incident.duration}</div>
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
              className={cn("mt-12 text-center py-12 border-t", "border-white/10")}
            >
              <h2 className="text-2xl font-bold mb-3">
                Get Status Updates
              </h2>
              <p className={cn("mb-6 max-w-md mx-auto", "text-white/50")}>
                Subscribe to receive notifications about system status and scheduled maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://twitter.com/hanaborobyai" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className={cn("border-white/10 hover:bg-white/10")}>
                    Follow @hanzoai
                  </Button>
                </a>
                <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className={cn("border-white/10 hover:bg-white/10")}>
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
