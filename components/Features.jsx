'use client'
import { useRouter } from 'next/navigation'
const data = [
  { head: 'Full Time', sec: 'Jobs', link: '/jobs' },
  { head: 'Paid', sec: 'Internships', link: '/jobs' },
  { head: 'Upskilling', sec: 'Courses', link: '/courses' },
  { head: 'Participate', sec: 'Hackathons', link: '/hackathons' },
  { head: 'Startup Live ', sec: 'Projects', link: '/jobs' },
  {
    head: 'Carreer',
    sec: 'Services',
    link: '/about-us/our-services-content/career',
  },
]
const Features = () => {
  const router = useRouter()
  return (
    <div className='bg-[#E0E3EB] py-10'>
      <h1 className='text-3xl font-bold text-center font-lexend text-[#4D4D4D]'>
        Our Key <span className='text-[#1C4980]'>Features</span>
      </h1>
      <div className='flex flex-wrap  justify-center items-center sm:gap-10 gap-5 mt-5'>
        {data.map((item) => {
          return (
            <div
              className='bg-white font-inter rounded-md font-semibold pl-6 text-left w-[200px] h-[100px] flex flex-col items-start justify-center cursor-pointer'
              onClick={() => router.push(item.link)}
            >
              <h1 className='text-[#4D4D4D]'>{item.head}</h1>
              <h1 className='text-[#1C4980]'>{item.sec}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Features
