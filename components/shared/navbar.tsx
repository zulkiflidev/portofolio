"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'


const menuList = [
    { name: 'Edwin', href:'/' },
    { name: 'About', href:'/about'},
    { name: 'Skill', href:'/skill'},
    { name: 'Projects', href:'/projects'},
    { name: 'FAQ', href:'/faq'},
    { name: 'Contact', href:'/contact'},
]


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    
    if (isMenuOpen) {
       if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } 
    
    else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
    }

    

  }, [isMenuOpen]);


  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav className="absolute top-0 left-0 w-full bg-transparent text-white flex items-center 
                    md:justify-center p-4 z-50">

        {/* Ini Untuk Desktop View */}
        <div className="hidden bg-black md:flex md:gap-16 md:justify-center md:items-center 
                        md:px-10 md:py-4 md:rounded-full">
            {
                menuList.map( (item, index) => (
                    <Link key={index} href={item.href}>

                        <p
                            className={`

                            ${index === 0 ? 'font-bold text-xl' : 'font-normal'}

                            `}
                        >{item.name}</p>

                    </Link>
                ) )                
            }
        </div>

        {/* ini untuk mobile view */}
        <div className={`bg-black/50 backdrop-blur-md border border-white/10 md:hidden flex flex-col 
                         w-full px-6 py-4 transition-all duration-300 
                         ${isMenuOpen ? 'fixed inset-0 h-screen rounded-none z-50' : 'rounded-2xl'}`}>
            
            <div className="flex flex-row items-center justify-between w-full">
                <Link href={menuList[0].href} className="font-bold text-xl">
                    {menuList[0].name}
                </Link>

                {/* Ini burger menu... */}
                <Button className="bg-transparent text-white hover:bg-yellow-900 hover:text-black" 
                        onClick={toggleMenu}>
                    <Image 
                        src={isMenuOpen ? "/navbar/close-menu.svg" : "/navbar/burger-menu.svg"} 
                        width={24} 
                        height={24} 
                        alt={isMenuOpen ? "close menu" : "burger menu"}
                    />
                </Button>
            </div>

            
            {isMenuOpen && (

                <div className="flex flex-col items-start justify-start gap-6 pt-6 
                                animate-in fade-in slide-in-from-top-2">        

                    <p className="text-xl hover:text-blue cursor-pointer" onClick={toggleMenu}>About</p>
                    <p className="text-xl hover:text-blue cursor-pointer" onClick={toggleMenu}>Skill</p>

                    <p className="text-xl hover:text-blue cursor-pointer" onClick={toggleMenu}>Projects</p>
                    <p className="text-xl hover:text-blue cursor-pointer" onClick={toggleMenu}>FAQ</p>
                    <p className="text-xl hover:text-blue cursor-pointer" onClick={toggleMenu}>Contact</p>     
                               
                </div>
            )}
        </div>       

    </nav>
  )
}

export default Navbar