"use client";

import React, { useState } from 'react'
import Image from 'next/image'

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);

  const faqs = [
    { 
      question: "Do you work on freelance or remote projects?", 
      answer: `Yes, I am available for freelance and remote work. 
               I've collaborated with clients globally to deliver high-quality
               frontend solutions from my home office.` 
    },
    { 
      question: "What technologies do you work with?", 
      answer: `I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. 
              I also have experience using Tailwind CSS, TypeScript, and working with APIs.`
    },
    { 
      question: "Can you convert Figma or Sketch designs into code?", 
      answer: `Absolutely. I specialize in pixel-perfect conversions from design to code,
              ensuring every detail of your original design is preserved.` 
    },
    { 
      question: "Do you collaborate with backend developers or teams?", 
      answer: `Yes, I have extensive experience collaborating with backend teams 
              to integrate APIs and ensure seamless full-stack functionality.` 
    },
    { 
      question: "Are you available for full-time roles?Are you available for full-time roles?", 
      answer: `Yes, I am actively open to full-time opportunities where I can contribute 
               my skills to meaningful and long-term projects.` 
    }
  ];

  const handleNext = () => {
    if (slideIndex < faqs.length - 2) {
      setSlideIndex(slideIndex + 1);
 
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);

    }
  };

  return (
    <section className="w-full py-10 md:py-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl text-left">
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-left">
              Still Got Questions?
            </h2>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              I've listed answers to questions I often get as a frontend developer.
            </p>

          </div>

          <div className="flex gap-4">
            
            <button 
              onClick={handlePrev}
              disabled={slideIndex === 0}
              className={`px-8 py-3 border border-zinc-800 rounded-sm font-semibold transition-all
                        ${slideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-zinc-900 active:scale-95'}`}
            >
              Prev
            </button>

            <button 
              onClick={handleNext}
              disabled={slideIndex >= faqs.length - 2}
              className={`px-8 py-3 border border-zinc-800 rounded-sm font-semibold transition-all
                        ${slideIndex >= faqs.length - 2 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-zinc-900 active:scale-95'}`}
            >
              Next
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${slideIndex * 360}px)` }}
          >

            {faqs.map((faq, index) => (
              
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col flex-shrink-0 transition-all duration-500 cursor-pointer rounded-2xl p-8 justify-between
                          ${index === activeIndex 
                          
                            ? `w-[320px] md:w-[380px] h-[450px] bg-[#149BB0] text-white shadow-xl shadow-[#149BB0]/10`
                               
                            : `w-[280px] md:w-[320px] h-[450px] bg-zinc-950/20 border border-zinc-800
                               text-slate-400 hover:border-zinc-700`
                          
                          }`}
              >
                <div className="flex justify-between items-start">
                  {index === activeIndex && (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                    
                      <Image  src="/stillgotquestions/icon-man.png" alt="avatar" fill className="object-cover"/>
                    </div>

                  )}
                  {index !== activeIndex && (

                    <div className="w-8 h-8 opacity-40">
                      <Image src="/stillgotquestions/message-balloon-icon.svg" alt="icon" width={32} height={32} />
                    </div>
                  
                  )}
                  
                  {index === activeIndex && (
                    <div className="w-8 h-8">
                      <Image src="/stillgotquestions/message-balloon-icon.svg" alt="icon" width={32} height={32} 
                      className="brightness-0 invert" />
                    </div>
                  )}

                </div>

                <div>
                  <h3 className={`font-bold mb-4 tracking-tight leading-tight
                                  ${index === activeIndex ? 'text-2xl text-white' : 'text-xl text-white/90'}`}>
                    {faq.question}
                  </h3>
                  
                  {index === activeIndex && (

                    <p className="text-sm md:text-base text-white/80 leading-relaxed animate-in fade-in duration-700">
                      {faq.answer}
                    </p>
                  
                  )}
                </div>
              </div>
            
            ))}


          </div>
        </div>

      </div>
    </section>
  )
}

export default FAQSection
