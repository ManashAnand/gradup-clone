'use client'
import JobCard from '@components/jobs/JobCard'
import Spinner from '@components/Spinner'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import styles from '@components/CoursesOnHome/styles.module.css'
import Select from 'react-select'
import Marquee from 'react-fast-marquee'

const list = [
  {
    value: 'Software Developer/Engineer',
    label: 'Software Developer/Engineer',
  },
  { value: 'Front-End Developer', label: 'Front-End Developer' },
  { value: 'Back-End Developer', label: 'Back-End Developer' },
  { value: 'Full-Stack Developer', label: 'Full-Stack Developer' },
  { value: 'Mobile App Developer', label: 'Mobile App Developer' },
  { value: 'Data Scientist', label: 'Data Scientist' },
  { value: 'Data Analyst', label: 'Data Analyst' },
  { value: 'Database Administrator', label: 'Database Administrator' },
  { value: 'Systems Administrator', label: 'Systems Administrator' },
  { value: 'Network Engineer', label: 'Network Engineer' },
  { value: 'HR Manager', label: 'HR Manager' },
  { value: 'IT Project Manager', label: 'IT Project Manager' },
  { value: 'IT Consultant', label: 'IT Consultant' },
  { value: 'Business Analyst', label: 'Business Analyst' },
  { value: 'UI/UX Designer', label: 'UI/UX Designer' },
  {
    value: 'Quality Assurance Engineer/Tester',
    label: 'Quality Assurance Engineer/Tester',
  },
  { value: 'DevOps Engineer', label: 'DevOps Engineer' },
  { value: 'Cloud Architect/Engineer', label: 'Cloud Architect/Engineer' },
  { value: 'IT Support Specialist', label: 'IT Support Specialist' },
  { value: 'Technical Writer', label: 'Technical Writer' },
  { value: 'Java Developer', label: 'Java Developer' },
  { value: 'Python Developer', label: 'Python Developer' },
  { value: 'Web Developer', label: 'Web Developer' },
  { value: 'JavaScript Developer', label: 'JavaScript Developer' },
  { value: 'Game Developer', label: 'Game Developer' },
  { value: 'C#/.Net Developer', label: 'C#/.Net Developer' },
  { value: 'Wordpress Developer', label: 'Wordpress Developer' },
  { value: 'Salesforce Developer', label: 'Salesforce Developer' },
  { value: 'Unity Developer', label: 'Unity Developer' },
  { value: 'Machine Learning Engineer', label: 'Machine Learning Engineer' },
  { value: 'Data Engineer', label: 'Data Engineer' },
  { value: 'DevOps Engineer', label: 'DevOps Engineer' },
  { value: 'Cloud Engineer', label: 'Cloud Engineer' },
  { value: 'Blockchain Developer', label: 'Blockchain Developer' },
  { value: 'Database Developer', label: 'Database Developer' },
  { value: 'Automation Developer', label: 'Automation Developer' },
  { value: 'Microservices Developer', label: 'Microservices Developer' },
  { value: 'IOS Developer', label: 'IOS Developer' },
  { value: 'Android Developer', label: 'Android Developer' },
  { value: 'Data Architect', label: 'Data Architect' },
  { value: 'Database Analyst', label: 'Database Analyst' },
  { value: 'SQL Developer', label: 'SQL Developer' },
  { value: 'Database Designer', label: 'Database Designer' },
  { value: 'Big Data Engineer', label: 'Big Data Engineer' },
  { value: 'Data Quality Analyst', label: 'Data Quality Analyst' },
  { value: 'Operations Manager', label: 'Operations Manager' },
  { value: 'Support Analyst', label: 'Support Analyst' },
  { value: 'Network Support Engineer', label: 'Network Support Engineer' },
  {
    value: 'Customer Support Representative',
    label: 'Customer Support Representative',
  },
  { value: 'IT Help Desk Manager', label: 'IT Help Desk Manager' },
  { value: 'HR Business Patner', label: 'HR Business Partner' },
  { value: 'HR Specialist', label: 'HR Specialist' },
  {
    value: 'Talent Acquisition Specialist',
    label: 'Talent Acquisition Specialist',
  },
  { value: 'HR Operations Manager', label: 'HR Operations Manager' },
  { value: 'HR Business Analyst', label: 'HR Business Analyst' },
  { value: 'IT Operations Manager', label: 'IT Operations Manager' },
  { value: 'IT Operations ANalyst', label: 'IT Operations ANalyst' },
  { value: 'Risk Analyst', label: 'Risk Analyst' },
  { value: 'Software Trainer', label: 'Software Trainer' },
  { value: 'Product Owner', label: 'Product Owner' },
  { value: 'Team Lead', label: 'Team Lead' },
  { value: 'Release Manager', label: 'Release Manager' },
  { value: 'Support Engineer', label: 'Support Engineer' },
  { value: 'Systems Engineer', label: 'Systems Engineer' },
  { value: 'Software Tester', label: 'Software Tester' },
  { value: 'Security Engineer', label: 'Security Engineer' },
  { value: 'Scrum Master', label: 'Scrum Master' },
  { value: 'Product Manager', label: 'Product Manager' },
  { value: 'Data Warehouse Developer', label: 'Data Warehouse Developer' },
  { value: 'Mathematics & Computing', label: 'Mathematics & Computing' },
  { value: 'Content Development', label: 'Content Development' },
  { value: 'Digital Marketing', label: 'Digital Marketing' },
  { value: 'Subject Matter Expert', label: 'Subject Matter Expert' },
  { value: 'Robotics', label: 'Robotics' },
  { value: 'Creative Writing', label: 'Creative Writing' },
  { value: 'Graphic Designing', label: 'Graphic Designing' },
  { value: 'Business Development', label: 'Business Development' },
  { value: 'Media & Public Relations', label: 'Media & Public Relations' },
  { value: 'Social Media Marketing', label: 'Social Media Marketing' },
  { value: 'Video Editing', label: 'Video Editing' },
  { value: 'Cyber Security', label: 'Cyber Security' },
  { value: 'Supply Chain Management', label: 'Supply Chain Management' },
]

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Job = () => {
  const router = useRouter()
  const [title, setTitle] = useState()
  const [filteredJobs, setFilteredJobs] = useState([])
  const { data, error, isLoading } = useSWR('/api/premiumji/job', fetcher)
  function filterJobs(jobs, title) {
    return jobs.filter((job) => {
      if (title && title != job.title) {
        return false
      }
      return true
    })
  }
  useEffect(() => {
    if (data) {
      const filtered = filterJobs(data, title)
      setFilteredJobs(filtered)
    }
  }, [data, title])

  function handleTitle(data) {
    setTitle(data.value)
  }

  if (error) {
    return <div>failed to load</div>
  }
  if (isLoading) {
    return <Spinner />
  }
  if (data && data.length > 0) {
    return (
      <section className='w-screen'>
        <div className='mt-4 mx-10'>
          <div className='flex flex-row justify-between items-center '>
            <h1 className='text-2xl text-[#4D4D4D] font-bold text-left my-5'>
              Featured <span className='text-[#1C4980]'>Jobs On GradUp</span>
            </h1>
            <div className='sm:block hidden '>
              <Select
                className='w-[200px] z-50'
                options={list}
                placeholder='Filter here'
                defaultValue={title}
                onChange={handleTitle}
                isSearchable={false}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 40,
                })}
              />
            </div>
          </div>
          <div className='w-full h-full overflow-x-auto whitespace-nowrap mt-5'>
            <Marquee className='max-w-[100%] ' pauseOnHover={true}>
              {filteredJobs.map((job) => (
                <div
                  className=' inline-block p-2 cursor-pointer'
                  onClick={() => router.push(`/jobs/${job._id}`)}
                >
                  <JobCard data={job} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    )
  }

  return null
}
export default Job
