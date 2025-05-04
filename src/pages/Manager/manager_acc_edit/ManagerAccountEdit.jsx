import React from "react";
import { AccountSettingsTitleSection } from "./AccountSettingsTitleSection";
import { NotificationPreferencesSection } from "./NotificationPreferencesSection";
import { PersonalInformationSection } from "./PersonalInformationSection";
import { PrivacySettingsSection } from "./PrivacySettingsSection";
import { SidebarNavigationSection } from "./SidebarNavigationSection";

export default function ManagerAccEdit() {
  return (
    <div className="flex flex-col min-h-screen w-full" data-model-id="165:2618">
      <div className="w-full flex-1">
        <div className="relative flex flex-col min-h-screen bg-[url(/blue-bg.png)] bg-cover">
          {/* Title Section at the top */}
          <AccountSettingsTitleSection />

          {/* Main content area with sidebar and sections */}
          <div className="flex flex-1 w-full">
            {/* Main content sections */}
            <div className="flex-1 flex flex-col bg-white">
              <PersonalInformationSection />
              <NotificationPreferencesSection />
              <PrivacySettingsSection />
            </div>

            {/* Sidebar navigation on the right */}
            <SidebarNavigationSection />
          </div>
        </div>
      </div>
    </div>
  );
}