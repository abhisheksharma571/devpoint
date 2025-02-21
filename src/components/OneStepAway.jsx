
import React from "react";
import CallbackForm from "./CallbackForm";

const OneStepAway = () => {
  return (
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col gap-5 pb-12">
      <p className="text-3xl md:text-5xl text-center text-white pt-20 pb-2">
        One call can change everything!
      </p>
      <p className="text-center text-xl md:text-2xl text-white pb-12">
        Let’s explore how we can help your business!
      </p>
      <CallbackForm/>
    </div>
  );
};

export default OneStepAway;
