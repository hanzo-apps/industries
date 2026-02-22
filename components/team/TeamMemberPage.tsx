"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { Button } from "@hanzo/ui";
import { toast } from "@/hooks/use-toast";
import { teamMembers, TeamMemberId } from "@/lib/constants/team-members";
import { cn } from "@/lib/utils";

interface TeamMemberPageProps {
  memberId: TeamMemberId;
}

export default function TeamMemberPage({ memberId }: TeamMemberPageProps) {
  const member = teamMembers[memberId];
  const MainIcon = member.mainIcon;

  const handleContactSensei = () => {
    window.location.href = "https://sensei.group";
    toast({
      title: "Redirecting to Sensei Group",
      description: "Connecting you with human assistance..."
    });
  };

  return (
    <div className={cn("min-h-screen transition-colors duration-300", "bg-black text-white")}>
      <main className="pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className={cn("inline-flex p-3 rounded-xl bg-gradient-to-br mb-4", member.gradient)}>
              <MainIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {member.title}
            </h1>
            <p className={cn("text-lg max-w-2xl mx-auto", "text-white/50")}>
              {member.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {member.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={cn(
                    "p-6 rounded-2xl border",
                    "border-white/10 bg-black/50"
                  )}
                >
                  <FeatureIcon className={cn("h-8 w-8 mb-4", feature.color)} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className={cn("text-white/50")}>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <TeamSlack />

          <div className="text-center max-w-2xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-4">Need Human Assistance?</h2>
            <p className={cn("mb-6", "text-white/50")}>
              While {member.name} is highly capable, sometimes you might need human expertise.
              Contact Sensei Group for dedicated support and consultation.
            </p>
            <Button
              onClick={handleContactSensei}
              className={cn("bg-gradient-to-r hover:opacity-90", member.gradient)}
            >
              Contact Sensei Group
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
