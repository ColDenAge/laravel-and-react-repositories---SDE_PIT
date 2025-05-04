import React from "react";
import { KickMemberSection } from "./KickMemberSection";
import { MembersListSection } from "./MembersListSection";
import { RecentMembersSection } from "./RecentMembersSection";
import { SidebarSection } from "./SidebarSection";
import { StatsSection } from "./StatsSection";

export default function ManagerMembersKick() {
  return (
    <div
      className="relative w-full min-h-screen bg-white"
      data-model-id="165:2308"
    >
      <div className="relative w-full">
        {/* Background elements */}
        <div className="relative w-full bg-[url(/blue-bg.png)] bg-cover">
          {/* White background for content area */}
          <div className="absolute w-full top-[488px] left-0 bg-white h-[1650px]" />

          {/* Header */}
          <header className="relative z-10 pt-8 px-8">
            <h1 className="text-2xl font-semibold text-white">
              Members Management
            </h1>
            <p className="text-sm text-gray-300">&gt; Management Mode</p>
          </header>

          {/* Main content container */}
          <main className="relative z-10 px-8 pt-4">
            {/* Stats section */}
            <section className="mb-6">
              <h2 className="text-lg font-medium text-white mb-2">
                Members Statistics (this month)
              </h2>
              <StatsSection />
            </section>

            {/* Main content grid */}
            <div className="flex gap-6">
              {/* Left content area */}
              <div className="flex-1 flex flex-col gap-6">
                <RecentMembersSection />
                <KickMemberSection />
                <MembersListSection />
              </div>

              {/* Right sidebar */}
              <div className="w-[280px]">
                <SidebarSection />
              </div>
            </div>
          </main>

          {/* Overlay for darkening effect */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}