import React from 'react'
import Proj1 from '../assets/projects/proj1.png'
import Proj2 from '../assets/projects/proj2.png'
import Proj3 from '../assets/projects/proj5.png'

const Projetos = () => {
  return (
    <div name="projetos" className='bg-[#08192f] w-full md:h-screen text-gray-200'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projetos</p>
                <p className='py-6'>// mais recentes:</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Proj1})`}} >
                    <div 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wide'>
                                    Html & Css Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://dev-barber-five.vercel.app/" target="_blank">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Site</button>
                                    </a>
                                    <a href="https://github.com/CaiannoDev/devBarber" target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div> 


                <div style={{backgroundImage: `url(${Proj2})`}} >
                    <div 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wide'>
                                    React & Tailwind Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://shopper-e-commerce-five.vercel.app/" target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Site</button>
                                    </a>
                                    <a href="https://github.com/CaiannoDev/Shopper-e-commerce" target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>


                <div style={{backgroundImage: `url(${Proj3})`}} >
                    <div 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wide'>
                                    React & Tailwind Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://sabor-express.vercel.app/" target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Site</button>
                                    </a>
                                    <a href="https://github.com/CaiannoDev/quickFood" target='_blank'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projetos;
