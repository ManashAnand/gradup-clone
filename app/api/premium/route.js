import { connectToDB } from '@utils/database'
import HR from '@models/hr'
import mongoose from 'mongoose'

export const PUT = async (req) => {
  try {
    await connectToDB()
    const { email, startDate, endDate } = req.body
    const premium = true
    const hrDetails = await HR.findByIdAndUpdate(email, {
      premium,
      startDate,
      endDate,
    })
    return new Response(JSON.stringify(hrDetails), { status: 201 })
  } catch (error) {
    return new Response('Failed to get HR Details', {
      status: 500,
    })
  }
}
