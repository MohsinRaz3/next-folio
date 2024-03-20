"use client";
import { navLinks } from "./utils/rawData";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";


const oboto = Roboto({ subsets: ["greek"], weight: "500" });

export const MobileNav = () => {
  const [navPath, setNavPath] = useState("/")


  return (
    <div className={`md:hidden  bottom-10 sticky mt-10 ${oboto.className}`} >
      <div className="bg-[#FFDCB9] h-9 w-72 md:w-96 md:text-lg md:justify-around text-sm  border border-black rounded-full mx-auto py-[2px]   flex justify-around items-center gap-x-3 ">
        {navLinks.map((item: any) => (
          <Link onClick={() => setNavPath(item.route)}
            key={item.label}
            className={`transition-all  duration-400  ease-in font-extralight py-1.5 border border-0.1 border-${navPath == item.route ? "black" : "none"} bg-${navPath == item.route ? "[#BFDEC0]" : "[#000]"
              } text-${navPath == item.route ? "black" : "black"
              } px-2   rounded-2xl`}

            href={item.route}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
