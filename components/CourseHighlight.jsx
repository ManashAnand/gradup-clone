import { GoVideo } from 'react-icons/go'
import { AiOutlineSchedule } from 'react-icons/ai'
import { FaRegHandshake } from 'react-icons/fa'
import { BsTools } from 'react-icons/bs'
import { TbMessages } from 'react-icons/tb'
import { GiProgression } from 'react-icons/gi'
import { SlCalender } from 'react-icons/sl'
import { PiCertificateLight } from 'react-icons/pi'

const CourseHighlight = () => {
  return (
    <div className='mt-5'>
      <h1 className=' text-white text-4xl font-bold'>Course Highlights</h1>
      <div className='flex flex-wrap justify-between mt-10'>
        <div className='courseDes'>
          <div>
            <GoVideo size={50} style={{ color: 'white' }}></GoVideo>
          </div>
          <div className='ml-2'>
            <h5 className='text-white text-lg font-bold text-left'>
              Learn Online
            </h5>
            <p className='text-white text-lg text-left'>At your own schedule</p>
          </div>
        </div>
        {/* 2nd  */}
        <div className='courseDes '>
          <div>
            <PiCertificateLight
              size={50}
              style={{ color: 'white' }}
            ></PiCertificateLight>
          </div>
          <div className='ml-2'>
            <h5 className='text-white text-lg font-bold text-left'>
              Certificate of training
            </h5>
            <p className='text-white text-lg text-left'>From Gradup training</p>
          </div>
        </div>
        {/* 3rd */}
        <div className='courseDes'>
          <div>
            <FaRegHandshake
              size={50}
              style={{ color: 'white' }}
            ></FaRegHandshake>
          </div>
          <div className='ml-2'>
            <h5 className='text-white text-lg font-bold text-left'>
              Placement assistance
            </h5>
            <p className='text-white text-lg text-left'>To build your career</p>
          </div>
        </div>
        {/* 4th */}
        <div className='courseDes'>
          <div>
            <BsTools size={40} style={{ color: 'white' }}></BsTools>
          </div>
          <div className='ml-2'>
            <h5 className='text-white text-lg font-bold text-left'>
              1 project & 5 assignments
            </h5>
            <p className='text-white text-lg text-left'>
              For hands-on practice
            </p>
          </div>
        </div>
        {/* 5th */}
        <div className='courseDes'>
          <div>
            <TbMessages size={50} style={{ color: 'white' }}></TbMessages>
          </div>
          <div className='ml-2'>
            <h5 className='text-white text-lg font-bold text-left'>
              Doubt clearing
            </h5>
            <p className='text-white text-lg text-left'>Through Q&A forum</p>
          </div>
        </div>
        {/* 6th */}
        <div className='courseDes'>
          <div>
            <GiProgression size={50} style={{ color: 'white' }}></GiProgression>
          </div>
          <div className='ml-2'>
            <h5 className='text-white text-lg font-bold text-left'>
              Beginner friendly
            </h5>
            <p className='text-white text-lg text-left'>
              No prior knowledge required
            </p>
          </div>
        </div>

        {/* 7th */}
        <div className='courseDes'>
          <div>
            <SlCalender size={50} style={{ color: 'white' }}></SlCalender>
          </div>
          <div className='ml-2'>
            <h5 className='text-white text-lg font-bold text-left'>
              Lifetime Access
            </h5>
            <p className='text-white text-lg text-left'>Buy only once</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseHighlight
