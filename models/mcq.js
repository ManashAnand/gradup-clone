import { Schema, model, models } from 'mongoose';

const QuestionSchema = new Schema({
    question:{
        type:String
    },
    options:{
        type:[String]
    },
    answer:{
        type:Number
    }
})

const QuizSchema = new Schema({
    _id:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    questions:{
        type:[QuestionSchema],
    }
});


export const Quiz = models.Quiz || model("Quiz", QuizSchema);