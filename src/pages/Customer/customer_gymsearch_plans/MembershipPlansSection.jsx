import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function MembershipPlansSection() {
  // Plan data for mapping
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "Php 399.99",
      billingCycle: "Billed monthly",
      bgColor: "bg-[#ffb400]",
      textColor: "text-white",
      borderColor: "border-[#e9ecef]",
    },
    {
      id: 2,
      name: "Premium",
      price: "Php 999.99",
      billingCycle: "Billed monthly",
      bgColor: "bg-[#0b294b]",
      textColor: "text-white",
      borderColor: "border-[#e9ecef]",
    },
    {
      id: 3,
      name: "Annual",
      price: "Php 3,999.00",
      billingCycle: "Billed yearly",
      bgColor: "bg-[#0b294b]",
      textColor: "text-white",
      borderColor: "border-white",
    },
  ];

  return (
    <Card className="w-full max-w-[600px] p-0 rounded-xl">
      <CardHeader className="px-8 pt-7 pb-4">
        <CardTitle className="font-bold text-2xl text-[#0b294b] [font-family:'Cairo-Bold',Helvetica] leading-9">
          FitLife Center Plans
        </CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-8 space-y-4">
        {/* Membership plans */}
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${plan.bgColor} ${plan.textColor} rounded-lg border border-solid ${plan.borderColor} h-[115px] relative`}
            >
              <div className="absolute top-[22px] left-6 [font-family:'Cairo-SemiBold',Helvetica] font-semibold text-xl leading-[30px]">
                {plan.name}
              </div>
              <div className="absolute top-16 left-6 [font-family:'Cairo-Regular',Helvetica] font-normal text-[#e9ecef] text-sm leading-[21px]">
                {plan.billingCycle}
              </div>
              <div className="absolute top-[19px] right-6 [font-family:'Cairo-Bold',Helvetica] font-bold text-2xl text-right leading-9">
                {plan.price}
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <Button className="w-full h-12 bg-[#0b294b] hover:bg-[#0b294b]/90 rounded-lg [font-family:'Cairo-SemiBold',Helvetica] font-semibold text-base">
          Join
        </Button>
        <Button className="w-full h-12 bg-[#0b294b] hover:bg-[#0b294b]/90 rounded-lg [font-family:'Cairo-SemiBold',Helvetica] font-semibold text-base">
          Close
        </Button>
      </CardContent>
    </Card>
  );
}