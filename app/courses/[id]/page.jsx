'use client'

import React, { useState } from 'react'

import useSWR from 'swr'

import Spinner from '@components/Spinner'
import CourseFaq from '@components/CourseFaq'
import CourseModule from '@components/CourseModule'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

{
  /* Get the course info  */
}
async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}
{
  /* Ends Here */
}

export default function Courses({ params }) {
  const [hydrated, setHydrated] = React.useState(0)
  const [activeSection, setActiveSection] = useState(null)
  const router = useRouter()
  const toggleSection = (sectionId) => {
    setActiveSection((prevActiveSection) =>
      prevActiveSection === sectionId ? null : sectionId
    )
  }
  const { data: session } = useSession()
  const email = session?.user.email
  const { data, error, isLoading } = useSWR(
    `/api/courses/${params.id}`,
    fetcher
  )

  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    return null
  }
  const Enroll = async (id, email) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: email, courseId: id }),
      })
      if (response.ok) {
        const responseData = await response.json()
        router.push('/cart')
      } else {
        console.error('not able to add to cart')
      }
    } catch (error) {
      console.error('An error occurred:', error.message)
    }
  }
  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    return <div>Error Occurred</div>
  }

  console.log(data)
  if (data) {
    return (
      <>
        {/* start */}
        <div className=' text-black  w-screen bg-white p-8'>
          <div className='mb-5 bg-[#F7F9FC] shadow '>
            <div className=' sm:flex pb-[2rem] w-full  pt-5 p-2 flex justify-between flex-col sm:flex-row'>
              <div className=' text-5xl text-left   font-semibold mb-2 sm:mb-0 flex w-[70%]  '>
                {data.title}
              </div>
              <div className='   h-full flex justify-end items-center '>
                <button
                  className=' bg-[#1A3A6F] hover:bg-blue-800 focus:ring-4 text-white focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-[#1A3A6F] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-slate-800 h-[4rem] w-[10rem]'
                  onClick={() => Enroll(data._id, email)}
                >
                  Enroll Now
                </button>
                <button className=' bg-[#1A3A6F] hover:bg-blue-800 focus:ring-4 text-white focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-[#1A3A6F] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-slate-800 h-[4rem] w-[10rem]'>
                  Download
                </button>
              </div>
            </div>

            <div className='mb-2 text-left bg-white mx-2 p-4 rounded-lg'>
              {data?.description}
            </div>

            {/* till more */}
            <div className=' sm:flex  justify-between items-center font-bold mb-4  p-4 rounded-md mt-2  '>
              <div className='  flex flex-start justify-between  '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                  />
                </svg>
                {data?.rating != '' ? data?.rating : '5'} Star
              </div>
              <div className=' flex flex-start justify-between '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                {data?.registeredUsers != '' ? data?.registeredUsers : '50'}{' '}
                Students
              </div>
              <div className='flex flex-start justify-between '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
                  />
                </svg>
                Assistance
              </div>
              <div className=' flex flex-start justify-between'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z'
                  />
                </svg>
                Flexible schedule
              </div>
              <div className=' flex flex-start justify-between'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                Earn credits
              </div>
              <div className=' flex flex-start justify-between'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <div className='ml-2'>10hrs</div>
              </div>
            </div>
          </div>

          {/* course highlight suru karte hai */}
          <div className='  sm:flex mb-6 sm:mb-0 justify-between mt-5'>
            <div className='text-white h-full sm:w-[50%] w-full bg-[#041E48] rounded-md p-6'>
              <div className=' font-bold text-3xl  p-2 flex justify-center '>
                <h3>Course Highlights</h3>
              </div>

              <div className=' sm:flex justify-around p-2 mt-2 '>
                <div className='xl:w-1/2  flex flex-start flex-col '>
                  <div className='  flex my-4  items-center '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                      />
                    </svg>

                    <div className='h-full font-black text-left w-full pl-4 '>
                      <div className='text-xl'>Learn Online</div>
                      <div className='text-xs'>At your own schedule</div>
                    </div>
                  </div>
                  <div className='my-2 flex  items-center  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                      />
                    </svg>

                    <div className='h-full font-black w-full pl-4 text-left'>
                      <div className='text-xl'>Placement Assistance</div>
                      <div className='text-xs'>To build your career</div>
                    </div>
                  </div>
                  <div className=' -blue-500 my-2 flex  items-center  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'
                      />
                    </svg>

                    <div className='h-full  w-full pl-4 font-black text-left'>
                      <div className='text-xl'>Doubt Clearing</div>
                      <div className='text-xs'>Through Q&A forum</div>
                    </div>
                  </div>
                  <div className='  my-2 flex  items-center  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                      />
                    </svg>

                    <div className='h-full w-full pl-4 font-black text-left'>
                      <div className='text-xl'>Lifetime Access</div>
                      <div className='text-xs'>Buy only once</div>
                    </div>
                  </div>
                </div>

                <div className='xl:w-1/2 flex flex-start flex-col'>
                  <div className=' my-4 flex  items-center  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                      />
                    </svg>

                    <div className='h-full w-full pl-4 font-black text-left'>
                      <div className='text-xl'>Certificate of Training</div>
                      <div className='text-xs'>From GradUp Training</div>
                    </div>
                  </div>{' '}
                  <div className=' -blue-500 my-2 flex  items-center  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
                      />
                    </svg>

                    <div className='h-full font-black text-left w-full pl-4'>
                      <div className='text-xl'>Projects & Assignments</div>
                      <div className='text-xs'>For hands on practice</div>
                    </div>
                  </div>{' '}
                  <div className=' my-2 flex  items-center  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
                      />
                    </svg>

                    <div className='h-full font-black text-left w-full pl-4'>
                      <div className='text-xl'>Beginner Friendly</div>
                      <div className='text-xs'>No prior knowledge required</div>
                    </div>
                  </div>
                  <div className=' my-2 flex  items-center  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='w-6 h-6'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                      />
                    </svg>

                    <div className='h-full font-black text-left w-full pl-4'>
                      <div className='text-xl'>Guaranteed Internship</div>
                      <div className='text-xs'>Get guaranteed internship</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='  sm:w-[47%] w-full bg-[#041E48] text-white rounded-md p-6'>
              <div className=' font-bold text-3xl'>About Instructor</div>
              <div className='h-[45%] flex flex-wrap gap-2'>
                {data.author.map((data, index) => {
                  return (
                    <div key={index} className=' flex  items-center text-left '>
                      <img
                        className='h-[4rem] w-15 rounded-md'
                        src={data.imageURL}
                      />

                      <div className='text-xl ml-4'>
                        {data.name}
                        <div className='text-xs'>{data.designation}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <hr className='border-2 border-white mt-2' />
              <div className='sm:flex h-[40%] mt-3'>
                <div className=' flex-col  items-center sm:w-1/2 text-2xl font-bold'>
                  <div className='text-left mt-2'>Offered By</div>
                  <div className='flex mt-2'>
                    <img
                      src='/assets/icons/webLogo.jpeg'
                      className='h-[4rem] w-20 rounded-md '
                    />

                    <div className='text-xl ml-4 pt-2 '>
                      GradUp
                      <div className='text-xs'>Visit Us</div>
                    </div>
                  </div>
                </div>
                <div className=' flex-col  items-center sm:w-1/2 text-2xl font-bold'>
                  <div className='text-left mt-2'>Government of India</div>
                  <div className='flex mt-2'>
                    <img
                      className='h-[4rem] w-20 rounded-md'
                      src='/assets/icons/govt.png'
                    />

                    <div className='text-xl ml-4 p-2'>
                      Learn Online
                      <div className='text-xs'>At your own schedule</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' p-4  bg-[#F7F9FC] mt-4 rounded-md '>
            <div className='text-4xl font-bold flex justify-items-start mt-2'>
              Professional certificate courses module
            </div>
            <div className='flex justify-items-start my-2'>
              Completion is not just an end. it's a new beginning to explore the
              horizons of endless possibilities. 🌟
            </div>

            <CourseModule data={data.moduleData} />
          </div>

          <div class='shadow p-5 rounded-lg  bg-[#F7F9FC] my-4 '>
            <p class='mt-4 text-3xl  font-medium mb-4 text-left'>
              What placement assistance will you receive?
            </p>

            <div class='flex items-center '>
              <svg
                class='w-4 h-4 mr-2 fill-current text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z'></path>
              </svg>
              <div>
                <div className='font-semibold mb-2'>
                  Free placement preparation training
                </div>
              </div>
            </div>
            <div className='flex ml-[2%] mb-4'>
              Learn how to build your resume, make great applications, and ace
              your interviews.
            </div>

            <div class='flex items-center'>
              <svg
                class='w-4 h-4 mr-2 fill-current text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z'></path>
              </svg>
              <div>
                <div className='font-semibold mb-2'>
                  Curated internships & jobs
                </div>
              </div>
            </div>
            <div className='flex ml-[2%] mb-4'>
              Get internships and fresher jobs as per your preference in your
              inbox.
            </div>

            <div class='flex items-center'>
              <svg
                class='w-4 h-4 mr-2 fill-current text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z'></path>
              </svg>
              <div>
                <div className='font-semibold mb-2'>
                  Get highlighted on GradUp
                </div>
              </div>
            </div>
            <div className='flex ml-[2%] mb-4'>
              Top performers will be highlighted in their internship & job
              applications on GradUp.
            </div>
          </div>
          <div className=' p-4 bg-[#F7F9FC] mt-4 rounded-md  '>
            <div className='text-4xl font-bold flex justify-items-start'>
              Frequently Asked Questions
            </div>

            <CourseFaq data={data.faq[0]} />
          </div>

          <div className='flex flex-wrap bg-[#F7F9FC] mt-4 rounded-lg items-center justify-evenly'>
            <div className='m-3'>
              <span className='text-2xl font-bold'>Your Certificate</span>
              <img
                src='/assets/certificate_img/Cert.jpg'
                className=' m-2 w-80 h-60 sm:w-30 sm:h-30'
                alt='non working'
              />
            </div>
            <div className='p-4 w-1/2'>
              <h1 className='font-bold text-2xl text-left '>
                Industry recognized & government approved certification
              </h1>
              <p className='font-semibold  text-left flex pt-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 12.75l6 6 9-13.5'
                  />
                </svg>
                GradUp Trainings certificate trusted by 1000+ companies hiring
                on GradUp.
              </p>
              <p className='font-semibold  text-left flex pt-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 12.75l6 6 9-13.5'
                  />
                </svg>
                Government approved certificate from NSDC (National Skill
                Development Corporation) & Skill India.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
