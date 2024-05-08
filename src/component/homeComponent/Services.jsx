
import React from 'react';
import {services} from '../../utils/service';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

export const Services = () => {
  return (
    <div id='Service' className='Service w-full flex flex-col items-center'>
        <header className='w-[90%] font-semibold flex justify-between items-center gap-10 mb-5'>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
            <div className='text-3xl flex font-serif px-5 py-2 rounded-full text-white bg-[#893687]'>
                <span>Our</span>
                <span>&nbsp;Services</span>
            </div>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
        </header>
        <div className='w-[90%] md:w-[80%] flex flex-col items-center'>
            <div className='w-full md:w-[90%] lg:w-[70%] text-justify text-xl'>
            <i className='font-semibold'>&emsp;{'"'}Quad City Estate Pvt. Ltd.{'"'}</i> is a dynamic construction and 
            transportation company committed to delivering exceptional service across worldwide.
             We are a one-stop shop for all your infrastructure needs, specializing in both the creation
              of exceptional buildings and the seamless movement of goods.
            </div>
            <div className='w-full md:w-[100%] py-3 flex items-center gap-7 md:gap-0 lg:gap-0 flex-col md:flex-row md:flex-wrap md:justify-around'>

                {/* {services?.map((service,i)=>(
                    <NavLink to={`services/${service.nick_title}`} key={i} className='w-full md:w-[45%] lg:w-[45%] flex items-center gap-3 px-3 py-5 rounded-md bg-[#4e9eff] hover:bg-[#e1eb25] cursor-pointer'>
                        <div className='w-full flex items-center gap-3'>
                            <div className='rounded-full p-3 bg-white'>
                                <Icon icon={service.icon} width="30" height="30"  style={{color: 'black'}} />
                            </div>
                            <div className='text-2xl font-semibold'>{service.title}</div>
                        </div>
                        <div>
                        <Icon icon="ic:round-greater-than" width="32" height="32"  style={{color: 'black'}} />
                        </div>
                    </NavLink>
                ))} */}

                {services?.map((service,j)=>(
                    <div key={j} className='h-auto w-[90%] md:w-[45%] lg:w-[45%] flex flex-col justify-around p-5 rounded-md bg-[#eaeaea] shadow-md shadow-[#999]'>
                        <div className='w-full overflow-hidden rounded-md'>
                            <img className='w-full rounded-md cursor-pointer duration-1000 hover:scale-110' src={require(`../../assets/service/${service.cover_photo}`)} alt="coverPhoto" />
                        </div>
                        <div className='py-2 text-3xl font-bold text-blue-700'>
                            <i>{service.title}</i>
                        </div>
                        <div className='w-full mb-5 text-justify line-clamp-2'>
                            <i className='text-[18px]'>{service.content1}</i>
                        </div>
                        <div className='w-full'>
                            <NavLink to={`services/${service.nick_title}`}  className='flex items-center px-5 py-2 rounded-md text-[#000] font-semibold text-2xl cursor-pointer'>
                                <span>Explore</span>
                                <Icon icon="ep:d-arrow-right" width="30" height="30"  style={{color: 'black'}} />
                                {/* <Icon icon="ic:round-greater-than" width="32" height="32"  style={{color: 'black'}} />
                                <Icon icon="ic:round-greater-than" width="32" height="32"  style={{color: 'black'}} /> */}
                                </NavLink>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}
