import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function BillingReviewSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left side with images */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative">
            {/* Background wave/layout image */}
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-tr from-blue-100/80 to-blue-200/40 rounded-3xl z-0"></div>

            {/* Dashboard/UI image */}
            <Card className="relative z-10 shadow-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src=""
                  alt="Payment dashboard interface"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side with text content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:pl-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-tight">
            Check your payment informations
          </h2>

          <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica] leading-relaxed">
            View your overall payments and checks, along with able to control
            how you can pay for membership. Automatic notifications will be sent
            regarding about deadlines and membership information.
          </p>
        </div>
      </div>
    </section>
  );
}