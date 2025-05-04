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

export default function CreateClassSection() {
  return (
    <Card className="w-full max-w-[500px] bg-white rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="font-bold text-2xl text-[#0b294b] [font-family:'Cairo-Bold',Helvetica]">
          Create Class
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="[font-family:'Cairo-Regular',Helvetica] font-normal text-base"
          >
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter name"
            className="h-[55px] bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica] text-[#666666]"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="description"
            className="[font-family:'Cairo-Regular',Helvetica] font-normal text-base"
          >
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Enter description"
            className="h-[98px] bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica] text-[#666666]"
          />
        </div>

        <div className="space-y-2">
          <Label className="[font-family:'Cairo-Regular',Helvetica] font-normal text-base">
            Schedules
          </Label>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="h-[55px] w-full bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica] text-black font-normal"
            >
              Set Day
            </Button>
            <Button
              variant="outline"
              className="h-[55px] w-full bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica] text-black font-normal"
            >
              Set Time
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="instructor"
            className="[font-family:'Cairo-Regular',Helvetica] font-normal text-base"
          >
            Instructor
          </Label>
          <Input
            id="instructor"
            placeholder="Enter instructor"
            className="h-[55px] bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica] text-[#666666]"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="endDate"
            className="[font-family:'Cairo-Regular',Helvetica] font-normal text-base"
          >
            Ends in
          </Label>
          <Button
            variant="outline"
            id="endDate"
            className="h-[55px] w-full bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica] text-black font-normal"
          >
            Set Date
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-4">
        <Button
          variant="ghost"
          className="h-12 [font-family:'Cairo-Regular',Helvetica] font-normal text-black"
        >
          Cancel
        </Button>
        <Button className="h-12 bg-[#0b294b] [font-family:'Cairo-Regular',Helvetica] font-normal text-white">
          Create Class
        </Button>
      </CardFooter>
    </Card>
  );
}