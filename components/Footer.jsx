import Link from 'next/link';
import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
    <div>
        <div class="wave">
     {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg> */}
</div>
    <footer style={{backgroundColor:'deepskyblue'}} className="text-gray-900 body-font w-screen">
  <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mr-60">
        <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-10 h-10 text-gray-900 p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            <span className="ml-3 text-xl">TalentConnects</span> */}
            {/* above svg and span will be removed by our img logo */}
            {/* <img src="/assets/images/TalentConnects.png" alt="TalentConnects"/> */}
            <Image
            src='/assets/images/website-icon.png'
            alt='logo'
            width={90}
            height={90}
            className='object-contain mx-auto mt-3'
            />
        </Link>
      
      <p className="mt-2 text-md text-white text-center textnew">GradUp is a platform aimed at nurturing students to be industry ready</p>
    </div>
    <div className="flex-grow flex flex-wrap -mb-10 md:text-center mt-4 text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 menu1">
        <h2 className="title-font font-semibold text-black tracking-widest text-sm mb-3">SERVICES</h2>
        <nav className="list-none mb-10 textnew">
          <li>
            <a href="/jobs" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Jobs</a>
          </li>
          <li>
            <a href="/internships" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Internships</a>
          </li>
          <li>
            <a href="/courses" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Courses</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 menu2">
        <h2 className="title-font font-semibold text-black tracking-widest text-sm mb-3">QUICK LINKS</h2>
        <nav className="list-none mb-10 textnew">
          <li>
            <a href="/hackathons" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Hackathons</a>
          </li>
          <li>
            <a href="/mcqs" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> MCQ's</a>
          </li>
          <li>
            <a href="/alumni-network" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Alumni Network</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 menu3">
        <h2 className="title-font font-semibold text-black tracking-widest text-sm mb-3">ABOUT US</h2>
        <nav className="list-none mb-10 textnew">
          <li>
            <a href="/about-us"  className="text-gray-900 hover:text-white text-sm cursor-pointer mb-1-1"><span className='text-gray-900'>&#9830;</span> About Company</a>
          </li>
          <li>
            <a href="/about-us/our-services-content" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Our Services</a>
          </li>
          <li>
            <a href="/about-us/privacy-policy" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Privacy Policies</a>
          </li>
          <li>
            <a href="/about-us/terms-and-condition" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Terms and Conditions</a>
          </li>
          <li>
            <a href="/about-us/cancellation-policy" className="text-gray-900 hover:text-white text-sm cursor-pointer mb-2"><span className='text-gray-900'>&#9830;</span> Refund & Cancellation Policy</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-900">
    <div className="container py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-lg text-center sm:text-center m-auto">© 2023 All Rights Reserved —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@GradUp</a>
        <br/><span className='text-md text-gray-400'>Designed & Developed by GradUp team.</span>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start marginsetting">
        <a className="text-white my-auto">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white my-auto">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white my-auto">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-white my-auto">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
