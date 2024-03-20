"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { testmonialsData } from "./utils/rawData";

/**
 * Related to the React Slick
 */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

/**
 * Custom Components
 */
import CenterAligner from "./CenterAligner";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonial() {
  const sliderRef = useRef<any>();
  /**
   * Settings Related to the React Slick
   */
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <CenterAligner className="bg-[#FFF9E1] px-5 py-10">
      <h1 className="text-center text-2xl font-bold sm:text-3xl pb-8">
        What clients say about Mohsin..
      </h1>
      {/* Container for the Slider */}
      <section className="max-w-[1100px] mx-auto w-full rounded-xl relative overflow-hidden">
        {/* Main Section */}
        <Slider {...settings} ref={sliderRef}>
          {testmonialsData.map((single, index) => {
            return (
              <div key={index} className="h-full">
                <section className="mx-auto bg-[#FFDCB9] p-5 sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden">
                  {/* Left Section */}
                  <div className="space-y-5 text-center">
                    {/* Image */}
                    <div className="border-8 inline-block rounded-full border-[#FFF9E1] p-2.5">
                      <div className=" mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={single.avatar}
                          alt="Boy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Other */}
                    <div>
                      <h2 className="text-xl font-medium">{single.username}</h2>
                      <p className="text-gray-600">{single.country}</p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="text-[16px] sm:text-[18px] space-y-3">
                    {/* Testimonial */}
                    <div className="text-orange-500 text-[40px]">
                      <Quote />
                    </div>
                    <p className="leading-[30px] font-bold">
                      {single.comment}
                    </p>
                    <div className="text-orange-500 text-[40px]">
                      <Quote className="ml-auto" />
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </Slider>

        {/* Custom Buttons */}
        <button
          className="absolute top-[50%] left-[10px] z-10 text-2xl text-gray-600"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
         <ChevronLeft />
        </button>
        <button
          className="absolute top-[50%] right-[10px] z-10 text-2xl text-gray-600"
          onClick={() => sliderRef?.current?.slickNext()}
        >
         <ChevronRight />
        </button>
      </section>
    </CenterAligner>
  );
}