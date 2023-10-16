import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import JobCardR from '@components/jobs/JobsCardR'
const JobDescription = ({
  description,
  perks,
  eligiblilty,
  isActive,
  responsilities,
  job,
}) => (
  <div className='p-5 text-left text-[#010048]'>
    <h1 className='font-bold text-2xl'>Job Description</h1>
    {description && <p className='mt-3'>{description}</p>}

    {responsilities.length > 0 && (
      <>
        <h1 className='font-bold text-2xl mt-5'>Responsibility</h1>
        <ul className='mt-3'>
          {responsilities.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </>
    )}

    {perks.length > 0 && (
      <>
        <h1 className='font-bold text-2xl text-left mt-5'>
          Perks[What will you get]
        </h1>
        <ul className='mt-3'>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </>
    )}

    {eligiblilty.length > 0 && (
      <>
        <h1 className='font-bold text-2xl mt-5'>Eligibility</h1>
        <ul className='mt-3'>
          {eligiblilty.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </>
    )}

    {job.expectedStartDate && (
      <>
        <h1 className='font-bold text-2xl mt-5'>Expected Start Date:</h1>
        <p>
          {new Date(job.expectedStartDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </>
    )}
  </div>
)

const SkillsRequired = ({ skillsRequired }) => (
  <div className='text-left p-5'>
    <h1 className='font-bold text-2xl text-[#010048]'>Skills Required</h1>
    <p className='mt-3'>
      {skillsRequired.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </p>
  </div>
)

const CompanyDetails = ({ aboutCompany }) => (
  <div className='text-left p-5'>
    <h1 className='font-bold text-2xl text-[#010048]'>About Company</h1>
    <p className='mt-3'>{aboutCompany}</p>
    {/* Add more data from companyInfo as needed */}
  </div>
)

const JobDetails = ({ data }) => {
  const dataItems = [
    {
      id: 'Jobs Description',
      key: 'description',
      component: JobDescription,
    },
    {
      id: 'Skills Required',
      key: 'skillsRequired',
      component: SkillsRequired,
    },
    {
      id: 'Company Details',
      key: 'aboutCompany',
      component: CompanyDetails,
    },
  ]

  const [selectedKey, setSelectedKey] = useState(dataItems[0].key)

  return (
    <div className='mx-2'>
      <div className='mb-4 '>
        <JobCardR data={data} />
      </div>
      <div className='flex flex-row items-center justify-start'>
        {dataItems.map((item) => (
          <Button
            key={item.key}
            onClick={() => setSelectedKey(item.key)}
            variant='text'
            style={{
              color: selectedKey === item.key ? '#010048' : '',
            }}
          >
            {item.id}
          </Button>
        ))}
      </div>
      <hr className='mx-4 border-1 border-blue-950 mb-4' />
      <div className='bottom-section'>
        <Paper elevation={3} className='paper'>
          {dataItems.map((item) => (
            <div
              key={item.key}
              style={{ display: selectedKey === item.key ? 'block' : 'none' }}
            >
              {<item.component {...data} />}
            </div>
          ))}
        </Paper>
      </div>
    </div>
  )
}

export default JobDetails
