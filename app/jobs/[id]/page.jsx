'use client'
import React from 'react'
import JobDetails from '@components/jobs/JobDetails'
import Spinner from '@components/Spinner'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const page = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/jobs/${params.id}`, fetcher)
  if (error) {
    return <div>failed to load</div>
  }
  if (isLoading) return <Spinner />
  if (data) {
    return (
      <div className='w-screen bg-white'>
        <div className='mx-2 p-2 my-5 '>
          <JobDetails data={data} />
        </div>
      </div>
    )
  }
}

export default page
