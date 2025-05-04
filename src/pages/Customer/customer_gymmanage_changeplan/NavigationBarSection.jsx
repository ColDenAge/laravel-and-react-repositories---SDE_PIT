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
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-8 h-8" />,
      active: true,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-8 h-8" />,
    },
    { id: "gyms", label: "Gyms", icon: <Dumbbell className="w-8 h-8" /> },
    {
      id: "billings",
      label: "Billings",
      icon: <DollarSign className="w-8 h-8" />,
    },
    { id: "account", label: "Account", icon: <User className="w-8 h-8" /> },
    { id: "help", label: "Help", icon: <HelpCircle className="w-8 h-8" /> },
  ];

  return (
    <nav className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          {/* Placeholder for wolf logo */}
          <img
            src=""
            alt="GymWatch Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="font-medium text-white text-[32px] text-center mt-2">
          GymWatch
        </h1>
      </div>

      {/* Navigation items */}
      <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col items-center justify-center h-[157px] ${
              item.id === "gyms" ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              {item.icon}
              <span
                className={`mt-4 text-xl text-center text-black ${
                  item.id !== "account" ? "font-bold" : "font-normal"
                }`}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}