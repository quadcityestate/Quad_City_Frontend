import React from 'react'
import { Slide } from 'react-slideshow-image'

export const Slider = () => {
  return (
    <div className='Slider w-full mb-5'>
            <Slide slidesToScroll={1} transitionDuration={1500} slidesToShow={1} arrows={false} indicators={true}>
                <div className='h-[60vw] md:h-[50vw] lg:h-[30vw] w-full'>
                    <img className='h-full w-full' src={require('../../assets/slider/buildings.jpg')} alt="" />
                </div>
                <div className='h-[60vw] md:h-[50vw] lg:h-[30vw] w-full'>
                    <img className='h-full w-full' src={require('../../assets/slider/technology.jpg')} alt="" />
                </div>
                <div className='h-[60vw] md:h-[50vw] lg:h-[30vw] w-full '>
                    <img className='h-full w-full' src={require('../../assets/slider/work.jpg')} alt="" />
                </div>
                {/* <div className='aspect-video w-full'>
                    <img className='h-full w-full' src={require('../assets/slider/buildings.jpg')} alt="" />
                </div> */}
            </Slide>
        </div>
  )
}
