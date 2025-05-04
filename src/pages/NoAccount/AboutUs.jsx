import { Button } from "@/components/ui/button";
import React from "react";

export default function AboutUs() {
  // Navigation menu items data
  const navItems = [
    { name: "Home", href: "#", active: false },
    { name: "Features", href: "#", active: false },
    { name: "FAQs", href: "#", active: false },
    { name: "About Us", href: "#", active: true },
    { name: "Contact", href: "#", active: false },
    { name: "Login", href: "#", active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full min-h-screen relative">
        {/* Background image */}
        <div className="absolute top-0 right-0 h-full w-[566px]">
          <img
            className="h-full w-full object-cover"
            alt="Wolf background"
            src=""
          />
        </div>

        {/* Navigation bar */}
        <header className="w-full h-36 bg-[#d9d9d9] relative z-10">
          <div className="max-w-[1920px] mx-auto px-4 h-full flex items-center justify-between">
            {/* Logo section */}
            <div className="flex flex-col items-center">
              <img
                className="w-[104px] h-[104px] object-cover"
                alt="Logo"
                src=""
              />
              <div className="font-bold text-black text-2xl text-center [font-family:'Kode_Mono-Bold',Helvetica]">
                ByteMinds Systems
              </div>
            </div>

            {/* Navigation items */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-normal text-2xl text-center whitespace-nowrap w-[139px] [font-family:'Fredoka-Regular',Helvetica] ${
                    item.active ? "text-[#363a3f]" : "text-black"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-[133px] h-[37px] bg-[#0b294b] rounded-[10px] [font-family:'Fredoka-Regular',Helvetica] font-normal text-white text-2xl">
                Sign Up
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="relative z-10 max-w-[1920px] mx-auto px-4">
          <section className="max-w-[1110px] mt-[238px] ml-[182px]">
            <h1 className="text-5xl font-bold text-[#0b294b] [font-family:'Cairo-Bold',Helvetica] mb-[104px]">
              About Us
            </h1>

            <div className="text-xl text-[#0b294b] [font-family:'Cairo-Regular',Helvetica] space-y-8">
              <p>
                ByteMinds Systems is an independent team of passionate
                developers dedicated to designing and creating smart, efficient,
                and user-friendly systems that bring convenience to local
                businesses. Our mission is to empower businesses by streamlining
                operations, enhancing customer experiences, and driving growth
                through innovative technology solutions.
              </p>

              <p>
                We believe that every business has unique challenges, and our
                goal is to develop tailored systems that address these
                needs—whether it&apos;s automating processes, optimizing
                workflows, or improving customer engagement. By combining our
                technical expertise with a deep understanding of industry
                demands, we deliver solutions that not only meet but exceed
                expectations.
              </p>

              <p>
                The GymWatch is amongst the first projects we have developed,
                aimed to support local gym reception by allowing them to monitor
                membership subscription through a systematic procurement.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}