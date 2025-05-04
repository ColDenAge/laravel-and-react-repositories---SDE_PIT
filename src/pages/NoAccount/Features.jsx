import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Features() {
  // Navigation items data
  const navItems = [
    { name: "Home", href: "#", active: false },
    { name: "Features", href: "#", active: true },
    { name: "FAQs", href: "#", active: false },
    { name: "About Us", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
    { name: "Login", href: "#", active: false },
  ];

  // Features data
  const features = [
    {
      id: "memberships",
      title: "Memberships",
      description:
        "In GymWatch, you can apply for memberships and programs to a gym establishment if they support the use of GymWatch as one of their tools. From there, you can watch promotions or activities created or enacted by the gym establishment. As a member, you can then monitor and track your billings and activities through an automated and systematic process.",
      bgColor: "bg-white",
    },
    {
      id: "billings",
      title: "Billings",
      description:
        "Payments are automatically processed and systematic notifications regarding about the due deadlines are featured in GymWatch. This allows you to look and analyze your overall payments and information, seeing details about the programs you signed up for.",
      bgColor: "bg-white",
    },
    {
      id: "booking",
      title: "Booking",
      description:
        "Arrange consultations and meetings with the established partners of the gym or have a meeting with the coaches that you wish to consult with for your physical fitness program.",
      bgColor: "bg-white",
    },
    {
      id: "management",
      title: "Management",
      description:
        "GymWatch supports the creation and management of businesses through using this tool to monitor and assess the members of your establishment. GymWatch allows you to communicate, oversee, and promote your growing business for more members.",
      bgColor: "bg-gray-200",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header/Navigation */}
        <header className="w-full h-36 bg-[#d9d9d9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            {/* Logo and Company Name */}
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

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-normal text-2xl text-center whitespace-nowrap [font-family:'Fredoka-Regular',Helvetica] ${
                    item.active ? "text-[#363a3f]" : "text-black"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-[#0b294b] rounded-[10px] h-[37px] text-white text-2xl [font-family:'Fredoka-Regular',Helvetica]">
                Sign Up
              </Button>
            </div>
          </div>
        </header>

        {/* Features Title Section */}
        <div className="relative">
          <div className="w-[728px] h-[127px] bg-[url(/blue-shape.svg)] bg-[100%_100%] flex items-center justify-end pr-16">
            <h1 className="text-white text-5xl font-bold [font-family:'Cairo-Bold',Helvetica]">
              Features
            </h1>
          </div>
        </div>

        {/* Features Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`border-none shadow-none my-16 ${feature.bgColor} ${index === features.length - 1 ? "pb-16" : ""}`}
            >
              <CardContent className="p-0">
                <h2 className="text-5xl font-bold text-[#0b294b] mb-6 [font-family:'Cairo-Bold',Helvetica]">
                  {feature.title}
                </h2>
                <p className="text-xl text-[#0b294b] [font-family:'Cairo-Regular',Helvetica]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Background elements */}
        <div className="absolute w-full h-[683px] bottom-0 left-0 bg-[#d9d9d9] -z-10" />
        <img
          className="absolute w-[824px] h-[78px] right-0 bottom-[683px] -z-10"
          alt="Background"
          src=""
        />
      </div>
    </div>
  );
}