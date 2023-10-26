import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import JobCardR from '@components/jobs/JobsCardR'
import styles from './styles.module.css'
const JobDescription = ({
  description,
  perks,
  eligiblilty,
  responsilities,
  expectedStartDate,
}) => (
  <div className='p-5 text-left'>
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

    {expectedStartDate && (
      <>
        <h1 className='font-bold text-2xl mt-5'>Expected Start Date:</h1>
        <p>
          {new Date(expectedStartDate).toLocaleDateString('en-US', {
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
    <h1 className='font-bold text-2xl '>Skills Required</h1>
    <p className='mt-3'>
      {skillsRequired.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </p>
  </div>
)

const CompanyDetails = ({ aboutCompany }) => (
  <div className='text-left p-5'>
    <h1 className='font-bold text-2xl'>About Company</h1>
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
    <div className='mx-2 p-2'>
      <div className='mb-4 '>
        <JobCardR data={data} />
      </div>

      <Paper elevation={5} className={`${styles['jobcard']} 'py-5 '`}>
        <div className='flex flex-row items-center justify-start ml-4'>
          {dataItems.map((item) => (
            <Button
              key={item.key}
              onClick={() => setSelectedKey(item.key)}
              variant='text'
              style={{
                color: '#6f6f6f',
                margin: '2px',
              }}
            >
              {item.id}
            </Button>
          ))}
        </div>
        <hr className='mx-4 border-1 border-[#E0E3EB] ' />
        <div className='bottom-section'>
          {dataItems.map((item) => (
            <div
              key={item.key}
              style={{ display: selectedKey === item.key ? 'block' : 'none' }}
            >
              {<item.component {...data} />}
            </div>
          ))}
        </div>
      </Paper>
      <Paper elevation={5} className={`${styles['jobcard']} py-5 mt-5`}>
        <h1 className='text-xl font-bold text-left ml-4 mb-2'>
          Additional Information
        </h1>
        <div className='flex flex-wrap gap-2 justify-start ml-4 '>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2`}>
            <h1 className='font-bold text-md'>Job Location</h1>
            <p>{data.location}</p>
          </div>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2`}>
            <h1 className='font-bold text-md'>Experience</h1>
            <p>5-7 yrs</p>
          </div>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2`}>
            <h1 className='font-bold text-md'>Salary</h1>
            <p>₹ {data.stipend}/-</p>
          </div>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2`}>
            <h1 className='font-bold text-md'>Job-type</h1>
            <p>In-office</p>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default JobDetails
