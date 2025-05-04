import {
  ChevronRight,
  Dumbbell,
  HelpCircle,
  Home,
  LayoutDashboard,
  User,
  Wallet,
} from "lucide-react";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerHelp() {
  // Navigation items data
  const navItems = [
    {
      icon: <Home className="w-[82px] h-[82px] mx-auto" />,
      label: "Home",
      active: false,
    },
    {
      icon: <LayoutDashboard className="w-[62px] h-[69px] mx-auto" />,
      label: "Dashboard",
      active: false,
    },
    {
      icon: <Dumbbell className="w-[102px] h-[102px] mx-auto" />,
      label: "Gyms",
      active: false,
    },
    {
      icon: <Wallet className="w-[58px] h-[58px] mx-auto" />,
      label: "Billings",
      active: false,
    },
    {
      icon: <User className="w-[63px] h-[57px] mx-auto" />,
      label: "Account",
      active: false,
    },
    {
      icon: <HelpCircle className="w-[71px] h-[71px] mx-auto" />,
      label: "Help",
      active: true,
    },
  ];

  // FAQ data
  const faqItems = [
    {
      question: "How do I join/subscribe to a gym?",
      answer:
        'In customer/members mode, you can subscribe to a gym by going to the gym tab at the navigation bar of the left side of the dashboard. After that, you can click on the "explore" button to see gyms are available and what equipment or plans do they offer.',
    },
    {
      question: "How can I manage my notifications?",
      answer:
        "If you navigate to your account in the navigation bar, you can tweak your notification settings and toggle appropriate settings you'd like to change.",
    },
    {
      question:
        "How do I set up my credit card or PayPal to pay for membership?",
      answer:
        'In customer/members mode, you can set your credit card or any online payment transaction through the "billings" tab in the navigation bar. Once at the account billings section, you can add a new entry by typing in the appropriate information needed.',
    },
    {
      question: "How can I set up my own gym?",
      answer:
        'In gym management mode, you can set up your own gym by going to the "gym" tab and clicking on the "create a gym" button. Doing so, you\'ll need to fill out the provided entry lists for your gym\'s information before creating it.',
    },
    {
      question: "How do I manage members within my gym?",
      answer:
        "In gym management mode, you can manage your gym's members by navigating to the members tab in the navigation bar. After that, you can see the lists of gym members that have subscribed to the plans or memberships that you've created.",
    },
    {
      question: "Can I switch from member to a gym manager or vice versa?",
      answer:
        'Yes, you can switch from member to a gym manager or vice versa by clicking at the top left that either says "member mode" or "gym management mode" and it will automatically switch you in either modes.',
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        <div className="relative min-h-[1410px] bg-[url(/blue-bg.png)] bg-[100%_100%]">
          {/* Header */}
          <div className="absolute w-[700px] h-[98px] top-14 left-[200px]">
            <h1 className="w-full h-[59px] [font-family:'Cairo-Bold',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal]">
              GymWatch Help
            </h1>
            <div className="w-[166px] h-[39px] mt-[20px]">
              <div className="[font-family:'Cairo-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] flex items-center">
                <ChevronRight className="inline mr-1" />
                <span>Member Mode</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="absolute w-[1912px] h-[1354px] top-14 left-0">
            {/* White Background */}
            <div className="absolute w-[1912px] h-[1065px] top-[289px] left-0 bg-white" />

            {/* Content Container */}
            <div className="absolute w-[1496px] h-[719px] top-[328px] left-[119px]">
              <h2 className="w-[338px] h-[59px] [font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-5xl tracking-[0] leading-[normal]">
                GymWatch Help
              </h2>

              {/* FAQ Grid */}
              <div className="grid grid-cols-2 gap-x-[110px] gap-y-[58px] mt-[58px]">
                {faqItems.map((item, index) => (
                  <Card
                    key={index}
                    className="w-[641px] h-[153px] border-none shadow-none"
                  >
                    <CardHeader className="p-0">
                      <CardTitle className="[font-family:'Cairo-Bold',Helvetica] font-bold text-[#0b294b] text-2xl tracking-[0] leading-9 whitespace-nowrap">
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-11">
                      <p className="[font-family:'Cairo-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-9">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="absolute w-[170px] h-[1248px] top-0 left-[1709px]">
              <div className="relative w-[172px] h-[1248px]">
                <div className="absolute w-[170px] h-[1248px] top-0 left-0 bg-[#112134] rounded-[45px]">
                  <div className="relative h-[1029px] top-[219px] bg-[#d9d9d9] rounded-[45px]" />
                </div>

                {/* Logo */}
                <div className="absolute w-[171px] h-[138px] top-[41px] left-px">
                  <div className="absolute w-[169px] h-[42px] top-[97px] left-0 [font-family:'Cairo-Medium',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[normal]">
                    GymWatch
                  </div>
                  <img
                    className="absolute w-[90px] h-[90px] top-0 left-10 object-cover"
                    alt="Wolf logo"
                    src=""
                  />
                </div>

                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-[170px] h-[157px] top-[${262 + index * 157}px] left-0 ${item.active ? "bg-white opacity-50" : ""}`}
                  >
                    <div className="relative w-[125px] h-[108px] top-[27px] left-[22px] flex flex-col items-center justify-between">
                      {item.icon}
                      <div
                        className={`w-[125px] h-[37px] mt-2 [font-family:'Cairo-${item.active ? "Bold" : "Regular"}',Helvetica] font-${item.active ? "bold" : "normal"} text-black text-xl text-center tracking-[0] leading-[normal]`}
                      >
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}