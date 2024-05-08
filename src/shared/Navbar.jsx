
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Sidebar } from './Sidebar';
import { NavLink, useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css'

export const Navbar = () => {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div id='Navbar' className='Navbar w-full z-10 fixed top-0 h-20 p-2 flex justify-between md:justify-around items-center bg-[#e9e9e9] shadow-md shadow-[#7a7a7a]'>
        
        <NavLink to={'/'} className='nav-profile-name flex items-center gap-3 h-full text-2xl font-bold text-red-600'>
            <div className='h-full'>
              <img className='h-full aspect-square' src={require('../assets/quad-city.jpg')} alt="" />
            </div>
            <div className='Site-Logo flex flex-col md:flex-row text-[25px] md:text-[20px] lg:text-[30px]'>
              <span>QUAD CITY ESTATE</span>
              <span className='w-full md:w-auto flex justify-center'>
                <span className='w-0 md:w-auto'>&nbsp;</span>
                PVT. LTD.
              </span>
            </div>
        </NavLink>
        
        <ul className='nav-list w-0 overflow-hidden md:w-auto md:flex md:gap-2 lg:gap-5 items-center'>
            <NavLink to={'/'} style={({isActive})=>({color: isActive ? "#ff5757" : "#000",})} className='px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>Home</NavLink>
            {/* <NavLink to={'/services'} style={({isActive})=>({color: isActive ? "#ff5757" : "#000",})} className='cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>Our Service</NavLink> */}
            
            {location.pathname === '/'?(
              <a href='#Service' className='px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>Our Service</a>
            ):(
              <NavLink to={'/#Service'}>
                <a href='#Service' className='px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>Our Service</a>
              </NavLink>
            )}

            {location.pathname === '/'?(
              <a href='#About-Us' className='px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>About Us</a>
            ):(
              <NavLink to={'/#About-Us'}>
                <a href='#About-Us' className='px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>About Us</a>
              </NavLink>
            )}

            <a href='#Footer' className='px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ff5757] border-transparent'>Contact Us</a>
        </ul>

        <div onClick={()=>setSidebarOpen(true)} className='sidebar-icon flex md:hidden text-[35px] cursor-pointer'>
            <Icon icon="fe:bar"  style={{color: 'Black'}} />
        </div>
        <div className="absolute">
          <Sidebar sidebarOpen={sidebarOpen} 
                    setSidebarOpen={setSidebarOpen}
          />
      </div>
    </div>
  )
}

