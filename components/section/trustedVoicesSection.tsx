import React from 'react'
import TestimonialCard from '@/components/shared/testimonial-card'

const TESTIMONIALS = [
  {
    isFeatured: true,
    stat: "8X",
    title: "More users converted after redesign",
    text: `Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality 
           are evident in every project. He consistently delivers results that exceed expectations, 
           making him a valuable asset to any team.`,
    name: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: "/trustedvoicesection/pablo1.png",
  },
  {
    stat: "3X",
    title: "Improved user engagement and sign-ups",
    text: `Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, 
           ensuring that every project is not only functional but also visually appealing.`,
    name: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: "/trustedvoicesection/pablo1.png",
  },
  {
    text: `Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude 
           and consistently finds effective solutions.`,
    name: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: "/trustedvoicesection/pablo2.png",
  },
  {
    text: `Edwin has a unique ability to transform complex ideas into user-friendly designs. 
          His contributions have significantly enhanced our projects.`,
    name: "Pablo Stanley",
    role: "Product Manager at Finovate",
    avatar: "/trustedvoicesection/pablo3.png",
  }
]

function TrustedVoicesSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-8 md:px-24">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Trusted Voices
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Here's what people say about working with me — across projects, teams, and timelines.
          </p>
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-6 max-w-7xl mx-auto">
          
          <div className="h-full">
            <TestimonialCard {...TESTIMONIALS[0]} />
          </div>

          <div className="flex flex-col gap-6">
            
            <TestimonialCard {...TESTIMONIALS[1]} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TestimonialCard {...TESTIMONIALS[2]} />
                <TestimonialCard {...TESTIMONIALS[3]} />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TrustedVoicesSection
