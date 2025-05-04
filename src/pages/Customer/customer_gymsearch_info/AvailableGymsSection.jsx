import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

export default function AvailableGymsSection() {
  // Gym data for mapping
  const gyms = [
    {
      id: 1,
      name: "FitLife Center",
      location: "Downtown",
      rating: 4.8,
      amenities: ["Pool", "Sauna", "CrossFit"],
      infoButtonVariant: "warning",
      image: "./IMAGE.png",
    },
    {
      id: 2,
      name: "PowerHouse Gym",
      location: "Westside",
      rating: 4.6,
      amenities: ["Boxing Ring", "Cardio Cinema", "Juice Bar"],
      infoButtonVariant: "primary",
      image: "./image.png",
    },
    {
      id: 3,
      name: "StillWinds Yoga Gym",
      location: "North Dakota",
      rating: 4.1,
      amenities: ["Yoga", "Relaxation"],
      infoButtonVariant: "primary",
      image: "./IMAGE-2.png",
    },
  ];

  return (
    <Card className="w-full bg-white rounded-xl shadow-md">
      <CardContent className="p-6">
        <h2 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
          Available Gyms
        </h2>

        <div className="flex flex-col gap-6">
          {gyms.map((gym) => (
            <Card
              key={gym.id}
              className="bg-[#f8f9fa] rounded-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[200px] object-cover"
                  alt={`${gym.name} image`}
                  src={gym.image}
                />

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-xl text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                      {gym.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-[#ffb400] fill-[#ffb400]" />
                      <span className="ml-1 text-base font-['Cairo-Regular',Helvetica]">
                        {gym.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#666666] font-['Cairo-Regular',Helvetica] mb-5">
                    {gym.location}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {gym.amenities.map((amenity, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-[#e9ecef] text-black font-normal rounded-2xl px-3 py-1 font-['Cairo-Regular',Helvetica]"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 h-12 bg-[#0b294b] hover:bg-[#0b294b]/90 text-white font-['Cairo-SemiBold',Helvetica]">
                      View Plans
                    </Button>
                    <Button
                      className={`flex-1 h-12 ${
                        gym.infoButtonVariant === "warning"
                          ? "bg-[#ffb400] hover:bg-[#ffb400]/90"
                          : "bg-[#0b294b] hover:bg-[#0b294b]/90"
                      } text-white font-['Cairo-SemiBold',Helvetica]`}
                    >
                      Info
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center mt-6 text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>Showing 3 of 5 gyms</span>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Gym Details Dialog - This would be controlled by state in a real implementation */}
        <Dialog>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Gym Details</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Information</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span>FitLife Center</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gym ID:</span>
                    <span>GYM-0235-1BD1-2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Join Date:</span>
                    <span>2023-01-01</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Visits:</span>
                    <span>1,467</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Total members:
                    </span>
                    <span>58</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">Address and contacts</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Address:</span>
                    <span>5th Street, Brixton, London, 8702</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span>fitlife.center@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contact no:</span>
                    <span>+61 956 654 0338</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">Programs or equipments</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-gray-100">
                    Weight Training
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100">
                    Cardio Improvement
                  </Badge>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}