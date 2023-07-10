import React from 'react'

const page = () => {
  return (
    <div className='w-screen headingbox2'>
    <div className='my-10 w-4/5 mx-auto'>
        <p className='text-xl textnew text-white'>GradUp Blogs</p>
        <p className='textnew text-white mt-2'>Be the first to know about our founder, mentors and updates on hiring opportunities, exams, & college events and ace your interviews with placement tips.</p>
        <img className='mt-10 mx-auto h-80' width="600" src="/assets/images/blog.png"></img>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-32 my-20'>
      <p>My name is Mohit</p>
      <p>My name is Ajay</p>
    </div>
    </div>
  )
}

export default page