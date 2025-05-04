import React from "react";
import { AmenitiesSection } from "./AmenitiesSection";
import { ClassesSection } from "./ClassesSection";
import { EditMembershipPlanSection } from "./EditMembershipPlanSection";
import { GymInformationSection } from "./GymInformationSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerGymEditplan() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col bg-white"
      data-model-id="160:2960"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="h-[2203px] w-full bg-gradient-to-b from-blue-600 to-blue-400" />
        <div className="absolute top-[492px] h-[2552px] w-full bg-white" />
        <div className="absolute inset-0 bg-black/20" /> {/* Darken overlay */}
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex w-full flex-1">
        {/* Header */}
        <header className="absolute left-[200px] top-14 w-[590px] bg-transparent">
          <h1 className="font-['Cairo-Bold',Helvetica] text-5xl font-bold text-white">
            Gym Management
          </h1>
          <div className="mt-5 font-['Cairo-Regular',Helvetica] text-xl text-white">
            &gt; Management Mode
          </div>
        </header>

        {/* Main content area */}
        <div className="relative mt-40 flex w-full flex-1 flex-col px-[200px]">
          {/* Sections arranged in the correct order based on the image */}
          <GymInformationSection />
          <AmenitiesSection />
          <ClassesSection />
          <MembershipPlansSection />
        </div>

        {/* Sidebar */}
        <SidebarSection />

        {/* Edit Membership Plan Modal */}
        <EditMembershipPlanSection />
      </div>
    </div>
  );
}