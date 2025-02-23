
import React from "react";
import CallbackForm from "./CallbackForm";

const OneStepAway = () => {
  return (
    <div className="bg-[#fffcdc]  flex flex-col gap-5 pb-12">
      <div className="pt-10 md:pt-12">
        <p className="text-[22px] md:text-5xl text-center text-[#14281D] font-bold p-1 md:p-3">
          One call can change everything!
        </p>
        <p className="text-center text-sm md:text-2xl text-[#14281D] pb-4 md:pb-12">
          Let’s explore how we can help your business!
        </p>
      </div>
      <CallbackForm/>
    </div>
  );
};

export default OneStepAway;
