
import React from "react";
import CallbackForm from "./CallbackForm";

const OneStepAway = () => {
  return (
    <div className="bg-black/5 antialiased bg-grid-white/[0.02] flex flex-col gap-5 pb-12">
      <div className="pt-10 md:pt-12">
        <p className="text-[22px] md:text-5xl text-center text-white font-bold p-1 md:p-3">
          One call can change everything!
        </p>
        <p className="text-center text-sm md:text-2xl text-white pb-4 md:pb-12">
          Let’s explore how we can help your business!
        </p>
      </div>
      <CallbackForm/>
    </div>
  );
};

export default OneStepAway;
