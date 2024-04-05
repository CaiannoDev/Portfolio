import React from 'react'

const Sobre = () => {
  return (
    <div name="sobre" className='w-full h-screen bg-[#08192f] text-gray-200'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <dir className='max-w-[1000px] w-full grid grid-cols-2 gap-4' >
          <div className='text-center sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre</p>
          </div>
          <div></div>
        </dir>

        <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-5'>
          <div className='sm:text-right text-4xl font-bold mt-5'>
            <p>Sou um advogado que descobriu uma paixão pela programação e design web. </p>
          </div>
          <div className='mt-5'>
              <p>A combinação da lógica e criatividade exigidas nesse campo me cativaram de tal forma que resolvi mudar de carreira. Agora, estou dedicando meu tempo e energia para me aprimorar como desenvolvedor, ansioso para explorar todas as possibilidades e desafios que a programação tem a oferecer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre;
