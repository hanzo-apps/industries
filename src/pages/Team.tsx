import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2, Paintbrush, HelpCircle, Settings, Lightbulb, Bot,
  MessagesSquare, ChartBar, Shield, Users
} from "lucide-react";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import CallToAction from "@/components/team/CallToAction";
import { teamMembers, teamDepartments } from "@/constants/team-members";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export default function Team() {
  const { isDarkMode } = useTheme();

  // Human Leadership Team
  const humanLeadership = [
    {
      name: "Michael Kelling",
      role: "President",
      description: "Guiding company strategy and vision for the future.",
      icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-500",
      image: "/leadership/michael-kelling.png"
    },
    {
      name: "Antje Worring",
      role: "Chief Operating Officer",
      description: "Driving operational excellence and strategic execution.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500",
      image: "/leadership/antje-worring.png"
    },
    {
      name: "Zach Kelling",
      role: "Founding CTO",
      description: "Technical founder driving Hanzo's mission to build frontier AI.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      image: "/leadership/zach-kelling.png"
    },
    {
      name: "Dave Lorenzini",
      role: "Chief Strategy Officer",
      description: "Strategy visionary with decades of experience in immersive computing and AI.",
      icon: Code2,
      gradient: "from-indigo-500 to-blue-500",
      image: "/leadership/dave-lorenzini.jpg"
    },
    {
      name: "Vincent Butta",
      role: "Chief Revenue Officer",
      description: "Driving revenue growth and commercial strategy.",
      icon: MessagesSquare,
      gradient: "from-green-500 to-emerald-500",
      image: "/leadership/vincent-butta.jpg"
    },
    {
      name: 'Major "Dream" Williams',
      role: "Chief Visionary Officer",
      description: "Visionary leader bridging finance, technology, and global partnerships.",
      icon: Lightbulb,
      gradient: "from-amber-500 to-yellow-500",
      image: "/leadership/major-williams.png"
    },
    {
      name: "Danielle Savage",
      role: "Chief Brand Officer",
      description: "Building and elevating the Hanzo brand globally.",
      icon: Paintbrush,
      gradient: "from-rose-500 to-pink-500",
      image: "/leadership/danielle-savage.png"
    },
    {
      name: "Ashley Kathleen Christie",
      role: "Chief of Staff",
      description: "Ensuring organizational effectiveness and leadership alignment.",
      icon: HelpCircle,
      gradient: "from-amber-500 to-orange-500",
      image: "/leadership/ashley-christie.png"
    },
    {
      name: "Woo Bin",
      role: "VP Engineering",
      description: "Full-stack and AI engineer leading platform development.",
      icon: Code2,
      gradient: "from-cyan-500 to-blue-500",
      image: "/leadership/woo-bin.png"
    },
    {
      name: "Anastasia Zacharaoff",
      role: "VP Engineering",
      description: "Leading engineering teams and technical development.",
      icon: Code2,
      gradient: "from-violet-500 to-purple-500",
      image: "/leadership/anastasia-zacharaoff.png"
    },
    {
      name: "Jason Xu",
      role: "Lead Mobile Engineer",
      description: "Building cross-platform mobile and web applications.",
      icon: Code2,
      gradient: "from-sky-500 to-cyan-500",
      image: "/leadership/jason-xu.png"
    },
    {
      name: "Kaori Fujio",
      role: "Lead Wallet Engineer",
      description: "Full-stack developer specializing in wallet and payment systems.",
      icon: Shield,
      gradient: "from-pink-500 to-rose-500",
      image: "/leadership/kaori-fujio.png"
    },
    {
      name: "Rob Ruiz",
      role: "VP Strategy",
      description: "Developing strategic initiatives and business intelligence.",
      icon: ChartBar,
      gradient: "from-teal-500 to-green-500",
      image: "/leadership/rob-ruiz.png"
    },
    {
      name: "Marcus White",
      role: "VP Research",
      description: "Leading AI research and development initiatives.",
      icon: Lightbulb,
      gradient: "from-indigo-500 to-purple-500",
      image: "/leadership/marcus-white.png"
    },
    {
      name: "Ari Lerner",
      role: "Chief Technological Officer",
      description: "Deep systems architect driving core platform technology.",
      icon: Code2,
      gradient: "from-emerald-500 to-teal-500",
      image: "/leadership/ari-lerner.png"
    },
    {
      name: "Jackson Mori",
      role: "VP Engineering",
      description: "Engineering leader building scalable distributed systems.",
      icon: Code2,
      gradient: "from-orange-500 to-red-500",
      image: "/leadership/jackson-mori.png"
    },
    {
      name: "Ole Brereton",
      role: "Executive VP",
      description: "Senior executive driving strategic initiatives and partnerships.",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500",
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
        gradient: m.gradient,
        emoji: (m as any).emoji,
        link: `/team/${id}`,
      })),
  }));

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      isDarkMode ? "bg-black text-white" : "bg-white text-black"
    )}>
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            People + AI, Building Together
          </h1>
          <p className={cn("text-lg", isDarkMode ? "text-white/50" : "text-black/50")}>
            World-class leadership paired with an autonomous AI workforce that ships around the clock.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Human Leadership Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Leadership</h2>
            <p className={cn(
              "text-center mb-10 max-w-2xl mx-auto",
              isDarkMode ? "text-white/50" : "text-black/50"
            )}>
              Decades of combined expertise in AI, distributed systems, and scaling technology companies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {humanLeadership.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* AI Team Section — 4x4 Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">AI Workforce</h2>
            <p className={cn(
              "text-center mb-12 max-w-2xl mx-auto",
              isDarkMode ? "text-white/50" : "text-black/50"
            )}>
              16 autonomous agents organized across four departments — Build, Ship, Grow, Run.
            </p>

            {aiTeamByDept.map((dept) => (
              <div key={dept.key} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">{dept.label}</h3>
                  <span className={cn(
                    "text-xs font-mono px-2 py-1 rounded",
                    isDarkMode ? "bg-white/10 text-white/50" : "bg-black/10 text-black/50"
                  )}>
                    {dept.description}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <Footer />
    </div>
  );
}
