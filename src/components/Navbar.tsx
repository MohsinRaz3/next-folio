import React from 'react'
import { Bebas_Neue } from 'next/font/google'
const beneue = Bebas_Neue({ subsets: ["latin"], weight : "400" });


const Navbar = () => {
    return (
       
            <div className='flex font-OfficeTimes bg-primary flex-row justify-center items-center w-full sticky top-0 mt-8 mb-14 md:mb-2'>
                <div className={` md:text-5xl text-2xl text-black tracking-widest`}>MOHSIN RAZ</div>

                
            </div>

    )
}

export default Navbar