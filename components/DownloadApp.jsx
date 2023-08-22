import React from 'react'

export default function Download() {
  return (
    <div
      style={{ backgroundColor: 'cornflowerblue' }}
      className=' w-screen p-5 flex flex-col lg:flex-row mx-4 lg:mx-0 items-center justify-evenly'
    >
      <img
        className='mb-6 mx-4 lg:mx-0'
        width='500'
        src='/assets/images/mobileapp.png'
        alt='mobile-app'
      ></img>
      <div className='flex flex-col'>
        <p className='textform text-left ml-4 text-lg text-rose-50'>
          Apply for Jobs and Internships, enhance your careers by our upskilling
          courses & trainings modules and do much more from the gadget you adore
          - <span className='font-bold text-red-50'>Your Smartphone</span>{' '}
        </p>
        <img
          width='220'
          className='-mt-6'
          src='/assets/images/plays.png'
          alt='download'
        ></img>
      </div>
    </div>
  )
}
