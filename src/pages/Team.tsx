
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Paintbrush, HelpCircle, Settings, Lightbulb, Bot, MessagesSquare, DollarSign, ChartBar, Palette, Music, Calculator, Binary, Database, MessageCircle, Scale } from "lucide-react";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import PlatformCard from "@/components/team/PlatformCard";
import CallToAction from "@/components/team/CallToAction";
import { Link } from "react-router-dom";

export default function Team() {
  // Human Leadership Team
  const humanLeadership = [
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

  // AI Team Members
  const aiTeamMembers = [
    {
      name: "Dev",
      role: "AI Developer",
      description: "Expert in full-stack development and system architecture.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      link: "/team/dev"
    },
    {
      name: "Des",
      role: "AI Designer",
      description: "Crafting beautiful and intuitive user experiences.",
      icon: Paintbrush,
      gradient: "from-purple-500 to-pink-500",
      link: "/team/des"
    },
    {
      name: "Opera",
      role: "Operations Engineer",
      description: "Maintaining system reliability and performance.",
      icon: Settings,
      gradient: "from-yellow-500 to-orange-500",
      link: "/team/opera"
    },
    {
      name: "Mark",
      role: "Marketing Director",
      description: "Crafting compelling campaigns and driving engagement.",
      icon: MessagesSquare,
      gradient: "from-green-500 to-emerald-500",
      link: "/team/mark"
    },
    {
      name: "Su",
      role: "Support Engineer",
      description: "Ensuring smooth operations and user satisfaction.",
      icon: HelpCircle,
      gradient: "from-pink-500 to-rose-500",
      link: "/team/su"
    },
    {
      name: "Art",
      role: "AI Artist",
      description: "Bringing imagination to life through digital artistry.",
      icon: Palette,
      gradient: "from-violet-500 to-indigo-500",
      link: "/team/art"
    },
    {
      name: "Mu",
      role: "AI Musician",
      description: "Composing and producing original music.",
      icon: Music,
      gradient: "from-pink-500 to-purple-500",
      link: "/team/mu"
    },
    {
      name: "Data",
      role: "Data Scientist",
      description: "Unlocking insights from complex datasets.",
      icon: ChartBar,
      gradient: "from-blue-500 to-indigo-500",
      link: "/team/data"
    },
    {
      name: "Core",
      role: "Core Engineer",
      description: "Building robust system foundations.",
      icon: Settings,
      gradient: "from-gray-500 to-slate-500",
      link: "/team/core"
    },
    {
      name: "Fin",
      role: "Financial Expert",
      description: "Providing financial insights and strategy.",
      icon: DollarSign,
      gradient: "from-green-500 to-teal-500",
      link: "/team/fin"
    },
    {
      name: "Sec",
      role: "Security Expert",
      description: "Protecting digital assets and infrastructure.",
      icon: Scale,
      gradient: "from-red-500 to-orange-500",
      link: "/team/sec"
    },
    {
      name: "Algo",
      role: "Algorithm Expert",
      description: "Optimizing computational solutions.",
      icon: Binary,
      gradient: "from-cyan-500 to-blue-500",
      link: "/team/algo"
    },
    {
      name: "DB",
      role: "Database Expert",
      description: "Managing data infrastructure.",
      icon: Database,
      gradient: "from-emerald-500 to-green-500",
      link: "/team/db"
    },
    {
      name: "Cal",
      role: "AI Calculator",
      description: "Processing complex computations.",
      icon: Calculator,
      gradient: "from-purple-500 to-violet-500",
      link: "/team/cal"
    },
    {
      name: "Chat",
      role: "Conversation Expert",
      description: "Facilitating natural communication.",
      icon: MessageCircle,
      gradient: "from-blue-500 to-purple-500",
      link: "/team/chat"
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
            Our Team
          </h1>
          <p className="text-gray-400 text-lg">
            Human leadership working alongside AI team members to build the future of work.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Human Leadership Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Leadership</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of expertise in AI, technology, and business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {humanLeadership.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* AI Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">AI Team</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Powered by Hanzo Bot, our AI team members work seamlessly to bring your ideas to life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiTeamMembers.map((member) => (
                <Link key={member.name} to={member.link}>
                  <TeamMemberCard {...member} />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Section */}
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
