import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function RecentMembersSection() {
  // Member data for mapping
  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      initial: "S",
      plan: "Premium Plan",
      date: "2024-04-27",
      status: "Pending",
      needsAction: true,
    },
    {
      id: 2,
      name: "Mike Thompson",
      initial: "M",
      plan: "Basic Plan",
      date: "2024-01-24",
      status: "Active",
      needsAction: false,
    },
    {
      id: 3,
      name: "Emma Davis",
      initial: "E",
      plan: "Basic Plan",
      date: "2024-01-17",
      status: "Active",
      needsAction: false,
    },
  ];

  return (
    <Card className="w-full rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
          Recent Members
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
                <p className="font-['Cairo-SemiBold',Helvetica] font-semibold text-black text-base">
                  {member.name}
                </p>
                <p className="font-['Cairo-Regular',Helvetica] font-normal text-black text-sm">
                  {member.plan}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-['Cairo-Regular',Helvetica] font-normal text-black text-sm">
                {member.date}
              </span>
              <div className="flex flex-col gap-1">
                <Badge
                  className={`font-['Cairo-Regular',Helvetica] font-normal text-[#efefef] text-sm px-3 py-1 ${
                    member.status === "Active" ? "bg-[#4caf50]" : "bg-[#ffb400]"
                  }`}
                >
                  {member.status}
                </Badge>
                {member.needsAction && (
                  <Badge className="bg-[#0b294b] font-['Cairo-Regular',Helvetica] font-normal text-[#efefef] text-sm px-3 py-1">
                    Accept?
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronLeft className="h-4 w-4 text-[#666666]" />
          </Button>
          <span className="font-['Cairo-Regular',Helvetica] font-normal text-[#666666] text-sm">
            Showing 3 of 21 members
          </span>
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronRight className="h-4 w-4 text-[#666666]" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}