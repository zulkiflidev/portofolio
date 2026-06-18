'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useFormStore } from '@/lib/store'
import { motion, AnimatePresence } from 'framer-motion'

function Footer() {
  const { submitForm, isSubmitting, showModal, status, closeModal } = useFormStore()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) return
    
    await submitForm(formData)
    
    if (status === 'success') {
      setFormData({ name: '', email: '', message: '' })
    
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden mt-20">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <Image src="/footer/footer-background.png"  alt="footer background" 
              fill   className="object-cover object-bottom" priority
        />
      
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20">
          
          <div className="flex flex-col">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let&apos;s Build Something Great
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
                Got an idea, a project, or just want to connect? I’m always open to new conversations.
              </p>
            </div>

            <div className="bg-zinc-950 p-8 md:p-10 rounded-2xl border border-zinc-800/50 shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Name</label>
                  
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name" 
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 text-white placeholder-slate-600 
                    focus:border-[#149BB0] outline-none transition-all"
                  />


                </div>
                
                <div>
                  <label className="block text-xs text-slate-500 uppercase 
                                    tracking-widest mb-2 font-semibold">Email
                  </label>
                  
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 
                               text-white placeholder-slate-600 focus:border-[#149BB0] outline-none transition-all"
                  />
                </div>

                <div>


                  <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Message</label>
                  
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message" 
                    rows={4}
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 text-white
                               placeholder-slate-600 focus:border-[#149BB0] outline-none transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-fit bg-[#149BB0] hover:bg-[#118192] text-white px-12 py-4 rounded-lg 
                             font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              
              </form>
            </div>
          </div>

          <div className="flex flex-col relative space-y-12 lg:pt-4">
            
            <div>
              
              <p className="text-xs text-[#149BB0] uppercase tracking-widest mb-4 font-bold">Address</p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Jakarta, Indonesia
              </p>

            </div>

            <div>
              
              <p className="text-xs text-[#149BB0] uppercase tracking-widest mb-4 font-bold">Contact</p>
              
              <div className="flex flex-col space-y-2">
                <span className="text-xl font-bold">+62 812 3456 7890</span>
              </div>
            
            </div>

            <div>

              <p className="text-xs text-[#149BB0] uppercase tracking-widest mb-4 font-bold">Social Media</p>
              <div className="flex items-center gap-3">
                
                <div className="flex items-center justify-center w-11 h-11 border border-zinc-800
                                rounded-xl bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 
                                transition-all cursor-pointer group">
                 
                  <Image src="/footer/facebook-icon.svg" alt="facebook" width={20} height={20} 
                         className="group-hover:opacity-80 transition-opacity" />
                
                </div>

                <div className="flex items-center justify-center w-11 h-11 border border-zinc-800 
                              rounded-xl bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 
                              transition-all cursor-pointer group">
                  
                  <Image src="/footer/instagram-icon.svg" alt="instagram" 
                         width={20} height={20} 
                         className="group-hover:opacity-80 transition-opacity" />

                </div>
                
                <div className="flex items-center justify-center w-11 h-11 border border-zinc-800 
                                rounded-xl bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 
                                transition-all cursor-pointer group">
                  <Image src="/footer/linkedin-icon.svg" alt="linkedin" width={20} height={20} 
                         className="group-hover:opacity-80 transition-opacity" />

                </div>
                
                <div className="flex items-center justify-center w-11 h-11 border border-zinc-800 rounded-xl 
                                bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 
                                transition-all cursor-pointer group">
                  
                  <Image src="/footer/tiktok-icon.svg" alt="tiktok" width={20} height={20} 
                         className="group-hover:opacity-80 transition-opacity" />

                </div>
              
              </div>
            </div>

            <div className="mt-auto pt-10">
              
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none 
                            uppercase whitespace-nowrap">
                Get In Touch
              </p>

            </div>
            
          </div>
        </div>

      </div>

      <AnimatePresence>

        {showModal && (
        
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-zinc-950 border border-zinc-800 rounded-3xl max-w-sm w-full 
                          text-center shadow-2xl overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image 
                  src={status === 'success' ? '/message/checked.png' : '/message/failed.png'} 
                  alt="Status Background" 
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 pt-6">
                
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {status === 'success' ? 'Message Sent!' : 'Oops! Failed'}
                </h3>
                
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                  {status === 'success' 
                    ? 'Thank you for reaching out. I will get back to you as soon as possible.' 
                    : 'Something went wrong while sending your message. Please try again later.'}
                </p>
                
                <button 
                  onClick={closeModal}
                  className={`w-full py-4 rounded-xl font-bold transition-all active:scale-[0.98] ${
                    status === 'success' 
                    ? 'bg-[#149BB0] hover:bg-[#118192] text-white' 
                    : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {status === 'success' ? 'Back to Home' : 'Try Again'}
                </button>
              
              </div>
            </motion.div>
          </div>

        )}

      </AnimatePresence>
    
    </footer>

  )
}

export default Footer
