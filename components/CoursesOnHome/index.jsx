'use client'
import Grid from '@mui/material/Grid'
import useSWR from 'swr'
import Spinner from '@components/Spinner'
import CourseCard from '@components/CourseCard'
import { useState } from 'react'

import React from 'react'
import Marquee from 'react-fast-marquee'

async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}

export default function CoursesOnHome() {
  const list = [
    { title: 'Popular', value: 'popular' },
    { title: 'Computer', value: 'cs' },
    { title: 'IT', value: 'it' },
    { title: 'Automation', value: 'automation' },
    { title: 'Management', value: 'management' },
    { title: 'Language', value: 'language' },
    { title: 'Design', value: 'design' },
    { title: 'Arts', value: 'art' },
  ]
  const [tag, setTag] = useState('popular')
  const { data, error, isLoading } = useSWR(`/api/courses`, fetcher)
  const handleClick = (value) => {
    setTag(value)
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <>Error {error}</>
  }
  if (data) {
    console.log(data)

    return (
      <section className='mt-4 mx-5 text-left'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-2xl text-[#4D4D4D] font-bold text-left my-5'>
            Featured <span className='text-[#1C4980]'>Courses on GradUp</span>
          </h1>
          <div className='sm:flex flex-row gap-2 hidden'>
            {list.map((tags) => (
              <span
                key={tags.value}
                className={`text-sm py-1  px-2 border rounded-lg font-lexend cursor-pointer scroll-smooth ${
                  tag === tags.value ? 'bg-[#E0E3EB] text-[#1C4980]' : ''
                }`}
                onClick={() => handleClick(tags.value)}
              >
                {tags.title}
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-row gap-5 overflow-x-auto whitespace-nowrap items-center mx-5 '>
          <Marquee className='max-w-[100%] ' pauseOnHover={true}>
            {data
              ?.filter((item) => item.tags[0] === tag)
              .map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className='flex-shrink-0 my-2 ml-10'
                      style={{ width: '300px' }}
                    >
                      <CourseCard
                        key={index}
                        image={item.imageURL}
                        title={item.title}
                        url={`/courses/${item._id}`}
                      />
                    </div>
                  </>
                )
              })}
          </Marquee>
        </div>
      </section>
    )
  }
}
