import { schedule } from 'node-cron'
import { NextResponse } from 'next/server'

function fetchData() {
  return fetch('https://www.gradup.in/api/data').then((response) =>
    response.json()
  )
}

// Function to update data (POST request)
function updateData() {
  return fetch('https://www.gradup.in/api/hr', {
    method: 'PUT',
  }).then((response) => response.json())
}

function myTask() {
  console.log('Task is executed at', new Date())
  fetchData()
    .then((data) => {
      console.log('Data fetched:', data)
      return updateData()
    })
    .then((updateResponse) => {
      console.log('Data updated:', updateResponse)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
// Schedule the task to run every day mid-night
const job = schedule('0 0 * * *', myTask)
export const POST = async () => {
  return NextResponse.json(
    { message: 'Triggred Successfully' },
    { status: 200 }
  )
}
