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

export const NavigationBarSection = () => {
  // Navigation items data for mapping
  const navigationItems = [
    { name: "Home", icon: <Home size={24} />, active: false },
    { name: "Dashboard", icon: <LayoutDashboard size={24} />, active: false },
    { name: "Gyms", icon: <Dumbbell size={24} />, active: true },
    { name: "Billings", icon: <DollarSign size={24} />, active: false },
    { name: "Account", icon: <User size={24} />, active: false },
    { name: "Help", icon: <HelpCircle size={24} />, active: false },
  ];

  return (
    <nav className="h-full w-[170px] flex flex-col rounded-[45px] overflow-hidden">
      {/* Dark header section with logo */}
      <div className="bg-[#112134] pt-10 pb-4 flex flex-col items-center">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          {/* Placeholder for wolf logo */}
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
      <div className="flex-1 bg-[#d9d9d9] rounded-b-[45px] flex flex-col">
        {navigationItems.map((item, index) => (
          <Button
            key={item.name}
            variant="ghost"
            className={`h-[157px] w-full rounded-none flex flex-col items-center justify-center gap-2 relative ${
              item.active ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
              <span
                className={`text-xl ${item.active ? "font-bold" : "font-normal"}`}
              >
                {item.name}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBarSection;