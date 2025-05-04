import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    {
      icon: <Home className="w-8 h-8" />,
      label: "Home",
      active: false,
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      label: "Dashboard",
      active: false,
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      label: "Manage Gym",
      active: true,
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Members",
      active: false,
    },
    {
      icon: <User className="w-8 h-8" />,
      label: "Account",
      active: false,
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      label: "Help",
      active: false,
    },
  ];

  // Member avatars for the Members section
  const memberAvatars = [
    { src: "", fallback: "M1" },
    { src: "", fallback: "M2" },
    { src: "", fallback: "M3" },
  ];

  return (
    <nav className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col items-center">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img
            src=""
            alt="GymWatch Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="font-medium text-white text-[32px] mt-2">GymWatch</h1>
      </div>

      {/* Navigation items */}
      <div className="w-full flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col items-center pt-4">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`w-full flex flex-col items-center justify-center py-4 ${
              item.active ? "bg-white bg-opacity-50" : ""
            }`}
          >
            {item.label === "Members" ? (
              <>
                <div className="relative w-[104px] h-[46px] flex justify-center">
                  {memberAvatars.map((avatar, idx) => (
                    <Avatar
                      key={idx}
                      className="w-[41px] h-[37px] absolute"
                      style={{ left: `${idx * 30}px` }}
                    >
                      <AvatarImage src={avatar.src} alt="Member avatar" />
                      <AvatarFallback>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center h-16">
                {item.icon}
              </div>
            )}
            <span
              className={`font-bold text-xl text-black text-center mt-2 ${
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