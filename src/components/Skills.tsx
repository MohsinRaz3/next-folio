import React from 'react'
import Image from 'next/image'

const Skills = () => {
  // Skill data with images
  const skills = [
    { image: '/pythoon-removebg-preview.png', bgColor: 'bg-neo-cyan' },
    { image: '/fatapi-removebg-preview.png', bgColor: 'bg-neo-pink' },
    { image: '/streamlit-removebg-preview.png', bgColor: 'bg-neo-yellow' },
    { image: '/postgres-removebg-preview.png', bgColor: 'bg-neo-orange' },
    { image: '/pandas.png', bgColor: 'bg-white' },
    { image: '/JavaScript-logo.png', bgColor: 'bg-neo-cyan' },
    { image: '/nextjs-removebg-preview.png', bgColor: 'bg-neo-pink' },
    { image: '/openai.png', bgColor: 'bg-neo-yellow' },
  ]

  return (
    <section id="skills" className="relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-white border-t-[6px] border-b-[6px] border-black">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black text-center">
          TOOLS I USE
        </h2>
        {/* Decorative line */}
        <div className="w-32 h-2 bg-black mx-auto mt-4"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              ${skill.bgColor}
              border-4 border-black
              shadow-[8px_8px_0_#000]
              p-4 md:p-6
              flex flex-col items-center justify-center
              transition-all duration-200
              hover:shadow-[12px_12px_0_#000]
              hover:-translate-y-1
              hover:-translate-x-1
              active:shadow-[4px_4px_0_#000]
              active:translate-y-1
              active:translate-x-1
              min-h-[150px] md:min-h-[180px]
            `}
          >
            {/* Skill Image */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <Image
                src={skill.image}
                alt="Technology logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 border-4 border-black bg-neo-orange rotate-45 hidden lg:block -z-10"></div>
      <div className="absolute bottom-10 left-8 w-12 h-12 rounded-full border-4 border-black bg-neo-pink hidden md:block -z-10"></div>
    </section>
  )
}

export default Skills