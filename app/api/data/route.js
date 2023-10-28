import { NextResponse } from 'next/server'
import fs from 'fs'
import { createObjectCsvWriter } from 'csv-writer'
export async function POST(req) {
  try {
    const reqBody = await req.json()
    const { email, course } = reqBody

    const csvWriter = createObjectCsvWriter({
      path: 'test.csv',
      header: [
        { id: 'name', title: 'Name' },
        { id: 'course', title: 'Course' },
      ],
    })
    await csvWriter.writeRecords({ email, course })
    const csv = await csvWriter.toString()
    fs.writeFileSync('data.csv', csv, 'utf8')
    return NextResponse.json({ message: 'data stored' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET(req) {
  try {
    const csvWriter = createObjectCsvWriter({
      path: 'test.csv',
      header: [
        { id: 'name', title: 'Name' },
        { id: 'course', title: 'Course' },
      ],
    })
    await csvWriter.writeRecords(data)
    const csv = await csvWriter.toString()
    fs.writeFileSync('data.csv', csv, 'utf8')
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
