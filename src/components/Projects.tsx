import { MoveDownRight } from 'lucide-react'
import { projectData } from '../components/utils/rawData'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface Project {
    id: number;
    projectName: string;
    projectLink: string;
    Techstack: string[];
    src: string;
    alt: string;
  }

const Projects = () => {
  // Alternating background colors for project cards
  const cardColors = [
    'bg-neo-cyan',
    'bg-neo-pink',
    'bg-neo-yellow',
    'bg-neo-orange',
    'bg-[#D975F0]',
    'bg-neo-cyan',
  ];

  // Tech stack badge colors
  const badgeColors = [
    ['bg-neo-pink', 'bg-neo-yellow', 'bg-neo-orange'],
    ['bg-neo-cyan', 'bg-neo-pink', 'bg-neo-yellow'],
    ['bg-neo-orange', 'bg-white', 'bg-neo-cyan'],
    ['bg-neo-yellow', 'bg-neo-pink', 'bg-white'],
    ['bg-neo-pink', 'bg-neo-cyan', 'bg-neo-orange'],
    ['bg-white', 'bg-neo-yellow', 'bg-neo-pink'],
  ];
    
  return (
    <section id='projects' className='relative py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-[#03DF72] border-t-[6px] border-b-[6px] border-black'>
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black text-center">
          PROJECTS
        </h2>
        {/* Decorative line */}
        <div className="w-32 h-2 bg-neo-yellow mx-auto mt-4"></div>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto'>
        {projectData.map((item: Project, index: number) => (
          <Link
            key={item.id}
            href={item.projectLink}
            target="_blank"
            className={`
              ${cardColors[index % cardColors.length]}
              border-4 border-black
              shadow-[8px_8px_0_#000]
              p-6 md:p-8
              flex flex-col
              transition-all duration-200
              hover:shadow-[12px_12px_0_#000]
              hover:-translate-y-1
              hover:-translate-x-1
              active:shadow-[4px_4px_0_#000]
              active:translate-y-1
              active:translate-x-1
            `}
          >
            {/* Project Header */}
            <div className='flex items-center justify-between mb-4'>
              <h3 className='font-lexend text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black'>
                {item.projectName}
              </h3>
              <MoveDownRight className='w-6 h-6 md:w-8 md:h-8 text-black flex-shrink-0' />
            </div>

            {/* Tech Stack Badges */}
            <div className='flex flex-wrap gap-2 mb-6'>
              {item.Techstack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`
                    ${badgeColors[index % badgeColors.length][techIndex % 3]}
                    border-4 border-black
                    px-3 md:px-4 py-1 md:py-2
                    font-public font-bold text-xs md:text-sm uppercase tracking-wider text-black
                    shadow-[4px_4px_0_#000]
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Media */}
            <div className='border-4 border-black overflow-hidden'>
              {item.src === "/financex.mp4" ? (
                <iframe
                  title={item.alt}
                  className="w-full h-auto aspect-[4/3]"
                  src={item.src}
                ></iframe>
              ) : (
                <Image
                  priority
                  width={500}
                  height={500}
                  className='w-full h-auto object-cover'
                  src={item.src}
                  alt={item.alt}
                />
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-4 border-white bg-neo-pink rotate-45 hidden lg:block -z-10"></div>
      <div className="absolute bottom-20 right-8 w-12 h-12 rounded-full border-4 border-white bg-neo-yellow hidden md:block -z-10"></div>
    </section>
  )
}

export default Projects