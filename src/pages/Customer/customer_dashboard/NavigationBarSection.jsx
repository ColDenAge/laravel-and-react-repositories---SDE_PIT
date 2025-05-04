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
  const navItems = [
    { icon: <Home size={32} />, label: "Home", active: false },
    { icon: <LayoutDashboard size={32} />, label: "Dashboard", active: true },
    { icon: <Dumbbell size={32} />, label: "Gyms", active: false },
    { icon: <DollarSign size={32} />, label: "Billings", active: false },
    { icon: <User size={32} />, label: "Account", active: false },
    { icon: <HelpCircle size={32} />, label: "Help", active: false },
  ];

  return (
    <div className="flex h-full">
      <div className="w-[170px] flex flex-col rounded-[45px] overflow-hidden">
        {/* Top section with logo */}
        <div className="bg-[#112134] pt-10 pb-6 flex flex-col items-center">
          <div className="w-[90px] h-[90px] flex items-center justify-center">
            <img
              src=""
              alt="Wolf logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-2 font-medium text-white text-[32px] text-center">
            GymWatch
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex-1 bg-[#d9d9d9] rounded-b-[45px] flex flex-col">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`relative h-[157px] flex flex-col items-center justify-center ${
                item.active ? "bg-white bg-opacity-50" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2">{item.icon}</div>
                <div className="font-bold text-black text-xl text-center">
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