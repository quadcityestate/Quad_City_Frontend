import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { services } from '../utils/service';

export const ServicesCategory = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [eachCategory, setEachCategory] = useState({});
  
    useEffect(()=>{
      HandelExploreCategory();
    });
  
  function HandelExploreCategory(){
    // let url1 = location.pathname.substring(10);
    //   let url2 = location.pathname.substring(10,location.pathname.substring(1).length);
      let splitArr = location.pathname.split('/');
    //   console.log(splitArr[2]);
      for(let i = 0;i<services?.length;i++){
        if(services[i].nick_title === splitArr[2]){
            for(let j=0;j<services[i].category.length;j++){
                if(services[i].category[j].nick_title === splitArr[3]){
                    setEachCategory(services[i].category[j]);
                    return;
                }
            }
        }
      }
      navigate('/');
  }
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='w-[90%] text-center text-3xl p-2'>Wellcome To Our Gallery</div>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] text-justify py-5 flex flex-col gap-4'>
            {/* {eachCategory?.content?.companyName} */}
            {/* {console.log(eachCategory?.content?.paragraph)} */}
            {eachCategory?.content?.paragraph?.map((con,i)=>(
              // <div className='w-full flex flex-col justify-center items-center gap-5'>
                <div><b>{con?.heading}</b>&nbsp;{con?.para}</div>
              // </div>
            ))}
        </div>
        <div className='w-full flex flex-wrap items-center justify-center gap-3'>
            {eachCategory?.photos?.map((category,key)=>(
                <div key={key} className='w-[45%] md:w-[25%] lg:w-[15%] aspect-square flex flex-col items-center'>
                  <img className='w-full h-full cursor-pointer hover:scale-150' src={require(`../assets/service/${category?.url}`)} alt="" />
                  <span>{category?.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
