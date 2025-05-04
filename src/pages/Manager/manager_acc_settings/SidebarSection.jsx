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
  const navigationItems = [
    { id: "home", label: "Home", icon: <Home size={24} />, position: "top" },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={24} />,
      position: "top",
    },
    {
      id: "manage-gym",
      label: "Manage Gym",
      icon: <Dumbbell size={24} />,
      position: "top",
    },
    {
      id: "members",
      label: "Members",
      icon: <Users size={24} />,
      position: "top",
    },
    {
      id: "account",
      label: "Account",
      icon: <User size={24} />,
      position: "top",
      active: true,
    },
    {
      id: "help",
      label: "Help",
      icon: <HelpCircle size={24} />,
      position: "bottom",
    },
  ];

  return (
    <nav className="w-[170px] h-full flex flex-col bg-[#112134] rounded-[45px] overflow-hidden">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img src="" alt="Wolf logo" className="object-cover" />
        </div>
        <h1 className="font-medium text-white text-[32px] mt-2 [font-family:'Cairo-Medium',Helvetica]">
          GymWatch
        </h1>
      </div>

      {/* Navigation section with light background */}
      <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
        {/* Top navigation items */}
        <div className="flex-1 flex flex-col">
          {navigationItems
            .filter((item) => item.position === "top")
            .map((item) => (
              <div
                key={item.id}
                className={`w-full h-[157px] flex flex-col items-center justify-center relative ${
                  item.active ? "bg-white bg-opacity-50" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-[82px] h-[82px] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span
                    className={`mt-2 text-xl text-center text-black [font-family:'Cairo-Bold',Helvetica] ${
                      item.id === "account" ? "font-normal" : "font-bold"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom navigation items */}
        <div>
          {navigationItems
            .filter((item) => item.position === "bottom")
            .map((item) => (
              <div
                key={item.id}
                className="w-full h-[157px] flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-[71px] h-[71px] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="mt-2 text-xl text-center text-black [font-family:'Cairo-Bold',Helvetica] font-bold">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
}