import React from "react";
import { Avatar } from "@/app/components/Avatar";

interface GreetingBannerProps {
  name: string;
  greeting: string;
}

export function GreetingBanner({ name, greeting }: GreetingBannerProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 mt-[-20px] text-center sm:text-left">
      <Avatar name={name} size={48} />
      <h2 className="text-xl font-bold whitespace-pre-line">{greeting}</h2>
    </div>
  );
} 