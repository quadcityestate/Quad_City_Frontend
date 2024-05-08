import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { services } from '../utils/service';
// import ReactCardFlip from 'react-card-flip';
import '../assets/css/ServicesEach.css';
import { Icon } from '@iconify/react/dist/iconify.js';


export const ServicesEach = () => {

  const location = useLocation();
  const navigate = useNavigate();
  // const [isFlippedArr, setIsFlippedArr] = useState([]);
  const [serviceData, setServiceData] = useState({});

  useEffect(()=>{
    HandelLoadCategory();

  });

  function HandelLoadCategory(){
    // let url1 = location.pathname.substring(10);
    //   let url2 = location.pathname.substring(10,location.pathname.substring(1).length);
      let splitUrl = location.pathname.split('/');
      // console.log(splitUrl[2]);
      for(let i = 0;i<services?.length;i++){
        if(services[i].nick_title === splitUrl[2]){
          setServiceData(services[i]);
          return;
        }
      }
      // navigate('/');
  }

  return (
    <div className='servises-Each w-full flex flex-col items-center'>

      <header className='w-[90%] font-semibold flex flex-col items-center'>
        {/* <div className='w-full md:w-full border-b-[1px] border-black'></div> */}
        {/* <div className='text-3xl flex font-serif px-5 py-10'>
            <span>Wellcome</span>
            <span>&nbsp;To</span>
            <span>&nbsp;Our</span>
            <span>&nbsp;World</span>
            <span>&nbsp;class</span>
            <span>&nbsp;Transpotation</span>
            <span>&nbsp;Services</span>
        </div> */}
        <div className='text-3xl text-center flex font-serif px-5 py-5'>
          {serviceData?.punch_line}
        </div>
        <div className='w-full md:w-full border-b-[1px] border-black'></div>
      </header>

        {/* content */}
        <div className='w-[90%] md:w-[80%] lg:w-[70%] text-justify py-3'>
            {serviceData.content2}
        </div>

      <div className='w-[90%] md:w-[90%] lg:w-[90%] flex flex-wrap justify-center gap-10'>
        {serviceData?.category?.map((item,j)=>(
        //   <ReactCardFlip isFlipped={isFlipped[]} flipDirection="horizontal" flipSpeedBackToFront={2} flipSpeedFrontToBack={2} >
        //   <div className='Flip-front-div' onMouseEnter={()=>setIsFlipped(true)} onMouseLeave={()=>setIsFlipped(false)}>
        //     <div key={j} className='relative w-[100%] md:w-[40%] flex flex-col rounded-tr-[20%] rounded-bl-[20%] shadow-md shadow-[#a8a8a8] bg-[#373737]'>
        //           <img className='w-full aspect-video rounded-tr-[20%] rounded-bl-[20%] cursor-pointer opacity-[0.7] hover:opacity-[1]' src={require(`../assets/service/${item.cover_photo}`)} alt="coverPhoto" />
        //           <div className='bottom-0 right-0 absolute flex justify-center text-white text-[50px] font-semibold'>
        //               {item.title}
        //           </div>
        //           {/* <div className='w-full flex justify-end'>
        //               <NavLink to={`/services/${serviceData.nick_title}/${item.nick_title}`}  className='px-5 py-2 rounded-md bg-[rgb(60,90,255)] text-white text-xl'>Explore</NavLink>
        //           </div> */}
        //     </div>
        //   </div>



        //   <div className='Flip-back-div' onMouseEnter={()=>setIsFlipped(true)} onMouseLeave={()=>setIsFlipped(false)}>
        //   <p>
        //   No people should be shivering in the cold.
        //   </p>
        //   </div>
        // </ReactCardFlip>
          <div key={j} className='each-category relative w-[100%] md:w-[40%] flex flex-col rounded-tr-[20%] rounded-bl-[20%] shadow-xl shadow-[#4d4d4d] bg-[#000000]'>
                <img className='each-category-hover-img w-full aspect-video rounded-tr-[20%] rounded-bl-[20%] cursor-pointer opacity-[0.6]' src={require(`../assets/service/${item.cover_photo}`)} alt="coverPhoto" />
                <div className='absolute w-full h-full flex flex-col justify-center items-center text-white text-[50px] font-semibold cursor-pointer'>
                    <NavLink to={`/services/${serviceData.nick_title}/${item.nick_title}`} className='each-category-hover-border px-5'>{item.title}</NavLink>
                    <Icon icon="ic:round-minus" width="50" height="50"  style={{color: '#fff'}} />
                </div>
                {/* <div className='w-full flex justify-end'>
                    <NavLink to={`/services/${serviceData.nick_title}/${item.nick_title}`}  className='px-5 py-2 rounded-md bg-[rgb(60,90,255)] text-white text-xl'>Explore</NavLink>
                </div> */}
          </div>
        ))}
        </div>
    </div>
  )
}











// [
//   {serviceData.map((service,i)=>(
//     <div key={i} className='w-full flex flex-col items-center'>
//         <div className='text-2xl'>{service.title}</div>
//         <div className='py-5 w-full flex justify-center flex-wrap gap-14'>
//             {service.category.map((item,j)=>(
//                 <div key={j} className='h-[50vh] w-[40%] flex flex-col justify-around p-5 rounded-md bg-[#ddd]'>
//                         <img className='w-full h-[70%] rounded-md' src={require(`../assets/service/${item.cover_photo}`)} alt="coverPhoto" />
//                         <div>
//                             {item.title}
//                         </div>
//                         <div className='w-full'>
//                             <NavLink  className='px-5 py-2 rounded-md bg-[rgb(60,90,255)]'>Explore</NavLink>
//                         </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// ))}
// ]