import React from 'react'
import Link from 'next/link';
const HomeFirstComponent = () => {
  return (
    
    <section className='w-full flex-center flex-col max-h-screen'>
        <h1 className='head_text text-center'>
            Connecting Talent To <br/>
             Opportunities
        </h1>
        <div className='text-center'>
            <h1 className='mt-5'>A Place where talent meets opportunities <br />
            and you develop talent with our best courses and mentors
            
            </h1> 
        </div>
        
        <Link href='/Courses' className='border-2 black_btn mt-10 p-5 '>
              Explore Courses
        </Link>
    </section>
  )
}

export default HomeFirstComponent