import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import OfficeTimes from "@/components/utils/customFonts";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OfficeTimes.className}>
      <Navbar />
{children}
<Footer/>
</body>
    </html>
  );
}
