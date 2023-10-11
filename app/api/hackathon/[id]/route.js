import { connectToDB } from '@utils/database'
import Hackathon from '@models/hackathon'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
export const GET = async (req, { params }) => {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const path = url.pathname
    const id = path.split('hackathon/')[1]
    console.log(id)
    const hackathonDetails = await Hackathon.findOne({ _id: id })
    console.log(hackathonDetails)
    return new Response(JSON.stringify(hackathonDetails), { status: 201 })
  } catch (error) {
    return new Response('Failed to get Hackathon Details', {
      status: 500,
    })
  }
}
