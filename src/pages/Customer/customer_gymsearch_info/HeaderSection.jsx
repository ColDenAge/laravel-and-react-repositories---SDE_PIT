import React from "react";

const HeaderSection = () => {
  return (
    <header className="w-full mb-8 mt-14">
      <div className="container">
        <h1 className="text-5xl font-bold text-white font-['Cairo-Bold',Helvetica] tracking-normal mb-2">
          Gym Membership Management
        </h1>
        <p className="text-xl font-normal text-white font-['Cairo-Regular',Helvetica] tracking-normal">
          &gt; Member Mode
        </p>
      </div>
    </header>
  );
};

export default HeaderSection;