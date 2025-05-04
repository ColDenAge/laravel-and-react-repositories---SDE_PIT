import React from "react";
import { ActiveSubscriptionsSection } from "./ActiveSubscriptionsSection";
import { AddPaymentMethodSection } from "./AddPaymentMethodSection";
import { PageTitleSection } from "./PageTitleSection";
import { PaymentHistorySection } from "./PaymentHistorySection";
import { PaymentMethodsSection } from "./PaymentMethodsSection";
import { PlanDetailsSection } from "./PlanDetailsSection";
import { SidebarSection } from "./SidebarSection";

export default function CustomerBillings() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="137:924"
    >
      <div className="bg-white w-full">
        <div className="relative bg-[url(/blue-bg.png)] bg-[100%_100%]">
          {/* Background overlay */}
          <div className="absolute w-full h-full top-0 left-0 bg-white mt-[345px]" />

          {/* Main layout container */}
          <div className="relative flex">
            {/* Sidebar */}
            <div className="sticky top-0 h-screen">
              <SidebarSection />
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Page title */}
              <PageTitleSection />

              {/* Content sections */}
              <div className="px-6 space-y-6">
                {/* Active Subscriptions */}
                <section>
                  <ActiveSubscriptionsSection />
                </section>

                {/* Payment History and Plan Details (side by side) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <PaymentHistorySection />
                  </div>
                  <div className="md:col-span-1">
                    <PlanDetailsSection />
                  </div>
                </div>

                {/* Add Payment Method */}
                <section>
                  <AddPaymentMethodSection />
                </section>

                {/* Payment Methods */}
                <section>
                  <PaymentMethodsSection />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}