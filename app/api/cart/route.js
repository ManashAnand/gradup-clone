import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Cart from '@models/cart'
import Courses from '@models/courses'

export async function GET(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const email = 'diyanshr@gmail.com' // url.searchParams.get('email')

    const cartData = await Cart.find({ userId: email })
    const cartIds = cartData.map((cart) => {
      // Manually convert _id to a string
      const courseIdString = cart.courseId.toString()
      return courseIdString
    })

    const coursesData = await Courses.find({ _id: { $in: cartIds } })
    .select('_id imageURL price title author');


    const data = {
      course: coursesData,
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
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
    (reqBody)

    await Cart.create({
      userId,
      courseId,
    })
    return NextResponse.json({ message: 'Cart created' }, { status: 201 })
  } catch (error) {
    (error)
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
    const userId = 'diyanshr@gmail.com'
    const courseId = url.searchParams.get('courseId')

    await Cart.findOneAndDelete({
      userID: userId,
      courseID: courseId,
    })
    return NextResponse.json({ message: 'deleted' })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}