import Application from "@models/application";
import User from "models/user"
import { connectToDB } from "@utils/database";

export const POST = async(request) => {
    const { coverLetter, userId, projects, jobId, resume, joiningDate, CTC } = await request.json();
    console.log(userId);
    await connectToDB();
    const currentUser = await User.findById(userId);
    console.log(currentUser);
    try {


        const allProjects = currentUser.project
        const selectedProject = []
        for (let i = 0; i < allProjects.length; i++) {
            if (projects.includes(allProjects[i].id)) selectedProject.push(allProjects[i])
        }
        const newApplication = new Application({
            userID: userId,
            name: currentUser.name,
            jobID: jobId,
            contactNo: currentUser.contactNo,
            coverLetter: coverLetter,
            education: currentUser.education,
            resumeURL: resume,
            project: selectedProject,
            bio: currentUser.bio,
            experience: currentUser.experience,
            social: currentUser.social,
            skills: currentUser.skills,
            location: currentUser.location,
            gender: currentUser.gender,
            achievement: currentUser.achievement,
            expectedJoiningDate: joiningDate,
            expectedCTC: CTC
        });

        const newApplicationID = await newApplication.save();
        console.log(newApplicationID)
        return new Response(JSON.stringify(newApplication), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new prompt", { status: 500 });
    } finally {
        console.log(currentUser);
    }
}