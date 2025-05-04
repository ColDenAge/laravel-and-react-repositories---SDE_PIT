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

export const EditMembershipPlanSection = () => {
  // Data for the form fields
  const formData = {
    name: "Freemium Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat ex rutrum sem sodales, ac lacinia purus vestibulum.",
    price: "Php 499.00",
    duration: "1 Week",
  };

  return (
    <Card className="w-full max-w-[500px] rounded-xl">
      <CardContent className="p-8">
        <h2 className="font-bold text-2xl text-[#0b294b] mb-6 font-['Cairo-Bold',Helvetica] leading-9">
          Edit Membership Plan
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] font-normal text-base">
              Name
            </Label>
            <Input
              defaultValue={formData.name}
              className="h-[55px] bg-[#d9d9d9] rounded-lg font-['Cairo-Regular',Helvetica] text-base py-3 px-[15px]"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] font-normal text-base">
              Description
            </Label>
            <Textarea
              defaultValue={formData.description}
              className="h-[98px] bg-[#d9d9d9] rounded-lg font-['Cairo-Regular',Helvetica] text-base p-[13px]"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] font-normal text-base">
              Price (Only supports Php, USD, and Euro)
            </Label>
            <Input
              defaultValue={formData.price}
              className="h-[55px] bg-[#d9d9d9] rounded-lg font-['Cairo-Regular',Helvetica] text-base py-3 px-3"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] font-normal text-base">
              Good for
            </Label>
            <Select defaultValue={formData.duration}>
              <SelectTrigger className="h-[55px] bg-[#d9d9d9] rounded-lg font-['Cairo-Regular',Helvetica] text-base">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 Week">1 Week</SelectItem>
                <SelectItem value="1 Month">1 Month</SelectItem>
                <SelectItem value="3 Months">3 Months</SelectItem>
                <SelectItem value="1 Year">1 Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button
              variant="ghost"
              className="h-12 w-[92px] font-['Cairo-Regular',Helvetica] font-normal text-base"
            >
              Cancel
            </Button>
            <Button className="h-12 w-[141px] bg-[#0b294b] font-['Cairo-Regular',Helvetica] font-normal text-base">
              Save Changes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EditMembershipPlanSection;