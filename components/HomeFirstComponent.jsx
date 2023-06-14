"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
const HomeFirstComponent = () => {
  let arr=["/assets/images/Variant1.png","/assets/images/Variant2.png","/assets/images/Variant3.png","/assets/images/Variant4.png"]
  const [current,setCurrent]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      current<3?setCurrent(current+1):setCurrent(0)
    },3000)
  },[current])
  return (
    <section className='w-full flex justify-evenly max-h-screen headingbox'>
      <div className="mt-10">
        <h1 className='text-5xl font-bold text-white text-left'>
            Connecting Talent To <br/>
            <div class="container">
             <div class="row">
              <div class="col-md-12">
                <h3 class="animate-charcter">Opportunities</h3>
              </div>
            </div>
          </div>
        </h1>
        <div className='text-left text'>
            <h1 className='mt-8 ml-1'>A Place where talent meets opportunities <br />
            and you develop talent with our best courses and mentors.
            
            </h1> 
        </div>
        <Link href='/courses' className="area">
              <button className='rounded-md py-2 px-6 border-2 text font-semibold border-gray-500 bg-white text-gray-700 mt-6 mb-10'>Explore Courses</button>
        </Link>
        </div> 
        <div className="block mt-5">
          { arr.map((items,i)=>{
              return (current===i && 
              <img width="300" src={items} alt="home-image"></img>
              )
          })}
        </div>
    </section>
  )
}

export default HomeFirstComponent