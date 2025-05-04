import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function AmenitiesSection() {
  // Data for amenities to enable mapping
  const amenities = [
    {
      id: 1,
      name: "Olympic Pool",
      description: "25m indoor heated pool",
      status: "Operational",
      statusColor: "text-[#4caf50]",
      hours: "6AM-10PM",
      lastMaintenance: "2024-01-15",
    },
    {
      id: 2,
      name: "Weight Room",
      description: "Full set of free weights and machines",
      status: "Maintenance",
      statusColor: "text-[#ff5252]",
      hours: "24/7",
      lastMaintenance: "2024-01-20",
    },
    {
      id: 3,
      name: "Cardio Zone",
      description: "Treadmills, bikes, ellipticals",
      status: "Operational",
      statusColor: "text-[#4caf50]",
      hours: "24/7",
      lastMaintenance: "2024-01-18",
    },
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-[#0b294b] text-[32px] leading-[48px] font-['Cairo-Bold',Helvetica]">
          Amenities Management
        </h2>
        <Button className="bg-[#0b294b] text-white font-bold font-['Cairo-Bold',Helvetica]">
          Add Amenity
        </Button>
      </div>

      <div className="space-y-4">
        {amenities.map((amenity) => (
          <Card key={amenity.id} className="bg-[#e9ecef] border-0">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-[#0b294b] text-2xl leading-9 font-['Cairo-Bold',Helvetica]">
                      {amenity.name}
                    </h3>
                    <p className="font-normal text-black text-base leading-6 mt-2 font-['Cairo-Regular',Helvetica]">
                      {amenity.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="h-10 bg-[#0b294b] text-white font-normal font-['Cairo-Regular',Helvetica]">
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-10 bg-[#ff525220] text-[#ff5252] font-normal font-['Cairo-Regular',Helvetica]"
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica]">
                      Status
                    </p>
                    <p
                      className={`font-bold text-base leading-6 ${amenity.statusColor} font-['Cairo-Bold',Helvetica]`}
                    >
                      {amenity.status}
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica]">
                      Hours
                    </p>
                    <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica]">
                      {amenity.hours}
                    </p>
                  </div>
                  <div>
                    <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica]">
                      Last Maintenance
                    </p>
                    <p className="font-normal text-black text-base leading-6 font-['Cairo-Regular',Helvetica]">
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