import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export const Footer = () => {
  return (
    <footer id="Footer" className="w-full flex flex-col items-center py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-[90%] mb-5 flex flex-wrap gap-5 justify-around">
          {/* <h3 className="text-lg font-semibold mb-4">Quick Links</h3> */}
          <ul className="space-y-2">
            <li>
              <a className="text-[15px] flex gap-3" href="/#Home">
                <Icon
                  icon="material-symbols:home"
                  width="30"
                  height="30"
                  style={{ color: "#fff" }}
                />
                <span className="hover:text-orange-300 cursor-pointer ">
                  Home
                </span>
              </a>
            </li>

            <li>
              <a className="text-[15px] flex gap-3" href="/#Service">
                <Icon
                  icon="grommet-icons:services"
                  width="30"
                  height="30"
                  style={{ color: "#fff" }}
                />
                <span className="hover:text-orange-300 cursor-pointer ">
                  Our Services
                </span>
              </a>
            </li>

            <li>
              <a className="text-[15px] flex gap-3" href="/#About-Us">
                <Icon
                  icon="mdi:about-circle-outline"
                  width="30"
                  height="30"
                  style={{ color: "#fff" }}
                />
                <span className="hover:text-orange-300 cursor-pointer ">
                  About Us
                </span>
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#/" className="text-[15px] flex items-center gap-3">
                <Icon
                  icon="mdi:location"
                  width="30"
                  height="30"
                  style={{ color: "#fff" }}
                />
                <span >
                <a href="#/" className="hover:text-orange-300 cursor-pointer" >Rautari, Chowmatha, Chakdaha, Nadia, West Bengal, 741248</a>
                {/* <a href="#/" className="hover:text-orange-300 cursor-pointer ">Branch Office : kh no. 128/11, street no. 9, jagatpur, burari, delhi, pin no. 110084</a> */}
                </span>

              </a>
            </li>
            {/* mail */}

            <a
              className="text-[15px] flex gap-3"
              href="mailto:quadcityestate@gmail.com"
            >
              <Icon
                icon="material-symbols:mail"
                width="30"
                height="30"
                style={{ color: "#fff" }}
              />
              <span className="hover:text-orange-300 cursor-pointer">
                quadcityestate@gmail.com
              </span>
            </a>

            <p className="text-[15px] flex gap-3">
              <Icon
                icon="material-symbols:call"
                width="30"
                height="30"
                style={{ color: "#fff" }}
              />
              <span className="hover:text-orange-300 cursor-pointer">
                +91 7044769955
              </span>
            </p>
          </ul>

          {/* <div className='space-y-2'>
          <a className='hover:text-[#d9d9d9] cursor-pointer text-[15px] flex gap-3' href="mailto:dxbqcs@gmail.com">
            <Icon icon="material-symbols:mail" width="30" height="30"  style={{color: 'black'}} />
            <span>dxbqcs@gmail.com</span>
            </a>
          <p className='hover:text-[#d9d9d9] cursor-pointer text-[15px] flex gap-3'>
            <Icon icon="material-symbols:call" width="30" height="30"  style={{color: 'black'}} />
            <span>+91 7044769955</span>
          </p>
        </div> */}
        </div>
      </div>

      <div className="w-[90%] border-b-[1px] border-[#fff]"></div>

      <div className="w-[90%] flex justify-around items-center">
        {/* <h3 className="text-lg font-semibold mb-4">Connect</h3> */}
        <div className="py-5 text-[12px]">
          &copy; 2024 QUAD CITY ESTATE PVT.LTD.
        </div>
        <ul className="flex space-x-5 md:space-x-10">
          {/* <li><a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer"><Icon icon="logos:youtube-icon" width="30" height="30" /></a></li> */}
          {/* <li><a href="https://www.facebook.com/"><Icon icon="logos:facebook" width="30" height="30" /></a></li> */}
          <li>
            <a href="https://www.instagram.com/quadcity.insta?igsh=MW1pYWgxN3gwYzY1cg==">
              <Icon icon="skill-icons:instagram" width="30" height="30" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+917044769955/">
              <Icon icon="logos:whatsapp-icon" width="30" height="30" />
            </a>
          </li>
        </ul>
      </div>

      {/* <div className='w-[90%] border-b-[1px] border-black'></div> */}
    </footer>
  );
};
