"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export default function PlatformCard({ name, role, description, icon: Icon, gradient }: PlatformCardProps) {
  return (
    <div className={cn(
      "relative group rounded-2xl border p-8 backdrop-blur-sm overflow-hidden",
      "border-white/10 bg-white/5"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out" />
      <div className={cn("inline-flex p-3 rounded-xl bg-gradient-to-br mb-4", gradient)}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className={cn(
        "text-xl font-semibold mb-2",
        "text-white"
      )}>
        {name}
      </h3>
      <p className={cn(
        "font-medium mb-3",
        "text-white/70"
      )}>
        {role}
      </p>
      <p className={"text-white/50"}>
        {description}
      </p>
    </div>
  );
}
