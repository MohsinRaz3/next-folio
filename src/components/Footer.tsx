import React from 'react'
import {CaliberFont, OfficeTimes,CalibreReg} from "@/components/utils/customFonts";
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import Icon from './utils/lucidIcons';

const Footer = () => {
  return (
    <div>
        <div className={`px-7 py-6 ${CaliberFont.className } flex flex-col items-start mt-16 -mb-28 md:px-24  lg:px-44   h-[380px] bg-[#29509D]`}>
<p className=' font-bold py-2 text-lg md:text-xl text-primary'>Contact Us</p>
<p className={`text-2xl pb-5 text-primary ${OfficeTimes.className}`}>Interested in discussing a project together? I'd love to hear from you.</p>
<div className='md:pl-28'> 
<Link href={"/contact"} className={`flex items-center ${CalibreReg.className} px-6 py-3  bg-white border-black border-[1.5px] text-4xl rounded-full`} >Get in touch <MoveRight className='pt-2' /></Link>
</div>
 </div>

 <div className={`hidden text-sm md:flex -mb-28 items-end justify-end md:gap-x-5 md:justify-end pt-4 md:px-20 px-36 -mb-30 `}>
<Link href={"https://github.com/mohsinraz3"} target="_blank">
<span className="bg-[#BFDEC0] border-black border-2 rounded-full w-25 h-25 px-2 py-2 my-6 flex items-center ">
  <Icon name="github"/> 
</span>
</Link>

<Link href={"https://twitter.com/mohsin_codes"} target="_blank">

<span className="bg-[#29509D] text-white border-black  border-2 rounded-full w-25 h-25 px-2 py-2 my-6 flex items-center ">
<Icon name="twitter" color="#1C96E8" /> 
</span>

</Link>

<Link href={"https://www.linkedin.com/in/mohsinraz/"} target="_blank">
<span className="bg-[#FFDCB9] border-black  border-2 rounded-full w-25 h-25 px-2 py-2 my-6 flex items-center ">
<Icon name="linkedin" color="#126BC4"/>
</span>

</Link>
</div>
    </div>
  )
}

export default Footer