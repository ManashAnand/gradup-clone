import { connectToDB } from '@utils/database'
import { NextResponse } from 'next/server'
import Blogs from '@models/blogs'
export async function GET(req) {
  try {
    await connectToDB()
    const url = new URL(req.url)
    const path = url.pathname
    const id = path.split('blogs/')[1]

    const data = await Blogs.findOne({ _id: id }).populate('author')

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
