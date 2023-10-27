'use client'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styles from './styles.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'
import DateRangeIcon from '@mui/icons-material/DateRange'
import { useRouter } from 'next/navigation'
const JobCardR = ({ data }) => {
  const router = useRouter()
  return (
    <div
      className={`${styles['jobcard']} mt-2 rounded-lg cursor-pointer flex flex-col sm:flex-row`}
    >
      <div className='  pt-4 mx-4 items-center sm:w-[50%] w-full'>
        <div className=' flex flex-row w-full items-center '>
          <CardMedia
            className='w-[10vh] h-[10vh] border border-gray-500 rounded-md'
            image={data.logo}
            title={data.title}
          />

          <div className='text-left ml-4'>
            <Typography
              variant='h5'
              component='h5'
              className='font-extrabold text-2xl'
            >
              {data.title}
            </Typography>
            <Typography variant='p' component='div' className='text-xl'>
              {data.companyName}
            </Typography>
          </div>
        </div>

        <CardContent>
          <div className='flex flex-wrap gap-2 mt-2 '>
            {data.skillsRequired.map((skill, index) => (
              <span
                key={index}
                className='py-2 px-4 border border-gray-200 rounded-lg text-sm'
              >
                #{skill}
              </span>
            ))}
          </div>
        </CardContent>
      </div>
      <div className='pt-4 items-center w-[50%] sm:border-l-2 border-gray-200 my-2'>
        <div className='flex flex-wrap  mt-4 justify-evenly gap-5'>
          <div>
            <CreditCardIcon />
            <span className='ml-2 mt-3'>{data.stipend}</span>
          </div>
          <div>
            <AccessTimeIcon />
            <span className='ml-2 mt-3'>4-7 yrs</span>
          </div>
        </div>
        <div className='flex flex-wrap  mt-4 justify-evenly gap-5'>
          <div>
            <PeopleOutlineOutlinedIcon />
            <span className='ml-2 mt-3'>{data.noOfOpenings}+</span>
          </div>
          <div>
            <LocationOnIcon />
            <span className='ml-2 mt-3'>{data.location}</span>
          </div>
        </div>
        <div className='flex flex-wrap mt-7 gap-4 justify-center'>
          <Button
            variant='outlined'
            size='small'
            startIcon={<FavoriteIcon />}
            style={{
              border: '#6F6F6F',
              color: '#6F6F6F',
            }}
          >
            Wishlist
          </Button>
          <Button
            variant='outlined'
            size='small'
            startIcon={<DateRangeIcon />}
            style={{
              border: '#6F6F6F',
              color: '#6F6F6F',
            }}
          >
            Calender
          </Button>
          <Button
            variant='contained'
            size='small'
            style={{
              backgroundColor: '#0066C8',
              color: 'white',
            }}
            onClick={() => router.push(`/jobs/${data._id}/apply`)}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  )
}
export default JobCardR
