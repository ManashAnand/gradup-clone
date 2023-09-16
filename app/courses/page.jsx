'use client'

import Grid from '@mui/material/Grid'
import Image from 'next/image'
import CustomCard from '@components/CustomCard'
import Spinner from '@components/Spinner'
import React from 'react'
import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url, { cache: 'no-store' })
  return await res.json()
}

const page = () => {
  const [hydrated, setHydrated] = React.useState(false)

  const { data, error, isLoading } = useSWR(`/api/courses`, fetcher)
  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null
  }
  console.log('data', data)

  if (isLoading) {
    return (
      <>
        <div className='w-fit flex mx-auto flex-col mb-10 mt-5'>
          <div className=''>
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
            Our Courses
          </h1>
        </div>
        <div>
          <Spinner />
        </div>
      </>
    )
  }
  if (error) {
    console.log(error)
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
              <p className='text-white text-left text-xl'></p>
            </div>
            <div className=''>
              <img width='200' src='/assets/images/image1.png'></img>
              {/* <img width="200" src="/assets/images/image2.png"></img> */}
              {/* <img width="200" src="/assets/images/image4.png"></img>
          <img width="200" src="/assets/images/image3.png"></img> */}
            </div>
          </div>
          <div className='w-fit flex mx-auto flex-col mt-5'>
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
              <h1 className='text-4xl font-bold text-sky-500 textform animate-charcter text-center mb-6 '>
                Popular Courses
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
          {data
            .filter((item) => item.tags[0] === 'popular')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
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
        <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
          Computer Science
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'cs')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <CustomCard
                  className='w-[50%]'
                  image={item.imageURL}
                  title={item.title}
                  url={`/courses/${item._id}`}
                />
              </Grid>
            ))}
        </Grid>
        <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
          Information Technology
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'it')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
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
        <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
          Automation Technology
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'automation')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
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
        <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
          Management
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'management')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
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
        <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
          Language
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'language')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
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
        <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
          Design And Product
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'design')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
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
        <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
          Arts and Humanities
        </p>
        <Grid
          className=' mb-8'
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data
            .filter((item) => item.tags[0] === 'art')
            .map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
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
        <div className='w-screen h-auto mt-12 mb-12 flex justify-evenly items-center'>
          <Image
            className='mx-2'
            width='60'
            height='50'
            src='/assets/images/icons8-amazon.png'
            alt='logo'
          ></Image>
          <Image
            className='mx-2'
            width='60'
            height='50'
            src='/assets/images/icons8-google-96.png'
            alt='logo'
          ></Image>
          <Image
            className='mx-2'
            width='60'
            height='50'
            src='/assets/images/icons8-microsoft-96.png'
            alt='logo'
          ></Image>
          <Image
            className='block mx-2'
            width='60'
            height='50'
            src='/assets/images/icons8-netflix-96.png'
            alt='logo'
          ></Image>
          <Image
            width='60'
            height='50'
            src='/assets/images/icons8-meta-48.png'
            alt='logo'
          ></Image>
        </div>
      </>
    )
  }
}
export default page
