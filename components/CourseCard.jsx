import { FaBook } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { BiSolidUser } from 'react-icons/bi'
import { AiFillTrophy } from 'react-icons/ai'

const CustomCard = ({ image, title, url }) => {
  const router = useRouter()
  return (
    <div className='w-[300px] p-2 border border-[#E0E3EB] rounded-lg font-roboto text-[#1C4980]'>
      <img className=' w-[100%] h-[200px] rounded-xl' src={image} alt={title} />
      <div>
        <h1 className='text-sm text-left mt-2 font-bold ml-2 '>{title}</h1>
        <div className='mt-3 text-sm flex flex-wrap gap-2 justify-evenly'>
          <div className='flex flex-row gap-2'>
            <FaBook className='mt-1' />
            <span>3 months</span>
          </div>
          <div className='flex flex-row gap-2'>
            <BiSolidUser className='mt-1' />
            <span>15K+</span>
          </div>
          <div className='flex flex-row gap-2'>
            <AiFillTrophy className='mt-1' />
            <span>1 months</span>
          </div>
        </div>
        <div className='flex items-left ml-2'>
          <a className='text-sm mt-2' href={url}>
            view details {'->'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default CustomCard
