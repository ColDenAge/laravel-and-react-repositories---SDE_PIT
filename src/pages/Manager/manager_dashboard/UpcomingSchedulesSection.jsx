import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function UpcomingSchedulesSection() {
  // Data for upcoming schedules
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
    <Card className="w-full max-w-[426px] shadow-[0px_4px_6px_#0000001a] rounded-[25px]">
      <CardHeader className="pb-0">
        <CardTitle className="text-5xl font-bold text-[#0b294b] [font-family:'Cairo-Bold',Helvetica] leading-[72px]">
          Upcoming Schedules
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {schedules.map((schedule, index) => (
          <div key={schedule.id} className="mb-6">
            <div className="relative pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-black [font-family:'Cairo-Bold',Helvetica] leading-[30px]">
                    {schedule.title}
                  </h3>
                  <p className="text-xl text-[#666666] [font-family:'Cairo-Regular',Helvetica] leading-[30px]">
                    {schedule.subtitle}
                  </p>
                  <p className="text-xl text-[#666666] [font-family:'Cairo-Regular',Helvetica] leading-[30px] mt-2">
                    {schedule.datetime}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-xl text-[#666666] [font-family:'Cairo-Regular',Helvetica] leading-[30px] p-0 h-auto"
                >
                  Dismiss
                </Button>
              </div>
              <Separator className="mt-4 bg-[#d9d9d9]" />
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-[#666666] [font-family:'Cairo-Regular',Helvetica]">
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>Showing 3 of 7 schedules</span>
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}