import React from "react";
import { AccountSettingsTitleSection } from "./AccountSettingsTitleSection";
import { NotificationPreferencesSection } from "./NotificationPreferencesSection";
import { PersonalInformationSection } from "./PersonalInformationSection";
import { PrivacySettingsSection } from "./PrivacySettingsSection";
import { SidebarSection } from "./SidebarSection";

export default function CustomerAccEdit() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="139:1187"
    >
      <div className="bg-white w-full">
        <div className="relative bg-[url(/blue-bg.png)] bg-[100%_100%]">
          {/* Account Settings Title Section at the top */}
          <AccountSettingsTitleSection />

          <div className="flex mt-14">
            {/* Main content area */}
            <div className="flex-1">
              {/* Avatar image */}
              <div className="flex justify-center mb-8">
                <img className="w-[206px] h-[206px]" alt="Avatar" src="" />
              </div>

              {/* Content sections stacked vertically */}
              <div className="flex flex-col gap-8 px-8">
                <PersonalInformationSection />
                <NotificationPreferencesSection />
                <PrivacySettingsSection />
              </div>
            </div>

            {/* Sidebar on the right */}
            <div className="w-[300px]">
              <SidebarSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}