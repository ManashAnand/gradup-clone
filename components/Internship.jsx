'use client'
import JobCard from '@components/jobs/JobCard'
import Spinner from '@components/Spinner'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import { useRef, useEffect } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Internship = () => {
  const router = useRouter()
  const { data, error, isLoading } = useSWR('/api/jobs', fetcher)
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
  if (data) {
    return (
      <div className='w-screen mt-10 '>
        <h1 className='text-4xl font-bold text-white'>Premium Internships</h1>
        <div
          ref={scrollContainerRef}
          className='w-full h-full overflow-x-scroll scroll scroll-continuous whitespace-nowrap scrollbar-hide mt-5'
        >
          {data.map((job) => (
            <div
              className=' inline-block p-2 cursor-pointer '
              onClick={() => router.push(`/jobs/${job._id}`)}
            >
              <JobCard data={job} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default Internship
