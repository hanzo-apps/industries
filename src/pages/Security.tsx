
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Key, UserCheck, Server, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const SecurityPage = () => {
  const { isDarkMode } = useTheme();

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
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-black text-white" : "bg-white text-black")}>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Security First, Always
            </h1>
            <p className={cn("text-xl max-w-2xl mx-auto", isDarkMode ? "text-white/50" : "text-black/50")}>
              We prioritize the security and privacy of your data with enterprise-grade protection at every layer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "border rounded-lg p-6 transition-colors",
                    isDarkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-black/5 border-black/10 hover:border-black/20"
                  )}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={cn("p-2 rounded-lg", isDarkMode ? "bg-white/10" : "bg-black/5")}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium">
                      {feature.title}
                    </h3>
                  </div>
                  <p className={cn(isDarkMode ? "text-white/50" : "text-black/50")}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center space-y-8">
            <div className={cn(
              "rounded-lg p-8",
              isDarkMode ? "bg-gradient-to-r from-white/5 to-white/10" : "bg-gradient-to-r from-black/5 to-black/10"
            )}>
              <h2 className="text-2xl font-bold mb-4">
                SOC 2 Type II Certified
              </h2>
              <p className={cn("mb-6", isDarkMode ? "text-white/50" : "text-black/50")}>
                Our security practices and controls have been audited and certified by independent third-party auditors
              </p>
              <Button
                variant="outline"
                className={cn(
                  isDarkMode ? "text-white border-white hover:bg-white/10" : "text-black border-black hover:bg-black/10"
                )}
              >
                Download Security Whitepaper
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={cn(
                "border rounded-lg p-6",
                isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
              )}>
                <div className="text-3xl font-bold mb-2">99.99%</div>
                <div className={cn(isDarkMode ? "text-white/50" : "text-black/50")}>Uptime SLA</div>
              </div>
              <div className={cn(
                "border rounded-lg p-6",
                isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
              )}>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className={cn(isDarkMode ? "text-white/50" : "text-black/50")}>Security Monitoring</div>
              </div>
              <div className={cn(
                "border rounded-lg p-6",
                isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
              )}>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className={cn(isDarkMode ? "text-white/50" : "text-black/50")}>Data Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPage;
