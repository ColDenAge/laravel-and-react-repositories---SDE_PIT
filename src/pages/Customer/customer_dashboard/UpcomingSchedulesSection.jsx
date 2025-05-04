import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function UpcomingSchedulesSection() {
  // Data for schedule items
  const schedules = [
    {
      id: 1,
      title: "Personal Training",
      subtitle: "With trainer Mike",
      datetime: "Tomorrow, 9:00 AM",
    },
    {
      id: 2,
      title: "Yoga Class",
      subtitle: "Beginner Level",
      datetime: "Jan 18, 11:00 AM",
    },
    {
      id: 3,
      title: "Boxing",
      subtitle: "Advanced Session",
      datetime: "Jan 20, 3:00 PM",
    },
  ];

  return (
    <Card className="w-full max-w-[426px] rounded-[25px] shadow-[0px_4px_6px_#0000001a] p-8">
      <h2 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-5xl leading-[72px] mb-8">
        Upcoming Schedules
      </h2>

      <CardContent className="p-0">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="py-5 border-b-[0.8px] border-[#d9d9d9] relative"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-xl leading-[30px] text-black">
                  {schedule.title}
                </h3>
                <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl leading-[30px]">
                  {schedule.subtitle}
                </p>
                <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl leading-[30px] mt-2">
                  {schedule.datetime}
                </p>
              </div>
              <Button
                variant="ghost"
                className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl h-[30px] p-0"
              >
                Dismiss
              </Button>
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center mt-8 gap-2">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronLeft className="h-4 w-4 text-[#666666]" />
          </Button>
          <span className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px]">
            Showing 3 of 7 schedules
          </span>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronRight className="h-4 w-4 text-[#666666]" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}