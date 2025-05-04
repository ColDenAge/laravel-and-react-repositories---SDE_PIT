import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function PrivacySettingsSection() {
  // Privacy settings data
  const privacySettings = [
    {
      id: "profile-visibility",
      title: "Profile Visibility",
      description: "Allow others to view your profile",
      enabled: true,
    },
  ];

  return (
    <section className="w-full my-6">
      <Card className="w-full rounded-xl">
        <CardContent className="p-8">
          <h2 className="font-bold text-2xl text-[#0b294b] mb-6 font-['Cairo-Bold',Helvetica]">
            Privacy Settings
          </h2>

          {privacySettings.map((setting) => (
            <div
              key={setting.id}
              className="flex justify-between items-center p-4 bg-[#e9ecef] rounded-lg"
            >
              <div className="space-y-1">
                <h3 className="font-semibold text-lg text-black font-['Cairo-SemiBold',Helvetica]">
                  {setting.title}
                </h3>
                <p className="text-sm text-black font-normal font-['Cairo-Regular',Helvetica]">
                  {setting.description}
                </p>
              </div>
              <Switch
                checked={setting.enabled}
                className="data-[state=checked]:bg-[#4caf50]"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}