import { Button } from "@/components/ui/button";
import React from "react";
import { AvailableGymsSection } from "./AvailableGymsSection";
import { HeaderSection } from "./HeaderSection";
import { NavigationBarSection } from "./NavigationBarSection";

export default function CustomerGymsearch() {
  // Navigation tabs data
  const navigationTabs = [
    { id: 1, label: "My Subscriptions", active: false },
    { id: 2, label: "Explore Gyms", active: true },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full" data-model-id="10:206">
      <div className="w-full flex flex-col">
        {/* Background with blue gradient at top */}
        <div className="relative w-full bg-[url(/blue-bg.png)] bg-[100%_100%]">
          {/* Header Section */}
          <HeaderSection />

          {/* Navigation Tabs */}
          <div className="flex gap-4 px-[200px] mt-[175px] mb-6">
            {navigationTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={tab.active ? "default" : "outline"}
                className={`h-12 px-6 rounded-lg ${
                  tab.active
                    ? "bg-[#ffb400] hover:bg-[#e6a200] text-white"
                    : "bg-white text-[#0b294b]"
                } [font-family:'Cairo-SemiBold',Helvetica] font-semibold`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="w-full flex">
            {/* Main content */}
            <div className="flex-1 bg-white">
              <AvailableGymsSection />
            </div>

            {/* Navigation sidebar */}
            <div className="w-auto">
              <NavigationBarSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}