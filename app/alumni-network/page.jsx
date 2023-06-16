"use client"
import AlumniFilter from '@components/alumni/AlumniFilter'
import AlumniShow from '@components/alumni/AlumniShow'
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [selectedCollege, setSelectedCollege]=useState()
  return (
    <>
      <div className="alumnitop w-full">
        <div className="my-auto">
         <p className="text-4xl text mb-4">Alumni Network</p>
         <p><em>"Nobody is bothered about its institution more than<br/>its Alumni"</em></p>
        </div>
        <img width="400" src="/assets/images/alumni.png"></img>
      </div>
      <div>
        <AlumniFilter setSelectedCollege={setSelectedCollege} />
        <AlumniShow selectedCollege={selectedCollege}/>
      </div>
    </>
  )
}

export default page