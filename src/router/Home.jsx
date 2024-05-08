import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slider } from '../component/homeComponent/Slider';
import { AboutUs } from '../component/homeComponent/AboutUs';
import { Services } from '../component/homeComponent/Services';

export const Home = () => {
  return (
    <div id='Home' className=''>
        <Slider />
        <Services />
        <AboutUs />
    </div>
  )
}
