import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function AmenitiesSection() {
  // Data for amenities to enable mapping
  const amenities = [
    {
      name: "Olympic Pool",
      description: "25m indoor heated pool",
      status: "Operational",
      hours: "6AM-10PM",
      lastMaintenance: "2024-01-15",
    },
    {
      name: "Weight Room",
      description: "Full set of free weights and machines",
      status: "Maintenance",
      hours: "24/7",
      lastMaintenance: "2024-01-20",
    },
    {
      name: "Cardio Zone",
      description: "Treadmills, bikes, ellipticals",
      status: "Operational",
      hours: "24/7",
      lastMaintenance: "2024-01-18",
    },
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-[32px] leading-[48px]">
          Amenities Management
        </h2>
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] font-bold">
          Add Amenity
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {amenities.map((amenity, index) => (
          <Card key={index} className="bg-[#e9ecef] border-none">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
                      {amenity.name}
                    </h3>
                    <p className="font-['Cairo-Regular',Helvetica] text-black mt-2">
                      {amenity.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="h-10 bg-[#0b294b] text-white font-['Cairo-Regular',Helvetica]">
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-10 bg-[#ff525220] text-[#ff5252] font-['Cairo-Regular',Helvetica] hover:bg-[#ff525230]"
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="font-['Cairo-Regular',Helvetica] text-black">
                      Status
                    </p>
                    <Badge
                      variant="outline"
                      className={`mt-1 font-['Cairo-Bold',Helvetica] font-bold border-none ${
                        amenity.status === "Operational"
                          ? "text-[#4caf50]"
                          : "text-[#ff5252]"
                      }`}
                    >
                      {amenity.status}
                    </Badge>
                  </div>

                  <div className="ml-auto mr-auto">
                    <p className="font-['Cairo-Regular',Helvetica] text-black">
                      Hours
                    </p>
                    <p className="font-['Cairo-Regular',Helvetica] text-black mt-1">
                      {amenity.hours}
                    </p>
                  </div>

                  <div>
                    <p className="font-['Cairo-Regular',Helvetica] text-black">
                      Last Maintenance
                    </p>
                    <p className="font-['Cairo-Regular',Helvetica] text-black mt-1">
                      {amenity.lastMaintenance}
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