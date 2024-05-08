import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const Footer = () => {
  return (
    <footer id='Footer' className="w-full flex flex-col items-center py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-[90%] mb-5 flex flex-wrap gap-5 justify-around">
          {/* <h3 className="text-lg font-semibold mb-4">Quick Links</h3> */}
            <ul className="space-y-2">

                <li><a className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3' href="/#Home">
                  <Icon icon="material-symbols:home" width="30" height="30"  style={{color: '#000'}} />
                  <span>Home</span>
                </a></li>

                <li><a className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3' href="/#Service">
                  <Icon icon="grommet-icons:services" width="30" height="30"  style={{color: 'black'}} />
                  <span>Our Services</span>
                  </a></li>

                <li><a className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3' href="/#About-Us">
                  <Icon icon="mdi:about-circle-outline" width="30" height="30"  style={{color: 'black'}} />
                  <span>About Us</span>
                  </a></li>
            </ul>

            <ul className="space-y-2">
                <li><a href="#/" className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3'>
                    <Icon icon="mdi:location" width="30" height="30"  style={{color: 'black'}} />
                    <span>Rautari Chowmatha, Nadia, WB, India, 741248</span>
                  </a></li>
                  {/* mail */}

                  <a className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3' href="mailto:dxbqcs@gmail.com">
            <Icon icon="material-symbols:mail" width="30" height="30"  style={{color: 'black'}} />
            <span>dxbqcs@gmail.com</span>
            </a>
          <p className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3'>
            <Icon icon="material-symbols:call" width="30" height="30"  style={{color: 'black'}} />
            <span>+91 7044769955</span>
          </p>

            </ul>

        {/* <div className='space-y-2'>
          <a className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3' href="mailto:dxbqcs@gmail.com">
            <Icon icon="material-symbols:mail" width="30" height="30"  style={{color: 'black'}} />
            <span>dxbqcs@gmail.com</span>
            </a>
          <p className='hover:text-[#d9d9d9] cursor-pointer text-[18px] flex gap-3'>
            <Icon icon="material-symbols:call" width="30" height="30"  style={{color: 'black'}} />
            <span>+91 7044769955</span>
          </p>
        </div> */}

        </div>
      </div>

        <div className='w-[90%] border-b-[1px] border-black'></div>

      <div className="w-[90%] flex justify-around items-center">
          {/* <h3 className="text-lg font-semibold mb-4">Connect</h3> */}
          <div className='py-5 text-[12px]'>
            &copy; 2024 QUAD CITY ESTATE PVT.LTD.
        </div>
          <ul className="flex space-x-7">
            <li><a href="https://www.youtube.com/@PupaiJ" target='_blank' rel="noopener noreferrer"><Icon icon="logos:youtube-icon" width="30" height="30" /></a></li>
            <li><a href="https://www.facebook.com/pupai.j?mibextid=kFxxJD"><Icon icon="logos:facebook" width="30" height="30" /></a></li>
          </ul>
        </div>

        {/* <div className='w-[90%] border-b-[1px] border-black'></div> */}

    </footer>
  )
}

