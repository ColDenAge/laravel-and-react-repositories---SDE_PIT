import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { LeonardoProfileSection } from "./LeonardoProfileSection";
import { NavigationBarSection } from "./NavigationBarSection";
import { PalabonProfileSection } from "./PalabonProfileSection";
import { SeguisProfileSection } from "./SeguisProfileSection";

export default function Contacts() {
  return (
    <div
      className="bg-white flex flex-col w-full min-h-screen"
      data-model-id="1:1444"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Navigation Bar */}
        <NavigationBarSection />

        {/* Contact Us Banner */}
        <div className="relative w-full">
          <div className="w-full max-w-[756px] h-[127px] bg-[url(/blue-shape.svg)] bg-[100%_100%]">
            <div className="absolute top-[18px] left-[396px] [font-family:'Cairo-Bold',Helvetica] font-bold text-white text-5xl">
              Contact Us
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="flex flex-col w-full gap-8 mt-8">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <LeonardoProfileSection />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <PalabonProfileSection />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <SeguisProfileSection />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}