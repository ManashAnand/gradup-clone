import React, { useState } from 'react'
import JobCardR from '@components/jobs/JobsCardR'
import styles from './styles.module.css'
const JobDescription = ({
  description,
  perks,
  eligiblilty,
  responsilities,
  expectedStartDate,
}) => (
  <div className='p-5 text-left text-gray-400' style={{ fontFamily: 'Lexend' }}>
    <h1 className=' text-xl text-gray-500 '>Job Description</h1>
    {description && <p>{description}</p>}

    {responsilities.length > 0 && (
      <>
        <h1 className='text-xl mt-5 text-gray-500'>Responsibility</h1>
        <ul>
          {responsilities.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </>
    )}

    {perks.length > 0 && (
      <>
        <h1 className='text-xl text-gray-500 text-left mt-5'>Perks</h1>
        <ul>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </>
    )}

    {eligiblilty.length > 0 && (
      <>
        <h1 className='text-xl mt-5 text-gray-500'>Eligibility</h1>
        <ul>
          {eligiblilty.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </>
    )}

    {expectedStartDate && (
      <>
        <h1 className='text-xl mt-5 text-gray-500'>Expected Start Date:</h1>
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
  <div className='text-left p-5 text-gray-400' style={{ fontFamily: 'Lexend' }}>
    <h1 className='text-xl text-gray-500'>Skills Required</h1>
    <p className='mt-3'>
      {skillsRequired.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </p>
  </div>
)

const CompanyDetails = ({ aboutCompany }) => (
  <div
    className='text-left p-5 text-gray-400 '
    style={{ fontFamily: 'Lexend' }}
  >
    <h1 className='text-xl text-gray-500 font-lexend'>About Company</h1>
    <p>{aboutCompany}</p>
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

      <div className={`${styles['jobcard']} py-2 rounded-md`}>
        <div className='flex flex-row items-center justify-start  gap-4 ml-4 my-2'>
          {dataItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setSelectedKey(item.key)}
              variant='text'
              className='border border-[#4D4D4D] py-1 px-2 rounded-lg'
              style={{
                color: '#6f6f6f',
                margin: '4px',
                fontFamily: 'Lexend',
              }}
            >
              {item.id}
            </button>
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
      </div>
      <div className={`${styles['jobcard']} py-5 mt-5 rounded-md `}>
        <h1 className='text-xl  text-left ml-4 mb-2 font-lexend '>
          Additional Information
        </h1>
        <div className='flex flex-wrap gap-2 justify-start ml-4 '>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2`}>
            <h1 className='text-md font-lexend '>Job Location</h1>
            <p className='font-lexend text-gray-400'>{data.location}</p>
          </div>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2`}>
            <h1 className=' text-md font-lexend'>Experience</h1>
            <p className='font-lexend text-gray-400'>5-7 yrs</p>
          </div>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2 `}>
            <h1 className=' text-md font-lexend'>Salary</h1>
            <p className='font-lexend text-gray-400'>₹ {data.stipend}/-</p>
          </div>
          <div className={`${styles['jobcard']} px-10 rounded-lg py-2 `}>
            <h1 className=' text-md font-lexend'>Job-type</h1>
            <p className='font-lexend text-gray-400'>In-office</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
