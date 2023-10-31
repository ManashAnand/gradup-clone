'use client'

import Grid from '@mui/material/Grid'
import useSWR from 'swr'
import Spinner from '@components/Spinner'
import CourseCard from '@components/CourseCard'
import styles from '@components/CoursesOnHome/styles.module.css'
import { useState } from 'react'

async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}

export default function CoursesOnHome() {
  const list = [
    { title: 'popular', value: 'popular' },
    { title: 'comp sci', value: 'cs' },
    { title: 'IT', value: 'it' },
    { title: 'Automation', value: 'automation' },
    { title: 'Management', value: 'management' },
    { title: 'Language', value: 'language' },
    { title: 'design', value: 'design' },
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
    return (
      <section className='mt-4 mx-5 text-left'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-2xl text-[#4D4D4D] font-bold text-left my-5'>
            Featured <span className='text-[#1C4980]'>Courses on GradUp</span>
          </h1>
          <div className='sm:flex flex-row gap-2  hidden'>
            {list.map((tags) => {
              return (
                <span
                  className='text-sm py-1 text-[#1C4980] px-2 border border-[#1C4980] rounded-lg font-lexend cursor-pointer'
                  onClick={() => handleClick(tags.value)}
                >
                  {tags.title}
                </span>
              )
            })}
          </div>
        </div>
        <div className=' flex flex-wrap gap-5 overflow-x-auto whitespace-nowrap justify-center items-center '>
          {data
            .filter((item) => item.tags[0] === tag)
            .map((item, index) => (
              <div className='flex-shrink-0 my-2'>
                <CourseCard
                  kye={index}
                  image={item.imageURL}
                  title={item.title}
                  url={`/courses/${item._id}`}
                />
              </div>
            ))}
        </div>
      </section>
    )
  }
}
