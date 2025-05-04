import { ChevronRight } from "lucide-react";
import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesManagementSection } from "./ClassesManagementSection";
import { CreateClassSection } from "./CreateClassSection";
import { GymInformationSection } from "./GymInformationSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerGymNewclass() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="160:2171"
    >
      <div className="bg-white w-full relative">
        {/* Background elements */}
        <div className="absolute inset-0 w-full h-[2203px] bg-gradient-to-b from-blue-900 to-blue-700" />
        <div className="absolute w-full h-[2552px] top-[492px] bg-white" />

        {/* Header */}
        <header className="relative w-full max-w-[590px] pt-14 pl-[200px] z-10">
          <h1 className="text-5xl text-white font-bold [font-family:'Cairo-Bold',Helvetica]">
            Gym Management
          </h1>
          <div className="mt-5 text-xl text-white [font-family:'Cairo-Regular',Helvetica]">
            <ChevronRight className="inline-block mr-1" />
            <span>Management Mode</span>
          </div>
        </header>

        {/* Main content container */}
        <div className="relative z-10 flex flex-row w-full">
          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            {/* Sections arranged in the correct order based on the image */}
            <GymInformationSection />
            <AmenitiesSection />
            <ClassesManagementSection />
            <CreateClassSection />
            <MembershipPlansSection />
          </div>

          {/* Sidebar */}
          <div className="relative">
            <SidebarSection />
          </div>
        </div>
      </div>
    </div>
  );
}