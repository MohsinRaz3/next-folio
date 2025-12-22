import Icon from "@/components/utils/lucidIcons";
import Link from 'next/link'
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import dynamic from "next/dynamic";
import Contact from "@/components/ContactUs";
import Image from "next/image";
import { Metadata } from "next";
import "./globals.css"


// Dynamically import Testimonials with SSR disabled to prevent document access during build
// react-slick uses styled-components which accesses document, so we must disable SSR
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
  loading: () => (
    <section className="relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-[#DBEAFE] border-t-[6px] border-b-[6px] border-black">
      <div className="mb-12 md:mb-16">
        <h2 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black text-center">
          WHAT CLIENTS SAY
        </h2>
        <div className="w-32 h-2 bg-black mx-auto mt-4"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center py-12">
        <p className="font-public text-lg uppercase">Loading testimonials...</p>
      </div>
    </section>
  ),
});

export const metadata: Metadata = {
  title :{
    absolute:  "Mohsin Raz"
  },
  description: "Full-stack & AI automation expert helping businesses streamline operations and save 15–20 hours every week with agents and workflows.",
  openGraph: {
    images: '/opengraph-image.png',
  }
}

export default function Home() {
  return (
<div>
{/* Neo-Brutalist Hero Section */}
<section className="relative min-h-[80vh] md:min-h-[90vh] bg-[#FDEEA2] border-[6px] border-black overflow-hidden">
  {/* Decorative Geometric Shapes */}
  <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full border-8 border-black bg-neo-yellow -z-10 hidden lg:block animate-float" style={{ animationDelay: '0s' }} />
  
  {/* Two Column Grid Layout */}
  <div className="relative  z-10 grid grid-cols-1 lg:grid-cols-2  lg:gap-12 items-start justify-items-center px-6 md:px-12 lg:px-48 py-10 md:py-14">
    
    {/* Left Column - Main Content */}
    <div className="flex flex-col py-10 justify-center w-full max-w-xl order-2 lg:order-1">
       {/* Tagline */}
       {/* <p className="font-public text-2xl md:text-4xl lg:text-2xl font-bold text-black">
      Hi,
      </p> */}
      {/* Main Headline */}
      <p
        className=" bg-black text-white px-6 md:px-8 py-3 md:py-4 font-lexend font-bold text-lg md:text-xl uppercase border-4 border-black shadow-[8px_8px_0_#FACC01] transition-all duration-200 hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 active:shadow-[4px_4px_0_#F3E8FF] active:translate-y-1 w-max inline-block"
      >
    I'm Mohsin Raz.
      </p>
      
      {/* Description */}
      <p className="text-base md:text-lg text-black font-public font-semibold leading-relaxed mt-4 md:mt-6">
      Full-stack & AI automation expert helping businesses streamline operations and save 15–20 hours every week with agents and workflows. </p>
      
      {/* CTA Button */}
      <a 
        href="#projects"
        className="mt-8 md:mt-12 bg-[#7BF1A7] text-black px-4 md:px-8 py-2 md:py-4 font-lexend font-bold text-base md:text-xl uppercase border-4 border-black shadow-[8px_8px_0_#000] transition-all duration-200 hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 active:shadow-[4px_4px_0_#000] active:translate-y-1 w-fit inline-block"
      >
        VIEW MY WORK
      </a>

      {/* Social Links - Neo-Brutalist Style */}
      <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-8">
        <Link 
          href={"https://github.com/mohsinraz3"} 
          target="_blank"
          className="bg-neo-yellow border-4 border-black px-1.5 md:px-4 py-1.5 md:py-2 font-public font-bold text-xs md:text-sm uppercase shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 flex items-center gap-x-2"
        >
          <Icon name="github"/> <span>GITHUB</span>
        </Link>

        <Link 
          href={"https://twitter.com/mohsin_codes"} 
          target="_blank"
          className="bg-neo-cyan border-4 border-black px-1.5 md:px-4 py-1.5 md:py-2 font-public font-bold text-xs md:text-sm uppercase shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 flex items-center gap-x-2 text-black"
        >
          <Icon name="twitter" color="#000" /> 
          <span>TWITTER</span>
        </Link>

        <Link 
          href={"https://www.linkedin.com/in/mohsinraz/"} 
          target="_blank"
          className="bg-neo-orange border-4 border-black px-1.5 md:px-4 py-1.5 md:py-2 font-public font-bold text-xs md:text-sm uppercase shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 flex items-center gap-x-2 text-black"
        >
          <Icon name="linkedin" color="#000"/>
          <span className="mt-1">LINKEDIN</span>
        </Link>
      </div>
    </div>

    {/* Right Column - Card Section */}
    <div className="flex items-center justify-center w-full max-w-md order-1 lg:order-2">
      <div className=" px-8 w-full">
  {/* ProfileCard Component */}
  <div className="flex flex-col items-center justify-center px-6    max-w-xs mx-auto">
    <div className="md:w-64 md:h-64 w-40 h-40 border-4 border-black rounded-full overflow-hidden shadow-[4px_4px_0_#000] mb-2">
      <Image
        src="/mrk.png"
        alt="Mohsin Raz"
        className="object-cover w-full h-full"
        width={256}
        height={256}
      />
    </div>
  </div>

      </div>
    </div>

  </div>
</section>

<Skills/>
<Projects/>
<Testimonials />
<Contact/>
</div>

  );
}
