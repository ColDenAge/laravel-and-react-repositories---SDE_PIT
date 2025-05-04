import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function EditClassSection() {
  // Data for form fields
  const classData = {
    name: "Power lifting techniques",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat ex rutrum sem sodales, ac lacinia purus vestibulum.",
    schedule: {
      days: "M, T, W",
      time: "9:00 AM - 10:30 AM",
    },
    instructor: "Edward Greens B. Casino",
    endDate: "4/20/2025",
  };

  return (
    <Card className="w-full max-w-[500px] rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#0b294b]">
          Edit Class
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-normal">
            Name
          </Label>
          <Input
            id="name"
            defaultValue={classData.name}
            className="h-[55px] bg-[#d9d9d9] text-black rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-base font-normal">
            Description
          </Label>
          <Textarea
            id="description"
            defaultValue={classData.description}
            className="h-[98px] bg-[#d9d9d9] text-black rounded-lg resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal">Schedules</Label>
          <div className="flex gap-4">
            <Input
              defaultValue={classData.schedule.days}
              className="h-[55px] bg-[#d9d9d9] text-black rounded-lg text-center"
            />
            <Input
              defaultValue={classData.schedule.time}
              className="h-[55px] bg-[#d9d9d9] text-black rounded-lg text-center"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="instructor" className="text-base font-normal">
            Instructor
          </Label>
          <Input
            id="instructor"
            defaultValue={classData.instructor}
            className="h-[55px] bg-[#d9d9d9] text-black rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="endDate" className="text-base font-normal">
            Ends in
          </Label>
          <Input
            id="endDate"
            defaultValue={classData.endDate}
            className="h-[55px] bg-[#0b294b] text-white rounded-lg text-center"
          />
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-4 pt-4">
        <Button variant="ghost" className="h-12 w-[92px]">
          Cancel
        </Button>
        <Button className="h-12 w-[141px] bg-[#0b294b] text-white">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}