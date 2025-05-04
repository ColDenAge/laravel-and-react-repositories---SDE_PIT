import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function PrivacySettingsSection() {
  // Privacy settings data that can be mapped over
  const privacySettings = [
    {
      id: "profile-visibility",
      title: "Profile Visibility",
      description: "Allow others to view your profile",
      enabled: true,
    },
  ];

  return (
    <Card className="w-full rounded-xl">
      <div className="p-8">
        <h2 className="font-bold text-2xl text-[#0b294b] mb-6 font-['Cairo-Bold',Helvetica]">
          Privacy Settings
        </h2>

        {privacySettings.map((setting) => (
          <div
            key={setting.id}
            className="flex justify-between items-center bg-[#e9ecef] p-4 rounded-lg"
          >
            <div className="flex flex-col">
              <h3 className="font-['Cairo-SemiBold',Helvetica] font-semibold text-lg text-black">
                {setting.title}
              </h3>
              <p className="font-['Cairo-Regular',Helvetica] font-normal text-sm text-black">
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
    </Card>
  );
}