import { connectToDB } from '@utils/database'
import Courses from '@models/courses'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectToDB()
  try {
    const data = await Courses.find().populate('author')
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    await connectToDB()

    const reqBody = await request.json()

    const {
      title,
      price,
      imageURL,
      moduleData,
      description,
      author,
      demoVideoURL,
      registeredUsers,
      tags,
      totalModules,
      totalLectures,
      Review,
      rating,
      faq,
      progressBar,
    } = reqBody

    await Courses.create({
      title,
      description,
      price,
      author,
      imageURL,
      moduleData,
      demoVideoURL,
      registeredUsers,
      totalModules,
      totalLectures,
      tags,
      Review,
      rating,
      faq,
      progressBar,
    })
    return NextResponse.json({ message: 'course created' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
