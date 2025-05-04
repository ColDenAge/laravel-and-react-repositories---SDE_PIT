import { Button } from "@/components/ui/button";
import {
  Dumbbell,
  HelpCircle,
  Home,
  LayoutDashboard,
  User,
  Users,
} from "lucide-react";
import React from "react";

export default function SidebarSection() {
  // Navigation items data for mapping
  const navItems = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <LayoutDashboard size={24} />, label: "Dashboard" },
    { icon: <Dumbbell size={24} />, label: "Manage Gym" },
    { icon: <Users size={24} />, label: "Members" },
    { icon: <User size={24} />, label: "Account" },
    { icon: <HelpCircle size={24} />, label: "Help" },
  ];

  return (
    <nav className="h-screen w-[170px] flex flex-col rounded-[45px] overflow-hidden">
      {/* Logo section */}
      <div className="bg-[#112134] py-10 flex flex-col items-center">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img src="" alt="Wolf Logo" className="object-cover" />
        </div>
        <h1 className="text-white text-[32px] font-medium text-center mt-2">
          GymWatch
        </h1>
      </div>

      {/* Navigation items */}
      <div className="bg-[#d9d9d9] flex-1 flex flex-col py-4">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-[120px] w-full flex flex-col items-center justify-center gap-2 rounded-none hover:bg-gray-200"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="font-bold text-xl text-black">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}