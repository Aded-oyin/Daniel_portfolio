import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-slate-700 to-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-300'>About</p>
                </div>
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Daniel, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am an enthusiastic driven broadminded professional aimed at contributing essentially to the organizational sets goals and objectives, and to provide valued services to an establishment through smart work, interpersonal relationship, organizational mindset and a positive attitude towards the growth of the organization while growing in my career. A Proficient Front End Developer.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About