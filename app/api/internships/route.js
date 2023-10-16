import { connectToDB } from '@utils/database'
import Job from '@models/job'
import HR from '@models/hr'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
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
          'application.postedDate': {
            $gte: twoMonthsAgo,
            $lte: today,
          },
          $or: [{ isIntern: true }, { isStartUp: true }],
        },
      },
      {
        $addFields: {
          postedYear: { $year: '$application.postedDate' },
          currentYear: { $year: today },
        },
      },
      {
        $match: {
          postedYear: currentYear,
        },
      },
    ])

    // Create an array to store jobs with HR premium status
    const premiumJobs = []

    // Loop through the jobs and query the HR premium status
    for (const job of allJobs) {
      const hr = await HR.findById(job.hrId)
      if (hr && hr.premium) {
        premiumJobs.push(job)
      }
    }

    // Create an array for non-premium jobs (those without a premium HR)
    const nonPremiumJobs = allJobs.filter((job) => !premiumJobs.includes(job))

    // Combine premium and non-premium jobs to send premium jobs on top
    const data = premiumJobs.concat(nonPremiumJobs)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}
