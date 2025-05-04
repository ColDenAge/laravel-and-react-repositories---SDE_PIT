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

export default function NavigationBarSection() {
  // Navigation items data for easy mapping
  const navItems = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <LayoutDashboard size={24} />, label: "Dashboard" },
    { icon: <Dumbbell size={24} />, label: "Gyms", active: true },
    { icon: <DollarSign size={24} />, label: "Billings" },
    { icon: <User size={24} />, label: "Account" },
    { icon: <HelpCircle size={24} />, label: "Help" },
  ];

  return (
    <nav className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          {/* Wolf logo placeholder */}
          <img
            src=""
            alt="GymWatch Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-white text-[32px] font-medium mt-2 text-center">
          GymWatch
        </h1>
      </div>

      {/* Navigation items section */}
      <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col py-4">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`flex flex-col items-center justify-center h-[120px] w-full rounded-none ${
              item.active ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <span className="font-bold text-xl text-black">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}