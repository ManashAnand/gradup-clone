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
    const type = url.searchParams.get('type')
    const merchantId = process.env.MERCHANTID
    const transactionId = url.searchParams.get('mid')
    const saltKey = process.env.SALT_KEY
    const saltIndex = 1
    console.log('type of request', type)
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
    let redirect = ''
    const { merchantTransactionId, amount } = response.data.data
    if (response.data.data.responseCode == 'SUCCESS') {
      if (type == 'premium') {
        try {
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
        redirect = 'hr'
      } else if (type == 'enrollment') {
        try {
          const userId = email
          const courseId = id
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
          redirect = 'mycourses'
        } catch (error) {
          console.log('Error during enrollment:', error)
        }
      } else {
        try {
          // call mail
          const response = await fetch('https://www.gradup.in/api/mailer', {
            method: 'POST',

            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, id, mid, amount }),
          })

          if (response.ok) {
            console.log('mail sent successfully:')
          } else {
            console.log('mail failed:', response.status)
          }
          redirect = 'cart'
        } catch (error) {
          console.log('error in carrer services', error)
          console.log('Error during sending mail:', error)
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

    return Response.redirect(`https://www.gradup.in/${redirect}`, 302)
  } catch (error) {
    console.error(error)
    return new Response({ error: 'Internal server error' })
  }
}
