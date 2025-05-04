import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesSection } from "./ClassesSection";
import { GymInfoSection } from "./GymInfoSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerGymedit() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="160:1110"
    >
      <div className="bg-white w-full">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute w-full h-[2203px] top-0 left-0 bg-gradient-to-b from-blue-800 to-blue-600" />
          <div className="absolute w-full h-[2552px] top-[492px] left-0 bg-white" />

          {/* Header */}
          <header className="relative w-full pt-14 px-[200px] z-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold text-white [font-family:'Cairo-Bold',Helvetica]">
                Gym Management
              </h1>
              <p className="text-xl font-normal text-white [font-family:'Cairo-Regular',Helvetica]">
                &gt; Management Mode
              </p>
            </div>
          </header>

          {/* Main content area with flex layout */}
          <div className="relative z-10 mt-8 px-[200px] flex">
            {/* Main content sections */}
            <div className="flex-1 flex flex-col gap-8">
              <GymInfoSection />
              <AmenitiesSection />
              <ClassesSection />
              <MembershipPlansSection />
            </div>

            {/* Sidebar */}
            <div className="w-[300px] ml-8">
              <SidebarSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}