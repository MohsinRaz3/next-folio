import { Roboto } from "next/font/google";
import Icon from "@/components/utils/lucidIcons";
import Link from 'next/link'

const oboto = Roboto({ subsets: ["greek"], weight: "400" });

export default function Home() {
  return (
    <main className={`bg-primary md:text-3xl md:items-center md:justify-center md:leading-relaxed font-OfficeTimes text-lg text-black flex min-h-screen flex-col items-start justify-start `}>
<div className="px-7">
<h1 className=" md:flex md:flex-col md:items-center md:justify-center md:text-3xl text-black text-2xl text-start  font-OfficeTimes tracking-wide leading-10"> <span className="text-black">Hey, I'm Mohsin Raz👋🏼.</span> A fullstack and GenAI Developer.</h1>

<div className={`text-sm md:flex md:gap-x-5 md:justify-center md:pt-8`}>
<Link href={"https://github.com/mohsinraz3"} target="_blank">
<span className="bg-[#BFDEC0] border-black border rounded-3xl w-32 px-3 py-0.5 my-6 flex items-center gap-x-3 text-black">
  <Icon name="github"/> <p>Github</p>
</span>
</Link>

<Link href={"https://twitter.com/mohsin_codes"} target="_blank">
<span className="bg-[#29509D] text-white border-black border rounded-3xl w-32 px-3 py-1 my-6 flex gap-x-3">
<Icon name="twitter" color="#1C96E8" /> 
<p className="pt-1">Twitter</p>
</span> 
</Link>

<Link href={"https://www.linkedin.com/in/mohsinraz/"} target="_blank"><span className="bg-[#FFDCB9] border-black  border rounded-3xl w-32 px-3 py-0.5 my-6 items-start flex gap-x-3">
 <Icon name="linkedin" color="#126BC4"/>
 <p className="pt-1">LinkedIn</p>
 </span></Link>
</div>

<div className="md:flex md:flex-col md:items-center md:justify-center md:mx-auto  md:px-24">
<h2 className="mt-10 mb-2 text-base text-black font-bold md:text-3xl md:py-5">ABOUT ME ...</h2>
<p className="md:pl-12 ">I build modern AI and web application using cutting-edge technologies. Experienced in generative AI and Web3 development, proficient in Python & Javascript languages. On a mission to help businesses grow, by seamlessly integrating AI automation into their workflow. </p>
</div>

</div>

    </main>
  );
}
