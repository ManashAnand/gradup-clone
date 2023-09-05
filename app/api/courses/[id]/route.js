import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Courses from '@models/courses'
export async function GET(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const path = url.pathname
    const id = path.split('courses/')[1]

    const data = await Courses.findOne({ _id: id }).select('-VideoURL')

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
