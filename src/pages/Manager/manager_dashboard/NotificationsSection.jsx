import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function NotificationsSection() {
  // Notification data for mapping
  const notifications = [
    {
      id: 1,
      type: "New Member",
      message: "John Paul Jones requests to enter basic plan",
      timestamp: "Today, 2:30 PM",
    },
    {
      id: 2,
      type: "Payment Due",
      message: "Billing of Karl Marx membership is due 1/24/2025",
      timestamp: "Yesterday, 4:15 PM",
    },
    {
      id: 3,
      type: "New Member",
      message: "David Stark requests to enter basic plan",
      timestamp: "Jan 15, 10:00 AM",
    },
  ];

  return (
    <Card className="w-full max-w-[426px] shadow-md rounded-[25px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-[72px]">
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 px-8">
        {notifications.map((notification, index) => (
          <div key={notification.id} className="py-4">
            <div className="relative">
              <div className="flex justify-between items-start">
                <h3 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-xl leading-[30px]">
                  {notification.type}
                </h3>
                <Button
                  variant="ghost"
                  className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl p-0 h-auto"
                >
                  Dismiss
                </Button>
              </div>
              <p className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl leading-[30px] mt-0 max-w-[280px]">
                {notification.message}
              </p>
              <p className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl leading-[30px] mt-8">
                {notification.timestamp}
              </p>
              {index < notifications.length - 1 && (
                <Separator className="mt-4 bg-[#d9d9d9]" />
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center mt-6 mb-4 gap-2">
          <Button variant="ghost" size="icon" className="p-0 h-auto">
            <ChevronLeft className="h-[18px] w-[18px] text-[#666666]" />
          </Button>
          <span className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm leading-[21px]">
            Showing 3 of 9 notifications
          </span>
          <Button variant="ghost" size="icon" className="p-0 h-auto">
            <ChevronRight className="h-[18px] w-[18px] text-[#666666]" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}