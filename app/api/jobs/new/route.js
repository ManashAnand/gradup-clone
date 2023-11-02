import Job from '@models/job'
import HR from '@models/hr'
import { connectToDB } from '@utils/database'

export const POST = async (request) => {
  const data = await request.json()
  try {
    await connectToDB()
    const curr = new Date()
    const currentHR = await HR.findById(data.HRId)
    const newJob = new Job({
      hrId: data.HRId,
      logo: currentHR.companyPhoto,
      isStartUp: data.isStartUp,
      title: data.title,
      location: data.location,
      isIntern: data.isIntern,
      companyName: data.companyName,
      companyLink: data.companyLink,
      duration: data.duration,
      stipend: data.stipend,
      lastDate: data.lastDate,
      expectedStartDate: data.expectedStartDate,
      skillsRequired: data.skillsRequired.split(','),
      eligiblilty: data.eligiblilty,
      perks: data.perks,
      noOfOpenings: data.noOfOpenings,
      workingHours: data.workingHours,
      postedDate: curr,
      responsilities: data.responsibilities,
      description: data.description,
      aboutCompany: currentHR.aboutCompany,
    })

    const addedObj = await newJob.save()
    currentHR.posts.push({
      title: addedObj.title,
      status: true,
      impression: 0,
      _id: addedObj._id,
    })
    await currentHR.save()
    return new Response('New Job Added', { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response('Failed to create a new prompt', { status: 500 })
  }
}
