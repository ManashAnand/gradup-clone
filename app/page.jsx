import React from 'react'
import HomeFirstComponent from '@components/HomeFirstComponent';
import CoursesOnHome from '@components/CoursesOnHome';
import Mentors from '@components/Mentors';
import Achievement from '@components/Achievement';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <HomeFirstComponent />
        <CoursesOnHome />
        <h1 className='secondary_text text-center my-5'>Meet Our Mentors</h1>
        <Mentors />
        <Achievement />
    </section>
    
  )
}

export default Home