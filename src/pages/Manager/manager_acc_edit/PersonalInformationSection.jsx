import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function PersonalInformationSection() {
  // Data for form fields
  const formFields = [
    { id: "fullName", label: "Full Name", value: "", gridArea: "col-span-1" },
    { id: "email", label: "Email Address", value: "", gridArea: "col-span-1" },
    { id: "phone", label: "Phone Number", value: "", gridArea: "col-span-1" },
    { id: "dob", label: "Date of Birth", value: "", gridArea: "col-span-1" },
  ];

  return (
    <Card className="w-full shadow-md rounded-xl">
      <CardContent className="p-8 relative">
        {/* Profile Picture */}
        <div className="absolute -top-[103px] left-8">
          <Avatar className="w-[206px] h-[206px] bg-[#e9ecef] rounded-[100px] flex items-center justify-center">
            <span className="font-bold text-2xl text-[#0b294b] [font-family:'Cairo-Bold',Helvetica]">
              Upload a picture
            </span>
          </Avatar>
        </div>

        {/* Sign Out Button */}
        <div className="flex justify-end mb-12">
          <Button className="bg-[#0b294b] text-white rounded-[10px] h-[37px] w-[133px] mt-4">
            <span className="[font-family:'Fredoka-Regular',Helvetica] text-2xl">
              Sign Out
            </span>
          </Button>
        </div>

        {/* Section Title and Action Buttons */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl leading-9">
            Personal Information
          </h2>
          <div className="flex gap-4">
            <Button className="bg-[#0b294b] rounded-lg h-12 w-[127px]">
              <span className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-white text-base">
                Cancel
              </span>
            </Button>
            <Button className="bg-[#0b294b] rounded-lg h-12 w-[127px]">
              <span className="[font-family:'Cairo-SemiBold',Helvetica] font-semibold text-white text-base">
                Save Changes
              </span>
            </Button>
          </div>
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
                className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-sm leading-[21px]"
              >
                {field.label}
              </label>
              <Input
                id={field.id}
                defaultValue={field.value}
                className="bg-[#e9ecef] h-[55px] rounded-lg border border-solid border-white"
                disabled
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}