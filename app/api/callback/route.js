import Payment from '@models/payment'
import axios from 'axios'
import SHA256 from 'crypto-js/sha256'
export const POST = async (request) => {
  try {
    //after successful payment
    const url = new URL(request.url)
    const ids = url.searchParams.get('id')
    const email = url.searchParams.get('email')
    const id = ids.split(',')
    const merchantId = process.env.MERCHANTID
    const transactionId = url.searchParams.get('mid')
    const saltKey = process.env.SALT_KEY
    const saltIndex = 1
    const finalXHeader =
      SHA256(`/pg/v1/status/${merchantId}/${transactionId}` + saltKey) +
      '###' +
      saltIndex

    //Check Status API
    const response = await axios.get(
      `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${transactionId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          'X-VERIFY': finalXHeader,
          'X-MERCHANT-ID': merchantId,
        },
      }
    )
    const { merchantTransactionId, amount } = response.data.data
    if (response.data.data.responseCode == 'SUCCESS') {
      if (typeof id == 'number') {
        try {
          const currentDate = new Date()
          const startDate = currentDate
          const endDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + id,
            currentDate.getDate()
          )
          if (endDate <= currentDate) {
            endDate.setMonth(endDate.getMonth() + id)
          }
          const response = await fetch('https://www.gradup.in/api/premium', {
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
        } catch (error) {
          console.log('Error during HR premium:', error)
        }
      } else {
        try {
          const userId = email
          const courseId = id
          console.log(courseId)
          const response = await fetch(
            'https://www.gradup.in/api/enrolledcourses',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ userId, courseId }),
            }
          )

          if (response.ok) {
            console.log('enrolled successfully:')
          } else {
            console.log('Enrollment failed:', response.status)
          }
        } catch (error) {
          console.log('Error during enrollment:', error)
        }
      }
    }

    //DB storage
    await Payment.create({
      merchantId,
      transactionId: transactionId,
      merchantTransactionId: merchantTransactionId,
      amount: amount,
    })
    //
    // payment Success Response

    return Response.redirect('https://www.gradup.in/mycourses', 302)
  } catch (error) {
    console.error(error)
    return new Response({ error: 'Internal server error' })
  }
}
