'use client'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
// import { Card, Grid, Row, Text } from "@nextui-org/react";
const Courses = () => {
  const [results, setResults] = useState(false)
  const list = [
    {
      title: 'Computer Science',
      img: '/assets/icons/csccom.jpg',
      price: 'Rs 8999',
    },
    {
      title: 'Information Technology',
      img: '/assets/icons/IT.png',
      price: 'Rs 6799',
    },
    {
      title: 'Software Development',
      img: '/assets/icons/WebDevl.jpeg',
      price: 'Rs 5999',
    },
    {
      title: 'Management',
      img: '/assets/icons/management.png',
      price: 'Rs 6299',
    },
    {
      title: 'Design and Product',
      img: '/assets/icons/productdesign.png',
      price: 'Rs 4999',
    },
    {
      title: 'Art and Humanities',
      img: '/assets/icons/art.png',
      price: 'Rs 3999',
    },
  ]
  const list1 = [
    {
      title: 'Web Development',
      img: '/assets/images/web.gif',
      price: 'Rs 8999',
    },
    {
      title: 'Full Stack Development',
      img: '/assets/images/fullStack.gif',
      price: 'Rs 11999',
    },
    {
      title: 'Python Programming',
      img: '/assets/images/python.gif',
      price: 'Rs 6299',
    },
    {
      title: 'C Programming',
      img: '/assets/images/C.gif',
      price: 'Rs 4999',
    },
  ]
  const list2 = [
    {
      title: 'Blockchain',
      img: '/assets/images/blockchain.gif',
      price: 'Rs 5999',
    },
    {
      title: 'Cyber Security ',
      img: '/assets/images/cyber.gif',
      price: 'Rs 4999',
    },
    {
      title: 'Cloud Computing',
      img: '/assets/images/cloud.gif',
      price: 'Rs 5499',
    },
    {
      title: 'Machine Learning',
      img: '/assets/images/AI.gif',
      price: 'Rs 6999',
    },
  ]
  const list3 = [
    {
      title: 'Embedded System',
      img: '/assets/images/circuit.gif',
      price: 'Rs 3999',
    },
    {
      title: 'Process Automation',
      img: '/assets/images/robot.gif',
      price: 'Rs 4999',
    },
    {
      title: 'Virtual Reality',
      img: '/assets/images/vr.gif',
      price: 'Rs 2499',
    },
    {
      title: '3D Printing',
      img: '/assets/images/3dprinter.gif',
      price: '2499',
    },
  ]
  const list4 = [
    {
      title: 'Product Management',
      img: '/assets/images/productiter.gif',
      price: 'Rs 3999',
    },
    {
      title: 'Financial Planning',
      img: '/assets/images/finplanning.gif',
      price: 'Rs 5499',
    },
    {
      title: 'Digital Marketing',
      img: '/assets/images/digitalmarket.gif',
      price: 'Rs 4999',
    },
  ]
  const list5 = [
    {
      title: 'Foreign Language',
      img: '/assets/images/foreignlanguage.gif',
      price: 'Rs 4999',
    },
    {
      title: 'IELTS/English Proficiency',
      img: '/assets/images/english.gif',
      price: 'Rs 4999',
    },
  ]
  const list6 = [
    {
      title: '(UX/UI) Design',
      img: '/assets/images/UIUX.gif',
      price: 'Rs 3499',
    },
    {
      title: 'Graphic Design',
      img: '/assets/images/webdesign.gif',
      price: 'Rs 3999',
    },
  ]
  const list7 = [
    {
      title: 'Painting',
      img: '/assets/images/painting.gif',
      price: 'Rs 3999',
    },
    {
      title: 'Resume Writing',
      img: '/assets/images/resume.gif',
      price: 'Rs 2999',
    },
  ]
  function handleCourses() {
    window.scrollTo(0, 0)
    setResults(true)
  }
  return !results ? (
    <div>
      <div className='coursebox w-fit m-auto'>
        <div>
          <p className='text-white text-left text-xl'>
            Embark on a journey of knowledge and affordability. Discover
            exceptional courses tailored to your aspirations, all within your
            budget. Explore the excellence that awaits!
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
      {/* <div className='text-blue-400 px-12 -mt-20 m-4 py-4 flex justify-between'>
      <Image className='mx-4' width="100" height="50" src="/assets/images/icons8-amazon.png" alt="logo"></Image>
      <Image className='mx-4' width="100" height="50" src="/assets/images/icons8-google-96.png" alt="logo"></Image>
      <Image className='mx-4' width="100" height="50" src="/assets/images/icons8-microsoft-96.png" alt="logo"></Image>
      <Image className='mx-4' width="100" height="50" src="/assets/images/icons8-netflix-96.png" alt="logo"></Image>
      <Image className='mx-4' width="100" height="50" src="/assets/images/icons8-meta-48.png" alt="logo"></Image>
      </div> */}
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
          Our Best Courses
        </h1>
        <Grid className='px-12' container spacing={2}>
          {list.map((item, index) => (
            <Grid item xs={12} sm={3} key={index} sx={{ marginX: 'auto' }}>
              <Card
                sx={{ maxWidth: 500, marginX: 'auto', borderRadius: '16px' }}
              >
                <CardMedia
                  className='p-2 w-[100%] h-[200px]'
                  // sx={{ height: 170 }}
                  image={item.img}
                  title={item.title}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 1,
                    '&:last-child': { pb: 0 },
                  }}
                >
                  <Typography
                    className='text-xl font-medium'
                    sx={{ textAlign: 'center', marginY: 'auto' }}
                    gutterBottom
                    variant='subtitle1'
                    component='div'
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'center', marginY: 'auto' }}
                    gutterBottom
                    variant='subtitle1'
                    component='div'
                  >
                    <Button
                      variant='outlined'
                      className='hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                      onClick={handleCourses}
                      size='small'
                      color='primary'
                    >
                      Start Course
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <p className='text-xl text-center text font-semibold text-white mb-8 mt-16'>
        Computer Science
      </p>
      <Grid className='' container spacing={2}>
        {list1.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ maxWidth: 500, borderRadius: '16px' }}>
              <CardMedia
                className='p-2 w-[100%] h-[200px]'
                sx={{ height: 170 }}
                image={item.img}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                  '&:last-child': { pb: 0 },
                }}
              >
                <Typography
                  className='text-xl font-medium'
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  <Button
                    variant='outlined'
                    className='border hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                    onClick={handleCourses}
                    size='small'
                    color='primary'
                  >
                    Start Course
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <p className='text-xl text-center text font-semibold text-white mt-16 mb-8'>
        Information Technology
      </p>
      <Grid className='' container spacing={2}>
        {list2.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ maxWidth: 500, borderRadius: '16px' }}>
              <CardMedia
                className='p-2 w-[100%] h-[200px]'
                sx={{ height: 170 }}
                image={item.img}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                  '&:last-child': { pb: 0 },
                }}
              >
                <Typography
                  className='text-xl font-medium'
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  <Button
                    variant='outlined'
                    className='border hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                    onClick={handleCourses}
                    size='small'
                    color='primary'
                  >
                    Start Course
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <p className='text-xl text-center text font-semibold text-white mt-16 mb-8'>
        Automation Technology
      </p>
      <Grid
        className=''
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {list3.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ maxWidth: 300, marginX: 'auto', borderRadius: '16px' }}>
              <CardMedia
                className='p-2 w-[100%] h-[200px]'
                sx={{ height: 170 }}
                image={item.img}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                  '&:last-child': { pb: 0 },
                }}
              >
                <Typography
                  className='text-xl font-medium'
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  <Button
                    variant='outlined'
                    className='border hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                    onClick={handleCourses}
                    size='small'
                    color='primary'
                  >
                    Start Course
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <p className='text-xl text-center text font-semibold text-white mt-16 mb-8'>
        Management
      </p>
      <Grid
        className=''
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {list4.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ maxWidth: 300, marginX: 'auto', borderRadius: '16px' }}>
              <CardMedia
                className='p-2 w-[100%] h-[200px]'
                sx={{ height: 170 }}
                image={item.img}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                  '&:last-child': { pb: 0 },
                }}
              >
                <Typography
                  className='text-xl font-medium'
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  <Button
                    variant='outlined'
                    className='border hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                    onClick={handleCourses}
                    size='small'
                    color='primary'
                  >
                    Start Course
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <p className='text-xl text-center text font-semibold text-white mt-16 mb-8'>
        Language Learning
      </p>
      <Grid
        className=''
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {list5.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ maxWidth: 300, marginX: 'auto', borderRadius: '16px' }}>
              <CardMedia
                className='p-2 w-[100%] h-[200px]'
                sx={{ height: 170 }}
                image={item.img}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                  '&:last-child': { pb: 0 },
                }}
              >
                <Typography
                  className='text-xl font-medium'
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  <Button
                    variant='outlined'
                    className='border hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                    onClick={handleCourses}
                    size='small'
                    color='primary'
                  >
                    Start Course
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <p className='text-xl text-center text font-semibold text-white mt-16 mb-8'>
        Design and Product
      </p>
      <Grid
        className=''
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {list6.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ maxWidth: 300, marginX: 'auto', borderRadius: '16px' }}>
              <CardMedia
                className='p-2 w-[100%] h-[200px]'
                sx={{ height: 170 }}
                image={item.img}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                  '&:last-child': { pb: 0 },
                }}
              >
                <Typography
                  className='text-xl font-medium'
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  <Button
                    variant='outlined'
                    className='border hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                    onClick={handleCourses}
                    size='small'
                    color='primary'
                  >
                    Start Course
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <p className='text-xl text-center text font-semibold text-white mt-16 mb-8'>
        Arts and Humanities
      </p>
      <Grid
        className=' mb-8'
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {list7.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ maxWidth: 300, marginX: 'auto', borderRadius: '16px' }}>
              <CardMedia
                className='objec-contain p-2 w-[100%] h-[200px]'
                sx={{ height: 170 }}
                image={item.img}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                  '&:last-child': { pb: 0 },
                }}
              >
                <Typography
                  className='text-xl font-medium'
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', marginY: 'auto' }}
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                >
                  <Button
                    variant='outlined'
                    className='border hover:bg-green-400 hover:text-white my-2 px-4 py-2 rounded-md'
                    onClick={handleCourses}
                    size='small'
                    color='primary'
                  >
                    Start Course
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className='text-blue-400 mt-6 mb-12 flex justify-evenly items-center'>
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
    </div>
  ) : (
    <div>
      <img
        className='my-10 mx-auto'
        width='400'
        src='/assets/images/maintenance.gif'
        alt='maintenance'
      ></img>
      {/* <p className="text-5xl text-center mt-4 textnew text-sky-400">Stay tuned !!</p> */}
      <p className='text-4xl textnew text-center text-sky-400 mt-4 mb-6'>
        Our Courses will be launched Soon
      </p>
      <button
        onClick={() => setResults(false)}
        className='bg-sky-500 text-white px-5 py-2 rounded-md textform mb-16'
      >
        Back to Courses
      </button>
    </div>
  )
}

export default Courses
