import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { User } from "lucide-react";
import React from "react";

export const NavigationBarSection = () => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: false },
    { label: "Features", active: false },
    { label: "FAQs", active: false },
    { label: "About Us", active: false },
    { label: "Contact", active: true },
    { label: "Dashboard", active: false },
  ];

  return (
    <header className="w-full h-36 bg-[#d9d9d9] flex items-center justify-between px-[72px]">
      {/* Logo and Company Name */}
      <div className="flex flex-col items-center">
        <div className="w-[104px] h-[104px] flex items-center justify-center">
          <img
            className="w-[104px] h-[104px] object-cover"
            alt="ByteMinds Systems Logo"
            src=""
          />
        </div>
        <div className="font-['Kode_Mono-Bold',Helvetica] font-bold text-black text-2xl text-center">
          ByteMinds Systems
        </div>
      </div>

      {/* Navigation and User Actions */}
      <div className="flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`w-[139px] font-['Fredoka-Regular',Helvetica] font-normal text-2xl text-center ${
                    item.label === "Contact" ? "text-[#363a3f]" : "text-black"
                  }`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sign Out Button */}
        <Button className="w-[133px] h-[37px] bg-[#0b294b] rounded-[10px] font-['Fredoka-Regular',Helvetica] font-normal text-white text-2xl">
          Sign Out
        </Button>

        {/* User Avatar */}
        <Avatar className="w-[57px] h-[57px]">
          <AvatarFallback>
            <User className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default NavigationBarSection;