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
    <aside className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col">
      {/* Logo section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img src="" alt="GymWatch Logo" className="object-cover" />
        </div>
        <h1 className="font-medium text-white text-[32px] text-center mt-2">
          GymWatch
        </h1>
      </div>

      {/* Navigation section with light background */}
      <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`relative w-full h-[157px] flex flex-col items-center justify-center ${
              item.active ? "bg-white bg-opacity-50" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              {item.label === "Members" ? (
                <div className="relative w-[104px] h-[46px] mb-4">
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
                <div className="text-black mb-2">{item.icon}</div>
              )}
              <div className="font-bold text-black text-xl text-center">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}