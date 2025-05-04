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
  // Navigation items data for easy mapping
  const navItems = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <LayoutDashboard size={24} />, label: "Dashboard" },
    { icon: <Dumbbell size={24} />, label: "Gyms" },
    { icon: <DollarSign size={24} />, label: "Billings", highlighted: true },
    { icon: <User size={24} />, label: "Account" },
    { icon: <HelpCircle size={24} />, label: "Help" },
  ];

  return (
    <nav className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img
            src=""
            alt="Wolf logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="font-medium text-white text-[32px] mt-2">GymWatch</h1>
      </div>

      {/* Navigation items container */}
      <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center h-[157px] relative ${
              item.highlighted ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <Button
              variant="ghost"
              className="flex flex-col items-center justify-center h-full w-full gap-2 hover:bg-transparent"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
              <span
                className={`font-bold text-black text-xl ${
                  item.label === "Account" ? "font-normal" : "font-bold"
                }`}
              >
                {item.label}
              </span>
            </Button>
          </div>
        ))}
      </div>
    </nav>
  );
}