"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks } from "./utils/rawData";

export const MobileNav = () => {
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
    <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <div className="bg-neo-yellow border-4 border-black shadow-[8px_8px_0_#000] max-w-sm mx-auto px-2 py-2">
        <div className="flex justify-around items-center gap-1">
          {navLinks.map((item) => {
            const isActive = isActiveRoute(item.route);
            return (
              <Link
                key={item.label}
                href={item.route}
                onClick={() => handleLinkClick(item.route)}
                className={`
                  font-public font-bold text-xs uppercase tracking-wider
                  px-2 py-2 flex-1 text-center
                  border-2 border-black
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-neo-pink text-black shadow-[2px_2px_0_#000]"
                      : "bg-white text-black shadow-[2px_2px_0_#000] active:shadow-[1px_1px_0_#000] active:translate-y-0.5 active:translate-x-0.5"
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
