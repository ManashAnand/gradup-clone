"use client";

import React from 'react'
import { useState } from 'react';
import OTPInput from './OTPInput';

const OTPchat = ({closeModal}) => {
    const [otpInput,setOptInput] = useState(false);

    const openOTPInput = () => {
        // closeModal();
        setOptInput(true);
    }
    const closeOTPInput = () => {
        setOptInput(false);
        closeModal();
        // console.log("working")
    }

  return (
    <>
        <div className="fixed inset-0 z-50 flex justify-center items-center">
         
         <div
           onClick={closeModal}
           className="fixed inset-0 bg-black opacity-50"
         ></div>

         <div className="relative p-4 w-full max-w-2xl">
           
           <div className="relative bg-white rounded-lg shadow dark:bg-white">
            


             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-[#1C4980]">

               <div className='cursor-pointer' onClick={closeModal} >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
             </svg>



               </div>
                
               <div className="text-xl font-semibold text-gray-900 dark:text-white">
                 Continue with phone
               </div>
               <button onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-blue-600 dark:hover:text-white">
                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                 </svg>
                 <span className="sr-only">Close modal</span>
               </button>
             </div>
             
             {/* Modal body */}
             <div className="p-4 md:p-5 space-y-4 flex flex-col justify-center items-center">
                   <h1 className=' font-semibold'>You will receive a 4 digit code for verification</h1>
                   
                   <div class="my-2  mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md">
                 <div>
                     <button type="submit"
                         class="flex items-center bg-gray-100 rounded-l-md border border-white justify-center sm:min-w-[8rem] min-w-[6rem] h-12 text-gray-300 
                         " 
                         >
                         +91-India
                     </button>
                 </div>

                 <div class="w-full">
                     <input type="search" x-model="input2"
                         class="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                         placeholder="Phone"/>
                 </div>
             </div>

               <button onClick={openOTPInput}  class="text-white bg-[#1C4980] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 dark:bg-[#1C4980] dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ">

                   Get OTP
                   {otpInput && (
           <div>
            <OTPInput closeOTPInput={closeOTPInput}/>
           </div>
          
           )}
               </button>

               <div className='w-1/2 text-sm'>
                 By Signing up, you agree to our
                 Terms of Use and Privacy Policy
               </div>

             </div>
            


             
           </div>
         </div>
       </div>
    </>
  )
}

export default OTPchat
