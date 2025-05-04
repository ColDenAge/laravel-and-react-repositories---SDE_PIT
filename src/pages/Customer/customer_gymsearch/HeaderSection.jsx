import React from "react";

export default function HeaderSection() {
  return (
    <header className="w-full mb-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-5xl text-white font-['Cairo-Bold',Helvetica] tracking-normal">
          Gym Membership Management
        </h1>
        <div className="text-xl text-white font-['Cairo-Regular',Helvetica] tracking-normal">
          &gt; Member Mode
        </div>
      </div>
    </header>
  );
}