import React from 'react'
import styles from 'styles/Page.module.css'
const page = () => {
  return (
    <div className='w-screen px-10 pb-20 headingbox2'>
      <p className='text-4xl font-semibold textnew animate-charcter underline decoration-white underline-offset-8 text-white text-center mt-14 mb-8'>Solution to the Problem !!</p>
    <div className="">
      <div className="displaystyle gap-x-20 mb-10">
      <div className='text-white justice textnew widthsetter'>
      <h1 className='text-green-300 alignation text-3xl mt-10 mb-8'>Challenges of Finding Quality Internships</h1> 
      Finding quality internships is a major challenge for students in
      India. Many students struggle to find internships that suit their
      skills and interests, leading to frustration and missed
      opportunities. This can have a significant impact on their
      future career prospects and earning potential. For businesses,
      finding the right interns can be a time-consuming and costly
      process, with no guarantee of success. At GradUp, we
      understand the challenges faced by both students and
      businesses, and we're dedicated to providing a solution that
      benefits everyone. Our platform streamlines the internship
      process, making it easier for students to find quality
      internships and businesses to find the right interns.</div>
      <img width="300" className="mt-12" src="/assets/images/problem.png"></img>
      </div>
       <div className='displaystyle gap-x-20'>
      <div className='text-white justice textnew widthsetter'>
      <h1 className='text-green-300 text-3xl alignation mt-12 mb-8'>Simplifying the Internship Process</h1> 
      GradUp is a comprehensive platform that simplifies the internship
      process for both students and businesses. With our user-friendly
      interface, students can easily find internships tailored to their skill
      sets and interests, while businesses can access a pool of talented
      and motivated students. Our platform offers a range of features
      and benefits, including personalized internship recommendations,
      easy application tracking, and a secure messaging system. For
      businesses, our platform streamlines the intern recruitment
      process, saving time and money while ensuring the best possible
      matches. With GradUp, students and businesses can connect
      seamlessly, unlocking the full potential of the internship
      experience.</div>
      <img className='mt-10' width="300" src="/assets/images/solution.png"></img>
      </div>
    </div>
    </div>
  )
}

export default page