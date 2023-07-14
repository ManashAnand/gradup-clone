"use client"
import React from 'react'
import HomeFirstComponent from '@components/HomeFirstComponent';
import CoursesOnHome from '@components/CoursesOnHome';
import Mentors from '@components/Mentors';
import Achievement from '@components/Achievement';
import Testimonial from '@components/Testimonial';
import BeMentorWithUs from '@components/BeMentorWithUs';
import DownloadApp from "@components/DownloadApp"
import ContactUs from "@components/ContactUS"
import Link from 'next/link';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
         <HomeFirstComponent/>
        {/* <svg id="wave" className="w-screen" style={{marginTop:"-2vh",transform:"rotate(0deg)", transition:"0.3s"}} viewBox="0 0 1440 310" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}}fill="url(#sw-gradient-0)" d="M0,0L40,5.2C80,10,160,21,240,41.3C320,62,400,93,480,129.2C560,165,640,207,720,206.7C800,207,880,165,960,124C1040,83,1120,41,1200,56.8C1280,72,1360,145,1440,149.8C1520,155,1600,93,1680,67.2C1760,41,1840,52,1920,56.8C2000,62,2080,62,2160,62C2240,62,2320,62,2400,77.5C2480,93,2560,124,2640,155C2720,186,2800,217,2880,196.3C2960,176,3040,103,3120,62C3200,21,3280,10,3360,25.8C3440,41,3520,83,3600,118.8C3680,155,3760,186,3840,191.2C3920,196,4000,176,4080,160.2C4160,145,4240,134,4320,144.7C4400,155,4480,186,4560,201.5C4640,217,4720,217,4800,191.2C4880,165,4960,114,5040,82.7C5120,52,5200,41,5280,31C5360,21,5440,10,5520,25.8C5600,41,5680,83,5720,103.3L5760,124L5760,310L5720,310C5680,310,5600,310,5520,310C5440,310,5360,310,5280,310C5200,310,5120,310,5040,310C4960,310,4880,310,4800,310C4720,310,4640,310,4560,310C4480,310,4400,310,4320,310C4240,310,4160,310,4080,310C4000,310,3920,310,3840,310C3760,310,3680,310,3600,310C3520,310,3440,310,3360,310C3280,310,3200,310,3120,310C3040,310,2960,310,2880,310C2800,310,2720,310,2640,310C2560,310,2480,310,2400,310C2320,310,2240,310,2160,310C2080,310,2000,310,1920,310C1840,310,1760,310,1680,310C1600,310,1520,310,1440,310C1360,310,1280,310,1200,310C1120,310,1040,310,960,310C880,310,800,310,720,310C640,310,560,310,480,310C400,310,320,310,240,310C160,310,80,310,40,310L0,310Z"></path></svg>  */}
        <CoursesOnHome />
        <div className="w-screen databox">
          <div className="filter"></div>
           <div className="grid grid-cols-2 gap-x-14 gap-y-8 my-auto data">
            <div className="w-32 h-20 data1 pt-2">
              <h1 className="text-4xl text-center text-white font-semibold">45K</h1>
              <p className="text-xs font-semibold text-white text-center">Happy Customers</p>
            </div>
            <div className="w-32 h-20 data2 pt-2">
            <h1 className="text-4xl text-center text-white font-semibold">55%</h1>
              <p className="text-xs font-semibold text-white text-center">Sample Headline</p>
            </div>
            <div className="w-32 h-20 data3 pt-2">
            <h1 className="text-4xl text-center text-white font-semibold">95</h1>
              <p className="text-xs font-semibold text-white text-center">Our Courses</p>
            </div>
            <div className="w-32 h-20 data4 pt-2">
            <h1 className="text-4xl text-center text-white font-semibold">3000</h1>
              <p className="text-xs font-semibold text-white text-center">Learners worldwide</p>
            </div>
           </div>
           <div className='my-auto text-white text-2xl w-1/3 hide'>
           <p className='textnew'>The best quality online courses from top institutions</p>
           </div>
        </div>
        <div style={{background:"linear-gradient(220deg, #044E83 0%, rgba(4, 78, 131, 0.98) 10.32%, rgba(4, 78, 131, 0.97) 17.79%, rgba(4, 78, 131, 0.96) 27.13%, rgba(4, 78, 131, 0.95) 60.90%,  rgba(9,158,248, 0.94) 99.86%)"}} className='p-10 w-screen'>
          <div className="hide1">
          <p className='ml-24 text-xl text-left font-semibold mt-6 mb-1 text-white text'>Get Hired</p>
          <p className="ml-24 text-left textnew text-lg text-white">Work with your dream companies by applying for Full-time roles, Internships and Hackathon too.</p>
          </div>
          <div className="appbox">
           <a href="/jobs">
            <div className="rounded-md h-24 w-52 bg-green-200 flex items-center justify-evenly p-3 box9">
              <div>
              <p className='text-sky-700 text text-sm'>Full time</p>
              <p className='text-sky-700 text text-sm font-semibold'>Jobs</p>
              </div>
              <img src="/assets/icons/image 153.png" width="70"></img>
            </div>
            </a>
            <a href="/internships">
            <div className="rounded-md h-24 w-52 bg-purple-200 flex items-center justify-evenly p-3 box8">
              <div>
              <p className='text-sky-700 text text-sm'>Paid</p>
              <p className='text-sky-700 text text-sm font-semibold'>Internships</p>
              </div>
              <img src="/assets/icons/image 153.png" width="70"></img>
            </div>
            </a>
            <a href="/courses">
            <div className="rounded-md h-24 w-52 bg-red-200 flex items-center justify-evenly p-3 box7">
              <div>
              <p className='text-sky-700 text text-sm'>Learn</p>
              <p className='text-sky-700 text text-sm font-semibold'>Courses</p>
              </div>
              <img src="/assets/icons/image 153.png" width="70"></img>
            </div>
            </a>
            <a href="/hackathons">
            <div className="rounded-md h-24 w-52 bg-blue-200 flex items-center justify-evenly p-3 box6">
              <div>
              <p className='text-sky-700 text text-sm'>Participate</p>
              <p className='text-sky-700 text text-sm font-semibold'>Hackathons</p>
              </div>
              <img src="/assets/icons/image 153.png" width="70"></img>
            </div>
            </a>
          </div>
        </div>
        <h1 className='text-white textnew text-2xl underline decoration-white underline-offset-8 font-semibold text-center mt-10'>Our Industry Experts (130+)</h1>
        <Mentors />
        <BeMentorWithUs />
        <Achievement />
        <Testimonial />
        <DownloadApp/>
        <ContactUs/>
    </section>
    )
 }

export default Home