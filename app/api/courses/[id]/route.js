import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Courses from '@models/courses'
export async function GET(req, { params }) {
  try {
    await connectToDB()

    const data = await Courses.findOne({ _id: params.id })
      .select('-VideoURL')
      .populate('author faq')

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
