import { connectToDB } from '@utils/database';
import {Quiz} from '@models/mcq';
import mongoose from 'mongoose';

export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        const QuizDetails = await Quiz.find({}).select("_id title description");

        // console.log("Quiz", QuizDetails);
        return new Response(JSON.stringify(QuizDetails), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get QUIZ Details"+error, {
            status: 500
        })
    }
}