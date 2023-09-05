'use client'

import Grid from '@mui/material/Grid'
import CustomCard from '@components/CustomCard'

import React from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url, { cache: 'no-store' })
  return await res.json()
}

const page = () => {
  const [hydrated, setHydrated] = React.useState(false)
  const { data: session } = useSession()
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/enrolledcourses?email=${session?.user.email}`,
    fetcher
  )
  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null
  }
  console.log('data', data)

  if (data == null) {
    return (
      <>
        <div>
          <div className='coursebox w-fit m-auto'>
            <div>
              <p className='text-white text-left text-xl'>
                Embark on a journey of knowledge and affordability. Discover
                exceptional courses tailored to your aspirations, all within
                your budget. Explore the excellence that awaits!
              </p>
            </div>
            <div className=''>
              <img width='200' src='/assets/images/image1.png'></img>
            </div>
          </div>
          <div className='w-fit flex mx-auto flex-col mb-10 mt-5'>
            <div className='showmobile textform'>
              <p className='text-white text-xl'>
                Embark on a journey of knowledge and affordability.
              </p>
              <p className='text-white text-xl'>
                Discover exceptional courses tailored to your aspirations, all
                within your budget.Explore the excellence that awaits!
              </p>
              <img
                className='mx-auto block'
                width='280'
                src='/assets/images/image1.png'
              ></img>
            </div>
            <h1 className='text-4xl font-bold text-sky-500 textform animate-charcter text-center mb-6 mt-3'>
              My Courses
            </h1>
          </div>
        </div>
        <div>
          <p>You haven't enrolled in any course yet.</p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <div className='coursebox w-fit m-auto'>
            <div>
              <p className='text-white text-left text-xl'>
                Embark on a journey of knowledge and affordability. Discover
                exceptional courses tailored to your aspirations, all within
                your budget. Explore the excellence that awaits!
              </p>
            </div>
            <div className=''>
              <img width='200' src='/assets/images/image1.png'></img>
            </div>
          </div>
          <div className='w-fit flex mx-auto flex-col mb-5 mt-5'>
            <div className='showmobile textform'>
              <p className='text-white text-xl'>
                Embark on a journey of knowledge and affordability.
              </p>
              <p className='text-white text-xl'>
                Discover exceptional courses tailored to your aspirations, all
                within your budget.Explore the excellence that awaits!
              </p>
              <img
                className='mx-auto block'
                width='280'
                src='/assets/images/image1.png'
              ></img>
            </div>
            <div className='w-screen '>
              <h1 className='text-4xl font-bold text-sky-500 textform animate-charcter text-center mb-2 mt-3'>
                My Courses
              </h1>
            </div>
          </div>
        </div>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data.map((course, id) => (
            <Grid item xs={6} sm={3} key={id}>
              <CustomCard
                image={course.imageURL}
                title={course.title}
                url={`/mycourses/${course._id}`}
              />
            </Grid>
          ))}
        </Grid>
      </>
    )
  }
}
export default page
