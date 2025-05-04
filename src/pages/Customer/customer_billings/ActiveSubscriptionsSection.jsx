import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

export default function ActiveSubscriptionsSection() {
  // Subscription data for mapping
  const subscriptions = [
    {
      id: 1,
      name: "FitLife Center",
      rating: 4.8,
      type: "Premium Annual",
      validUntil: "2024-12-31",
      features: ["24/7 Access", "All Classes Included", "Personal Trainer"],
      active: true,
    },
    { id: 2, active: false },
    { id: 3, active: false },
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-md p-6">
      <h2 className="font-bold text-2xl text-[#0b294b] mb-6 font-['Cairo-Bold',Helvetica]">
        Active Subscriptions
      </h2>

      <div className="space-y-4">
        {subscriptions.map((subscription) => (
          <Card
            key={subscription.id}
            className={`w-full border border-[#e9ecef] ${subscription.active ? "bg-[#f8f9fa]" : "bg-[#f8f9fa]"}`}
          >
            {subscription.active ? (
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-20 h-20 mr-8">
                    <img
                      src=""
                      alt="Gym logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <div className="flex items-center">
                        <h3 className="text-xl font-semibold text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                          {subscription.name}
                        </h3>
                        <div className="flex items-center ml-8">
                          <Star className="h-5 w-5 text-[#ffb400] fill-[#ffb400]" />
                          <span className="ml-1 text-base font-normal">
                            {subscription.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-base text-[#666666] font-['Cairo-Regular',Helvetica] mt-2">
                        {subscription.type}
                      </p>

                      <p className="text-sm text-[#666666] font-['Cairo-Regular',Helvetica] mt-3">
                        Valid until: {subscription.validUntil}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {subscription.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-[#e9ecef] text-black rounded-2xl px-3 py-1 font-normal text-sm font-['Cairo-Regular',Helvetica]"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            ) : (
              <CardContent className="h-[178px]"></CardContent>
            )}
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
        <button className="mr-2">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span>Showing 1 of 4 gyms</span>
        <button className="ml-2">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}