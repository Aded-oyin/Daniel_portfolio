import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-slate-800 to-[#0a192f] text-gray-300'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-300'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 p-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={html} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 p-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={css} alt="HTML icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 p-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={javascript} alt="HTML icon"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-blue-600 hover:scale-105 duration-500 p-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={react} alt="HTML icon"/>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-sky-400 hover:scale-105 duration-500 p-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={tailwind} alt="HTML icon"/>
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-gray-500 hover:scale-105 duration-500 p-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={github} alt="HTML icon"/>
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills