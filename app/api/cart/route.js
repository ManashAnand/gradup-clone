import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Cart from '@models/cart'
import Courses from '@models/courses'
import Enrollment from '@models/enrollment'

export async function GET(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const email = url.searchParams.get('email')

    const cartData = await Cart.find({ userId: email })
    const cartIds = cartData.map((cart) => {
      const courseIdString = cart.courseId.toString()
      return courseIdString
    })

    const coursesData = await Courses.find({ _id: { $in: cartIds } })
      .select('_id imageURL price title author')
      .populate('author')
    const enrollment = await Enrollment.find({ userId: email }).populate(
      'courseId'
    )
    console.log(enrollment)
    const data = {
      course: coursesData,
      enrollment,
    }
    console.log(data)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Error while getting courses' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    await connectToDB()

    const reqBody = await request.json()

    const { userId, courseId } = reqBody

    await Cart.create({
      userId,
      courseId,
    })
    return NextResponse.json({ message: 'Cart created' }, { status: 201 })
  } catch (error) {
    error
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const userId = url.searchParams.get('email')
    const courseId = url.searchParams.get('courseId')

    await Cart.findOneAndDelete({
      userID: userId,
      courseID: courseId,
    })
    return NextResponse.json({ message: 'deleted' }, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
