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

export default function GymSearchSection() {
  // Data for gym cards to enable mapping
  const gyms = [
    {
      id: 1,
      name: "FitLife Center",
      location: "Downtown",
      rating: 4.8,
      image: "/IMAGE.png",
      features: ["Pool", "Sauna", "CrossFit"],
      primaryButton: { color: "#ffb400", text: "View Plans" },
    },
    {
      id: 2,
      name: "PowerHouse Gym",
      location: "Westside",
      rating: 4.6,
      image: "/image.png",
      features: ["Boxing Ring", "Cardio Cinema", "Juice Bar"],
      primaryButton: { color: "#0b294b", text: "View Plans" },
    },
    {
      id: 3,
      name: "StillWinds Yoga Gym",
      location: "North Dakota",
      rating: 4.1,
      image: "/IMAGE-2.png",
      features: ["Yoga", "Relaxation"],
      primaryButton: { color: "#0b294b", text: "View Plans" },
    },
  ];

  // Plans data for the dialog
  const plans = [
    { name: "Basic", price: "Php 399.99", billing: "Billed monthly" },
    { name: "Premium", price: "Php 999.99", billing: "Billed monthly" },
    { name: "Annual", price: "Php 3,999.00", billing: "Billed yearly" },
  ];

  return (
    <section className="w-full max-w-[1208px] mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="font-bold text-2xl text-[#0b294b] mb-8 font-['Cairo-Bold',Helvetica]">
        Available Gyms
      </h2>

      <div className="flex flex-col gap-6">
        {gyms.map((gym) => (
          <Card key={gym.id} className="bg-[#f8f9fa] border-0">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${gym.image})` }}
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-xl text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                    {gym.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-[#ffb400] text-[#ffb400]" />
                    <span className="ml-1 font-normal text-base font-['Cairo-Regular',Helvetica]">
                      {gym.rating}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#666666] mb-5 font-['Cairo-Regular',Helvetica]">
                  {gym.location}
                </p>

                <div className="flex gap-2 mb-6">
                  {gym.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-[#e9ecef] text-black border-0 rounded-2xl px-3 py-1 font-['Cairo-Regular',Helvetica] font-normal"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Link to="/customeru95gymsearchu95plans">
                    <Button
                      className="w-full h-12 rounded-lg font-['Cairo-SemiBold',Helvetica] font-semibold"
                      style={{ backgroundColor: gym.primaryButton.color }}
                    >
                      {gym.primaryButton.text}
                    </Button>
                  </Link>
                  <Button className="w-full h-12 rounded-lg bg-[#0b294b] font-['Cairo-SemiBold',Helvetica] font-semibold">
                    Info
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
        <ChevronLeft className="w-4 h-4 mr-2" />
        <span>Showing 3 of 6 gyms</span>
        <ChevronRight className="w-4 h-4 ml-2" />
      </div>

      {/* Dialog for plans - this would be controlled by state in a real implementation */}
      <Dialog>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              FitLife Center Plans
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-4 rounded-md flex justify-between items-center ${
                  index === 0 ? "bg-[#ffb400]" : "bg-[#0b294b] text-white"
                }`}
              >
                <div>
                  <div className="font-medium">{plan.name}</div>
                  <div className="text-sm opacity-80">{plan.billing}</div>
                </div>
                <div className="font-bold">{plan.price}</div>
              </div>
            ))}
            <div className="grid grid-cols-1 gap-2 mt-2">
              <Button>Join</Button>
              <Button variant="outline">Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}