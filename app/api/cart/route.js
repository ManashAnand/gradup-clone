import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Courses from '@models/courses'
import Cart from '@models/cart'

export async function GET(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const path = url.pathname
    const email = 'diyanshr@gmail.com' // url.searchParams.get('email')

    const cartData = await Cart.find({ userId: email })
    console.log(cartData)
    const cartIds = cartData.map((cart) => {
      // Manually convert _id to a string
      const courseIdString = cart.courseId.toString()
      return courseIdString
    })
    console.log(cartIds)
    const coursesData = await Courses.find({ _id: { $in: cartIds } })

    const data = {
      course: coursesData,
    }
    console.log(data)

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log('Error', error)
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
    console.log(reqBody)

    await Cart.create({
      userId,
      courseId,
    })
    return NextResponse.json({ message: 'Cart created' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
