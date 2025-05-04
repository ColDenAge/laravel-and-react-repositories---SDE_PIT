import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

export const AvailableGymsSection = () => {
  // Gym data for mapping
  const gyms = [
    {
      id: 1,
      name: "FitLife Center",
      image: "/IMAGE-2.png",
      location: "Downtown",
      rating: "4.8",
      features: ["Pool", "Sauna", "CrossFit"],
    },
    {
      id: 2,
      name: "PowerHouse Gym",
      image: "/image.png",
      location: "Westside",
      rating: "4.6",
      features: ["Boxing Ring", "Cardio Cinema", "Juice Bar"],
    },
    {
      id: 3,
      name: "StillWinds Yoga Gym",
      image: "/IMAGE.png",
      location: "North Dakota",
      rating: "4.1",
      features: ["Yoga", "Relaxation"],
    },
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-md p-6">
      <h2 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-9 mb-8">
        Available Gyms
      </h2>

      <div className="flex flex-col gap-6">
        {gyms.map((gym) => (
          <Card key={gym.id} className="bg-[#f8f9fa] border-0 overflow-hidden">
            <div
              className="w-full h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${gym.image})` }}
            />
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-['Cairo-SemiBold',Helvetica] font-semibold text-xl text-[#0b294b] leading-[30px]">
                  {gym.name}
                </h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-[#ffb400] text-[#ffb400]" />
                  <span className="font-['Cairo-Regular',Helvetica] text-base ml-1">
                    {gym.rating}
                  </span>
                </div>
              </div>

              <p className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] mb-5">
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
                <Button className="bg-[#0b294b] hover:bg-[#0b294b]/90 font-['Cairo-SemiBold',Helvetica] font-semibold text-base h-12">
                  View Plans
                </Button>
                <Button className="bg-[#0b294b] hover:bg-[#0b294b]/90 font-['Cairo-SemiBold',Helvetica] font-semibold text-base h-12">
                  Info
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span>Showing 3 of 6 gyms</span>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default AvailableGymsSection;