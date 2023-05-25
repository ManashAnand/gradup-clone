import { connectToDB } from '@utils/database';
import { User } from '@models/user';
import mongoose from 'mongoose';

export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        console.log(params, "params in user")
        console.log("Requesting data in get");
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
                        "education.$.startYear": new Date(),
                        "education.$.endYear": new Date(),
                            }
                    })
                return new Response(("Education Updated"), { status: 201 })
            } else if(action=="create") {
                const newEducationCreated = currentUser.education.push({
                    collegeName: data.collegeName,
                    degreeName: data.degreeName,
                    branch: data.branch,
                    grade: data.grade,
                    startYear: new Date(),
                    endYear: new Date(),
                });
                await currentUser.save()
                return new Response(("New Education Added"), { status: 201 })
            }
        }

        return new Response("Error", { status: 500 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to Perform Action by User", { status: 500 });
    } finally {

    }
}