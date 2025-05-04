import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesSection } from "./ClassesSection";
import { EditAmenitySection } from "./EditAmenitySection";
import { GymInfoSection } from "./GymInfoSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerGym() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="160:1382"
    >
      <div className="bg-white w-full relative">
        {/* Background images represented as colored divs */}
        <div className="absolute w-full h-[2203px] top-0 left-0 bg-blue-900/80"></div>
        <div className="absolute w-full h-[2552px] top-[492px] left-0 bg-white"></div>

        {/* Header */}
        <header className="relative w-full max-w-[590px] pt-14 pl-[200px] z-10">
          <h1 className="text-5xl font-bold text-white [font-family:'Cairo-Bold',Helvetica]">
            Gym Management
          </h1>
          <p className="mt-5 text-xl font-normal text-white [font-family:'Cairo-Regular',Helvetica]">
            &gt; Management Mode
          </p>
        </header>

        {/* Main content sections */}
        <div className="relative z-10 flex flex-col w-full">
          <GymInfoSection />
          <AmenitiesSection />
          <EditAmenitySection />
          <ClassesSection />
          <MembershipPlansSection />
        </div>

        {/* Sidebar */}
        <SidebarSection />

        {/* Darkening overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/20 pointer-events-none"></div>
      </div>
    </div>
  );
}