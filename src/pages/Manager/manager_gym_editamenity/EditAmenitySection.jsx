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

export default function EditAmenitySection() {
  // Form data
  const formData = {
    name: "Placeholder Fitness Gym",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat ex rutrum sem sodales, ac lacinia purus vestibulum.",
    operatingHours: "9:00 AM - 4:30 PM GMT",
    status: "Operational",
  };

  // Status options
  const statusOptions = ["Operational", "Closed", "Under Maintenance"];

  return (
    <Card className="w-full max-w-[500px] rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#0b294b] tracking-normal leading-9">
          Edit Amenity
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-normal text-base leading-6">
            Name
          </Label>
          <Input
            id="name"
            defaultValue={formData.name}
            className="h-[55px] bg-[#d9d9d9] rounded-lg font-normal text-base"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="description"
            className="font-normal text-base leading-6"
          >
            Description
          </Label>
          <Textarea
            id="description"
            defaultValue={formData.description}
            className="h-[98px] bg-[#d9d9d9] rounded-lg font-normal text-base p-3.5"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="operatingHours"
            className="font-normal text-base leading-6"
          >
            Operating Hours
          </Label>
          <Input
            id="operatingHours"
            defaultValue={formData.operatingHours}
            className="h-[55px] bg-[#d9d9d9] rounded-lg font-normal text-base"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status" className="font-normal text-base leading-6">
            Status
          </Label>
          <Select defaultValue={formData.status}>
            <SelectTrigger className="h-[55px] bg-[#d9d9d9] rounded-lg font-normal text-base">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-4 pt-4">
        <Button variant="ghost" className="h-12 w-[92px] font-normal text-base">
          Cancel
        </Button>
        <Button className="h-12 w-[141px] bg-[#0b294b] font-normal text-base">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}