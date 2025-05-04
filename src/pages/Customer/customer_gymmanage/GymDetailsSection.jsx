import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function GymDetailsSection() {
  // Information data
  const gymInfo = {
    name: "FitLife Center",
    joinDate: "2023-01-01",
    totalVisits: "3,467",
    totalMembers: "68",
    operatingHours: "10:00 AM - 5:00 PM GMT",
    description:
      "A relaxing fitness center that focuses on helping you shape your mind and make you at ease.",
  };

  // Contact data
  const contactInfo = {
    address: "8th street, Briton, London, 8700",
    email: "fitlife.centralbriton@gmail.com",
    contactNo: "+63 956 654 6358",
    owner: "Heisenberg",
  };

  // Programs data
  const programs = ["Weight Training", "Cardio Improvement"];

  return (
    <div className="w-full max-w-[656px] bg-white rounded-xl shadow-[0px_4px_6px_#0000001a]">
      <div className="p-6">
        <h2 className="font-bold text-[#0b294b] text-2xl leading-9 mb-6">
          Gym Details
        </h2>

        <Card className="mb-4 bg-[#f8f9fa] border-none">
          <CardHeader className="pb-0 pt-5 px-6">
            <CardTitle className="font-semibold text-[#0b294b] text-lg leading-[27px]">
              Information
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pt-4 pb-5">
            <div className="grid grid-cols-2 gap-y-2">
              <div className="col-span-1">
                <div className="flex mb-2">
                  <span className="text-sm text-black font-normal">Name:</span>
                  <span className="text-sm text-[#666666] font-normal ml-[41px]">
                    {gymInfo.name}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="text-sm text-black font-normal">
                    Join Date:
                  </span>
                  <span className="text-sm text-[#666666] font-normal ml-[59px]">
                    {gymInfo.joinDate}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="text-sm text-black font-normal">
                    Total Visits:
                  </span>
                  <span className="text-sm text-[#666666] font-normal ml-[71px]">
                    {gymInfo.totalVisits}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="text-sm text-black font-normal">
                    Total Members:
                  </span>
                  <span className="text-sm text-[#666666] font-normal ml-[97px]">
                    {gymInfo.totalMembers}
                  </span>
                </div>

                <div className="flex">
                  <span className="text-sm text-black font-normal">
                    Operating Hours:
                  </span>
                  <span className="text-sm text-[#666666] font-normal ml-[102px]">
                    {gymInfo.operatingHours}
                  </span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="flex flex-col">
                  <span className="text-sm text-black font-normal">
                    Description:
                  </span>
                  <span className="text-sm text-[#666666] font-normal mt-[21px] max-w-[268px]">
                    {gymInfo.description}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-[#f8f9fa] border-none">
          <CardHeader className="pb-0 pt-5 px-6">
            <CardTitle className="font-semibold text-[#0b294b] text-lg leading-[27px]">
              Address and contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pt-4 pb-5">
            <div className="grid grid-cols-2 gap-y-2">
              <div className="col-span-1">
                <div className="flex mb-2">
                  <span className="text-sm text-black font-normal">
                    Address:
                  </span>
                  <span className="text-sm text-[#666666] font-normal ml-[53px]">
                    {contactInfo.address}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="text-sm text-black font-normal">Email:</span>
                  <span className="text-sm text-[#666666] font-normal ml-[39px]">
                    {contactInfo.email}
                  </span>
                </div>

                <div className="flex">
                  <span className="text-sm text-black font-normal">
                    Contact no.:
                  </span>
                  <span className="text-sm text-[#666666] font-normal ml-[71px]">
                    {contactInfo.contactNo}
                  </span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="flex">
                  <span className="text-sm text-black font-normal">Owner:</span>
                  <span className="text-sm text-[#666666] font-normal ml-12">
                    {contactInfo.owner}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#f8f9fa] border-none">
          <CardHeader className="pb-0 pt-5 px-6">
            <CardTitle className="font-semibold text-[#0b294b] text-lg leading-[27px]">
              Programs or equipments
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pt-4 pb-5">
            <div className="flex gap-2">
              {programs.map((program, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-[#e9ecef] text-black font-normal text-sm rounded-2xl px-3 py-1 border-none"
                >
                  {program}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}