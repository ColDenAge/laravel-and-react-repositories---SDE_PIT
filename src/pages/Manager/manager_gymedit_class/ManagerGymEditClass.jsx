import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesSection } from "./ClassesSection";
import { EditClassSection } from "./EditClassSection";
import { GymInfoSection } from "./GymInfoSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerGymedit() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="160:2434"
    >
      <div className="bg-white w-full relative">
        {/* Background elements */}
        <div className="absolute inset-0 w-full h-[2203px] bg-gradient-to-b from-blue-600 to-blue-500" />
        <div className="absolute w-full h-[2552px] top-[492px] left-0 bg-white" />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Header */}
          <header className="w-full pt-14 px-[200px] bg-transparent">
            <div className="mb-14">
              <h1 className="text-5xl font-bold text-white [font-family:'Cairo-Bold',Helvetica]">
                Gym Management
              </h1>
              <p className="mt-5 text-xl font-normal text-white [font-family:'Cairo-Regular',Helvetica]">
                &gt; Management Mode
              </p>
            </div>
          </header>

          {/* Main content with sidebar */}
          <div className="flex flex-row w-full">
            {/* Main content sections */}
            <div className="flex-1 flex flex-col">
              <GymInfoSection />
              <AmenitiesSection />
              <ClassesSection />
              <MembershipPlansSection />
            </div>

            {/* Sidebar */}
            <div className="relative">
              <SidebarSection />
            </div>
          </div>
        </div>

        {/* Overlay for edit class modal */}
        <div className="absolute inset-0 bg-black/50 z-20 flex justify-center items-center">
          <EditClassSection />
        </div>
      </div>
    </div>
  );
}