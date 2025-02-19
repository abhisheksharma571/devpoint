"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "../hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const CallbackForm2 = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xjkgpqgl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await response.json();

      if (data.ok) {
        toast({
          title: "Request sent Successfully!",
          description: "Please wait for our callback",
        });
        e.target.reset();
        setOpen(false);
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="bg-lime-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-lime-400 transition">
            Request a Callback
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You are one step away! Fill out the form.</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name*" required className="w-full px-4 py-2 border rounded" />
            <input type="email" name="email" placeholder="Your Email*" required className="w-full px-4 py-2 border rounded" />
            <input type="tel" name="mobile" placeholder="Your Mobile No.*" pattern="[0-9]{10}" required className="w-full px-4 py-2 border rounded" />
            <input type="text" name="company" placeholder="Your Company Name" className="w-full px-4 py-2 border rounded" />
            <button type="submit" className="bg-black text-white font-semibold w-full py-2 rounded">
              Submit Request
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CallbackForm2;
