'use client'

import React from 'react'

import useSWR from 'swr'

import Spinner from '@components/Spinner'
import SectionCard from '@components/SectionCard'
import CourseHighlight from '@components/CourseHighlight'
import CourseModule from '@components/CourseModule'
import TutorsPage from '@components/TutorsPage'
import PlacementAssistance from '@components/PlacementAssistance'

{
  /* Get the course info  */
}
async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}
{
  /* Ends Here */
}

export default function Courses({ params }) {
  const [hydrated, setHydrated] = React.useState(0)

  const { data, error, isLoading } = useSWR(
    `/api/courses/${params.id}`,
    fetcher
  )

  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    return null
  }

  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    return <div>Error Occurred</div>
  }
  return (
    <>
      <SectionCard
        id={data._id}
        url={data.imageURL}
        title={data.title}
        description={data.description}
        rating={data.rating}
        registeredUsers={data.registeredUsers}
        price={data.price}
      />
      <CourseHighlight />
      <CourseModule data={data.moduleData} />
      <TutorsPage authors={data.author} />
      <PlacementAssistance />
    </>
  )
}
