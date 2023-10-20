import { connectToDB } from '@utils/database'
import HR from '@models/hr'
import Job from '@models/job'
import mongoose from 'mongoose'
import Application from '@models/application'
import { NextResponse } from 'next/server'
let page = 1
const pageSize = 40

export const GET = async (req, { params }) => {
  try {
    await connectToDB()

    const hrId = params.id
    const jobid = params.jobid
    const search = new URL(req.url).search
    const urlParams = new URLSearchParams(search)
    page = urlParams.get('page')
    const job = await Job.findOne({ _id: jobid })
    if (hrId != job.hrId)
      return new Response("You don't have permission to view this.", {
        status: 500,
      })
    const hr = await HR.findById(hrId)

    const appliedCandiates = job.appliedCandidates
    const startIndex = (page - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize, appliedCandiates.length)
    let paginatedJobs
    if (startIndex >= appliedCandiates.length) {
      paginatedJobs = []
    } else {
      paginatedJobs = appliedCandiates.slice(startIndex, endIndex)
    }
    let appliedData = []
    for (let i = 0; i < paginatedJobs.length; i++) {
      const currUserData = await Application.findOne({
        _id: jobid + '_' + paginatedJobs[i],
      })
      const data = {
        ...currUserData._doc,
        premium: hr ? hr.premium : false,
      }
      appliedData.push(data)
    }
    return NextResponse.json(appliedData, { status: 200 })
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}
