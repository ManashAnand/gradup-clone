'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Session } from 'next-auth'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import styles from './styles.module.css'

const HomeFirstComponent = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])

  return (
    <section
      className={`w-screen flex justify-between ${styles['headingbox']}`}
    >
      <div className='mb-6 z-10 flex flex-col justify-center '>
        <div
          style={{ overflow: 'hidden' }}
          className={`text-2xl sm:text-6xl ${styles['textnew']} text-left font-bold`}
        >
          <p className='text-[#4D4D4D]'>Connecting talent to</p>
          <p style={{ overflow: 'hidden' }} className='text-[#1C4980]'>
            best opportunities
          </p>
        </div>
        <div className={`text-left  ${styles['textnew']}`}>
          <h1 className='mt-6 sm:text-md mb-6 text-[#717171]'>
            Your Bridge to Success: Live projects, internships, jobs, upskilling
            courses, expert guidance – All in One Place!
          </h1>
        </div>
        <div className='text-left'>
          <button className='py-2 px-4 text-white bg-[#1C4980] rounded-md'>
            Know More
          </button>
        </div>
      </div>
      <div className={`${styles['hideimage']} `}>
        <img
          width='300'
          height='300'
          src='/Illustration.png'
          alt='company'
        ></img>
      </div>
    </section>
  )
}

export default HomeFirstComponent
