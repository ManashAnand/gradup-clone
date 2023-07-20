import { connectToDB } from '@utils/database';
import {Quiz} from '@models/mcq';
import mongoose from 'mongoose';

export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        const QuizDetails = await Quiz.find({}).select("_id title description");
        return new Response(JSON.stringify(QuizDetails), { status: 201 })
    } catch (error) {
        return new Response("Failed to get QUIZ Details"+error, {
            status: 500
        })
    }
}