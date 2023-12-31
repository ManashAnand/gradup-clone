'use client'

import DropDownMenu from '@styles/DropDownMenu'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useSelector } from 'react-redux'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import styles from './styles.module.css'

const fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json())
const Nav = () => {
  //const item = useSelector((state) => state.cart)
  //console.log(item)
  const { data: session } = useSession()
  var { data, error } = useSWR(
    `${session?.user.id}` ? `/api/user/${session?.user.id}` : null,
    fetcher
  )
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const getProviders = async () => {
    // Simulate API call or fetching data from a source
    return [
      { name: 'Google', id: 'google' },
      { name: 'GitHub', id: 'github' },
      { name: 'Twitter', id: 'twitter' },
    ]
  }
  const setUpProviders = async () => {
    const response = await getProviders()
    setProviders(response)
  }

  useEffect(() => {
    setUpProviders()
  }, [])

  return (
    <nav
      style={{ backgroundColor: '#FFFFFF' }}
      className='w-screen flex-between pt-3 shadow-xl p-4 sticky top-0 z-50 scroll-auto'
    >
      <Link href='/' className='flex gap-2 flex-center'>
        <img src='/logo-for-website.png' className='h-[8vh]' />
      </Link>

      {/* Desktop Navigation */}
      <div className='md:flex hidden text-[#4D4D4D] sticky top-0 z-50 overflow-x-auto'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-2'>
            <DropDownMenu />

            <Link href='/jobs' className={styles['outline_btn']}>
              Jobs
            </Link>
            <Link href='/internships' className={styles['outline_btn']}>
              Internships
            </Link>
            <Link href='/courses' className={styles['outline_btn']}>
              Courses
            </Link>
            <Link
              href={data?.role === 'HR' ? '/hr' : '/hr/signup'}
              className={styles['outline_btn']}
            >
              {data?.role === 'HR' ? 'HR Dashboard' : 'HR login'}
            </Link>

            <Link href='/about-us' className={styles['outline_btn']}>
              About Us
            </Link>
            <Link href='/user' className={styles['outline_btn']}>
              Create resume
            </Link>
            <Link href='/mycourses' className={styles['outline_btn']}>
              My Courses
            </Link>
            <Link href='/cart' className={styles['outline_btn']}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </Link>

            {/* <Link href='/hackathons' className='rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-center mr-3'>
              Hackathons
            </Link> */}

            <button
              type='button'
              onClick={signOut}
              className='mt-1 text-sm bg-red-400  rounded-md px-3 text-white pt-3 pb-2.5'
            >
              Sign Out
            </button>

            <Link className='my-auto' href='/user'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            <div className='flex gap-3 md:gap-2'>
              <DropDownMenu />
              <Link href='/jobs' className={styles['outline_btn']}>
                Jobs
              </Link>
              <Link href='/internships' className={styles['outline_btn']}>
                Internships
              </Link>
              <Link href='/courses' className={styles['outline_btn']}>
                Courses
              </Link>
              <Link href='/mycourses' className={styles['outline_btn']}>
                My Courses
              </Link>
              <Link
                href={data?.role === 'HR' ? '/hr' : '/hr/signup'}
                className={styles['outline_btn']}
              >
                {data?.role === 'HR' ? 'HR Dashboard' : 'HR login'}
              </Link>
              <Link href='/about-us' className={styles['outline_btn']}>
                About Us
              </Link>
              <Link href='/cart' className={styles['outline_btn']}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
              </Link>
              {/* <Link href='/hackathons' className='rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-center mr-3'>
              Hackathons
            </Link> */}
            </div>
            {/* {providers &&
              Object.values(providers).map((provider) => ( */}
            {/* // <button
                //   type='button'
                //   key={provider.name}
                //   onClick={() => {
                //     signIn(`${provider.name}`);
                //   }}
                //   className='px-8 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600'
                // >
                //   Sign in {provider.name}
                // </button>
                // ))} */}
            <Link href='/loginuser'>
              <button className='px-8 py-2 m-2 bg-blue-500 rounded-md text-white hover:bg-blue-600'>
                Login
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className='dropdown z-50'>
                <Link
                  href='/user'
                  className={styles['dropdown_link']}
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <DropDownMenu />
                <Link
                  href={data.role === 'HR' ? '/hr' : '/hr/signup'}
                  className={styles['dropdown_link']}
                  onClick={() => setToggleDropdown(false)}
                >
                  {data?.role === 'HR' ? 'Dashboard' : 'HR login'}
                </Link>
                <Link
                  href='/jobs'
                  className={styles['dropdown_link']}
                  onClick={() => setToggleDropdown(false)}
                >
                  Jobs
                </Link>
                <Link
                  href='/internships'
                  className={styles['dropdown_link']}
                  onClick={() => setToggleDropdown(false)}
                >
                  Internships
                </Link>
                <Link
                  href='/courses'
                  className={styles['dropdown_link']}
                  onClick={() => setToggleDropdown(false)}
                >
                  Upskilling Courses
                </Link>

                <Link href='/mycourses' className={styles['dropdown_link']}>
                  My Courses
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className='mt-1 w-full text-sm bg-red-400 rounded-md px-3 text-white py-2'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          // <>
          //   {providers &&
          //     Object.values(providers).map((provider) => (
          //       <button
          //         type='button'
          //         key={provider.name}
          //         onClick={() => {
          //           signIn(provider.id);
          //         }}
          //         className='px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600'
          //       >
          //         Sign In {provider.name}
          //       </button>
          //     ))}
          // </>
          <Link href='/loginuser'>
            <button className='px-8 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600'>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Nav
