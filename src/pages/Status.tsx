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
} from "lucide-react";

const services = [
  {
    name: "Hanzo AI Platform",
    icon: Cpu,
    status: "operational",
    uptime: "99.99%",
    latency: "45ms",
    description: "Core AI inference and model serving",
  },
  {
    name: "API Gateway",
    icon: Server,
    status: "operational",
    uptime: "99.99%",
    latency: "12ms",
    description: "REST and GraphQL API endpoints",
  },
  {
    name: "Database Cluster",
    icon: Database,
    status: "operational",
    uptime: "99.99%",
    latency: "8ms",
    description: "Primary data storage and replication",
  },
  {
    name: "Authentication Service",
    icon: Shield,
    status: "operational",
    uptime: "100%",
    latency: "28ms",
    description: "OAuth, SSO, and identity management",
  },
  {
    name: "CDN & Edge Network",
    icon: Globe,
    status: "operational",
    uptime: "99.99%",
    latency: "15ms",
    description: "Global content delivery and edge caching",
  },
  {
    name: "Cloud Infrastructure",
    icon: Cloud,
    status: "operational",
    uptime: "99.99%",
    latency: "22ms",
    description: "Compute, storage, and networking",
  },
];

const uptimeStats = [
  { period: "Today", uptime: "100%", incidents: 0 },
  { period: "Last 7 days", uptime: "99.99%", incidents: 0 },
  { period: "Last 30 days", uptime: "99.98%", incidents: 1 },
  { period: "Last 90 days", uptime: "99.97%", incidents: 2 },
];

const recentIncidents = [
  {
    date: "December 15, 2024",
    title: "Elevated API Latency",
    status: "resolved",
    duration: "23 minutes",
    description: "Brief increase in API response times due to database maintenance. Issue resolved with no data loss.",
  },
  {
    date: "November 28, 2024",
    title: "Scheduled Maintenance",
    status: "resolved",
    duration: "45 minutes",
    description: "Planned infrastructure upgrade to improve performance and reliability.",
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
  resolved: {
    bg: "bg-gray-500",
    text: "text-gray-400",
    border: "border-gray-500/20",
    bgLight: "bg-gray-500/10",
  },
};

const StatusPage = () => {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24">
        {/* Status Banner */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-8 mb-12 ${
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                      {allOperational ? "All Systems Operational" : "Partial System Outage"}
                    </h1>
                    <p className="text-gray-400 mt-2">
                      {allOperational
                        ? "All Hanzo services are running smoothly."
                        : "Some services are experiencing issues. We're working on it."}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Last updated: Just now</span>
                </div>
              </div>
            </motion.div>

            {/* Uptime Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {uptimeStats.map((stat) => (
                <div
                  key={stat.period}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#fd4444] mb-1">{stat.uptime}</div>
                  <div className="text-gray-400 text-sm mb-2">{stat.period}</div>
                  <div className="text-gray-500 text-xs">
                    {stat.incidents} incident{stat.incidents !== 1 ? "s" : ""}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Activity className="w-6 h-6 text-[#fd4444]" />
              <h2 className="text-3xl font-bold text-white">Service Status</h2>
            </motion.div>

            <div className="grid gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const colors = statusColors[service.status as keyof typeof statusColors];

                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                          <p className="text-gray-500 text-sm">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-right hidden sm:block">
                          <div className="text-white font-medium">{service.uptime}</div>
                          <div className="text-gray-500 text-sm">Uptime</div>
                        </div>
                        <div className="text-right hidden sm:block">
                          <div className="text-white font-medium">{service.latency}</div>
                          <div className="text-gray-500 text-sm">Latency</div>
                        </div>
                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bgLight}`}>
                          <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
                          <span className={`text-sm font-medium capitalize ${colors.text}`}>
                            {service.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Uptime Graph */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-2">90-Day Uptime</h2>
              <p className="text-gray-400">Historical system availability</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 90 }).map((_, i) => {
                  const isIncident = i === 45 || i === 67;
                  return (
                    <div
                      key={i}
                      className={`flex-1 h-8 rounded-sm ${
                        isIncident ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      title={`Day ${90 - i}: ${isIncident ? "Incident" : "Operational"}`}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>90 days ago</span>
                <span>Today</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-2">Recent Incidents</h2>
              <p className="text-gray-400">Past incidents and maintenance windows</p>
            </motion.div>

            {recentIncidents.length > 0 ? (
              <div className="space-y-4">
                {recentIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full capitalize">
                            {incident.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{incident.date}</span>
                          <span>Duration: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400">{incident.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Recent Incidents</h3>
                <p className="text-gray-400">All systems have been running smoothly.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Status Updates
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Subscribe to receive real-time notifications about system status and scheduled maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-[#fd4444] hover:bg-[#fd4444]/90 text-white font-medium rounded-lg transition-colors">
                  Subscribe to Updates
                </button>
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors">
                  View API Status
                </button>
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
