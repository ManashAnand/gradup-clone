import React from 'react'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
    className='border '
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
    padding: 0,
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

const CourseFaq = ({ data }) => {
  console.log(data)
  const [expanded, setExpanded] = React.useState(null)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className='items-center w-[100%] mt-5'>
      <div className='bg-slate-800 rounded-md mb-2'>
        {data?.faq.map((faqItem, faqIndex) => (
          <Accordion
            expanded={expanded === `faq${faqIndex}`}
            onChange={handleChange(`faq${faqIndex}`)}
            key={faqIndex}
            className='border-1 border-slate-900'
          >
            <AccordionSummary
              aria-controls={`faq${faqIndex}-content`}
              id={`faq${faqIndex}-header`}
            >
              <Typography className='font-bold text-left' variant='h6'>
                {faqItem.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='text-left'>{faqItem.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default CourseFaq
