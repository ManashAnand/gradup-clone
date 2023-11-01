import React from 'react'
import styles from './styles.module.css'

export default function Download() {
  return (
    <section className='w-screen'>
      <div
        style={{ backgroundColor: 'cornflowerblue' }}
        className='sm:mx-0 mx-0 p-4 flex sm:flex-row flex-col items-center justify-around'
      >
        <img
          className='mb-6  '
          width='500'
          src='/assets/images/mobileapp.png'
          alt='mobile-app'
        ></img>

        <div className='flex flex-col  '>
          <p className={` text-left ml-4 text-lg text-rose-50`}>
            Apply for Jobs and Internships, enhance your careers by our
            upskilling courses & trainings modules and do much more from the
            gadget you adore -{' '}
            <span className='font-bold text-red-50'>Your Smartphone</span>{' '}
          </p>
          <img
            width='220'
            className='-mt-6'
            src='/assets/images/plays.png'
            alt='download'
          ></img>
        </div>
      </div>
    </section>
  )
}
