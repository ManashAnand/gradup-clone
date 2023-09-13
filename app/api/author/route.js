import { connectToDB } from '@utils/database'
import Author from '@models/author'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    await connectToDB()

    const reqBody = await request.json()

    const { name, designation, description, imageURL } = reqBody

    await Author.create({
      name,
      description,
      designation,
      imageURL,
    })
    return NextResponse.json({ message: 'author created' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
