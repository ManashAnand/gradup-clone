import React from 'react'
import userProfile from '../../public/login.jpg'
import Image from 'next/image'

const ExpertProfile = () => {
  return (
    <>
     
<div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
    

<Image class="rounded-t-lg bg-red-500 z-40 w-full" height={200}  src={userProfile} alt="" />

    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-left">Lorem ipsum .</h5>
     
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque alias tempora perspiciatis sint excepturi.
        </p>
      
    </div>
</div>

    </>
  )
}

export default ExpertProfile
