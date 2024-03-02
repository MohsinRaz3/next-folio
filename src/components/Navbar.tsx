import React from 'react'
import { Bebas_Neue } from 'next/font/google'
const beneue = Bebas_Neue({ subsets: ["latin"], weight : "400" });


const Navbar = () => {
    return (
       
            <div className='flex flex-row items-center w-full justify-between mt-8 mb-14'>
                <div className={`${beneue.className}text-lg text-gray-400 tracking-wide `}>MOHSIN RAZ</div>

                <div>=</div>
            </div>

    )
}

export default Navbar