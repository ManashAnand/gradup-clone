import SHA256 from 'crypto-js/sha256'
export const POST = async (request) => {
  const { amount, id, email, type } = await request.json()
  const amountInCents = Number(amount) * 100
  const ids = id.join(',')

  // Function to generate a unique merchantTransactionId
  function generateMerchantTransactionId() {
    const timestamp = Date.now()
    const randomId = Math.floor(Math.random() * 900000000) + 1000000000 // Generate a random 6-digit number
    return `MT${timestamp}${randomId}`.toString()
  }
  const mtID = generateMerchantTransactionId()
  try {
    const data = {
      merchantId: process.env.MERCHANTID,
      merchantTransactionId: mtID,
      merchantUserId: 'MUID123',
      amount: amountInCents,
      redirectUrl: 'https://www.gradup.in/mycourses',
      redirectMode: 'REDIRECT',
      callbackUrl: `https://www.gradup.in/api/callback?id=${ids}&email=${email}&mid=${mtID}&type=${type}`,
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    }
    const jsondata = JSON.stringify(data)
    const saltKey = process.env.SALT_KEY
    const saltIndex = 1
    const encode = Buffer.from(jsondata).toString('base64')
    const string = encode + '/pg/v1/pay' + saltKey
    const sha256 = SHA256(string).toString()
    const finalXHeader = sha256 + '###' + saltIndex
    const apiUrl = 'https://api.phonepe.com/apis/hermes/pg/v1/pay'
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
      throw new Error(`Failed to make a POST request to ${apiUrl}`)
    }
    const responseData = await response.json()

    //Redirect the user to the PhonePe payment page
    if (responseData.data && responseData.data.instrumentResponse) {
      const redirectInfoUrl =
        responseData.data.instrumentResponse.redirectInfo.url

      return new Response(JSON.stringify(redirectInfoUrl))
    } else {
      console.error('Failed to initiate PhonePe payment.')
    }
  } catch (err) {
    console.log(err)
    return new Response(err)
  }
}
