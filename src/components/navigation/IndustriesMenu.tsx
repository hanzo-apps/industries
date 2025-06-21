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
    href: "/coming-soon"
  },
  {
    icon: Shield,
    title: "Defense",
    description: "Solutions for Defense Sector",
    href: "/coming-soon"
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Solutions for Automotive",
    href: "/coming-soon"
  },
  {
    icon: Building,
    title: "Banking",
    description: "Solutions for Banking",
    href: "/coming-soon"
  },
  {
    icon: Globe,
    title: "Capital Markets",
    description: "Solutions for Capital Markets",
    href: "/coming-soon"
  },
  {
    icon: Beaker,
    title: "Chemicals",
    description: "Solutions for Chemicals",
    href: "/coming-soon"
  },
  {
    icon: Radio,
    title: "Communications and Media",
    description: "Solutions for Communications and Media",
    href: "/coming-soon"
  }
];

export function IndustriesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-auto p-0 text-gray-700 hover:text-black font-medium transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sm">
            Industries
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[90vw] max-w-[850px] max-h-[80vh] overflow-y-auto p-4 md:p-6 bg-white border border-gray-200 shadow-lg rounded-lg mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-black">Industries</h3>
                <a href="/coming-soon" className="text-sm text-gray-600 hover:text-black">
                  View all
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  href="#contact" 
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