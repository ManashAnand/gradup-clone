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
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const JobCard = ({ data }) => {
  const router = useRouter()
  return (
    <Card className='rounded-lg  text-[#010048] p-2 cursor-pointer hover:shadow-lg '>
      <div className='flex flex-row gap-5 pt-4 mx-4 my-2'>
        <CardMedia
          className='w-[10vh] h-[10vh] border border-gray-500 rounded-md'
          image={data.logo}
          title={data.title}
        />
        <CardContent className='text-left'>
          <Typography
            variant='h6'
            component='div'
            className='font-bold text-lg'
          >
            {data.title}
          </Typography>
          <Typography variant='p' component='div'>
            {data.companyName}
          </Typography>
        </CardContent>
      </div>
      <hr className='mx-2 mt-2 ' />
      <div>
        <CardContent className='text-left'>
          <div>
            <LocationOnIcon />
            <span className='mt-3'>{data.location}</span>
          </div>
          <div className='flex flex-row gap-2 mt-4'>
            {data.skillsRequired.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                style={{ backgroundColor: 'lightsteelblue', color: 'white' }}
                variant='Filled Chip'
              />
            ))}
          </div>
          <div className='flex flex-wrap gap-2 mt-4 justify-between'>
            <div className='flex flex-row gap-1'>
              <CreditCardIcon style={{ color: `#010048` }} />
              <span>{data.stipend}</span>
            </div>
            <div className='flex flex-row gap-1'>
              <AccessTimeIcon />
              Experince
            </div>
            <div className='flex flex-row gap-1'>
              <PeopleOutlineOutlinedIcon />
              <span>{data.noOfOpenings} openings</span>
            </div>
          </div>
          {window.innerWidth < 768 && (
            <div className='hidden sm:block w-full'>
              <button onClick={() => router.push(`/jobs/${data.id}`)}>
                View{' '}
              </button>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  )
}
export default JobCard
