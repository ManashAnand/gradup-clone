'use client'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import { useRouter } from 'next/navigation'
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import styles from './styles.module.css'

const JobCard = ({ data }) => {
  const isSmallScreen = window.innerWidth < 768
  const router = useRouter()
  return (
    <Card
      className={`${styles['jobcard']} 'rounded-xl  p-2 cursor-pointer shadow-lg sm:w-[45vh] '`}
    >
      <div className='flex flex-row gap-5  mx-4 my-2 items-center'>
        <CardMedia
          className='w-[10vh] h-[10vh] border border-gray-300 rounded-md '
          image={data.logo}
          title={data.title}
        />
        <CardContent className='text-left '>
          <h1 className='font-bold text-xl '>{data.title}</h1>
          <h2 className='text-lg'>{data.companyName}</h2>
        </CardContent>
      </div>

      <div>
        <CardContent className='text-left'>
          <div className='flex flex-row gap-2'>
            {data.skillsRequired.map((skill, index) => (
              <span
                key={index}
                className='py-2 px-4 border border-gray-200 rounded-lg text-sm'
              >
                #{skill}
              </span>
            ))}
          </div>
          <div className='flex flex-wrap gap-1 mt-4 justify-between'>
            <div>
              <CreditCardIcon />
              <span className='ml-2 mt-3'>{data.stipend}</span>
            </div>
            <div>
              <AccessTimeIcon />
              4-7 yrs
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
          {isSmallScreen && (
            <button
              className='mt-4 rounded-xl bg-blue-300 px-4 '
              onClick={() => router.push(`/jobs/${data._id}`)}
            >
              View{' '}
            </button>
          )}
        </CardContent>
      </div>
    </Card>
  )
}
export default JobCard
