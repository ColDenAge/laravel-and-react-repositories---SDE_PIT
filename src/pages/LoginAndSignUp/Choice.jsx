import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Choice() {
  return (
    <div className="bg-[#d9d9d9] flex justify-center items-center w-full h-screen">
      <div className="relative w-full max-w-[1920px] h-full">
        <div className="relative w-full h-full">
          {/* Background image on the left */}
          <div className="absolute w-[659px] h-full top-0 left-0 bg-gradient-to-r from-[#0b294b] to-[#1e3a5f]">
            <img
              className="w-full h-full object-cover opacity-50"
              alt="Background signup"
              src=""
            />
          </div>

          {/* Main card */}
          <Card className="absolute w-[1328px] h-[758px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/4 rounded-[45px] shadow-lg">
            <CardContent className="p-0 h-full relative">
              {/* App title */}
              <h1 className="absolute top-5 left-12 font-bold text-5xl text-[#0b294b] [font-family:'Cairo-Bold',Helvetica]">
                GymWatch
              </h1>

              {/* Right side image */}
              <img
                className="absolute w-[345px] h-[659px] top-[99px] right-[120px]"
                alt="Fitness person"
                src=""
              />

              {/* Choice section */}
              <div className="absolute w-[284px] top-[252px] left-[380px] flex flex-col items-center">
                <h2 className="w-full text-[32px] text-center mb-10 [font-family:'Cairo-Medium',Helvetica] font-medium">
                  Choose:
                </h2>

                <Button className="w-[232px] h-[45px] mb-10 bg-[#0b294b] rounded-[10px] hover:bg-[#163d6e] [font-family:'Fredoka-Medium',Helvetica] font-medium text-xl">
                  Gym Customer
                </Button>

                <Button className="w-[232px] h-[45px] bg-[#0b294b] rounded-[10px] hover:bg-[#163d6e] [font-family:'Fredoka-Medium',Helvetica] font-medium text-xl">
                  Gym Manager
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}