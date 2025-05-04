import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function PerformanceStatsSection() {
  // Data for payment cards
  const paymentStats = [
    { amount: "Php 14,583.33", status: "Paid" },
    { amount: "Php 2,648.46", status: "Scheduled" },
    { amount: "Php 684.63", status: "Due" },
  ];

  return (
    <section className="w-full py-6">
      <div className="mb-4">
        <h1 className="text-5xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-xl font-normal text-white">&gt; Member Mode</p>
      </div>

      <h2 className="text-3xl font-medium text-white mb-6">
        Total payments (this month)
      </h2>

      <div className="flex flex-wrap gap-4">
        {paymentStats.map((stat, index) => (
          <Card
            key={index}
            className="flex-1 bg-white/10 border-0 rounded-xl text-white"
          >
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="text-3xl font-medium text-center mb-8">
                {stat.amount}
              </p>
              <p className="text-xl font-normal text-center">{stat.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}