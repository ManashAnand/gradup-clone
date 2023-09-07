'use client'

import { MdOutlineOndemandVideo } from 'react-icons/md'
import React from 'react'
import VimeoVideoPlayer from '@/components/VimeoVideoPlayer'
import useSWR from 'swr'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Spinner from '@components/Spinner'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

{
  /* Get the course info  */
}
async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}

export default function Courses({ params }) {
  const [video, setVideo] = React.useState(857468865)
  const [lecture, setLecture] = React.useState(null)
  const [desc, setDesc] = React.useState(null)
  const [hydrated, setHydrated] = React.useState(0)
  // const [checkboxArray, setCheckboxArray] = React.useState([])

  {
    /* Patch request for the progress bar helper function 
  const handleCheckboxChange = async (index) => {
    const updatedArray = [...data.enrollment.progressBar] // Copy of the progressBar array
    const id = data.enrollment._id
    updatedArray[index] = !updatedArray[index] // Toggle the value at the specified index
    setCheckboxArray(updatedArray) // Update checkboxArray state
    await updateArray(updatedArray, id)
  }
  */
  }

  {
    /* calling the API to get the data  and sending the email as params for user and course validation */
  }
  const { data: session } = useSession()
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/enrolledcourses/${params.id}`, //?email=${session?.user.email}
    fetcher
  )
  {
    /* Progress bar data loading on the first render 
  React.useEffect(() => {
    if (data && data.enrollment && data.enrollment) {
      setCheckboxArray([...data.enrollment.progressBar])
    }
  }, [data])
 */
  }
  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null
  }
  {
    /* patch request to handle course earlier
  const updateArray = async (updatedArray, id) => {
    try {
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
   */
  }
  {
    /* handling course earlier 
  
  const handleClick = (index) => {
    setVideo(data.course.VideoURL[index])
    setLecture(data.course.chapter[index])
    setDesc(data.course.chapterDesc[index])
  }
   */
  }

  const handleClick = (lectureIndex) => {
    setSelectedLecture(lectureIndex)
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
        <div className='bg-slate-600  mt-5 rounded-lg p-2 ml-2 mb-2 w-[40%] '>
          <div className=' text-white  items-center m-3'>
            <h1 className='font-bold text-xl'>
              Videos 100{/* course progress */}%
            </h1>
          </div>
          <div>
            {/* Render other course information */}
            {data.course.moduleData.map((module, moduleIndex) => (
              <Accordion
                key={moduleIndex}
                className='border-1 border-slate-900'
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`module${moduleIndex}-content`}
                  id={`module${moduleIndex}-header`}
                >
                  <Typography className='font-bold' variant='h6'>
                    {module.moduleName}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {module.lectures.map((lecture, lectureIndex) => (
                    <div
                      className='text-left text-lg sm p-2 flex flex-row space-x-3  cursor-pointer rounded-lg hover:bg-slate-600 hover:text-white bg-white m-2 whitespace-nowrap overflow-hidden w-full '
                      key={lectureIndex}
                    >
                      <span>
                        {moduleIndex + 1}.{lectureIndex + 1}
                      </span>
                      <MdOutlineOndemandVideo className='mt-1' />
                      <a
                        className={`lecture ${
                          lecture === lectureIndex ? 'selected' : ''
                        }`}
                        onClick={() => handleClick(lectureIndex)}
                      >
                        {lecture.lecture}
                      </a>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}

            {/* 
            use reference of this data to build and Accordion 

            {data.course.moduleData.map((title, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg hover:bg-slate-900 hover:text-white mt-2 mr-2 whitespace-nowrap overflow-hidden p-2 ' ${
                  title === lecture ? 'text-white bg-slate-800' : 'bg-white'
                }`}
                onClick={() => handleClick(index)}
              >
                <p>{title}</p>
                 
                 Use the data.enrollment for this part 
                <input
                  type='checkbox'
                  checked={checkboxArray[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                
              </div>
            ))}
            */}
            {/* Download Certificate Button should only appear when progress is 100%  

            <ol className='text-left cursor-pointer rounded-lg hover:bg-slate-900 hover:text-white bg-white m-2 whitespace-nowrap overflow-hidden p-2 '>
              Download Certificate
            </ol>
            
            */}
          </div>
        </div>

        <div className='w-full bg-white m-5  '>
          {/* Video Player Section */}
          <div className='w-full block rounded-xl overflow-hidden '>
            <VimeoVideoPlayer videoId={video} />
          </div>
          {/* data related to the video appears here */}
          <div className='mt-5  h-full rounded-lg text-left'>
            <div className='flex flex-row spacing-x-2 items-center'>
              <h2 className='text-bold'>Course Title : </h2>
              <h3> {lecture}</h3>
            </div>
            <hr className='border-t-2 border-black mt-2 mb-2' />
            <div className='flex flex-row spacing-x-2 items-center'>
              <h2>Description : </h2>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
