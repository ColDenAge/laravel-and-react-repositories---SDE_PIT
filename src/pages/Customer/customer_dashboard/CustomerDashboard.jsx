import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { NavigationBarSection } from "./NavigationBarSection";
import { NotificationsSection } from "./NotificationsSection";
import { PerformanceStatsSection } from "./PerformanceStatsSection";
import { RecentActivitiesSection } from "./RecentActivitiesSection";
import { StatsSection } from "./StatsSection";
import { UpcomingSchedulesSection } from "./UpcomingSchedulesSection";

export default function CustomerDashboard() {
  return (
    <div
      className="bg-white flex flex-col w-full min-h-screen"
      data-model-id="1:1948"
    >
      <div className="relative w-full">
        {/* Main container with background */}
        <div className="w-full bg-[url(/blue-bg.png)] bg-cover">
          {/* Top navigation bar */}
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex-1">
              <div className="p-4 text-white">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-sm">&gt; Member Mode</p>

                <div className="mt-6">
                  <p className="text-white">Total payments (this month)</p>
                </div>
              </div>

              {/* Performance Stats Section - Full width at top */}
              <PerformanceStatsSection />
            </div>

            {/* Navigation Bar Section - Right side */}
            <div className="w-full lg:w-64">
              <NavigationBarSection />
            </div>
          </div>

          {/* Main content area with white background */}
          <div className="w-full bg-white rounded-t-xl p-4">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              {/* Left column */}
              <div className="w-full lg:w-1/3">
                <NotificationsSection />
              </div>

              {/* Middle column */}
              <div className="w-full lg:w-1/3">
                <UpcomingSchedulesSection />
              </div>

              {/* Right column */}
              <div className="w-full lg:w-1/3">
                <StatsSection />
              </div>
            </div>

            {/* Recent Activities Section - Bottom full width */}
            <div className="w-full">
              <RecentActivitiesSection />
            </div>

            {/* Monthly Goal Progress Card */}
            <div className="w-full lg:w-1/3 mt-4">
              <Card className="shadow-[0px_4px_6px_#0000001a]">
                <CardContent className="p-8">
                  <h3 className="font-normal text-black text-2xl leading-9 mb-6">
                    Monthly Goal Progress
                  </h3>

                  <div className="flex justify-between mb-4">
                    <div className="text-[#666666] text-base leading-6">
                      Current: 75%
                    </div>
                    <div className="text-[#666666] text-base leading-6">
                      Target: 100%
                    </div>
                  </div>

                  <Progress
                    value={75}
                    className="h-6 mb-4 bg-gray-200 rounded-[3px]"
                    indicatorClassName="bg-[#00c853] rounded-[3px]"
                  />

                  <div className="text-[#666666] text-base leading-6">
                    Hit a number of attendance required in a month.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}