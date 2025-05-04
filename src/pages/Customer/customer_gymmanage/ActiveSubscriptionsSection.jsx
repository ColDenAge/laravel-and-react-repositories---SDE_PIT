import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

// Sample data for subscriptions
const subscriptions = [
  {
    id: 1,
    name: "FitLife Center",
    plan: "Premium Annual",
    validUntil: "2024-12-31",
    rating: 4.8,
    features: ["24/7 Access", "All Classes Included", "Personal Trainer"],
  },
  // Additional subscriptions would be added here
];

export default function ActiveSubscriptionsSection() {
  return (
    <div className="w-full bg-white rounded-xl shadow-[0px_4px_6px_#0000001a] p-6">
      <h2 className="font-bold text-[#0b294b] text-2xl mb-6">
        Active Subscriptions
      </h2>

      <div className="flex flex-col gap-4">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} className="bg-[#f8f9fa] border-[#e9ecef]">
            <CardContent className="p-6 relative">
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-md">
                    <img
                      src=""
                      alt={`${subscription.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[#0b294b] text-xl">
                        {subscription.name}
                      </h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-[#ffb400] text-[#ffb400]" />
                        <span className="text-base ml-1">
                          {subscription.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#666666] text-base">
                      {subscription.plan}
                    </p>

                    <p className="text-[#666666] text-sm mt-2">
                      Valid until: {subscription.validUntil}
                    </p>

                    <div className="flex gap-2 mt-4">
                      {subscription.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-[#e9ecef] text-black font-normal rounded-2xl px-3 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    variant="destructive"
                    className="bg-[#ff1818] hover:bg-[#e61616] rounded-2xl h-8 px-4"
                  >
                    Leave
                  </Button>

                  <Button className="bg-[#0b294b] hover:bg-[#0a2340] rounded-2xl h-8 px-4 mt-auto">
                    Change plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 text-sm text-[#666666]">
        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span>Showing 3 of 7 gyms</span>
        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}