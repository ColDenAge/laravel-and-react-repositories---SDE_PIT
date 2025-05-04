import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesSection } from "./ClassesSection";
import { CreateMembershipPlanSection } from "./CreateMembershipPlanSection";
import { GymInformationSection } from "./GymInformationSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerGymNewplan() {
  return (
    <div
      className="relative bg-white w-full min-h-screen"
      data-model-id="160:2697"
    >
      {/* Background images represented as colored divs */}
      <div className="absolute inset-0 bg-blue-900 h-[2203px] w-full" />
      <div className="absolute top-[492px] left-0 bg-white h-[2552px] w-full" />

      {/* Main content container */}
      <div className="relative w-full mx-auto">
        {/* Header */}
        <header className="relative w-[590px] pt-14 pl-[200px] bg-transparent z-10">
          <h1 className="text-5xl font-bold text-white [font-family:'Cairo-Bold',Helvetica] tracking-normal">
            Gym Management
          </h1>
          <div className="mt-5 text-xl font-normal text-white [font-family:'Cairo-Regular',Helvetica] tracking-normal">
            &gt; Management Mode
          </div>
        </header>

        {/* Main content sections */}
        <div className="relative z-10 flex">
          {/* Main content area */}
          <div className="flex-1">
            <GymInformationSection />
            <AmenitiesSection />
            <ClassesSection />
            <MembershipPlansSection />
          </div>

          {/* Sidebar */}
          <SidebarSection />
        </div>

        {/* Overlay for the create membership plan modal */}
        <div className="absolute inset-0 bg-black/50 z-20">
          <CreateMembershipPlanSection />
        </div>
      </div>
    </div>
  );
}