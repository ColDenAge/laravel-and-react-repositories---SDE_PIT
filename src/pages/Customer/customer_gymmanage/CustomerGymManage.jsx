import { Button } from "@/components/ui/button";
import React from "react";
import { ActiveSubscriptionsSection } from "./ActiveSubscriptionsSection";
import { GymDetailsSection } from "./GymDetailsSection";
import { HeaderSection } from "./HeaderSection";
import { MembershipPlanSection } from "./MembershipPlanSection";
import { NavigationBarSection } from "./NavigationBarSection";
import { RecentActivitiesSection } from "./RecentActivitiesSection";

export default function CustomerGymmanage() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="4:2547"
    >
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Background elements */}
        <div className="absolute inset-0 w-full h-[345px] bg-[#0b294b]" />
        <div className="absolute top-[345px] left-0 right-0 bottom-0 bg-white" />

        {/* Content container */}
        <div className="relative w-full">
          {/* Navigation bar on the right */}
          <div className="fixed right-0 top-0 h-full">
            <NavigationBarSection />
          </div>

          {/* Main content */}
          <div className="flex flex-col">
            {/* Header section */}
            <HeaderSection />

            {/* Tabs */}
            <div className="px-[200px] mt-[175px] flex space-x-4">
              <Button className="h-12 w-[171px] bg-[#ffb400] hover:bg-[#ffb400]/90 rounded-lg">
                <span className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-6">
                  My Subscriptions
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-12 w-[172px] bg-white hover:bg-gray-100 rounded-lg"
              >
                <span className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-[#0b294b] text-base text-center tracking-[0] leading-6">
                  Explore Gyms
                </span>
              </Button>
            </div>

            {/* Active Subscriptions Section */}
            <div className="px-[200px] mt-6">
              <ActiveSubscriptionsSection />
            </div>

            {/* Two column layout for Gym Details and Membership Plan */}
            <div className="px-[200px] mt-6 flex gap-6">
              <div className="flex-1">
                <GymDetailsSection />
              </div>
              <div className="w-[40%]">
                <MembershipPlanSection />
              </div>
            </div>

            {/* Recent Activities Section */}
            <div className="px-[200px] mt-6 mb-12">
              <RecentActivitiesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}