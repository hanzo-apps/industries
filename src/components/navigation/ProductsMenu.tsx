
import { Bot, Code2, Blocks } from "lucide-react";
import { products } from "@/constants/navigation";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";
import { useState } from "react";

export const ProductsMenu = () => {
  const [open, setOpen] = useState(false);

  const getIconForProduct = (item: string) => {
    switch (item) {
      case "Hanzo App":
        return <Blocks className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />;
      case "Hanzo Code":
        return <Code2 className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />;
      case "Hanzo Dev":
        return <Bot className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />;
      default:
        return <Blocks className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />;
    }
  };

  const getProductPath = (productName: string) => {
    switch (productName) {
      case "Hanzo App":
        return "/products/zen";
      case "Hanzo Code":
        return "/products/koan";
      case "Hanzo Dev":
        return "/products/hanzo-dev";
      default:
        return `/products/${productName.toLowerCase().replace(/\s+/g, '-')}`;
    }
  };

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <NavigationButton onHoverStart={() => setOpen(true)}>Products</NavigationButton>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[480px] p-6 bg-black border-gray-800"
          sideOffset={8}
        >
          <div className="space-y-6">
            {products.map(category => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map(item => (
                    <a
                      key={item.name}
                      href={getProductPath(item.name)}
                      className="flex items-start space-x-3 group"
                    >
                      {getIconForProduct(item.name)}
                      <div>
                        <div className="text-gray-300 group-hover:text-white font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
