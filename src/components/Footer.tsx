import React from 'react'
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import Icon from './utils/lucidIcons';

const Footer = () => {
  return (
    <footer className="relative bg-neo-yellow border-t-[6px] border-black overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-24 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Section - Contact Text */}
          <div className="space-y-6">
            <h2 className="font-lexend text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-black">
              INTERESTED IN DISCUSSING A PROJECT?
            </h2>
            <p className="font-public text-lg md:text-xl lg:text-2xl uppercase tracking-wide text-black leading-relaxed">
              I'D LOVE TO HEAR FROM YOU.
            </p>
          </div>

          {/* Right Section - CTA Button */}
          <div className="flex justify-center md:justify-end">
            <Link 
              href="/#Contact "
              className="bg-neo-pink text-black border-4 border-black shadow-[8px_8px_0_#000] px-8 md:px-10 py-4 md:py-5 font-lexend font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wider transition-all duration-200 hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 hover:-translate-x-1 active:shadow-[4px_4px_0_#000] active:translate-y-1 active:translate-x-1 flex items-center gap-x-3"
            >
              GET IN TOUCH
              <MoveRight className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t-4 border-black">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <Link 
              href={"https://github.com/mohsinraz3"} 
              target="_blank"
              className="bg-neo-cyan border-4 border-black shadow-[4px_4px_0_#000] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5"
            >
              <Icon name="github" />
            </Link>

            <Link 
              href={"https://twitter.com/mohsin_codes"} 
              target="_blank"
              className="bg-white border-4 border-black shadow-[4px_4px_0_#000] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5"
            >
              <Icon name="twitter" color="#000" />
            </Link>

            <Link 
              href={"https://www.linkedin.com/in/mohsinraz/"} 
              target="_blank"
              className="bg-neo-orange border-4 border-black shadow-[4px_4px_0_#000] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5"
            >
              <Icon name="linkedin" color="#000" />
            </Link>
          </div>
        </div>

        {/* Copyright/Footer Text */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="font-public text-sm md:text-base uppercase tracking-wider text-black">
            © {new Date().getFullYear()} MOHSIN RAZ. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-10 right-10 w-16 h-16 border-4 border-black bg-neo-pink rotate-45 hidden lg:block -z-10"></div>
      <div className="absolute bottom-10 left-8 w-12 h-12 rounded-full border-4 border-black bg-neo-cyan hidden md:block -z-10"></div>
    </footer>
  )
}

export default Footer