import React from "react";
import { AccountSettingsTitleSection } from "./AccountSettingsTitleSection";
import { NotificationPreferencesSection } from "./NotificationPreferencesSection";
import { PersonalInformationSection } from "./PersonalInformationSection";
import { PrivacySettingsSection } from "./PrivacySettingsSection";
import { SidebarSection } from "./SidebarSection";

export default function CustomerAcc() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="39:1525"
    >
      <div className="w-full">
        <div className="relative bg-[url(/blue-bg.png)] bg-[100%_100%]">
          {/* Account Settings Title Section */}
          <AccountSettingsTitleSection />

          <div className="flex flex-row w-full mt-14">
            {/* Main Content Area */}
            <div className="flex-1 bg-white">
              {/* User Avatar */}
              <div className="flex justify-center mt-36 mb-8">
                <img
                  className="w-[206px] h-[206px] rounded-full"
                  alt="Avatar"
                  src=""
                />
              </div>

              {/* Content Sections */}
              <div className="max-w-4xl mx-auto px-4">
                <PersonalInformationSection />
                <NotificationPreferencesSection />
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