'use client'
import { FaUsers, FaTeamspeak } from 'react-icons/fa'
import { BsClock } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const HackathonCard = ({ data, isSelected, onClick }) => {
  const router = useRouter()
  console.log(data)
  return (
    <div
      onClick={() => onClick(data)}
      className={` bg-white  text-[#010048] p-2 rounded-md my-2 cursor-pointer hover:shadow-lg w-full ${
        isSelected ? 'border border-[#010048]' : ''
      }`}
    >
      <div className='flex flex-row gap-4 ml-4 mb-4'>
        <img src={data.logo} className='h-[5rem] w-20 rounded-md border-2 ' />
        <div className='flex flex-col justify-center gap-2 text-left'>
          <h3 className='font-bold text-lg'>{data.title}</h3>
          <p>{data.organizer}</p>
        </div>
      </div>
      <hr className='border-1 border-gray-600 mx-4 my-2'></hr>
      <div>
        <div className='flex flex-row gap-2 mx-4 my-4'>
          {data.tags.map((tag) => (
            <p className='px-2 py-1 bg-gray-300 rounded-md text-sm '>{tag}</p>
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
            <p>{data.applicant.length}</p>
          </div>
          <div>
            <button
              onClick={() => router.push(`/hackathons/${data._id}`)}
              className=' px-4 bg-blue-500 rounded-sm'
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HackathonCard
