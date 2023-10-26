import { connectToDB } from '@utils/database'
import Job from '@models/job'
import HR from '@models/hr'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    await connectToDB()
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
    const premiumJobs = []
    for (const job of allJobs) {
      const hr = await HR.findById(job.hrId)
      job.premium = hr ? hr.premium : false
      if (hr && hr.premium) {
        premiumJobs.push(job)
      }
    }
    const nonPremiumJobs = allJobs.filter((job) => !premiumJobs.includes(job))
    const data = premiumJobs.concat(nonPremiumJobs)

    console.log("Herre is the list of all jobs from /api/jobs API ",data);
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}
