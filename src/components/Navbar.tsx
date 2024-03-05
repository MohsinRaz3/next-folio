"use client";
import React from "react";
import { Bebas_Neue } from "next/font/google";
import { navLinks } from "./utils/rawData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const beneue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex font-OfficeTimes bg-primary flex-row justify-center md:justify-around md:px-8 items-center w-full sticky top-0 mt-8 mb-14 md:mb-2">
      <div
        className={` md:text-xl md:font-bold text-2xl text-black tracking-widest`}
      >
        MOHSIN RAZ
      </div>
    <div className="hidden md:flex gap-x-5 ">
    {navLinks.map((item: any) => (
        <Link
          key={item.label}
          className={`transition-all duration-400  ease-in     font-extralight border-${ path === item.route ?"b-2" : ""} border-${
            path === item.route ? "black" : "red"
          } `}
          href={item.route}
        >
          {item.label}
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Navbar;
