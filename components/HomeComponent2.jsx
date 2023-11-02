import { FiUsers } from 'react-icons/fi'
import { MdOutlineDiversity2 } from 'react-icons/md'
import { FcIdea } from 'react-icons/fc'
import { BsCreditCard2Back } from 'react-icons/bs'
const HomeComponent2 = () => {
  return (
    <section className='w-screen'>
      <div className='flex flex-wrap font-inter mt-5 bg-[#F5F7FA]  text-[#4D4D4D] justify-center py-10 mx-2'>
        <div className='text-left w-full flex flex-col justify-center sm:w-[50%] sm:px-10 sm:pl-[100px]'>
          <h1 className='font-bold sm:text-4xl text-xl'>
            The best quality of courses from
            <span className='text-[#1C4980] font-bold sm:text-4xl  text-xl text-left'>
              {' '}
              top institutions
            </span>
          </h1>

          <p className='mt-2 text-[#4D4D4D] sm:text-md text-sm'>
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className='flex flex-warp text-left gap-10 items-center justify-center  w-full sm:w-[50%] sm:mt-0 mt-5'>
          <div className='space-y-5'>
            <div className='flex flex-row gap-2'>
              <FiUsers size={50} color='#1C4980' />
              <div className='flex flex-col'>
                <span className='font-bold text-xl '>15000+</span>
                <span className='text-[#717171] text-sm'>Students</span>
              </div>
            </div>
            <div className='flex flex-row gap-2'>
              <MdOutlineDiversity2 size={50} color='#1C4980' />
              <div className='flex flex-col'>
                <span className='font-bold text-xl'>150+</span>
                <span className='text-[#717171] text-sm'>Collaborations</span>
              </div>
            </div>
          </div>
          <div className='space-y-5'>
            <div className='flex flex-row gap-2'>
              <FcIdea size={50} color='#1C4980' />
              <div className='flex flex-col'>
                <span className='font-bold text-xl'>4.9+</span>
                <span className='text-[#717171] text-sm'>Overall Ratings</span>
              </div>
            </div>
            <div className='flex flex-row gap-2'>
              <BsCreditCard2Back size={50} color='#1C4980' />
              <div className=' flex flex-col '>
                <span className='font-bold text-xl'>21000+</span>
                <span className='text-[#717171] text-sm'>Active Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeComponent2
