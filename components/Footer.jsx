"use client"
import Link from 'next/link';
import React from 'react'
import Image from "next/image";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <div>
      <div class="wave">
        {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg> */}
      </div>
      <footer style={{ backgroundColor: '' }} className= "text-gray-800 bg-gray-300 font-black  body-font w-screen">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mr-60">
            <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center black">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-10 h-10 black font-black  p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            <span className="ml-3 text-xl">TalentConnects</span> */}
              {/* above svg and span will be removed by our img logo */}
              {/* <img src="/assets/images/TalentConnects.png" alt="TalentConnects"/> */}
              <Image
                src='/assets/images/logo-for-website.png'
                alt='logo'
                width={190}
                height={90}
                className='object-contain mx-auto'
              />
            </Link>

            <p className="mt-2 text-blue-900 text-center textnew">Built with ❤️ for the Students</p>
            <hr style={{borderTop:"1px dotted darkslateblue",marginTop:"10px"}}/>
            <p className='text-2xl textnew mt-2 text-center text-blue-900 font-semibold'>Stay Connected</p>
            <div className='text-center ml-20 mt-4'>
            <div className=" textnew flex text-sm mb-4"><PhoneAndroidIcon sx={{color:"darkslateblue"}} color="white" fontSize="medium"/><p className='ml-4'> +91-7428376300</p></div>
            <div className="textnew flex text-sm"><EmailIcon sx={{color:"darkslateblue"}} color="white" fontSize="medium"/><p className='ml-4'> info@gradup.in</p></div>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap -mb-10 md:text-left mt-4 text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full menu1">
              <h2 className="title-font font-black   text-black tracking-widest text-xl mb-3">SERVICES</h2>
              <nav className="list-none mb-10 textnew">
                <li className='mb-3'>
                  <a href="/jobs" className="text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800 font-black text-left'>&#9830;</span> Jobs</a>
                </li>
                <li className="mb-3">
                  <a href="/courses" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Courses</a>
                </li>
                <li className="mb-3">
                  <a href="/internships" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Internships</a>
                </li>
                <li className="mb-3">
                  <a href="/for-startUps" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Startup Live Projects</a>
                </li>
                <li className="mb-3">
                  <a href="/about-us/our-services-content/career" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Career Services</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 menu2">
              <h2 className="title-font font-black text-xl text-black tracking-widest mb-3">QUICK LINKS</h2>
              <nav className="list-none mb-10 textnew">
               <li className="mb-3">
                  <a href="/blogs" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Blogs</a>
                </li>
                <li className="mb-3">
                  <a href="/case-study" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Case Study</a>
                </li>
                <li className="mb-3">
                  <a href="/hackathons" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Hackathons</a>
                </li>
                <li className="mb-3">
                  <a href="/alumni-network" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Alumni Network</a>
                </li>
                <li className="mb-3">
                  <a href="/alumni-network/manage" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Manage Alumni</a>
                </li>
                <li className="mb-3">
                  <a href="/mcqs" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Exam Preparation</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 menu3">
              <h2 className="title-font font-black text-xl text-black tracking-widest mb-3">ABOUT US</h2>
              <nav className="list-none mb-10 textnew">
                <li className="mb-3">
                  <a href="/about-us" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> About Company</a>
                </li>
                <li className="mb-3">
                  <a href="/about-us/our-services-content" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Our Services</a>
                </li>
                <li className="mb-3">
                  <a href="/about-us/privacy-policy" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Privacy Policies</a>
                </li>
                <li className="mb-3">
                  <a href="/problem-statement" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Problem Statement</a>
                </li>
                <li className="mb-3">
                  <a href="/about-us/terms-and-condition" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Terms and Conditions</a>
                </li>
                <li className="mb-3">
                  <a href="/about-us/cancellation-policy" className= "text-gray-800 font-black  hover:text-sky-800 cursor-pointer mb-2"><span className= 'text-gray-800'>&#9830;</span> Refund & Cancellation Policy</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-lg text-center sm:text-center">© 2023 All Rights Reserved —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@GradUp</a>
              {/* <span className='text-md text-gray-400 ml-2'>Designed & Developed by GradUp team.</span> */}
            </p>
            <span className="inline-flex sm:mx-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-white my-auto" target="_blank" href="https://www.facebook.com/GradUp.in">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" href="https://twitter.com/gradup333" target="_blank">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.instagram.com/gradup.in/">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.linkedin.com/company/gradup3/">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-7 h-7" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a className="ml-3 text-white my-auto" target="_blank" href="https://www.youtube.com/@gradup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-youtube w-8 h-8" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
              <a href="https://www.threads.net/@tanmaysinghrajput3" className="ml-3 text-white my-auto" target="_blank">
                <img width="40" src="/assets/images/threadsbg.png"></img>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
