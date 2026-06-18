import React from 'react'
import Image from 'next/image'

function PortofolioSection() {
  const projects = [
    {
      title: "Portofolio 1",
      year: "2025",
      image: "/portofoliosection/portofolio1.png"
    },
    {
      title: "Portofolio 2",
      year: "2025",
      image: "/portofoliosection/portofolio2.png"
    },
    {
      title: "Portofolio 3",
      year: "2025",
      image: "/portofoliosection/portoflio3.png"
    }
  ]

  return (
    <section className="w-full py-10 md:py-25 bg-black text-white">
      <div className="container mx-auto px-8 md:px-24">
        
        <div className="text-center mb-16 md:mb-24">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Bridging Design and Development
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            These are real projects where I implemented frontend interfaces with precision 
            and attention to detail.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          {projects.map((project, index) => (
          
          <div key={index} className="flex flex-col group">

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden 
                              mb-6 border border-zinc-800 bg-zinc-900">

                <Image  src={project.image} alt={project.title} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2"> {project.title} </h3>
              <p className="text-slate-500 text-lg">{project.year}</p>
            </div>
          
          
          ))}

        </div>

      </div>
    </section>
  )
}

export default PortofolioSection
