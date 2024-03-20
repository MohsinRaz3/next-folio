import { projectData } from '@/utils/rawData'
import Link from 'next/link'
import React from 'react'


const Projects = () => {
    
    return (
        <div>
            <div className='px-7 py-8 md:px-36 md:py-12'>
                <h2 className="mt-14 mb-2 text-2xl text-black font-bold md:text-3xl flex flex-nowrap md:py-5"><p className='mx-auto'>Projects..</p></h2>
               {
                 projectData.map((item:any)=>(
                    <div key={item.id} className='flex  flex-col'>
                    <div><Link href={item.projectLink}><h3 className='text-2xl   font-bold underline'>{item.projectName}</h3></Link></div>
                    <div className='flex gap-x-2  items-end'>

                        <span className="bg-[#29509D] w-20 h-7 text-white border-black  border-2 rounded-full  px-2 py-1 my-6 flex items-center ">
                            {item.Techstack[0]}
                        </span>
                        <span className="bg-[#BFDEC0] w-30 h-7 text-black border-black border-2   rounded-full  px-2 py-1 my-6 flex items-center ">
                        {item.Techstack[1]}

                        </span>
                        <span className="bg-[#FFDCB9] w-25 h-7 text-black border-black border-2  rounded-full  px-2 py-1 my-6 flex items-center ">
                        {item.Techstack[2]}

                        </span>

                    </div>
                    <iframe className="w-full aspect-[4/3]  " src={item.src}></iframe>

                </div>
                 ))
               }

                {/* <div className='flex flex-col'>
                    <div><Link href={"https://pricing-ui-mohsinraz3.vercel.app/"}><h3 className='text-2xl font-bold underline'>Pricing UI</h3></Link></div>
                    <div className='flex gap-x-2 items-end'>

                        <span className="bg-[#29509D] w-20 h-7 text-white border-black  border-2 rounded-full  px-2 py-1 my-6 flex items-center ">
                            Figma
                        </span>
                        <span className="bg-[#BFDEC0] w-30 h-7 text-black border-black border-2   rounded-full  px-2 py-1 my-6 flex items-center ">
                            Chakra UI
                        </span>
                        <span className="bg-[#FFDCB9] w-20 h-7 text-black border-black border-2  rounded-full  px-2 py-1 my-6 flex items-center ">
                            Next.js
                        </span>

                    </div>
                    <img src="/pricingui.png" alt="ui" />
                </div>


                <div className='flex flex-col'>
                    <div><Link href={"https://polydolls.com/"}><h3 className='text-2xl font-bold underline'>Polydolls</h3></Link></div>
                    <div className='flex gap-x-2 items-end'>

                        <span className="bg-[#29509D] w-20 h-7 text-white border-black  border-2 rounded-full  px-2 py-1 my-6 flex items-center ">
                            Next.js
                        </span>
                        <span className="bg-[#BFDEC0] w-30 h-7 text-black border-black border-2   rounded-full  px-2 py-1 my-6 flex items-center ">
                            Tailwind CSS
                        </span>
                        <span className="bg-[#FFDCB9] w-22 h-7 text-black border-black border-2  rounded-full  px-2 py-1 my-6 flex items-center ">
                            Photopea
                        </span>

                    </div>
                    <img src="/polydolls.png" alt="ui" />
                </div> */}
            </div>
        </div>
    )
}

export default Projects