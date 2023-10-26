import { schedule } from 'node-cron'
import { NextResponse } from 'next/server'

function myTask() {
  console.log('Task is executed at', new Date())
}
// Schedule the task to run every minute
const job = schedule('* * * * *', myTask)
export const POST = async () => {
  return NextResponse.json(
    { message: 'Triggred Successfully' },
    { status: 200 }
  )
}
