import { connectToDB } from '@utils/database'
import Courses from '@models/courses'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectToDB()
  try {
    const data = await Courses.find().select('-VideoURL')

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
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
    const { title, price, img } = reqBody
    await Courses.create({
      title,
      description: ' ',
      price,
      author: '',
      chapter: 'test-chapter',
      chapterDesc: 'test-desc',
      VideoURL: '124',
      imageURL: img,
      registeredUsers: 1,
      tags: '',
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
