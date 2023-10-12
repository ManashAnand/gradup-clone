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

const JobCard = ({ data, isSelected, onClick }) => {
  const router = useRouter()
  console.log(data)
  return (
    <Card className='rounded-lg my-2 w-[50vh]'>
      <div className='flex flex-row gap-5 px-4 pt-4 mx-4'>
        <CardMedia
          className='w-[10vh] h-[10vh] border border-gray-500'
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
      <hr className='mx-2 ' />
      <div>
        <CardContent className='text-left'>
          <div>
            <LocationOnIcon />
            <span className='pt-2'>{data.location}</span>
          </div>
          <div className='flex flex-row gap-2 mt-2'>
            {data.skillsRequired.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                style={{ backgroundColor: 'lightsteelblue', color: 'white' }}
                variant='Filled Chip'
              />
            ))}
          </div>
          <div className='flex flex-row gap-2 mt-4 justify-evenly'>
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
        </CardContent>
      </div>
    </Card>
  )
}
export default JobCard
