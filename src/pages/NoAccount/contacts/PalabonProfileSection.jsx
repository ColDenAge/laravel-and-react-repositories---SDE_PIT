import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const PalabonProfileSection = () => {
  // Profile data
  const profileData = {
    name: "Denver Jay B. Palabon",
    email: "palabon.denverjay@gmail.com",
    contactNo: "+63 975 909 0034",
    blog: "https://www.tumblr.com/blog/gymprojectsystem",
    image: "", // Placeholder for image path
  };

  return (
    <Card className="w-full flex flex-row justify-between p-4 border-none shadow-none">
      <CardContent className="flex flex-col items-end justify-center p-0 space-y-6">
        <h1 className="text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
          {profileData.name}
        </h1>

        <div className="text-xl text-right text-[#0b294b]">
          <p className="mb-1">
            <span className="font-['Cairo-Bold',Helvetica] font-bold">
              Gmail:
            </span>
            <span className="font-['Cairo-Regular',Helvetica]">
              {" "}
              {profileData.email}
            </span>
          </p>
          <p className="mb-1">
            <span className="font-['Cairo-Bold',Helvetica] font-bold">
              Contact No:
            </span>
            <span className="font-['Cairo-Regular',Helvetica]">
              {" "}
              {profileData.contactNo}
            </span>
          </p>
          <p>
            <span className="font-['Cairo-Bold',Helvetica] font-bold">
              Blog:
            </span>
            <span className="font-['Cairo-Regular',Helvetica]">
              {" "}
              {profileData.blog}
            </span>
          </p>
        </div>
      </CardContent>

      <Avatar className="h-64 w-64 rounded-none">
        <AvatarImage src={profileData.image} alt="Profile" />
        <AvatarFallback className="bg-gray-200">DP</AvatarFallback>
      </Avatar>
    </Card>
  );
};

export default PalabonProfileSection;