'use client'
import React from 'react'

export default function Gallery() {
  return (
    <>
      {/* desktop view */}
      <div className='w-screen text-white mt-10 mb-10 p-5'>
        <p className='text-center textnew text-white mb-12 text-5xl font-semibold animate-charcter underline underline-offset-8 decoration-white'>
          Gallery
        </p>
        <div className='flex justify-center items-center flex-wrap w-full rounded-2xl gap-6  border-[10px] border-solid border-blue-300 p-5 '>
          <img
            style={{ height: '60vh' }}
            className=' mb-5'
            width='350'
            src='/assets/achievements/gallery2.png'
          ></img>

          <img
            style={{ height: '60vh' }}
            className=' mb-5'
            width='350'
            src='/assets/achievements/IMG_2228.jpeg'
          ></img>
          <img
            style={{ height: '60vh' }}
            className=' mb-5'
            width='350'
            src='/assets/achievements/IMG_1515.jpeg'
          ></img>
          <img
            style={{ height: '40vh' }}
            className=' mb-5'
            width='350'
            src='/assets/images/of1.jpg'
          ></img>
          <img
            style={{ height: '40vh' }}
            className=' mb-5'
            width='350'
            src='/assets/images/gallery1.png'
          ></img>
          <img
            style={{ height: '40vh' }}
            className=' mb-5'
            width='350'
            src='/assets/images/of2.jpg'
          ></img>

          {/* <img style={{height:"70vh"}} className=' mb-16' width="650" src="/assets/achievements/achievement2.png"></img> */}
          <img
            style={{ height: '55vh' }}
            className='block mb-5'
            width='625'
            src='/assets/achievements/achievement3.png'
          ></img>
          <img
            style={{ height: '55vh' }}
            className='block mb-5'
            width='625'
            src='/assets/achievements/achievement4.png'
          ></img>
          <img
            src='/WhatsApp Image 2023-11-08 at 11.29.11.jpeg'
            style={{ height: '60vh' }}
            className=' mb-5'
            width='350'
          />
        </div>
        <div className='flex justify-center items-center '>
          <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>
            <polygon points='0,100 100,0 200,100' fill='#64b5f6' />
          </svg>
        </div>
        <p className='text-center text-white animate-charcter text-5xl textnew '>
          And many more ....
        </p>
      </div>
    </>
  )
}
