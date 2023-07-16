"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from 'swr';
// import {useSession} from "next-auth/react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const fetcher = async (...args) =>await fetch(...args).then((res) => res.json());
const Nav = () => {
  const { data: session } = useSession();
  var { data, error } = useSWR(`${session?.user.id}` ? `/api/user/${session?.user.id}` : null, fetcher)
  console.log(data,"navdata")
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setUpProviders = async()=> {
        const response = await getProviders();
        setProviders(response);
    }
    setUpProviders();
  }, []);

  return (
    <nav style={{backgroundColor:"#041e48"}} className='w-screen flex-between pt-3 shadow-xl p-4'>
      <Link href='/' className='flex gap-2 flex-center'>
       <img style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} width="90" className="rounded-md ml-3" src="/assets/images/headerlogo.png"></img>
       {/* <Image
          src='/assets/images/website-icon.png'
          alt='logo'
          width={45}
          height={45}
          className='object-contain ml-3'
        /> */}
      </Link>
      

      {/* Desktop Navigation */}
      <div className='lg:flex hidden'>
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
            <Link href={data?.role==="HR"?'/hr':'/hr/signup'} className='outline_btn'>
              {data?.role==="HR"?"HR Dashboard": "HR Login"}
            </Link>
            <Link href='/about-us' className='outline_btn'>
              About Us
            </Link>
            {/* <Link href='/hackathons' className='rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-center mr-3'>
              Hackathons
            </Link> */}

            <button type='button' onClick={signOut} className='black_btn'>
              Sign Out
            </button>

            <Link href='/user'>
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
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='lg:hidden flex relative'>
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
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;