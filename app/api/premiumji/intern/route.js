import { connectToDB } from '@utils/database'
import mongoose from 'mongoose'
import Job from '@models/job'
import PremiumJob from '@models/premiumjobs'
import HR from '@models/hr'
import { NextResponse } from 'next/server'

export async function GET(req) {
  try {
    await connectToDB()

    // Calculate the date two months ago from the current date
    const today = new Date()
    const twoMonthsAgo = new Date()
    twoMonthsAgo.setMonth(today.getMonth() - 2)
    const currentYear = today.getFullYear()
    const allJobs = await Job.aggregate([
      {
        $match: {
          postedDate: {
            $gte: twoMonthsAgo,
            $lte: today,
          },
          $or: [{ isIntern: true }, { isStartUp: true }],
        },
      },
      {
        $addFields: {
          postedYear: { $year: '$postedDate' },
          currentYear: { $year: today },
        },
      },

      {
        $match: {
          postedYear: currentYear,
        },
      },
    ])

    const data = []

    for (const job of allJobs) {
      const hr = await HR.findById(job.hrId)
      if (hr && hr.premium) {
        data.push(job)
      }
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    })
  }
}
/*
export async function GET(req) {
  try {
    await connectToDB()
    const data = await PremiumJob.find({ isIntern: true })
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
*/
export async function POST(req) {
  try {
    await connectToDB()
    /*
    const reqBody = await request.json()
    const {
      hrId,
      aboutCompany,
      logo,
      isStartUp,
      title,
      location,
      isIntern,
      companyName,
      companyLink,
      duration,
      stipend,
      description,
      lastDate,
      expectedStartDate,
      skillsRequired,
      eligiblilty,
      perks,
      noOfOpenings,
      workingHours,
      postedDate,
      responsilities,
      appliedCandidates,
      isActive,
    } = reqBody
    await Courses.create({
      hrId,
      aboutCompany,
      logo,
      isStartUp,
      title,
      location,
      isIntern,
      companyName,
      companyLink,
      duration,
      stipend,
      description,
      lastDate,
      expectedStartDate,
      skillsRequired,
      eligiblilty,
      perks,
      noOfOpenings,
      workingHours,
      postedDate,
      responsilities,
      appliedCandidates,
      isActive,
    })
    */
    return NextResponse.json(
      { message: 'premium job created' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
