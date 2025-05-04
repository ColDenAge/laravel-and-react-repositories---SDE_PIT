import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, CreditCardIcon } from "lucide-react";
import React from "react";

export const PlanDetailsSection = () => {
  // Data for the plan details
  const currentPlan = {
    name: "Professional Plan",
    price: "Php 399.00/month",
    status: "Active",
  };

  const nextPayment = {
    date: "March 15, 2024",
    type: "Auto-renewal",
    dueIn: "Due in 5 days",
  };

  return (
    <Card className="w-full max-w-[480px] shadow-md">
      <CardContent className="p-8">
        <h2 className="font-semibold text-2xl text-[#0b294b] mb-6 [font-family:'Inter-SemiBold',Helvetica]">
          Membership Plan
        </h2>

        <div className="space-y-6">
          {/* Current Plan Section */}
          <div>
            <p className="text-sm font-medium text-[#666666] mb-3 [font-family:'Inter-Medium',Helvetica]">
              Current Plan
            </p>
            <div className="flex items-center p-4 border rounded-lg">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                <CreditCardIcon className="w-[13px] h-3 text-gray-600" />
              </div>

              <div className="flex-1">
                <p className="text-base font-medium text-[#111111] [font-family:'Inter-Medium',Helvetica]">
                  {currentPlan.name}
                </p>
                <p className="text-sm text-[#666666] [font-family:'Inter-Regular',Helvetica]">
                  {currentPlan.price}
                </p>
              </div>

              <Badge className="bg-gray-100 text-[#0b294b] hover:bg-gray-100 px-3 py-1 rounded-2xl">
                <span className="text-xs font-medium [font-family:'Inter-Medium',Helvetica]">
                  {currentPlan.status}
                </span>
              </Badge>
            </div>
          </div>

          {/* Next Payment Section */}
          <div>
            <p className="text-sm font-medium text-[#666666] mb-3 [font-family:'Inter-Medium',Helvetica]">
              Next Payment
            </p>
            <div className="flex items-center p-4 border rounded-lg">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                <CalendarIcon className="w-[13px] h-[13px] text-gray-600" />
              </div>

              <div className="flex-1">
                <p className="text-base font-medium text-[#111111] [font-family:'Inter-Medium',Helvetica]">
                  {nextPayment.date}
                </p>
                <p className="text-sm text-[#666666] [font-family:'Inter-Regular',Helvetica]">
                  {nextPayment.type}
                </p>
              </div>

              <Badge className="bg-[#fef3f2] text-[#b42318] hover:bg-[#fef3f2] px-3 py-1 rounded-2xl">
                <span className="text-xs font-medium [font-family:'Inter-Medium',Helvetica]">
                  {nextPayment.dueIn}
                </span>
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanDetailsSection;