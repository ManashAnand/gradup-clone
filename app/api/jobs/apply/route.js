import Application from '@models/application'
import User from '@models/user'
import HR from '@models/hr'
import { connectToDB } from '@utils/database'
import Job from '@models/job'
export const POST = async (request) => {
  const { userId, jobId, resume, joiningDate, CTC } = await request.json()
  await connectToDB()
  const currentUser = await User.findById(userId)
  try {
    const allProjects = currentUser.project
    // const selectedProject = []
    // for (let i = 0; i < allProjects.length; i++) {
    //     if (projects.includes(allProjects[i].id)) selectedProject.push(allProjects[i])
    // }
    const applicationAlreadyExists = await Application.findOne({
      _id: jobId + '_' + userId,
    })

    if (applicationAlreadyExists)
      return new Response('You Have Already Applied.', { status: 501 })
    const newApplication = new Application({
      _id: jobId + '_' + userId,
      userID: userId,
      name: currentUser.name,
      jobID: jobId,
      contactNo: currentUser.contactNo,
      education: currentUser.education,
      resumeURL: resume,
      project: allProjects,
      bio: currentUser.bio,
      experience: currentUser.experience,
      social: currentUser.social,
      skills: currentUser.skills,
      location: currentUser.location,
      gender: currentUser.gender,
      achievement: currentUser.achievement,
      expectedJoiningDate: joiningDate,
      expectedCTC: CTC,
      email: currentUser.email,
    })

    await newApplication.save()
    const currUser = await User.findOne({ _id: userId })
    currUser.appliedJobs.push(jobId)
    await currUser.save()
    const currJob = await Job.findOne({ _id: jobId })
    currJob.appliedCandidates.push(userId)
    await currJob.save()
    //get hr id from job
    const hr = await HR.findOne({ _id: currJob.hrId })
    const jobIndex = hr.posts.findIndex((job) => job._id.equals(jobId))
    console.log(jobIndex)
    const updateImpression = await HR.findOneAndUpdate(
      { _id: userId, 'posts._id': jobId },
      {
        $set: {
          'posts.$.impression': hr.posts[jobIndex].impression + 1,
        },
      },
      { new: true }
    )
    return new Response(JSON.stringify(newApplication), { status: 201 })
  } catch (error) {
    console.log('error while appling for jobs', error)
    return new Response('Failed to create a new prompt', { status: 500 })
  } finally {
  }
}
