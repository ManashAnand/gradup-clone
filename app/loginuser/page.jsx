'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'

const fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json())
const Login = () => {
  const { data: session } = useSession()
  var { data, error } = useSWR(
    `${session?.user.id}` ? `/api/user/${session?.user.id}` : null,
    fetcher
  )
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const router = useRouter()

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
    if (session) {
      router.push('/')
    }
  }, [session])

  useEffect(() => {
    setUpProviders()
  }, [])
  return (
    <>
      <h1 className='flex justify-center font-bold text-3xl mt-6 lg:mt-12 lg:my-6 text-white'>
        Welcome back
      </h1>
      {/* <form action="">
        <input className='flex border px-4 py-2 rounded-lg m-2 mb-4 w-[20rem] justify-center' type="email" placeholder='Email' required />
        <input className='flex border px-4 py-2 rounded-lg m-2 w-[20rem] justify-center' type="password" placeholder='Password' required />
        <p className='flex justify-end text-sm text-blue-600 cursor-pointer mx-4'>Forgot password ?</p>
        <button className="btn text-white flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Log In</button>
    </form>
    <p className='border-b w-[100px] text-center text-xs p-2 text-white'>Or</p> */}
      <div className='flex flex-col my-4'>
        <button
          type='button'
          onClick={() => {
            signIn('google')
          }}
          className='btn border lg:w-[20rem] bg-green-600 text-white px-4 py-2 rounded-lg my-2 mx-auto'
        >
          <GoogleIcon /> &nbsp; Login with Google
        </button>
        <button
          type='button'
          onClick={() => {
            signIn('github')
          }}
          className='btn border lg:w-[20rem] bg-gray-600 text-white px-4 py-2 rounded-lg my-2 mx-auto'
        >
          <GitHubIcon /> &nbsp;Login with GitHub
        </button>
        <button
          type='button'
          onClick={() => {
            signIn('twitter')
          }}
          className='btn border lg:w-[20rem] bg-blue-400 text-white px-4 py-2 rounded-lg my-2 mb-12 mx-auto'
        >
          <TwitterIcon /> &nbsp;Login with Twitter
        </button>
        {/*
    <div className="flex items-center justify-center text-white">
  <div className="border-t border-gray-300 flex-grow"></div>
  <div className="px-4 text-gray-500">Or</div>
  <div className="border-t border-gray-300 flex-grow"></div>
</div>


    <div className="mb-4  flex flex-col flex-start">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@gmail.com" />
        </div>
    <div className="mb-4  flex flex-col flex-start">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
        <p className="text-white">
        Don't have an account?
        <Link href='/signup' className="ml-2 hover:text-sky-500">Sign up </Link>
        </p>
        */}
      </div>
    </>
  )
}

export default Login
