import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

const JobDescription = ({ description, perks, eligiblilty, isActive }) => (
  <div className='p-5 text-left'>
    <h1 className='font-bold text-2xl text-[#010048] '>Job Description</h1>
    <p className=' mt-3'>{description}</p>
    <h1 className='font-bold text-2xl text-[#010048] text-left mt-5'>
      Perks[what will you get]
    </h1>
    <p className='mt-3'>
      {perks.map((perk) => (
        <li key={perk}>{perk} </li>
      ))}
    </p>
    <h1 className='font-bold text-2xl text-[#010048] mt-5'>Eligibility</h1>
    <p className='mt-3'>
      {eligiblilty.map((perk) => (
        <li key={perk}>{perk} </li>
      ))}
    </p>
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
    <div>
      <div className='flex flex-row ml-2'>
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
