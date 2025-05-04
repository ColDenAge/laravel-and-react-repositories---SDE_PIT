import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export default function HeroSection() {
  // Navigation menu items
  const navItems = [
    { name: "Home", color: "text-[#363a3f]" },
    { name: "Features", color: "text-white" },
    { name: "FAQs", color: "text-white" },
    { name: "About Us", color: "text-white" },
    { name: "Contact", color: "text-black" },
    { name: "Dashboard", color: "text-black" },
  ];

  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Background images */}
        <div className="flex h-[1082px]">
          <div className="relative flex-1">
            <img
              className="w-full h-full object-cover"
              alt="Background home top"
              src=""
            />
          </div>
          <div className="w-[760px]">
            <img
              className="w-full h-full object-cover"
              alt="People exercising"
              src=""
            />
          </div>
        </div>

        {/* Navigation bar */}
        <div className="absolute w-full top-0 left-0 py-9">
          <div className="flex items-center justify-between px-16">
            {/* Logo section */}
            <div className="flex flex-col items-center">
              <img
                className="w-[104px] h-[104px] object-cover"
                alt="Wolf logo"
                src=""
              />
              <div className="mt-2 [font-family:'Kode_Mono-Bold',Helvetica] font-bold text-white text-2xl text-center">
                ByteMinds Systems
              </div>
            </div>

            {/* Navigation menu */}
            <NavigationMenu className="ml-auto">
              <NavigationMenuList className="flex gap-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={`${item.color} [font-family:'Fredoka-Regular',Helvetica] font-normal text-2xl text-center whitespace-nowrap`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Sign out button and avatar */}
            <div className="flex items-center gap-4 ml-8">
              <Button className="bg-[#0b294b] rounded-[10px] h-[37px] [font-family:'Fredoka-Regular',Helvetica] font-normal text-white text-2xl">
                Sign Out
              </Button>
              <Avatar className="w-[57px] h-[57px]">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute top-[287px] left-[185px] w-[558px]">
          <h1 className="[font-family:'Freeman-Regular',Helvetica] font-normal text-white text-5xl">
            GymWatch
          </h1>
          <h2 className="mt-[72px] [font-family:'Fredoka-Medium',Helvetica] font-medium text-white text-[32px]">
            &quot;Stay on the right track, keep your members back&quot;
          </h2>
          <p className="mt-[30px] [font-family:'Fredoka-Regular',Helvetica] font-normal text-white text-xl">
            Automated membership tracker service, membership management,
            membership enrollment, and marketing features.
          </p>
          <Button className="mt-[80px] bg-[#0b294b] rounded-[10px] w-[270px] h-[71px] [font-family:'Fredoka-Medium',Helvetica] font-medium text-white text-[32px]">
            Get Started
          </Button>
        </div>

        {/* Info card */}
        <Card className="absolute w-[844px] h-80 top-[852px] left-[538px] bg-[#d9d9d9] rounded-none border-none shadow-none">
          <CardContent className="p-0">
            <h3 className="w-[422px] h-[50px] mt-6 ml-[76px] [font-family:'Cairo-Medium',Helvetica] font-medium text-black text-[32px]">
              Gym Management Software
            </h3>
            <p className="w-[615px] mt-[27px] ml-[76px] [font-family:'Cairo-Regular',Helvetica] font-normal text-black text-xl">
              Perfect for both gym members and owners to monitor the activities
              and programs you need.
              <br />
              <br />
              Quick and easy to set-up to streamline the way you can run your
              gym and how can monitor your billing and program.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}