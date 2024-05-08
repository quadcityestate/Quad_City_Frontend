import React from 'react'

export const AboutUs = () => {
  return (
    <div id='About-Us' className='w-full flex flex-col items-center my-5'>
        <header className='w-[90%] text-3xl text-center py-3 font-bold flex justify-center items-center gap-10'>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
            <div className='text-3xl flex font-serif px-5 py-2 bg-[#f4c61e] text-white rounded-full'>
                <span>About</span>
                <span>&nbsp;Us</span>
            </div>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
        </header>
        <div className='w-[90%] lg:w-[70%] gap-y-3 flex flex-col items-center md:flex md:flex-row md:gap-x-5 lg:gap-5'>
            <div className='w-full text-justify my-5 text-[20px]'>
            &emsp;<i className='font-semibold'>{'"'}Quad City Estate Pvt. Ltd.{'"'}</i> {'(2022)'} is a pioneering construction and transportation
             company in India, dedicated to shaping the landscapes of tomorrow. We are a one-stop 
             solution for all your infrastructure needs,  seamlessly integrating construction 
             expertise with reliable transportation services.Whether you envision a towering skyscraper,
              a sprawling residential complex, or a vital transportation network,  Quad City Estate Pvt. 
              Ltd. is here to turn your vision into reality.
            </div>
            <div className='w-full my-3 flex justify-center items-center'>
                <img className='w-[90%]' src={require('../../assets/about-photo2.png')} alt="About Us" />
            </div>
        </div>
    </div>
  )
}
