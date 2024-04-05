import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className='bg-[#08192f] w-full h-screen'>
        
        <div className='h-full max-w-[1000px] gap-5 mx-auto px-8 flex flex-col justify-center'>
            <h1 className=' text-gray-200 text-2xl md:text-5xl'>Olá, Eu sou Caianno Ferreira. </h1>
            <TypeAnimation 
                    className= 'font-bold text-pink-600 text-4xl  md:text-[3.5rem]'
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Desenvolvedor Front-end.',
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Tech Entusiasta.',
                        1000,
        
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{display: 'inline-block' }}
                    repeat={Infinity}
                    />
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600'>
                      <Link activeClass="active" to="sobre"  smooth={true} duration={500}>Seja Bem-Vindo!</Link>
                    </button>
                </div>
            
        </div>



    </div>
  )
}

export default Hero;
