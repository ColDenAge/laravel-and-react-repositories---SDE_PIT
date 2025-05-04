import {
  DollarSign,
  Dumbbell,
  HelpCircle,
  Home,
  LayoutDashboard,
  User,
} from "lucide-react";
import React from "react";

export default function SidebarSection() {
  // Navigation items data for easy mapping
  const navItems = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <LayoutDashboard size={24} />, label: "Dashboard" },
    { icon: <Dumbbell size={24} />, label: "Gyms" },
    { icon: <DollarSign size={24} />, label: "Billings" },
    { icon: <User size={24} />, label: "Account", active: true },
    { icon: <HelpCircle size={24} />, label: "Help" },
  ];

  return (
    <div className="flex h-full">
      <div className="w-[170px] h-full bg-[#112134] rounded-[45px] flex flex-col">
        {/* Logo section */}
        <div className="flex flex-col items-center pt-10 pb-6">
          <div className="w-[90px] h-[90px] flex items-center justify-center">
            <img src="" alt="GymWatch Logo" className="object-contain" />
          </div>
          <div className="text-white text-[32px] font-medium text-center mt-2 font-['Cairo-Medium',Helvetica]">
            GymWatch
          </div>
        </div>

        {/* Navigation section with light background */}
        <div className="flex-1 bg-[#d9d9d9] rounded-[45px] flex flex-col">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center h-[157px] relative ${
                item.active ? "bg-white bg-opacity-50" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-2 flex items-center justify-center w-16 h-16">
                  {item.icon}
                </div>
                <div
                  className={`text-xl text-center ${
                    item.label === "Account" ? "font-normal" : "font-bold"
                  } font-['Cairo-Bold',Helvetica]`}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}