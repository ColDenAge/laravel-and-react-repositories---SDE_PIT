import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ChangePlansSection = () => {
  // Plan data for mapping
  const plans = [
    {
      name: "Basic",
      price: "Php 399.99",
      billingCycle: "Billed monthly",
      variant: "yellow",
    },
    {
      name: "Premium",
      price: "Php 999.00",
      billingCycle: "Billed monthly",
      variant: "blue",
    },
    {
      name: "Annual",
      price: "Php 3,999.00",
      billingCycle: "Billed yearly",
      variant: "blue",
    },
  ];

  return (
    <Card className="w-full max-w-[600px] p-7 rounded-xl">
      <div className="mb-7">
        <h2 className="font-bold text-2xl text-[#0b294b] leading-9 [font-family:'Cairo-Bold',Helvetica]">
          FitLife Center Plans
        </h2>
      </div>

      <CardContent className="p-0 space-y-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex justify-between items-start p-6 rounded-lg border border-solid ${
              plan.variant === "yellow"
                ? "bg-[#ffb400] border-[#e9ecef]"
                : "bg-[#0b294b] border-[#e9ecef]"
            }`}
          >
            <div>
              <div className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-white text-xl leading-[30px]">
                {plan.name}
              </div>
              <div className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#e9ecef] text-sm leading-[21px] mt-2">
                {plan.billingCycle}
              </div>
            </div>
            <div className="[font-family:'Cairo-Bold',Helvetica] font-bold text-white text-2xl text-right leading-9">
              {plan.price}
            </div>
          </div>
        ))}

        <Button className="w-full h-12 mt-4 bg-[#0b294b] hover:bg-[#0b294b]/90 rounded-lg transition-all duration-[0.2s] ease-[ease] [font-family:'Cairo-SemiBold',Helvetica]">
          Change
        </Button>

        <Button className="w-full h-12 bg-[#0b294b] hover:bg-[#0b294b]/90 rounded-lg transition-all duration-[0.2s] ease-[ease] [font-family:'Cairo-SemiBold',Helvetica]">
          Close
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChangePlansSection;