'use client'
import React from 'react'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

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

const CourseModule = (data) => {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className='items-center w-[50%] m-10 '>
      <h1 className='font-black text-4xl text-white m-5'>Course Module</h1>
      {/* Render other course information */}
      {data.data.map((module, moduleIndex) => (
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
                className='text-left text-lg p-2 flex  justify-between cursor-pointer rounded-lg hover:bg-slate-600 hover:text-white  m-2 whitespace-nowrap overflow-hidden w-full 
                        '
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
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
export default CourseModule
