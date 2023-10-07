import React from 'react'
import styles from './styles.module.css'

const page = () => {
  return (
    <div className='w-full'>
      <p className={`text-center text-white underline decoration-white underline-offset-8 ${styles["animate-charcter"]} ${styles["textnew"]} text-5xl font-semibold my-12`}>Important Case Studies</p>
    <div className=" my-16 flex flex-wrap justify-evenly items-center">
      <a target="_blank" href="https://www.researchgate.net/publication/354392187_Gender_Gap_in_engineering_and_medical_Colleges_in_India" style={{cursor:"pointer"}} >
     <img style={{height:"30vh"}} className="mt-10 mx-auto" width="300" src="/assets/images/gendergap.png" alt="casestudy"></img>
     <p className="text-white text-xl text-center mt-3">Gender Gap in Engineering</p>
     <div className='flex justify-center my-4'>
     <button className=' bg-blue-600 text-white px-5 py-1 rounded-md'>Read More</button>
     </div>
     </a>
     <a target="_blank" href="https://m.economictimes.com/jobs/only-one-in-ten-students-from-tier-2-3-engineering-colleges-are-readily-employable-purpleleap-survey/articleshow/15161643.cms" style={{cursor:"pointer"}}>
     <img style={{height:"30vh"}} className="mt-10 mx-auto" width="300" src="/assets/images/tiercollege.png" alt="casestudy"></img>
     <p className="text-white text-xl text-center mt-3">Tier-1 Vs Tier-2 & Tier-3</p>
     <div className='flex justify-center my-4'>
     <button className=' bg-blue-600 text-white px-5 py-1 rounded-md'>Read More</button>
     </div>
     </a>
     </div>
  </div>
  )
}

export default page