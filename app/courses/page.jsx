import React from 'react'
import styles from "styles/Page.module.css"
const Courses = () => {
  return (
    <div>
      <img className={styles.courseimage} src="/assets/images/maintenance.png" alt="coming-soon"></img>
      <h1 className='mt-5 font-semibold text-4xl'>
        <p className='text-center text-sky-700'>Our Courses will be Launched soon</p>
        <p className='text-center text-sky-700'>Stay Tuned !!</p>
      </h1>
    </div>
  )
}

export default Courses