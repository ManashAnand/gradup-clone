import CourseForm from '@components/CourseForm'

const SectionCard = ({
  id,
  title,
  description,
  registeredUsers,
  rating,
  price,
}) => {
  return (
    <div className='flex sm:flex-row flex-col bg-purple-500 w-full rounded-lg mt-10 mb-5 justify-between'>
      {/*text on left */}
      <div className='w-full sm:w-[50%] mt-8 ml-8  justify-start'>
        <p className='flex justify-start'>
          <span className='bg-yellow-300 rounded-lg text-lg font-bold pt-2 pb-2 pl-3 pr-3 '>
            Government Certified Online Training
          </span>
        </p>
        <h1 className='font-bold mt-5 text-white text-4xl text-left'>
          {title}
        </h1>
        <p className='font-bold text-white text-xl mt-5 text-left'>
          {description}
        </p>
        {/* for small info and tags */}
        <div className='rounded-lg flex flex-wrap mt-auto  font-bold'>
          <p className='bg-white mr-2 rounded-xl p-3 mt-2'>5 star</p>
          <p className='bg-white mr-2 rounded-xl p-3 mt-2'>
            {registeredUsers} Students
          </p>
          <p className='bg-white mr-2 rounded-xl p-3 mt-2'>
            Placement Assistance
          </p>
          <p className='bg-white mr-2 rounded-xl p-3 mt-2'>Flexible schedule</p>
        </div>
      </div>

      {/* form in right */}
      <div className='w-full sm:w-[50%] m-8  flex items-center justify-center'>
        <CourseForm price={price} id={id} />
      </div>
    </div>
  )
}

export default SectionCard

/**
 
  const bgImage = url

  const cardStyle = {
    backgroundImage: `url(${bgImage})`,
  }

  return (
    <div
      className='relative rounded-xl h-64 w-full bg-cover bg-center'
      style={cardStyle}
    >
      
      <div className='absolute inset-0 bg-gradient-to-br from-white-500 to-green-100 opacity-50 rounded-xl' />

      
      <div className='relative z-10 h-full w-[50%] bg-blue-900 overflow-hidden'>
        
        <span className='bg-yellow-300 rounded-lg pt-2 pb-2 pl-3 pr-3 font-bold text-lg ml-4 mt-5'>
          Government Certified Online Training
        </span>
        
      </div>
    </div>
  )
 */
