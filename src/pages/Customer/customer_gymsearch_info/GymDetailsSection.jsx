import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import React from "react";

const GymDetailsSection = () => {
  // Gym information data
  const gymInfo = [
    { label: "Name:", value: "FitLife Center" },
    { label: "Gym ID:", value: "GYM-0637-NOV-2023" },
    { label: "Join Date:", value: "2023-01-01" },
    { label: "Total Visits:", value: "3,467" },
    { label: "Total members:", value: "68" },
  ];

  // Contact information data
  const contactInfo = [
    { label: "Address:", value: "8th street, Briton, London, 8700" },
    { label: "Email:", value: "fitlife.centralbriton@gmail.com" },
    { label: "Contact no.:", value: "+63 956 654 6358" },
  ];

  // Programs data
  const programs = ["Weight Training", "Cardio Improvement"];

  return (
    <Dialog defaultOpen>
      <DialogContent className="w-[656px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
            Gym Details
          </DialogTitle>
          <DialogClose className="absolute right-6 top-5 text-[#666666] text-2xl">
            <X className="h-6 w-6" />
          </DialogClose>
        </DialogHeader>

        <div className="p-6 space-y-4">
          {/* Information Section */}
          <Card className="bg-[#f8f9fa] border-0 shadow-none">
            <CardHeader className="pb-0 pt-5 px-6">
              <CardTitle className="text-lg font-semibold text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-6 pb-5">
              <div className="space-y-[8px]">
                {gymInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <span className="text-sm font-normal text-black font-['Cairo-Regular',Helvetica]">
                      {item.label}
                    </span>
                    <span className="text-sm font-normal text-[#666666] ml-2 font-['Cairo-Regular',Helvetica]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Address and Contacts Section */}
          <Card className="bg-[#f8f9fa] border-0 shadow-none">
            <CardHeader className="pb-0 pt-5 px-6">
              <CardTitle className="text-lg font-semibold text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                Address and contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-6 pb-5">
              <div className="space-y-[8px]">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <span className="text-sm font-normal text-black font-['Cairo-Regular',Helvetica]">
                      {item.label}
                    </span>
                    <span className="text-sm font-normal text-[#666666] ml-2 font-['Cairo-Regular',Helvetica]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Programs Section */}
          <Card className="bg-[#f8f9fa] border-0 shadow-none">
            <CardHeader className="pb-0 pt-5 px-6">
              <CardTitle className="text-lg font-semibold text-[#0b294b] font-['Cairo-SemiBold',Helvetica]">
                Programs or equipments
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-6 pb-5">
              <div className="flex gap-2">
                {programs.map((program, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#e9ecef] text-black rounded-2xl px-3 py-1 font-normal font-['Cairo-Regular',Helvetica]"
                  >
                    {program}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GymDetailsSection;