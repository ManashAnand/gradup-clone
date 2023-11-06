import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import HR from '@models/hr'

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
    text: `1`,
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

export async function GET(request) {
  try {
    const hrWithPosts = await HR.find({}, { email: 1, posts: 1 })

    // Transform the data structure to the desired format
    const hrData = hrWithPosts.map((hr) => {
      // Extract email and filter open job posts
      const openJobPosts = hr.posts.filter((post) => post.status === true)

      // Create an object containing email and job post details
      const hrInfo = {
        email: hr.email,
        jobPosts: openJobPosts.map((post) => ({
          title: post.title,
          impression: post.impression,
        })),
      }

      return hrInfo
    })
    console.log(hrData)
    //const date = new Date()
    //const receiverEmail = [, 'gradup.ops@gmail.com']
    //await sendEmailAsync(receiverEmail, id[0], mid, amount, date)

    return NextResponse.json({ message: 'mail sent' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
