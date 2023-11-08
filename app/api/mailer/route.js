import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

function sendEmailAsync(receiverEmail, message, mid, amount, date) {
  const emailFrom = 'gradup.ops@gmail.com'
  const emailPassword = 'pcqdrtjdyefwdjzi'

  // Create a transporter using Gmail's SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailFrom,
      pass: emailPassword,
    },
  })

  // Email content
  const mailOptions = {
    from: emailFrom,
    to: receiverEmail.join(','),
    subject: 'Purchase Confirmation and Request Receipt - Thank You!',
    text: `
    Dear Customer,

We hope this email finds you well. We are writing to confirm your recent purchase with GradUp and to acknowledge that we have received your request. Your satisfaction is our top priority, and we are committed to providing you with the best possible service.

Purchase Details:
-----------------
Order Number: ${mid}
Date of Purchase: ${date}
Total Amount: ${amount}

Request Details:
----------------
Request Type: ${message}

We would like to inform you that your request is currently being processed by our dedicated team. We anticipate that it will take up to 2 days to complete your request and ensure it meets our high-quality standards.

Rest assured that we are working diligently to fulfill your request promptly. If you have any questions or need further assistance, please do not hesitate to contact our customer support team at gradup.ops@gmail.com.

Once again, thank you for choosing GradUp. We greatly value your trust and look forward to serving you. We will notify you as soon as your request has been successfully completed.

Thank you for being a valued customer.

Best Regards,
The GradUp Team`,
  }
  console.log('mail sent')
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

export async function POST(request) {
  try {
    const reqBody = await request.json()

    const { email, id, mid, amount } = reqBody
    console.log(email, id[0])
    const date = new Date()
    const receiverEmail = [email, 'gradup.ops@gmail.com']
    await sendEmailAsync(receiverEmail, id[0], mid, amount, date)

    return NextResponse.json({ message: 'mail sent' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
