import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const SeguisProfileSection = () => {
  const profileData = {
    name: "Jelord G. Seguis",
    email: "seguisjelord@gmail.com",
    phone: "+63 963 956 8548",
    image: "./profile-pic3.png",
  };

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="flex p-4 gap-6 items-center">
        <Avatar className="h-64 w-64 rounded-none">
          <AvatarImage src={profileData.image} alt="Profile" />
          <AvatarFallback className="bg-slate-200">JS</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
            {profileData.name}
          </h1>

          <div className="text-xl text-[#0b294b] mt-4">
            <p className="mb-1">
              <span className="font-bold font-['Cairo-Bold',Helvetica]">
                Gmail:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {" "}
                {profileData.email}
              </span>
            </p>
            <p>
              <span className="font-bold font-['Cairo-Bold',Helvetica]">
                Contact No:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {" "}
                {profileData.phone}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeguisProfileSection;