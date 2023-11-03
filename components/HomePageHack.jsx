'use client'
import JobCard from '@components/jobs/JobCard'
import Spinner from '@components/Spinner'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import styles from '@components/CoursesOnHome/styles.module.css'
import HackathonCard from '@components/HackathonCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const HomePageHack = () => {
  const { data, error, isLoading } = useSWR('/api/hackathon', fetcher)

  if (error) {
    return <div>failed to load</div>
  }
  if (isLoading) {
    return <Spinner />
  }
  if (data && data.length > 0) {
    console.log(data)
    return (
      <section className='w-screen'>
        <div className='mt-4 mx-5'>
          <div className='flex flex-row justify-between items-center '>
            <h1 className='text-2xl text-[#4D4D4D] font-bold text-left my-5'>
              Featured{' '}
              <span className='text-[#1C4980]'>Hackathons On GradUp</span>
            </h1>
          </div>
          <div className='w-full h-full flex overflow-x-auto whitespace-nowrap mt-5 justify-center items-center gap-3'>
            {data.map((item, index) => (
              <div className=' inline-block p-2 cursor-pointer w-[300px]  '>
                <div>
                  <img src={item.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return null
}
export default HomePageHack
