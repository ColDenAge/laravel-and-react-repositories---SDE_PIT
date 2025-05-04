import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import React from "react";

export default function Selection() {
  // Form data for the sign-up fields
  const formFields = [
    {
      id: "email",
      label: "Email",
      placeholder: "Enter email address",
      type: "email",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Enter password",
      type: "password",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#d9d9d9]">
      <div className="relative h-full w-full">
        {/* Background image on the left */}
        <div className="absolute left-0 top-0 h-full w-[40%] bg-gradient-to-br from-[#0b294b] to-[#1a4a7c]"></div>

        {/* Main card */}
        <Card className="absolute left-1/2 top-1/2 w-[80%] max-w-[1328px] -translate-x-1/2 -translate-y-1/2 rounded-[45px] bg-white p-6 shadow-lg md:h-[758px]">
          <div className="flex h-full flex-col md:flex-row">
            {/* Left side with form */}
            <div className="flex flex-1 flex-col p-6">
              {/* Logo/Title */}
              <div className="mb-12 text-center md:text-left">
                <h1 className="font-['Cairo-Bold',Helvetica] text-5xl font-bold text-[#0b294b]">
                  GymWatch
                </h1>
              </div>

              {/* Sign up form */}
              <div className="mx-auto max-w-[455px] md:mx-0">
                <h2 className="mb-8 font-['Cairo-Medium',Helvetica] text-[32px] font-medium">
                  Sign Up
                </h2>

                <form className="space-y-6">
                  {formFields.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label
                        htmlFor={field.id}
                        className="font-['Cairo-Regular',Helvetica] text-xl text-black"
                      >
                        {field.label}
                      </label>
                      <div className="relative">
                        <Input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="h-12 rounded-[45px] bg-[#d9d9d9] pl-8 font-['Cairo-Regular',Helvetica] text-xl text-[#666666]"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Error message */}
                  <div className="h-6 text-center">
                    <p className="font-['Cairo-Regular',Helvetica] text-[13px] text-[#ff1818]">
                      *Invalid inputs, please try again.
                    </p>
                  </div>

                  {/* Create Account button */}
                  <Button className="mx-auto mt-4 block h-[45px] w-[232px] rounded-[10px] bg-[#0b294b] font-['Fredoka-Medium',Helvetica] text-xl font-medium">
                    Create Account
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative my-8 flex items-center">
                  <Separator className="flex-grow" />
                  <span className="mx-4 bg-white px-4 font-['Cairo-Regular',Helvetica] text-xl">
                    OR
                  </span>
                  <Separator className="flex-grow" />
                </div>

                {/* Social login */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-[46px] rounded-full"
                  >
                    <Mail className="h-6 w-6 text-red-500" />
                  </Button>
                </div>

                {/* Already a user link */}
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="font-['Cairo-Regular',Helvetica] text-xl underline"
                  >
                    Already a user?
                  </a>
                </div>
              </div>
            </div>

            {/* Right side with image */}
            <div className="relative hidden flex-1 md:block">
              <div className="absolute right-0 top-[99px] h-[659px] w-[345px] overflow-hidden">
                <img
                  src=""
                  alt="Fitness person"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}