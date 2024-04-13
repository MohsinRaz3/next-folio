import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {OfficeTimes} from "@/components/utils/customFonts";
import { MobileNav } from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mohsin's Portfolio",
    template : "%s -  Portfolio"
  },
  description: "I build modern webapp with next.js and fastapi",
  twitter: {
    card : "summary_large_image"
  },openGraph: {
    images: '/opengraph-image.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OfficeTimes.className}`} >
      <Navbar />
{children}
<Footer/>

<MobileNav/>
</body>
    </html>
  );
}
