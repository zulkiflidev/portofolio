import React from 'react'
import Image from 'next/image'

function ComparisonSection() {
  const comparisonData = [

    { skill: "React Expert", withMe: true, other: false },
    { skill: "Pixel Perfect", withMe: true, other: false },
    { skill: "TypeScript Proficiency", withMe: true, other: false },
    { skill: "Clean, Maintainable Code", withMe: true, other: false },
    { skill: "Performance Optimization", withMe: true, other: false },
    { skill: "Responsive Website", withMe: true, other: false },
    { skill: "UI Design Proficiency (Figma)", withMe: true, other: false },
  
  ]

  return (
    <section className="relative w-full py-10 md:py-12 bg-black text-white overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        
        <Image src="/comparisonsection/comparison-background.png" alt="background effect" 
               fill className="object-cover opacity-100" priority
        />

      </div>

      <div className="container mx-auto px-4 md:px-24 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Not Your Typical Frontend Developer
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I care about how it looks, how it works, and how it feels — all at once
          </p>

        </div>

        <div className="max-w-5xl mx-auto border border-zinc-800 rounded-sm overflow-hidden
                       bg-zinc-950/20 backdrop-blur-sm">

          <div className="overflow-x-auto no-scrollbar">

            <div className="min-w-full md:min-w-[700px]">
              
              <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-zinc-800">
            
                <div className="flex px-4 md:px-10 py-6 md:py-8 items-center">
                  <span className="text-lg md:text-2xl font-bold">Skill</span>
                </div>
            
                <div className="flex px-2 md:px-6 py-6 md:py-8 items-center justify-center bg-[#149BB0]/80">
                  <span className="text-lg md:text-2xl font-bold text-center">With Me</span>
                </div>
            
                <div className="flex px-2 md:px-6 py-6 md:py-8 items-center justify-center">
                  <span className="text-lg md:text-2xl font-bold text-center">Other</span>
                </div>
            
              </div>

              {comparisonData.map((item, index) => (

                <div key={index} className="grid grid-cols-[2fr_1fr_1fr] border-b border-zinc-800 
                                            last:border-0">

                  <div className="flex px-4 md:px-10 py-4 md:py-6 items-center">
                    <span className="text-sm md:text-lg text-slate-300">{item.skill}</span>
                  </div>
                  
                  <div className="flex px-2 md:px-6 py-4 md:py-6 items-center justify-center bg-[#149BB0]/80">
                    <div className="relative w-6 h-6 md:w-8 md:h-8">
                      
                      <Image src="/comparisonsection/check-icon.svg" 
                             alt="Yes" fill className="object-contain"
                      />

                    </div>
                  </div>
                  
                  <div className="flex px-2 md:px-6 py-4 md:py-6 items-center justify-center">
                    
                    <div className="relative w-6 h-6 md:w-8 md:h-8 opacity-40">
                      
                      <Image src="/comparisonsection/close-icon.svg" 
                             alt="No" fill className="object-contain"
                      />

                    </div>
                  </div>
                  
                </div>

              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ComparisonSection
