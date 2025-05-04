import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

// Data for notifications to enable mapping
const notifications = [
  {
    id: 1,
    title: "Gym Session",
    description: "Your trainer John scheduled a session",
    time: "Today, 2:30 PM",
  },
  {
    id: 2,
    title: "Payment Due",
    description: "Monthly membership payment is due",
    time: "Yesterday, 4:15 PM",
  },
  {
    id: 3,
    title: "Class Booking",
    description: "You're registered for yoga class",
    time: "Jan 15, 10:00 AM",
  },
];

export default function NotificationsSection() {
  return (
    <Card className="w-full max-w-[426px] rounded-[25px] shadow-[0px_4px_6px_#0000001a] p-8">
      <h2 className="font-bold text-5xl text-[#0b294b] leading-[72px] mb-6">
        Notifications
      </h2>

      <div className="space-y-5">
        {notifications.map((notification, index) => (
          <div key={notification.id} className="relative">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl leading-[30px] text-black">
                {notification.title}
              </h3>
              <Button
                variant="ghost"
                className="font-normal text-xl text-[#666666] p-0 h-auto"
              >
                Dismiss
              </Button>
            </div>

            <p className="font-normal text-xl leading-[30px] text-[#666666] mt-0">
              {notification.description}
            </p>

            <p className="font-normal text-xl leading-[30px] text-[#666666] mt-[38px]">
              {notification.time}
            </p>

            {index < notifications.length - 1 && (
              <Separator className="mt-5 h-[0.8px] bg-[#d9d9d9]" />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 text-sm text-[#666666]">
        <Button variant="ghost" className="p-0 h-5 mr-1">
          <ChevronLeft className="h-2.5 w-2" />
        </Button>
        <span className="font-normal leading-[21px]">
          Showing 3 of 9 notifications
        </span>
        <Button variant="ghost" className="p-0 h-5 ml-1">
          <ChevronRight className="h-2.5 w-2" />
        </Button>
      </div>
    </Card>
  );
}