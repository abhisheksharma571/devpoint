
import React from "react";
import BlurText from "../components/bitsui/BlurText";
import CallbackForm from "./CallbackForm";

const OneStepAway = () => {
  return (
    <div className="h-auto py-[60px] bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col gap-5">
      <BlurText
        text="Want your Business to grow?!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-[60px] text-white text-center font-semibold"
      />
      <CallbackForm/>
    </div>
  );
};

export default OneStepAway;
