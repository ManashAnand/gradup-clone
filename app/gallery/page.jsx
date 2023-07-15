"use client"
import React from "react"

export default function Gallery(){
   return(
    <div className="w-screen mt-10">
    <p className='text-center textnew text-white mb-12 text-5xl font-semibold underline underline-offset-8 decoration-yellow-300'>Gallery</p>
    <div className='flex flex-wrap justify-center gapmedia'>
      <img style={{height:"60vh"}} className=' mb-16' width="350" src="/assets/achievements/gallery2.png"></img>
      <img style={{height:"60vh"}} className=' mb-16' width="350" src="/assets/achievements/IMG_2228.jpeg"></img>
      <img style={{height:"60vh"}} className=' mb-16' width="350" src="/assets/achievements/IMG_1515.jpeg"></img>
      <img style={{height:"40vh"}} className=' mb-16' width="350" src="/assets/images/of1.jpg"></img>
      <img style={{height:"40vh"}} className=' mb-16' width="350" src="/assets/images/gallery1.png"></img>
      <img style={{height:"40vh"}} className=' mb-16' width="350" src="/assets/images/of2.jpg"></img>

      {/* <img style={{height:"70vh"}} className=' mb-16' width="650" src="/assets/achievements/achievement2.png"></img> */}
      <img style={{height:"55vh"}} className='block mb-16' width="625" src="/assets/achievements/achievement3.png"></img>
      <img style={{height:"55vh"}} className='block mb-16' width="625" src="/assets/achievements/achievement4.png"></img>
    </div>
    </div>
   )
}