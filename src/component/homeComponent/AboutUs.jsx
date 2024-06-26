import React from 'react'

export const AboutUs = () => {
  return (
    <div id='About-Us' className='w-full flex flex-col items-center my-5'>
        <header className='w-[90%] text-3xl text-center py-3 font-bold flex justify-center items-center gap-10'>
            <div className='w-0 md:w-full border-b-[1px] border-white'></div>
            <div className='text-2xl flex font-serif px-5 py-2 bg-[#73683b] text-white rounded-full'>
                <span>About</span>
                <span>&nbsp;Us</span>
            </div>
            <div className='w-0 md:w-full border-b-[1px] border-white'></div>
        </header>
        <div className='w-[90%] lg:w-[70%] gap-y-3 flex flex-col items-center md:flex md:flex-row md:gap-x-5 lg:gap-5'>
            <div className='w-full text-center my-5 text-[20px]'>
            &emsp;<i className='font-semibold'>{'"'}Quad City Estate Pvt.Ltd.{'"'}</i> is a pioneering construction and import-export
             company in India, dedicated to shaping the landscapes of tomorrow. We are a one-stop 
             solution for all your infrastructure needs,  seamlessly integrating construction 
             expertise with reliable import-export services.Whether you envision a towering skyscraper,
              a sprawling residential complex, or a vital import-export network,  Quad City Estate Pvt.Ltd. is here to turn your vision into reality.
            </div>
            <div className='w-full my-3 flex justify-center items-center'>
                <img className='w-[90%] rounded-3xl' src={require('../../assets/about-photo2.png')} alt="About Us" />
            </div>
        </div>
    </div>
  )
}
