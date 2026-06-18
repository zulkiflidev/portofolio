import React from 'react'
import Image from 'next/image'

function ToolsSection() {
  const tools = [
    
    { name: "HTML", icon: "/toolssection/html5-icon.png", percentage: "100%" },
    { name: "CSS", icon: "/toolssection/css-icon.png", percentage: "90%" },
    { name: "Javascript", icon: "/toolssection/javascript-icon.png", percentage: "90%" },
    { name: "Typescript", icon: "/toolssection/typescript-icon.png", percentage: "80%" },
    { name: "Sequalize", icon: "/toolssection/sequalize-icon.png", percentage: "80%" },
    { name: "Mongo DB", icon: "/toolssection/mongodb-icon.png", percentage: "75%" },

  ]

  return (
    <section className="w-full pt-10 md:pt-16 pb-20 md:pb-32 bg-black text-white">
      
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          
          <div className="flex flex-col justify-between py-2">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                Tools I Use to <br /> Build
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-sm leading-relaxed">
                From code to design — here's the tech that helps me turn ideas into real products.
              </p>
            </div>
            
            <div className="mt-20 md:mt-0">
              <button className="flex items-center justify-center w-full md:w-fit bg-[#149BB0] 
                                 hover:bg-[#118192] text-white px-16 py-5 rounded-sm font-semibold 
                                 gap-3 transition-all group text-lg">

                <span className="relative w-6 h-6">
                   <Image src="/herosection/main-icon.svg" alt="mail icon" 
                          fill className="brightness-200" />
                </span>
                Send Message
              </button>
            </div>
          </div>

          <div className="relative border-l border-zinc-800/50">
            
            {tools.map((tool, index) => (
              
              <div 
                key={index} 
                className="flex flex-row items-center py-6 border-b border-zinc-800 relative group"
              >
                {index === 0 && (
                  <div className="absolute -left-[1.5px] top-0 bottom-0 w-[3px] bg-white z-10"></div>
                )}
                
                <div className="relative w-10 h-10 ml-8 flex-shrink-0">
                  <Image src={tool.icon} alt={tool.name} fill className="object-contain"
                  />
                </div>
                
                <span className="text-xl text-white font-medium ml-6 tracking-tight">
                  {tool.name}
                </span>
                
                <span className="ml-auto text-xl font-bold text-white tracking-tight">
                  {tool.percentage}
                </span>

              </div>
            
            ))}


          </div>

        </div>
      </div>
    </section>
  )
}

export default ToolsSection
