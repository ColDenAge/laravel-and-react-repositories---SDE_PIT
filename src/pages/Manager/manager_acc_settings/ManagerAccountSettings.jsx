import React from "react";
import { AccountSettingsTitleSection } from "./AccountSettingsTitleSection";
import { NotificationPreferencesSection } from "./NotificationPreferencesSection";
import { PersonalInformationSection } from "./PersonalInformationSection";
import { PrivacySettingsSection } from "./PrivacySettingsSection";
import { SidebarSection } from "./SidebarSection";

export default function ManagerAccSettings() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="57:1727"
    >
      <div className="bg-white w-full">
        <div className="relative bg-[url(/blue-bg.png)] bg-[100%_100%]">
          {/* Account Settings Title Section */}
          <AccountSettingsTitleSection />

          {/* Main Content Area */}
          <div className="flex w-full">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white">
                {/* Personal Information Section */}
                <PersonalInformationSection />

                {/* Notification Preferences Section */}
                <NotificationPreferencesSection />

                {/* Privacy Settings Section */}
                <PrivacySettingsSection />
              </div>
            </div>

            {/* Sidebar */}
            <SidebarSection />
          </div>
        </div>
      </div>
    </div>
  );
}