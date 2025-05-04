import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const ClassesManagementSection = () => {
  // Class data for mapping
  const classesData = [
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
    <section className="w-full max-w-[1224px] mx-auto my-8">
      <Card className="relative bg-white rounded-xl shadow-md">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-[32px] leading-[48px]">
              Classes Management
            </h2>
            <Link to="/manageru95gymu95newclass">
              <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] font-bold">
                Add Class
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {classesData.map((classItem) => (
              <div key={classItem.id} className="bg-[#e9ecef] rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
                      {classItem.title}
                    </h3>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
                      {classItem.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
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

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div>
                    <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                      Schedules
                    </h4>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-1">
                      {classItem.schedule}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                      Instructor
                    </h4>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-1">
                      {classItem.instructor}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                      Ends in
                    </h4>
                    <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-1">
                      {classItem.endsIn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ClassesManagementSection;