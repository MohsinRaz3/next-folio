import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div>
      <div className=" md:flex md:flex-col md:items-center md:justify-center md:mx-auto px-6  md:px-6 lg:px-24" >
        <h2 className="mt-14 mb-2 text-4xl text-black font-bold md:text-4xl flex justify-center items-center py-5 md:py-5"><p className='mx-auto'>Tools I use..</p></h2>
        <div className=" flex flex-row items-center justify-center md:pl-12 md:text-3xl gap-5 flex-wrap">

          <Image className='' width={200}
            height={200} src={'/streamlit-removebg-preview.png'} alt='python' />
          <Image className='' width={200}
            height={500} src={'/fatapi-removebg-preview.png'} alt='python' />
          <Image className='' width={200}
            height={500} src={'/postgres-removebg-preview.png'} alt='python' />
          <Image className='' width={100}
            height={500} src={'/pythoon-removebg-preview.png'} alt='python' />
          <Image className='' width={200}
            height={500} src={'/pandas.png'} alt='python' />
          <br />
          <Image className='' width={100}
            height={500} src={'/JavaScript-logo.png'} alt='python' />
          <Image className='' width={200}
            height={500} src={'/nextjs-removebg-preview.png'} alt='python' />
          <Image className='' width={200}
            height={500} src={'/openai.png'} alt='python' />

          {/* 
</div>
</div>

<div className=" md:flex md:flex-col md:items-center md:justify-center md:mx-auto px-6  md:px-6 lg:px-24" >
<h2 className="mt-14 mb-2 text-4xl text-black font-bold md:text-4xl flex justify-center items-center py-5 md:py-5"><p className='mx-auto'>Tools I use..</p></h2>
<div className=" flex flex-row items-center justify-center md:pl-12 md:text-3xl gap-5 flex-wrap">
 
<img className='w-25 h-14  md:w-20 md:h-20' src={'/pythoon-removebg-preview.png'} alt='python'/>
<img className='w-25 h-14 md:w-50 md:h-20' src={'/fatapi-removebg-preview.png'} alt='python'/>
<img className='w-18 h-12 md:w-50 md:h-20' src={'/streamlit-removebg-preview.png'}  alt='python'/>
<img className='w-18 h-12   md:w-60 md:h-25 pl-3' src={'/postgres-removebg-preview.png'}  alt='python'/> 
<img className='w-18 h-12  md:w-60 md:h-28 pl-3' src={'/pandas.png'}  alt='python'/>
<br/>
<img className='w-18 h-12  md:w-32 md:h-28   pl-3' src={'/JavaScript-logo.png'}  alt='python'/>
<img className='w-18 h-12  md:w-60 md:h-28 pl-3' src={'/nextjs-removebg-preview.png'}  alt='python'/>
<img className='w-18 h-12  md:w-60 md:h-25 pl-3' src={'/openai.png'}  alt='python'/>
 */}

        </div>
      </div>
    </div>
  )
}

export default Skills