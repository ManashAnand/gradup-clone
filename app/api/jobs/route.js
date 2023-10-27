import { connectToDB } from '@utils/database'
import Job from '@models/job'
import HR from '@models/hr'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  console.log("Entered the api of jobs ");
  try {
    console.log("Entered the try block api of jobs ");
    await connectToDB()
    const today = new Date()
    const twoMonthsAgo = new Date()
    twoMonthsAgo.setMonth(today.getMonth() - 2)
    const currentYear = today.getFullYear()

    console.log("Before the wait aggregate function ");

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

    console.log("Before the for loopssssssssssssss ");

    for (const job of allJobs) {
      const hr = await HR.findById(job.hrId)
      job.premium = hr ? hr.premium : false
      if (hr && hr.premium) {
        premiumJobs.push(job)
      }
    }

    console.log("Before the concat and filter optionsssssssss ");

    const nonPremiumJobs = allJobs.filter((job) => !premiumJobs.includes(job))
    const data = premiumJobs.concat(nonPremiumJobs)

    console.log("Herre is the list of all jobs from /api/jobs API ",data);
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log("Inside the error blockssssssssssssss ");
    return new Response(error, {
      status: 500,
    })
  }
}

export async function DELETE(req) {
  try {
    await connectToDB()
    console.log('here')
    const url = new URL(req.url)

    const jobId = url.searchParams.get('jobId')

    const hrId = url.searchParams.get('hrId')
    await Job.findByIdAndRemove(jobId)
    const hr = await HR.findById(hrId)
    const jobIndex = hr.posts.findIndex((job) => job._id.toString() === jobId)
    hr.posts.splice(jobIndex, 1)
    await hr.save()
    console.log('done')
    return NextResponse.json({ message: 'deleted' }, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
