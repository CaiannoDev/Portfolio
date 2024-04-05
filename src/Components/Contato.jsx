import React from 'react'

const Contato = () => {
  return (
    <div name="contatos" className='bg-[#08192f] w-full h-screen flex justify-center items-center p-4'>
        <form action="https://getform.io/f/nbvvwvzb" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-gray-200 text-4xl font-bold inline border-b-4 border-pink-600'>Contato</p>
                <p className='text-gray-200 py-4'>Preencha o formulario ou me mande um Email - caianno.dev@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" name="name" id="" placeholder='Digite seu Nome'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" name="email" id="" placeholder='Digite seu Email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" id=""  rows="10" placeholder='Digite sua mensagem'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-9 py-3 my-8 mx-auto flex items-center font-bold'>Enviar</button>
        </form>
      
    </div>
  )
}

export default Contato
