'use client'

import Grid from '@mui/material/Grid'
import useSWR from 'swr'
import Spinner from '@components/Spinner'
import CustomCard from '@components/CustomCard'
import styles from '@components/CoursesOnHome/styles.module.css'

async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}

export default function CoursesOnHome() {
  const { data, error, isLoading } = useSWR(`/api/courses`, fetcher)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <>Error {error}</>
  }
  if (data) {
    return (
      <section className={`${styles['flex-start']} flex-col mt-4`}>
        <div>
          <h1
            className={`text-3xl text-white font-semibold underline decoration-white underline-offset-8 ${styles['textform']} text-center my-5`}
          >
            Placement Guarantee Courses
          </h1>
          <p
            className={`${styles['textnew']} text-center text-gray-200 text-2xl mb-8`}
          >
            Master new skills from anywhere with our online courses
          </p>
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            {data
              .filter((item) => item.tags[0] === 'popular')
              .map((item, index) => (
                <Grid item xs={8} sm={3} key={index}>
                  <CustomCard
                    className='w-[50%]'
                    kye={index}
                    image={item.imageURL}
                    title={item.title}
                    url={`/courses/${item._id}`}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </section>
    )
  }
}
