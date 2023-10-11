import { connectToDB } from '@utils/database'
import Hackathon from '@models/hackathon'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  try {
    await connectToDB()

    const hackathonDetails = await Hackathon.find({})
    return NextResponse.json(hackathonDetails, { status: 200 })
  } catch (error) {
    return new Response('Failed to get Hackathon Details', {
      status: 500,
    })
  }
}

export async function POST(request) {
  try {
    await connectToDB()

    const reqBody = await request.json()

    const {
      logo,
      title,
      organizer,
      registerEndDate,
      hackathonStartDate,
      hackathonEndDate,
      description,
      applicant,
      rewards,
      link,
      poster,
      problem,
      tags,
    } = reqBody

    await Hackathon.create({
      logo,
      title,
      organizer,
      registerEndDate,
      hackathonStartDate,
      hackathonEndDate,
      description,
      applicant,
      rewards,
      link,
      poster,
      problem,
      tags,
    })
    return NextResponse.json({ message: 'Hackathon created' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
