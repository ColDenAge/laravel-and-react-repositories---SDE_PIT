import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

  // Field definitions for the form
  const fields = [
    {
      id: "name",
      label: "Gym Name",
      value: gymData.name,
      colSpan: "col-span-1",
    },
    {
      id: "address",
      label: "Address",
      value: gymData.address,
      colSpan: "col-span-1",
    },
    {
      id: "phone",
      label: "Phone",
      value: gymData.phone,
      colSpan: "col-span-1",
    },
    {
      id: "email",
      label: "Email",
      value: gymData.email,
      colSpan: "col-span-1",
    },
    {
      id: "description",
      label: "Description",
      value: gymData.description,
      colSpan: "col-span-2",
    },
    {
      id: "operatingHours",
      label: "Operating Hours",
      value: gymData.operatingHours,
      colSpan: "col-span-2",
    },
  ];

  return (
    <Card className="w-full shadow-md rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-[32px] font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
          Gym Information
        </CardTitle>
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 w-[147px]">
          <span className="font-bold">Upload Gym</span>
        </Button>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.id} className={`${field.colSpan}`}>
              <div className="mb-2 font-['Cairo-Regular',Helvetica] text-base">
                {field.label}
              </div>
              <div className="bg-[#e9ecef] rounded-lg p-4 min-h-[55px] font-['Cairo-Regular',Helvetica] text-sm">
                {field.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-4 pt-4">
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 w-[147px]">
          <span className="font-bold">Upload Picture</span>
        </Button>
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 w-[147px]">
          <span className="font-bold">Edit</span>
        </Button>
      </CardFooter>
    </Card>
  );
}