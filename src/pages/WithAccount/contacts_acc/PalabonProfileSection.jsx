import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function PalabonProfileSection() {
  const profileData = {
    name: "Denver Jay B. Palabon",
    email: "palabon.denverjay@gmail.com",
    contactNo: "+63 975 909 0034",
    blog: "https://www.tumblr.com/blog/gymprojectsystem",
    image: "", // Placeholder for the image path
  };

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="flex flex-row justify-between items-center p-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
            {profileData.name}
          </h1>

          <div className="text-[#0b294b] space-y-1">
            <p className="flex">
              <span className="font-bold font-['Cairo-Bold',Helvetica] mr-2">
                Gmail:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {profileData.email}
              </span>
            </p>

            <p className="flex">
              <span className="font-bold font-['Cairo-Bold',Helvetica] mr-2">
                Contact No:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {profileData.contactNo}
              </span>
            </p>

            <p className="flex">
              <span className="font-bold font-['Cairo-Bold',Helvetica] mr-2">
                Blog:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {profileData.blog}
              </span>
            </p>
          </div>
        </div>

        <Avatar className="h-64 w-64 rounded-md">
          <AvatarImage src={profileData.image} alt="Profile" />
          <AvatarFallback className="bg-gray-200">
            <div className="text-4xl text-gray-400">PB</div>
          </AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
}