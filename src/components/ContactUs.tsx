"use client";
import React from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzbnaqzz");

  if (state.succeeded) {
    return (
      <section id="Contact" className="relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-black border-t-[6px] border-b-[6px] border-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neo-pink border-4 border-black shadow-[8px_8px_0_#000] p-8 md:p-12 text-center">
            <p className="font-public text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-black leading-relaxed">
              THANKS FOR REACHING OUT TO ME. I'LL GET BACK TO YOU AS SOON AS POSSIBLE.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="Contact" className="relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-black border-t-[6px] border-b-[6px] border-black">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white text-center">
          GOT A WEBSITE IDEA?
        </h2>
        {/* Decorative line */}
        <div className="w-32 h-2 bg-neo-yellow mx-auto mt-4"></div>
      </div>

      {/* Contact Form Container */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0a0a0a] border-4 border-black shadow-[8px_8px_0_#000] p-6 md:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <fieldset>
              <label
                className="font-public text-base md:text-lg font-bold uppercase tracking-wider text-white block mb-2"
                htmlFor="name"
              >
                FIRST NAME
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="FIRST NAME"
                required
                className="w-full h-12 md:h-14 px-4 md:px-5 bg-black border-4 border-black text-white placeholder-gray-500 font-public text-base md:text-lg uppercase tracking-wide focus:border-neo-green focus:outline-none transition-all duration-200"
              />
            </fieldset>

            {/* Last Name */}
            <fieldset>
              <label
                className="font-public text-base md:text-lg font-bold uppercase tracking-wider text-white block mb-2"
                htmlFor="lastname"
              >
                LAST NAME
              </label>
              <input
                type="text"
                name="last name"
                id="lastname"
                placeholder="LAST NAME"
                className="w-full h-12 md:h-14 px-4 md:px-5 bg-black border-4 border-black text-white placeholder-gray-500 font-public text-base md:text-lg uppercase tracking-wide focus:border-neo-green focus:outline-none transition-all duration-200"
              />
            </fieldset>

            {/* Email */}
            <fieldset>
              <label
                className="font-public text-base md:text-lg font-bold uppercase tracking-wider text-white block mb-2"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="YOURNAME@GMAIL.COM"
                className="w-full h-12 md:h-14 px-4 md:px-5 bg-black border-4 border-black text-white placeholder-gray-500 font-public text-base md:text-lg uppercase tracking-wide focus:border-neo-green focus:outline-none transition-all duration-200"
              />
            </fieldset>

            {/* Message */}
            <fieldset>
              <label
                className="font-public text-base md:text-lg font-bold uppercase tracking-wider text-white block mb-2"
                htmlFor="message"
              >
                MESSAGE
              </label>
              <textarea
                name="Enter your message"
                id="message"
                required
                placeholder="ENTER YOUR MESSAGE"
                rows={6}
                className="w-full px-4 md:px-5 py-3 md:py-4 bg-black border-4 border-black text-white placeholder-gray-500 font-public text-base md:text-lg uppercase tracking-wide focus:border-neo-green focus:outline-none transition-all duration-200 resize-none"
              ></textarea>
            </fieldset>

            {/* Submit Button */}
            <button
              aria-label="Submit Button"
              type="submit"
              disabled={state.submitting}
              className="w-full md:w-auto bg-neo-pink text-black border-4 border-black shadow-[8px_8px_0_#000] px-8 md:px-10 py-3 md:py-4 font-lexend font-bold text-lg md:text-xl uppercase tracking-wider transition-all duration-200 hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 hover:-translate-x-1 active:shadow-[4px_4px_0_#000] active:translate-y-1 active:translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[8px_8px_0_#000] disabled:hover:translate-y-0 disabled:hover:translate-x-0"
            >
              {state.submitting ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-4 border-white bg-neo-cyan rotate-45 hidden lg:block -z-10"></div>
      <div className="absolute bottom-20 right-8 w-12 h-12 rounded-full border-4 border-white bg-neo-orange hidden md:block -z-10"></div>
    </section>
  );
}