import Image from "next/image";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Github, Linkedin, Twitter } from 'lucide-react';
const oboto = Roboto({ subsets: ["greek"], weight: "500" });

export default function Home() {
  return (
    <main className={`bg-primary ${oboto.className} flex min-h-screen flex-col items-start justify-start `}>
<div className="px-7">
  
<Navbar />

<h1 className="text-gray-500 text-2xl text-start"> <span className="text-txtwhite">Hey, I'm Mohsin Raz👋🏼.</span> A fullstack and GenAI Developer.</h1>
<div className="my-8  flex gap-x-3">
  <Github color="white" size={24} /> <span>Github</span>
</div>
<div className="my-8  flex gap-x-3">
  <Twitter color={"#08BAEF"} size={24} /> <span>Twitter</span>
</div>
<div className="my-8  flex gap-x-3">
  <Linkedin color={"#126BC4"} size={24} /> <span>LinkedIn</span>
</div>
</div>
    </main>
  );
}
