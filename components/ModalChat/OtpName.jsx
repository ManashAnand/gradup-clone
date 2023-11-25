import React,{useState} from 'react'
import AmountChat from './AmountChat'

const OtpName = ({closeOTPName}) => {
  const [closeAmountModal,setCloseAmountChat] = useState(false)

  const closeAmountChat = () => {
    // closeOTPName() 
    setCloseAmountChat(false)
  } 
  const openAmountChat = () => {
    setCloseAmountChat(true);
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
         
         <div
           onClick={closeOTPName}
           className="fixed inset-0 bg-black opacity-50"
         ></div>

         <div className="relative p-4 w-full max-w-2xl">
           
           <div className="relative bg-white rounded-lg shadow dark:bg-white">
            


             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-[#1C4980]">

               <div className='cursor-pointer'
                onClick={closeOTPName}
                 >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
             </svg>



               </div>
                
               <div className="text-xl font-semibold text-gray-900 dark:text-white">
                 Continue with phone
               </div>
               <button
                onClick={closeOTPName} 
                className="text-gray-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-blue-600 dark:hover:text-white">
                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                 </svg>
                 <span className="sr-only">Close modal</span>
               </button>
             </div>
             
             {/* Modal body */}
             <div className="p-4 md:p-5 space-y-4 flex flex-col justify-center items-center min-h-[16rem]">
                   <h1 className=' font-semibold text-black'>What's your first name? </h1>
                   
                   <div class="my-2  mx-auto  w-10/12 justify-between flex items-center rounded-md  ">
                

                   <div class="w-full">
                     <input type="search" x-model="input2"
                         class="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                         placeholder="First Name"/>
                 </div>

             </div>

               <button onClick={ openAmountChat } class="text-white bg-[#1C4980] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 dark:bg-[#1C4980] dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ">

                   Submit
               </button>
            {
              closeAmountModal && (
                <AmountChat closeAmountChat={closeAmountChat}/>
              )
            }

             </div>
            


             
           </div>
         </div>
       </div>
    </>
  )
}

export default OtpName
