import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function GymInfoSection() {
  // Data for the form fields
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
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[32px] font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-[48px]">
            Gym Information
          </h2>
          <Button className="bg-[#0b294b] text-white h-12 w-[147px] rounded-lg font-['Cairo-Bold',Helvetica] font-bold">
            Upload Gym
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {/* Gym Name */}
          <div className="flex flex-col gap-2">
            <label className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
              Gym Name
            </label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px]">
                {gymData.name}
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
              Address
            </label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px]">
                {gymData.address}
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
              Phone
            </label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px]">
                {gymData.phone}
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
              Email
            </label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px]">
                {gymData.email}
              </span>
            </div>
          </div>

          {/* Description - spans full width */}
          <div className="flex flex-col gap-2 col-span-2">
            <label className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
              Description
            </label>
            <div className="bg-[#e9ecef] rounded-lg p-3 min-h-[100px]">
              <p className="font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px]">
                {gymData.description}
              </p>
            </div>
          </div>

          {/* Operating Hours - spans full width */}
          <div className="flex flex-col gap-2 col-span-2">
            <label className="font-['Cairo-Regular',Helvetica] text-black text-base leading-6">
              Operating Hours
            </label>
            <div className="bg-[#e9ecef] rounded-lg h-[55px] flex items-center px-4">
              <span className="font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px]">
                {gymData.operatingHours}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <Button className="bg-[#0b294b] text-white h-12 w-[147px] rounded-lg font-['Cairo-Bold',Helvetica] font-bold">
            Upload Picture
          </Button>
          <Button className="bg-[#0b294b] text-white h-12 w-[147px] rounded-lg font-['Cairo-Bold',Helvetica] font-bold">
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}