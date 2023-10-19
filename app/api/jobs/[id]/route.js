import { connectToDB } from '@utils/database'
import Job from '@models/job'
import mongoose from 'mongoose'
export const GET = async (request, { params }) => {
  try {
    await connectToDB()
    console.log(params.id)
    if (params.id != 'undefined') {
      const userDetails = await Job.findOne({
        _id: new mongoose.Types.ObjectId(params.id),
      })
      return new Response(JSON.stringify(userDetails), { status: 201 })
    }
    return new Response('Error', { status: 500 })
  } catch (error) {
    return new Response('Failed to get User Details', {
      status: 500,
    })
  }
}
