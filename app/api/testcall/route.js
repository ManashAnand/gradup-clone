import Payment from '@models/payment'
import { NextResponse } from 'next/server'
export const POST = async (request) => {
  try {
    //after successful payment
    const url = new URL(request.url)
    const ids = '12'
    const email = url.searchParams.get('email')
    const id = ids.split(',')
    const type = 'premium'
    if (type == 'premium') {
      const num = Number(id)
      const currentDate = new Date()
      const startDate = currentDate

      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + num,
        currentDate.getDate()
      )
      if (endDate <= currentDate) {
        endDate.setMonth(endDate.getMonth() + num)
      }
      console.log(startDate, endDate, email)
      const response = await fetch('http://localhost:3000/api/premium', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, startDate, endDate }),
      })

      if (response.ok) {
        console.log('HR premium successfully:')
      } else {
        console.log('HR premium failed:', response.status)
      }
      return NextResponse.json({ message: 'Hurray' }, { status: 200 })
    }
  } catch (error) {
    console.error(error)
    return new Response({ error: 'Internal server error' })
  }
}
