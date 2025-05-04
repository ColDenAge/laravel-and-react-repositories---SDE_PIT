import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import React from "react";

export default function Selection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-slate-600 to-slate-400">
      <div className="flex items-center justify-center min-h-screen">
        <Card className="relative w-full max-w-[1328px] h-[758px] rounded-[45px] overflow-hidden">
          <CardContent className="p-0">
            {/* Left side with login form */}
            <div className="absolute top-[19px] left-12">
              <h1 className="font-bold text-5xl text-[#0b294b] font-['Cairo-Bold',Helvetica] text-center">
                GymWatch
              </h1>
            </div>

            <div className="absolute w-[455px] h-[313px] top-[161px] left-[249px]">
              <div className="absolute w-[461px] h-[236px] top-0 left-0">
                <h2 className="absolute w-[200px] h-[50px] top-0 left-0 font-medium text-[32px] font-['Cairo-Medium',Helvetica] text-black">
                  Login
                </h2>

                {/* Email field */}
                <div className="absolute w-[455px] h-[85px] top-[58px] left-0">
                  <label className="w-[79px] left-[21px] font-normal text-xl font-['Cairo-Regular',Helvetica] text-black absolute top-0">
                    Email
                  </label>
                  <div className="relative h-12 top-[37px] bg-[#d9d9d9] rounded-[45px]">
                    <Input
                      className="relative w-full h-[37px] top-1 left-[33px] bg-transparent font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="absolute w-[455px] h-[85px] top-[151px] left-0">
                  <label className="w-[120px] left-[21px] font-normal text-xl font-['Cairo-Regular',Helvetica] text-black absolute top-0">
                    Password
                  </label>
                  <div className="relative h-12 top-[37px] bg-[#d9d9d9] rounded-[45px]">
                    <Input
                      type="password"
                      className="relative w-full h-[37px] top-1 left-[33px] bg-transparent font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-xl border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </div>

              {/* Error message */}
              <div className="h-6 top-60 left-[121px] absolute w-[211px]">
                <div className="absolute w-[211px] -top-px left-0 font-normal text-[13px] font-['Cairo-Regular',Helvetica] text-[#ff1818]">
                  *Invalid inputs, please try again.
                </div>
              </div>

              {/* Login button */}
              <Button className="absolute w-[232px] h-[45px] top-[268px] left-28 bg-[#0b294b] rounded-[10px] hover:bg-[#0b294b]/90">
                <span className="font-medium text-xl text-center font-['Fredoka-Medium',Helvetica]">
                  Login
                </span>
              </Button>
            </div>

            {/* Divider with OR */}
            <div className="absolute w-[457px] h-[37px] top-[485px] left-[250px]">
              <div className="relative w-[455px] h-[37px]">
                <Separator className="absolute w-[455px] h-[3px] top-[18px] left-0" />
                <div className="absolute w-[69px] h-8 top-[3px] left-48 bg-white" />
                <div className="w-[81px] top-0 left-[186px] font-normal text-xl text-center font-['Cairo-Regular',Helvetica] text-black absolute h-[37px]">
                  OR
                </div>
              </div>
            </div>

            {/* Gmail button */}
            <Button
              variant="ghost"
              className="absolute w-[46px] h-11 top-[533px] left-[455px] p-0"
            >
              <Mail className="w-full h-full text-red-500" />
            </Button>

            {/* Links */}
            <div className="top-[588px] left-[352px] absolute w-[250px] h-[37px]">
              <a
                href="#"
                className="-top-px left-0 font-normal text-xl text-center font-['Cairo-Regular',Helvetica] text-black underline absolute w-[250px] h-[37px]"
              >
                Don&apos;t have an account yet?
              </a>
            </div>

            <div className="absolute w-[250px] h-[37px] top-[636px] left-[352px]">
              <a
                href="#"
                className="absolute w-[250px] h-[37px] -top-px left-0 font-normal text-xl text-center font-['Cairo-Regular',Helvetica] text-black underline"
              >
                Forgot your password?
              </a>
            </div>

            {/* Right side image */}
            <img
              className="absolute w-[345px] h-[659px] top-[99px] left-[863px]"
              alt="Woman with water bottle"
              src=""
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}