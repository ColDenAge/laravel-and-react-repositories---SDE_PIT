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

export default function AboutUsAcc() {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: false },
    { label: "Features", active: false },
    { label: "FAQs", active: false },
    { label: "About Us", active: true },
    { label: "Contact", active: false },
    { label: "Dashboard", active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full h-screen">
        <div className="relative h-screen">
          {/* Background image */}
          <div className="absolute w-full h-full top-0 left-0">
            <div className="absolute w-[566px] h-full top-0 right-0">
              <img
                className="w-full h-full object-cover"
                alt="Wolf background"
                src=""
              />
            </div>

            {/* Navigation bar */}
            <header className="absolute w-full h-36 top-0 left-0 bg-[#d9d9d9] flex items-center">
              <div className="container mx-auto flex justify-between items-center">
                {/* Logo section */}
                <div className="flex flex-col items-center">
                  <img
                    className="w-[104px] h-[104px] object-cover"
                    alt="ByteMinds Systems Logo"
                    src=""
                  />
                  <span className="font-bold text-2xl [font-family:'Kode_Mono-Bold',Helvetica]">
                    ByteMinds Systems
                  </span>
                </div>

                {/* Navigation items */}
                <NavigationMenu className="mx-auto">
                  <NavigationMenuList className="flex space-x-8">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuLink
                          className={`text-2xl [font-family:'Fredoka-Regular',Helvetica] ${
                            item.active ? "text-[#363a3f]" : "text-black"
                          }`}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                {/* Sign out button and avatar */}
                <div className="flex items-center space-x-4">
                  <Button className="h-[37px] w-[133px] bg-[#0b294b] rounded-[10px] text-white text-2xl [font-family:'Fredoka-Regular',Helvetica]">
                    Sign Out
                  </Button>
                  <Avatar className="w-[57px] h-[57px]">
                    <AvatarFallback>BM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </header>
          </div>

          {/* Main content */}
          <main className="absolute w-[1110px] max-w-full px-4 top-[238px] left-1/2 -translate-x-1/2">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <h1 className="text-5xl font-bold text-[#0b294b] mb-[104px] [font-family:'Cairo-Bold',Helvetica]">
                  About Us
                </h1>
                <div className="text-xl text-[#0b294b] space-y-8 [font-family:'Cairo-Regular',Helvetica]">
                  <p>
                    ByteMinds Systems is an independent team of passionate
                    developers dedicated to designing and creating smart,
                    efficient, and user-friendly systems that bring convenience
                    to local businesses. Our mission is to empower businesses by
                    streamlining operations, enhancing customer experiences, and
                    driving growth through innovative technology solutions.
                  </p>
                  <p>
                    We believe that every business has unique challenges, and
                    our goal is to develop tailored systems that address these
                    needs—whether it&apos;s automating processes, optimizing
                    workflows, or improving customer engagement. By combining
                    our technical expertise with a deep understanding of
                    industry demands, we deliver solutions that not only meet
                    but exceed expectations.
                  </p>
                  <p>
                    The GymWatch is amongst the first projects we have
                    developed, aimed to support local gym reception by allowing
                    them to monitor membership subscription through a systematic
                    procurement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}