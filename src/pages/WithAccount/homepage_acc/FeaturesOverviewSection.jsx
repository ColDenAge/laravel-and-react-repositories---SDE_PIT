import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const FeaturesOverviewSection = () => {
  // Data for features to enable mapping
  const features = [
    {
      id: 1,
      title: "Gym Management",
      description:
        "Track and manage the members of your gym, see their activity and their billings. Create events, rankings or even, contact with the members to have appointments.",
    },
    {
      id: 2,
      title: "Communication",
      description:
        "Chat and communicate with the respective gyms, programs, or mentors you're aligned with or subscribed to. Set appointments, or meetings with the people.",
    },
    {
      id: 3,
      title: "Automation",
      description:
        "As a manager, you don't have to worry about your gym's reception of processing each and every single one of your gym. GymWatch is here to help you hasten the process and make customer-service easier on your staff.",
    },
    {
      id: 4,
      title: "Monitor your subscriptions",
      description:
        "See each and every single programs or gym subscription you've had. Track activities and events created by the gyms you've been subscribed to. In addition,",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Top row features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <h2 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
                {features[0].title}
              </h2>
              <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica]">
                {features[0].description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <h2 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
                {features[1].title}
              </h2>
              <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica]">
                {features[1].description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom row with image and features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="space-y-16">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <h2 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
                  {features[2].title}
                </h2>
                <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica]">
                  {features[2].description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <h2 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
                  {features[3].title}
                </h2>
                <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica]">
                  {features[3].description}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-center">
            <img
              className="object-cover max-w-full h-auto"
              alt="GymWatch dashboard interface"
              src=""
            />
          </div>
        </div>

        {/* Background accent */}
        <div className="w-full h-[435px] bg-[#d9d9d9] mt-16"></div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;