import React from "react";

export default function SimplificationSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 max-w-[706px]">
          <h2 className="text-[#0b294b] font-bold text-5xl font-['Cairo-Bold',Helvetica] mb-6">
            Simplify the process of your gym
          </h2>
          <p className="text-[#0b294b] text-xl font-normal font-['Cairo-Regular',Helvetica]">
            Easily enroll and streamline the membership registration of your
            gym, allowing sign-ups members and prospects online or through an
            in-person kiosk, using a laptop, tablet or mobile device.
          </p>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative">
            {/* Background layout image */}
            <img
              className="w-full h-auto object-cover"
              alt="Bg layout"
              src=""
            />

            {/* Main image overlaid on top */}
            <img
              className="w-full h-auto object-cover absolute top-0 left-0"
              alt="Gym registration interface"
              src=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}