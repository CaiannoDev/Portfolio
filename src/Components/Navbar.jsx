import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'




const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)



  return (
    <div className='text-gray-300 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f]'>
        
      <div>
        <img src={Logo} alt="" style={{width:'50px'}} />
      </div>


      
      <div className='hidden md:flex'>
        <ul className='hidden md:flex font-bold'>
            <li>
              <Link activeClass="active"  to="hero"  smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link activeClass="active" to="sobre"  smooth={true} duration={500}>Sobre</Link>
            </li>
            <li>
              <Link activeClass="active" to="tecnologias"  smooth={true} duration={500}>Tecnologias</Link>
            </li>
            <li>
              <Link activeClass="active"  to="projetos" smooth={true} duration={500}>Projetos</Link>
            </li>
            <li>
                <Link activeClass="active" to="contatos"  smooth={true} duration={500}>Contatos</Link>
            </li>
        </ul>
      </div>



    {/* hamburguer */}
      <div  onClick={handleClick} className='md:hidden z-10'>
        {!nav? <FaBars/> : <FaTimes/>}
      </div>




    {/* Mobile */}
      <ul className= {!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>
        <li  className='py-6 text-4xl' >
              <Link  onClick={handleClick} activeClass="active"  to="hero"  smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-6 text-4xl' >
              <Link onClick={handleClick}  activeClass="active" to="sobre"  smooth={true} duration={500}>Sobre</Link>
        </li>
         <li className='py-6 text-4xl' >
              <Link onClick={handleClick}  activeClass="active" to="tecnologias"  smooth={true} duration={500}>Tecnologias</Link>
        </li>
        <li className='py-6 text-4xl' >
              <Link onClick={handleClick}  activeClass="active"  to="projetos" smooth={true} duration={500}>Projetos</Link>
        </li>
        <li className='py-6 text-4xl' >
                <Link onClick={handleClick}  activeClass="active" to="contatos"  smooth={true} duration={500}>Contatos</Link>
          </li>
      </ul>

        {/* social icons */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-500 ml-[-100px] duration-300 hover:ml-[-10px]'>
                    <a 
                        className='flex justify-between font-bold items-center w-full text-white' 
                        href="https://www.linkedin.com/in/caianno-ferreira-303891302/" target='_blank'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center bg-black ml-[-100px] duration-300 hover:ml-[-10px]'>
                    <a 
                        className='flex justify-between font-bold items-center w-full text-white' 
                        href="https://github.com/CaiannoDev" target='_blank'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <Link to='contatos'>
                  <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-100px] duration-300 hover:ml-[-10px]'>
                  
                      <a
                          className='flex justify-between font-bold items-center w-full text-white'
                          href="#">
                          Email <HiOutlineMail size={30}/>
                      </a>
                  </li>
                </Link>

                <li className='w-[160px] h-[60px] flex justify-between items-center bg-red-400 ml-[-100px] duration-300 hover:ml-[-10px]'>
                    <a 
                        className='flex justify-between font-bold items-center w-full text-white' 
                        href="/">
                        Currículo <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar;
