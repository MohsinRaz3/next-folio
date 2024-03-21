"use client"
import Image from 'next/image'
import { useState } from 'react';

export default function ContactUs() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')

  const sendMail = async (e:any) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        message
      })
     
    })

    
    setMessage("")
    setSubject("")
    console.log(await response.json())
   
  }
  return (
    <main className="flex min-h-screen flex-col items-center  font-OfficeTimes justify-center py-12 px-24">
      <form onSubmit={sendMail} className="h-full w-1/3 space-y-6">
        <div className="flex flex-col items-start w-full justify-start">
          <h1 className="text-2xl text-black font-bold md:text-3xl mx-auto  font-OfficeTimes">Contact me..</h1>
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            Subject
          </label>
          <input
            name="title"
            type="text"
            id="title"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            placeholder="Project Title"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            
          </label>
          <textarea
            name="description"
            id="description"
            required
            cols={10}
            rows={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            placeholder="Tell us about your project and contact details"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <button type='submit' className="ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-[#29509D] font-OfficeTimes p-2 text-white ">
          <span className={``}>Send Message</span>
        </button>
      </form>
    </main>
  )
}