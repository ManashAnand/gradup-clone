import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

function sendEmailAsync(receiverEmail, message) {
  const emailFrom = 'gradup.ops@gmail.com'
  const emailPassword = process.env.MAIL

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
    to: receiverEmail,
    subject: `${message}`,
    text: `Your request regarding ${message} have been submitted`,
  }
  console.log('here')
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

    const { email, id } = reqBody
    console.log(email, id[0])
    await sendEmailAsync(email, id[0])
    //const emailToGradup = await sendEmailAsync('gradup.ops@gmail.com', id)

    return NextResponse.json({ message: 'mail sent' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
