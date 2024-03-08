"use client";
import { navLinks } from "./utils/rawData";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";

const oboto = Roboto({ subsets: ["greek"], weight: "500" });

export const MobileNav = () => {
  const [navPath, setNavPath] = useState("/home")


  return (
    <div className={`md:hidden  bottom-5 sticky my-10 ${oboto.className} `} >
      <div className="bg-white  w-72 md:w-96 md:text-lg md:justify-around text-sm  border border-black rounded-full mx-auto py-[1px]  flex justify-around items-center gap-x-3 ">
        {navLinks.map((item: any) => (
          <Link onClick={()=>setNavPath(item.route)}
          key={item.label}
            className={`transition-all duration-400  ease-in font-extralight py-1 bg-${
              navPath === item.route ? "black" : "white"
            } text-${
              navPath === item.route ? "white" : "black"
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
