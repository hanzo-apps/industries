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
    href: "/capabilities/frontier-models"
  },
  {
    icon: Shield,
    title: "AI Safety & Alignment",
    description: "Research and tools for safe, aligned AI systems",
    href: "/capabilities/ai-safety"
  },
  {
    icon: Cog,
    title: "Edge AI & Local Deployment",
    description: "Private, on-device AI inference solutions",
    href: "/capabilities/edge-ai"
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
    href: "/capabilities/defense-ai"
  },
  {
    icon: Users,
    title: "Open Source Ecosystem",
    description: "Community-driven AI development",
    href: "/capabilities/open-source"
  }
];

export function CapabilitiesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white hover:bg-gray-800">
            Capabilities
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] p-6 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-black">Capabilities</h3>
                <a href="/capabilities" className="text-sm text-gray-600 hover:text-black">
                  View all
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <NavigationMenuLink key={capability.title} asChild>
                      <a
                        href={capability.href}
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