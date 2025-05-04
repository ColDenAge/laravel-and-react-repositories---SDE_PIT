import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React from "react";

// Member data for mapping
const members = [
  {
    id: 1,
    name: "Sarah Johnson",
    plan: "Premium Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-15",
    status: "Active",
    initial: "S",
  },
  {
    id: 2,
    name: "Mike Thompson",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-24",
    status: "Active",
    initial: "M",
  },
  {
    id: 3,
    name: "Drake Zulu",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-24",
    status: "Active",
    initial: "M",
  },
  {
    id: 4,
    name: "Jefferey Epstein",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-24",
    status: "Active",
    initial: "M",
  },
  {
    id: 5,
    name: "Mussolini Benito",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-24",
    status: "Active",
    initial: "M",
  },
  {
    id: 6,
    name: "Hirohito Yamamoto",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2023-07-14",
    status: "Active",
    initial: "M",
  },
  {
    id: 7,
    name: "Eisenward Howard",
    plan: "Premium Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-02-24",
    status: "Active",
    initial: "M",
  },
  {
    id: 8,
    name: "Augustus Cedreik",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-24",
    status: "Active",
    initial: "M",
  },
  {
    id: 9,
    name: "Fred Tommy",
    plan: "Premium Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-24",
    status: "Active",
    initial: "M",
  },
  {
    id: 10,
    name: "Jared Michelton",
    plan: "Basic Plan",
    email: "emailaddress@gmail.com",
    joinDate: "2024-01-24",
    status: "Active",
    initial: "M",
  },
];

export default function MembersListSection() {
  const [showKickDialog, setShowKickDialog] = React.useState(false);

  return (
    <section className="w-full bg-white rounded-xl p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-[#0b294b] [font-family:'Cairo-Bold',Helvetica]">
            Members
          </h2>

          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="w-[243px] h-[55px] bg-[#e9ecef] pl-10 [font-family:'Cairo-Regular',Helvetica]"
                placeholder="Search members..."
              />
            </div>

            <Select>
              <SelectTrigger className="w-[243px] h-[55px] bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica]">
                All Memberships
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Memberships</SelectItem>
                <SelectItem value="premium">Premium Plan</SelectItem>
                <SelectItem value="basic">Basic Plan</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[243px] h-[55px] bg-[#d9d9d9] [font-family:'Cairo-Regular',Helvetica]">
                All Statuses
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          {members.map((member) => (
            <Card key={member.id} className="bg-[#e9ecef] border-none">
              <CardContent className="p-4 flex items-center">
                <div className="flex items-center space-x-4 flex-1">
                  <Avatar className="w-10 h-10 bg-[#0b294b]">
                    <AvatarFallback className="text-[#efefef] [font-family:'Cairo-Regular',Helvetica]">
                      {member.initial}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <span className="font-semibold text-base [font-family:'Cairo-SemiBold',Helvetica]">
                      {member.name}
                    </span>
                    <span className="text-sm [font-family:'Cairo-Regular',Helvetica]">
                      {member.plan}
                    </span>
                  </div>

                  <div className="ml-10">
                    <span className="text-sm [font-family:'Cairo-Regular',Helvetica]">
                      {member.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm [font-family:'Cairo-Regular',Helvetica]">
                    {member.joinDate}
                  </span>

                  <div className="flex flex-col space-y-1">
                    <Badge className="bg-[#4caf50] hover:bg-[#4caf50] text-[#efefef] rounded px-3 py-1 h-[29px] w-[60px] flex items-center justify-center [font-family:'Cairo-Regular',Helvetica]">
                      Active
                    </Badge>

                    <Button
                      variant="destructive"
                      className="bg-[#ff1818] hover:bg-[#ff1818] text-[#efefef] rounded h-[29px] w-[60px] px-3 py-1 [font-family:'Cairo-Regular',Helvetica]"
                      onClick={() => setShowKickDialog(true)}
                    >
                      Kick
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm text-[#666666] [font-family:'Cairo-Regular',Helvetica]">
            Showing 10 of 21 members
          </span>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={showKickDialog} onOpenChange={setShowKickDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reason</DialogTitle>
          </DialogHeader>
          <Textarea placeholder="Enter a reason" className="min-h-[100px]" />
          <DialogFooter className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowKickDialog(false)}>
              Cancel
            </Button>
            <Button className="bg-[#0b294b]">Kick</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}