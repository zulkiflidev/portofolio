import React from 'react'

import Image from 'next/image'


function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex md:flex-row">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
            <Image src="/herosection/hero-background.png"  alt="Hero Background" fill  
                   className="object-cover"  priority /> 
        </div>
       
        <div className="flex items-center justify-center md:absolute md:top-0 md:right-50">
            <Image  src="/herosection/nametag_person.png" alt="nametag" width={800} 
                    height={1000}  className="w-auto h-[70vh] md:h-[90vh] object-contain object-top"
                />

        </div>

        {/* left content (desktop) */}
        <div className="px-4 py-8 md:flex md:flex-row md:w-2/3 md:px-30 
                        md:py-40 md:justify-center md:items-center">

            <div className="flex flex-col gap-4"> 
                <p className="text-slate-300 text-lg md:text-xl mb-6">
				  Hi. I'm Edwin Anderson
				</p>

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
				  FRONT<span className="font-charm italic font-light">END</span> <br />
				  DEVELOPER
				</h1>

                <p className="text-slate-400 text-base md:text-lg max-w-xl mb-14 ">
				  Passionate about frontend development, I focus on crafting digital products
				  that are visually polished, performance-optimized, 
				  and deliver a consistent experience across all platforms.
				</p>

                <button className="flex items-center justify-center w-full md:w-fit bg-[#149BB0] 
                                   hover:bg-[#118192] text-white px-14 py-4 rounded-sm font-semibold gap-3 
                                   transition-all group text-lg">

				  <span className="relative w-6 h-6">
					 <Image src="/herosection/main-icon.svg" alt="mail icon" fill className="brightness-200" />
				  </span>
				  Hire Me
				</button>
            </div>
        </div>

        {/* logo list */}
        <div className="flex items-center justify-center pt-10 md:pt-20 md:absolute md:bottom-0">

            <div className="min-w-[800px] md:min-w-full">

                <Image src="/herosection/development-board-list.svg" alt="Development Board List" 
                       width={1920} height={200} className="w-full h-auto opacity-80" />
            </div>

        </div>

    </section>
  )
}

export default HeroSection