import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function ForgotPassword() {
  return (
    <div className="bg-[#d9d9d9] flex justify-center w-full min-h-screen">
      <div className="relative w-full max-w-[1920px] h-screen">
        {/* Background image on the left */}
        <div className="absolute w-[659px] h-full top-0 left-0">
          <img className="w-full h-full object-cover" alt="Background" src="" />
        </div>

        {/* Main card */}
        <Card className="absolute w-[1328px] h-[758px] top-[161px] left-[296px] rounded-[45px] shadow-none border-none">
          <CardContent className="p-0 h-full relative">
            {/* Brand name */}
            <div className="absolute w-[239px] h-[89px] top-[19px] left-12 font-bold text-[#0b294b] text-5xl text-center [font-family:'Cairo-Bold',Helvetica]">
              GymWatch
            </div>

            {/* Form section */}
            <div className="absolute w-[455px] h-[244px] top-[207px] left-[249px]">
              <div className="absolute w-[459px] h-[153px] top-0 left-0">
                <h1 className="absolute w-[254px] h-[50px] top-0 left-0 [font-family:'Cairo-Medium',Helvetica] font-medium text-black text-[32px]">
                  Forgot Password
                </h1>

                <div className="absolute w-[455px] h-[85px] top-[68px] left-0">
                  <Label
                    htmlFor="email"
                    className="w-[79px] left-[21px] [font-family:'Cairo-Regular',Helvetica] font-normal text-black text-xl absolute top-0"
                  >
                    Email
                  </Label>

                  <div className="relative h-12 top-[37px] bg-[#d9d9d9] rounded-[45px]">
                    <Input
                      id="email"
                      className="relative w-full h-[37px] top-1 left-[33px] bg-transparent [font-family:'Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl border-0 p-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
              </div>

              {/* Error message */}
              <div className="h-6 top-[164px] left-28 absolute w-[211px]">
                <div className="-top-px left-0 [font-family:'Cairo-Regular',Helvetica] font-normal text-[#ff1818] text-[13px] absolute w-[211px]">
                  *Invalid email, please try again.
                </div>
              </div>

              {/* Submit button */}
              <Button className="absolute w-[232px] h-[45px] top-[199px] left-28 bg-[#0b294b] rounded-[10px] hover:bg-[#0b294b]/90">
                <span className="[font-family:'Fredoka-Medium',Helvetica] font-medium text-white text-xl">
                  Send
                </span>
              </Button>
            </div>

            {/* Right side image */}
            <img
              className="absolute w-[345px] h-[659px] top-[99px] right-[120px]"
              alt="Fitness person"
              src=""
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}