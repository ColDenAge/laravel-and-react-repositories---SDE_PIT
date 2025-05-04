import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function GymInfoSection() {
  // Data for form fields
  const gymData = {
    name: "Placeholder Fitness Gym",
    address: "19th Street Negro, New Zealand",
    phone: "+63 360 420 6969",
    email: "test.email@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu erat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin congue sagittis leo vel tempor. Praesent a purus a libero semper pulvinar. Fusce quam sem, venenatis a egestas non, commodo et dolor. Nulla facilisi. Nullam finibus sem sit amet bibendum suscipit. Nunc sit amet sagittis ligula. Donec sodales sollicitudin dolor sed aliquam. Nunc commodo nulla eget risus congue sodales.",
    operatingHours: "8:00 AM - 4:30 PM GMT",
  };

  // Form field component for reuse
  const FormField = ({ label, value }) => (
    <div className="flex flex-col space-y-2">
      <label className="font-normal text-base leading-6">{label}</label>
      <div className="bg-[#e9ecef] rounded-lg p-4 h-[55px] flex items-center">
        <span className="text-sm leading-[21px]">{value}</span>
      </div>
    </div>
  );

  return (
    <Card className="w-full shadow-md rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-[32px] leading-[48px] text-[#0b294b] font-bold font-['Cairo-Bold',Helvetica]">
          Gym Information
        </CardTitle>
        <Button className="bg-[#0b294b] h-12 w-[147px] rounded-lg">
          <span className="font-['Cairo-Bold',Helvetica] font-bold">
            Upload Gym
          </span>
        </Button>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-2 gap-12">
          <FormField label="Gym Name" value={gymData.name} />
          <FormField label="Address" value={gymData.address} />
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label="Phone" value={gymData.phone} />
          <FormField label="Email" value={gymData.email} />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-normal text-base leading-6">Description</label>
          <div className="bg-[#e9ecef] rounded-lg p-4 min-h-[100px]">
            <p className="text-sm leading-[21px]">{gymData.description}</p>
          </div>
        </div>

        <FormField label="Operating Hours" value={gymData.operatingHours} />

        <div className="flex justify-end space-x-4 pt-4">
          <Button className="bg-[#0b294b] h-12 w-[147px] rounded-lg">
            <span className="font-['Cairo-Bold',Helvetica] font-bold">
              Upload Picture
            </span>
          </Button>
          <Button className="bg-[#0b294b] h-12 w-[147px] rounded-lg">
            <span className="font-['Cairo-Bold',Helvetica] font-bold">
              Edit
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}