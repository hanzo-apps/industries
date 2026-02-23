
import {
  Globe,
  Shield,
  Brain,
  Code,
  Building2,
  Network,
  DollarSign,
  Wrench,
  Rocket,
  Factory,
  Building,
  Car,
  Newspaper,
  ShoppingCart,
  Laptop,
  Plane,
  Landmark,
  Heart,
  Leaf,
  GraduationCap,
  LineChart,
  Users
} from "lucide-react";

export const solutionIcons = {
  // Capabilities
  "Cloud": Globe,
  "Cybersecurity": Shield,
  "Data and Artificial Intelligence": Brain,
  "Digital Engineering and Manufacturing": Code,
  "Emerging Technology": Rocket,
  "Ecosystem Partners": Network,
  "Finance and Risk Management": DollarSign,
  "Infrastructure and Capital Projects": Building2,
  "Learning": GraduationCap,
  "Marketing and Experience": Newspaper,
  "Metaverse": LineChart,
  "Sales and Commerce": ShoppingCart,
  "Hanzo Works": Users,
  
  // Industries
  "AI & Machine Learning": Brain,
  "Blockchain & Web3": Network,
  "Automotive": Car,
  "Banking": Landmark,
  "Communications and Media": Laptop,
  "Consumer Technology": ShoppingCart,
  "Energy": Leaf,
  "Healthcare & Biotech": Heart,
  "High Tech": Rocket,
  "Financial Services": DollarSign,
  "Insurance": Shield,
  "Life Sciences": Heart,
  "Robotics & Automation": Factory,
  "Software and Platforms": Code,
  
  // Default
  "Technology": Wrench,
  "Infrastructure": Network,
} as const;

export const getIcon = (name: string) => {
  return solutionIcons[name as keyof typeof solutionIcons] || Globe;
};
