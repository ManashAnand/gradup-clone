import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Courses from '@models/courses'
import Enrollment from '@models/enrollment'
export async function GET(req, { params }) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const email = url.searchParams.get('email')
    console.log(params.id)

    const enrollmentData = await Enrollment.findOne({
      userId: email,
      courseId: params.id,
    }).select('-userId -courseId')

    if (enrollmentData == null) {
      console.log(enrollmentData)
      return NextResponse.redirect(new URL('/mycourses', req.nextUrl))
    }

    const courseData = await Courses.findOne({ _id: params.id })
    if (!courseData) {
      return NextResponse.redirect(new URL('/mycourses', req.nextUrl))
    }

    const data = {
      course: courseData,
      enrollment: enrollmentData,
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json(
      { error: 'Error while getting courses' },
      { status: 500 }
    )
  }
}
/*
export async function GET(req) {
  try {
    const id = req.url.split('enrolledcourses/')[1]
    await connectToDB()

    const data = await Courses.find({ _id: { $in: id } })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json(
      { error: 'error while getting courses' },
      { status: 500 }
    )
  }
}
*/
export async function PATCH(req) {
  try {
    await connectToDB()

    {
      /* Destructure the Progress Array here  */
    }
    const requestBody = await req.json()

    const progressBar = requestBody.requestBody.updatedArray
    const progress = requestBody.requestBody.progress
    const _id = requestBody.requestBody.id

    {
      /*Update the value of changed Progress Bar array */
    }

    await Enrollment.findByIdAndUpdate(_id, {
      $set: { progressBar: progressBar, progress: progress },
    })
    console.log('sending the response')
    return NextResponse.json(
      { message: 'Progress updated successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Encountered Problem while updating the database' },
      { status: 200 }
    )
  }
}
