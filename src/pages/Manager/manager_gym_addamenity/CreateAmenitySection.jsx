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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function CreateAmenitySection() {
  // Status options for the dropdown
  const statusOptions = [
    { value: "operational", label: "Operational" },
    { value: "non-operational", label: "Non-operational" },
    { value: "maintenance", label: "Under Maintenance" },
  ];

  return (
    <Card className="w-full max-w-[500px] rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
          Create Amenity
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="font-['Cairo-Regular',Helvetica] font-normal text-black"
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
            className="font-['Cairo-Regular',Helvetica] font-normal text-black"
          >
            Description
          </Label>
          <Textarea
            id="description"
            className="h-[98px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica] text-[#666666] rounded-lg"
            placeholder=""
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="operating-hours"
            className="font-['Cairo-Regular',Helvetica] font-normal text-black"
          >
            Operating Hours
          </Label>
          <Input
            id="operating-hours"
            className="h-[55px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica] text-[#666666] rounded-lg"
            placeholder=""
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="status"
            className="font-['Cairo-Regular',Helvetica] font-normal text-black"
          >
            Status
          </Label>
          <Select defaultValue="operational">
            <SelectTrigger
              id="status"
              className="h-[55px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica] text-black rounded-lg"
            >
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-4 pt-4">
        <Button
          variant="ghost"
          className="h-12 w-[92px] font-['Cairo-Regular',Helvetica] text-black"
        >
          Cancel
        </Button>
        <Button className="h-12 w-[141px] bg-[#0b294b] font-['Cairo-Regular',Helvetica] text-white">
          Create Amenity
        </Button>
      </CardFooter>
    </Card>
  );
}