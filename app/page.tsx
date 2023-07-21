"use client";

import Image from 'next/image'
import headshot from '../images/Jacob-Villanueva-Headshot.png'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <main className="bg-[#F2DFCE] px-10">
      <title>Portfolio</title>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex'>
            <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-[#F2DFCE] hover:bg-[#FFF1E0]'>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Resume</NavigationMenuLink>
                  <NavigationMenuLink>Articles</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          </nav>
          <div className='align-middle text-center max-w-lg mx-auto'>
            <h2 className='text-2xl py-5 text-black'>
              About
            </h2>
            <h3 className='text-left text-sm py-5 text-black'>
              I am an undergraduate student at The University of Texas at Austin majoring in Computer Science and Mathematics. 
            </h3>
            <h3 className='text-left text-sm py-5 text-black'>
              My current interests lie in trading and theory around Rates/FX options and Quantitative Trading.
            </h3>
            <h3 className='text-left text-sm py-5 text-black'>
              For the 2024 summer, I will be a Sales & Trading Summer Analyst at Citi.
              My email is jacobvillanueva@utexas.edu, feel free to reach out. 
            </h3>
            <div className='relative mx-auto rounded-full overflow-hidden w-40 h-40 my-10'>
              <a href='https://www.linkedin.com/in/jacob-villanueva/'>
                <Image src={headshot} alt="headshot" layout="fill" objectFit='cover'/>
              </a>
              
            </div>
            
          </div>
        </section>
    </main>
  )
}
