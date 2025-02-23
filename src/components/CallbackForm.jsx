"use client";
import React from "react";
import { useToast } from "../hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

const CallbackForm = () => {
    const { toast } = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mrbedjle", {  
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await response.json();

      if (data.ok) {
        toast({
            title: "Request sent Successfully!",
            description: "Please wait for our callback",
            className: "bg-white",
          })
        e.target.reset();
      } else {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            className: "bg-red-500",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
      }
    } catch (error) {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            className: "bg-red-500",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-transparent p-1 rounded-full max-w-[353px] md:max-w-md mx-auto border border-gray-700"
      >
        <input
          type="tel"
          name="mobile"
          placeholder="Enter Your Mobile No.*"
          pattern="[0-9]{10}"
          className="bg-transparent flex-1 px-4 py-2 text-white placeholder-gray-400 outline-none"
          required
        />

        <button
          type="submit"
          className="bg-[#14281D] text-[#fffcdc]/90  font-semibold px-5 py-2 rounded-full"
        >
          Request a Callback
        </button>
      </form>
    </>
  );
};

export default CallbackForm;
