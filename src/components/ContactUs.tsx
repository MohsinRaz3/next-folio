"use client";
import React from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzbnaqzz");

  if (state.succeeded) {
    return (
      <div className="bg-primary">
        <p className="w-9/12 h-[40vh] md:h-[50vh] text-center text-white bg-primary text-xl md:text-2xl md:w-10/12 mx-auto ">
          Thanks for your reaching out to me, I'll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-primary overflow-y-hidden " id="Contact">
        <div className=" m-auto w-full sm:w-11/12 sm:mx-auto  md:w-11/12   md:ml-auto  ">
        {/* <h1 className="text-center text-2xl font-bold sm:text-3xl pb-8">
       Contact Me
      </h1> */}
        </div>
        <section className=" lg:flex lg:flex-row  transition-all w-11/12 sm:w-10/12 md:w-11/12 mx-auto">
          <div className="w-11/12 m-auto ml-0   py-12  lg:w-6/12">
            <div className="flex flex-col pl-1   mx-auto justify-center items-center">
            <h1 className="text-centertext-slate-800 text-4xl font-bold sm:text-3xl pb-5">
        Got a website Idea?
      </h1>
            
            </div>
          </div>
          <div className=" bg-[#FFDCB9] px-3 mx-auto rounded-lg   w-full lg:w-6/12">
            <form
              onSubmit={handleSubmit}
              className="w-11/12 m-auto ml-0 lg:ml-auto py-12 md:w-10/12"
            >
              <fieldset className="">
                <div>
                  <label
                    className="text-slate-800 my-2 text-lg font-semibold "
                    htmlFor="name"
                  >
                    Name
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="first name "
                  required
                  className="w-full h-10 my-2 px-3 rounded-sm text-lg text-slate-800 bg-[#BFDEC0]  outline-cyann"
                />
              </fieldset>
              <fieldset className="my-6">
                <div>
                  {" "}
                  <label
                    className="text-slate-800 my-6 text-lg font-semibold "
                    htmlFor="msg-name"
                  >
                    Last Name
                  </label>
                </div>
                <input
                  type="text"
                  name="last name"
                  placeholder="last name"
                  className="w-full h-10 my-2 px-3 rounded-sm text-lg text-slate-800 bg-[#BFDEC0]  outline-cyann"
                />
              </fieldset>
              <fieldset>
                <div>
                  {" "}
                  <label className="text-slate-800 my-6 text-lg font-semibold ">Email</label>
                </div>{" "}
                <input
                  type="email"
                  required
                  placeholder="yourname@gmail.com"
                  className="w-full h-10 my-2 px-3 rounded-sm text-lgtext-slate-800 bg-[#BFDEC0]  outline-cyann"
                />
              </fieldset>
              <fieldset className="my-6">
                <div>
                  {" "}
                  <label className="text-slate-800 my-6 text-lg font-semibold ">
                    Message
                  </label>
                </div>{" "}
                <textarea
                  name="Enter your message"
                  required
                  id=""
                  className="w-full h-40 my-2 px-3 rounded-sm text-lg text-slate-800 bg-[#BFDEC0]  outline-cyann"
                  placeholder="Enter your message"
                  cols={10}
                  rows={10}
                ></textarea>
              </fieldset>
              {/* <Link href={"#"}>
              <input
                type="submit"
                value="Submit"
                className="w-full h-10 my-0 px-3 rounded-sm text-lg text-white bg-[#4d517b]  outline-cyann hover:bg-[#888ed1]"
              />
            </Link> */}
              <button
                value="Submit"
                type="submit"
                disabled={state.submitting}
                className="w-full h-10 my-2 px-3 rounded-md text-lg font-medium text-white bg-[#29509D] hover:bg-cyann hover:text-slate-800  outline-cyann sm:w-3/12 transition-all"
              >
                {" "}
                send
              </button>
            </form>
          </div>
        </section>
    </div>
  );
}