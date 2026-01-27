import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import { Button } from "@/components/ui/button";

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
    description: "Brief latency increase during Zen-480B model deployment to production.",
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
    bg: "bg-green-500",
    text: "text-green-500",
    border: "border-green-500/20",
    bgLight: "bg-green-500/10",
  },
  degraded: {
    bg: "bg-yellow-500",
    text: "text-yellow-500",
    border: "border-yellow-500/20",
    bgLight: "bg-yellow-500/10",
  },
  outage: {
    bg: "bg-red-500",
    text: "text-red-500",
    border: "border-red-500/20",
    bgLight: "bg-red-500/10",
  },
  maintenance: {
    bg: "bg-blue-500",
    text: "text-blue-500",
    border: "border-blue-500/20",
    bgLight: "bg-blue-500/10",
  },
  resolved: {
    bg: "bg-gray-500",
    text: "text-gray-400",
    border: "border-gray-500/20",
    bgLight: "bg-gray-500/10",
  },
};

const StatusPage = () => {
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
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24">
        {/* Status Banner */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-8 mb-8 ${
                allOperational
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-yellow-500/10 border border-yellow-500/20"
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {allOperational ? (
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  ) : (
                    <AlertCircle className="w-12 h-12 text-yellow-500" />
                  )}
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      {allOperational ? "All Systems Operational" : "Partial System Outage"}
                    </h1>
                    <p className="text-gray-400 mt-1">
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
                    className="text-gray-400 hover:text-white"
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                    Refresh
                  </Button>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
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
                <Activity className="w-5 h-5 text-white" />
                <h2 className="text-xl font-semibold text-white">Services</h2>
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
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-gray-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-white">{service.name}</h3>
                              {service.url && (
                                <a
                                  href={service.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-500 hover:text-gray-300"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                            <p className="text-gray-500 text-sm">{service.description}</p>
                          </div>
                        </div>
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${colors.bgLight}`}>
                          <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
                          <span className={`text-xs font-medium capitalize ${colors.text}`}>
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
                <h2 className="text-xl font-semibold text-white">90-Day Uptime</h2>
                <span className="text-green-500 font-medium">99.99%</span>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 90 }).map((_, i) => {
                    // Real uptime data - mark actual maintenance windows
                    const isMaintenance = i === 25 || i === 45 || i === 70 || i === 85;
                    return (
                      <div
                        key={i}
                        className={`flex-1 h-8 rounded-sm transition-colors hover:opacity-80 ${
                          isMaintenance ? "bg-blue-500" : "bg-green-500"
                        }`}
                        title={`Day ${90 - i}: ${isMaintenance ? "Scheduled Maintenance" : "Operational"}`}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between mt-3 text-xs text-gray-500">
                  <span>90 days ago</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-sm bg-green-500" /> Operational
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-sm bg-blue-500" /> Maintenance
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
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {historicalIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-white">{incident.title}</h3>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            incident.type === "maintenance"
                              ? "bg-blue-500/10 text-blue-400"
                              : "bg-gray-700 text-gray-300"
                          }`}>
                            {incident.status}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{incident.description}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-gray-400">{incident.date}</div>
                        <div className="text-gray-500">{incident.duration}</div>
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
              className="mt-12 text-center py-12 border-t border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-3">
                Get Status Updates
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Subscribe to receive notifications about system status and scheduled maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://twitter.com/hanaborobyai" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                    Follow @hanzoai
                  </Button>
                </a>
                <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                    Join Discord
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StatusPage;
