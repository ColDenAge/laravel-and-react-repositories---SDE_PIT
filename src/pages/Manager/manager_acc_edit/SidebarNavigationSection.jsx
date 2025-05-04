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

export const SidebarNavigationSection = () => {
  // Navigation items data for mapping
  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-[82px] h-[82px]" />,
      active: false,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-[62px] h-[69px]" />,
      active: false,
    },
    {
      id: "manage-gym",
      label: "Manage Gym",
      icon: <Dumbbell className="w-[102px] h-[102px]" />,
      active: false,
    },
    {
      id: "members",
      label: "Members",
      icon: <Users className="w-[104px] h-[46px]" />,
      active: false,
    },
    {
      id: "account",
      label: "Account",
      icon: <User className="w-[63px] h-[57px]" />,
      active: true,
    },
    {
      id: "help",
      label: "Help",
      icon: <HelpCircle className="w-[71px] h-[71px]" />,
      active: false,
    },
  ];

  return (
    <nav className="w-[170px] h-full flex-shrink-0 relative">
      <div className="w-full h-full bg-[#112134] rounded-[45px] flex flex-col">
        {/* Logo section */}
        <div className="w-full pt-[41px] pb-[20px] flex flex-col items-center">
          <div className="w-[90px] h-[90px]">
            <img
              src=""
              alt="GymWatch Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-[7px] font-medium text-white text-[32px] text-center">
            GymWatch
          </div>
        </div>

        {/* Navigation items container */}
        <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full h-[157px] flex flex-col items-center justify-center p-0 rounded-none hover:bg-white/50 ${
                item.active ? "bg-white/50" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-2">
                  {item.icon}
                </div>
                <span
                  className={`font-bold text-black text-xl text-center ${
                    item.id === "account" ? "font-normal" : "font-bold"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SidebarNavigationSection;