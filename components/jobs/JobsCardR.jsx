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
import Chip from '@mui/material/Chip'

const JobCardR = ({ data }) => {
  return (
    <Card className='rounded-lg  text-[#010048]  cursor-pointer hover:shadow-lg'>
      <div className='flex flex-row gap-5  pt-4 mx-4 items-center'>
        <div className=' flex flex-row w-full items-center'>
          <CardMedia
            className='w-[10vh] h-[10vh] border border-gray-500 rounded-md'
            image={data.logo}
            title={data.title}
          />

          <CardContent className='text-left'>
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
          </CardContent>
        </div>
        <a href={`/jobs/${data._id}/apply`} className='flex justify-end w-full'>
          Apply Now {'->'}
        </a>
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
        </CardContent>
        <div className='flex flex-wrap gap-2 mt-4 justify-between bg-blue-100 p-5'>
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
      </div>
    </Card>
  )
}
export default JobCardR
