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
      statusColor: "text-[#4caf50]",
      hours: "6AM-10PM",
      lastMaintenance: "2024-01-15",
    },
    {
      name: "Weight Room",
      description: "Full set of free weights and machines",
      status: "Maintenance",
      statusColor: "text-[#ff5252]",
      hours: "24/7",
      lastMaintenance: "2024-01-20",
    },
    {
      name: "Cardio Zone",
      description: "Treadmills, bikes, ellipticals",
      status: "Operational",
      statusColor: "text-[#4caf50]",
      hours: "24/7",
      lastMaintenance: "2024-01-18",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-[#0b294b] text-[32px] leading-[48px] font-['Cairo-Bold',Helvetica]">
          Amenities Management
        </h1>
        <Button className="bg-[#0b294b] text-white h-12 px-6 rounded-lg">
          <span className="font-['Cairo-Bold',Helvetica] font-bold">
            Add Amenity
          </span>
        </Button>
      </div>

      <div className="space-y-4">
        {amenities.map((amenity, index) => (
          <Card key={index} className="bg-[#e9ecef] border-none rounded-lg">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
                      {amenity.name}
                    </h2>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
                      {amenity.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="h-10 w-[58px] bg-[#0b294b] rounded">
                      <span className="font-['Cairo-Regular',Helvetica] font-normal text-white text-base">
                        Edit
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-10 w-[76px] bg-[#ff525220] rounded"
                    >
                      <span className="font-['Cairo-Regular',Helvetica] font-normal text-[#ff5252] text-base">
                        Delete
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      Status
                    </p>
                    <p
                      className={`font-['Cairo-Bold',Helvetica] font-bold ${amenity.statusColor} text-base leading-6 mt-1`}
                    >
                      {amenity.status}
                    </p>
                  </div>

                  <div className="ml-[380px]">
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      Hours
                    </p>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-1">
                      {amenity.hours}
                    </p>
                  </div>

                  <div className="ml-[380px]">
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      Last Maintenance
                    </p>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-1">
                      {amenity.lastMaintenance}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}