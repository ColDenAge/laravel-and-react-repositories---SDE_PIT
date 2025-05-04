import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function MembershipPlansSection() {
  // Data for membership plans
  const membershipPlans = [
    {
      id: 1,
      title: "Basic Plan",
      description: "Basic plan, allows access to equipment but not classes",
      price: "Php 399.00",
      duration: "1 week",
    },
    {
      id: 2,
      title: "Premium Plan",
      description: "Premium plan, allows access to both equipment and classes",
      price: "Php 999.00",
      duration: "1 week",
    },
  ];

  return (
    <section className="w-full p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-[32px] text-[#0b294b] leading-[48px] font-['Cairo-Bold',Helvetica]">
          Membership Plans
        </h2>
        <Button className="bg-[#0b294b] text-white font-bold font-['Cairo-Bold',Helvetica]">
          <span className="mr-2">Add Plan</span>
        </Button>
      </div>

      <div className="space-y-4">
        {membershipPlans.map((plan) => (
          <Card key={plan.id} className="bg-[#e9ecef] border-0">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-9">
                      {plan.title}
                    </h3>
                    <p className="font-normal text-base text-black font-['Cairo-Regular',Helvetica] leading-6 mt-2">
                      {plan.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="h-10 w-[58px] bg-[#0b294b] text-white font-['Cairo-Regular',Helvetica]">
                      Edit
                    </Button>
                    <Button className="h-10 w-[76px] bg-[#ff525220] text-[#ff5252] hover:bg-[#ff525230] font-['Cairo-Regular',Helvetica]">
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <h4 className="font-bold text-base text-black font-['Cairo-Bold',Helvetica] leading-6">
                      Price
                    </h4>
                    <p className="font-normal text-base text-black font-['Cairo-Regular',Helvetica] leading-6">
                      {plan.price}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-black font-['Cairo-Bold',Helvetica] leading-6">
                      Good for
                    </h4>
                    <p className="font-normal text-base text-black font-['Cairo-Regular',Helvetica] leading-6">
                      {plan.duration}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}