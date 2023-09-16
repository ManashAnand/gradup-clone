import { connectToDB } from '@utils/database'
import FAQ from '@models/faq'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    await connectToDB()

    const reqBody = await request.json()

    const { faq } = reqBody

    await FAQ.create({
      faq,
    })
    return NextResponse.json({ message: 'faq created' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
