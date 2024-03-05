"use client";
import { navLinks } from "./utils/rawData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";

const oboto = Roboto({ subsets: ["greek"], weight: "500" });

export const Footer = () => {
  const path = usePathname()


  return (
    <div className={`md:hidden  bottom-5 sticky my-10 ${oboto.className} `} >
      <div className="bg-white  w-72 md:w-96 md:text-lg md:justify-around text-sm  border border-black rounded-full mx-auto py-[1px]  flex justify-around items-center gap-x-3 ">
        {navLinks.map((item: any) => (
          <Link
          key={item.label}
            className={`transition-all duration-400  ease-in font-extralight py-1 bg-${
              path === item.route ? "black" : "white"
            } text-${
              path === item.route ? "white" : "black"
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
