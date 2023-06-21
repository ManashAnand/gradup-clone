"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
const HomeFirstComponent = () => {
  return (
    <section className='w-screen flex justify-evenly max-h-screen headingbox'>
      <div className="mt-16">
        <p className="text text-2xl text-white ml-1">Welcome</p>
        <h1 className='text-5xl text-white text-left'>
            <span className="text-sky-400">Connecting</span> Talent with us to <br/>
            <div class="container">
             <div class="row">
              <div class="col-md-12">Explore new Opportunities.
              </div>
            </div>
          </div>
        </h1>
        <div  style={{color:"deepskyblue"}}className='text-left  text'>
            <h1 className='mt-10 ml-1 w-4/5'>A Place where talent meets opportunities. <br />
            and you develop talent with our best courses and mentors and get hired in your dream company.
</h1> 
        </div>
        <Link href='/courses' className="area">
              <button className='rounded-2xl py-1 px-6 border-2 text border-sky-400 bg-white text-sky-400 mt-6 mb-10'>Explore</button>
        </Link>
        </div> 
        <div className="block mt-5">
          <div className='flex'>
            <div className="half-ellipse1"></div>
            <div className='text-3xl text-gray-400 -mt-2 ml-2'>..............<br/>..............</div>
          </div>
          <img width="250" src="/assets/images/image 115.png" alt="home-image"></img>
          <div className='flex'>
          <div className='text-3xl text-gray-400 -mt-2 ml-2'>................<br/>................</div>
          <div className="half-ellipse1 ml-2"></div>
          </div>
        </div>
    </section>
  )
}

export default HomeFirstComponent