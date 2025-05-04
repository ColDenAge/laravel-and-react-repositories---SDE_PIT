import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const LeonardoProfileSection = () => {
  // Profile data
  const profileData = {
    name: "Dan Steve R. Leonardo",
    email: "leonardo.dansteven04@gmail.com",
    contactNo: "+63 951 939 3066",
    blog: "http://www.tumblr.com/systemforge",
    profileImage: "", // Placeholder for profile image
  };

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="flex p-4 gap-6">
        <Avatar className="h-64 w-64 rounded-none">
          <AvatarImage src={profileData.profileImage} alt="Profile" />
          <AvatarFallback className="bg-gray-300 rounded-none">
            <div className="w-full h-full bg-gray-300"></div>
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
            {profileData.name}
          </h1>

          <div className="text-xl text-[#0b294b] font-['Cairo-Bold',Helvetica]">
            <p className="mb-1">
              <span className="font-bold">Gmail:</span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {" "}
                {profileData.email}
              </span>
            </p>
            <p className="mb-1">
              <span className="font-bold">Contact No:</span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {" "}
                {profileData.contactNo}
              </span>
            </p>
            <p>
              <span className="font-bold">Blog:</span>
              <span className="font-['Cairo-Regular',Helvetica]">
                {" "}
                {profileData.blog}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeonardoProfileSection;