import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function ChangePw() {
  return (
    <div className="bg-[#d9d9d9] flex justify-center items-center w-full min-h-screen">
      <div className="relative w-full max-w-[1920px] h-[1080px]">
        {/* Background image on the left */}
        <div className="absolute w-[659px] h-full top-0 left-0">
          <img
            className="w-full h-full object-cover"
            alt="Background signup"
            src=""
          />
        </div>

        {/* Main card */}
        <Card className="absolute w-[1328px] h-[758px] top-[161px] left-[296px] rounded-[45px] shadow-lg overflow-hidden">
          <CardContent className="p-0 h-full relative">
            {/* App title */}
            <div className="absolute top-[19px] left-12 font-bold text-[#0b294b] text-5xl text-center font-['Cairo-Bold',Helvetica]">
              GymWatch
            </div>

            {/* Form section */}
            <div className="absolute w-[455px] h-[313px] top-[222px] left-[249px]">
              <div className="w-[284px] h-[50px] font-medium text-black text-[32px] font-['Cairo-Medium',Helvetica]">
                Enter new password
              </div>

              {/* New Password field */}
              <div className="mt-8">
                <div className="font-normal text-black text-xl font-['Cairo-Regular',Helvetica] mb-2 ml-[21px]">
                  New Password
                </div>
                <div className="relative">
                  <Input
                    className="h-12 bg-[#d9d9d9] rounded-[45px] pl-10 font-normal text-[#666666] text-xl font-['Cairo-Regular',Helvetica] border-0"
                    placeholder="Enter password"
                    type="password"
                  />
                </div>
              </div>

              {/* Confirm New Password field */}
              <div className="mt-6">
                <div className="font-normal text-black text-xl font-['Cairo-Regular',Helvetica] mb-2 ml-[21px]">
                  Confirm New Password
                </div>
                <div className="relative">
                  <Input
                    className="h-12 bg-[#d9d9d9] rounded-[45px] pl-10 font-normal text-[#666666] text-xl font-['Cairo-Regular',Helvetica] border-0"
                    placeholder="Enter password"
                    type="password"
                  />
                </div>
              </div>

              {/* Confirm button */}
              <Button className="mt-8 w-[232px] h-[45px] bg-[#0b294b] rounded-[10px] text-white text-xl font-medium font-['Fredoka-Medium',Helvetica] mx-auto block">
                Confirm
              </Button>
            </div>

            {/* Right side image */}
            <div className="absolute right-[120px] top-[99px]">
              <img
                className="w-[345px] h-[659px] object-cover"
                alt="Fitness person"
                src=""
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}