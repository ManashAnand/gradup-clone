'use client'
import useSWR from 'swr'
import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '@components/Spinner'
import JobCard from '@components/jobs/JobCard'
import FilterJobs from '@components/jobs/FilterJobs'
import JobDetails from '@components/jobs/JobDetails'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function Page() {
  const { data, error, isLoading } = useSWR('/api/jobs', fetcher)
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedCity, setSelectedCity] = useState([])
  const [selectedTitle, setSelectedTitle] = useState([])
  const [salaryExp, setSalaryExp] = useState(0)
  const [filteredJobs, setFilteredJobs] = useState([])
  function filterJobs(jobs, selectedCity, selectedTitle, salaryExp) {
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
      return true
    })
  }
  useEffect(() => {
    if (data) {
      // Apply filters and set filtered jobs
      const filtered = filterJobs(data, selectedCity, selectedTitle, salaryExp)
      setFilteredJobs(filtered)
      setSelectedCard(filtered[0])
    }
  }, [data, selectedCity, selectedTitle, salaryExp])
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
      <div className='bg-gray-200 pb-10'>
        <div className='z-10 shadow-xl hidden sm:block md:block'>
          <FilterJobs
            setSelectedCity={setSelectedCity}
            setSelectedTitle={setSelectedTitle}
            setSalaryExp={setSalaryExp}
            selectedCity={selectedCity}
            selectedTitle={selectedTitle}
            salaryExp={salaryExp}
          />
        </div>
        <div className='flex flex-row w-screen  h-[700px] mt-4'>
          <div className='w-full sm:w-[35%] gap-5 overflow-y-auto  flex flex-col  items-center px-7 '>
            {filteredJobs.map((job, index) => (
              <div
                className={`${
                  job === selectedCard
                    ? 'rounded-lg border border-gray-400'
                    : ''
                }`}
                onClick={() => handleCardClick(job)}
                key={index}
              >
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
