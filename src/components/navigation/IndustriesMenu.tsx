import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Plane, Car, Building, Globe, Beaker, Radio, Shield } from "lucide-react";

const industries = [
  {
    icon: Plane,
    title: "Aerospace",
    description: "Solutions for Aerospace Industry",
    href: "/industries/aerospace"
  },
  {
    icon: Shield,
    title: "Defense",
    description: "Solutions for Defense Sector",
    href: "/industries/defense"
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Solutions for Automotive",
    href: "/industries/automotive"
  },
  {
    icon: Building,
    title: "Banking",
    description: "Solutions for Banking",
    href: "/industries/banking"
  },
  {
    icon: Globe,
    title: "Capital Markets",
    description: "Solutions for Capital Markets",
    href: "/industries/capital-markets"
  },
  {
    icon: Beaker,
    title: "Chemicals",
    description: "Solutions for Chemicals",
    href: "/industries/chemicals"
  },
  {
    icon: Radio,
    title: "Communications and Media",
    description: "Solutions for Communications and Media",
    href: "/industries/communications-media"
  }
];

export function IndustriesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white hover:bg-gray-800">
            Industries
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[850px] p-6 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-black">Industries</h3>
                <a href="/industries" className="text-sm text-gray-600 hover:text-black">
                  View all
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <NavigationMenuLink key={industry.title} asChild>
                      <a
                        href={industry.href}
                        className={cn(
                          "flex items-start space-x-3 rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                        )}
                      >
                        <Icon className="w-5 h-5 mt-0.5 text-gray-600 group-hover:text-black" />
                        <div>
                          <div className="font-medium text-black">{industry.title}</div>
                          <div className="text-sm text-gray-600">{industry.description}</div>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-black text-white rounded-lg">
                <h4 className="font-semibold mb-2">Execute with Hanzo</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Need expert guidance? Partner with Hanzo Industries to implement frontier AI 
                  solutions with safety and alignment at the core.
                </p>
                <a 
                  href="/contact" 
                  className="text-sm font-medium text-white hover:underline inline-flex items-center"
                >
                  Contact Hanzo Industries
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}