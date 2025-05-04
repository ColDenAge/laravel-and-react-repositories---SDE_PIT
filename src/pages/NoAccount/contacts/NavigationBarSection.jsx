import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export const NavigationBarSection = () => {
  // Navigation items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#", className: "text-[#363a3f]" },
    { label: "Login", href: "#" },
  ];

  return (
    <header className="w-full h-36 bg-[#d9d9d9] flex items-center justify-between px-16">
      {/* Logo and Company Name */}
      <div className="flex flex-col items-center">
        <img
          className="w-[104px] h-[104px] object-cover"
          alt="ByteMinds Systems Logo"
          src=""
        />
        <div className="[font-family:'Kode_Mono-Bold',Helvetica] font-bold text-black text-2xl text-center">
          ByteMinds Systems
        </div>
      </div>

      {/* Navigation Links */}
      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex gap-8">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className={`[font-family:'Fredoka-Regular',Helvetica] font-normal text-2xl text-center ${item.className || "text-black"}`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          {/* Sign Up Button */}
          <NavigationMenuItem>
            <Button className="w-[133px] h-[37px] bg-[#0b294b] rounded-[10px] [font-family:'Fredoka-Regular',Helvetica] font-normal text-white text-2xl">
              Sign Up
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default NavigationBarSection;