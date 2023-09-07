import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Enrollment from '@models/enrollment'

import Courses from '@models/courses'
import { NextRequest } from 'next/server'

export async function GET(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const email = url.searchParams.get('email')

    const enrollments = await Enrollment.find({ userId: email })

    const courseIds = enrollments.map((enrollment) => enrollment.courseId)
    const data = await Courses.find({ _id: { $in: courseIds } })
    return NextResponse.json(data, { status: 200 })
    // get all enrollments
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json(
      { error: 'error while getting courses' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    await connectToDB()

    const reqBody = await request.json()

    const { userId, courseId, progressBar } = reqBody
    console.log(reqBody)

    await Enrollment.create({
      userId,
      courseId,
      progress: 0,
      progressBar,
    })
    return NextResponse.json({ message: 'enrollment created' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
