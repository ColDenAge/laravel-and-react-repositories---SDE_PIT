import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesSection } from "./ClassesSection";
import { GymInfoSection } from "./GymInfoSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "../manager_dashboard/SidebarSection";

export default function ManagerGym() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="57:145"
    >
      <div className="bg-white w-full">
        <div className="relative">
          {/* Background images */}
          <div className="absolute w-full h-[2203px] top-0 left-0 bg-gradient-to-b from-blue-800 to-blue-600" />
          <div className="absolute w-full h-[2552px] top-[492px] left-0 bg-white" />

          {/* Header */}
          <header className="relative w-full pt-14 px-[200px] z-10">
            <div className="[font-family:'Cairo-Bold',Helvetica] font-bold text-white text-5xl">
              Gym Management
            </div>
            <div className="mt-5 [font-family:'Cairo-Regular',Helvetica] font-normal text-white text-xl">
              &gt; Management Mode
            </div>
          </header>

          {/* Main content container */}
          <div className="relative z-10 mt-[180px] px-[200px] flex">
            {/* Main content sections */}
            <div className="flex-1 flex flex-col gap-8">
              <GymInfoSection />
              <AmenitiesSection />
              <ClassesSection />
              <MembershipPlansSection />
            </div>

            {/* Sidebar */}
            <div className="ml-8">
              <SidebarSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}