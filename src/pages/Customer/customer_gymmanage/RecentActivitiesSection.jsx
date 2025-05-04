import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function RecentActivitiesSection() {
  // Activity data for mapping
  const activities = [
    {
      id: 1,
      title: "Gym Visit",
      location: "FitLife Center",
      details: "Duration: 1h 45m",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Class",
      location: "FitLife Center",
      details: "Yoga Basics with Sarah",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Personal Training",
      location: "FitLife Center",
      details: "Session with Mike",
      date: "2024-01-12",
    },
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-[0px_4px_6px_#0000001a] p-6">
      <h2 className="font-bold text-[#0b294b] text-2xl leading-9 mb-6 font-['Cairo-Bold',Helvetica]">
        Recent Activities
      </h2>

      <div className="flex flex-col gap-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="bg-[#f8f9fa] border-[#e9ecef]">
            <CardContent className="p-4 relative">
              <div className="font-['Cairo-SemiBold',Helvetica] font-semibold text-[#0b294b] text-lg leading-[27px]">
                {activity.title}
              </div>
              <div className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px] mt-1">
                {activity.location}
              </div>
              <div className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px] mt-1">
                {activity.details}
              </div>
              <div className="absolute top-3 right-4 font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px]">
                {activity.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4 gap-2">
        <ChevronLeft className="w-4 h-4 text-[#666666]" />
        <span className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px]">
          Showing 3 of 7 activities
        </span>
        <ChevronRight className="w-4 h-4 text-[#666666]" />
      </div>
    </section>
  );
}