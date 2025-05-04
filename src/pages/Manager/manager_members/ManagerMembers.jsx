import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
  } from "@/components/ui/breadcrumb";
  import React from "react";
  import { MembersListSection } from "./MembersListSection";
  import { RecentMembersSection } from "./RecentMembersSection";
  import { SidebarSection } from "./SidebarSection";
  import { StatisticsSection } from "./StatisticsSection";

  export default function ManagerMembers() {
    return (
      <div
        className="bg-white flex flex-col w-full min-h-screen"
        data-model-id="57:1842"
      >
        <header className="w-full bg-[url(/blue-bg.png)] bg-cover pt-4 px-4">
          <div className="container mx-auto">
            <h1 className="text-white text-2xl font-bold mb-1">
              Members Management
            </h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="text-white/70">
                    Management Mode
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-white mt-4 mb-2">
              Members Statistics (this month)
            </h2>
          </div>

          {/* Statistics section at the top */}
          <div className="container mx-auto">
            <StatisticsSection />
          </div>
        </header>

        <main className="flex-1 bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main content area */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Recent members section */}
                <section>
                  <RecentMembersSection />
                </section>

                {/* Members list section */}
                <section>
                  <MembersListSection />
                </section>
              </div>

              {/* Sidebar on the right */}
              <aside className="w-full lg:w-64">
                <SidebarSection />
              </aside>
            </div>
          </div>
        </main>
      </div>
    );
  }