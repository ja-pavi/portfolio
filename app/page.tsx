import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import headshot from '../images/Jacob-Villanueva-Headshot.png'

export default function Home() {
  return (
    <main className="bg-[#F2DFCE] px-10">
      <title>J.P. Villanueva Portfolio</title>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-black'>J.P. Villanueva</h1>
            <ul className='flex items-center'>
              <li>
                <a className='bg-[#FFF1E0] text-[#8F223A] px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='align-middle text-center px-[30%]'>
            <h2 className='text-xl py-5 text-black'>
              About
            </h2>
            <h3 className='text-left text-sm py-5 text-black'>
              I am rising junior at The University of Texas at Austin majoring in Computer Science and Mathematics. 
            </h3>
            <h3 className='text-left text-sm py-5 text-black'>
              Interests in trading Rates/FX options, Portfolio Management, and Quantitative Trading.
            </h3>
            <h3 className='text-left text-sm py-5 text-black'>
              I am an incoming 2024 Sales & Trading Summer Analyst at Citi.
              My email is jacobvillanueva@utexas.edu, feel free to reach out. 
            </h3>
            <div className='relative mx-auto rounded-full overflow-hidden w-40 h-40 mt-10 mb-10'>
              <a href='https://www.linkedin.com/in/jacob-villanueva/'>
                <Image src={headshot} layout="fill" objectFit='cover'/>
              </a>
            </div>
          </div>
        </section>
    </main>
  )
}
