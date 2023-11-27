'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { useState } from 'react'
import Link from 'next/link'

const CloseHover = () => {
  const [close, setClose] = useState(true)

  return (
    <>
      {close && (
        <>
          <div className=' w-screen   text-white flex h-[3rem]'>
            <Marquee className='max-w-[97%] bg-blue-500' pauseOnHover={true}>
              <div className=' ml-5'>
                🚀 Explore diverse Internships, Jobs, Live projects, Hackathons,
                Career services, Upskilling courses on GradUp 🎉
              </div>
              <div className=' ml-5'>
              GradUp is hiring founding members to join our innovative team 🌍
              <a href="https://gradup.in/jobs/65630907efc0b95410c43e37">https://gradup.in/jobs/65630907efc0b95410c43e37</a>
              
              </div>
            </Marquee>
            <div
              className=' flex justify-center items-center bg-blue-500 hover:bg-opacity-25 cursor-pointer'
              onClick={() => setClose(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-12 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CloseHover
