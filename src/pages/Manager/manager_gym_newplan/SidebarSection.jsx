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
    { id: "home", label: "Home", icon: <Home size={32} />, active: false },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={32} />,
      active: false,
    },
    {
      id: "manage-gym",
      label: "Manage Gym",
      icon: <Dumbbell size={32} />,
      active: true,
    },
    {
      id: "members",
      label: "Members",
      icon: <Users size={32} />,
      active: false,
    },
    {
      id: "account",
      label: "Account",
      icon: <User size={32} />,
      active: false,
    },
    {
      id: "help",
      label: "Help",
      icon: <HelpCircle size={32} />,
      active: false,
    },
  ];

  return (
    <nav className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img src="" alt="Wolf logo" className="object-cover" />
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
            className={`relative w-full h-[157px] flex flex-col items-center justify-center ${
              item.active ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="mb-2 flex items-center justify-center h-[70px]">
                {item.icon}
              </div>
              <div
                className={`font-bold text-black text-xl text-center ${
                  item.id === "account" ? "font-normal" : "font-bold"
                }`}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}