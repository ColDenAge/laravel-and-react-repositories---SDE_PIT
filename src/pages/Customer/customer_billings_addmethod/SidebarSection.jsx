import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Dumbbell,
  HelpCircle,
  Home,
  LayoutDashboard,
  User,
} from "lucide-react";
import React from "react";

export default function SidebarSection() {
  // Navigation items data for mapping
  const navigationItems = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <LayoutDashboard size={24} />, label: "Dashboard" },
    { icon: <Dumbbell size={24} />, label: "Gyms" },
    { icon: <DollarSign size={24} />, label: "Billings", highlighted: true },
    { icon: <User size={24} />, label: "Account" },
    { icon: <HelpCircle size={24} />, label: "Help" },
  ];

  return (
    <nav className="flex flex-col h-screen w-[170px] bg-[#112134] rounded-[45px] overflow-hidden">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img src="" alt="Wolf logo" className="object-cover" />
        </div>
        <h1 className="font-medium text-white text-[32px] text-center mt-2">
          GymWatch
        </h1>
      </div>

      {/* Navigation section with light background */}
      <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`flex flex-col items-center justify-center h-[157px] rounded-none hover:bg-gray-200 transition-colors ${
              item.highlighted ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
              <span
                className={`font-bold text-black text-xl text-center ${
                  item.label === "Account" ? "font-normal" : "font-bold"
                }`}
              >
                {item.label}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </nav>
  );
}