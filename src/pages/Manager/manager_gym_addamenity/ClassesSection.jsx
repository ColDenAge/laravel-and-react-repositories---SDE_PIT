import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="w-full py-6">
      <Card className="w-full shadow-md">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-[32px] leading-[48px]">
            Classes Management
          </CardTitle>
          <Button className="bg-[#0b294b] font-['Cairo-Bold',Helvetica] text-white">
            Add Class
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="bg-[#e9ecef] border-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
                      {classItem.title}
                    </h3>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      {classItem.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="h-10 w-[58px] bg-[#0b294b] font-['Cairo-Regular',Helvetica] text-white text-base">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 w-[76px] bg-[#ff525220] border-none font-['Cairo-Regular',Helvetica] text-[#ff5252] text-base"
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div>
                    <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                      Schedules
                    </h4>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      {classItem.schedule}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                      Instructor
                    </h4>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      {classItem.instructor}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                      Ends in
                    </h4>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6">
                      {classItem.endsIn}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default ClassesSection;