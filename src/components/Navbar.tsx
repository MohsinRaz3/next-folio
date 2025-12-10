"use client";
import React from "react";
import { navLinks } from "./utils/rawData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  // Helper function to check if a route is active
  const isActiveRoute = (route: string) => {
    if (route === "/") {
      return path === "/";
    }
    // For hash routes, we check if they start with #
    if (route.startsWith("#")) {
      return false; // Hash routes don't match pathname, but we can enhance this with scroll detection if needed
    }
    return path === route;
  };

  return (
    <nav className="w-full sticky top-0 z-50 border-b-[6px] border-black bg-neo-yellow">
      <div className="flex flex-row justify-between items-center w-full px-4 md:px-8 py-4 md:py-6">
        {/* Logo/Name */}
        <Link 
          href={"/"}
          className="font-lexend text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-black hover:scale-105 transition-transform duration-200"
        >
          MOHSIN RAZ
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-x-3 lg:gap-x-4">
          {navLinks.map((item: any) => {
            const isActive = isActiveRoute(item.route);
            return (
              <Link
                key={item.label}
                href={item.route}
                className={`
                  font-public font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider
                  px-4 md:px-5 py-2 md:py-3
                  border-4 border-black
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-neo-pink text-black shadow-[4px_4px_0_#000]"
                      : "bg-white text-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5"
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
