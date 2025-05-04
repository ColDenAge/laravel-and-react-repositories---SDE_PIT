import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function CreateMembershipPlanSection() {
  const durationOptions = [
    "1 Week",
    "2 Weeks",
    "1 Month",
    "3 Months",
    "6 Months",
    "1 Year",
  ];

  return (
    <Card className="w-full max-w-[500px] bg-white rounded-xl">
      <CardContent className="p-8">
        <h2 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
          Create New Membership Plan
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="font-['Cairo-Regular',Helvetica] font-normal text-base"
            >
              Name
            </Label>
            <Input
              id="name"
              className="h-[55px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica] text-[#666666] rounded-lg"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="font-['Cairo-Regular',Helvetica] font-normal text-base"
            >
              Description
            </Label>
            <Textarea
              id="description"
              className="h-[98px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica] text-[#666666] rounded-lg resize-none"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="price"
              className="font-['Cairo-Regular',Helvetica] font-normal text-base"
            >
              Price (Only supports Php, USD, and Euro)
            </Label>
            <Input
              id="price"
              className="h-[55px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica] text-[#666666] rounded-lg"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="duration"
              className="font-['Cairo-Regular',Helvetica] font-normal text-base"
            >
              Good for
            </Label>
            <Select defaultValue="1 Week">
              <SelectTrigger
                id="duration"
                className="h-[55px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica] rounded-lg"
              >
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {durationOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              variant="ghost"
              className="h-12 w-[92px] font-['Cairo-Regular',Helvetica] font-normal text-base"
            >
              Cancel
            </Button>
            <Button className="h-12 w-[141px] bg-[#0b294b] hover:bg-[#0b294b]/90 font-['Cairo-Regular',Helvetica] font-normal text-base">
              Create Plan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}