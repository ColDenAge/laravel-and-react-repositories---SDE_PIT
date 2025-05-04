import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function PersonalInformationSection() {
  // Data for form fields
  const personalInfo = [
    {
      id: "fullName",
      label: "Full Name",
      value: "Jayden Smith Augustus",
      col: 1,
      row: 1,
    },
    {
      id: "email",
      label: "Email Address",
      value: "example.address@gmail.com",
      col: 2,
      row: 1,
    },
    {
      id: "phone",
      label: "Phone Number",
      value: "+63 696 969 6969",
      col: 1,
      row: 2,
    },
    { id: "dob", label: "Date of Birth", value: "12/7/2003", col: 2, row: 2 },
    { id: "height", label: "Height (cm)", value: "150", col: 1, row: 3 },
    { id: "weight", label: "Weight (kg)", value: "69", col: 2, row: 3 },
  ];

  return (
    <Card className="w-full shadow-[0px_4px_6px_#0000001a] rounded-xl">
      <CardContent className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-9">
            Personal Information
          </h2>
          <div className="flex gap-4">
            <Button
              variant="default"
              className="h-12 w-[127px] bg-[#0b294b] font-['Cairo-SemiBold',Helvetica] font-semibold"
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="h-12 w-[127px] bg-[#0b294b] font-['Cairo-SemiBold',Helvetica] font-semibold"
            >
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {personalInfo.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <Label
                htmlFor={field.id}
                className="font-['Cairo-Regular',Helvetica] font-normal text-sm text-black"
              >
                {field.label}
              </Label>
              <Input
                id={field.id}
                defaultValue={field.value}
                readOnly
                className="h-[55px] bg-[#e9ecef] border-white rounded-lg px-5 py-[15px] font-['Cairo-Regular',Helvetica] font-normal text-sm"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}