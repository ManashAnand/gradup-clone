import Payment from '@models/payment'
export const POST = async (request) => {
  try {
    //after successful payment
    const url = new URL(request.url)
    //const ids = url.searchParams.get('id')
    const ids = '6502b33ccb21574810bcba26'
    const email = url.searchParams.get('email')
    const id = ids.split(',')

    const userId = email
    const courseId = id
    console.log(courseId)
    const response = await fetch('http://localhost:3000/api/enrolledcourses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, courseId }),
    })

    if (response.ok) {
      console.log('enrolled successfully:')
    } else {
      console.log('Enrollment failed:', response.status)
    }

    return Response.redirect('http://localhost:3000/mycourses', 302)
  } catch (error) {
    console.error(error)
    return new Response({ error: 'Internal server error' })
  }
}
