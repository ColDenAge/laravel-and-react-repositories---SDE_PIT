import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function SimplificationSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] mb-6">
            Simplify the process of your gym
          </h2>
          <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica]">
            Easily enroll and streamline the membership registration of your
            gym, allowing sign-ups members and prospects online or through an
            in-person kiosk, using a laptop, tablet or mobile device.
          </p>
        </div>

        <div className="relative w-full md:w-auto">
          <Card className="relative z-10 bg-white shadow-md">
            <CardContent className="p-0">
              <img
                src=""
                alt="Gym membership registration interface"
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
          <div className="absolute -z-0 bottom-0 right-0 transform translate-x-16 translate-y-16">
            <img
              src=""
              alt="Background decoration"
              className="w-full h-auto object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}