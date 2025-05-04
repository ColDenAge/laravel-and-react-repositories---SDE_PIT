import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ClassesSection = () => {
  // Class data for mapping
  const classes = [
    {
      id: 1,
      title: "Weight Loss Training",
      description: "Learning ways to lose weight through physical activities.",
      schedule: "M, T, W --- 9:00 AM - 10:30 AM GMT",
      instructor: "David Stark",
      endsIn: "05/15/2025",
    },
    {
      id: 2,
      title: "Track and Run",
      description: "Methods and ways to healthily run away from problems.",
      schedule: "Th, F --- 10:AM - 11:00 AM GMT",
      instructor: "Pete Davis",
      endsIn: "05/15/2025",
    },
    {
      id: 3,
      title: "Track and Run",
      description: "Methods and ways to healthily run away from problems.",
      schedule: "Th, F --- 10:AM - 11:00 AM GMT",
      instructor: "Pete Davis",
      endsIn: "05/15/2025",
    },
  ];

  return (
    <section className="w-full py-8">
      <Card className="w-full shadow-md">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-[32px] leading-[48px]">
              Classes Management
            </h2>
            <Button className="bg-[#0b294b] text-white hover:bg-[#0b294b]/90">
              <span className="[font-family:'Cairo-Bold',Helvetica] font-bold">
                Add Class
              </span>
            </Button>
          </div>

          <div className="flex flex-col gap-6">
            {classes.map((classItem) => (
              <Card key={classItem.id} className="bg-[#e9ecef] border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
                        {classItem.title}
                      </h3>
                      <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                        {classItem.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="h-10 bg-[#0b294b] text-white hover:bg-[#0b294b]/90">
                        <span className="[font-family:'Cairo-Regular',Helvetica] font-normal">
                          Edit
                        </span>
                      </Button>
                      <Button
                        variant="ghost"
                        className="h-10 bg-[#ff525220] text-[#ff5252] hover:bg-[#ff525230] hover:text-[#ff5252]"
                      >
                        <span className="[font-family:'Cairo-Regular',Helvetica] font-normal">
                          Delete
                        </span>
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div>
                      <h4 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                        Schedules
                      </h4>
                      <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                        {classItem.schedule}
                      </p>
                    </div>
                    <div>
                      <h4 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                        Instructor
                      </h4>
                      <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                        {classItem.instructor}
                      </p>
                    </div>
                    <div>
                      <h4 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                        Ends in
                      </h4>
                      <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                        {classItem.endsIn}
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