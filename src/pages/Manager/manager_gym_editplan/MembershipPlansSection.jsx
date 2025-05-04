import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

export default function MembershipPlansSection() {
  // Plan data for mapping
  const membershipPlans = [
    {
      id: 1,
      name: "Basic Plan",
      description: "Basic plan, allows access to equipment but not classes",
      price: "Php 399.00",
      duration: "1 week",
    },
    {
      id: 2,
      name: "Premium Plan",
      description: "Premium plan, allows access to both equipment and classes",
      price: "Php 999.00",
      duration: "1 week",
    },
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-[#0b294b] text-[32px] leading-[48px] font-['Cairo-Bold',Helvetica]">
          Membership Plans
        </h2>
        <Button className="bg-[#0b294b] text-white font-bold font-['Cairo-Bold',Helvetica] h-12 px-4">
          Add Plan
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {membershipPlans.map((plan) => (
          <Card key={plan.id} className="bg-[#e9ecef] border-none rounded-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[#0b294b] text-2xl leading-9 font-['Cairo-Bold',Helvetica] mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica] mb-8">
                    {plan.description}
                  </p>

                  <div className="flex gap-x-[679px]">
                    <div>
                      <h4 className="font-bold text-black text-base leading-6 font-['Cairo-Bold',Helvetica]">
                        Price
                      </h4>
                      <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica]">
                        {plan.price}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black text-base leading-6 font-['Cairo-Bold',Helvetica]">
                        Good for
                      </h4>
                      <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica]">
                        {plan.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    className="h-10 w-[58px] bg-[#0b294b] rounded"
                  >
                    <Link to="/manageru95gymu95editplan">
                      <span className="font-normal text-white text-base text-center font-['Cairo-Regular',Helvetica]">
                        Edit
                      </span>
                    </Link>
                  </Button>

                  <Button
                    variant="ghost"
                    className="h-10 w-[76px] bg-[#ff525220] rounded text-[#ff5252] hover:bg-[#ff525230] hover:text-[#ff5252]"
                  >
                    <span className="font-normal text-[#ff5252] text-base text-center font-['Cairo-Regular',Helvetica]">
                      Delete
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}