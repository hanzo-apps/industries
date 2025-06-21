
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Paintbrush, Megaphone, HelpCircle, Settings, Lightbulb, Bot, MessagesSquare, DollarSign, ChartBar, Palette, Music, Calculator } from "lucide-react";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import PlatformCard from "@/components/team/PlatformCard";
import CallToAction from "@/components/team/CallToAction";

export default function Team() {
  const teamMembers = [
    {
      name: "Zach Kelling",
      role: "Founder and CTO",
      description: "Leading technical vision and innovation at Hanzo Industries.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Antje Worring",
      role: "Chief Operating Officer",
      description: "Driving operational excellence and strategic execution.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Michael Kelling",
      role: "President",
      description: "Guiding company strategy and vision for the future.",
      icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Vincent Butta",
      role: "Executive VP",
      description: "Leading key initiatives and business operations.",
      icon: MessagesSquare,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Leigh Ferreria",
      role: "Chief Revenue Officer",
      description: "Driving revenue growth and market expansion.",
      icon: DollarSign,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Danielle Savage",
      role: "Chief Brand Officer",
      description: "Building and elevating the Hanzo brand globally.",
      icon: Palette,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      name: "Ashley Kathleen Christie",
      role: "Chief of Staff",
      description: "Ensuring organizational effectiveness and leadership alignment.",
      icon: HelpCircle,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Anastasia Zacharaoff",
      role: "VP Engineering",
      description: "Leading engineering teams and technical development.",
      icon: Code2,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Rob Ruiz",
      role: "VP Strategy",
      description: "Developing strategic initiatives and business intelligence.",
      icon: ChartBar,
      gradient: "from-teal-500 to-green-500"
    },
    {
      name: "Marcus White",
      role: "VP Research",
      description: "Leading research and development initiatives.",
      icon: Lightbulb,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const platformAgents = [
    {
      name: "Hanzo Chat",
      role: "Team Communication Platform",
      description: "Our Slack-like chat platform where all AI team members collaborate seamlessly. Features channels, direct messaging, and integrated AI workflows.",
      icon: MessagesSquare,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      name: "Hanzo Bot",
      role: "AI Framework",
      description: "Our advanced Agentic Framework that powers your AI team. Perfect for enterprises looking to augment their workforce with AI clones.",
      icon: Bot,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet Your AI Team
          </h1>
          <p className="text-gray-400 text-lg">
            Powered by Hanzo Bot, your AI team members work seamlessly with you on Hanzo App 
            and through Hanzo Chat to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Platform</h2>
            <p className="text-gray-400 mb-8">
              Hanzo Works enables enterprises to create AI-powered clones of their workforce, 
              enhancing productivity and innovation through our powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platformAgents.map((agent) => (
              <PlatformCard key={agent.name} {...agent} />
            ))}
          </div>

          <CallToAction />
        </div>
      </main>

      <Footer />
    </div>
  );
}
