import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface TestimonialCardProps {
  stat?: string
  title?: string
  text: string
  name: string
  role: string
  avatar: string
  isFeatured?: boolean
}

const TestimonialCard = ({ 
  stat, 
  title, 
  text, 
  name, 
  role, 
  avatar, 
  isFeatured = false 

}: TestimonialCardProps) => (
  <Card className={`flex flex-col relative p-2 rounded-2xl border-none h-full overflow-hidden ${
    isFeatured 
      ? 'border-[#149BB0]/30 bg-[radial-gradient(circle_at_0%_0%,_rgba(20,155,176,0.15)_0%,_transparent_70%)] bg-zinc-950/40' 
      : 'border-zinc-800 bg-zinc-950/30'
  
  }`}>

      <CardHeader className="p-6 pb-0">
          
          <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
              <Image  key={i} src="/trustedvoicesection/star-rating-icon.svg" alt="star" width={16} height={16} />
          
          ))}
          
          </div>

          {stat && <span className="text-3xl font-bold text-white mb-2">{stat}</span>}
          {title && <h3 className="text-xl font-bold text-white mb-4 leading-tight">{title}</h3>}
      
      </CardHeader>
    
      <CardContent className="p-6 pt-0 mb-4">

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {text}
          </p>
      
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">

          <div className="flex items-center gap-4">
      
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-700">
                  <Image src={avatar} alt={name} fill className="object-cover" />
              </div>
      
              <div className="flex flex-col">
              
                  <span className="text-white font-bold text-sm">{name}</span>
                  <span className="text-slate-500 text-xs">{role}</span>
              
              </div>
      
          </div>
      
      </CardFooter>

      <div className="absolute bottom-8 right-8 w-10 h-10 opacity-20 pointer-events-none">
      
        <Image src="/trustedvoicesection/quotes.svg" alt="quote" fill className="object-contain" />
      
      </div>


  </Card>
);

export default TestimonialCard;
