'use client'
import copy from 'copy-to-clipboard'
import { BiSolidShareAlt } from 'react-icons/bi'
import { Tooltip } from '@nextui-org/react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import React from 'react'
import styles from './styles.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'
import DateRangeIcon from '@mui/icons-material/DateRange'
import { useRouter } from 'next/navigation'
const JobCardR = ({ data }) => {
  const router = useRouter()
  return (
    <div
      className={`${styles['jobcard']} mt-2 rounded-lg cursor-pointer flex flex-col sm:flex-row font-lexend`}
    >
      <div className='  pt-4 mx-4 items-center sm:w-[50%] w-full'>
        <div className=' flex flex-row w-full items-center '>
          <img
            className='w-[10vh] h-[10vh] border border-gray-500 rounded-md'
            src={data.logo}
            alt={data.title}
          />

          <div className='text-left ml-4 mt-2'>
            <h1 className='font-extrabold text-xl font-lexend text-gray-500'>
              {data.title}
            </h1>
            <p className='text-lg font-lexend text-gray-400'>
              {data.companyName}
            </p>
          </div>
        </div>

        <div className='flex flex-wrap gap-2 mt-4 text-gray-400 '>
          {data.skillsRequired.map((skill, index) => (
            <span
              key={index}
              className='py-1 px-4 border border-gray-200 rounded-lg text-sm'
            >
              #{skill}
            </span>
          ))}
        </div>
      </div>
      <div className='pt-4 items-center sm:w-[50%] sm:border-l-2 border-gray-200 my-2 text-gray-400 '>
        <div className='flex flex-wrap  mt-4 justify-evenly gap-5'>
          <div>
            <CreditCardIcon />
            <span className='ml-2 mt-3'>{data.stipend}</span>
          </div>
          <div>
            <AccessTimeIcon />
            <span className='ml-2 mt-3'>1-2 yrs</span>
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
        <div className='flex flex-wrap mt-7 gap-4 justify-evenly item-center'>
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
          <Tooltip content='copy link'>
            <BiSolidShareAlt
              size={30}
              onClick={() => {
                copy(`https://gradup.in/jobs/${data._id}`)
              }}
            >
              share
            </BiSolidShareAlt>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
export default JobCardR
