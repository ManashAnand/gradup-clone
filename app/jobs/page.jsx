'use client'
import useSWR from 'swr'
import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '@components/Spinner'
import JobCard from '@components/jobs/JobCard'
import FilterJobs from '@components/jobs/FilterJobs'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const page = () => {
  const { data, error, isLoading } = useSWR('/api/jobs', fetcher)

  if (error) {
    return <div>failed to load</div>
  }
  if (isLoading) {
    return <Spinner />
  }

  if (data) {
    return (
      <div className='bg-gray-200 pb-10'>
        <div className='z-10 shadow-xl'>
          <FilterJobs />
        </div>
        <div className='flex flex-row w-screen  h-[700px] mt-4'>
          <div className='w-full sm:w-[35%]  overflow-y-auto  flex flex-col  items-center px-7'>
            {data?.map((job, index) => (
              <div>
                <JobCard data={job} />
              </div>
            ))}
          </div>
          <div className='hidden sm:block w-[60%]  mx-2 overflow-y-auto'></div>
        </div>
      </div>
    )
  }
}
export default page
