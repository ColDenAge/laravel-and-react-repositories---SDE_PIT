import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function PaymentHistorySection() {
  // Payment history data
  const payments = [
    { date: "January 15, 2024", amount: "Php 399.00", status: "Paid" },
    { date: "December 15, 2023", amount: "Php 399.00", status: "Paid" },
    { date: "November 15, 2023", amount: "Php 399.00", status: "Paid" },
  ];

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica]">
          Payment History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {payments.map((payment, index) => (
              <TableRow
                key={index}
                className="bg-[#0000000d] rounded-lg mb-4 h-[61px]"
              >
                <TableCell className="font-['Cairo-Regular',Helvetica] font-normal text-black text-base">
                  {payment.date}
                </TableCell>
                <TableCell className="font-['Cairo-SemiBold',Helvetica] font-semibold text-black text-base">
                  {payment.amount}
                </TableCell>
                <TableCell className="text-right font-['Cairo-Regular',Helvetica] font-normal text-black text-xl">
                  {payment.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-center mt-4 text-sm text-[#666666] font-['Cairo-Regular',Helvetica]">
          <ChevronLeft className="w-3 h-3 mr-2" />
          <span>Showing 3 of 11 payments</span>
          <ChevronRight className="w-3 h-3 ml-2" />
        </div>
      </CardContent>
    </Card>
  );
}