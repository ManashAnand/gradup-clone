'use client'

import Grid from '@mui/material/Grid'
import CustomCard from '@components/CustomCard'
import Spinner from '@components/Spinner'
import React from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import styles from './styles.module.css'
import CourseRoutingBtn from '@components/CartItems/CourseRoutingBtn'

async function fetcher(url) {
  const res = await fetch(url, { cache: 'no-store' })
  return await res.json()
}

const page = () => {
  const [hydrated, setHydrated] = React.useState(false)
  const { data: session } = useSession()
  const { data, error, isLoading } = useSWR(
    `/api/enrolledcourses?email=${session?.user.email}`,
    fetcher
  )
  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    return null
  }
  if (isLoading) {
    return <Spinner />
  }
  if (data) {
    console.log(data)
    return (
      <>
        <div>
          <div className={`${styles['coursebox']} w-fit m-auto`}>
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
            <div className={`${styles['showmobile']} ${styles['textform']}`}>
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
            <div className='w-screen'>
              <h1
                className={`text-4xl font-bold text-sky-500 ${styles['textform']} ${styles['animate-charcter']} text-center mb-6`}
              >
                My Courses
              </h1>
            </div>
          </div>
        </div>
        {data.length == 0 && (
          <>
            <h1 className='text-white mb-6 font-bold -translate-y-5'>
              You haven't buy the courses now!
            </h1>
            <CourseRoutingBtn />
          </>
        )}
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
