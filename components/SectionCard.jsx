import CourseForm from '@components/CourseForm'

const SectionCard = ({
  id,
  title,
  description,
  registeredUsers,
  rating,
  price,
}) => {
  return (
     <>
      
    {/* start */}
<div className="border  border-red-600 sm:flex  pb-[2rem] w-full">
          <div className="border border-black text-5xl sm:w-[70%] w-full flex font-semibold mb-2 sm:mb-0 "> 
          {/* {title} */}
          Lorem ipsum dolor sit amet 
          Lorem ipsum dolor sit amet 
          </div>
          <div className="border border-slate-500 sm:w-[30%] flex justify-around items-center w-full">
            <button  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800 h-[4rem] w-[10rem]">Enroll Now</button>
            <button  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800 h-[4rem] w-[10rem]">Download</button>

          </div>
      </div>

{/* till AI */}

<div className="border border-black">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia quasi aut aliquam, et exercitationem vero similique doloribus tenetur! Veniam!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia quasi aut aliquam, et exercitationem vero similique doloribus tenetur! Veniam!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia quasi aut aliquam, et exercitationem vero similique doloribus tenetur! Veniam!
</div>

{/* till more */}
<div className="border border-red-400 flex w-[80%] justify-between items-center font-bold mb-10">

    <div className="border border-blue-400 flex w-[6rem] justify-between">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      5 star
    </div>
    <div className="border border-blue-400 flex w-[6rem] justify-between">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      5 star
    </div>
    <div className="border border-blue-400 flex w-[6rem] justify-between">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      5 star
    </div>
    <div className="border border-blue-400 flex w-[6rem] justify-between">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      5 star
    </div>
    <div className="border border-blue-400 flex w-[6rem] justify-between">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      5 star
    </div>
    <div className="border border-blue-400 flex w-[6rem] justify-between">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      5 star
    </div>

</div>
{/*  */}
 {/* course highlight suru karte hai */}
    <div className="border border-red-500  sm:flex mb-6 sm:mb-0 justify-between">
      <div className="border border-blue-500 h-full sm:w-2/5 w-full">
          <div className="border font-bold text-2xl">Course Highlights</div>

            <div className="border border-red-400 sm:flex justify-around ">

                <div className='xl:w-1/2'>

                <div className="border border-blue-500 my-2 flex  items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div className="h-full border border-black w-full pl-4">
                        <div className='text-xl'>
                          Learn Online
                        </div>
                        <div className='text-xs'>
                          At your own schedule
                        </div>
                  </div>
                </div>
                <div className="border border-blue-500 my-2 flex  items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div className="h-full border border-black w-full pl-4">
                        <div className='text-xl'>
                          Learn Online
                        </div>
                        <div className='text-xs'>
                          At your own schedule
                        </div>
                  </div>
                </div>
                <div className="border border-blue-500 my-2 flex  items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div className="h-full border border-black w-full pl-4">
                        <div className='text-xl'>
                          Learn Online
                        </div>
                        <div className='text-xs'>
                          At your own schedule
                        </div>
                  </div>
                </div>
                <div className="border border-blue-500 my-2 flex  items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div className="h-full border border-black w-full pl-4">
                        <div className='text-xl'>
                          Learn Online
                        </div>
                        <div className='text-xs'>
                          At your own schedule
                        </div>
                  </div>
                </div>
                
               
                
                </div>

                <div className='border border-purple-600 xl:w-1/2'>

                <div className="border border-blue-500 my-2 flex  items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div className="h-full border border-black w-full pl-4">
                        <div className='text-xl'>
                          Learn Online
                        </div>
                        <div className='text-xs'>
                          At your own schedule
                        </div>
                  </div>
                </div> <div className="border border-blue-500 my-2 flex  items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div className="h-full border border-black w-full pl-4">
                        <div className='text-xl'>
                          Learn Online
                        </div>
                        <div className='text-xs'>
                          At your own schedule
                        </div>
                  </div>
                </div> <div className="border border-blue-500 my-2 flex  items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <div className="h-full border border-black w-full pl-4">
                        <div className='text-xl'>
                          Learn Online
                        </div>
                        <div className='text-xs'>
                          At your own schedule
                        </div>
                  </div>
                </div>
               
                </div>
                

            </div>

      </div>
      
      <div className="border border-green-500  sm:w-2/5 w-full">
          <div className=" font-bold text-2xl border border-red-500">About Instructor</div>
          

          <div className="sm:flex">

                  <div className="border-8 border-black-600 flex  items-center sm:w-1/2">
                    <div className="border border-blue-400 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center"></div>
                        <div className='text-xl ml-4'>
                          Learn Online
                          <div className='text-xs'>
                            At your own schedule
                          </div>
                        </div>
                   </div>

                  <div className="border-8 border-black-600 flex  items-center sm:w-1/2">
                    <div className="border border-blue-400 h-20 w-20 rounded-full overflow-hidden flex justify-center items-center"></div>
                        <div className='text-xl ml-4'>
                          Learn Online
                          <div className='text-xs'>
                            At your own schedule
                          </div>
                        </div>
                   </div>
           
           
            </div>
                  <div className="sm:flex">

                  
                        <div className="border-8 border-black-600 flex-col  items-center sm:w-1/2 text-2xl font-bold">
                        <div>Offered By</div>
                        <div className='flex'>

                          <div className="border border-blue-400 h-[4rem] w-20 rounded-md overflow-hidden flex justify-center items-center"></div>
                              <div className='text-xl ml-4'>
                                Learn Online
                                <div className='text-xs'>
                                  At your own schedule
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="border-8 border-black-600 flex-col  items-center sm:w-1/2 text-2xl font-bold">
                        <div>Certified By</div>
                        <div className='flex'>

                          <div className="border border-blue-400 h-[4rem] w-20 rounded-md overflow-hidden flex justify-center items-center"></div>
                              <div className='text-xl ml-4'>
                                Learn Online
                                <div className='text-xs'>
                                  At your own schedule
                                </div>
                              </div>
                          </div>
                        </div>



                  </div>

           </div>
          
           
    </div>
     </>
  )
}

export default SectionCard

/**
 
  const bgImage = url

  const cardStyle = {
    backgroundImage: `url(${bgImage})`,
  }

  return (
    <div
      className='relative rounded-xl h-64 w-full bg-cover bg-center'
      style={cardStyle}
    >
      
      <div className='absolute inset-0 bg-gradient-to-br from-white-500 to-green-100 opacity-50 rounded-xl' />

      
      <div className='relative z-10 h-full w-[50%] bg-slate-900 overflow-hidden'>
        
        <span className='bg-yellow-300 rounded-lg pt-2 pb-2 pl-3 pr-3 font-bold text-lg ml-4 mt-5'>
          Government Certified Online Training
        </span>
        
      </div>
    </div>
  )
 */
