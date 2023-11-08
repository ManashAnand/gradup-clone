'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email'
import styles from './styles.module.css'
const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: '#1C4980' }} className=' w-screen '>
        <div className='mx-auto max-w-screen space-y-8 px-4 pt-10 pb-5 sm:px-6 lg:space-y-16 lg:px-8 sm:mx-10'>
          <div className='grid grid-cols-1 gap-20 lg:grid-cols-3'>
            <div
              className={`grid grid-cols-1 ${styles['alignmentset2']} gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 whitespace-nowrap`}
            >
              <div>
                <p className='text-xl  text-white font-volkhov font-bold'>
                  Services
                </p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='/jobs'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Jobs
                    </a>
                  </li>

                  <li>
                    <a
                      href='/courses'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Courses
                    </a>
                  </li>

                  <li>
                    <a
                      href='/internships'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Internships
                    </a>
                  </li>

                  {/* <li>
                  <a href="/hr" className="text-gray-300 transition hover:opacity-75">
                  <span className= 'text-gray-200 font-black text-left'></span> Publish Opportunity
                  </a>
                </li> */}

                  <li>
                    <a
                      href='/about-us/our-services-content/career'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Career Services
                    </a>
                  </li>

                  <li>
                    <a
                      href='/internships'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Startup Live Projects
                    </a>
                  </li>

                  <li>
                    <a
                      href='/alumni-network/manage'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left '></span>{' '}
                      Alumni Management Package
                    </a>
                  </li>

                  {/* <li>
                  <a href="/careers" className="text-gray-300 transition hover:opacity-75">
                  <span className= 'text-gray-200 font-black text-left'></span> Careers
                  </a>
                </li>
                 */}
                </ul>
              </div>

              <div>
                <p className='text-xl  text-white font-volkhov font-bold'>
                  Company
                </p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='/about-us'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      href='Institutes-in-touch'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Institutes In Touch
                    </a>
                  </li>

                  <li>
                    <a
                      href='/about-us/privacy-policy'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href='/about-us/our-services-content'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Products & Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='/about-us/terms-and-condition'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a
                      href='/about-us/cancellation-policy'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Refund & Cancellation Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className='text-xl  text-white font-volkhov font-bold'>
                  Participate
                </p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='/blogs'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Blogs
                    </a>
                  </li>

                  <li>
                    <a
                      href='/mcqs'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Quizzes
                    </a>
                  </li>

                  <li>
                    <a
                      href='/case-study'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Case Studies
                    </a>
                  </li>

                  <li>
                    <a
                      href='/hackathons'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Hackathons
                    </a>
                  </li>

                  <li>
                    <a
                      href='/alumni-network'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Alumni Network
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://forms.gle/3i3P43Q1jfgE6dAn6'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Become a Mentor
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className='text-xl  text-white font-volkhov font-bold'>
                  Helpful Links
                </p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='/faq'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href='/gallery'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Gallery
                    </a>
                  </li>

                  <li>
                    <a
                      href='/ContactUs'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a
                      href='/community'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      GradUp Club
                    </a>
                  </li>

                  <li>
                    <a
                      href='/problem-statement'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left '></span>{' '}
                      Problem Statement
                    </a>
                  </li>

                  <li>
                    <a
                      href='/sitemap'
                      className='text-gray-300 transition hover:opacity-75'
                    >
                      <span className='text-gray-200 font-black text-left'></span>{' '}
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col  sm:items-end   '>
              <div className='flex flex-row items-center justify-center'>
                <img src='/website-icon.png' className='h-[10vh]' />
              </div>
              <p className='mt-4 text-white text-sm '>
                Head Office: UG Floor, Regus,
              </p>
              <p className='text-white text-sm mt-2'>
                TOWER-2,Assotech Business Cresterra Plot No.22,
              </p>
              <p className='text-white text-sm mt-2'>
                Sector 135,Noida, Uttar Pradesh, 201301
              </p>
              <div className='text-center justify-center flex text-sm mt-6 mb-3'>
                <PhoneAndroidIcon
                  sx={{ color: 'deepskyblue' }}
                  color='white'
                  fontSize='medium'
                />
                <p className='ml-4 text-white'> +91-7428376300</p>
              </div>
              <div
                className={`${styles['textnew']} text-center justify-center flex text-sm`}
              >
                <EmailIcon
                  sx={{ color: 'deepskyblue' }}
                  color=''
                  fontSize='medium'
                />
                <a className='ml-5 text-white' href='mailto:info@gradup.in'>
                  info@gradup.in
                </a>
              </div>
            </div>
          </div>
          <div>
            <hr className='border border-white ' />
            <div className='flex flex-wrap justify-between flex-col sm:flex-row mt-2 '>
              <p className='text-gray-300 my-auto text-lg text-center sm:text-center'>
                © 2023 All Rights Reserved —
                <a
                  rel='noopener noreferrer'
                  className='text-gray-300 ml-1'
                  target='_blank'
                >
                  @GradUp
                </a>
                {/* <span className='text-md text-gray-300 ml-2'>Designed & Developed by GradUp team.</span> */}
              </p>
              <span className='flex sm:mt-0 mt-2 justify-center'>
                <a
                  className='text-white my-auto '
                  target='_blank'
                  href='https://www.facebook.com/GradUp.in'
                >
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-7 h-7'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a
                  className='ml-3 text-white my-auto'
                  href='https://twitter.com/gradup333'
                  target='_blank'
                >
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-7 h-7'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a
                  className='ml-3 text-white my-auto'
                  target='_blank'
                  href='https://www.instagram.com/gradup.in/'
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-7 h-7'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
                <a
                  className='ml-3 text-white my-auto'
                  target='_blank'
                  href='https://www.linkedin.com/company/gradup3/'
                >
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='0'
                    className='w-7 h-7'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke='none'
                      d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                    ></path>
                    <circle cx='4' cy='4' r='2' stroke='none'></circle>
                  </svg>
                </a>
                <a
                  className='ml-3 text-white my-auto'
                  target='_blank'
                  href='https://www.youtube.com/@gradup'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='white'
                    className='bi bi-youtube w-8 h-8'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
                  </svg>
                </a>
                <a
                  href='https://www.threads.net/@gradup.in'
                  className='ml-3 text-white my-auto'
                  target='_blank'
                >
                  <img width='40' src='/assets/images/threadsbg.png'></img>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
