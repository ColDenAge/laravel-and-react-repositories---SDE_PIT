import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function PersonalInformationSection() {
  // User data that can be mapped through
  const userData = {
    fullName: "Jayden Smith Augustus",
    email: "example.address@gmail.com",
    phone: "+63 696 969 6969",
    dateOfBirth: "12/7/2003",
    height: "150",
    weight: "69",
  };

  // Form fields configuration
  const formFields = [
    { id: "fullName", label: "Full Name", value: userData.fullName },
    { id: "email", label: "Email Address", value: userData.email },
    { id: "phone", label: "Phone Number", value: userData.phone },
    { id: "dateOfBirth", label: "Date of Birth", value: userData.dateOfBirth },
    { id: "height", label: "Height (cm)", value: userData.height },
    { id: "weight", label: "Weight (kg)", value: userData.weight },
  ];

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-[#0b294b] text-white">
            JS
          </AvatarFallback>
        </Avatar>
        <Button className="bg-[#0b294b] text-white font-normal text-2xl h-[37px] rounded-[10px]">
          Sign Out
        </Button>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-9">
            Personal Information
          </h2>
          <Button className="bg-[#0b294b] text-white h-12 rounded-lg font-['Cairo-SemiBold',Helvetica] font-semibold">
            Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <label
                htmlFor={field.id}
                className="block font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px]"
              >
                {field.label}
              </label>
              <Input
                id={field.id}
                defaultValue={field.value}
                readOnly
                className="h-[55px] bg-[#e9ecef] border-white rounded-lg font-['Cairo-Regular',Helvetica] text-sm text-black leading-[21px] px-5 py-[15px]"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}