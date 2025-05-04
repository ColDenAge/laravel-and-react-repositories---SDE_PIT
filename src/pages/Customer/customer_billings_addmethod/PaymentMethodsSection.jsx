import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function PaymentMethodsSection() {
  // Payment methods data
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      lastFour: "4242",
      expiryDate: "12/2025",
      isDefault: false,
      icon: "V",
    },
    {
      id: 2,
      type: "Mastercard",
      lastFour: "8456",
      expiryDate: "08/2024",
      isDefault: true,
      icon: "M",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-[0px_4px_6px_#0000001a] p-6">
      <h2 className="font-bold text-2xl text-[#0b294b] mb-6 font-['Cairo-Bold',Helvetica]">
        Payment Methods
      </h2>

      <div className="space-y-8">
        {/* Saved Payment Methods Section */}
        <Card className="bg-[#e9ecef] border-0">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-2xl text-[#0b294b] font-['Cairo-Bold',Helvetica]">
                Saved Payment Methods
              </h3>
              <Link to="/customeru95billingsu95addmethod">
                <Button className="bg-[#ffb400] hover:bg-[#e6a300] text-[#efefef] font-['Cairo-SemiBold',Helvetica] font-semibold">
                  Add New Card
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <Card key={method.id} className="bg-white border-0">
                  <CardContent className="p-6 flex items-center">
                    <div className="flex items-center flex-1">
                      <div className="w-12 h-12 bg-[#0b294b] rounded-lg flex items-center justify-center mr-6">
                        <span className="font-bold text-2xl text-white font-['Cairo-Bold',Helvetica]">
                          {method.icon}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-normal text-lg text-black font-['Cairo-Regular',Helvetica]">
                            {method.type}
                          </span>
                          <span className="font-normal text-lg text-black font-['Cairo-Regular',Helvetica]">
                            •••• {method.lastFour}
                          </span>
                          <span className="font-normal text-sm text-black font-['Cairo-Regular',Helvetica]">
                            Expires {method.expiryDate}
                          </span>
                        </div>

                        {method.isDefault && (
                          <Badge className="bg-[#4caf50] text-[#efefef] font-normal font-['Cairo-Regular',Helvetica] rounded px-3">
                            Default
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {!method.isDefault && (
                        <Button className="bg-[#0b294b] text-[#efefef] text-sm font-normal font-['Cairo-Regular',Helvetica] h-[39px] rounded-md">
                          Set Default
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500"
                      >
                        <Trash2 className="h-4 w-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Security Section */}
        <Card className="bg-[#e9ecef] border-0">
          <CardContent className="p-6">
            <h3 className="font-bold text-2xl text-black mb-6 font-['Cairo-Bold',Helvetica]">
              Payment Security
            </h3>

            <Card className="bg-white border-0">
              <CardContent className="p-6 flex items-center">
                <Shield className="h-[26px] w-[26px] mr-4 text-black" />
                <div>
                  <p className="font-semibold text-base text-black font-['Cairo-SemiBold',Helvetica]">
                    Your payment information is secure
                  </p>
                  <p className="font-normal text-sm text-black font-['Cairo-Regular',Helvetica]">
                    We use industry-standard encryption to protect your payment
                    details
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}