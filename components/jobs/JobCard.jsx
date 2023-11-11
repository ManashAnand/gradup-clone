'use client'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './styles.module.css'

const JobCard = ({ data }) => {
  const isSmallScreen = window.innerWidth < 768
  const router = useRouter()
 
  return (
    <div
      className={`${styles['jobcard']}  rounded-xl  p-2 cursor-pointer shadow-lg  pl-4 sm:w-[400px] w-[350px] z-20`}
    >
      <div className='flex flex-row  gap-2 my-2 items-center w-full'>
        <img
          className='w-[70px] h-[70px] border border-gray-300 rounded-md '
          src={data.logo}
          alt={data.title}
        />
        <div className='text-left mt-2 sm:w-[320px] w-[270px]'>
          <h1 className='font-bold text-lg text-gray-500 font-lexend'>
            {data.title}
          </h1>
          <div className='flex flex-row gap-2 justify-between '>
            <h2 className='text-md text-gray-400 font-lexend'>
              {data.companyName}
            </h2>
            {data.premium && (
              <span className='flex flex-row'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='green'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                  />
                </svg>
                <span className='font-lexend text-gray-400'>Verified</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='text-left my-4 '>
        <div className='flex flex-wrap gap-2'>
          {data.skillsRequired.map(
            (skill, index) =>
              index < 2 && (
                <span
                  key={index}
                  className='py-1 px-4 border border-gray-200 rounded-lg text-sm text-gray-400 font-lexend'
                >
                  #{skill}
                </span>
              )
          )}
        </div>
        <div className='flex flex-row gap-1 mt-3 justify-between overflow-hidden text-sm px-2 text-gray-400 font-lexend'>
          <div>
            <CreditCardIcon />
            <span className='ml-2 mt-3'>{data.stipend}</span>
          </div>
          <div>
            <AccessTimeIcon />
            <span className='text-sm ml-2'>
              {new Date(data.expectedStartDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })}
            </span>
          </div>
          <div>
            <PeopleOutlineOutlinedIcon />
            <span className='ml-2 mt-3'>{data.noOfOpenings}+</span>
          </div>
          <div>
            <LocationOnIcon />
            <span className='ml-2 mt-3'>{data.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default JobCard
