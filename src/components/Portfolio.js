import React from 'react'
import airbnb from '../assets/portfolio/airbnb.jpg'
import data from '../assets/portfolio/data.jpg'
import furniture from '../assets/portfolio/Furniture.jpg'
import grubking from '../assets/portfolio/Grubking.jpg'
import museum from '../assets/portfolio/museum.jpg'
import roar from '../assets/portfolio/Roar-bikes.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: furniture,
            href: 'file:///C:/Users/User/Desktop/Durablefurnitures.zip/The%20Project/Main.html'
        },
        {
            id: 2,
            src: roar
        },
        {
            id: 3,
            src: airbnb
        },
        {
            id: 4,
            src: museum
        },
        {
            id: 5,
            src: data
        },
        {
            id: 6,
            src: grubking
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-[#0a192f] to-slate-700 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-300'>Portfolio</p>
                <p className='py-6'>Check out some of my works</p>
            </div>


            <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({id, src, href}) => (
                        <div 
                        key={src} 
                        className='shadow-md shadow-gray-600 rounded-lg'>
                            <img 
                            src={src} 
                            alt='' 
                            className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <button 
                                href={href} 
                                className='w-1/2 m-4 duartion-300 hover:scale-105'>Demo</button>
                                <button className='w-1/2 m-4 duartion-300 hover:scale-105'>Code</button>
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