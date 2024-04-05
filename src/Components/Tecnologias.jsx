import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import git from '../assets/git.svg'
import mongo from '../assets/mongo.png'


const Tecnologias = () => {
  return (
    <div name="tecnologias" className='bg-[#08192f] text-gray-200 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 py-4'>Tecnologias</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 mt-4'>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={html} alt="" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={css} alt="" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={javascript} alt="" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={react} alt="" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={node} alt="" />
                    <p className='my-4'>NODE.js</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={mongo} alt="" />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={tailwind} alt="" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] duration-500 hover:scale-110'>
                    <img className='w-20 mx-auto' src={git} alt="" />
                    <p className='my-4'>GIT</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Tecnologias;
