import {
  Dumbbell,
  HelpCircle,
  Home,
  LayoutDashboard,
  User,
} from "lucide-react";
import React from "react";

export const SidebarSection = () => {
  // Navigation items data for mapping
  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-8 h-8" />,
      section: "main",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-7 h-7" />,
      section: "main",
      active: true,
    },
    {
      id: "manage-gym",
      label: "Manage Gym",
      icon: <Dumbbell className="w-10 h-10" />,
      section: "main",
    },
    {
      id: "members",
      label: "Members",
      icon: (
        <div className="relative w-[104px] h-[46px]">
          <div className="absolute w-10 h-9 top-0 left-0 bg-blue-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div className="absolute w-10 h-9 top-1 left-[30px] bg-green-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div className="absolute w-10 h-9 top-0 left-[63px] bg-purple-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
        </div>
      ),
      section: "main",
    },
    {
      id: "account",
      label: "Account",
      icon: <User className="w-[63px] h-[57px]" />,
      section: "main",
    },
    {
      id: "help",
      label: "Help",
      icon: <HelpCircle className="w-[71px] h-[71px]" />,
      section: "main",
    },
  ];

  return (
    <aside className="w-[170px] h-full flex flex-col">
      <div className="w-full h-full bg-[#112134] rounded-[45px] flex flex-col">
        {/* Logo section */}
        <div className="flex flex-col items-center pt-10 pb-6">
          <div className="w-[90px] h-[90px] bg-transparent flex items-center justify-center">
            {/* Wolf logo placeholder */}
            <img
              src=""
              alt="GymWatch Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-medium text-white text-[32px] mt-3">GymWatch</h1>
        </div>

        {/* Navigation section with light background */}
        <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`w-full h-[157px] flex flex-col items-center justify-center relative ${
                item.active ? "bg-white bg-opacity-50" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-2 flex items-center justify-center">
                  {item.icon}
                </div>
                <span
                  className={`text-xl text-center text-black ${
                    item.id === "help" ||
                    item.id === "manage-gym" ||
                    item.id === "home" ||
                    item.id === "dashboard"
                      ? "font-bold"
                      : "font-normal"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarSection;