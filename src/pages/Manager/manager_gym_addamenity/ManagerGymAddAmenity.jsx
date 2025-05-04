import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesSection } from "./ClassesSection";
import { CreateAmenitySection } from "./CreateAmenitySection";
import { GymInfoSection } from "./GymInfoSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerGym() {
  return (
    <div
      className="relative bg-white flex flex-col min-h-screen w-full"
      data-model-id="160:1645"
    >
      <div className="relative w-full">
        {/* Background images */}
        <div className="absolute inset-0 h-[2203px] bg-gradient-to-b from-blue-600 to-blue-500 z-0" />
        <div className="absolute top-[492px] inset-x-0 h-[2552px] bg-white z-0" />
        <div className="absolute inset-0 bg-black/10 z-0" />{" "}
        {/* Darken overlay */}
        <div className="relative z-10">
          {/* Header */}
          <header className="px-[200px] pt-14 pb-8">
            <h1 className="text-5xl font-bold text-white [font-family:'Cairo-Bold',Helvetica]">
              Gym Management
            </h1>
            <p className="mt-4 text-xl font-normal text-white [font-family:'Cairo-Regular',Helvetica]">
              &gt; Management Mode
            </p>
          </header>

          <div className="flex flex-row">
            {/* Main content */}
            <div className="flex-1 px-[200px]">
              {/* Sections arranged vertically */}
              <GymInfoSection />
              <AmenitiesSection />
              <CreateAmenitySection />
              <ClassesSection />
              <MembershipPlansSection />
            </div>

            {/* Sidebar */}
            <div className="w-auto">
              <SidebarSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}