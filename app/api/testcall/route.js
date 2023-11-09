import { NextResponse } from 'next/server'
export const POST = async (request) => {
  try {
    //after successful payment
    console.log('here')
    const url = new URL(request.url)
    const ids = url.searchParams.get('ids')
    const email = url.searchParams.get('email')
    const id = ids.split(',')
    const mid = 'adsfasdfa'
    const amount = url.searchParams.get('amount')
    const type = url.searchParams.get('type')
    let redirect
    console.log(id, amount, type)
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
    } else {
      try {
        // call mail
        console.log(email, id)
        const response = await fetch('http://localhost:3000/api/mailer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, id, mid, amount, type }),
        })

        if (response.ok) {
          console.log('mail sent successfully:')
          redirect = 'cart'
        } else {
          console.log('mail failed:', response.status)
        }
      } catch (error) {
        console.log('Error during sending mail:', error)
      }
    }
    return Response.redirect(`http://localhost:3000.in/${redirect}`, 302)
  } catch (error) {
    console.error(error)
    return new Response({ error: 'Internal server error' })
  }
}
