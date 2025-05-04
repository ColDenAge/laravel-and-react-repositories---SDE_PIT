import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function StatisticsSection() {
  // Data for statistics cards
  const statisticsData = [
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
    <section className="w-full">
      <div className="mb-6">
        <h2 className="font-medium text-white text-[32px] [font-family:'Cairo-Medium',Helvetica] mb-2">
          Members Statistics (this month)
        </h2>
        <div className="flex items-center">
          <h1 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-white text-5xl">
            Members Management
          </h1>
        </div>
        <div className="[font-family:'Cairo-Regular',Helvetica] font-normal text-white text-xl mt-4">
          &gt; Management Mode
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {statisticsData.map((stat, index) => (
          <Card
            key={index}
            className="w-[284px] bg-[#ffffff1a] border-none rounded-xl"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#999999] text-sm leading-[21px]">
                  {stat.title}
                </p>
                <p className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#efefef] text-[32px] leading-[48px]">
                  {stat.value}
                </p>
              </div>
              <p
                className={`[font-family:'Cairo-Regular',Helvetica] font-normal text-sm leading-[21px] ${stat.statusColor}`}
              >
                {stat.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}