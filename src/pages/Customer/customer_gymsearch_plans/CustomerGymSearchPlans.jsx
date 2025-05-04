import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { GymSearchSection } from "./GymSearchSection";
import { MembershipPlansSection } from "./MembershipPlansSection";
import { NavigationBarSection } from "./NavigationBarSection";
import { PageTitleSection } from "./PageTitleSection";

export default function CustomerGymsearch() {
  return (
    <div
      className="bg-white flex flex-col min-h-screen w-full"
      data-model-id="128:620"
    >
      <div className="relative w-full bg-[url(/blue-bg.png)] bg-cover">
        <div className="container mx-auto px-4">
          {/* Page title section */}
          <div className="absolute top-[3%] left-[10%]">
            <PageTitleSection />
          </div>

          {/* Navigation bar positioned on the right side */}
          <div className="absolute top-[3%] right-[1%] h-[68%]">
            <NavigationBarSection />
          </div>

          {/* Tabs for navigation */}
          <div className="mt-8 mb-6">
            <Tabs defaultValue="explore-gyms">
              <TabsList className="gap-4">
                <TabsTrigger
                  value="my-subscriptions"
                  className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-[#0b294b] bg-white h-12 px-6"
                >
                  My Subscriptions
                </TabsTrigger>
                <TabsTrigger
                  value="explore-gyms"
                  className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-white bg-[#ffb400] h-12 px-6"
                >
                  Explore Gyms
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Main content area with white background */}
          <div className="bg-white rounded-t-lg w-full">
            {/* Gym search section */}
            <div className="absolute top-[16%] left-[10%] w-[63%]">
              <GymSearchSection />
            </div>

            {/* Membership plans section */}
            <div className="absolute top-[35%] left-[34%] w-[31%]">
              <MembershipPlansSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}