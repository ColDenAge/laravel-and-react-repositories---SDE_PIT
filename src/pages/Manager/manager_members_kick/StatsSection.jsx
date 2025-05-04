import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function StatsSection() {
  // Data for stat cards to enable mapping
  const statsData = [
    {
      title: "Total Members",
      value: "23",
      status: "23 total members",
      statusColor: "text-[#4caf50]",
    },
    {
      title: "Active Today",
      value: "17",
      status: "17 active members from last month",
      statusColor: "text-[#4caf50]",
    },
    {
      title: "New Members",
      value: "2",
      status: "+2 last month",
      statusColor: "text-[#4caf50]",
    },
    {
      title: "Attendance Rate",
      value: "86%",
      status: "-3% from last month",
      statusColor: "text-[#ff5252]",
    },
  ];

  return (
    <section className="w-full max-w-[1130px] mx-auto mt-8">
      <header className="mb-8">
        <h1 className="font-bold text-5xl text-white [font-family:'Cairo-Bold',Helvetica] mb-2">
          Members Management
        </h1>
        <p className="text-xl text-white [font-family:'Cairo-Regular',Helvetica]">
          &gt; Management Mode
        </p>
      </header>

      <div>
        <h2 className="text-[32px] text-white [font-family:'Cairo-Medium',Helvetica] font-medium mb-4">
          Members Statistics (this month)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#ffffff1a] border-none text-white rounded-xl"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="[font-family:'Cairo-Regular',Helvetica] text-sm text-[#999999]">
                    {stat.title}
                  </p>
                  <p className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[32px] leading-[48px] text-[#efefef]">
                    {stat.value}
                  </p>
                  <p
                    className={`[font-family:'Cairo-Regular',Helvetica] text-sm ${stat.statusColor}`}
                  >
                    {stat.status}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}