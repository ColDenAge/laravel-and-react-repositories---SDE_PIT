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
    { name: "Login", color: "text-black" },
  ];

  return (
    <section className="relative w-full h-[1082px] overflow-hidden">
      <div className="relative h-full">
        {/* Background image */}
        <img
          className="absolute w-[60%] h-full top-0 left-0 object-cover"
          alt="Background home top"
          src=""
        />

        {/* Right side image */}
        <div className="absolute w-[40%] h-full top-0 right-0 bg-[#d9d9d9]">
          <img
            className="absolute w-full h-full object-cover"
            alt="People exercising in gym"
            src=""
          />
        </div>

        {/* Info card */}
        <Card className="absolute w-[844px] h-80 bottom-[140px] left-1/2 -translate-x-1/2 bg-[#d9d9d9] border-none rounded-none shadow-none">
          <CardContent className="p-0">
            <h3 className="w-[422px] h-[50px] mt-6 ml-[76px] [font-family:'Cairo-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-normal">
              Gym Management Software
            </h3>
            <p className="w-[615px] mt-[27px] ml-[76px] [font-family:'Cairo-Regular',Helvetica] font-normal text-xl text-black tracking-[0] leading-normal">
              Perfect for both gym members and owners to monitor the activities
              and programs you need.
              <br />
              <br />
              Quick and easy to set-up to streamline the way you can run your
              gym and how can monitor your billing and program.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <Button className="absolute top-[551px] left-[299px] w-[270px] h-[71px] bg-[#0b294b] rounded-[10px] hover:bg-[#0b294b]/90">
          <span className="w-[252px] h-[52px] [font-family:'Fredoka-Medium',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-normal">
            Get Started
          </span>
        </Button>

        {/* Hero text content */}
        <div className="absolute w-[558px] h-[238px] top-[287px] left-[185px]">
          <h1 className="absolute w-52 top-0 left-0 [font-family:'Freeman-Regular',Helvetica] font-normal text-white text-5xl tracking-[0] leading-normal">
            GymWatch
          </h1>
          <h2 className="absolute w-[552px] top-[72px] left-0 [font-family:'Fredoka-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-normal">
            &quot;Stay on the right track, keep your members back&quot;
          </h2>
          <p className="absolute w-[497px] top-[158px] left-0 [font-family:'Fredoka-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal">
            Automated membership tracker service, membership management,
            membership enrollment, and marketing features.
          </p>
        </div>

        {/* Navigation bar */}
        <header className="absolute w-full h-36 top-0 left-0">
          {/* Logo and company name */}
          <div className="absolute w-[337px] h-[126px] top-[9px] left-[69px]">
            <div className="relative w-[335px] h-[126px]">
              <img
                className="absolute w-[104px] h-[104px] top-0 left-[116px] object-cover"
                alt="Wolf logo"
                src=""
              />
              <div className="absolute w-[335px] top-[95px] left-0 [font-family:'Kode_Mono-Bold',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-normal">
                ByteMinds Systems
              </div>
            </div>
          </div>

          {/* Navigation menu */}
          <NavigationMenu className="absolute top-[53px] left-[416px] max-w-none w-[1290px]">
            <NavigationMenuList className="flex justify-between">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`w-[139px] h-7 ${item.color} [font-family:'Fredoka-Regular',Helvetica] font-normal text-2xl text-center tracking-[0] leading-normal whitespace-nowrap`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button className="w-[133px] h-[37px] bg-[#0b294b] rounded-[10px] hover:bg-[#0b294b]/90">
                  <span className="w-[139px] h-7 [font-family:'Fredoka-Regular',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-normal whitespace-nowrap">
                    Sign Up
                  </span>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
      </div>
    </section>
  );
}