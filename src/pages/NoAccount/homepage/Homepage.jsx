import React from "react";
import { BillingReviewSection } from "./BillingReviewSection";
import { CallToActionSection } from "./CallToActionSection";
import { FeaturesOverviewSection } from "./FeaturesOverviewSection";
import { HeroSection } from "./HeroSection";
import { MissedBillingsSection } from "./MissedBillingsSection";
import { SimplificationSection } from "./SimplificationSection";

export default function Homepage() {
  return (
    <div
      className="bg-background flex flex-col items-center w-full"
      data-model-id="1:1553"
    >
      <div className="w-full overflow-hidden">
        <HeroSection />
        <SimplificationSection />
        <BillingReviewSection />
        <MissedBillingsSection />
        <FeaturesOverviewSection />
        <CallToActionSection />
      </div>
      <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the homepage</h1>
      <p className="mt-4 text-lg">Standard view of the homepage, has not logged in.</p>
    </div>
    </div>
  );
}
export function HeroSection() {
  return (
    <section className="w-full py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold">Hero Section</h2>
      <p className="mt-4 text-lg">Catchy marketing content goes here.</p>
    </section>
  );
}
export function SimplificationSection() {
  return (
    <section className="w-full py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold">Simplification</h2>
      <p className="mt-4 text-lg">Simplification description about GymWatch.</p>
    </section>
  );
}
export function BillingReviewSection() {
  return (
    <section className="w-full py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold">Billing Review</h2>
      <p className="mt-4 text-lg">Description about reviewing your bills and payments.</p>
    </section>
  );
}
export function MissedBillingSection() {
  return (
    <section className="w-full py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold">Missed Billing</h2>
      <p className="mt-4 text-lg">Description about missed bills and payments.</p>
    </section>
  );
}
export function FeaturesOverviewSection() {
  return (
    <section className="w-full py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold">Features Overview</h2>
      <p className="mt-4 text-lg">Description about the overall features of GymWatch.</p>
    </section>
  );
}
export function CallToActionSection() {
  return (
    <section className="w-full py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold">Call To Action</h2>
      <p className="mt-4 text-lg">This is where people can sign up at the bottom part of the homepage after reading the contents.</p>
    </section>
  );
}