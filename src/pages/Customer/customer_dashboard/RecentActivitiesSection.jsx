import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const RecentActivitiesSection = () => {
  // Activity data for mapping
  const activities = [
    {
      icon: "💪",
      type: "Workout",
      title: "Completed chest workout",
      description: "Finished 4 sets of bench press",
      timeAgo: "2 hours ago",
    },
    {
      icon: "🏃",
      type: "Cardio",
      title: "Morning run completed",
      description: "5km in 28 minutes",
      timeAgo: "5 hours ago",
    },
    {
      icon: "⚖",
      type: "Weight",
      title: "Weight tracked",
      description: "72.5kg - On track with goal",
      timeAgo: "1 day ago",
    },
  ];

  return (
    <section className="w-full max-w-[800px] bg-white rounded-xl shadow-md p-8">
      <h2 className="font-bold text-[32px] text-[#0b294b] leading-[48px] mb-8 [font-family:'Cairo-Bold',Helvetica]">
        Recent Activities
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <Card
            key={index}
            className="bg-[#f8f9fa] border border-solid border-[#e9ecef]"
          >
            <CardContent className="p-6 flex items-start">
              <div className="[font-family:'Cairo-Regular',Helvetica] font-normal text-2xl leading-9 text-black">
                {activity.icon} {activity.type}
              </div>

              <div className="ml-6 flex-1">
                <h3 className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-[#0b294b] text-lg leading-[27px]">
                  {activity.title}
                </h3>
                <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px]">
                  {activity.description}
                </p>
              </div>

              <div className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px]">
                {activity.timeAgo}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6">
        <button className="flex items-center mr-2" aria-label="Previous page">
          <ChevronLeft className="h-2.5 w-2" />
        </button>
        <span className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px]">
          Showing 3 of 8 activities
        </span>
        <button className="flex items-center ml-2" aria-label="Next page">
          <ChevronRight className="h-2.5 w-2" />
        </button>
      </div>
    </section>
  );
};

export default RecentActivitiesSection;