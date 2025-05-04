import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function PrivacySettingsSection() {
  // Privacy settings data for mapping
  const privacySettings = [
    {
      id: "profile-visibility",
      title: "Profile Visibility",
      description: "Allow others to view your profile",
      enabled: true,
    },
    {
      id: "progress-sharing",
      title: "Progress Sharing",
      description: "Share your fitness progress with others",
      enabled: true,
    },
    {
      id: "workout-history",
      title: "Workout History",
      description: "Make your workout history public",
      enabled: false,
    },
  ];

  return (
    <Card className="w-full rounded-xl">
      <CardContent className="p-8">
        <h2 className="font-bold text-2xl text-[#0b294b] mb-6 [font-family:'Cairo-Bold',Helvetica]">
          Privacy Settings
        </h2>

        <div className="flex flex-col gap-4">
          {privacySettings.map((setting) => (
            <div
              key={setting.id}
              className="flex justify-between items-center bg-[#e9ecef] p-4 rounded-lg h-20"
            >
              <div className="flex flex-col">
                <h3 className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-black text-lg leading-[27px]">
                  {setting.title}
                </h3>
                <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-sm leading-[21px]">
                  {setting.description}
                </p>
              </div>
              <Switch
                checked={setting.enabled}
                className="data-[state=checked]:bg-[#4caf50]"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}