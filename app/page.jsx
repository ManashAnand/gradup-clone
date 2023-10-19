'use client'
import React, { useState } from 'react'
import HomeFirstComponent from '@components/HomeFirstComponent'
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

const Home = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      {loading && <Spinner />}
      <section className='w-full flex-center flex-col'>
        <HomeFirstComponent />
        <CoursesOnHome />
        <Internship />
        <Job />

        <div className={`w-screen ${styles['databox']}`}>
          <div className={styles['filter']}></div>
          <div
            className={`grid grid-cols-2 gap-x-14 gap-y-8 my-auto ${styles['data']}`}
          >
            <div className={`w-32 h-20 ${styles['data1']} pt-2`}>
              <h1 className='text-4xl text-center text-white font-semibold'>
                21K+
              </h1>
              <p className='text-xs font-semibold text-white text-center'>
                Active Users
              </p>
            </div>
            <div className={`w-32 h-20 ${styles['data2']} pt-2`}>
              <h1 className='text-4xl text-center text-white font-semibold'>
                4.9
              </h1>
              <p className='text-xs font-semibold text-white text-center'>
                Rating
              </p>
            </div>
            <div className={`w-32 h-20 ${styles['data3']} pt-2`}>
              <h1 className='text-4xl text-center text-white font-semibold'>
                30+
              </h1>
              <p className='text-xs font-semibold text-white text-center'>
                Our Courses
              </p>
            </div>
            <div className={`w-32 h-20 ${styles['data4']} pt-2`}>
              <h1 className='text-4xl text-center text-white font-semibold'>
                5000+
              </h1>
              <p className='text-xs font-semibold text-white text-center'>
                Learners worldwide
              </p>
            </div>
          </div>
          <div
            className={`my-auto text-white text-2xl w-1/3 ${styles['hide']}`}
          >
            <p className={styles['textnew']}>
              The best quality online courses from the top institutions
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              'linear-gradient(220deg, #044E83 0%, rgba(4, 78, 131, 0.98) 10.32%, rgba(4, 78, 131, 0.97) 17.79%, rgba(4, 78, 131, 0.96) 27.13%, rgba(4, 78, 131, 0.95) 60.90%,  rgba(9,158,248, 0.94) 99.86%)',
          }}
          className='p-10 w-screen'
        >
          <div className={styles['hide1']}>
            {/* <p className='ml-24 text-xl text-left font-semibold mt-6 mb-1 text-white text'>Get Hired</p> */}
            {/* <p className="ml-24 text-left textnew text-lg text-white">Work with your dream companies by applying for Full-time roles, Internships and Hackathon too.</p> */}
          </div>
          <div className={styles['appbox']}>
            <a href='/jobs'>
              <div
                className={`rounded-md h-24 w-52 bg-green-200 flex items-center justify-evenly p-3 ${styles['box9']}`}
              >
                <div>
                  <p className={`text-sky-700 ${styles['textform']} text-sm`}>
                    Full time
                  </p>
                  <p
                    className={`text-sky-700 ${styles['textform']} text-sm font-semibold`}
                  >
                    Jobs
                  </p>
                </div>
                <img src='/assets/icons/image 153.png' width='70'></img>
              </div>
            </a>
            <a href='/internships'>
              <div
                className={`rounded-md h-24 w-52 bg-purple-200 flex items-center justify-evenly p-3 ${styles['box8']}`}
              >
                <div>
                  <p className={`text-sky-700 ${styles['textform']} text-sm`}>
                    Paid
                  </p>
                  <p
                    className={`text-sky-700 ${styles['textform']} text-sm font-semibold`}
                  >
                    Internships
                  </p>
                </div>
                <img src='/assets/icons/image 153.png' width='70'></img>
              </div>
            </a>
            <a href='/courses'>
              <div
                className={`rounded-md h-24 w-52 bg-red-200 ease-in-out flex items-center justify-evenly p-3 ${styles['box7']}`}
              >
                <div>
                  <p className={`text-sky-700 ${styles['textform']} text-sm`}>
                    Learn
                  </p>
                  <p
                    className={`text-sky-700 ${styles['textform']} text-sm font-semibold`}
                  >
                    Courses
                  </p>
                </div>
                <img src='/assets/icons/image 153.png' width='70'></img>
              </div>
            </a>
            <a href='/hackathons'>
              <div
                className={`rounded-md h-24 w-52 bg-blue-200 flex items-center justify-evenly p-3 ${styles['box6']}`}
              >
                <div>
                  <p className={`text-sky-700 ${styles['textform']} text-sm`}>
                    Participate
                  </p>
                  <p
                    className={`text-sky-700 ${styles['textform']} text-sm font-semibold`}
                  >
                    Hackathons
                  </p>
                </div>
                <img src='/assets/icons/image 153.png' width='70'></img>
              </div>
            </a>
          </div>
        </div>
        <h1
          className={`text-white ${styles['textnew']} text-3xl decoration-white font-semibold text-center mt-10`}
        >
          Our Industry Experts
        </h1>
        <Mentors />
        <BeMentorWithUs />
        <Achievement />
        <Testimonial />
        <DownloadApp />
      </section>
    </>
  )
}

export default Home
