'use client'

import useSWR from 'swr'
import React from 'react'

import Spinner from '@components/Spinner'
import HackathonCard from '@components/HackathonCard'
import Details from '@components/Details'
import { useState, useEffect } from 'react'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const page = () => {
  const { data, error, isLoading } = useSWR('/api/hackathon', fetcher)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedCard(data[0])
    }
  }, [data])
  const handleCardClick = (cardData) => {
    setSelectedCard(cardData)
  }

  if (error) {
    return <div>failed to load</div>
  }
  if (isLoading) {
    return <Spinner />
  }
  if (data) {
    return (
      <div className='bg-gray-200 pb-10'>
        <div
          style={{
            color: 'deepskyblue',
            zIndex: 10,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          className='text text-4xl animate-charcter text-center font-semibold py-6'
        >
          Hackathons- Bring Your Coding Skills
        </div>
        <div className='flex flex-row w-screen  h-[700px] mt-4'>
          <div className=' w-full sm:w-[35%]  overflow-y-auto  flex flex-col  items-center'>
            {data.map((hack, index) => (
              <HackathonCard
                key={index}
                data={hack}
                onClick={() => handleCardClick(hack)}
                isSelected={selectedCard === hack}
              />
            ))}
          </div>
          <div className='hidden sm:block w-[60%]  mx-2 overflow-y-auto'>
            <Details data={selectedCard ? selectedCard : data[0]} h={600} />
          </div>
        </div>
      </div>
    )
  }
}
export default page
