import { connectToDB } from '@utils/database'
import Job from '@models/job'
import PremiumJob from '@models/premiumjobs'
import mongoose from 'mongoose'
import HR from '@models/hr'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    console.log('here')
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
          $and: [{ isIntern: false }, { isStartUp: false }],
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
    console.log(data)
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}

export async function DELETE(req) {
  try {
    await connectToDB()
    const data = await PremiumJob.find({ isIntern: false })
    return NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
