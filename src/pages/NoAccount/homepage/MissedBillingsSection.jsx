import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export default function MissedBillingsSection() {
  // Data for missed billings table
  const missedBillings = [
    { paymentName: "Payment 1", dueDate: "01/01/2023", amount: "$100.00" },
    { paymentName: "Payment 2", dueDate: "02/15/2023", amount: "$75.50" },
    { paymentName: "Payment 3", dueDate: "03/30/2023", amount: "$120.00" },
  ];

  return (
    <section className="w-full py-16 bg-[#0b294b] bg-[url(/blue-bg.png)] bg-cover">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden">
          <CardContent className="p-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#0b294b] mb-6 font-['Cairo-Bold',Helvetica]">
                Reviewing your missed billings
              </h2>
              <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica]">
                Able to review and track all the missed out deadlines and due
                payments, allowing you to further manage your bills and track
                your progress in the program you admitted to.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-medium">Payment Name</TableHead>
                    <TableHead className="font-medium">Due Date</TableHead>
                    <TableHead className="font-medium">Amount</TableHead>
                    <TableHead className="font-medium text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {missedBillings.map((billing, index) => (
                    <TableRow key={index}>
                      <TableCell>{billing.paymentName}</TableCell>
                      <TableCell>{billing.dueDate}</TableCell>
                      <TableCell>{billing.amount}</TableCell>
                      <TableCell className="text-right">
                        <span className="text-blue-600 cursor-pointer hover:underline">
                          Pay now
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}