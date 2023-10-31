'use client'
import React, { useState } from 'react'
import HomeFirstComponent from '@components/HomeFirstComponent'
import HomeComponent2 from '@components/HomeComponent2'
import CoursesOnHome from '@components/CoursesOnHome'
import Mentors from '@components/Mentors'
import Achievement from '@components/Achievement'
import Testimonial from '@components/Testimonial'
import BeMentorWithUs from '@components/BeMentorWithUs'
import DownloadApp from '@components/DownloadApp'
import Script from 'next/script'
import ContactUs from '@components/ContactUS'
import Link from 'next/link'
import styles from './styles.module.css'
import Internship from '@components/Internship'
import Job from '@components/Job'
import CloseHover from '@components/CloseHover/CloseHover'

const Home = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      {loading && <Spinner />}
      <section className='w-screen  flex-col bg-white'>
        <CloseHover />
        <HomeFirstComponent />
        <CoursesOnHome />

        <HomeComponent2 />
        <Mentors />
        <Testimonial />
        <DownloadApp />
      </section>
    </>
  )
}

export default Home
