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
        <h1 className='text-blue-500 text text-3xl font-semibold text-center my-9'>Meet Our Mentors</h1>
        <Mentors />
        <Achievement />
        <BeMentorWithUs />
        <Testimonial />
    </section>
    
  )
}

export default Home