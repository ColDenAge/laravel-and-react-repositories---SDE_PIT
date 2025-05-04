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
    { icon: <Home size={32} />, label: "Home" },
    { icon: <LayoutDashboard size={32} />, label: "Dashboard" },
    { icon: <Dumbbell size={32} />, label: "Manage Gym", active: true },
    { icon: <Users size={32} />, label: "Members" },
    { icon: <User size={32} />, label: "Account" },
    { icon: <HelpCircle size={32} />, label: "Help" },
  ];

  return (
    <div className="w-[170px] h-full">
      <div className="relative w-full h-full">
        <div className="w-full h-full bg-[#112134] rounded-[45px] flex flex-col">
          {/* Logo section */}
          <div className="flex flex-col items-center pt-10 pb-6">
            <div className="w-[90px] h-[90px] flex items-center justify-center">
              <img src="" alt="Wolf logo" className="object-cover" />
            </div>
            <div className="text-white text-[32px] font-medium text-center mt-2">
              GymWatch
            </div>
          </div>

          {/* Navigation section with light background */}
          <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`w-full h-[157px] flex flex-col items-center justify-center relative ${
                  item.active ? "bg-white bg-opacity-50" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  {/* Special case for Members item with multiple avatars */}
                  {item.label === "Members" ? (
                    <div className="relative w-[104px] h-[46px] mb-2">
                      <div className="absolute w-[41px] h-[37px] top-[9px] left-[30px]">
                        <img src="" alt="Avatar" />
                      </div>
                      <div className="absolute w-[41px] h-[37px] top-0 left-0">
                        <img src="" alt="Avatar" />
                      </div>
                      <div className="absolute w-[41px] h-[37px] top-0 left-[63px]">
                        <img src="" alt="Avatar" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[70px]">
                      {item.icon}
                    </div>
                  )}
                  <div
                    className={`text-xl font-bold text-center mt-2 ${
                      index === 0 ? "text-white" : "text-black"
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}