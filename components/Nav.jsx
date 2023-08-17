'use client'

import DropDownMenu from '@styles/DropDownMenu'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
// import {useSession} from "next-auth/react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json())
const Nav = () => {
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

  // useEffect(() => {
  //   const setUpProviders = async()=> {

  //       const response = await getProviders();
  //       setProviders(response);
  //   }
  //   setUpProviders();
  // }, []);

  return (
    <nav
      style={{ backgroundColor: '#041e48' }}
      className='w-screen flex-between pt-3 shadow-xl p-4'
    >
      <Link href='/' className='flex gap-2 flex-center'>
        <img
          style={{
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
          }}
          width='90'
          className='rounded-md ml-3'
          src='/assets/images/headerlogo.png'
        ></img>
        {/* <Image
          src='/assets/images/website-icon.png'
          alt='logo'
          width={45}
          height={45}
          className='object-contain ml-3'
        /> */}
      </Link>

      {/* Desktop Navigation */}
      <div className='md:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-2'>
            <Link href='/jobs' className='outline_btn'>
              Jobs
            </Link>
            <Link href='/internships' className='outline_btn'>
              Internships
            </Link>
            <Link href='/courses' className='outline_btn'>
              Courses
            </Link>
            <Link
              href={data?.role === 'HR' ? '/hr' : '/hr/signup'}
              className='outline_btn'
            >
              {data?.role === 'HR' ? 'HR Dashboard' : 'HR Login'}
            </Link>
            <Link href='/about-us' className='outline_btn'>
              About Us
            </Link>
            <Link href='/user' className='outline_btn'>
              Create Resume
            </Link>
            {/* <Link href='/hackathons' className='rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-center mr-3'>
              Hackathons
            </Link> */}

            <button
              type='button'
              onClick={signOut}
              className='mt-1 text-sm bg-red-400 rounded-md px-3 text-white pt-3 pb-2.5'
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
            <DropDownMenu />
            <div className='flex gap-3 md:gap-2'>
              <Link href='/jobs' className='outline_btn'>
                Jobs
              </Link>
              <Link href='/internships' className='outline_btn'>
                Internships
              </Link>
              <Link href='/courses' className='outline_btn'>
                Courses
              </Link>
              <Link
                href={data?.role === 'HR' ? '/hr' : '/hr/signup'}
                className='outline_btn'
              >
                {data?.role === 'HR' ? 'HR Dashboard' : 'HR Login'}
              </Link>
              <Link href='/about-us' className='outline_btn'>
                About Us
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
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={data.role === 'HR' ? '/hr' : '/hr/signup'}
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  {data?.role === 'HR' ? 'Dashboard' : 'HR Login'}
                </Link>
                <Link
                  href='/internships'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Internships
                </Link>
                <Link
                  href='/courses'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Courses
                </Link>
                <Link
                  href='/jobs'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Jobs
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
