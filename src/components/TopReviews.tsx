import React from 'react'
import Image from 'next/image'

const TopReviews = () => {
  const topReviews = [
    {
      id: 2,
      name: "Anthony Hayes",
      role: "Australian Actor",
      avatar: "/review/anthony.jpg",
      quote: "Mohsin was as helpful as you could ask. He delivered on time and even went out of his way to find out which platform I was using, signing up and going through the process and creating a video for me to follow easily. Fantastic work Mohsin, hope I can find something else for you to work on soon."  },

    {
      id: 1,
      name: "Leo Boon",
      role: "Veteran Pilot & Speaker",
      avatar: "/review/leoboon.jpg",
      quote: "I thank Mohsin for his excellent job. I strongly recommend him. His work is fast and the fee is reasonably." },
        {
      id: 3,
      name: "Dan MCcoy, MD",
      role: "CEO of RocketTools",
      avatar: "/review/danmccoy.jpg",
      quote: "I would hire Mohsin in a heart beat for my next project. He is smart, efficient, works hard and finds creative solutions.",
      featured: true
    }
  ]

  const smallReviews = topReviews.filter(review => !review.featured)
  const featuredReview = topReviews.find(review => review.featured)

  return (
    <section id="reviews" className="relative py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-16 xl:px-24 bg-[#FAF5F2]">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
          
          {/* Left Column - Smaller Reviews */}
          <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
            {smallReviews.map((review) => (
              <div key={review.id} className="space-y-4">
                {/* Quote Text */}
                <p className="text-[#333333] text-base md:text-lg leading-relaxed font-normal">
                  "{review.quote}"
                </p>
                
                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="rounded-full object-cover border-2 border-gray-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-black font-bold text-base md:text-lg">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Featured Review */}
          {featuredReview && (
            <div className="flex flex-col justify-center space-y-8 lg:space-y-12 order-1 lg:order-2">
              {/* Large Quote */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight tracking-tight">
                "{featuredReview.quote}"
              </h2>
              
              {/* Featured Profile */}
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                  <Image
                    src={featuredReview.avatar}
                    alt={featuredReview.name}
                    fill
                    className="rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <div>
                  <h3 className="text-black font-bold text-lg md:text-xl">
                    {featuredReview.name}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {featuredReview.role}
                  </p>
                </div>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TopReviews