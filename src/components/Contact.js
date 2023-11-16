import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-[#0a192f] to-slate-800'>
        
        <div className='flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/0c32aefa-f9f5-46c7-a707-48f516092bb3' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-300 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'> // Submit the form below or shoot me an email - danyodele50@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows="8" placeholder='Message'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-11 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Collaborate</button>
            </form>
        </div>

    </div>
  )
}

export default Contact