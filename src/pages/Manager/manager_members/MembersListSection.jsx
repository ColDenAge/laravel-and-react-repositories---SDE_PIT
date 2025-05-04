import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React from "react";

// Member data for mapping
const members = [
  {
    id: 1,
    name: "Sarah Johnson",
    initial: "S",
    plan: "Premium Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Mike Thompson",
    initial: "M",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-24",
    status: "Active",
  },
  {
    id: 3,
    name: "Drake Zulu",
    initial: "M",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-24",
    status: "Active",
  },
  {
    id: 4,
    name: "Jefferey Epstein",
    initial: "M",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-24",
    status: "Active",
  },
  {
    id: 5,
    name: "Mussolini Benito",
    initial: "M",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-24",
    status: "Active",
  },
  {
    id: 6,
    name: "Hirohito Yamamoto",
    initial: "M",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    date: "2023-07-14",
    status: "Active",
  },
  {
    id: 7,
    name: "Eisenward Howard",
    initial: "M",
    plan: "Premium Plan",
    email: "emailaddress@gmail.com",
    date: "2024-02-24",
    status: "Active",
  },
  {
    id: 8,
    name: "Augustus Cedreik",
    initial: "M",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-24",
    status: "Active",
  },
  {
    id: 9,
    name: "Fred Tommy",
    initial: "M",
    plan: "Premium Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-24",
    status: "Active",
  },
  {
    id: 10,
    name: "Jared Michelton",
    initial: "M",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    date: "2024-01-24",
    status: "Active",
  },
];

export default function MembersListSection() {
  return (
    <Card className="w-full rounded-xl">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
            Members
          </CardTitle>
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="w-[243px] h-[55px] bg-[#e9ecef] pl-10 font-['Cairo-Regular',Helvetica] text-[#999999]"
                placeholder="Search members..."
              />
            </div>
            <Select>
              <SelectTrigger className="w-[243px] h-[55px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica]">
                <SelectValue placeholder="All Memberships" />
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger className="w-[243px] h-[55px] bg-[#d9d9d9] font-['Cairo-Regular',Helvetica]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {members.map((member) => (
            <div key={member.id} className="bg-[#e9ecef] rounded-lg p-4">
              <div className="flex items-center">
                <Avatar className="w-10 h-10 bg-[#0b294b] rounded-full">
                  <AvatarFallback className="font-['Cairo-Regular',Helvetica] text-[#efefef]">
                    {member.initial}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 flex-1 grid grid-cols-4 items-center">
                  <div>
                    <p className="font-['Cairo-SemiBold',Helvetica] font-semibold text-black">
                      {member.name}
                    </p>
                    <p className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                      {member.plan}
                    </p>
                  </div>
                  <div className="font-['Cairo-Regular',Helvetica] text-sm text-black">
                    {member.email}
                  </div>
                  <div className="font-['Cairo-Regular',Helvetica] text-sm text-black text-right">
                    {member.date}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className="bg-[#4caf50] text-[#efefef] font-['Cairo-Regular',Helvetica] font-normal h-[29px] px-4 rounded">
                      {member.status}
                    </Badge>
                    <Button
                      variant="destructive"
                      className="bg-[#ff1818] text-[#efefef] font-['Cairo-Regular',Helvetica] font-normal h-[29px] w-[60px] rounded"
                    >
                      Kick
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6 space-x-2 font-['Cairo-Regular',Helvetica] text-sm text-[#666666]">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>Showing 10 of 21 members</span>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}