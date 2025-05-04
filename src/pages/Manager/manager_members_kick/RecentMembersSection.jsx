import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export const RecentMembersSection = () => {
  // Data for members to enable mapping
  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      plan: "Premium Plan",
      date: "2024-04-27",
      status: "Pending",
      initial: "S",
      isPending: true,
    },
    {
      id: 2,
      name: "Mike Thompson",
      plan: "Basic Plan",
      date: "2024-02-24",
      status: "Active",
      initial: "M",
      isPending: false,
    },
    {
      id: 3,
      name: "Emma Davis",
      plan: "Basic Plan",
      date: "2024-01-15",
      status: "Active",
      initial: "E",
      isPending: false,
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
          Recent Members
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between bg-[#e9ecef] p-4 rounded-lg"
          >
            <div className="flex items-center">
              <Avatar className="h-10 w-10 bg-[#0b294b] text-[#efefef]">
                <AvatarFallback className="font-['Cairo-Regular',Helvetica]">
                  {member.initial}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-semibold text-black font-['Cairo-SemiBold',Helvetica]">
                  {member.name}
                </p>
                <p className="text-sm text-black font-['Cairo-Regular',Helvetica]">
                  {member.plan}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-black font-['Cairo-Regular',Helvetica]">
                {member.date}
              </span>
              <div className="flex flex-col gap-2">
                <Badge
                  className={`w-[60px] h-[29px] flex items-center justify-center ${
                    member.status === "Active" ? "bg-[#4caf50]" : "bg-[#ffb400]"
                  }`}
                >
                  <span className="text-sm text-[#efefef] font-['Cairo-Regular',Helvetica]">
                    {member.status}
                  </span>
                </Badge>
                {member.isPending && (
                  <Button
                    variant="default"
                    className="w-[60px] h-[29px] bg-[#0b294b] text-[#efefef] text-sm font-['Cairo-Regular',Helvetica] p-0"
                  >
                    Accept?
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center gap-2 mt-4">
          <ChevronLeft className="w-[18px] h-[18px] text-[#666666]" />
          <span className="text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
            Showing 3 of 4 recent members
          </span>
          <ChevronRight className="w-[18px] h-[18px] text-[#666666]" />
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentMembersSection;