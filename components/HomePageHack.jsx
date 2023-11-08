'use client'
import { FaUsers, FaTeamspeak } from 'react-icons/fa'
import { BsClock } from 'react-icons/bs'

import Spinner from '@components/Spinner'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import Marquee from 'react-fast-marquee'

import HackathonCard from '@components/HackathonCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const HomePageHack = () => {
  const router = useRouter()
  const { data, error, isLoading } = useSWR('/api/hackathon', fetcher)

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
              Featured{' '}
              <span className='text-[#1C4980]'>Hackathons On GradUp</span>
            </h1>
          </div>
          <div className='w-full h-full flex  overflow-x-auto whitespace-nowrap mt-5 items-center gap-5  '>
            <Marquee className='max-w-[100%]' pauseOnHover={true}>
              {data.map((item, index) => (
                <div
                  className='my-5 mx-2 inline-block p-2 cursor-pointer w-[400px] h-[200px] shadow-lg border border-gray-400 rounded-lg  flex-shrink-0'
                  onClick={() => router.push(`/hackathons/${item._id}`)}
                >
                  <div className='flex flex-row gap-4 ml-4 mb-4'>
                    <img
                      src={item.logo}
                      className='w-[75px] mr-10 h-[75px] border border-gray-300 rounded-md '
                    />
                    <div className='flex flex-col justify-center gap-2 text-left'>
                      <h3 className='font-bold text-lg'>{item.title}</h3>
                      <p>{item.organizer}</p>
                    </div>
                  </div>
                  <hr className='border-1 border-gray-600 mx-4 my-2'></hr>
                  <div>
                    <div className='flex flex-wrap gap-2 mx-4 my-4'>
                      {item.tags.map((tag) => (
                        <p className='px-2 py-1 bg-gray-300 rounded-md text-sm '>
                          {tag}
                        </p>
                      ))}
                    </div>
                    <div className='flex flex-row gap-4 justify-around my-4'>
                      <div className='flex flex-row gap-2'>
                        <BsClock className='mt-1' />
                        <p>Hybrid</p>
                      </div>
                      <div className='flex flex-row gap-2'>
                        <FaTeamspeak className='mt-1' />
                        <p>2-3</p>
                      </div>
                      <div className='flex flex-row gap-2'>
                        <FaUsers className='mt-1' />
                        <p>{item.applicant.length}</p>
                      </div>
                    </div>
                  </div>
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
export default HomePageHack
