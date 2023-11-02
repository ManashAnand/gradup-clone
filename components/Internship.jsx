'use client'
import JobCard from '@components/jobs/JobCard'
import Spinner from '@components/Spinner'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import styles from '@components/CoursesOnHome/styles.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Internship = () => {
  const router = useRouter()
  const { data, error, isLoading } = useSWR('/api/premiumji/intern', fetcher)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const container = scrollContainerRef.current

    const scroll = () => {
      if (container) {
        const scrollWidth = container.scrollWidth
        const clientWidth = container.clientWidth

        if (scrollWidth === clientWidth) {
          // Don't scroll if all content fits without scrolling
          return
        }

        let scrollPosition = 0

        const scrollInterval = setInterval(() => {
          scrollPosition++

          if (scrollPosition >= scrollWidth - clientWidth) {
            scrollPosition = 0
          }

          container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          })
        }, 0)
        return () => {
          clearInterval(scrollInterval)
        }
      }
    }

    scroll()
    return scroll
  }, [])

  if (error) {
    return <div>failed to load</div>
  }
  if (isLoading) {
    return <Spinner />
  }
  if (data && data.length > 0) {
    return (
      <section className='w-screen'>
        <div className='mt-4  mx-5'>
          <h1 className='text-2xl text-[#4D4D4D] font-bold text-left my-5'>
            Featured
            <span className='text-[#1C4980]'> Internships On GradUp</span>
          </h1>
          <div
            ref={scrollContainerRef}
            className='w-full h-full overflow-x-auto scroll scroll-continuous whitespace-nowrap scrollbar-hide mt-5'
          >
            {data.map((job) => (
              <div
                className=' inline-block p-2 cursor-pointer'
                onClick={() => router.push(`/jobs/${job._id}`)}
              >
                <JobCard data={job} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  return null
}
export default Internship
