import { connectToDB } from '@utils/database'
import HR from '@models/hr'
import { NextResponse } from 'next/server'

export const PUT = async (req) => {
  try {
    await connectToDB()

    const currDate = new Date()

    const hr = await HR.find({
      endDate: { $lt: currDate },
    })

    const updatePromises = hr.map(async (data) => {
      data.premium = false
      await data.save()
    })

    await Promise.all(updatePromises)
    console.log('done')
    return NextResponse.json({ status: 200 })
  } catch (error) {
    return new Response('Failed to update HR Details', {
      status: 500,
    })
  }
}
