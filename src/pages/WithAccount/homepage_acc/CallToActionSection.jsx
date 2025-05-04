import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const CallToActionSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b294b] text-center md:text-left">
            Ready to start your program?
          </h2>
          <Button className="bg-[#0b294b] hover:bg-[#0b294b]/90 text-white text-xl px-8 py-6 h-auto rounded-lg">
            Get Started
          </Button>
        </div>

        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            <img
              className="w-full md:w-[500px] h-auto rounded-lg"
              alt="Person in fitness setting"
              src=""
              // Note: In a real implementation, you would use a proper image path
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToActionSection;