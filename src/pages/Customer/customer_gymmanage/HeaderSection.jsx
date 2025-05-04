import React from "react";

const HeaderSection = () => {
  return (
    <header className="w-full py-14 flex flex-col gap-2">
      <h1 className="text-5xl font-bold text-white tracking-normal font-['Cairo-Bold',Helvetica]">
        Gym Membership Management
      </h1>
      <div className="text-xl font-normal text-white tracking-normal font-['Cairo-Regular',Helvetica]">
        &gt; Member Mode
      </div>
    </header>
  );
};

export default HeaderSection;