"use client";

import {
  Code2, Paintbrush, HelpCircle, Settings, Lightbulb, Bot,
  MessagesSquare, ChartBar, Shield, Users
} from "lucide-react";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import CallToAction from "@/components/team/CallToAction";
import { teamMembers, teamDepartments } from "@/lib/constants/team-members";
import { cn } from '@hanzo/ui'
export default function PageClient() {
  const aiTeamByDept = teamDepartments.map((dept) => ({
    ...dept,
    members: Object.entries(teamMembers)
      .filter(([_, m]) => m.department === dept.key)
      .map(([id, m]) => ({
        name: m.name,
        role: m.role,
        description: m.description,
        icon: m.mainIcon,
        emoji: (m as any).emoji,
        botId: id,
        link: `/team/${id}`,
      })),
  }));

  return (
    <div className={cn(
      "hz-min-h-screen hz-transition",
      "hz-bg hz-fg"
    )}>
      <main className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container-narrow hz-align-center hz-mb-7">
          <h1 className="hz-t-4xl hz-w-bold hz-mb-5">
            An AI workforce
          </h1>
          <p className={cn("hz-t-lg", "hz-fg")}>
            Sixteen autonomous agents across four departments, shipping around the clock.
          </p>
        </div>

        <div className="hz-container">
          {/* AI Team Section — 4x4 Grid */}
          <div className="hz-mb-7">
            <h2 className="hz-t-3xl hz-w-bold hz-mb-4 hz-align-center">AI Workforce</h2>
            <p className={cn(
              "hz-container-narrow hz-mw-md hz-align-center hz-mb-7",
              "hz-fg"
            )}>
              16 autonomous agents organized across four departments — Build, Create, Ship, Run.
            </p>

            {aiTeamByDept.map((dept) => (
              <div key={dept.key} className="hz-mb-7">
                <div className="hz-row hz-ai-center hz-gap-3 hz-mb-5">
                  <h3 className="hz-t-2xl hz-w-bold">{dept.label}</h3>
                  <span className={cn(
                    "hz-t-xs hz-mono hz-px-2 hz-py-1 hz-r-md",
                    "hz-bg-surface hz-fg"
                  )}>
                    {dept.description}
                  </span>
                </div>
                <div className="hz-grid hz-grid-4 hz-gap-5">
                  {dept.members.map((member) => (
                    <TeamMemberCard key={member.name} {...member} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <CallToAction />
        </div>
      </main>
    </div>
  );
}
