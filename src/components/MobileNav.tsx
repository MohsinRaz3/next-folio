"use client";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";
import { usePathname } from "next/navigation";


const oboto = Roboto({ subsets: ["greek"], weight: "500" });

export const MobileNav = () => {
  
  const navPath = usePathname()

  return (
    <div className={`md:hidden  bottom-10 sticky mt-10 ${oboto.className}`} >
      <div className="bg-[#FFDCB9] h-9 w-72 md:w-96 md:text-lg md:justify-around text-sm  border border-black rounded-full mx-auto py-[2px] px-2  flex justify-around items-center gap-x-3 ">

        <Link
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${navPath == "/" ? "black" : "none"} bg-${navPath == "/" ? "[#BFDEC0]" : "[#000]"
            } text-${navPath == "/" ? "black" : "black"} px-1.5   rounded-2xl`} href={"/"} > Home
        </Link>

        <a id="projects"
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${navPath == "/#projects" ? "black" : "none"} bg-${navPath == "/#projects" ? "[#BFDEC0]" : "[#000]"
            } text-${navPath == "/#projects" ? "black" : "black"} px-1   rounded-2xl`} href={"/#projects"} > Projects
        </a>

        
        <a id="testimonials"
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${navPath == "/#testimonials" ? "black" : "none"} bg-${navPath == "/#testimonials" ? "[#BFDEC0]" : "[#000]"
            } text-${navPath == "/#testimonials" ? "black" : "black"} px-1   rounded-2xl`} href={"/#testimonials"} > Testimonials
        </a>

        <Link
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${navPath == "/blogs" ? "black" : "none"} bg-${navPath == "/blogs" ? "[#BFDEC0]" : "[#000]"
            } text-${navPath == "/blogs" ? "black" : "black"} px-1   rounded-2xl`} href={"/blogs"} > Blogs
        </Link>

        

      </div>
    </div>
  );
};
