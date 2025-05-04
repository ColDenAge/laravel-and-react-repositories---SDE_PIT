import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, CrownIcon } from "lucide-react";
import React from "react";

export default function MembershipPlansSection() {
  // Data for membership plan
  const currentPlan = {
    name: "Professional Plan",
    price: "Php 399.00/month",
    status: "Active",
  };

  // Data for next payment
  const nextPayment = {
    date: "March 15, 2024",
    type: "Auto-renewal",
    dueIn: "5 days",
  };

  return (
    <Card className="w-full max-w-[480px] shadow-[0px_4px_6px_#0000001a] rounded-xl">
      <CardContent className="p-8">
        <h2 className="font-semibold text-[#0b294b] text-2xl leading-9 mb-8">
          Membership Plan
        </h2>

        <div className="space-y-6">
          {/* Current Plan Section */}
          <div>
            <p className="font-medium text-[#666666] text-sm leading-[21px] mb-[29px]">
              Current Plan
            </p>

            <div className="flex items-center justify-between p-4 rounded-lg border border-solid">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                  <CrownIcon className="w-4 h-4" />
                </div>

                <div>
                  <p className="font-medium text-[#111111] text-base leading-6">
                    {currentPlan.name}
                  </p>
                  <p className="font-normal text-[#666666] text-sm leading-[21px]">
                    {currentPlan.price}
                  </p>
                </div>
              </div>

              <Badge className="bg-gray-100 text-[#0b294b] hover:bg-gray-100 px-3 py-1 rounded-2xl">
                {currentPlan.status}
              </Badge>
            </div>
          </div>

          {/* Next Payment Section */}
          <div>
            <p className="font-medium text-[#666666] text-sm leading-[21px] mb-[29px]">
              Next Payment
            </p>

            <div className="flex items-center justify-between p-4 rounded-lg border border-solid">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                  <CalendarIcon className="w-4 h-4" />
                </div>

                <div>
                  <p className="font-medium text-[#111111] text-base leading-6">
                    {nextPayment.date}
                  </p>
                  <p className="font-normal text-[#666666] text-sm leading-[21px]">
                    {nextPayment.type}
                  </p>
                </div>
              </div>

              <Badge className="bg-[#fef3f2] text-[#b42318] hover:bg-[#fef3f2] px-3 py-1 rounded-2xl">
                Due in {nextPayment.dueIn}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}