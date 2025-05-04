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
    <section className="w-full p-6 bg-white rounded-xl shadow-md">
      <header className="flex justify-between items-center mb-6">
        <h1 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-[32px] leading-[48px]">
          Amenities Management
        </h1>
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] font-bold">
          Add Amenity
        </Button>
      </header>

      <div className="space-y-4">
        {amenities.map((amenity, index) => (
          <Card key={index} className="bg-[#e9ecef] border-none">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9 mb-2">
                    {amenity.name}
                  </h2>
                  <p className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6 mb-6">
                    {amenity.description}
                  </p>
                </div>
                <div className="flex space-x-2">
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

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
                    Status
                  </p>
                  <p
                    className={`font-['Cairo-Bold',Helvetica] font-bold ${amenity.statusColor} text-base leading-6`}
                  >
                    {amenity.status}
                  </p>
                </div>
                <div>
                  <p className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
                    Hours
                  </p>
                  <p className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
                    {amenity.hours}
                  </p>
                </div>
                <div>
                  <p className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
                    Last Maintenance
                  </p>
                  <p className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
                    {amenity.lastMaintenance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}