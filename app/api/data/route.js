import { NextResponse } from 'next/server'
import { createObjectCsvWriter } from 'csv-writer'
import nodemailer from 'nodemailer'
import fs from 'fs'

let data = []

function sendEmailAsync(email) {
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
    to: email,
    subject: 'User Data for Sales Team',
    text: `data`,
    attachments: [
      {
        filename: 'test.csv',
        path: 'test.csv',
      },
    ],
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        // Email sent successfully, so now delete the test.csv file
        fs.unlink('test.csv', (deleteError) => {
          if (deleteError) {
            console.error('Error deleting the file:', deleteError)
          } else {
            console.log('File deleted successfully')
          }
        })
        resolve(info)
      }
    })
  })
}

export async function GET(req) {
  try {
    const email = 'gradup.ops@gmail.com'
    await sendEmailAsync(email)

    return NextResponse.json({ message: 'mail sent' }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const reqBody = await req.json()
    const { email, course, price } = reqBody
    data.push({ email, course, price })
    const csvWriter = createObjectCsvWriter({
      path: 'test.csv',
      header: [
        { id: 'email', title: 'Email' },
        { id: 'course', title: 'Course' },
        { id: 'price', title: 'Price' },
      ],
    })

    await csvWriter.writeRecords(data)
    return NextResponse.json({ message: 'data stored' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
