import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

// Define class data for mapping
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

const ClassesSection = () => {
  return (
    <section className="w-full py-8">
      <Card className="w-full shadow-md">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-[32px] font-bold text-[#0b294b] [font-family:'Cairo-Bold',Helvetica]">
            Classes Management
          </CardTitle>
          <Button className="bg-[#0b294b] text-white [font-family:'Cairo-Bold',Helvetica]">
            Add Class
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {classesData.map((classItem) => (
            <Card key={classItem.id} className="bg-[#e9ecef] rounded-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0b294b] [font-family:'Cairo-Bold',Helvetica]">
                      {classItem.title}
                    </h3>
                    <p className="mt-2 text-base text-black [font-family:'Cairo-Regular',Helvetica]">
                      {classItem.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="h-10 w-[58px] bg-[#0b294b] text-white [font-family:'Cairo-Regular',Helvetica]">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 w-[76px] bg-[#ff525220] text-[#ff5252] border-none [font-family:'Cairo-Regular',Helvetica]"
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div>
                    <h4 className="font-bold text-black text-base [font-family:'Cairo-Bold',Helvetica]">
                      Schedules
                    </h4>
                    <p className="text-base text-black [font-family:'Cairo-Regular',Helvetica]">
                      {classItem.schedule}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base [font-family:'Cairo-Bold',Helvetica]">
                      Instructor
                    </h4>
                    <p className="text-base text-black [font-family:'Cairo-Regular',Helvetica]">
                      {classItem.instructor}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base [font-family:'Cairo-Bold',Helvetica]">
                      Ends in
                    </h4>
                    <p className="text-base text-black [font-family:'Cairo-Regular',Helvetica]">
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