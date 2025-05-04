import { Button } from "@/components/ui/button";
import React from "react";

export default function CallToActionSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b294b] text-center md:text-left">
            Ready to start your program?
          </h2>
          <Button className="bg-[#0b294b] hover:bg-[#0b294b]/90 text-white text-xl md:text-2xl px-6 py-5 h-auto rounded-lg">
            Get Started
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto rounded-lg object-cover"
            alt="Person working out in a gym"
            src=""
          />
        </div>
      </div>
    </section>
  );
}