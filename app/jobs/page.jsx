'use client'
import useSWR from 'swr'
import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '@components/Spinner'
import JobCard from '@components/jobs/JobCard'
import FilterJobs from '@components/jobs/FilterJobs'
import JobDetails from '@components/jobs/JobDetails'
import styles from './styles.module.css'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function Page() {
  const { data, error, isLoading } = useSWR('/api/jobs', fetcher)
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedCity, setSelectedCity] = useState([])
  const [selectedTitle, setSelectedTitle] = useState([])
  const [salaryExp, setSalaryExp] = useState(0)
  const [filteredJobs, setFilteredJobs] = useState([])
  const [type, setType] = useState('full-time')
  function filterJobs(jobs, selectedCity, selectedTitle, salaryExp, type) {
    return jobs.filter((job) => {
      // Filter by city
      if (selectedCity.length > 0 && !selectedCity.includes(job.location)) {
        return false
      }
      // Filter by job title
      if (selectedTitle.length > 0 && !selectedTitle.includes(job.title)) {
        return false
      }
      // Filter by salary
      if (job.stipend < salaryExp) {
        return false
      }
      if (type) {
        if (type == 'internship' && !job.isIntern) {
          return false
        } else if (type == 'startup' && !job.isStartUp) {
          return false
        } else if (type == 'full-time' && (job.isIntern || job.isStartUp)) {
          return false
        }
      }
      return true
    })
  }
  useEffect(() => {
    if (data) {
      // Apply filters and set filtered jobs
      const filtered = filterJobs(
        data,
        selectedCity,
        selectedTitle,
        salaryExp,
        type
      )
      setFilteredJobs(filtered)
      setSelectedCard(filtered[0])
    }
  }, [data, selectedCity, selectedTitle, salaryExp, type])
  const handleCardClick = (job) => {
    setSelectedCard(job)
  }

  if (error) {
    return <div>failed to load</div>
  }

  if (isLoading) {
    return <Spinner />
  }
  if (data) {
    return (
      <div className='bg-white pb-10'>
        <div className={`${styles['shadow']}  rounded-full m-3`}>
          <FilterJobs
            setSelectedCity={setSelectedCity}
            setSelectedTitle={setSelectedTitle}
            setSalaryExp={setSalaryExp}
            setType={setType}
            selectedCity={selectedCity}
            selectedTitle={selectedTitle}
            salaryExp={salaryExp}
            type={type}
          />
        </div>
        <div className='flex flex-row w-screen  h-[700px] mt-4'>
          <div className='w-full sm:w-[35%] gap-5 overflow-y-auto  flex flex-col  items-center px-7 py-2 '>
            {filteredJobs.map((job, index) => (
              <div onClick={() => handleCardClick(job)} key={index}>
                <JobCard data={job} />
              </div>
            ))}
          </div>
          {filteredJobs.length > 0 && (
            <div className='hidden sm:block w-[60%]  mx-2 overflow-y-auto'>
              <JobDetails data={selectedCard} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Page
