import { connectToDB } from '@utils/database';
import {User} from '@models/user';
import mongoose from 'mongoose';

export const POST = async(request, { params }) => {
    try {
        const data = await request.json();
        await connectToDB();
        const alumni = await User.find({
            "education":{
                $elemMatch:{
                    "collegeName":data.college,
                }
            }
        }).select("name profilePhoto");
        return new Response(JSON.stringify(alumni), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get Alumni Details", {
            status: 500
        })
    }
}