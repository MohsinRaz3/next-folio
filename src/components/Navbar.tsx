"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "./utils/rawData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [hashPath, setHashpath] = useState("/");
  const navPath = usePathname();

  // Update hash path based on current pathname
  useEffect(() => {
    if (navPath === "/") {
      setHashpath("/");
    } else if (navPath === "/blogs") {
      setHashpath("/blogs");
    }
  }, [navPath]);

  // Helper function to check if a route is active
  const isActiveRoute = (route: string) => {
    if (route === "/") {
      return navPath === "/" && hashPath === "/";
    }
    if (route === "/blogs") {
      return navPath === "/blogs" || hashPath === "/blogs";
    }
    if (route.startsWith("#")) {
      return hashPath === route;
    }
    return false;
  };

  // Handle click to update hash path
  const handleLinkClick = (route: string) => {
    setHashpath(route);
  };

  return (
    <nav className="w-full sticky top-0 z-50 border-b-[0.1px] border-black bg-[#FDFDFD]">
      <div className="flex flex-row justify-evenly items-center w-full px-4 md:px-8 py-3 md:py-5 gap-4 md:gap-6">
        {/* Logo/Name */}
        <Link 
          href={"/"}
          className="font-lexend text-lg md:text-xl px-14 lg:text-2xl font-bold uppercase tracking-tight text-black hover:scale-105 transition-transform duration-200"
        >
          MOHSIN RAZ
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-x-2 lg:gap-x-3">
          {navLinks.map((item: any) => {
            const isActive = isActiveRoute(item.route);
            return (
              <Link
                key={item.label}
                href={item.route}
                onClick={() => handleLinkClick(item.route)}
                className={`
                  font-public font-bold text-xs md:text-sm lg:text-sm uppercase tracking-wider
                  px-3 md:px-4 py-1.5 md:py-2
                  border-2 border-black
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-neo-orange text-black shadow-[3px_3px_0_#000]"
                      : "bg-white text-black shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5"
                  }
                `}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
