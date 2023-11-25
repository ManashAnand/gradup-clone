"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const AmountChat = ({closeAmountChat}) => {
  const router = useRouter();

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-red">
         
         <div
           onClick={closeAmountChat}
           className="fixed inset-0 bg-black opacity-50"
         ></div>

         <div className="relative p-4 w-full max-w-2xl">
           
           <div className="relative bg-white rounded-lg shadow dark:bg-white">
            


           
             
             {/* Modal body */}
             <div className="p-4 md:p-5 space-y-4 flex flex-col justify-center items-center min-h-[20rem] ">
                   <h1 className=' font-semibold text-black sm:w-3/4  mb-4'>Minimum balance of 5 minutes (INR 300.0) is required to start chat with Aamil</h1>
                   
                   <div class="my-2  mx-auto  w-10/12 justify-between flex items-center rounded-md  ">
                

                   <div class="w-full">
                   <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Cancel</button>

                   <button onClick={() => router.push('/Wallet')} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center dark:bg-[#1C4980] dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        Recharge

                    </button>
                 </div>

             </div>

              


             </div>
            


             
           </div>
         </div>
       </div>
    </>
  )
}

export default AmountChat
