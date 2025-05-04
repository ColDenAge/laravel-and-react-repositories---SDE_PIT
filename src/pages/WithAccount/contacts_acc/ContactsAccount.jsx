import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { LeonardoProfileSection } from "./LeonardoProfileSection";
import { NavigationBarSection } from "./NavigationBarSection";
import { PalabonProfileSection } from "./PalabonProfileSection";
import { SeguisProfileSection } from "./SeguisProfileSection";

export default function ContactsAcc() {
  return (
    <div
      className="bg-white flex flex-col w-full min-h-screen"
      data-model-id="1:1194"
    >
      <div className="bg-white w-full relative">
        {/* Navigation Bar at the top */}
        <NavigationBarSection />

        {/* Contact Us Banner */}
        <div className="w-full relative">
          <div className="w-full md:w-[756px] py-8 bg-[url(/blue-shape.svg)] bg-[100%_100%]">
            <h1 className="text-center md:text-left md:ml-[396px] font-['Cairo-Bold',Helvetica] font-bold text-white text-5xl">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Profile Sections in the order shown in the image */}
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