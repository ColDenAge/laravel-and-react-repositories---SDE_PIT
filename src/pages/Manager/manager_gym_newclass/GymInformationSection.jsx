import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

export default function GymInformationSection() {
  // Data for the gym information fields
  const gymData = {
    name: "Placeholder Fitness Gym",
    address: "19th Street Negro, New Zealand",
    phone: "+63 360 420 6969",
    email: "test.email@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu erat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin congue sagittis leo vel tempor. Praesent a purus a libero semper pulvinar. Fusce quam sem, venenatis a egestas non, commodo et dolor. Nulla facilisi. Nullam finibus sem sit amet bibendum suscipit. Nunc sit amet sagittis ligula. Donec sodales sollicitudin dolor sed aliquam. Nunc commodo nulla eget risus congue sodales.",
    operatingHours: "8:00 AM - 4:30 PM GMT",
  };

  // Reusable read-only field component
  const ReadOnlyField = ({ label, value, className = "" }) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label className="font-normal text-base">{label}</Label>
      <div className="bg-[#e9ecef] rounded-lg p-4 h-[55px] flex items-center">
        <span className="text-sm">{value}</span>
      </div>
    </div>
  );

  return (
    <Card className="w-full shadow-md rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-[32px] text-[#0b294b] font-bold font-['Cairo-Bold',Helvetica]">
          Gym Information
        </CardTitle>
        <Button className="bg-[#0b294b] text-white font-bold font-['Cairo-Bold',Helvetica]">
          Upload Gym
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <ReadOnlyField label="Gym Name" value={gymData.name} />
          <ReadOnlyField label="Address" value={gymData.address} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ReadOnlyField label="Phone" value={gymData.phone} />
          <ReadOnlyField label="Email" value={gymData.email} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-normal text-base">Description</Label>
          <div className="bg-[#e9ecef] rounded-lg p-4 min-h-[100px]">
            <p className="text-sm">{gymData.description}</p>
          </div>
        </div>

        <ReadOnlyField label="Operating Hours" value={gymData.operatingHours} />

        <div className="flex justify-end gap-4 pt-4">
          <Button className="bg-[#0b294b] text-white font-bold font-['Cairo-Bold',Helvetica]">
            Upload Picture
          </Button>
          <Button className="bg-[#0b294b] text-white font-bold font-['Cairo-Bold',Helvetica]">
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}