import Link from 'next/link'
import React from 'react'
import profile from '../../public/assets/mentors/mentor1.png'
import Image from 'next/image'

const AdminDashboard = () => {
  return (
    <>
        <div className="bg-white w-screen flex">
            <div className="bg-blue-500 w-1/5 hidden md:block border">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-white">
      <ul class="space-y-2 font-medium ">
         <li>
            <Link href="/" class="flex items-center p-2 text-gray-900 rounded-lg  group">
               
               <span class="ms-3 text-3xl">GradUp</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Total Users</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Total HR</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Total Posted Job</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Add Blogs</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Add New Courses</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Posted Internships</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Alumni Management</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Add Hackathons</span>
            </Link>
         </li>
       
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg  text-blackgroup">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
               </svg>
               <span class="ms-3">Logout</span>
            </Link>
         </li>
         <li>
            <Link href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg  text-blackgroup">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
               </svg>
               <span class="ms-3">Dark Mode</span>

        <div className='ml-4'>

        <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer"/>
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>

        </div>       
            </Link>
         </li>
       
      </ul>
   </div>

            </div>

            <div className=" h-full w-full  flex justify-center items-center mt-2 flex-col">
                <div className=" w-4/5 flex justify-between items-center">
                    <div className='flex  items-center w-[40%]'>
                        <div className='text-gray-500 font-bold  sm:text-md rounded-md border border-gray-400 px-8 py-4 mr-1 sm:py-4'>
                           Admin Panel Dashboard
                        </div>
                        <div className='text-gray-500 font-bold rounded-md border border-gray-400 px-8 py-4'>
                            Settings
                        </div>
                    </div>
                <div>
                <Image class="w-12 h-12 rounded-full" src={profile} alt="Rounded avatar" />
                </div>
                </div>    
              
                <div className=" w-4/5 flex justify-between items-center  mt-4">
                <Link href="#" class="flex items-center p-2 text-gray-900 rounded-lg text-black group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Applied Internships</span>
            </Link>
                </div>

                <div className=" w-4/5 flex justify-between items-center  mt-4 ">
                    <div className="w-64 bg-[#C1DEFE] text-black h-28 rounded-md flex flex-col justify-center items-center">
                        <div className="text-black">Male</div>
                        <div className="text-black font-bold text-3xl">59</div>
                    </div>
                    <div className="w-64 bg-[#FCF4D7] text-black h-28 rounded-md flex flex-col justify-center items-center">
                        <div className="text-black">Female</div>
                        <div className="text-black font-bold text-3xl">23</div>
                    </div>
                    <div className="w-64 bg-[#EFE0FD] text-black h-28 rounded-md flex flex-col justify-center items-center">
                        <div className="text-black">Other</div>
                        <div className="text-black font-bold text-3xl">12</div>
                    </div>
                    
        
                </div>
                <div className=" w-4/5 flex justify-between items-center  mt-4">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap text-left">Career Services Purchased</span>
            </div>

                
            <div className=" w-4/5 flex justify-between items-center  mt-4">
            <footer class="bg-white  w-full">
                <div class="mx-auto w-full ">
                <div class="flex flex-wrap gap-8 px-4 py-6 flex-start justify-between">
                <div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-left">Name</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
        <li class="mb-4">
            <a href="#" class="hover:underline">Alice Johnson</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">Bob Smith</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">Eva Martinez</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">David Miller</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">Sophie Brown</a>
        </li>
    </ul>
</div>
<div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-left ">Email</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
        <li class="mb-4">
            <a href="#" class="hover:underline">alice.johnson@example.com</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">bob.smith@example.com</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">eva.martinez@example.com</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">david.miller@example.com</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">sophie.brown@example.com</a>
        </li>
    </ul>
</div>
<div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-left ">Date Applied</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
        <li class="mb-4">
            <a href="#" class="hover:underline">2023-01-15</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">2023-02-20</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">2023-03-10</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">2023-04-05</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">2023-05-22</a>
        </li>
    </ul>
</div>
<div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-left ">Age</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
        <li class="mb-4">
            <a href="#" class="hover:underline">28</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">35</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">23</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">40</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">29</a>
        </li>
    </ul>
</div>
<div>
    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-left ">Resume</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
        <li class="mb-4">
            <a href="#" class="hover:underline">Resume_AliceJohnson.pdf</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">Resume_BobSmith.pdf</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">Resume_EvaMartinez.pdf</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">Resume_DavidMiller.pdf</a>
        </li>
        <li class="mb-4">
            <a href="#" class="hover:underline">Resume_SophieBrown.pdf</a>
        </li>
    </ul>
</div>

                </div>
                
                </div>
            </footer>
            </div>

            </div>

        </div>
        
 
    </>
  )
}

export default AdminDashboard
