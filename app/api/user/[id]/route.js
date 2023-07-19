import { connectToDB } from '@utils/database';
import  User  from '@models/user';
import mongoose from 'mongoose';

export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        if (params.id != "undefined") {
            const userDetails = await User.findOne({ _id: new mongoose.Types.ObjectId(params.id) });
            return new Response(JSON.stringify(userDetails), { status: 201 })
        }
        return new Response("Error", { status: 500 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get User Details", {
            status: 500
        })
    }

}

export const PATCH = async(request, { params }) => {
    const data = await request.json();
    console.log(data);
    try {
        await connectToDB();
        console.log(params)
        const existingUser = await User.findById(params.id);

        if (!existingUser) {
            return new Response("User not found", { status: 404 });
        }
        await existingUser.save();
        return new Response("Successfully updated the User Data", { status: 200 });
    } catch (error) {
        return new Response("Error Updating User Data", { status: 500 });
    }
};



export const POST = async(request, { params }) => {

    try {
        console.log("Requesting data in post");
        const data = await request.json();
        await connectToDB();
        const currentUser = await User.findById(params.id);
        const search = new URL(request.url).search;
        const urlParams = new URLSearchParams(search);
        const type = urlParams.get('type');
        const action = urlParams.get('action');
        if (type == "education") {
            if (action == "delete") {
                currentUser.education.id(data.id).deleteOne();
                await currentUser.save();
                return new Response(("Education Deleted"), { status: 201 })
            } else if (action == "update") {
                const id = {
                    "_id": params.id,
                    "education._id": data.id
                };
                const updateUser = await User.findOneAndUpdate(id, {
                    "$set":{
                        "education.$.collegeName": data.collegeName,
                        "education.$.degreeName": data.degreeName,
                        "education.$.branch": data.branch,
                        "education.$.grade": data.grade,
                        "education.$.startYear": data.startYear,
                        "education.$.endYear": data.endYear,
                            }
                    })
                return new Response(("Education Updated"), { status: 201 })
            } else if(action=="create") {
                const newEducationCreated = currentUser.education.push({
                    collegeName: data.collegeName,
                    degreeName: data.degreeName,
                    branch: data.branch,
                    grade: data.grade,
                    startYear: data.startYear,
                    endYear: data.endYear,
                });
                await currentUser.save()
                return new Response(("New Education Added"), { status: 201 })
            }
        }
        if (type == "achievement") {
            if (action == "delete") {
                currentUser.achievement.id(data.id).deleteOne();
                await currentUser.save();
                return new Response(("Achievement Deleted"), { status: 201 })
            } else if (action == "update") {
                const id = {
                    "_id": params.id,
                    "achievement._id": data.id
                };
                const updateUser = await User.findOneAndUpdate(id, {
                    "$set":{
                        "achievement.$.achievementName": data.achievementName,
                        }
                    })
                return new Response(("Achievement Updated"), { status: 201 })
            } else if(action=="create") {
                const newAchievementCreated = currentUser.achievement.push({
                    achievementName: data.achievementName,
                });
                await currentUser.save()
                return new Response(("New Achievement Added"), { status: 201 })
            }
        }

        if (type == "experience") {
            if (action == "delete") {
                currentUser.experience.id(data.id).deleteOne();
                await currentUser.save();
                return new Response(("Experience Deleted"), { status: 201 })
            } else if (action == "update") {
                const id = {
                    "_id": params.id,
                    "experience._id": data.id
                };
                const updateUser = await User.findOneAndUpdate(id, {
                    "$set":{
                        "experience.$.companyName": data.companyName,
                        "experience.$.location": data.location,
                        "experience.$.title": data.title,
                        "experience.$.skills": data.skills,
                        "experience.$.startDate": data.startDate,
                        "experience.$.endDate": data.endDate,
                        "experience.$.description": data.description,
                            }
                    })
                return new Response(("Experience Updated"), { status: 201 })
            } else if(action=="create") {
                const newExperienceCreated = currentUser.experience.push({
                    companyName: data.companyName,
                    location: data.location,
                    title: data.title,
                    skills: data.skills,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description:data.description,
                });
                await currentUser.save()
                return new Response(("New Experience Added"), { status: 201 })
            }
        }

        if (type == "project") {
            if (action == "delete") {
                currentUser.project.id(data.id).deleteOne();
                await currentUser.save();
                return new Response(("Project Deleted"), { status: 201 })
            } else if (action == "update") {
                const id = {
                    "_id": params.id,
                    "project._id": data.id
                };
                const updateUser = await User.findOneAndUpdate(id, {
                    "$set":{
                        "project.$.projectName": data.projectName,
                        "project.$.skillsUsed": data.skillsUsed,
                        "project.$.branch": data.branch,
                        "project.$.grade": data.grade,
                            }
                    })
                return new Response(("Project Updated"), { status: 201 })
            } else if(action=="create") {
                const newProjectCreated = currentUser.project.push({
                    projectName:data.projectName,
                    skillsUsed:data.skillsUsed,
                    projectDes:data.projectDes,
                    projectLinks:data.projectLinks
                });
                await currentUser.save()
                return new Response(("New Project Added"), { status: 201 })
            }
        }

        if(type=="alumni" && action=="update"){
            const updateUser = await User.findOneAndUpdate({_id:params.id}, {
                    "$set":{
                        "isAlumni": true,
                        }
                    })
            return new Response(("Alumni Updated"), { status: 201 })
        }


        return new Response("Error", { status: 500 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to Perform Action by User", { status: 500 });
    } finally {

    }
}