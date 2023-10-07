import { connectToDB } from '@utils/database'
import HR from '@models/hr'

export const PUT = async (req) => {
  try {
    await connectToDB()
    const request = await req.json()
    const { email, startDate, endDate } = request
    console.log(startDate, endDate, email)
    const premium = true
    const hrDetails = await HR.findOneAndUpdate(email, {
      premium,
      startDate,
      endDate,
    })
    console.log(hrDetails)
    return new Response(JSON.stringify(hrDetails), { status: 201 })
  } catch (error) {
    return new Response('Failed to get HR Details', {
      status: 500,
    })
  }
}
