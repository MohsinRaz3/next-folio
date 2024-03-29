import { MoveDownRight } from 'lucide-react'
import { projectData } from '../components/utils/rawData'
import Link from 'next/link'
import React from 'react'


const Projects = () => {
    
    return (
        <div>
            <div id='projects' className='px-7 py-8 md:px-36 md:py-12'>
                <h2 className="mt-14 mb-2 text-4xl text-black font-bold md:text-4xl flex flex-nowrap md:py-5"><p className='mx-auto'>Projects..</p></h2>
              <div className='grid grid-cols-1 lg:gap-8 lg:grid-cols-2 place-items-center'>
              {
                 projectData.map((item:any)=>(
                    <div key={item.id} className='flex py-8  flex-col'>
                    <div ><Link href={item.projectLink} target="_blank" className='flex gap-2'><h3 className='text-2xl font-bold underline'>{item.projectName}</h3> <MoveDownRight className='hover:text-blue-800 pt-1' /></Link></div>
                    <div className='flex gap-x-2  items-end'>

                        <span className="bg-[#29509D] w-20 h-7 text-white border-black  border-2 rounded-full  px-2 py-1 my-3 flex items-center ">
                            {item.Techstack[0]}
                        </span>
                        <span className="bg-[#BFDEC0] w-30 h-7 text-black border-black border-2   rounded-full  px-2 py-1 my-3 flex items-center ">
                        {item.Techstack[1]}

                        </span>
                        <span className="bg-[#FFDCB9] w-25 h-7 text-black border-black border-2  rounded-full  px-2 py-1 my-3 flex items-center ">
                        {item.Techstack[2]}

                        </span>

                    </div>
                   {item.src === "/financex.mp4" ?  <iframe className="w-full xl:w-[576px] md:w-[480px] lg:w-[364px] lg:h-[222px] xl:h-[348px]  rounded-sm md:rounded-xl  aspect-[4/3]  " src={item.src}></iframe> : <img className='rounded-sm md:rounded-md  w-[300px] md:w-[480px]  lg:w-[364px]' src={item.src} alt={item.alt}/>}

                </div>
                 ))
               }

              </div>
            </div>
        </div>
    )
}

export default Projects