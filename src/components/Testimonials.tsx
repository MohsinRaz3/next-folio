"use client";
import React, { useRef } from "react";
import { testmonialsData } from "./utils/rawData";
import { sendGTMEvent } from '@next/third-parties/google'
import Image from "next/image";
/**
 * Related to the React Slick
 */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonial() {
  const sliderRef = useRef<any>();
  /**
   * Settings Related to the React Slick
   */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  // Alternating background colors for testimonials
  const testimonialColors = [
    'bg-neo-cyan',
    'bg-neo-pink',
    'bg-neo-yellow',
    'bg-neo-orange',
    'bg-white',
    'bg-neo-cyan',
    'bg-neo-pink',
    'bg-neo-yellow',
  ];

  return (
    <section id="testimonials" className="relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-white border-t-[6px] border-b-[6px] border-black">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black text-center">
          WHAT CLIENTS SAY
        </h2>
        {/* Decorative line */}
        <div className="w-32 h-2 bg-black mx-auto mt-4"></div>
      </div>

      {/* Container for the Slider */}
      <div className="max-w-4xl mx-auto relative px-4 md:px-6">
        <div className="border-4 border-black shadow-[8px_8px_0_#000] relative overflow-hidden">
          <Slider {...settings} ref={sliderRef} className="testimonial-slider">
            {testmonialsData.map((single, index) => {
              const bgColor = testimonialColors[index % testimonialColors.length];
              return (
                <div key={single.username} className={`${bgColor} py-6 md:py-8 px-5 md:px-8 w-full min-h-full`} style={{ outline: 'none' }}>
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 md:gap-8 items-start">
                    {/* Left Section - Avatar & Info */}
                    <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                      {/* Avatar with Neo-Brutalist border */}
                      <div className="border-4 border-black p-1.5">
                        <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-black overflow-hidden bg-white">
                          <Image
                            src={single.avatar}
                            alt={single.username}
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center items-center gap-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 md:w-6 md:h-6"
                            style={{ fill: '#F4D738', color: '#F4D738' }}
                          />
                        ))}
                      </div>

                      {/* Name & Country */}
                      <div className="space-y-1">
                        <h3 className="font-public font-bold text-base md:text-lg uppercase tracking-wider text-black">
                          {single.username.toUpperCase()}
                        </h3>
                        <p className="font-public text-xs md:text-sm uppercase tracking-wide text-black">
                          {single.country.toUpperCase()}
                        </p>
                      </div>
                    </div>

                    {/* Right Section - Testimonial Text */}
                    <div className="space-y-2 md:space-y-3">
                      {/* Opening Quote Mark */}
                      <div className="text-5xl md:text-6xl lg:text-7xl font-lexend font-bold text-black leading-none -mt-1">
                        "
                      </div>
                      
                      {/* Testimonial Comment */}
                      <p className="font-public text-sm md:text-base lg:text-lg leading-relaxed text-black font-medium uppercase tracking-wide px-1">
                        {single.comment.toUpperCase()}
                      </p>
                      
                      {/* Closing Quote Mark */}
                      <div className="text-5xl md:text-6xl lg:text-7xl font-lexend font-bold text-black leading-none text-right -mb-1">
                        "
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          {/* Custom Navigation Buttons - Neo-Brutalist Style */}
          <button
            aria-label="Previous testimonial"
            onClick={() => (sliderRef?.current?.slickPrev(), sendGTMEvent({ event: 'buttonClicked', value: 'testimonial-prev' }))}
            className="absolute top-1/2 -left-5 md:-left-6 z-20 bg-black border-4 border-black shadow-[4px_4px_0_#000] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>
          
          <button
            aria-label="Next testimonial"
            onClick={() => (sliderRef?.current?.slickNext(), sendGTMEvent({ event: 'buttonClicked', value: 'testimonial-next' }))}
            className="absolute top-1/2 -right-5 md:-right-6 z-20 bg-black border-4 border-black shadow-[4px_4px_0_#000] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:-translate-x-0.5"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>
        </div>
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 border-4 border-black bg-neo-orange rotate-45 hidden lg:block -z-10"></div>
      <div className="absolute bottom-20 left-8 w-12 h-12 rounded-full border-4 border-black bg-neo-pink hidden md:block -z-10"></div>
    </section>
  );
}