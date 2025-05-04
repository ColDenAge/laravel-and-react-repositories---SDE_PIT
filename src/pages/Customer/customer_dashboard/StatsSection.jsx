import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const StatsSection = () => {
  // Data for stat cards to enable mapping
  const statCards = [
    {
      icon: "💪",
      title: "Workouts",
      value: "5 sessions",
      description: "This month",
    },
    {
      icon: "🔥",
      title: "Calories",
      value: "4500 kcal",
      description: "Burned this month",
    },
    {
      icon: "⏱",
      title: "Hours",
      value: "18 hrs",
      description: "Time spent",
    },
    {
      icon: "📊",
      title: "Attendance",
      value: "85%",
      description: "Goal completion",
    },
    {
      icon: "⏱",
      title: "Ave. time",
      value: "1.04 hrs",
      description: "Average time",
    },
    {
      icon: "⏱",
      title: "Days active",
      value: "71 days",
      description: "Days active",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {statCards.map((card, index) => (
        <Card key={index} className="bg-[#d9d9d9] rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="text-3xl">{card.icon}</div>
              <div className="ml-4 text-xl text-[#666666] font-normal font-['Cairo-Regular',Helvetica]">
                {card.title}
              </div>
            </div>
            <div className="mt-4 text-3xl text-black font-normal font-['Cairo-Regular',Helvetica]">
              {card.value}
            </div>
            <div className="mt-6 text-base text-[#666666] font-normal font-['Cairo-Regular',Helvetica]">
              {card.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsSection;