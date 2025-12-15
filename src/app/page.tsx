import Icon from "@/components/utils/lucidIcons";
import Link from 'next/link'
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import dynamic from "next/dynamic";
import Contact from "@/components/ContactUs";
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
  description: "I create modern webapp with n8n, next.js and fastapi",
  openGraph: {
    images: '/opengraph-image.png',
  }
}

export default function Home() {
  return (
<div>
{/* Neo-Brutalist Hero Section */}
<section className="relative min-h-screen bg-[#FDEEA2] border-[6px] border-black overflow-hidden">
  {/* Decorative Geometric Shapes */}
  <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full border-8 border-black bg-neo-yellow -z-10 hidden md:block animate-float" style={{ animationDelay: '0s' }} />
  
  {/* Main Content */}
  <div className="relative z-10 flex flex-col justify-center min-h-screen pl-[5%] md:pl-[20%] pr-8 md:pr-16 pb-20 md:pb-28">
     {/* Tagline */}
     <p className="font-public text-2xl md:text-4xl lg:text-2xl font-bold text-black mt-4 md:mt-6">
    Hi,
    </p>
    {/* Main Headline */}
    <p
      className="mt-4  bg-black text-white px-6 md:px-8 py-3 md:py-4 font-lexend font-bold text-lg md:text-xl uppercase border-4 border-black shadow-[8px_8px_0_#FACC01] transition-all duration-200 hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 active:shadow-[4px_4px_0_#F3E8FF] active:translate-y-1 w-max inline-block"
    >
  I'm Mohsin Raz.
    </p>
    
  
    
    {/* Description */}
    <p className="text-base md:text-lg max-w-2xl text-black font-public font-semibold leading-relaxed mt-4 md:mt-6">
      A full-stack developer and AI automation expert. I help businesses streamline operations, reduce manual work and scale with custom apps and automated workflows.<br /><br />
      I specialize in building fullstack web applications and provide low-code solutions using n8n, integrating APIs and self-hosting scalable and efficient solutions.
    </p>
    
    {/* CTA Button */}
    <a 
      href="#projects"
      className="mt-12 bg-[#7BF1A7] text-black px-6 md:px-8 py-3 md:py-4 font-lexend font-bold text-lg md:text-xl uppercase border-4 border-black shadow-[8px_8px_0_#000] transition-all duration-200 hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 active:shadow-[4px_4px_0_#000] active:translate-y-1 w-fit inline-block"
    >
      VIEW MY WORK
    </a>

    {/* Social Links - Neo-Brutalist Style */}
    <div className="flex flex-wrap gap-4 mt-8 md:mt-12">
      <Link 
        href={"https://github.com/mohsinraz3"} 
        target="_blank"
        className="bg-neo-yellow border-4 border-black px-4 py-2 font-public font-bold text-sm uppercase shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 flex items-center gap-x-2"
      >
        <Icon name="github"/> <span>GITHUB</span>
      </Link>

      <Link 
        href={"https://twitter.com/mohsin_codes"} 
        target="_blank"
        className="bg-neo-cyan border-4 border-black px-4 py-2 font-public font-bold text-sm uppercase shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 flex items-center gap-x-2 text-black"
      >
        <Icon name="twitter" color="#000" /> 
        <span>TWITTER</span>
      </Link>

      <Link 
        href={"https://www.linkedin.com/in/mohsinraz/"} 
        target="_blank"
        className="bg-neo-orange border-4 border-black px-4 py-2 font-public font-bold text-sm uppercase shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 flex items-center gap-x-2 text-black"
      >
        <Icon name="linkedin" color="#000"/>
        <span>LINKEDIN</span>
      </Link>
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
