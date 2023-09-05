'use client'

import React from 'react'
import VimeoVideoPlayer from '@/components/VimeoVideoPlayer'
import useSWR from 'swr'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Spinner from '@components/Spinner'
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
{
  /* PATCH request for course progress */
}

{
  /* Ends Here */
}

export default function Courses({ params }) {
  const [video, setVideo] = React.useState(null)
  const [lecture, setLecture] = React.useState(null)
  const [desc, setDesc] = React.useState(null)
  const [hydrated, setHydrated] = React.useState(0)
  const [checkboxArray, setCheckboxArray] = React.useState([])

  const handleCheckboxChange = async (index) => {
    const updatedArray = [...data.enrollment.progressBar] // Copy of the progressBar array
    const id = data.enrollment._id
    updatedArray[index] = !updatedArray[index] // Toggle the value at the specified index
    setCheckboxArray(updatedArray) // Update checkboxArray state
    await updateArray(updatedArray, id)
  }
  const { data: session } = useSession()
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/enrolledcourses/${params.id}?email=${session?.user.email}`,
    fetcher
  )

  React.useEffect(() => {
    if (data && data.enrollment && data.enrollment) {
      setCheckboxArray([...data.enrollment.progressBar])
    }
  }, [data])

  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null
  }

  const updateArray = async (updatedArray, id) => {
    try {
      console.log('works till here')
      const requestBody = { id, updatedArray }
      const response = await axios.patch(
        `http://localhost:3000/api/enrolledcourses/${params.id}`,
        {
          requestBody,
        }
      )

      console.log('patch request is made')
      if (!response.ok) {
        throw new Error('An error occurred while updating the boolean array.')
      }
      if (response.ok) {
        window.location.reload()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = (index) => {
    setVideo(data.course.VideoURL[index])
    setLecture(data.course.chapter[index])
    setDesc(data.course.chapterDesc[index])
  }
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div>
        <h1 className='text-4xl font-bold text-sky-500 textform animate-charcter text-center mb-6 mt-3 flex-row'>
          {data.course.title}
        </h1>
      </div>
      <div className='flex  w-screen bg-white'>
        {/* Video List and SideBar for Video List */}
        <div className='bg-slate-600  mt-5 rounded-lg p-2 ml-2 mb-2 max-w-[30%] '>
          <div className=' text-white flex items-center bg-black'>
            <h1 className='font-bold mr-2'>Videos</h1>
            <p>{data.enrollment.progress} %</p>
          </div>
          <div>
            {data.course.chapter.map((title, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg hover:bg-slate-900 hover:text-white mt-2 mr-2 whitespace-nowrap overflow-hidden p-2 ' ${
                  title === lecture ? 'text-white bg-slate-800' : 'bg-white'
                }`}
                onClick={() => handleClick(index)}
              >
                <p>{title}</p>

                <input
                  type='checkbox'
                  checked={checkboxArray[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              </div>
            ))}
            <ol className='text-left cursor-pointer rounded-lg hover:bg-slate-900 hover:text-white bg-white m-2 whitespace-nowrap overflow-hidden p-2 '>
              Download Certificate
            </ol>
          </div>
        </div>

        {/* Video Player Section */}
        <div className='w-full bg-white m-5  '>
          <div className='w-full block rounded-xl overflow-hidden '>
            <VimeoVideoPlayer
              videoId={video ? video : data.course.VideoURL[0]}
            />
          </div>
          <div className='mt-5  h-full rounded-lg text-left'>
            <div className='flex flex-row spacing-x-2 items-center'>
              <h2 className='text-bold'>Course Title : </h2>
              <h3> {lecture ? lecture : data.course.title}</h3>
            </div>
            <hr className='border-t-2 border-black mt-2 mb-2' />
            <div className='flex flex-row spacing-x-2 items-center'>
              <h2>Description : </h2>
              <p>{desc ? desc : data.course.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
