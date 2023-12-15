import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Home = () => {
  
  const links = [
    {
      id: 1,
      child:(
        <>
          <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/daniel-ayodele-a39849250/'
    },
    {
      id: 2,
      child:(
          <>
            <FaGithub size={30}/>
          </>
      ),
      href: 'https://github.com/Aded-oyin',
    },
    {
      id: 3,
      child:(
          <>
            <HiOutlineMail size={30}/>
          </>
      ),
      href: 'mailto:danyodele50@gmail.com',
    },
    {
      id: 4,
      child:(
          <>
            <BsFillPersonLinesFill size={30}/>
          </>
      ),
      href: '/daniel.docx',
      download: true,
    }
  ]

  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-slate-800'>

        <div className='max-w-[1000px] mx-auto px-10 lg:px-8 flex flex-col justify-center h-full'>
            <p className='text-[cyan]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Daniel Ayodele</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Welcome to my portfolio! I'm a passionate frontend developer who loves turning ideas into engaging and user-friendly web experiences.</p>
            <div>
                <Link 
                to='portfolio'
                smooth 
                duration={500}
                className='text-[white] group w-fit rounded-md px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-none cursor-pointer'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                </Link>
            </div>

            <ul className='lg:hidden flex justify-center'>
              {links.map(({id, child, href, download}) =>(
                <li
                key={id}
                className='text-4xl px-4 flex gap-10 py-3 text-gray-600'
                >
                <a href={href}
                      download={download}
                      target='_blank'
                      rel='noreferrer'
                      >
                          {child}
                </a>  
                </li>
              ))}
            </ul>

        </div>

    </div>
  )
}

export default Home