import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Courses from '@models/courses'
import Enrollment from '@models/enrollment'
export async function GET(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const path = url.pathname
    const email = url.searchParams.get('email')
    const id = path.split('enrolledcourses/')[1].split('?')[0]
    /*
    const enrollmentData = await Enrollment.findOne({
      userId: email,
      courseId: id,
    }).select('-userId -courseId')
    
    if (!enrollmentData) {
      return NextResponse.json(
        { message: 'The logged-in user is not enrolled in this course' },
        { status: 200 }
      )
    }
    */

    const courseData = await Courses.findOne({ _id: id })
    if (!courseData) {
      return NextResponse.json(
        { error: `No course found with the ID ${id}` },
        { status: 404 }
      )
    }

    const data = {
      course: courseData,
      //enrollment: enrollmentData,
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
    console.log('request is working')
    {
      /* Destructure the Progress Array here  */
    }
    const requestBody = await req.json()

    const progressBar = requestBody.requestBody.updatedArray
    const _id = requestBody.requestBody.id
    console.log(progressBar)
    const trueCount = progressBar.filter((value) => value === true).length
    console.log(trueCount)
    const totalCount = progressBar.length
    const progress = (trueCount / totalCount) * 100
    console.log(progress)

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
