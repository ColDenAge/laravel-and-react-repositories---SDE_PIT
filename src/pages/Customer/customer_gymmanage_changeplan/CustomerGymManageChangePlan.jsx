import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ActiveSubscriptionsSection } from "./ActiveSubscriptionsSection";
import { ChangePlansSection } from "./ChangePlansSection";
import { GymDetailsSection } from "./GymDetailsSection";
import { HeaderSection } from "./HeaderSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { NavigationBarSection } from "./NavigationBarSection";
import { RecentActivitiesSection } from "./RecentActivitiesSection";

export default function CustomerGymmanage() {
  // Data for the subscription tabs
  const tabsData = [
    { id: "subscriptions", label: "My Subscriptions", isActive: true },
    { id: "explore", label: "Explore Gyms", isActive: false },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="111:160"
    >
      <div className="bg-white w-full relative">
        {/* Background elements */}
        <div className="absolute inset-0 w-full h-[345px] bg-[#0b294b]" />
        <div className="absolute inset-0 w-full top-[345px] bg-white" />

        <div className="relative w-full flex flex-col">
          {/* Header with navigation tabs */}
          <HeaderSection />

          {/* Navigation bar */}
          <NavigationBarSection />

          {/* Subscription tabs */}
          <div className="relative px-[200px] mt-4 mb-6">
            <Tabs defaultValue="subscriptions" className="w-fit">
              <TabsList className="p-0 bg-transparent space-x-4">
                {tabsData.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`h-12 w-[172px] rounded-lg ${
                      tab.isActive
                        ? "bg-[#ffb400] text-white hover:text-white"
                        : "bg-white text-[#0b294b]"
                    } [font-family:'Cairo-SemiBold',Helvetica] font-semibold text-base`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Main content sections */}
          <div className="relative w-full px-[200px] flex flex-col gap-8">
            <ActiveSubscriptionsSection />

            <div className="flex gap-8">
              <div className="flex-1">
                <GymDetailsSection />
              </div>
              <div className="w-[300px]">
                <ChangePlansSection />
              </div>
            </div>

            <MembershipPlansSection />
            <RecentActivitiesSection />
          </div>
        </div>
      </div>
    </div>
  );
}