"use client"
import AlumniFilter from '@components/alumni/AlumniFilter'
import AlumniShow from '@components/alumni/AlumniShow'
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [selectedCollege, setSelectedCollege]=useState()
  return (
    <div>
        <AlumniFilter setSelectedCollege={setSelectedCollege} />
        <AlumniShow selectedCollege={selectedCollege}/>
    </div>
  )
}

export default page