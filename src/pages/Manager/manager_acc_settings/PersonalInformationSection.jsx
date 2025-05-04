import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function PersonalInformationSection() {
  // Form field data
  const formFields = [
    { id: "fullName", label: "Full Name", value: "", gridArea: "col-span-1" },
    { id: "email", label: "Email Address", value: "", gridArea: "col-span-1" },
    { id: "phone", label: "Phone Number", value: "", gridArea: "col-span-1" },
    { id: "dob", label: "Date of Birth", value: "", gridArea: "col-span-1" },
  ];

  return (
    <Card className="w-full relative shadow-md rounded-xl">
      <CardContent className="p-8 pt-32">
        {/* Profile Picture */}
        <div className="absolute -top-24 left-8">
          <Avatar className="w-[206px] h-[206px] border-4 border-white">
            <AvatarFallback className="bg-[#f5f5f5] text-[#0b294b]">
              <div className="w-32 h-16 rounded-t-full bg-[#0b294b] mt-16"></div>
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Sign Out Button */}
        <div className="absolute top-7 right-8">
          <Button
            className="bg-[#0b294b] hover:bg-[#0b294b]/90 text-white rounded-[10px] h-[37px] w-[133px]"
            size="lg"
          >
            <span className="font-normal text-2xl">Sign Out</span>
          </Button>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-9">
            Personal Information
          </h2>

          <Button className="bg-[#0b294b] hover:bg-[#0b294b]/90 text-white rounded-lg h-12 w-[127px]">
            <span className="font-semibold text-base font-['Cairo-SemiBold',Helvetica]">
              Edit Profile
            </span>
          </Button>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {formFields.map((field) => (
            <div
              key={field.id}
              className={`flex flex-col gap-2 ${field.gridArea}`}
            >
              <label
                htmlFor={field.id}
                className="font-normal text-sm text-black font-['Cairo-Regular',Helvetica] leading-[21px]"
              >
                {field.label}
              </label>
              <Input
                id={field.id}
                defaultValue={field.value}
                className="h-[55px] bg-[#e9ecef] border-white rounded-lg"
                disabled
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}