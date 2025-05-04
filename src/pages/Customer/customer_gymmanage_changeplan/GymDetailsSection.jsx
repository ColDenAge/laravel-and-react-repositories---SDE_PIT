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

  // Address and contacts data
  const contactInfo = {
    address: "8th street, Briton, London, 8700",
    email: "fitlife.centralbriton@gmail.com",
    contactNo: "+63 956 654 6358",
    owner: "Heisenberg",
  };

  // Programs data
  const programs = ["Weight Training", "Cardio Improvement"];

  return (
    <Card className="w-full max-w-[656px] shadow-[0px_4px_6px_#0000001a] rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-9">
          Gym Details
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Information Section */}
        <Card className="bg-[#f8f9fa] border-none">
          <CardContent className="pt-5">
            <h3 className="font-['Cairo-SemiBold',Helvetica] font-semibold text-[#0b294b] text-lg leading-[27px] mb-4">
              Information
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="col-span-1">
                <div className="flex mb-2">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Name:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[41px]">
                    {gymInfo.name}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Join Date:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[59px]">
                    {gymInfo.joinDate}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Total Visits:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[71px]">
                    {gymInfo.totalVisits}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Total Members:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[97px]">
                    {gymInfo.totalMembers}
                  </span>
                </div>

                <div className="flex">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Operating Hours:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[102px]">
                    {gymInfo.operatingHours}
                  </span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="flex flex-col">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black mb-[21px]">
                    Description:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] max-w-[268px]">
                    {gymInfo.description}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address and Contacts Section */}
        <Card className="bg-[#f8f9fa] border-none">
          <CardContent className="pt-5">
            <h3 className="font-['Cairo-SemiBold',Helvetica] font-semibold text-[#0b294b] text-lg leading-[27px] mb-4">
              Address and contacts
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="col-span-1">
                <div className="flex mb-2">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Address:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[53px]">
                    {contactInfo.address}
                  </span>
                </div>

                <div className="flex mb-2">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Email:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[39px]">
                    {contactInfo.email}
                  </span>
                </div>

                <div className="flex">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Contact no.:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-[71px]">
                    {contactInfo.contactNo}
                  </span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="flex">
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    Owner:
                  </span>
                  <span className="font-['Cairo-Regular',Helvetica] text-sm text-[#666666] ml-12">
                    {contactInfo.owner}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Programs Section */}
        <Card className="bg-[#f8f9fa] border-none">
          <CardContent className="pt-5">
            <h3 className="font-['Cairo-SemiBold',Helvetica] font-semibold text-[#0b294b] text-lg leading-[27px] mb-4">
              Programs or equipments
            </h3>

            <div className="flex gap-2">
              {programs.map((program, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[#e9ecef] text-black rounded-2xl h-[29px] px-3 font-['Cairo-Regular',Helvetica] font-normal"
                >
                  {program}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}