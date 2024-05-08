import React from 'react'
// import { services } from '../utils/service';
import { services } from '../utils/service';
import { NavLink } from 'react-router-dom';

export const Services = () => {

  return (
    <div className='Services-page flex flex-col items-center py-5'>
        <header className='w-[90%] font-semibold flex justify-between items-center gap-10 mb-5'>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
            <div className='text-3xl flex font-serif px-5 py-2'>
                <span>Wellcome</span>
                <span>&nbsp;To</span>
                <span>&nbsp;Our</span>
                <span>&nbsp;Services</span>
            </div>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
        </header>

        <div className='w-[90%]'>
            {services.map((service,i)=>(
                <div key={i} className='w-full flex flex-col items-center'>
                    <div className='text-2xl'>{service.title}</div>
                    <div className='py-5 w-full flex justify-center flex-wrap gap-14'>
                        {service.category.map((item,j)=>(
                            <div key={j} className='h-[50vh] w-[40%] flex flex-col justify-around p-5 rounded-md bg-[#ddd]'>
                                    <img className='w-full h-[70%] rounded-md' src={require(`../assets/service/${item.cover_photo}`)} alt="coverPhoto" />
                                    <div>
                                        {item.title}
                                    </div>
                                    <div className='w-full'>
                                        <NavLink to={`/services/${service.nick_title}/${item.nick_title}`} className='px-5 py-2 rounded-md bg-[rgb(60,90,255)]'>Explore</NavLink>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}





