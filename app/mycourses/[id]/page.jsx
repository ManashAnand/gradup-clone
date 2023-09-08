'use client'

import { MdOutlineOndemandVideo } from 'react-icons/md'
import { styled } from '@mui/material/styles'
import React from 'react'
import VimeoVideoPlayer from '@/components/VimeoVideoPlayer'
import useSWR from 'swr'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Spinner from '@components/Spinner'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import { GoThumbsup, GoThumbsdown } from 'react-icons/go'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon fontSize='5' />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

{
  /* Get the course info  */
}
async function fetcher(url) {
  const res = await fetch(url)
  return await res.json()
}

export default function Courses({ params }) {
  const [video, setVideo] = React.useState(null)
  const [lecture, setLecture] = React.useState(null)
  const [desc, setDesc] = React.useState(null)
  const [hydrated, setHydrated] = React.useState(0)
  const [expanded, setExpanded] = React.useState('panel1')
  const [courseProg, setCourseProg] = React.useState(0)

  const [checkboxArray, setCheckboxArray] = React.useState([])

  {
    /* Patch request for the progress bar helper function
     */
  }
  const handleCheckboxChange = async (moduleIndex, lectureIndex) => {
    const updatedArray = [...checkboxArray] // Copy of the progressBar array
    console.log([updatedArray])
    const id = data.enrollment._id
    updatedArray[moduleIndex][lectureIndex] =
      !updatedArray[moduleIndex][lectureIndex] // Toggle the value at the specified index
    setCheckboxArray(updatedArray) // Update checkboxArray state
    const trueCount = data.enrollment.progressBar
      .flat()
      .filter((value) => value === true).length
    const totalCount = data.enrollment.progressBar.flat().length
    const progress = (trueCount / totalCount) * 100

    setCourseProg(progress)

    await updateArray(updatedArray, id, progress)
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
     */
  }
  React.useEffect(() => {
    if (data) {
      setCheckboxArray([...data.enrollment.progressBar])
      setCourseProg(data.enrollment.progress)
      console.log(data.enrollment.progressBar)
      console.log(checkboxArray)
    }
  }, [data])

  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null
  }
  {
    /* patch request to handle course earlier
     */
  }
  const updateArray = async (updatedArray, id, progress) => {
    try {
      const requestBody = { id, updatedArray, progress }
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
    } catch (error) {
      console.error(error)
    }
  }

  {
    /* handling course */
  }
  const handleClick = (lectureIndex, moduleIndex) => {
    setLecture(
      data.course.moduleData[moduleIndex].lectures[lectureIndex].lecture
    )
    setVideo(
      data.course.moduleData[moduleIndex].lectures[lectureIndex].lectureURL
    )
    setDesc(
      data.course.moduleData[moduleIndex].lectures[lectureIndex]
        .lectureDescription
    )
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
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
              Videos {Math.round(courseProg)}%
            </h1>
          </div>
          <div>
            {/* Render other course information */}
            {data.course.moduleData.map((module, moduleIndex) => (
              <Accordion
                expanded={expanded === `module${moduleIndex}`}
                onChange={handleChange(`module${moduleIndex}`)}
                key={moduleIndex}
                className='border-1 border-slate-900'
              >
                <AccordionSummary
                  aria-controls={`module${moduleIndex}d-content`}
                  id={`module${moduleIndex}-header`}
                >
                  <Typography className='font-bold' variant='h6'>
                    {module.moduleName}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {module.lectures.map((title, lectureIndex) => (
                    <div
                      className={`text-left text-lg p-2 flex  justify-between cursor-pointer rounded-lg hover:bg-slate-600 hover:text-white  m-2 whitespace-nowrap overflow-hidden w-full ${
                        title.lecture == lecture
                          ? 'text-white bg-slate-600'
                          : 'text-black'
                      }
                        `}
                      key={lectureIndex}
                    >
                      <div
                        className='flex flex-row space-x-3'
                        onClick={() => handleClick(lectureIndex, moduleIndex)}
                      >
                        <span>
                          {moduleIndex + 1}.{lectureIndex + 1}
                        </span>
                        <MdOutlineOndemandVideo className='mt-1' />
                        <span>{title.lecture}</span>
                      </div>
                      <input
                        type='checkbox'
                        checked={
                          data.enrollment.progressBar[moduleIndex][lectureIndex]
                        }
                        onClick={() =>
                          handleCheckboxChange(moduleIndex, lectureIndex)
                        }
                      />
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>

        <div className='w-full bg-white m-5  '>
          {/* Video Player Section */}
          <div className='w-full block rounded-xl overflow-hidden '>
            <VimeoVideoPlayer
              videoId={
                video ? video : data.course.moduleData[0].lectures[0].lectureURL
              }
            />
          </div>
          {/* data related to the video appears here */}
          <div className='mt-5  h-full rounded-lg text-left'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row spacing-x-2 items-center'>
                <h2 className='text-bold'>Chapter Title : </h2>
                <h3> {lecture}</h3>
              </div>
              <div className='flex flex-row space-x-6 font-bold mr-6'>
                <GoThumbsup fontSize={30} />
                <GoThumbsdown fontSize={30} />
              </div>
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
