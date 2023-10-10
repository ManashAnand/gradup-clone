import { connectToDB } from '@utils/database'
import Blog from '@models/blogs'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectToDB()
  try {
    const data = await Blog.find().populate('author')
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

    const { topic, intro, img, author, content } = reqBody

    await Blog.create({
      topic,
      intro,
      img,
      content,
      author,
    })
    return NextResponse.json({ message: 'blog created' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
