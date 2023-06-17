import React from 'react'
import HomeFirstComponent from '@components/HomeFirstComponent';
import CoursesOnHome from '@components/CoursesOnHome';
import Mentors from '@components/Mentors';
import Achievement from '@components/Achievement';
import Testimonial from '@components/Testimonial';
import BeMentorWithUs from '@components/BeMentorWithUs';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <HomeFirstComponent />
        <CoursesOnHome />
        <div className="w-screen databox bg-white">
          <div className="filter"></div>
           <div className="grid grid-cols-2 gap-x-14 gap-y-8 my-auto data">
            <div className="w-32 h-20 data1 pt-2">
              <h1 className="text-3xl text-center text-white font-semibold">45K</h1>
              <p className="text-xs text-white text-center">Happy Customers</p>
            </div>
            <div className="w-32 h-20 data2 pt-2">
            <h1 className="text-3xl text-center text-white font-semibold">55%</h1>
              <p className="text-xs text-white text-center">Sample Headline</p>
            </div>
            <div className="w-32 h-20 data3 pt-2">
            <h1 className="text-3xl text-center text-white font-semibold">95</h1>
              <p className="text-xs text-white text-center">Our Courses</p>
            </div>
            <div className="w-32 h-20 data4 pt-2">
            <h1 className="text-3xl text-center text-white font-semibold">3000</h1>
              <p className="text-xs text-white text-center">Learners worldwide</p>
            </div>
           </div>
           <div className='my-auto text-white text-2xl w-1/3 hide'>
           <p>The highest quality online courses from institutions</p>
           <p className='my-auto text-white text-sm mt-3'>Sample text. Tap to select the text content.</p>
           <button className="py-1 px-6 text-sm rounded-xl bg-sky-400 text-white mt-4">Learn More</button>
           </div>
        </div>
        <h1 className='text-blue-500 text text-3xl font-semibold text-center mt-16 mb-10'>Meet Our Mentors</h1>
        <Mentors />
        <Achievement />
        <BeMentorWithUs />
        <Testimonial />
    </section>
    
  )
}

export default Home