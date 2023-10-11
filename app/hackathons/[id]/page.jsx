'use client'
import React from 'react'
import Details from '@components/Details'
import Spinner from '@components/Spinner'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const page = ({ params }) => {
  console.log(params.id)
  const { data, error, isLoading } = useSWR(
    `/api/hackathon/${params.id}`,
    fetcher
  )
  if (error) {
    return <div>failed to load</div>
  }
  if (isLoading) return <Spinner />
  if (data) {
    return (
      <div className='w-screen bg-white'>
        <div className='mx-10 p-2 border-2 my-5'>
          <h1 className='font-bold text-4xl my-5'>{data.title}</h1>
          <Details data={data} />
        </div>
      </div>
    )
  }
}

export default page
