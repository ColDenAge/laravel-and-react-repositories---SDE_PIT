import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function GymStatsSection() {
  // Data for stat cards to enable mapping
  const statCards = [
    {
      title: "Total Members",
      value: "23",
      status: "23 total members",
    },
    {
      title: "Active Today",
      value: "17",
      status: "17 active members from last month",
    },
    {
      title: "New Members",
      value: "2",
      status: "+2 last month",
    },
    {
      title: "Monthly Revenue",
      value: "Php 4,742.07",
      status: "+5.8% from last month",
    },
  ];

  return (
    <section className="w-full py-6">
      <header className="mb-8">
        <h1 className="font-bold text-5xl text-white [font-family:'Cairo-Bold',Helvetica]">
          Dashboard
        </h1>
        <div className="mt-4 text-xl text-white [font-family:'Cairo-Regular',Helvetica]">
          &gt; Management Mode
        </div>
      </header>

      <h2 className="mb-6 text-[32px] text-white [font-family:'Cairo-Medium',Helvetica]">
        Gym Statistics (this month)
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <Card
            key={index}
            className="bg-[#ffffff1a] border-none rounded-xl text-white"
          >
            <CardContent className="p-6">
              <div className="space-y-1">
                <p className="text-sm text-[#999999] [font-family:'Cairo-Regular',Helvetica]">
                  {card.title}
                </p>
                <p className="text-[32px] font-bold text-[#efefef] [font-family:'Cairo-Bold',Helvetica] leading-[48px]">
                  {card.value}
                </p>
              </div>
              <p className="mt-4 text-sm text-[#4caf50] [font-family:'Cairo-Regular',Helvetica]">
                {card.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}