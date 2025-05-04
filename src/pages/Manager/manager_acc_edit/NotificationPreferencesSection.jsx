import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function NotificationPreferencesSection() {
  // Data for notification preferences to enable mapping
  const notificationPreferences = [
    {
      id: "member-notifications",
      title: "Member Notifications",
      description: "Get notified about your members",
      enabled: true,
    },
    {
      id: "class-schedules",
      title: "Class Schedules",
      description: "Receive updates about class schedules",
      enabled: true,
    },
    {
      id: "payment-alerts",
      title: "Payment Alerts",
      description: "Get notified about payments and billing",
      enabled: true,
    },
  ];

  return (
    <Card className="w-full rounded-xl">
      <div className="p-8">
        <h2 className="font-bold text-2xl text-[#0b294b] mb-6 [font-family:'Cairo-Bold',Helvetica]">
          Notification Preferences
        </h2>

        <CardContent className="p-0 space-y-4">
          {notificationPreferences.map((preference) => (
            <div
              key={preference.id}
              className="flex justify-between items-center bg-[#e9ecef] rounded-lg p-4 h-20"
            >
              <div className="flex flex-col">
                <h3 className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-black text-lg leading-[27px]">
                  {preference.title}
                </h3>
                <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-sm leading-[21px]">
                  {preference.description}
                </p>
              </div>
              <Switch
                id={preference.id}
                defaultChecked={preference.enabled}
                className="data-[state=checked]:bg-[#4caf50]"
              />
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}