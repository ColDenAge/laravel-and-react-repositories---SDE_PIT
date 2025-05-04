import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

export default function ClassesSection() {
  // Class data for mapping
  const classes = [
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
    <div className="w-full py-6">
      <Card className="w-full shadow-md">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-[#0b294b] text-[32px] leading-[48px] font-['Cairo-Bold',Helvetica]">
              Classes Management
            </h2>
            <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 px-6">
              Add Class
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {classes.map((classItem) => (
              <Card key={classItem.id} className="bg-[#e9ecef] rounded-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-['Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
                        {classItem.title}
                      </h3>
                      <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
                        {classItem.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/manageru95gymeditu95class">
                        <Button className="bg-[#0b294b] text-white h-10 w-[58px] font-['Cairo-Regular',Helvetica]">
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="bg-[#ff525220] text-[#ff5252] h-10 w-[76px] font-['Cairo-Regular',Helvetica]"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 mt-8">
                    <div>
                      <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                        Schedules
                      </h4>
                      <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
                        {classItem.schedule}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                        Instructor
                      </h4>
                      <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
                        {classItem.instructor}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-['Cairo-Bold',Helvetica] font-bold text-black text-base leading-6">
                        Ends in
                      </h4>
                      <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base leading-6 mt-2">
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
    </div>
  );
}