import {
  Dumbbell,
  HelpCircle,
  Home,
  LayoutDashboard,
  User,
  Users,
} from "lucide-react";
import React from "react";

export const SidebarSection = () => {
  // Navigation items data for mapping
  const navItems = [
    { id: "home", icon: <Home size={32} />, label: "Home" },
    {
      id: "dashboard",
      icon: <LayoutDashboard size={32} />,
      label: "Dashboard",
    },
    {
      id: "manage-gym",
      icon: <Dumbbell size={32} />,
      label: "Manage Gym",
      active: true,
    },
    { id: "members", icon: <Users size={32} />, label: "Members" },
    { id: "account", icon: <User size={32} />, label: "Account" },
    { id: "help", icon: <HelpCircle size={32} />, label: "Help" },
  ];

  return (
    <nav className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img src="" alt="GymWatch Logo" className="object-cover" />
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
              <div className="mb-2 flex items-center justify-center h-[82px]">
                {item.icon}
              </div>
              <div
                className={`font-bold text-xl text-center ${item.id === "members" ? "font-normal" : "font-bold"}`}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SidebarSection;