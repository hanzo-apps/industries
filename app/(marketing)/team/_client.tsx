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
  // Human Leadership Team
  const humanLeadership = [
    {
      name: "Michael Kelling",
      role: "President",
      description: "Guiding company strategy and vision for the future.",
      icon: Lightbulb,
      image: "/leadership/michael-kelling.png"
    },
    {
      name: "Antje Worring",
      role: "Chief Operating Officer",
      description: "Driving operational excellence and strategic execution.",
      icon: Settings,
      image: "/leadership/antje-worring.png"
    },
    {
      name: "Zach Kelling",
      role: "Founding CTO",
      description: "Technical founder driving Hanzo's mission to build frontier AI.",
      icon: Code2,
      image: "/leadership/zach-kelling.png"
    },
    {
      name: "Dave Lorenzini",
      role: "Chief Strategy Officer",
      description: "Strategy visionary with decades of experience in immersive computing and AI.",
      icon: Code2,
      image: "/leadership/dave-lorenzini.jpg"
    },
    {
      name: "Vincent Butta",
      role: "Chief Revenue Officer",
      description: "Driving revenue growth and commercial strategy.",
      icon: MessagesSquare,
      image: "/leadership/vincent-butta.jpg"
    },
    {
      name: 'Major "Dream" Williams',
      role: "Chief Visionary Officer",
      description: "Visionary leader bridging finance, technology, and global partnerships.",
      icon: Lightbulb,
      image: "/leadership/major-williams.png"
    },
    {
      name: "Danielle Savage",
      role: "Chief Brand Officer",
      description: "Building and elevating the Hanzo brand globally.",
      icon: Paintbrush,
      image: "/leadership/danielle-savage.png"
    },
    {
      name: "Ashley Kathleen Christie",
      role: "Chief of Staff",
      description: "Ensuring organizational effectiveness and leadership alignment.",
      icon: HelpCircle,
      image: "/leadership/ashley-christie.png"
    },
    {
      name: "Woo Bin",
      role: "VP Engineering",
      description: "Full-stack and AI engineer leading platform development.",
      icon: Code2,
      image: "/leadership/woo-bin.png"
    },
    {
      name: "Anastasia Zacharaoff",
      role: "VP Engineering",
      description: "Leading engineering teams and technical development.",
      icon: Code2,
      image: "/leadership/anastasia-zacharaoff.png"
    },
    {
      name: "Jason Xu",
      role: "Lead Mobile Engineer",
      description: "Building cross-platform mobile and web applications.",
      icon: Code2,
      image: "/leadership/jason-xu.png"
    },
    {
      name: "Kaori Fujio",
      role: "Lead Wallet Engineer",
      description: "Full-stack developer specializing in wallet and payment systems.",
      icon: Shield,
      image: "/leadership/kaori-fujio.png"
    },
    {
      name: "Rob Ruiz",
      role: "VP Strategy",
      description: "Developing strategic initiatives and business intelligence.",
      icon: ChartBar,
      image: "/leadership/rob-ruiz.png"
    },
    {
      name: "Marcus White",
      role: "VP Research",
      description: "Leading AI research and development initiatives.",
      icon: Lightbulb,
      image: "/leadership/marcus-white.png"
    },
    {
      name: "Jackson Mori",
      role: "VP Engineering",
      description: "Engineering leader building scalable distributed systems.",
      icon: Code2,
      image: "/leadership/jackson-mori.png"
    },
    {
      name: "Ole Brereton",
      role: "Executive VP",
      description: "Senior executive driving strategic initiatives and partnerships.",
      icon: Lightbulb,
      image: "/leadership/ole-brereton.png"
    },
  ];

  // Build AI team from constants, grouped by department
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
            People + AI, Building Together
          </h1>
          <p className={cn("hz-t-lg", "hz-fg")}>
            World-class leadership paired with an autonomous AI workforce that ships around the clock.
          </p>
        </div>

        <div className="hz-container">
          {/* Human Leadership Section */}
          <div className="hz-mb-7">
            <h2 className="hz-t-3xl hz-w-bold hz-mb-4 hz-align-center">Leadership</h2>
            <p className={cn(
              "hz-container-narrow hz-mw-md hz-align-center hz-mb-6",
              "hz-fg"
            )}>
              Decades of combined expertise in AI, distributed systems, and scaling technology companies.
            </p>
            <div className="hz-grid hz-grid-4 hz-gap-5">
              {humanLeadership.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>

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
