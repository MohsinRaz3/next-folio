"use client";
import React from "react";
import { useForm } from "@formspree/react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzbnaqzz");

  if (state.succeeded) {
    return (
      <section id="Contact" className="relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-primary border-t-[6px] border-b-[6px] border-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neo-pink border-4 border-black shadow-[8px_8px_0_#000] rounded-lg p-8 md:p-12 text-center">
            <p className="font-public text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-black leading-relaxed">
              THANKS FOR REACHING OUT TO ME. I'LL GET BACK TO YOU AS SOON AS POSSIBLE.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="Contact" className="relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-primary border-t-[6px] border-b-[6px] border-black">
      {/* Main Container */}
      <h2 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black text-center">
          CONTACT ME
        </h2>
         {/* Decorative line */}
  <div className="w-32 h-2 bg-neo-orange mx-auto mt-4"></div>
      <div className="max-w-4xl mx-auto">
          {/* Send Us A Message Form */}
          <div className="bg-[#DBFCE7] border-4 mt-12 border-black shadow-[4px_4px_0_#000] rounded-lg p-6 md:p-12 lg:p-28">
            <h2 className="font-lexend text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-6 md:mb-8">
              SEND ME A MESSAGE
            </h2>
 
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name */}
              <fieldset>
                <label
                  className="font-public text-sm md:text-base font-bold uppercase tracking-wider text-black block mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full h-12 md:h-14 px-4 md:px-5 bg-white border-2 border-black rounded-lg text-black placeholder-gray-500 font-public text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
                />
              </fieldset>

              {/* Email */}
              <fieldset>
                <label
                  className="font-public text-sm md:text-base font-bold uppercase tracking-wider text-black block mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full h-12 md:h-14 px-4 md:px-5 bg-white border-2 border-black rounded-lg text-black placeholder-gray-500 font-public text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
                />
              </fieldset>


              {/* Message */}
              <fieldset>
                <label
                  className="font-public text-sm md:text-base font-bold uppercase tracking-wider text-black block mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="Enter your message"
                  id="message"
                  required
                  placeholder="Tell us how we can help..."
                  rows={6}
                  className="w-full px-4 md:px-5 py-3 md:py-4 bg-white border-2 border-black rounded-lg text-black placeholder-gray-500 font-public text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 resize-none"
                ></textarea>
              </fieldset>

              {/* Submit Button */}
              <button
                aria-label="Submit Button"
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#FFD100] text-black border-4 border-black shadow-[4px_4px_0_#000] rounded-lg px-8 md:px-10 py-3 md:py-4 font-public font-bold text-base md:text-lg uppercase tracking-wider transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0_#000] disabled:hover:translate-y-0 disabled:hover:translate-x-0"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
      </div>
    </section>
  );
}