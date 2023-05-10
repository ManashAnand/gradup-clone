import React from 'react'
import HomeFirstComponent from '@components/HomeFirstComponent';
import CoursesOnHome from '@components/CoursesOnHome';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <HomeFirstComponent />
        <CoursesOnHome />
    </section>
    
  )
}

export default Home