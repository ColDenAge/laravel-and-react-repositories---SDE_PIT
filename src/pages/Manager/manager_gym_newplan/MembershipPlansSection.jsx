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
    <section className="w-full p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-[32px] text-[#0b294b] leading-[48px] font-['Cairo-Bold',Helvetica]">
          Membership Plans
        </h2>

        <Button
          asChild
          className="bg-[#0b294b] text-white rounded-lg h-12 px-4"
        >
          <Link to="/manageru95gymu95newplan">
            <span className="font-bold font-['Cairo-Bold',Helvetica] text-base">
              Add Plan
            </span>
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {membershipPlans.map((plan) => (
          <Card
            key={plan.id}
            className="w-full bg-[#e9ecef] border-none rounded-lg"
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-2xl text-[#0b294b] leading-9 font-['Cairo-Bold',Helvetica]">
                      {plan.name}
                    </h3>
                    <p className="font-normal text-base text-black leading-6 mt-2 font-['Cairo-Regular',Helvetica]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="h-10 w-[58px] bg-[#0b294b] rounded">
                      <span className="font-normal text-base text-white text-center font-['Cairo-Regular',Helvetica]">
                        Edit
                      </span>
                    </Button>

                    <Button
                      variant="ghost"
                      className="h-10 w-[76px] bg-[#ff525220] rounded hover:bg-[#ff525230]"
                    >
                      <span className="font-normal text-base text-[#ff5252] text-center font-['Cairo-Regular',Helvetica]">
                        Delete
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <h4 className="font-bold text-base text-black leading-6 font-['Cairo-Bold',Helvetica]">
                      Price
                    </h4>
                    <p className="font-normal text-base text-black leading-6 font-['Cairo-Regular',Helvetica]">
                      {plan.price}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-black leading-6 font-['Cairo-Bold',Helvetica]">
                      Good for
                    </h4>
                    <p className="font-normal text-base text-black leading-6 font-['Cairo-Regular',Helvetica]">
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