import crypto from 'crypto'
export const POST = async (request) => {
  const { amount, id, email } = await request.json()

  const amountInCents = Number(amount) * 100
  // Function to generate a unique merchantTransactionId
  function generateMerchantTransactionId() {
    const timestamp = Date.now()
    const randomId = Math.floor(Math.random() * 900000000) + 1000000000 // Generate a random 6-digit number
    return `MT${timestamp}${randomId}`
  }

  try {
    const data = {
      merchantId: process.env.MERCHANTID,
      merchantTransactionId: generateMerchantTransactionId(),
      merchantUserId: 'MUID123',
      amount: amountInCents,
      redirectUrl: `/callback?id=${id}&email=${email}`,
      redirectMode: 'POST',
      callbackUrl: 'api/callback',
      mobileNumber: '9999999999',
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    }

    const saltKey = process.env.SALT_KEY
    const saltIndex = 1
    const encode = Buffer.from(JSON.stringify(data), 'utf8').toString('base64')
    const string = encode + '/pg/v1/pay' + saltKey
    const sha256 = require('crypto')
      .createHash('sha256')
      .update(string)
      .digest('hex')

    const finalXHeader = sha256 + '###' + saltIndex
    const apiUrl = 'https://api.phonepe.com/apis/hermes'
    const requestData = {
      request: encode,
    }
    const headers = {
      'Content-Type': 'application/json',
      'X-VERIFY': finalXHeader,
    }
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    })

    if (!response.ok) {
      throw new Error(`Failed to make a POST request to ${url}`)
    }
    const responseData = await response.json()
    console.log('**************', responseData)

    //Redirect the user to the PhonePe payment page
    if (responseData.data && responseData.data.instrumentResponse) {
      const redirectInfoUrl =
        responseData.data.instrumentResponse.redirectInfo.url

      return new Response(JSON.stringify(redirectInfoUrl))
    } else {
      console.error('Failed to initiate PhonePe payment.')
    }
  } catch (err) {
    // console.log(err);
    return new Response(err)
  }
}
