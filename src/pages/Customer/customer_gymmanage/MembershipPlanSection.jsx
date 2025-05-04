import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CreditCard } from "lucide-react";
import React from "react";

export default function MembershipPlanSection() {
  const membershipData = {
    currentPlan: {
      name: "Professional Plan",
      price: "Php 399.00/month",
      status: "Active",
    },
    nextPayment: {
      date: "March 15, 2024",
      type: "Auto-renewal",
      dueIn: "5 days",
    },
  };

  return (
    <Card className="w-full max-w-[480px] shadow-md">
      <CardContent className="p-8">
        <h2 className="font-semibold text-2xl text-[#0b294b] leading-9 mb-8">
          Membership Plan
        </h2>

        <div className="space-y-6">
          {/* Current Plan Section */}
          <div>
            <p className="font-medium text-sm text-[#666666] mb-3">
              Current Plan
            </p>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-base text-[#111111]">
                    {membershipData.currentPlan.name}
                  </p>
                  <p className="font-normal text-sm text-[#666666]">
                    {membershipData.currentPlan.price}
                  </p>
                </div>
              </div>
              <Badge className="bg-gray-100 text-[#0b294b] hover:bg-gray-100 px-3 py-1 rounded-2xl">
                {membershipData.currentPlan.status}
              </Badge>
            </div>
          </div>

          {/* Next Payment Section */}
          <div>
            <p className="font-medium text-sm text-[#666666] mb-3">
              Next Payment
            </p>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-base text-[#111111]">
                    {membershipData.nextPayment.date}
                  </p>
                  <p className="font-normal text-sm text-[#666666]">
                    {membershipData.nextPayment.type}
                  </p>
                </div>
              </div>
              <Badge className="bg-[#fef3f2] text-[#b42318] hover:bg-[#fef3f2] px-3 py-1 rounded-2xl">
                Due in {membershipData.nextPayment.dueIn}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}