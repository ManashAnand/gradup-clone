"use client";

import React ,{ useState } from 'react'
import userProfile from '../public/assets/mentors/Abhinabacompress.jpg'
import OTPchat from './ModalChat/OTPchat';
import  Image  from 'next/image';

const ChatProfileUI = () => {
  const [isModalOpenPhone, setIsModalOpenPhone] = useState(false);

  const openModal = () => {
    setIsModalOpenPhone(true);
  };
  
  const closeModal = () => {
    setIsModalOpenPhone(false);
  };
  return (
    <>
     <div className=" border border-black flex flex-row   rounded-xl mt-4 sm:mt-0 ">
        <div className="  p-8 ">
            <div className=" flex items-center justify-center ">
                <Image src={userProfile} alt="profile image"
                 height={200} width={200}
                  className="border border-black  rounded-full"/>
            </div>
            <div className='flex flex-col justify-content items-center'>
                <div className="flex mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                </div>
                <span className='text-sm text-gray-500'>1.1k reviews</span>
            </div>
        </div>

        <div className=' w-full flex justify-center items-start justify-starts px-2 flex-col '>
        <div className="  flex gap-2">
            <span className='w-4 bg-black-500 '>
            <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="feCheckVerified0" fill="yellow" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feCheckVerified1" fill="currentColor"><path id="feCheckVerified2" d="M4.252 14H4a2 2 0 1 1 0-4h.252c.189-.734.48-1.427.856-2.064l-.18-.179a2 2 0 1 1 2.83-2.828l.178.179A7.952 7.952 0 0 1 10 4.252V4a2 2 0 1 1 4 0v.252c.734.189 1.427.48 2.064.856l.179-.18a2 2 0 1 1 2.828 2.83l-.179.178c.377.637.667 1.33.856 2.064H20a2 2 0 1 1 0 4h-.252a7.952 7.952 0 0 1-.856 2.064l.18.179a2 2 0 1 1-2.83 2.828l-.178-.179a7.952 7.952 0 0 1-2.064.856V20a2 2 0 1 1-4 0v-.252a7.952 7.952 0 0 1-2.064-.856l-.179.18a2 2 0 1 1-2.828-2.83l.179-.178A7.952 7.952 0 0 1 4.252 14ZM9 10l-2 2l4 4l6-6l-2-2l-4 4l-2-2Z"/></g></g></svg>
            </span>
            <span className='ml-2 text-md text-sky-500 '>GradUp Verified</span>
        </div>
        <div className="mt-2 text-xl font-bold">Kumar Abhishek</div>
        <div className='text-gray-500 text-left'>

Machine Learning
C++, HTML, JavaScript
<div>

Exp: 3 Years
</div>
</div>
<button type="button" className="mt-4 bg-white border w-full border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#EBF2FF]  dark:border-gray-600  dark:hover:border-gray-600 text-blue-500" onClick={openModal}>Chat</button>
{isModalOpenPhone && (
           <div>
            <OTPchat closeModal={closeModal}/>
           </div>
          
           )}
        </div>

     </div> 
    </>
  )
}

export default ChatProfileUI
