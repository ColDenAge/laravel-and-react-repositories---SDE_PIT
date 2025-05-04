import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export default function FaqAcc() {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is GymWatch?",
      answer:
        "GymWatch is a smart membership management system that helps gyms track and organize subscriptions efficiently. In manager mode, GymWatch helps you manage all aspects of running a gym through organizing and streamlining the process of enrolling members and monitoring the activities of them. From member onboarding and waivers, to billing, recurring payments, attendance tracking and many more.\n\nHowever, in customer/members mode, GymWatch helps members keep track of their activities, communicate with gym owners or fitness coaches, keep tabs on their payments and memberships, and many more.",
    },
    {
      question: "What businesses can I start in GymWatch",
      answer:
        "In GymWatch, you can start managing a general gym that promotes fitness and physical activities that help people improve their health. The GymWatch is best used as a tool in any kind of membership-based business, from fitness and boutique gyms, to martial arts schools, yoga studios, gymnastics gyms and membership clubs.",
    },
    {
      question: "What is the payment process?",
      answer:
        "GymWatch uses online partners for digital transactions to process either their membership fees or subscriptions. The partners have their own additional fees like PayPal or GCash. Here, GymWatch does not add additional fees or membership transactions. Another option is opting to pay in face-to-face, the gym owners or management team can then update the status that you have paid due bills and payments.",
    },
    {
      question: "Is this available in my country?",
      answer:
        "GymWatch is only available for those gym businesses that uses GymWatch as part of their reception or management tools. However, GymWatch is certainly available to everyone internationally though requires businesses to use GymWatch for customers/members to use this for their programs.",
    },
  ];

  // Navigation items
  const navItems = [
    { name: "Home", active: false },
    { name: "Features", active: false },
    { name: "FAQs", active: true },
    { name: "About Us", active: false },
    { name: "Contact", active: false },
    { name: "Dashboard", active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative min-h-[1740px]">
        {/* Header/Navigation */}
        <header className="w-full h-36 bg-[#d9d9d9] flex items-center">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img
                className="w-[104px] h-[104px] object-cover"
                alt="ByteMinds Systems Logo"
                src=""
              />
              <div className="font-bold text-black text-2xl text-center [font-family:'Kode_Mono-Bold',Helvetica]">
                ByteMinds Systems
              </div>
            </div>

            {/* Navigation */}
            <NavigationMenu className="flex-1 max-w-[1399px] ml-10">
              <NavigationMenuList className="flex justify-center gap-8">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className={`text-2xl [font-family:'Fredoka-Regular',Helvetica] ${
                        item.active ? "text-[#363a3f]" : "text-black"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Sign Out Button and Avatar */}
            <div className="flex items-center gap-4">
              <Button className="h-[37px] w-[133px] bg-[#0b294b] rounded-[10px] [font-family:'Fredoka-Regular',Helvetica] text-2xl">
                Sign Out
              </Button>
              <Avatar className="w-[57px] h-[57px]">
                <AvatarImage src="" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* FAQ Header */}
        <div className="relative w-[1073px] h-[127px] mt-[171px] bg-[url(/blue-shape.svg)] bg-[100%_100%]">
          <h1 className="absolute w-[632px] h-[89px] top-[18px] left-[360px] [font-family:'Cairo-Bold',Helvetica] font-bold text-white text-5xl">
            Frequently Asked Questions:
          </h1>
        </div>

        {/* FAQ Content */}
        <div className="mt-16 max-w-[1132px] mx-auto">
          <Accordion type="single" collapsible className="space-y-16">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none"
              >
                <AccordionTrigger className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-5xl hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="mt-4 ml-12 [font-family:'Cairo-Regular',Helvetica] font-normal text-[#0b294b] text-xl">
                  {item.answer.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}