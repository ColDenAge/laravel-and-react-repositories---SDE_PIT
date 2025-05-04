import React from "react";

export default function HeaderSection() {
  return (
    <header className="w-full py-14 bg-transparent">
      <div className="container">
        <h1 className="text-5xl font-bold text-white font-['Cairo-Bold',Helvetica] tracking-normal leading-normal">
          Gym Membership Management
        </h1>
        <div className="mt-5">
          <p className="text-xl font-normal text-white font-['Cairo-Regular',Helvetica] tracking-normal leading-normal">
            &gt; Member Mode
          </p>
        </div>
      </div>
    </header>
  );
}