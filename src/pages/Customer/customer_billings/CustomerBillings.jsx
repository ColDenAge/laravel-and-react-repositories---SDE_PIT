import React from "react";
import { AccountTitleSection } from "./AccountTitleSection";
import { ActiveSubscriptionsSection } from "./ActiveSubscriptionsSection";
import { MembershipPlanSection } from "./MembershipPlanSection";
import { PaymentHistorySection } from "./PaymentHistorySection";
import { PaymentMethodsSection } from "./PaymentMethodsSection";
import { SidebarSection } from "./SidebarSection";

export default function CustomerBillings() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="33:168"
    >
      <div className="bg-white w-full max-w-[1920px]">
        <div className="relative w-full bg-[url(/blue-bg.png)] bg-[100%_100%]">
          {/* Account Title Section at the top */}
          <AccountTitleSection />

          {/* Main content area with sidebar */}
          <div className="w-full flex flex-row">
            {/* Main content */}
            <div className="flex-1 bg-white">
              {/* Active Subscriptions Section */}
              <ActiveSubscriptionsSection />

              {/* Payment History and Membership Plan side by side */}
              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <PaymentHistorySection />
                </div>
                <div className="w-1/3">
                  <MembershipPlanSection />
                </div>
              </div>

              {/* Payment Methods Section */}
              <PaymentMethodsSection />
            </div>

            {/* Sidebar on the right */}
            <div className="w-[280px]">
              <SidebarSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}