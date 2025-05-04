import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Clock, Dumbbell } from "lucide-react";
import React from "react";
import { GymStatsSection } from "./GymStatsSection";
import { NotificationsSection } from "./NotificationsSection";
import { RecentMembersSection } from "./RecentMembersSection";
import { SidebarSection } from "./SidebarSection";
import { UpcomingSchedulesSection } from "./UpcomingSchedulesSection";

export default function ManagerDashboard() {
  // Data for stat cards
  const statCards = [
    {
      id: 1,
      icon: <BarChart3 size={32} />,
      title: "Attendance",
      value: "73.91%",
      description: "Number of people active",
    },
    {
      id: 2,
      icon: <Dumbbell size={32} />,
      title: "Workouts",
      value: "6 people",
      description: "Current members at gym",
    },
    {
      id: 3,
      icon: <Clock size={32} />,
      title: "Ave. time",
      value: "2.14 hrs",
      description: "Average time people in gym",
    },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="51:2224"
    >
      <div className="bg-white w-full">
        <div className="relative bg-[url(/blue-bg.png)] bg-[100%_100%]">
          <div className="pt-14 flex">
            {/* Sidebar */}
            <div className="w-[300px] flex-shrink-0">
              <SidebarSection />
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Gym Stats Section */}
              <GymStatsSection />

              {/* Main content grid */}
              <div className="bg-white p-6">
                <div className="grid grid-cols-12 gap-6">
                  {/* Left column - Upcoming Schedules */}
                  <div className="col-span-4">
                    <UpcomingSchedulesSection />
                  </div>

                  {/* Middle column - Notifications */}
                  <div className="col-span-4">
                    <NotificationsSection />
                  </div>

                  {/* Right column - Stats */}
                  <div className="col-span-4">
                    <div className="grid grid-cols-2 gap-4">
                      {statCards.map((card) => (
                        <Card key={card.id} className="rounded-xl">
                          <CardContent className="p-6">
                            <div className="flex items-start">
                              <div className="text-3xl">{card.icon}</div>
                              <div className="ml-4 text-xl text-[#666666] leading-[30px]">
                                {card.title}
                              </div>
                            </div>
                            <div className="mt-4 text-3xl font-normal leading-[48px]">
                              {card.value}
                            </div>
                            <div className="mt-4 text-base text-[#666666] leading-6">
                              {card.description}
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Monthly Goal Progress Card */}
                      <Card className="col-span-2 rounded-xl shadow-[0px_4px_6px_#0000001a]">
                        <CardContent className="p-6">
                          <div className="text-2xl font-normal leading-9">
                            Monthly Goal Progress
                          </div>

                          <div className="mt-6 flex justify-between text-base text-[#666666]">
                            <div>Current: 21</div>
                            <div>Target: 25</div>
                          </div>

                          <div className="mt-2">
                            <Progress value={84} className="h-6 bg-[#e0e0e0]" />
                          </div>

                          <div className="mt-4 text-base text-[#666666] leading-6">
                            Reach a substantial number of members.
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Recent Members Section - Full width */}
                <div className="mt-6">
                  <RecentMembersSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}