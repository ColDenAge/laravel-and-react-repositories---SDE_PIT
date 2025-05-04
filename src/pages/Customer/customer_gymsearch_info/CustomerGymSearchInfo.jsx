import { Button } from "@/components/ui/button";
import React from "react";
import { AvailableGymsSection } from "./AvailableGymsSection";
import { GymDetailsSection } from "./GymDetailsSection";
import { HeaderSection } from "./HeaderSection";
import { NavigationBarSection } from "./NavigationBarSection";

export default function CustomerGymsearch() {
  // Navigation tab options
  const navigationTabs = [
    { id: "subscriptions", label: "My Subscriptions", active: false },
    { id: "explore", label: "Explore Gyms", active: true },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white" data-model-id="24:506">
      <div className="w-full">
        <div className="relative w-full bg-[url(/blue-bg.png)] bg-cover">
          {/* Header section */}
          <HeaderSection />

          {/* Navigation tabs */}
          <div className="flex gap-4 px-[200px] py-6">
            {navigationTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={tab.active ? "default" : "secondary"}
                className={`h-12 px-6 font-semibold [font-family:'Cairo-SemiBold',Helvetica] text-base ${
                  tab.active
                    ? "bg-[#ffb400] text-white"
                    : "bg-white text-[#0b294b]"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Main content area */}
          <div className="relative w-full">
            {/* White background for content area */}
            <div className="absolute inset-0 bg-white w-full h-full" />

            {/* Available gyms section */}
            <AvailableGymsSection />

            {/* Gym details section (modal) */}
            <GymDetailsSection />

            {/* Navigation bar section */}
            <NavigationBarSection />
          </div>
        </div>
      </div>
    </div>
  );
}