import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import React from "react";

export default function FeaturesAcc() {
  // Navigation items data
  const navItems = [
    { name: "Home", active: false },
    { name: "Features", active: true },
    { name: "FAQs", active: false },
    { name: "About Us", active: false },
    { name: "Contact", active: false },
    { name: "Dashboard", active: false },
  ];

  // Features data
  const features = [
    {
      title: "Memberships",
      description:
        "In GymWatch, you can apply for memberships and programs to a gym establishment if they support the use of GymWatch as one of their tools. From there, you can watch promotions or activities created or enacted by the gym establishment. As a member, you can then monitor and track your billings and activities through an automated and systematic process.",
    },
    {
      title: "Billings",
      description:
        "Payments are automatically processed and systematic notifications regarding about the due deadlines are featured in GymWatch. This allows you to look and analyze your overall payments and information, seeing details about the programs you signed up for.",
    },
    {
      title: "Booking",
      description:
        "Arrange consultations and meetings with the established partners of the gym or have a meeting with the coaches that you wish to consult with for your physical fitness program.",
      hasBackground: true,
    },
    {
      title: "Management",
      description:
        "GymWatch supports the creation and management of businesses through using this tool to monitor and assess the members of your establishment. GymWatch allows you to communicate, oversee, and promote your growing business for more members.",
      hasBackground: true,
    },
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="w-full h-36 bg-[#d9d9d9]">
        <div className="max-w-[1920px] mx-auto px-4 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="w-[104px] h-[104px] flex items-center justify-center">
              <img
                src=""
                alt="ByteMinds Systems Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-2xl text-center [font-family:'Kode_Mono-Bold',Helvetica]">
              ByteMinds Systems
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="h-7">
                <div
                  className={`font-normal text-2xl text-center whitespace-nowrap [font-family:'Fredoka-Regular',Helvetica] ${item.active ? "text-[#363a3f]" : "text-black"}`}
                >
                  {item.name}
                </div>
              </div>
            ))}

            {/* Sign Out Button */}
            <Button className="bg-[#0b294b] rounded-[10px] h-[37px] w-[133px] text-white text-2xl [font-family:'Fredoka-Regular',Helvetica]">
              Sign Out
            </Button>

            {/* Avatar */}
            <Avatar className="w-[57px] h-[57px]">
              <AvatarImage src="" alt="User" />
              <AvatarFallback>
                <UserIcon className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Features Title Section */}
      <div className="relative">
        <div className="w-[728px] h-[127px] bg-[url(/blue-shape.svg)] bg-[100%_100%] flex items-center">
          <h1 className="ml-[440px] [font-family:'Cairo-Bold',Helvetica] font-bold text-white text-5xl">
            Features
          </h1>
        </div>
      </div>

      {/* Features Content */}
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col gap-16 py-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-none shadow-none ${index >= 2 ? "relative z-10" : ""}`}
            >
              <CardContent className="p-0">
                <div className="w-[1060px] mx-auto">
                  <h2 className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-5xl mb-6">
                    {feature.title}
                  </h2>
                  <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-[#0b294b] text-xl ml-[47px]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="relative mt-auto">
        {/* Gray background for bottom sections */}
        <div className="absolute bottom-0 w-full h-[683px] bg-[#d9d9d9] -z-10" />

        {/* Background shape */}
        <div className="absolute right-0 top-[-78px] w-[824px] h-[78px] -z-20">
          <img src="" alt="Background shape" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}