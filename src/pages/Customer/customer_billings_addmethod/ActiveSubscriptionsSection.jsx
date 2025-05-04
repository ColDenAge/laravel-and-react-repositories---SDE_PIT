import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

export default function ActiveSubscriptionsSection() {
  // Subscription data that can be mapped over
  const subscriptions = [
    {
      id: 1,
      name: "FitLife Center",
      rating: 4.8,
      type: "Premium Annual",
      validUntil: "2024-12-31",
      features: ["24/7 Access", "All Classes Included", "Personal Trainer"],
    },
    // Other subscriptions would be added here
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-md p-6">
      <h2 className="font-bold text-2xl text-[#0b294b] mb-6 font-['Cairo-Bold',Helvetica]">
        Active Subscriptions
      </h2>

      {/* Subscription cards */}
      <div className="space-y-4">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} className="bg-[#f8f9fa] border-[#e9ecef]">
            <CardContent className="p-6">
              <div className="flex">
                <div className="mr-8">
                  <img
                    src=""
                    alt={`${subscription.name} logo`}
                    className="w-20 h-20 object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                      {subscription.name}
                    </h3>

                    <div className="flex items-center mt-1">
                      <div className="flex items-center mr-2">
                        <Star className="h-4 w-4 fill-[#ffb400] text-[#ffb400]" />
                        <span className="ml-1 text-base font-['Cairo-Regular',Helvetica]">
                          {subscription.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-base text-[#666666] font-['Cairo-Regular',Helvetica] mt-1">
                      {subscription.type}
                    </p>

                    <p className="text-sm text-[#666666] font-['Cairo-Regular',Helvetica] mt-2">
                      Valid until: {subscription.validUntil}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {subscription.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#e9ecef] text-black rounded-2xl px-3 py-1 font-normal font-['Cairo-Regular',Helvetica]"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Empty placeholder cards */}
        <Card className="bg-[#f8f9fa] border-[#e9ecef] h-[178px]">
          <CardContent></CardContent>
        </Card>

        <Card className="bg-[#f8f9fa] border-[#e9ecef] h-[178px]">
          <CardContent></CardContent>
        </Card>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span>Showing 1 of 4 gyms</span>
        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Add New Card button */}
      <div className="flex justify-center mt-4">
        <Button variant="outline" className="bg-white">
          Add New Card
        </Button>
      </div>
    </section>
  );
}