import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Trash2 } from "lucide-react";
import React from "react";

export const PaymentMethodsSection = () => {
  // Payment card data for mapping
  const paymentCards = [
    {
      id: 1,
      type: "Visa",
      initial: "V",
      lastFour: "4242",
      expiryDate: "12/2025",
      isDefault: false,
    },
    {
      id: 2,
      type: "Mastercard",
      initial: "M",
      lastFour: "8456",
      expiryDate: "08/2024",
      isDefault: true,
    },
  ];

  return (
    <section className="w-full bg-white rounded-xl shadow-md p-6">
      <h2 className="font-bold text-2xl text-[#0b294b] mb-4 font-['Cairo-Bold',Helvetica]">
        Payment Methods
      </h2>

      <div className="space-y-6">
        <Card className="bg-[#e9ecef]">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica]">
              Saved Payment Methods
            </CardTitle>
            <Button className="bg-[#0b294b] hover:bg-[#0b294b]/90 text-[#efefef] font-['Cairo-SemiBold',Helvetica]">
              Add New Card
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {paymentCards.map((card) => (
              <Card key={card.id} className="bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center p-6">
                    <div className="w-12 h-12 bg-[#0b294b] rounded-lg flex items-center justify-center mr-4">
                      <span className="font-bold text-2xl text-white font-['Cairo-Bold',Helvetica]">
                        {card.initial}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3">
                        <span className="font-normal text-lg text-black font-['Cairo-Regular',Helvetica]">
                          {card.type}
                        </span>
                        <span className="font-normal text-lg text-black font-['Cairo-Regular',Helvetica]">
                          •••• {card.lastFour}
                        </span>
                        <span className="font-normal text-sm text-black font-['Cairo-Regular',Helvetica]">
                          Expires {card.expiryDate}
                        </span>
                      </div>
                      {card.isDefault && (
                        <Badge className="w-fit mt-2 bg-[#4caf50] text-[#efefef] font-normal font-['Cairo-Regular',Helvetica]">
                          Default
                        </Badge>
                      )}
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                      {!card.isDefault && (
                        <Button
                          className="bg-[#0b294b] hover:bg-[#0b294b]/90 text-[#efefef] text-sm font-['Cairo-Regular',Helvetica]"
                          size="sm"
                        >
                          Set Default
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#e9ecef]">
          <CardHeader className="pb-2">
            <CardTitle className="font-bold text-2xl text-black font-['Cairo-Bold',Helvetica]">
              Payment Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 mt-1" />
                  <div>
                    <p className="font-semibold text-base text-black font-['Cairo-SemiBold',Helvetica]">
                      Your payment information is secure
                    </p>
                    <p className="font-normal text-sm text-black font-['Cairo-Regular',Helvetica]">
                      We use industry-standard encryption to protect your
                      payment details
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;