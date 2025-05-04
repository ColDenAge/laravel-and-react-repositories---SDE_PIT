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
    <aside className="h-full w-[170px] flex flex-col rounded-[45px] overflow-hidden">
      {/* Logo section */}
      <div className="bg-[#112134] py-10 flex flex-col items-center">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <img src="" alt="GymWatch Logo" className="object-contain" />
        </div>
        <h1 className="font-medium text-white text-[32px] text-center mt-2">
          GymWatch
        </h1>
      </div>

      {/* Navigation section */}
      <nav className="flex-1 bg-[#d9d9d9] rounded-b-[45px] py-4">
        <ul className="flex flex-col">
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href="#"
                className={`flex flex-col items-center justify-center h-[157px] relative ${
                  item.active ? "bg-white bg-opacity-50" : ""
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <span
                    className={`font-bold text-xl text-black text-center ${
                      item.label === "Account" ? "font-normal" : "font-bold"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}