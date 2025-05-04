import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const profileData = {
  name: "Jelord G. Seguis",
  email: "seguisjelord@gmail.com",
  contactNo: "+63 963 956 8548",
  profileImage: "", // Placeholder for the profile image
};

export default function SeguisProfileSection() {
  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="flex p-4 gap-6 items-center">
        <Avatar className="h-64 w-64 rounded-none">
          <AvatarImage src={profileData.profileImage} alt="Profile" />
          <AvatarFallback className="bg-gray-200 text-gray-400">
            JGS
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
            {profileData.name}
          </h1>

          <div className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica] mt-4">
            <p>
              <span className="font-['Cairo-Bold',Helvetica] font-bold">
                Gmail:
              </span>{" "}
              {profileData.email}
            </p>
            <p>
              <span className="font-['Cairo-Bold',Helvetica] font-bold">
                Contact No:
              </span>{" "}
              {profileData.contactNo}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}