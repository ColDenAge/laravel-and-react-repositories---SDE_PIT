import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function AddPaymentMethodSection() {
  // Form field data for mapping
  const formFields = [
    {
      id: "cardNumber",
      label: "Card Number",
      placeholder: "Type in the card's number",
      fullWidth: true,
    },
    {
      id: "expiryDate",
      label: "Expiry Date",
      placeholder: "MM/YY",
      halfWidth: true,
    },
    {
      id: "cvc",
      label: "CVC",
      placeholder: "CVC Code",
      halfWidth: true,
    },
    {
      id: "cardholderName",
      label: "Cardholder Name",
      placeholder: "Full Name",
      fullWidth: true,
      disabled: true,
    },
  ];

  return (
    <Card className="w-full max-w-[500px] rounded-xl">
      <CardContent className="p-8">
        <h2 className="font-bold text-2xl text-[#0b294b] mb-6 [font-family:'Cairo-Bold',Helvetica]">
          Add New Card
        </h2>

        <div className="space-y-6">
          {/* Card Number */}
          <div className="space-y-2">
            <Label
              htmlFor="cardNumber"
              className="[font-family:'Cairo-Regular',Helvetica] text-sm"
            >
              Card Number
            </Label>
            <Input
              id="cardNumber"
              placeholder="Type in the card's number"
              className="h-[55px] bg-[#f8f9fa] [font-family:'Cairo-Regular',Helvetica] text-base placeholder:text-[#999999] border-0"
            />
          </div>

          {/* Expiry Date and CVC in a flex row */}
          <div className="flex gap-4">
            <div className="space-y-2 w-1/2">
              <Label
                htmlFor="expiryDate"
                className="[font-family:'Cairo-Regular',Helvetica] text-sm"
              >
                Expiry Date
              </Label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                className="h-[55px] bg-[#f8f9fa] [font-family:'Cairo-Regular',Helvetica] text-base placeholder:text-[#999999] border-0"
              />
            </div>
            <div className="space-y-2 w-1/2">
              <Label
                htmlFor="cvc"
                className="[font-family:'Cairo-Regular',Helvetica] text-sm"
              >
                CVC
              </Label>
              <Input
                id="cvc"
                placeholder="CVC Code"
                className="h-[55px] bg-[#f8f9fa] [font-family:'Cairo-Regular',Helvetica] text-base placeholder:text-[#999999] border-0"
              />
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="space-y-2">
            <Label
              htmlFor="cardholderName"
              className="[font-family:'Cairo-Regular',Helvetica] text-sm"
            >
              Cardholder Name
            </Label>
            <Input
              id="cardholderName"
              placeholder="Full Name"
              className="h-[55px] bg-[#efefef] [font-family:'Cairo-Regular',Helvetica] text-base placeholder:text-[#999999] border-0"
            />
          </div>

          {/* Error message */}
          <div className="text-center">
            <p className="text-[#ff1818] text-sm [font-family:'Cairo-Regular',Helvetica]">
              *Invalid inputs
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <Button
              variant="default"
              className="h-12 w-[92px] bg-[#0b294b] [font-family:'Cairo-Regular',Helvetica] text-base"
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="h-12 w-[108px] bg-[#0b294b] [font-family:'Cairo-Regular',Helvetica] text-base"
            >
              Add Card
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}