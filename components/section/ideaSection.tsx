import React from 'react'
import Image from 'next/image'

function IdeaSection() {

    const skills = [
        {
        title: "Frontend Development",
        description: `I build responsive, accessible, 
                      and scalable websites using modern frontend tools and best practices.`,
        icon: "/ideasection/frontend-icon.svg"
        },
        {
        title: "Web Performance",
        description: `I optimize websites for speed 
                     and efficiency to ensure smooth experiences across all devices.`,
        icon: "/ideasection/web-performance-icon.svg"
        },
        {
        title: "Component Based UI",
        description: `I specialize in crafting reusable UI components that are clean, maintainable, 
                      and aligned with design systems.`,
        icon: "/ideasection/component-based-ui-icon.svg"
        },
        {
        title: "Responsive Design",
        description: `I ensure that every layout adapts beautifully to 
                      different screen sizes — from mobile to desktop.`,
        icon: "/ideasection/responsive-design-icon.svg"
        }
    ]


  return (
    <section className="w-full flex flex-col gap-4 py-16 px-4 md:px-30">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">

            <div className="w-full md:w-4/5">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold 
                                leading-tight max-w-4xl tracking-tight">
                                    
                    I turn ideas and designs into functional, accessible, and performant websites 
                    <br className="hidden md:block" />
                    <span className="text-[#149BB0]"> using modern frontend technologies.</span>

                </h2>
            </div>

            <div className="flex flex-col items-start pb-1 gap-8">

                <p className="text-sm text-slate-400 mb-2 uppercase tracking-widest">About Me</p>
                <div className="flex gap-16">

                    <Image src="/ideasection/social-media-icons.svg" alt="Social Media Links" width={160} height={40} 
                            className="w-auto h-10"
                    />
                    
                </div>
            </div>                
        </div>

        <hr className="border-slate-800 my-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <div className="w-full">

                <Image src="/ideasection/man-work.png" alt="Person working on laptop" width={800} height={600} 
                       className="w-full h-auto object-cover rounded-sm grayscale-[0.2]"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {skills.map((skill, index) => (
                
                <div key={index} className="flex flex-col items-start">

                    <div className="relative w-10 h-10 mb-6">
                        <Image src={skill.icon}  alt={skill.title} fill className="object-contain"
                        />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                        {skill.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                        {skill.description}
                    </p>
                
                </div>

            ))}
            </div>

        </div>

    </section>
  )
}

export default IdeaSection