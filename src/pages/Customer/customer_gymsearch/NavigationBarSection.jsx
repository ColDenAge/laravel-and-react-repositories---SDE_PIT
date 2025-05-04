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
    <nav className="h-full w-[170px] flex flex-col rounded-[45px] overflow-hidden">
      {/* Dark header section with logo */}
      <div className="bg-[#112134] py-10 flex flex-col items-center">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          {/* Wolf logo placeholder */}
          <img
            src=""
            alt="GymWatch Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="mt-4 font-medium text-white text-[32px] text-center">
          GymWatch
        </h1>
      </div>

      {/* Navigation items section */}
      <div className="flex-1 bg-[#d9d9d9] rounded-b-[45px] flex flex-col">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`relative h-[157px] flex flex-col items-center justify-center ${
              item.active ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <span
              className={`font-bold text-xl text-black text-center ${
                item.label === "Account" ? "font-normal" : "font-bold"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}