import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const profileData = {
  name: "Dan Steven R. Leonardo",
  email: "leonardo.dansteven04@gmail.com",
  phone: "+63 951 939 3066",
  blog: "http://www.tumblr.com/systemforge",
  profileImage: "", // Placeholder for the profile image
};

const LeonardoProfileSection = () => {
  return (
    <Card className="w-full max-w-4xl border-none shadow-none">
      <CardContent className="flex p-4 gap-6">
        <Avatar className="h-64 w-64 rounded-md">
          <AvatarImage src={profileData.profileImage} alt="Profile" />
          <AvatarFallback className="bg-gray-300">
            <span className="sr-only">{profileData.name}</span>
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col justify-start">
          <h1 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
            {profileData.name}
          </h1>

          <div className="text-xl text-[#0b294b] space-y-1">
            <div className="flex items-start">
              <span className="font-bold font-['Cairo-Bold',Helvetica] mr-1">
                Gmail:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {profileData.email}
              </span>
            </div>

            <div className="flex items-start">
              <span className="font-bold font-['Cairo-Bold',Helvetica] mr-1">
                Contact No:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {profileData.phone}
              </span>
            </div>

            <div className="flex items-start">
              <span className="font-bold font-['Cairo-Bold',Helvetica] mr-1">
                Blog:
              </span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {profileData.blog}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeonardoProfileSection;