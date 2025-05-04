import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

export default function GymInfoSection() {
  // Data for the gym information
  const gymData = {
    name: "Placeholder Fitness Gym",
    address: "19th Street Negro, New Zealand",
    phone: "+63 360 420 6969",
    email: "test.email@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu erat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin congue sagittis leo vel tempor. Praesent a purus a libero semper pulvinar. Fusce quam sem, venenatis a egestas non, commodo et dolor. Nulla facilisi. Nullam finibus sem sit amet bibendum suscipit. Nunc sit amet sagittis ligula. Donec sodales sollicitudin dolor sed aliquam. Nunc commodo nulla eget risus congue sodales.",
    operatingHours: "8:00 AM - 4:30 PM GMT",
  };

  return (
    <Card className="w-full shadow-md rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-[32px] font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
          Gym Information
        </CardTitle>
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 w-[147px]">
          Upload Gym
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Gym Name */}
          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] text-base">
              Gym Name
            </Label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm">
                {gymData.name}
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] text-base">
              Address
            </Label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm">
                {gymData.address}
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] text-base">
              Phone
            </Label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm">
                {gymData.phone}
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="font-['Cairo-Regular',Helvetica] text-base">
              Email
            </Label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm">
                {gymData.email}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label className="font-['Cairo-Regular',Helvetica] text-base">
            Description
          </Label>
          <div className="bg-[#e9ecef] rounded-lg p-3 min-h-[100px]">
            <p className="font-['Cairo-Regular',Helvetica] text-sm leading-[21px]">
              {gymData.description}
            </p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="space-y-2">
          <Label className="font-['Cairo-Regular',Helvetica] text-base">
            Operating Hours
          </Label>
          <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
            <span className="font-['Cairo-Regular',Helvetica] text-sm">
              {gymData.operatingHours}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-4 pt-4">
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 w-[147px]">
          Upload Picture
        </Button>
        <Button className="bg-[#0b294b] text-white font-['Cairo-Bold',Helvetica] h-12 w-[147px]">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}