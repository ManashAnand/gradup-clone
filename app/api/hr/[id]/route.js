import { connectToDB } from '@utils/database'
import HR from '@models/hr'

export const GET = async (req, { params }) => {
  try {
    await connectToDB()
    if (params.id != 'undefined') {
      const hrDetails = await HR.findById(params.id) //'6508264ecd916628ace03967'
      return new Response(JSON.stringify(hrDetails), { status: 201 })
    }
    return new Response('Error', { status: 500 })
  } catch (error) {
    return new Response('Failed to get HR Details', {
      status: 500,
    })
  }
}
