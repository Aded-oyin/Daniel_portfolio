import React from 'react'
import edibles from '../assets/portfolio/edibles.jpg'
import data from '../assets/portfolio/data.jpg'
import netflix from '../assets/portfolio/netflix.jpg'
import roar from '../assets/portfolio/Roar-bikes.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: roar,
            href: 'https://aded-oyin.github.io/Roarbikes/',
            code: 'https://github.com/Aded-oyin/Roarbikes'
        },
        {
            id: 2,
            src: netflix,
            href: 'https://react-netflix-rho.vercel.app/',
            code: 'https://github.com/Aded-oyin/React-Netflix'
        },
        {
            id: 3,
            src: edibles,
            href:'https://edibles-app.vercel.app/',
            code:'https://github.com/Aded-oyin/Edibles-app'
        },
        {
            id: 4,
            src: data,
            href:'https://simple-shell-eight.vercel.app/',
            code: 'https://github.com/Aded-oyin/Data-finance'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-[#0a192f] to-slate-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-300'>Portfolio</p>
                <p className='py-6'>// Check out some of my works.</p>
            </div>


            <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({id, src, href, code}) => (
                        <div 
                        key={src} 
                        className='shadow-md shadow-gray-600 rounded-lg'>
                            <img 
                            src={src} 
                            alt='' 
                            className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <a
                                href={href} >
                                <button
                                className='w-1/2 m-4 px-4 duration-300 hover:scale-105'>
                                    Demo
                                </button></a>
                                
                                <a 
                                href={code}>
                                <button 
                                className='w-1/2 m-4 px-4 duration-300 hover:scale-105'>Code
                                </button></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )

}

export default Portfolio