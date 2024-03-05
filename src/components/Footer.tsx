'use client'
import React, { useState } from 'react'
import { navLinks } from './utils/rawData'
import Link from 'next/link'

export const Footer = () => {
  const [activeTab, setActiveTab] = useState("Home")

  const  handleClick =(e:any)=>{
  }
  return (
    <div className=' bottom-5 sticky'>
        <div className='bg-white w-72 md:w-96 md:text-2xl md:justify-around text-xl border border-black rounded-3xl px-5 mx-auto py-1   flex justify-around items-center gap-x-3 '>
          {navLinks.map((item:any)=>(
            <Link className={`bg-${activeTab === item.label ?"black":"white"} text-${activeTab === item.label ?"white":"black"} px-4 rounded-2xl`} href={item.route}>
              {item.label}
              <input type="text"  value={"e.target.value"}>{item.label}</input>
              </Link>
          ))}
        </div>
    </div>
  )
}
