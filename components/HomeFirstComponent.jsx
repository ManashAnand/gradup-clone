import React from 'react'
import Link from 'next/link';
const HomeFirstComponent = () => {
  return (
    <section className='w-full flex justify-evenly max-h-screen headingbox'>
      <div className="mt-10">
        <h1 className='text-5xl font-bold text-left'>
            Connecting <span className="text-white">Talent</span> To <br/>
             Opportunities.
        </h1>
        <div className='text-left text'>
            <h1 className='mt-8 ml-1'>A Place where talent meets opportunities <br />
            and you develop talent with our best courses and mentors.
            
            </h1> 
        </div>
        <Link href='/courses' className="area">
              <button className='btn7 bg-gray-700 mt-8'>Explore Courses</button>
        </Link>
        </div> 
        <div className="block mt-5">
        <img width="250" src="/assets/images/homeimage.png" alt="home-image"></img>
        </div>
    </section>
  )
}

export default HomeFirstComponent