import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ClassesSection = () => {
  // Class data for mapping
  const classesData = [
    {
      id: 1,
      title: "Weight Loss Training",
      description: "Learning ways to lose weight through physical activities.",
      schedule: "M, T, W --- 9:00 AM - 10:30 AM GMT",
      instructor: "David Stark",
      endDate: "05/15/2025",
    },
    {
      id: 2,
      title: "Track and Run",
      description: "Methods and ways to healthily run away from problems.",
      schedule: "Th, F --- 10:AM - 11:00 AM GMT",
      instructor: "Pete Davis",
      endDate: "05/15/2025",
    },
    {
      id: 3,
      title: "Track and Run",
      description: "Methods and ways to healthily run away from problems.",
      schedule: "Th, F --- 10:AM - 11:00 AM GMT",
      instructor: "Pete Davis",
      endDate: "05/15/2025",
    },
  ];

  return (
    <section className="w-full py-8">
      <Card className="w-full shadow-md rounded-xl">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-[32px] text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-[48px]">
              Classes Management
            </h2>
            <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 px-6 rounded-lg">
              Add Class
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {classesData.map((classItem) => (
              <Card key={classItem.id} className="bg-[#e9ecef] rounded-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-9">
                        {classItem.title}
                      </h3>
                      <p className="font-normal text-base text-black font-['Cairo-Regular',Helvetica] leading-6 mt-2">
                        {classItem.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="h-10 bg-[#0b294b] text-white font-['Cairo-Regular',Helvetica] text-base">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        className="h-10 bg-[#ff525220] text-[#ff5252] border-none font-['Cairo-Regular',Helvetica] text-base"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  <div className="flex mt-8 gap-16">
                    <div>
                      <h4 className="font-bold text-base text-black font-['Cairo-Bold',Helvetica] leading-6">
                        Schedules
                      </h4>
                      <p className="font-normal text-base text-black font-['Cairo-Regular',Helvetica] leading-6 mt-1">
                        {classItem.schedule}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-base text-black font-['Cairo-Bold',Helvetica] leading-6">
                        Instructor
                      </h4>
                      <p className="font-normal text-base text-black font-['Cairo-Regular',Helvetica] leading-6 mt-1">
                        {classItem.instructor}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-base text-black font-['Cairo-Bold',Helvetica] leading-6">
                        Ends in
                      </h4>
                      <p className="font-normal text-base text-black font-['Cairo-Regular',Helvetica] leading-6 mt-1">
                        {classItem.endDate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ClassesSection;