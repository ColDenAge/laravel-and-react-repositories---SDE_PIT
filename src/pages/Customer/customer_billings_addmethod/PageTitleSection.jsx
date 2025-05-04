import React from "react";

const PageTitleSection = () => {
  return (
    <header className="flex flex-col gap-2 mb-8 mt-14">
      <h1 className="text-5xl font-bold text-white font-['Cairo-Bold',Helvetica] tracking-normal">
        Account Billings
      </h1>
      <div className="text-xl font-normal text-white font-['Cairo-Regular',Helvetica] tracking-normal">
        &gt; Member Mode
      </div>
    </header>
  );
};

export default PageTitleSection;