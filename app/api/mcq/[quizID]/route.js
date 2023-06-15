import { connectToDB } from '@utils/database';
import {Quiz} from '@models/mcq';
import mongoose from 'mongoose';

export const GET = async(req, { params }) => {
    try {
        const quizID = params.quizID
        await connectToDB();
        // await Quiz.create({
        //     _id:"engg",
        //     title:"Pro Dev Test",
        //     description:"Are you a pro dev? Check ri8 now.",
        //     questions:[
        //         {
        //             question: "Question 1",
        //             options: ["Option 1", "Option 2", "Option 3"],
        //             answer: 1,
        //           },
        //           {
        //             question: "Question 2",
        //             options: ["Option 1", "Option 2", "Option 3"],
        //             answer: 2,
        //           },
        //     ]
        // })
        const QuizDetails = await Quiz.findOne({_id:quizID});
        return new Response(JSON.stringify(QuizDetails), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get Hackathon Details"+error, {
            status: 500
        })
    }
}