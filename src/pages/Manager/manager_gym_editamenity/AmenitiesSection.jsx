import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const AmenitiesSection = () => {
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
        <h2 className="font-bold text-[#0b294b] text-[32px] leading-[48px] [font-family:'Cairo-Bold',Helvetica]">
          Amenities Management
        </h2>
        <Button className="bg-[#0b294b] text-white h-12 px-6 rounded-lg">
          <span className="[font-family:'Cairo-Bold',Helvetica] font-bold">
            Add Amenity
          </span>
        </Button>
      </div>

      <div className="space-y-4">
        {amenities.map((amenity) => (
          <Card
            key={amenity.id}
            className="bg-[#e9ecef] border-none rounded-lg"
          >
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
                      {amenity.name}
                    </h3>
                    <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
                      {amenity.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      asChild
                      className="h-10 w-[58px] bg-[#0b294b] rounded"
                    >
                      <Link to="/manageru95gymu95editamenity">
                        <span className="[font-family:'Cairo-Regular',Helvetica] font-normal text-white text-base">
                          Edit
                        </span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-10 w-[76px] bg-[#ff525220] rounded text-[#ff5252] hover:bg-[#ff525230] hover:text-[#ff5252]"
                    >
                      <span className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#ff5252] text-base">
                        Delete
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      Status
                    </p>
                    <p
                      className={`[font-family:'Cairo-Bold',Helvetica] font-bold ${amenity.statusColor} text-base leading-6 mt-2`}
                    >
                      {amenity.status}
                    </p>
                  </div>
                  <div>
                    <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      Hours
                    </p>
                    <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
                      {amenity.hours}
                    </p>
                  </div>
                  <div>
                    <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      Last Maintenance
                    </p>
                    <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
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
};

export default AmenitiesSection;