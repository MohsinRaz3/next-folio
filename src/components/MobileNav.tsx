"use client";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";


const oboto = Roboto({ subsets: ["greek"], weight: "500" });

export const MobileNav = () => {
  const [hashPath, setHashpath] = useState("/")
  const navPath = usePathname()

  return (
    <div className={`md:hidden  bottom-10 sticky mt-10 ${oboto.className}`} >
      <div className="bg-[#FFDCB9] h-9 w-72 md:w-96 md:text-lg md:justify-around text-sm  border border-black rounded-full mx-auto py-[2px] px-2  flex justify-around items-center gap-x-3 ">

        <Link onClick={()=>setHashpath("/")}
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${hashPath == "/" ? "black" : "none"} bg-${hashPath == "/" ? "[#BFDEC0]" : "[#000]"
            } text-${hashPath == "/" ? "black" : "black"} px-1.5   rounded-2xl`} href={"/"} > Home
        </Link>

        <a id="projects" onClick={()=> setHashpath("#projects")}
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${ `${hashPath}` == "#projects" ? "black" : "none"} bg-${"#projects" == `${hashPath}` ? "[#BFDEC0]" : "[#000]"
            } text-${"#projects" == `${hashPath}` ? "black" : "black"} px-1   rounded-2xl`} href={`/#projects`} > Projects
        </a>

        
        <a id="testimonials" onClick={()=> setHashpath("#testimonials")}
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${hashPath == "#testimonials" ? "black" : "none"} bg-${hashPath == "#testimonials" ? "[#BFDEC0]" : "[#000]"
            } text-${hashPath == "#testimonials" ? "black" : "black"} px-1   rounded-2xl`} href={"/#testimonials"} > Testimonials
        </a>

        <Link onClick={()=>setHashpath("/blogs")}
          className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${hashPath == "/blogs" ? "black" : "none"} bg-${hashPath == "/blogs" ? "[#BFDEC0]" : "[#000]"
            } text-${hashPath == "/blogs" ? "black" : "black"} px-1   rounded-2xl`} href={"/blogs"} > Blogs
        </Link>

        

      </div>
    </div>
  );
};
