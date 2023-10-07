import React from 'react'
import first from '../../public/assets/certificate_img/first.png'
import logo from '../../public/assets/certificate_img/logo_of_GradUp.png'
import COA from '../../public/assets/certificate_img/COA.png'
import Line from '../../public/assets/certificate_img/designLine.png'
import Sponser from '../../public/assets/certificate_img/sponser.png'
import CeoSign from '../../public/assets/certificate_img/CeoSirSign.png'

import Image from 'next/image'


const Certificate = async () => {

  const id = "xyz123abc"
  const toThe = "john Doe"
  return (
    <>
     <div className="border border-white  w-[100%]  bg-[#F1EFED] p-6 my-6">
            <div className=" h-[100%] px-10 ">
                <div className=" flex justify-start items-center bold text-lg ">
                 Certification Id: {id}
                </div>
                <div className=" flex justify-between items-center bold h-[15rem]">
                    <Image width={150} height={150} src={first} className=' ' alt="non working"/>
                    <Image width={225} height={225} src={logo} className='  bg-white scale-125' alt="non working"/>
                    <Image width={150} height={150} src={first} className=' rotate-90 bg-white ' alt="non working"/>
                </div>
                <div className=' flex justify-center items-center'>
                <Image width={800} height={550} src={COA} className=' ' alt="non working"/>
                </div>
                
                
                <div className=' flex justify-center items-center'>
                <Image width={500} height={200} src={Line} className=' ' alt="non working"/>
                </div>
               
               
                <div  className=" h-[5rem] flex items-end justify-center bold text-xl helvetica" >As successfully completed the course and assessment on </div>
                {/* <div   className={Open_Sans.className + " h-[5rem] flex items-end justify-center bold text-xl"} >As successfully completed the course and assessment on </div> */}
                
                
                
                <div className=" h-[5rem] flex items-center justify-center ">
                  <div  className=" h-[4rem] w-[25rem] bg-[#1B4B83] bold text-xl text-white flex justify-center items-center" >
                    Manash
                  </div>
                </div>

                <div className=" h-[5rem] flex items-start justify-center bold text-xl font-helvetica">Gradup Programs are designed by top Alumni from  </div>

                <div className=" flex justify-between h-[10rem] items-end">
                  <div className=" relative">
                    <Image width={150} height={150} src={first} className=' -rotate-90' alt="non working"/>
                    <div className=" top-10 left-10 absolute font-extrabold">
                      Awarded on:
                      <div className="border-b-2 border-[#CCA554] "> {toThe} </div>
                    </div>
                  </div>
                <Image width={350} height={350} src={Sponser} className=' -translate-y-8' alt="non working"/>
                <Image width={200} height={150} src={CeoSign} className=' ' alt="non working"/>
                </div>
            </div>
     </div>
    </>
  )
}

export default Certificate
