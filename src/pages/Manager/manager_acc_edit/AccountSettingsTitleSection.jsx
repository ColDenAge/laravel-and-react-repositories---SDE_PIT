import React from "react";

export default function AccountSettingsTitleSection() {
  return (
    <header className="w-full mb-6">
      <h1 className="font-bold text-5xl text-white mb-2 font-['Cairo-Bold',Helvetica]">
        Account Settings
      </h1>
      <div className="flex items-center">
        <p className="text-xl text-white font-normal font-['Cairo-Regular',Helvetica]">
          &gt; Management Mode
        </p>
      </div>
    </header>
  );
}