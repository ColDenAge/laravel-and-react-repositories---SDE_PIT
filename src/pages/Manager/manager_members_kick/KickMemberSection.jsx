import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function KickMemberSection() {
  return (
    <Card className="w-full max-w-[500px] font-['Cairo',sans-serif]">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#0b294b]">
          Kick a member
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reason" className="text-base font-normal">
              Reason
            </Label>
            <Textarea
              id="reason"
              className="min-h-[137px] bg-[#d9d9d9] border-0 resize-none text-[#666666]"
              placeholder="Enter a reason"
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-4">
        <Button variant="ghost" className="font-normal text-base text-black">
          Cancel
        </Button>
        <Button className="bg-[#0b294b] hover:bg-[#0b294b]/90 text-white font-normal text-base min-w-[141px]">
          Kick
        </Button>
      </CardFooter>
    </Card>
  );
}