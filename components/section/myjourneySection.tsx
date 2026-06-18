"use client";

import React, { useState } from 'react'
import Image from 'next/image'

function MyJourneySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      role: "Frontend Developer",
      period: "2025- Present",
      description: `Built responsive web interfaces using modern frameworks like React.js, ensuring seamless 
                    integration with backend systems.  Optimized performance, implemented accessible designs, 
                    and delivered clean, reusable code to enhance user experience and scalability.`,
      logo: "/myjourneysection/airbnb.png",
      company: "Airbnb"
    },
    {
      role: "Frontend Developer",
      period: "2025- Present",
      description: `Built responsive web interfaces using modern frameworks like React.js, 
                    ensuring seamless integration with backend systems. Optimized performance, implemented 
                    accessible designs, and delivered clean, reusable code to enhance user experience and scalability.`,
      logo: "/myjourneysection/dribbble.png",
      company: "Dribbble"
    },
    {
      role: "Frontend Developer",
      period: "2025- Present",
      description: `Built responsive web interfaces using modern frameworks like React.js, ensuring seamless 
                    integration with backend systems. Optimized performance, implemented accessible designs, 
                    and delivered clean, reusable code to enhance user experience and scalability.`,
      logo: "/myjourneysection/zoom.png",
      company: "Zoom"
    }
  ];

  const handleNext = () => {
    if (currentIndex < experiences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    
    }  
  };

  const handlePrev = () => {
  
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    
    }  
  };

  return (
    <section className="w-full py-10 md:py-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-24">
        
        <div className="max-w-3xl mb-16">
        
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            My Journey in Tech
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.
          </p>
        
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(calc(-${currentIndex * 100}% / 1.5))` }}
          >
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="flex flex-col min-w-[320px] md:min-w-[500px] border border-zinc-800 bg-zinc-950/40 
                           p-8 md:p-10 rounded-xl justify-between h-full"
              >

                <div>
                  <div className="flex justify-between items-start mb-2">
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white border-l-2 border-[#149BB0] pl-4">
                      {exp.role}
                    </h3>

                    <div className="p-2 border border-zinc-800 rounded-md relative w-10 h-10">
                      <Image 
                        src="/myjourneysection/job-bag-icon.svg" 
                        alt="job icon" 
                        fill 
                        className="p-1 object-contain brightness-200 opacity-60" 
                      />
                    </div>

                  </div>
                  
                  <p className="text-slate-500 text-sm md:text-base mb-8 ml-4">
                    {exp.period}
                  </p>
                  
                  <hr className="border-zinc-800 mb-8" />
                  
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10">
                    {exp.description}
                  </p>
                </div>

                <div className="relative w-32 h-10 mt-auto">
                  <Image  src={exp.logo} alt={exp.company} fill className="object-contain object-left"  />
                </div>

              </div>


            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl">
          <div className="w-full h-[2px] bg-zinc-800 relative mb-10">
            
            <div 
              className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / experiences.length) * 100}%` }}
            />
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-8 py-3 border border-zinc-800 rounded-sm font-semibold transition-all
                        ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-zinc-900 active:scale-95'}`}
            >
              Prev
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === experiences.length - 1}
              className={`px-8 py-3 border border-zinc-800 rounded-sm font-semibold transition-all
                        ${currentIndex === experiences.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-zinc-900 active:scale-95'}`}
            >
              Next
            </button>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default MyJourneySection
