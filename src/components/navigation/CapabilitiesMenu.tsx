import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Cloud, Shield, Brain, Cog, Zap, Users } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Frontier AI Models",
    description: "State-of-the-art language and multimodal models",
    href: "https://docs.google.com/document/d/19rZTIUZShaITzwp35XK1893OE83HA1bIIhmQNzFvKrg/edit?usp=sharing",
    external: true
  },
  {
    icon: Shield,
    title: "AI Safety & Alignment",
    description: "Research and tools for safe, aligned AI systems",
    href: "https://hanzo.ai/ai",
    external: true
  },
  {
    icon: Cog,
    title: "Edge AI & Local Deployment",
    description: "Private, on-device AI inference solutions",
    href: "https://docs.google.com/document/d/1Dga5hEIxTopxwYzmLh7L-NgZlJR8XB5V7du-UdY2Nk8/edit?usp=sharing",
    external: true
  },
  {
    icon: Cloud,
    title: "Decentralized AI Infrastructure",
    description: "Resilient, distributed AI computing",
    href: "/capabilities/decentralized-ai"
  },
  {
    icon: Zap,
    title: "Defense & Security AI",
    description: "Mission-critical AI for defense applications",
    href: "https://docs.google.com/document/d/19rZTIUZShaITzwp35XK1893OE83HA1bIIhmQNzFvKrg/edit?usp=drive_link",
    external: true
  },
  {
    icon: Users,
    title: "Open Source Ecosystem",
    description: "Community-driven AI development",
    href: "https://docs.google.com/document/d/1mWC6mo9Wd4s3KaWPTF_4QhLqh5lRmzED12wRnLq71Sk/edit?usp=sharing",
    external: true
  }
];

export function CapabilitiesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-auto p-0 text-gray-700 hover:text-black font-medium transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sm">
            Capabilities
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[90vw] max-w-[800px] max-h-[80vh] overflow-y-auto p-4 md:p-6 bg-white border border-gray-200 shadow-lg rounded-lg mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-black">Capabilities</h3>
                <a href="/capabilities" className="text-sm text-gray-600 hover:text-black">
                  View all
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <NavigationMenuLink key={capability.title} asChild>
                      <a
                        href={capability.href}
                        target={capability.external ? "_blank" : undefined}
                        rel={capability.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "flex items-start space-x-3 rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                        )}
                      >
                        <Icon className="w-5 h-5 mt-0.5 text-gray-600 group-hover:text-black" />
                        <div>
                          <div className="font-medium text-black">{capability.title}</div>
                          <div className="text-sm text-gray-600">{capability.description}</div>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  );
                })}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}