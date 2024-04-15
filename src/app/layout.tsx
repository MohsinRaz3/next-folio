import GoogleTagManager from "@/components/utils/GoogleTagManager";
// import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { OfficeTimes } from "@/components/utils/customFonts";
import { MobileNav } from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohsinraz.vercel.app"),
  title: {
    default: "Mohsin's Portfolio",
    template: "%s -  Portfolio"
  },
  description: "I build modern webapp with next.js and fastapi",
  verification: {
    google: 'google-site-verification=12345'
  },
  twitter: {
    card: "summary_large_image"
  }, openGraph: {
    images: '/og-image.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <head><GoogleTagManager containerId="GTM-TRVMTP3M" /></head>
      <body className={`${OfficeTimes.className}`} >
      {/* <noscript> <iframe src="https://www.googletagmanager.com/gtm.js?id=GTM-TRVMTP3M"></iframe></noscript> */}

        <Navbar />
        {children}
        <Footer />

        <MobileNav />
      </body>
    </html>
  );
}
