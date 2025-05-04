import React from "react";

const BillingReviewSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image section */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative">
              {/* Dashboard image */}
              <img
                className="w-full h-auto relative z-10"
                alt="Payment dashboard interface"
                src=""
              />
              {/* Background wave decoration */}
              <div className="absolute bottom-0 left-0 w-full h-3/4 z-0">
                <img
                  className="w-full h-auto object-cover"
                  alt="Background decoration"
                  src=""
                />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b294b] font-['Cairo-Bold',Helvetica] leading-tight">
              Check your payment informations
            </h2>
            <p className="text-xl text-[#0b294b] font-['Cairo-Regular',Helvetica] leading-relaxed">
              View your overall payments and checks, along with able to control
              how you can pay for membership. Automatic notifications will be
              sent regarding about deadlines and membership information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingReviewSection;