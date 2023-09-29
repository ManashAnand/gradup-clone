import Payment from '@models/payment'
import axios from 'axios'
import SHA256 from 'crypto-js/sha256'
export const POST = async (request) => {
  try {
    //after successful payment
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    const email = url.searchParams.get('email')

    const body = await request.text()
    const dataObject = {}
    body.split('&').forEach((pair) => {
      const [key, value] = pair.split('=')
      dataObject[key] = decodeURIComponent(value)
    })

    const { merchantId, transactionId } = dataObject
    const saltKey = process.env.SALT_KEY
    const saltIndex = 1
    const finalXHeader =
      SHA256(`/pg/v1/status/${merchantId}/${transactionId}` + saltKey) +
      '###' +
      saltIndex

    //Check Status API
    const response = await axios.get(
      `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
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

    console.log(response.data.data)
    if (response.data.data.responseCode == 'SUCCESS') {
      try {
        const userId = email
        const courseId = id
        console.log(courseId)
        const response = await fetch('/api/enrolledcourses', {
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
      } catch (error) {
        console.log('Error during enrollment:', error)
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

    return Response.redirect('/mycourses', 302)
  } catch (error) {
    console.error(error)
    return new Response({ error: 'Internal server error' })
  }
}
