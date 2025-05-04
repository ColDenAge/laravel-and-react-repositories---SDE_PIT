import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const ActiveSubscriptionsSection = () => {
  // Data for subscriptions to enable mapping
  const subscriptions = [
    {
      id: 1,
      name: "FitLife Center",
      rating: 4.8,
      plan: "Premium Annual",
      validUntil: "2024-12-31",
      features: ["24/7 Access", "All Classes Included", "Personal Trainer"],
      image: "", // Placeholder for image
    },
    // Additional subscriptions would be added here
  ];

  // Plans data for the dialog
  const plans = [
    {
      name: "Basic",
      price: "Php 399.99",
      period: "per month",
      color: "bg-amber-400",
    },
    {
      name: "Premium",
      price: "Php 999.00",
      period: "",
      color: "bg-blue-950 text-white",
    },
  ];

  return (
    <Card className="w-full max-w-[1208px] mx-auto shadow-md">
      <CardContent className="p-6">
        <h2 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-4">
          Active Subscriptions
        </h2>

        {subscriptions.map((subscription) => (
          <Card
            key={subscription.id}
            className="mb-4 bg-[#f8f9fa] border border-[#e9ecef]"
          >
            <CardContent className="p-5 relative">
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <img
                    className="w-20 h-20 object-cover"
                    alt={`${subscription.name} logo`}
                    src={subscription.image}
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                        {subscription.name}
                      </h3>
                      <div className="ml-4 flex items-center">
                        <Star className="h-5 w-5 text-[#ffb400] fill-[#ffb400]" />
                        <span className="ml-1 text-base font-normal">
                          {subscription.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-[#666666] font-normal font-['Cairo-Regular',Helvetica]">
                      {subscription.plan}
                    </p>
                    <p className="text-sm text-[#666666] font-normal font-['Cairo-Regular',Helvetica] mt-2">
                      Valid until: {subscription.validUntil}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="destructive"
                    className="bg-[#ff1818] hover:bg-[#e01515] rounded-2xl h-8 px-4 font-normal font-['Cairo-Regular',Helvetica]"
                  >
                    Leave
                  </Button>
                  <Link to="/customeru95gymmanageu95changeplan">
                    <Button className="bg-[#ffb400] hover:bg-[#e6a200] rounded-2xl h-8 px-4 font-normal font-['Cairo-Regular',Helvetica]">
                      Change plan
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                {subscription.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-[#e9ecef] text-black rounded-2xl px-3 py-1 font-normal font-['Cairo-Regular',Helvetica]"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Two more subscription cards would be rendered here */}
        <Card className="mb-4 bg-[#f8f9fa] border border-[#e9ecef]">
          <CardContent className="p-5"></CardContent>
        </Card>

        <Card className="mb-4 bg-[#f8f9fa] border border-[#e9ecef]">
          <CardContent className="p-5"></CardContent>
        </Card>

        <div className="flex justify-center items-center mt-4 text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
          <ChevronLeft className="h-4 w-4 mr-2" />
          <span>Showing 3 of 7 gyms</span>
          <ChevronRight className="h-4 w-4 ml-2" />
        </div>
      </CardContent>

      {/* Dialog for plan selection */}
      <Dialog>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              FitLife Center Plans
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            {plans.map((plan, index) => (
              <div key={index} className={`${plan.color} p-4 rounded-md`}>
                <div className="font-semibold">{plan.name}</div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">{plan.period}</div>
                  <div className="font-bold">{plan.price}</div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ActiveSubscriptionsSection;